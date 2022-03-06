import { prisma } from "../../../../database/prismaClient";

export class ListAllExpenseUseCase {
  async execute() {
    const listAllExpense = await prisma.expense.findMany();
    return listAllExpense;
  }
}
