import SaveAccountUseCase from "./save.account.usecase";


const MockRepository = jest.fn(() => ({
	find: jest.fn(),
	save: jest.fn()
}));

const input = {
	clientId: '1',
	balance: 10,
};

describe('Unit Testing Save Account Use Case', () => {

	it('should save an account', async () => {
		const accountRepository = MockRepository();
		const accountSaveUseCase = new SaveAccountUseCase(accountRepository);

		await accountSaveUseCase.execute(input);

		expect(accountRepository.save).toHaveBeenCalledTimes(1);
	})

});