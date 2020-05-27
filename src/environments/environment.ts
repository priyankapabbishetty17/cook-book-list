// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urls: {
    add: 'http://localhost:8080/createrecipe',
    delete: 'http://localhost:8080/recipe/',
    update: 'http://localhost:8080/recipe/',
    getData: 'http://localhost:8080/recipes'
  }
};
