import { CreateTask } from "../../model/Task/CreateTaskModel";
import prismaClient from "../../prisma";

export class CreateTaskServices {
  async execute({ title, description, userId }: CreateTask) {
    if (!title) {
      throw new Error("Preencha o título corretamente para criar a tarefa.");
    };

    try {
      const newTask = await prismaClient.task.create({
        data: {
          title,
          description,
          completed: false,
          selected: false,
          userId,
        },
      });

      return newTask;
    } catch (error) {
      throw new Error("Erro ao criar a tarefa.");
    }
  };
};
