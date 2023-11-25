import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteTaskServices } from "../../services/Task/DeleteTaskServices";
import { DeleteTask } from "../../model/Task/DeleteTaskModel";

export class DeleteTaskController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as DeleteTask;

    const taskService = new DeleteTaskServices();

    const response = await taskService.execute({ id });

    reply.send(response);
  };
};