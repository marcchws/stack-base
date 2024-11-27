import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function ForgotPasswordForm() {
  return (
    <Card className="w-[400px] p-8">
      <CardHeader className="space-y-2 p-0 mb-8">
        <h1 className="text-2xl font-semibold text-center">
          Recuperar senha
        </h1>
        <p className="text-center text-gray-500">
          Digite seu email para receber um link de recuperação
        </p>
      </CardHeader>
      
      <CardContent className="p-0 space-y-6">
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

          <Button 
            className="w-full h-10 bg-[#0f172a] hover:bg-[#1e293b] text-white"
          >
            Enviar link de recuperação
          </Button>
        </div>

        <div className="text-center text-sm">
          <Link 
            href="/auth/login" 
            className="text-[#0f172a] hover:underline font-medium"
          >
            Voltar ao login
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}