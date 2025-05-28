Absolutely! Here’s a **complete and organized list of PM2 commands**, grouped by category, with their **usage explained clearly**:

---

## 🚀 Basic PM2 Commands

| Command                             | Description                                      |                                 |
| ----------------------------------- | ------------------------------------------------ | ------------------------------- |
| `pm2 start app.js`                  | Start a Node.js app (JavaScript file)            |                                 |
| `pm2 start dist/main.js --name app` | Start app with a custom name                     |                                 |
| `pm2 start dist/main.js -i max`     | Start in cluster mode (one process per CPU core) |                                 |
| `pm2 list`                          | Show all running processes                       |                                 |
| `pm2 status`                        | Same as `pm2 list` – shows running processes     |                                 |
| \`pm2 show \<name                   | id>\`                                            | Detailed info of a specific app |

---

## 🔁 Process Control

| Command                     | Description                |                                          |
| --------------------------- | -------------------------- | ---------------------------------------- |
| \`pm2 stop \<name           | id>\`                      | Stop a running app                       |
| \`pm2 restart \<name        | id>\`                      | Restart an app                           |
| \`pm2 delete \<name         | id>\`                      | Stop and remove an app from PM2          |
| \`pm2 reload \<name         | id>\`                      | Zero-downtime reload (cluster mode only) |
| \`pm2 gracefulReload \<name | id>\`                      | Graceful reload in cluster mode          |
| `pm2 kill`                  | Stop PM2 and all processes |                                          |

---

## 📝 Logs & Monitoring

| Command           | Description                        |                              |
| ----------------- | ---------------------------------- | ---------------------------- |
| `pm2 logs`        | Show logs for all apps             |                              |
| \`pm2 logs \<name | id>\`                              | Show logs for a specific app |
| `pm2 monit`       | Live CPU/memory monitor            |                              |
| `pm2 flush`       | Clear all logs                     |                              |
| `pm2 reloadLogs`  | Reload logs (useful after `flush`) |                              |

---

## 📂 Ecosystem (Config File) Commands

| Command                          | Description                            |
| -------------------------------- | -------------------------------------- |
| `pm2 init`                       | Generate a default ecosystem.config.js |
| `pm2 start ecosystem.config.js`  | Start apps defined in config file      |
| `pm2 delete ecosystem.config.js` | Delete all apps defined in config file |

---

## 🔄 Startup & Reboot Persistence

| Command         | Description                             |
| --------------- | --------------------------------------- |
| `pm2 startup`   | Generate startup script for system boot |
| `pm2 save`      | Save current process list for startup   |
| `pm2 unstartup` | Remove startup script                   |
| `pm2 resurrect` | Restore processes from saved list       |

---

## 📦 Package & Module Management

| Command                  | Description            |
| ------------------------ | ---------------------- |
| `pm2 install <module>`   | Install a PM2 module   |
| `pm2 uninstall <module>` | Uninstall a PM2 module |
| `pm2 module:list`        | List all PM2 modules   |

---

## 🧪 Misc & Advanced

| Command                    | Description                    |                                |
| -------------------------- | ------------------------------ | ------------------------------ |
| `pm2 config <key> <value>` | Change PM2 config value        |                                |
| `pm2 ping`                 | Check if PM2 daemon is alive   |                                |
| `pm2 update`               | Update PM2 and reload all apps |                                |
| \`pm2 reset \<name         | id>\`                          | Reset app counters and metrics |

---

