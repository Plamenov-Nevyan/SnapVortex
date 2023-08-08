import express, { Express, Request } from "express"
import env from "./config/envConfig"
import { createServer} from "http"
import cors from "cors"
import { Socket } from "socket.io"
import routes from "./router/routes"
import expressConfig from "./config/express"
import mongoConfig from "./config/mongoDB"
import { createNotification, getNotifications } from "./services/notificationServices"
import { UserSocketData } from "./types/User"
const app: Express = express()
const http = createServer(app)
const socketIo = require("socket.io")(http, {
    cors : {
        origin : 'http://localhost:4200'
    }
})


expressConfig(app)
app.use(cors<Request>())
app.use(routes)

let activeUsers: UserSocketData[] = []

socketIo.on('connection', (socket: Socket) => {
    socket.on('askForNotifications', async (userId: string) => {
       let notifications = await getNotifications(userId)
        socket.to(socket.id).emit('receiveNotifications', notifications)
    })
    socket.on('sendNotification', async (notificationData) => {
        let newNotification = await createNotification(notificationData)
        let receiver = activeUsers.find(user => user.userId === notificationData.receiver)
        if(receiver){
            socket.to(receiver.socketId).emit('newNotification', (newNotification))
        }
    })
    socket.on('userSignIn', (userId: string) => {
        activeUsers.push({
            socketId: socket.id,
            userId: userId
        })
        console.log(activeUsers)
    })
})


mongoConfig()
.then(() => http.listen(env.SERVER_PORT, () => {
    console.log(`Surver is running on port ${Number(env.SERVER_PORT)}...`)
 })  
)
.catch((err: Error) => console.log(err))