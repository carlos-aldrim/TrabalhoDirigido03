import { FastifyRequest, FastifyReply } from "fastify";
import { CreateUser } from "../../model/User/CreateUserModel";
import { CreateUserServices } from "../../services/User/CreateUserServices";

export class CreateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { email, password, name } = request.body as CreateUser;

    const userService = new CreateUserServices();

    const user = await userService.execute({ email, password, name });

    reply.send(user);
  };
};
