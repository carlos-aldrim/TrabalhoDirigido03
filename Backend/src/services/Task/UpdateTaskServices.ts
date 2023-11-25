import { UpdateTask } from "../../model/Task/UpdateTaskModel";
import prismaClient from "../../prisma";

export class UpdateTaskServices {
  async execute({ id, title, description, completed, selected }: UpdateTask) {
    try {
      const existingTask = await prismaClient.task.findUnique({
        where: {
          id: id,
        },
      });

      if (!existingTask) {
        throw new Error("Tarefa não encontrada.");
      }

      const updatedTask = await prismaClient.task.update({
        where: {
          id: id,
        },
        data: {
          title: title || existingTask.title,
          description: description !== undefined ? description : existingTask.description,
          completed: completed !== undefined ? completed : existingTask.completed,
          selected: selected !== undefined ? selected : existingTask.selected,
        },
      });

      return updatedTask;
    } catch (error) {
      throw new Error("Erro ao atualizar a tarefa.");
    };
  };
};