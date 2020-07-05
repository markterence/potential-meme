const routes = [
  {'tenant': '/tenant'},
  'users',
];

module.exports = (app) => {
  for (const route of routes) {
    if(typeof(route) == 'object') {
      const routeFile = Object.keys(route)[0]
      app.use(route[routeFile], require(`./${routeFile}`))
    }
    else if(typeof(route) == 'string') {
      app.use(`/${route}`, require(`./${route}`))
    }
    else {
      throw new Error('Invalid route definition')
    }
  }
}
