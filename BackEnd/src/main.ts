// Importa as bibliotecas do NestJS
import { NestFactory } from "@nestjs/core";
import { Controller, Get, Module } from "@nestjs/common";

// Define o controlador dos endpoints
@Controller()
class AppController {
	@Get()
	getMessage(): string {
		return "The API is working!";
	}
	@Get("api")
	getHello(): string {
		return "You entered the API";
	}
}

// Define um módulo da aplicação, que agrupa controladores e outras dependências
@Module({
	controllers: [AppController], // Registra o controlador dentro do módulo
})
class AppModule {}

// Função assíncrona que inicializa a aplicação
async function bootstrap() {
	// Cria uma instância do aplicativo NestJS, passando o módulo principal
	const app = await NestFactory.create(AppModule);

	// Faz com que o servidor escute na porta 3000
	await app.listen(3100);
}

// Executa a função de inicialização, iniciando a aplicação
bootstrap();
