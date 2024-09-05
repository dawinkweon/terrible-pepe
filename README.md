## Local development


### For react app development and hot reloading

Most of the react components can be developed using the react dev server.

1. Start the react dev server
```
npm start
```

2. Click the link to the react component being developed or use the permalink route

> Example: The grinding mode dialog can be reached on http://localhost:3000/grinding 

#### Adding a new component

To add a new component, go to the `DevelopmentApp` and add a new route entry to show it on the screen for development.

### For browser plugin development

To develop and test browser plugin specific scripts such as content and background workers use the following method.

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

## Configuraton 

**Extension related code**

Uses hard coded configs in [config](./src/config.ts)

**React app related config**

Environment variables can be added with prefix `REACT_APP_<key>` to [env](.env) then used within the React app via `process.env.<key>`. 

See the [CRA docs](https://create-react-app.dev/docs/adding-custom-environment-variables/) for more information.