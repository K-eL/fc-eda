import Account from "../../entity/account";
import AccountGateway from "../../gateway/account.gateway";
import { AccountModel } from "./account.model";

export default class AccountSequelizeRepository implements AccountGateway {

	async find(id: string): Promise<Account> {
		const response = await AccountModel.findOne({
			where: { clientId: id }
		});

		if (!response) {
			throw new Error("Account not found");
		}

		return new Account({
			clientId: response.clientId,
			balance: response.balance
		});
	}

	async save(account: Account): Promise<void> {

		const response = await AccountModel.findOne({
			where: { clientId: account.clientId }
		});

		if (!response) {
			await AccountModel.create({
				clientId: account.clientId,
				balance: account.balance
			});
		} else {
			await AccountModel.update({
				balance: account.balance
			}, {
				where: { clientId: account.clientId }
			});
		}
	}
}

