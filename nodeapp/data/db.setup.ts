import { Sequelize } from "sequelize-typescript";
import { dbConfig } from "./db.config";
import { AccountModel } from "../src/domain/account/repository/sequelize/account.model";
import { Dialect } from "sequelize";

export default async function setupDb() {
	const sequelize = new Sequelize(
		dbConfig.DATABASE,
		dbConfig.USER,
		dbConfig.PASSWORD, {
		host: dbConfig.HOST,
		dialect: dbConfig.dialect as Dialect,
		logging: dbConfig.logging,
		port: dbConfig.port,
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