import Account from "../../../domain/account/entity/account";
import AccountRepositoryFactory from "../../../domain/account/factory/account.repository.factory";
import SaveAccountUseCase from "../../../domain/account/usecase/save/save.account.usecase";
import { app, sequelize } from "../express";
import request from "supertest";

describe("E2E test for account", () => {

	it("should return the account with the specified client ID", async () => {
		const usecase = new SaveAccountUseCase(AccountRepositoryFactory.create());
		await usecase.execute({
			clientId: "1",
			balance: 100
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