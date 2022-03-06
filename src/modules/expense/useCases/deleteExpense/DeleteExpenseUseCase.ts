import { prisma } from "../../../../database/prismaClient";

export class DeleteExpenseUseCase {
  async execute(id: string) {
    const deleteExpense = await prisma.expense.delete({
      where: {
        id,
      },
    });
    return deleteExpense;
  }
}
