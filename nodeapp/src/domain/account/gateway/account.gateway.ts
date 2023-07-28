import Account from "../entity/account";

export default interface AccountGateway {
	save(account: Account): Promise<void>;
	find(id: string): Promise<Account>;
}
