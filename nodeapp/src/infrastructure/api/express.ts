import express, { Express } from "express";
import { dbConfig } from "../../../data/db.config";
import { Sequelize } from "sequelize-typescript";
import { accountRoute } from "./routes/account.route";
import { AccountModel } from "../../domain/account/repository/sequelize/account.model";
import { Dialect } from "sequelize";

export const app: Express = express();
app.use(express.json());
app.use("/accounts", accountRoute);

export let sequelize: Sequelize;

async function setupDb() {
  sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect as Dialect,
    logging: dbConfig.logging,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });
  sequelize.addModels([AccountModel]);
  await sequelize.sync();
}
setupDb();
