import { app } from "../express";
import request from "supertest";
import { Sequelize } from "sequelize-typescript";
import AccountRepositoryFactory from "../../../domain/account/factory/account.repository.factory";
import SaveAccountUseCase from "../../../domain/account/usecase/save/save.account.usecase";
import sqlite3 from "sqlite3";
import { AccountModel } from "../../../domain/account/repository/sequelize/account.model";

const sequelize = new Sequelize({
	dialect: "sqlite",
	storage: ":memory:",
	logging: false,
	dialectModule: sqlite3
});
sequelize.addModels([AccountModel]);

describe("E2E test for account", () => {

	beforeAll(async () => {
		await sequelize.sync({ force: true });
	});

	afterAll(async () => {
		await sequelize.close();
	});


	it("should return the account with the specified client ID", async () => {
		const usecase = new SaveAccountUseCase(AccountRepositoryFactory.create());
		await usecase.execute({
			clientId: "1",
			balance: 444
		});

		const jsonResponse = await request(app)
			.get("/accounts/1")
			.set("Accept", "application/json")

		expect(jsonResponse.status).toBe(200);
		expect(jsonResponse.body.clientId).toBe("1");
		expect(jsonResponse.body.balance).toBeDefined();
	});

	it("should return an error if the account with the specified client ID does not exist", async () => {
		const response = await request(app)
			.get("/accounts/7965b679v5")
			.set("Accept", "application/json");

		expect(response.status).toBe(500);
		expect(response.text).toBe("Account not found");
	});

});