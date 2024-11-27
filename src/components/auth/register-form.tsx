import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function RegisterForm() {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Criar conta</CardTitle>
        <CardDescription>
          Preencha seus dados para criar uma nova conta
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">
              Nome completo
            </label>
            <Input
              type="text"
              placeholder="Digite seu nome completo"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">
              Email
            </label>
            <Input
              type="email"
              placeholder="Digite seu email"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">
              Senha
            </label>
            <Input
              type="password"
              placeholder="Digite sua senha"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">
              Confirme sua senha
            </label>
            <Input
              type="password"
              placeholder="Digite sua senha novamente"
              className="w-full"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              Já tem uma conta?{" "}
              <Link
                href="/auth/login"
                className="text-blue-600 hover:underline"
              >
                Faça login
              </Link>
            </span>
          </div>
          <Button className="w-full">Criar conta</Button>
        </form>
      </CardContent>
    </Card>
  )
}