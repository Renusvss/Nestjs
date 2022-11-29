import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TasksModule,
    MongooseModule.forRoot(
      'mongodb+srv://Renu:renu2020@nodes.kftb3xo.mongodb.net/demo?retryWrites=true&w=majority',
    ),
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
