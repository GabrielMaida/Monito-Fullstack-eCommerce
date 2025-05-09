import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductModule } from "./products/product.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
	imports: [
		ProductModule,
		MongooseModule.forRoot(
			"mongodb+srv://readonlyuser:cesusc2024@cluster0.vs1rl.mongodb.net/monito"
		),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
