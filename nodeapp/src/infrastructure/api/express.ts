import express, { Express } from "express";
import { accountRoute } from "./routes/account.route";
import setupDb from "../../../data/db.setup";

export const app: Express = express();
app.use(express.json());
app.use("/accounts", accountRoute);

setupDb();
