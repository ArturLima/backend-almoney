import { prisma } from "../../../../database/prismaClient";

interface IExpense {
  tittle: string;
  value: string;
  category: string;
  type: string;
}

export class CreateExpenseUseCase {
  async execute({ tittle, value, category, type }: IExpense) {
    const expense = await prisma.expense.create({
      data: {
        tittle,
        value,
        category,
        type,
      },
    });
    return expense;
  }
}
