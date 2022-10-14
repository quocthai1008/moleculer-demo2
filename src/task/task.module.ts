import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Task, TaskSchema } from "../schemas/task.schema";
import { TaskHandler } from "./task.handler";

@Module({
	imports: [
		MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
	],
	providers: [TaskHandler],
})
export class TaskModule {}
