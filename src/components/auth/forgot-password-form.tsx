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

export function ForgotPasswordForm() {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Recuperar senha</CardTitle>
        <CardDescription>
          Digite seu email para receber um link de recuperação de senha
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
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
          <div className="flex items-center justify-between">
            <Link
              href="/auth/login"
              className="text-sm text-blue-600 hover:underline"
            >
              Voltar ao login
            </Link>
          </div>
          <Button className="w-full">Enviar link de recuperação</Button>
        </form>
      </CardContent>
    </Card>
  )
}