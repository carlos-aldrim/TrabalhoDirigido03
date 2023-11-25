import { CreateUser } from "../../model/User/CreateUserModel";
import prismaClient from "../../prisma";
import { criptografar } from "./criptografia/criptografia";

export class CreateUserServices {
  async execute({ email, password, name }: CreateUser) {
    if (!email || !password || !name) {
      throw new Error("Preencha todos os dados corretamente.");
    }

    try {
      const newUser = await prismaClient.user.create({
        data: {
          email,
          password: criptografar(password),
          name,
          active: true
        },
      });

      return newUser;
    } catch (error) {
      throw new Error("Erro ao criar usuário.");
    }
  };
};
