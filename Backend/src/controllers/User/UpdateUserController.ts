import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateUser, UserId } from "../../model/User/UpdateUserModel";
import { UpdateUserServices } from "../../services/User/UpdateUserServices";

export class UpdateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as UserId;
    const { email, password, name } = request.body as UpdateUser;

    const userService = new UpdateUserServices();

    const updatedUser = await userService.execute(id, { email, password, name });

    reply.send(updatedUser);
  };
};
