import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function RegisterForm() {
  return (
    <Card className="w-[400px] p-8">
      <CardHeader className="space-y-2 p-0 mb-8">
        <h1 className="text-2xl font-semibold text-center">
          Criar conta
        </h1>
        <p className="text-center text-gray-500">
          Escolha como deseja criar sua conta
        </p>
      </CardHeader>
      
      <CardContent className="p-0 space-y-6">
        {/* Formulário */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm text-gray-700">
              Nome completo
            </label>
            <Input
              placeholder="Digite seu nome completo"
              className="h-10"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-700">
              Email
            </label>
            <Input
              type="email"
              placeholder="Digite seu email"
              className="h-10"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-700">
              Senha
            </label>
            <Input
              type="password"
              placeholder="Digite sua senha"
              className="h-10"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm text-gray-700">
              Confirme sua senha
            </label>
            <Input
              type="password"
              placeholder="Digite sua senha novamente"
              className="h-10"
            />
          </div>

          <Button 
            className="w-full h-10 bg-[#0f172a] hover:bg-[#1e293b] text-white"
          >
            Criar conta
          </Button>
        </div>

        <div className="text-center text-sm">
          <span className="text-gray-500">Já tem uma conta? </span>
          <Link 
            href="/auth/login" 
            className="text-[#0f172a] hover:underline font-medium"
          >
            Faça login
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}