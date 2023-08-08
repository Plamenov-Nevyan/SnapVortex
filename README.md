# SnapVortex
Exam project written with Angular (Frontend) and NodeJS(Backend) for the project defense in the 2023 Angular Module at Softuni

<h1>Description:</h1>
<p>
  The project resembles a basic form of social media. The users would be able to authenticate and create registrations, then they will have the ability to
  create, comment and like or dislike posts, find friends, chat and join groups with other users, and to upload photos. 
</p>
<hr />
<h1>Tech stack and libraries:</h1>
<h3>Frontend:</h3>
<ul>
  <li>Angular</li>
  <li>ngx-image-cropper</li>
  <li>socket.io-client</li>
</ul>
<h3>Backend:</h3>
<ul>
  <li>NodeJS</li>
  <li>Express</li>
  <li>socket.io</li>
  <li>googleapis</li>
  <li>nodemailer</li>
  <li>multer</li>
  <li>jsonwebtoken</li>
  <li>bcryptjs</li>
  <li>dotenv</li>
</ul>
<hr />
<h1><To run the project.../h1>
<p>You need to create dotenv in the config folder file with the following variables:</p>
<ul>
  <li>JWT_SECRET = /...your jsonwebtoken secret/</li>
  <li>SALT_ROUNDS= /any number/</li>
  <li>MONGO_URI = "mongodb://localhost:27017/... <-- the name you want for your database after the last dashline"</li>
  <li>SERVER_PORT = /the port on which you want to host your server (if it's different than 8000, you will have to make changes in the frontend for the socket.io connection)/</li>
  <li>EmailVerificationKey< = /unused at the moment, write anything you like</li>  
  <li>
    <p>
      The following variables are needed if you want for the email and image uploading systems to work. You will need to create Google App, enable OAuth2 authentication for the app
      and create a service worker for uploading images. 
    </p>
    <ul>
      <li>GOOGLE_REFRESH_TOKEN = "A token which you receive after enabling OAuth2 authentication"</li>
      <li>GOOGLE_CLIENT_ID = "An id you receive after creating the google app"</li>
      <li>GOOGLE_CLIENT_SECRET= "Same as above"</li>
      <li>GOOGLE_USERNAME="Your google profile username (without @ + anything after the @)"</li>
      <li>GOOGLE_APP_PASSWORD= "App password you receive after creating the app in the google console"</li>
    </ul>
    <p>I will try to link resources for steps on how to do all that later</p>
  </li>  
</ul>
 <p>  
  Write :
<blockquote>
  npm start
</blockquote>
    in both client and server terminal, the client will be hosted on http://localhost:4200, and server on http://localhost:8000
</p> 
