import Account from "../../entity/account";
import AccountGateway from "../../gateway/account.gateway";
import { InputSaveAccountDto } from "./save.account.usecase.dto";

export default class SaveAccountUseCase {
	constructor(
		private accountRepository: AccountGateway
	) { }

	async execute(input: InputSaveAccountDto): Promise<void> {
		const account = new Account({
			clientId: input.clientId,
			balance: input.balance
		});
		await this.accountRepository.save(account);
	}
}