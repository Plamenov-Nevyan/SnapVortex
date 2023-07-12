declare namespace NodeJS {
    interface ProcessEnv {
        JWT_SECRET : string;
        SALT_ROUNDS : string;
        MONGO_URI : string;
        SERVER_PORT : string;
    }
}