import { DeleteTask } from "../../model/Task/DeleteTaskModel";
import prismaClient from "../../prisma";

export class DeleteTaskServices {
  async execute({ id }: DeleteTask) {
    if (!id) {
      throw new Error("Solicitação de remoção de tarefa inválida.");
    }

    try {
      const findTask = await prismaClient.task.findFirst({
        where: {
          id: id
        },
      });

      if (!findTask) {
        throw new Error("Tarefa não encontrada.");
      }

      await prismaClient.task.delete({
        where: {
          id: findTask.id
        },
      });

      return findTask;
    } catch (error) {
      throw new Error("Erro ao deletar a tarefa.");
    };
  };
};