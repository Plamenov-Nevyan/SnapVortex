import path from "path";
import dotenv from "dotenv"

dotenv.config({
    path : path.resolve(__dirname, "./config.env")
})

interface envVariables {
    JWT_SECRET : string | undefined;
    SALT_ROUNDS : number | undefined;
    MONGO_URI : string | undefined;
    SERVER_PORT : number | undefined;
    EmailVerificationKey:string | undefined;
    GMAIL_EMAIL : string | undefined
    GOOGLE_REFRESH_TOKEN : string | undefined
    GOOGLE_CLIENT_ID :  string | undefined
    GOOGLE_CLIENT_SECRET :  string | undefined
    GOOGLE_USERNAME :string | undefined
    GOOGLE_APP_PASSWORD : string | undefined
}

interface dotEnvConfig {
    JWT_SECRET : string;
    SALT_ROUNDS : number;
    MONGO_URI : string;
    SERVER_PORT : number;
    EmailVerificationKey:string
    GMAIL_EMAIL : string
    GOOGLE_REFRESH_TOKEN : string
    GOOGLE_CLIENT_ID :  string
    GOOGLE_CLIENT_SECRET :  string
    GOOGLE_USERNAME :string
    GOOGLE_APP_PASSWORD : string 
}

const getEnvConfig = () : envVariables => {
    return {
        JWT_SECRET : process.env.JWT_SECRET,
        SALT_ROUNDS : Number(process.env.SALT_ROUNDS),
        MONGO_URI : process.env.MONGO_URI,
        SERVER_PORT : process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : undefined,
        EmailVerificationKey:process.env.EmailVerificationKey,
        GMAIL_EMAIL : process.env.GMAIL_EMAIL,
        GOOGLE_REFRESH_TOKEN : process.env.GOOGLE_REFRESH_TOKEN,
        GOOGLE_CLIENT_ID : process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET : process.env.GOOGLE_CLIENT_SECRET,
        GOOGLE_USERNAME : process.env.GOOGLE_USERNAME,
        GOOGLE_APP_PASSWORD :  process.env.GOOGLE_APP_PASSWORD
    }
}

const getSanitizedEnvConfig = (envConfig : envVariables) : dotEnvConfig => {
    for(let [key, value] of Object.entries(envConfig)){
        if(value === undefined){throw new Error(`The value for ${key} is missing!`)}
    }
    return envConfig as dotEnvConfig
}

const dotEnvConfig = getEnvConfig()
const dotEnvSanitizedConfig = getSanitizedEnvConfig(dotEnvConfig)

export default dotEnvSanitizedConfig