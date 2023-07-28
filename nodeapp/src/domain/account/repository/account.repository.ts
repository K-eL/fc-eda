import Account from "../entity/account";
import AccountGateway from "../gateway/account.gateway";

export default class AccountRepository implements AccountGateway {

	constructor(private repository: AccountGateway) { }

	async find(id: string): Promise<Account> {
		return await this.repository.find(id);
	}

	async save(account: Account): Promise<void> {
		await this.repository.save(account);
	}

}
