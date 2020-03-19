function startApplication(app, http, port) {
  app.get('/', (_, res) => {
    res.sendFile(`${__dirname}/index.html`);
  });

  app.get('/styles.css', (_, res) => {
    res.sendFile(`${__dirname}/styles.css`);
  });

  app.get('/favicon.ico', (_, res) => {
    res.sendFile(`${__dirname}/favicon.ico`);
  });

  http.listen(port, '192.168.1.24', () => {
    console.log(`Listening on *:${port}`);
  });
}

module.exports = {
  startApplication
};
