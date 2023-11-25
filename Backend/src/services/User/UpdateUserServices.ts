import { UpdateUser } from "../../model/User/UpdateUserModel";
import prismaClient from "../../prisma";

export class UpdateUserServices {
  async execute(userId: string, { email, password, name }: UpdateUser) {
    try {
      const existingUser = await prismaClient.user.findUnique({
        where: {
          id: userId,
        },
      });

      if (!existingUser) {
        throw new Error("Usuário não encontrado.");
      };

      const updatedUser = await prismaClient.user.update({
        where: {
          id: userId,
        },
        data: {
          email: email || existingUser.email,
          password: password || existingUser.password,
          name: name || existingUser.name,
        },
      });

      return updatedUser;
    } catch (error) {
      throw new Error("Erro ao atualizar usuário.");
    }
  };
};
