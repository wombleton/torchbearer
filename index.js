var flatiron = require('flatiron'),
    path = require('path'),
    app = flatiron.app,
    ws = require('ws');

app.config.file({ file: path.join(__dirname, 'config', 'config.json') });

app.use(flatiron.plugins.http);
app.use(flatiron.plugins.static, {
  cache: process.env.NODE_ENV !== 'development',
  dir: __dirname + '/public'
});
app.use(require('jade.plugin').plugin, {
  dir: __dirname + '/views'
});

app.router.get('/', function () {
  app.render(this.res, 'index', {
    title: 'foo'
  });
});

app.start(3000);
