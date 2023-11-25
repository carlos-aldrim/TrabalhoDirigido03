import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteUserServices } from "../../services/User/DeleteUserServices";
import { DeleteUser } from "../../model/User/DeleteUserModel";

export class DeleteUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as DeleteUser;

    const userService = new DeleteUserServices();

    const user = await userService.execute({ id });

    reply.send(user);
  };
};
