export const environment = {
    production: false,
    auth: {
      domain: 'dev-0yq4lvav42q3zwmb.us.auth0.com',
      clientId: 'r75VwjagN2oAW9nBtGeAMiwsBThj2Y2A',
      
      authorizationParams: {
        redirect_uri: window.location.origin + '/post-login'
      }//,
      // httpInterceptor: {
      //   allowedList: [
      //     {
      //       uri: 'https://chipsnote-main-api-auth0.up.railway.app/*'
      //     }
      //   ]
      // }
    }
  };