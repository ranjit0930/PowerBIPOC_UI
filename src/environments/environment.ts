// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiEndPoint: "", // api endpoint for generationg embed tokens (for app-owns-data)
  powerBIEndpoint: "https://analysis.windows.net/powerbi/api",
  groupId: "", // similar to workspace id
  adalConfig: {
    tenant: '', //tenant id of your organization
    clientId: '', // client id of your azure ad application
    cacheLocation: 'localStorage', // Default is sessionStorage
    redirectUri:`${window.location.origin}/`    ,
    popUp: false    
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
