import Fastify from "fastify"
import { userRoutes } from "./routes/user"
import dotenv from "dotenv"

dotenv.config()

const app = Fastify()

app.register(userRoutes)

app.listen({ port: 3000 }, (err, address) => {
  if (err) throw err
  console.log(`✅ Servidor rodando em ${address}`)
})
