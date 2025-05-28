import { Injectable } from '@nestjs/common';
import { Worker } from 'worker_threads';
import * as path from 'path';

@Injectable()
export class WorkerService {
  runWorker(): Promise<number> {
    return new Promise((resolve, reject) => {
      const worker = new Worker(path.join(__dirname, '../worker/example.worker.js'));

      worker.on('message', (message) => {
        resolve(message.result);
      });

      worker.on('error', (err) => {
        reject(err);
      });

      worker.on('exit', (code) => {
        if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
      });
    });
  }
}
