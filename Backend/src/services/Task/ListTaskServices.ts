import prismaClient from "../../prisma";

export class ListTaskServices {
  async execute() {
    try {
      const tasks = await prismaClient.task.findMany();

      return tasks;
    } catch (error) {
      throw new Error("Erro ao listar as tarefas.");
    }
  };
};
