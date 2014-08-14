var flatiron = require('flatiron'),
    path = require('path'),
    app = flatiron.app,
    ws = require('ws');

app.config.file({ file: path.join(__dirname, 'config', 'config.json') });

app.use(flatiron.plugins.http);
app.use(flatiron.plugins.static, {
  dir: __dirname + '/public'
});
app.use(require('jade.plugin').plugin, {
  dir: __dirname + '/public/views'
});

app.router.get('/', function () {
  app.render(this.res, 'index', {
    title: 'foo'
  });
});

app.start(3000);
