import { Login } from "../../model/User/UserModel";
import prisma from "../../prisma";

export class LoginUserServices {
  async execute({ email, password }: Login) {
    if (!email || !password) {
      throw new Error("Preencha todos os campos.");
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new Error("Usuário não encontrado.");
    }

    if (user.password !== password) {
      throw new Error("Senha incorreta.");
    }

    return user;
  }
}
