import { OutputFindAccountDto } from "../../../domain/account/usecase/find/find.account.usecase.dto";

export default class AccountPresenter {

	static findXML(data: OutputFindAccountDto): string {
		return `
			<account>
				<clientId>${data.clientId}</clientId>
				<balance>${data.balance}</balance>
			</account>
		`;
	}
}