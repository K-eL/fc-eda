import Account from "../../../domain/account/entity/account";
import AccountRepositoryFactory from "../../../domain/account/factory/account.repository.factory";
import { app, sequelize } from "../express";
import request from "supertest";

describe("E2E test for account", () => {

	beforeEach(async () => {
		await sequelize.sync({ force: true });
	});

	afterAll(async () => {
		await sequelize.close();
	});

	it("should return the account with the specified client ID", async () => {
		const jsonResponse = await request(app)
			.get("/accounts/1")
			.set("Accept", "application/json")
			.expect("Content-Type", /json/)

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