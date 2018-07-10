import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as mongoose from 'mongoose'
import { mongoURI } from './config/db';
import * as morgan from 'morgan';



async function bootstrap() {
  mongoose.connect(mongoURI);
  const dbConnection = mongoose.connection;

  // if ERROR
  dbConnection.on('error', console.error.bind(console, 'connection error:'));
  dbConnection.once('open', () => {
      console.log('Database connection!!');
  });
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.use(morgan('tiny'));
  await app.listen(3000, () => {
    console.log('Server running at PORT=3000')
  });
}
bootstrap();
