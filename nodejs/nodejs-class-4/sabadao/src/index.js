import { startServer, executeServer } from './http/server-http.js';
const app = startServer();
executeServer(app);
