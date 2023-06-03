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