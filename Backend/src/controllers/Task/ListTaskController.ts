import { FastifyRequest, FastifyReply } from "fastify";
import { ListTaskServices } from "../../services/Task/ListTaskServices";

export class ListTaskController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listTaskService = new ListTaskServices();

    const tasks = await listTaskService.execute();

    reply.send(tasks);
  };
};