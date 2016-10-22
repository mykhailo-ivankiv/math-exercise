import pathToRegexp from 'path-to-regexp';
export default class Route {
  constructor () {
    this.routes = new Map();
  }

  add (route, handler) {
    this.routes.set(pathToRegexp(route), handler);
    return this;
  }

  addDefault (defaultPage) {
    this.defaultPage = defaultPage;
    return this;
  }

  match (url) {
    let iterable =  this.routes.entries();

    for (let [pattern, fn] of iterable) {
      let exec = pattern.exec(url);
      if (exec) { return fn(...exec); }
    }

    return this.defaultPage;
  }
}