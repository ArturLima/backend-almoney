import { Request, Response } from "express";
import { CreateExpenseUseCase } from "./CreateExpenseUseCase";

export class CreateExpenseController {
  async handle(request: Request, response: Response) {
    const { tittle, value, category, type } = request.body;
    const createExpenseUseCase = new CreateExpenseUseCase();
    const result = await createExpenseUseCase.execute({
      tittle,
      value,
      category,
      type,
    });
    return response.status(201).json(result);
  }
}
