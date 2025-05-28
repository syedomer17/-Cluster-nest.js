import { parentPort } from 'worker_threads';

if (parentPort) {
  // Simulate heavy CPU work
  let sum = 0;
  for (let i = 0; i < 1e9; i++) { // 1e9 = billion (1,000,000,000)
    sum += i;
  }

  parentPort.postMessage({ result: sum });
}
