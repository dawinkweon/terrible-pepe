## Local development


### For react app development and hot reloading

Start the react dev server
```
npm start
```

### For browser plugin development

1. Install the [Extensions Reloader](https://chromewebstore.google.com/detail/extensions-reloader/fimgfedafeadlieiabdeeaodndnlbhid)

2. Start the watcher to auto rebuild on file changes in `src/` every 10 seconds

```
npm run watch
```

The browser will open at http://reload.extensions automatically but can be disabled by running

```
npm run watch:noreload
```

To reduce the build delay update [nodemon.json](./nodemon.json)
```
{
  "delay": "10" // in seconds
}
```