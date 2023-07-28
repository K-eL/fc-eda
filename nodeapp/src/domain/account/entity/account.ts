export interface AccountProps {
	clientId?: string;
	balance: number;
}

export default class Account {

	private _clientId: string = "";
	private _balance: number = 0;

	constructor(props: AccountProps) {
		this._clientId = props.clientId || "";
		this._balance = props.balance;
		this.validate();
	}

	get clientId(): string {
		return this._clientId;
	}

	get balance(): number {
		return this._balance;
	}

	validate() {
		if (this._clientId.length === 0) {
			throw new Error("Id is required");
		}
	}

}