import AccountGateway from "../../gateway/account.gateway";
import { InputFindAccountDto, OutputFindAccountDto } from "./find.account.usecase.dto";

export default class FindAccountUseCase {
	constructor(
		private accountRepository: AccountGateway
	) { }

	async execute(input: InputFindAccountDto): Promise<OutputFindAccountDto> {
		const account = await this.accountRepository.find(input.clientId);
		return {
			clientId: account.clientId,
			balance: account.balance,
		};
	}
}