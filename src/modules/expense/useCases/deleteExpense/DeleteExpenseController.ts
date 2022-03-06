import { Request, Response } from "express";
import { DeleteExpenseUseCase } from "./DeleteExpenseUseCase";

export class DeleteExpenseController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const deleteExpenseUseCase = new DeleteExpenseUseCase();

    const result = await deleteExpenseUseCase.execute(id);

    return response.json(result);
  }
}
