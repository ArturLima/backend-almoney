import { Request, Response } from "express";
import { ListAllExpenseUseCase } from "./ListAllExpenseUseCase";

export class ListAllExpenseController {
  async handle(request: Request, response: Response) {
    const listAllExpenseUseCase = new ListAllExpenseUseCase();
    const result = await listAllExpenseUseCase.execute();
    return response.json(result);
  }
}
