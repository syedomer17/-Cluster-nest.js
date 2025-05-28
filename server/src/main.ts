import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const cluster = require('cluster'); // in nest.js use require for importing 
import * as os from 'os';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

if (cluster.isMaster) {
  const cpuCount = os.cpus().length;

  console.log(`Master process ${process.pid} is running`);
  console.log(`Forking ${cpuCount} workers...`);

  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker: any, code: number, signal: string) => {
    console.log(`Worker ${worker.process.pid} died. Spawning a new one...`);
    cluster.fork();
  });
} else {
  bootstrap();
}
