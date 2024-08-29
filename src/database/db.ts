import "dotenv/config";
import { DataSource } from "typeorm";
import { Register } from "../entities/register";



export const AppDataSource = new DataSource ( {
      type: "mysql",
      host: process.env.DATABASE_URL,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE,
      synchronize: true,
      logging: true,
      entities: [Register],
    }
);
