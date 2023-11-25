import { DeleteUser } from "../../model/User/DeleteUserModel";
import prismaClient from "../../prisma";

export class DeleteUserServices {
  async execute({ id }: DeleteUser) {
    if (!id) {
      throw new Error("Solicitação de remoção inválida.");
    }

    try {
      const findUser = await prismaClient.user.findFirst({
        where: {
          id: id
        },
      });

      if(!findUser) {
        throw new Error("Usuário não existe.");
      };

      await prismaClient.user.delete({
        where: {
            id: findUser.id
        },
      });

      return { message: "Deletado com sucesso." };
    } catch (error) {
      throw new Error("Erro ao deletar usuário.");
    }
  };
};
