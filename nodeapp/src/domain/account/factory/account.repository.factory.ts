import AccountGateway from "../gateway/account.gateway";
import AccountRepository from "../repository/account.repository";
import AccountSequelizeRepository from "../repository/sequelize/account.sequelize.repository";

export default class AccountRepositoryFactory {
	static create(): AccountGateway {
		return new AccountRepository(new AccountSequelizeRepository());
	};
}