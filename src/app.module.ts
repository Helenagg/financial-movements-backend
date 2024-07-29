import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MovementsModule } from './movements/movements.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'), // Cambia la URL según tu configuración
    MovementsModule,
  ],
})
export class AppModule {}
