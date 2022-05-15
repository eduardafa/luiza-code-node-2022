const ping = (_, res) => {
    res.json({ pong: true });
};

function healthController(appExpress) {
    const pathRoute = './api/health';

    appExpress.get(`${pathRoute}/ping`, ping);
}

// module.exports = (appExpress) => {
//     const pathRoute = './api/health';

//     appExpress.get(`${pathRoute}/ping`, ping);
// };

export default healthController;
