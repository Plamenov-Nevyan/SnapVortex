import express, { Express, Request } from "express"
import env from "./config/envConfig"
import { createServer} from "http"
import cors from "cors"
import routes from "./router/routes"
import expressConfig from "./config/express"
import mongoConfig from "./config/mongoDB"

const app: Express = express()
const http = createServer(app)

expressConfig(app)
app.use(cors<Request>())
app.use(routes)


mongoConfig()
.then(() => http.listen(env.SERVER_PORT, () => {
    console.log(`Surver is running on port ${Number(env.SERVER_PORT)}...`)
 })  
)
.catch((err: Error) => console.log(err))