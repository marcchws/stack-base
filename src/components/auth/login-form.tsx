import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function LoginForm() {
  return (
    <Card className="w-[400px] p-8">
      <CardHeader className="space-y-2 p-0 mb-8">
        <h1 className="text-2xl font-semibold text-center">
          Entrar
        </h1>
        <p className="text-center text-gray-500">
          Escolha como deseja fazer login
        </p>
      </CardHeader>
      
      <CardContent className="p-0 space-y-6">
        <div className="space-y-3">
          <Button 
            variant="outline" 
            className="w-full h-10 text-gray-700 font-normal justify-center px-4"
          >
            <img 
              src="/google.svg" 
              alt="Google logo" 
              className="h-5 w-5 mr-3"
            />
            Entrar com o Google
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full h-10 text-gray-700 font-normal justify-center px-4"
          >
            <img 
              src="/facebook.svg" 
              alt="Facebook logo" 
              className="h-5 w-5 mr-3"
            />
            Entrar com o Facebook
          </Button>
        </div>

        <div className="text-center text-gray-500 text-sm">
          ou continue com email
        </div>

        <div className="space-y-4">
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

          <Link 
            href="/auth/forgot-password"
            className="block text-right text-sm text-[#0f172a] hover:underline font-medium"
          >
            Esqueceu sua senha?
          </Link>

          <Button 
            className="w-full h-12 bg-[#0f172a] hover:bg-[#1e293b] text-white"
          >
            Entrar
          </Button>
        </div>

        <div className="text-center text-sm">
          <span className="text-gray-500">Ainda não tem conta? </span>
          <Link 
            href="/auth/register" 
            className="text-[#0f172a] hover:underline font-medium"
          >
            Criar conta
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}