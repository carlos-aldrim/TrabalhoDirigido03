import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { ListUserController } from "./controllers/User/ListUserController";
import { DeleteUserController } from "./controllers/User/DeleteUserController";
import { UpdateUserController } from "./controllers/User/UpdateUserController";
import { LoginUserController } from "./controllers/User/LoginUserController";
import { CreateTaskController } from "./controllers/Task/CreateTaskController";
import { DeleteTaskController } from "./controllers/Task/DeleteTaskController";
import { ListTaskController } from "./controllers/Task/ListTaskController";
import { UpdateTaskController } from "./controllers/Task/UpdateTaskController";

export async function routes(fastify: FastifyInstance) {
  fastify.post(
    "/user",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateUserController().handle(request, reply);
    }
  );

  fastify.get(
    "/users",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListUserController().handle(request, reply);
    }
  );

  fastify.delete(
    "/user",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteUserController().handle(request, reply);
    }
  );

  fastify.put("/user", async (request: FastifyRequest, reply: FastifyReply) => {
    return new UpdateUserController().handle(request, reply);
  });

  fastify.post(
    "/login",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new LoginUserController().handle(request, reply);
    }
  );

  fastify.post(
    "/task",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateTaskController().handle(request, reply);
    }
  );

  fastify.get(
    "/tasks",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListTaskController().handle(request, reply);
    }
  );

  fastify.delete(
    "/task",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteTaskController().handle(request, reply);
    }
  );

  fastify.put("/task", async (request: FastifyRequest, reply: FastifyReply) => {
    return new UpdateTaskController().handle(request, reply);
  });
}
