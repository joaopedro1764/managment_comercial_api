import { FastifyInstance } from "fastify"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function userRoutes(app: FastifyInstance) {
  app.get("/clients", async (req, reply) => {
    // use o nome correto do modelo com camelCase
    const clients = await prisma.user.findMany()
    return clients
  })

  app.post("/users", async (req, reply) => {
    const { name, email } = req.body as { name: string, email: string }
    // Criação de user provavelmente não faz parte do seu modelo ClientesRecuperarAtivos
    // Aqui só um exemplo para criação de outro modelo chamado User
    const user = await prisma.user.create({ data: { name, email } })
    return reply.status(201).send(user)
  })
}
