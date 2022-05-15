/*
 * File responsible by Express configurations
 */
import express from 'express';

import healthController from '../controllers/healthController.js';

const configRoutes = (app) => {
    healthController(app);
};

/*
 * Main function to create the HTTP server
 * @param {*} app Express App
 */
const configServer = (app) => {
    app.use(express.json());
    configRoutes(app);
    // TODO: Check middleware
};

export default configServer;
