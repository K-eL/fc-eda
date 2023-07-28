import express, { Request, Response } from "express";
import FindAccountUseCase from "../../../domain/account/usecase/find/find.account.usecase";
import AccountRepositoryFactory from "../../../domain/account/factory/account.repository.factory";
import AccountPresenter from "../presenters/account.presenter";

export const accountRoute = express.Router();

accountRoute.get("/:clientId", async (req: Request, res: Response) => {
	const usecase = new FindAccountUseCase(AccountRepositoryFactory.create());
	try {
		const output = await usecase.execute({ clientId: req.params.clientId });
		res.format({
			json: async () => res.send(output),
			xml: async () => res.send(AccountPresenter.findXML(output))
		});
	} catch (err: any) {
		res.status(500).send(err.message);
	}
});