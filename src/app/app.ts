import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import usersRouters from "../routers/users.routers";
import { createConnection } from "typeorm";
import "reflect-metadata";

export default class App {
       private app: Application;
       private port: number;

       constructor(port: number) {
              this.port = port;
              this.app = express();
              this.sittings();
              this.middleware();
              this.routes();
              createConnection();
       }

       sittings() {
              this.app.set("port", process.env.PORT || this.port);
       }

       middleware() {
              this.app.use(cors());
              this.app.use(morgan("dev"));
              this.app.use(express.json());
       }

       routes() {
              this.app.use(usersRouters);
       }

       async start() {
              await this.app.listen(this.app.get("port"));
              console.log(
                     "Server stating successfully in port " +
                            this.app.get("port")
              );
       }
}
