import AccountRepositoryFactory from "../domain/account/factory/account.repository.factory";
import SaveAccountUseCase from "../domain/account/usecase/save/save.account.usecase";
import EventListenerInterface from "./event-listener.interface";
import { OnKafkaBalanceUpdated, OnKafkaBalanceUpdatedEventPayload } from "./on-kafka-balance-updated.event";

export default class OnKafkaBalanceUpdatedHandler implements EventListenerInterface<OnKafkaBalanceUpdatedEventPayload> {

	constructor() {
		OnKafkaBalanceUpdated.getInstance().register(this);
	}

	public handleEvent(payload: OnKafkaBalanceUpdatedEventPayload): void {
		// save the balance to the database
		try {
			// account 1
			const account1 = {
				clientId: payload.Payload.account_id_from,
				balance: payload.Payload.balance_account_id_from
			};
			// account 2
			const account2 = {
				clientId: payload.Payload.account_id_to,
				balance: payload.Payload.balance_account_id_to
			};
			const usecase = new SaveAccountUseCase(AccountRepositoryFactory.create());
			usecase.execute(account1);
			usecase.execute(account2);
		} catch (error) {
			console.error(error);
		}
	}
}