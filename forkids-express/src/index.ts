// src/index.ts
import express, { NextFunction, Request, Response } from "express";

const app = express();
import connectDB from "./loaders/db";
import routes from './routes';
require('dotenv').config();

connectDB();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(routes);

// error handler
interface ErrorType {
    message: string;
    status: number;
}

app.use(function (err: ErrorType, req: Request, res: Response, next: NextFunction) {

    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "production" ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render("error");
  });
  
  app
    .listen(process.env.PORT, () => { 
      // 포트 열어주기: env에 포트있으니가 여기선 따로 안해줘도댐
      console.log(`
      ################################################
            🛡️  Server listening on port 🛡️
      ################################################
    `);
    })
    .on("error", (err) => {
      console.error(err);
      process.exit(1);
    });