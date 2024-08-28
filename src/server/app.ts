
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";
import morgan from "morgan";
import postImg from "../routes/uploadImg.routes"
class Server {
  private server = express();
  private port = process.env.SERVER_PORT || 8081;

  private paths = {
    health: "/",
    postImg: "/api/postImg",
  };

  constructor() {
    this.middlewares();
    this.routes();
    this.server.use(this.errorHandler); // Use um middleware de erro customizado
  }

  private middlewares(): void {
    this.server.use(
      cors({
        origin: "*",
        methods: "GET, PUT, DELETE, POST, HEAD, PATCH",
        optionsSuccessStatus: 204,
      })
    );

    this.server.use(express.json({ limit: "60mb" }));
    this.server.use(bodyParser.json({ limit: "60mb" }));
    this.server.use(
      bodyParser.urlencoded({
        limit: "60mb",
        extended: true,
        parameterLimit: 60000,
      })
    );

    this.server.use(morgan("dev"));

    this.server.use(
      fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
        limits: {
          fileSize: 6144000, // 6MB
        },
      })
    );

    this.server.use(Error);
  }

  private routes() {
    this.server.get(this.paths.health, (req: Request, res: Response) => {
      res.send({
        status: true,
        version: 1.0,
        service: "turist",
      });
    });

    this.server.use(this.paths.postImg, postImg);
  }

  private errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    res.status(err.status || 500).send({ error: err.message || 'Internal Server Error' });
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log("Running server ", this.port);
    });
  }
}

export default Server;
