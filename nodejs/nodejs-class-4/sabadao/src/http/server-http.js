import express from 'express';
import configServer from './configServer.js';

const startServer = () => {
    const app = express();
    configServer(app);
    return app;
};

const executeServer = (app, port = 3000) => {
    console.log(`The server is running at ${port}`);
    app.listen(port);
};

export { startServer, executeServer };
