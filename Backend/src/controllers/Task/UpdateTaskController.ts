import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateTask } from "../../model/Task/UpdateTaskModel";
import { UpdateTaskServices } from "../../services/Task/UpdateTaskServices";

export class UpdateTaskController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id, title, description, completed, selected } = request.body as UpdateTask;

    const taskService = new UpdateTaskServices();

    const updatedTask = await taskService.execute({ id, title, description, completed, selected });

    reply.send(updatedTask);
  };
};