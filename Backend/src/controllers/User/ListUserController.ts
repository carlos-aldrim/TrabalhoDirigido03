import { FastifyRequest, FastifyReply } from "fastify";
import { ListUserServices } from "../../services/User/ListUserServices";

export class ListUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listUserService = new ListUserServices();

    const users = await listUserService.execute();

    reply.send(users);
  };
};
