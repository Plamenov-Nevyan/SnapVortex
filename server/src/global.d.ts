declare namespace NodeJS {
    interface ProcessEnv {
        JWT_SECRET : string;
        SALT_ROUNDS : string;
        MONGO_URI : string;
        SERVER_PORT : string;
        EmailVerificationKey:string
        GMAIL_EMAIL : string
        GOOGLE_REFRESH_TOKEN : string
        GOOGLE_CLIENT_ID :  string
        GOOGLE_CLIENT_SECRET :  string,
        GOOGLE_USERNAME :string
        GOOGLE_APP_PASSWORD : string 
    }
}