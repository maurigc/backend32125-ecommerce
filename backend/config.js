import MongoStore from "connect-mongo";
import dotenv from "dotenv";

dotenv.config();

const config = {
    mongoDb: {
        url: process.env.URL_MONGO_LOCAL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    mysql: {
        client: "mysql",
        connection: {
            host: "127.0.0.1",
            user: "root",
            password: "",
            database: "ecommerce"
        }
    },
    session: {
        secret: process.env.SECRET_WORD,
        store: MongoStore.create({
            mongoUrl: process.env.URL_MONGO_ATLAS,
            mongoOptions: {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        }),
        cookie: {
            maxAge: 60000 * 10
        },
        resave: true,
        saveUninitialized: true
    }
}

export { config };