import { FastifyRequest, FastifyReply } from "fastify";
import { Login } from "../../model/User/UserModel";
import { LoginUserServices } from "../../services/User/LoginUserServices";
import { criptografar } from "../../services/User/criptografia/criptografia";

export class LoginUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { email, password } = request.body as Login;

    const userService = new LoginUserServices();

    const passwordCrypto = criptografar(password);
    const authenticatedUser = await userService.execute({ email, password: passwordCrypto });

    if (authenticatedUser) {
      reply.send({ message: "Login bem sucedido.", user: authenticatedUser, auth: true });
    } else {
      reply.status(401).send({ message: "Credenciais inválidas.", auth: false });
    };
  };
};
