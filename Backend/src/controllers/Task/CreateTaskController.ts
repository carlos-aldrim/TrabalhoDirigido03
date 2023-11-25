import { FastifyRequest, FastifyReply } from "fastify";
import { CreateTask } from "../../model/Task/CreateTaskModel";
import { CreateTaskServices } from "../../services/Task/CreateTaskServices";

export class CreateTaskController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { title, description, userId } = request.body as CreateTask;

    const taskService = new CreateTaskServices();

    const task = await taskService.execute({ title, description, userId });

    reply.send(task);
  };
};