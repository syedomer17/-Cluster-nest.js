import { Controller, Get } from '@nestjs/common';
import { WorkerService } from './services/worker.service';

@Controller()
export class AppController {
  constructor(private readonly workerService: WorkerService) {}

  @Get('heavy-task')
  async handleHeavyTask() {
    const result = await this.workerService.runWorker();
    return { result };
  }
}
