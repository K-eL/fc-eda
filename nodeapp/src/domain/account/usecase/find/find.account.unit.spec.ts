import FindAccountUseCase from "./find.account.usecase";

const MockRepository = jest.fn(() => ({
	find: jest.fn().mockReturnValue(Promise.resolve(output)),
	save: jest.fn()
}));

const input = {
	clientId: '1'
};

const output = {
	clientId: '1',
	balance: 10,
};

describe('Unit Testing Find Account Use Case', () => {

	it('should find an account', async () => {
		const accountRepository = MockRepository();
		const accountFindUseCase = new FindAccountUseCase(accountRepository);

		const response = await accountFindUseCase.execute(input);

		expect(response).toEqual(output);
	})

});