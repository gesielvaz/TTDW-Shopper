import "reflect-metadata";
import "dotenv/config";

import Server from "./src/server/app";
import { AppDataSource } from "./src/database/db";

async function main() {
  try {
    AppDataSource.initialize()
      .then(() => {
        console.log("Data Source has been initialized");
        const server = new Server();
        server.listen();
      })
      .catch((err: any) => {
        console.error("Data Source initialization error", err);
      });
  } catch (error) {
    console.log(error);
  }
}

main();
