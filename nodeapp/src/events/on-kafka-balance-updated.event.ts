import { EventBase } from "./event.base";

export type OnKafkaBalanceUpdatedEventPayload = {
	Name: string,
	Payload: {
		account_id_from: string,
		account_id_to: string,
		balance_account_id_from: number,
		balance_account_id_to: number
	}
}

export class OnKafkaBalanceUpdated extends EventBase<OnKafkaBalanceUpdatedEventPayload> {

	constructor() {
		super();
	}
	private static _instance: OnKafkaBalanceUpdated;
	public static getInstance(): OnKafkaBalanceUpdated {
		this._instance = this._instance ?? new OnKafkaBalanceUpdated();
		return this._instance;
	}

}