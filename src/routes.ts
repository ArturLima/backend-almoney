import { Router } from "express";
import { CreateExpenseController } from "./modules/expense/useCases/createExpense/CreateExpenseController";
import { DeleteExpenseController } from "./modules/expense/useCases/deleteExpense/DeleteExpenseController";
import { ListAllExpenseController } from "./modules/expense/useCases/listAllExpense/ListAllExpenseController";

const routes = Router();

const createExpenseController = new CreateExpenseController();
const listAllExpenseController = new ListAllExpenseController();
const deleteExpenseController = new DeleteExpenseController();

routes.post("/create", createExpenseController.handle);
routes.get("/list", listAllExpenseController.handle);
routes.delete("/delete/:id", deleteExpenseController.handle);

export { routes };
