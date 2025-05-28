# 🚀 NestJS App with Clustering

This project demonstrates how to use Node.js clustering with a NestJS application to utilize multiple CPU cores for better performance and scalability.

---

## 📦 Requirements

- Node.js v14+
- npm (Node Package Manager)
- TypeScript
- NestJS CLI (optional for scaffolding)

---

## 📁 Project Structure

```bash
src/
├── app.module.ts
├── main.ts <-- Clustering logic added here
```

---

## ⚙️ Clustering Setup
This app uses Node.js' built-in cluster and os modules to fork multiple worker processes (one per CPU core). Each worker runs an instance of the NestJS application.

✅ Main Features:
1.Uses all available CPU cores.
2.Automatically restarts workers on crash.
3.Master process logs lifecycle events.

---

## 🔧 Installation
# Clone the repo
git clone git@github.com:syedomer17/-Cluster-nest.js.git
cd -Cluster-nest.js

# Install dependencies
npm install

---

##🛠️ Development
To run in development with clustering:
```bash
npx ts-node src/main.ts
```
Make sure you have ts-node and @types/node installed:
```bash
npm install --save-dev ts-node @types/node
```

---

##🏗️ Build & Run in Production
# Build the TypeScript code
npm run build

# Run compiled JavaScript
node dist/main.js

---

## To run local
npm run start:dev