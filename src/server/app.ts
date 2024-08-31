import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";
import morgan from "morgan";
import register from "../routes/register.routes";
import errorHandler from "../errors/errorHandler";

class Server {
  private server = express();
  private port = process.env.SERVER_PORT || 8081;

  private paths = {
    register: "/api/register",
  };

  constructor() {
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.server.use(cors({ origin: "*", methods: "GET, PUT, DELETE, POST, HEAD, PATCH", optionsSuccessStatus: 204 }));
    this.server.use(express.json({ limit: "60mb" }));
    this.server.use(bodyParser.json({ limit: "60mb" }));
    this.server.use(bodyParser.urlencoded({ limit: "60mb", extended: true, parameterLimit: 60000 }));
    this.server.use(morgan("dev"));
    this.server.use(fileUpload({ useTempFiles: true, tempFileDir: "/tmp/", limits: { fileSize: 6144000 } }));
  }

  private routes() {
    this.server.use(this.paths.register, register);
    this.server.use(errorHandler);
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log("Running server on port", this.port);
    });
  }
}

export default Server;
