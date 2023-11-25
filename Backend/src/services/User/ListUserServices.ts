import prismaClient from "../../prisma";

export class ListUserServices {
  async execute() {
    try {
      const users = await prismaClient.user.findMany();

      return users;
    } catch (error) {
      throw new Error("Erro ao listar os usuários.");
    }
  };
};
