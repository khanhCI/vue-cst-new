# vue-cst
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Deploy static website (FE) to heroku
? https://gist.github.com/hone/24b06869b4c1eca701f9
1. heroku plugins:install heroku-cli-static
2. heroku create -a <<ten app>>
3. heroku buildpacks:set -a <<ten app>> https://github.com/hone/heroku-buildpack-static 
4. heroku static:init
5. heroku static:deploy -a <<ten app>>
