export const environment = {
    production: false,
    auth: {
      domain: 'dev-bamvnh63frx72jt4.us.auth0.com',
      clientId: '0izDiD36HnfvQhqaWBwKI4YRsorbrrhP',
      authorizationParams: {
        redirect_uri: window.location.origin
      },
      httpInterceptor: {
        allowedList: [
          {
            uri: 'https://chipsnote-main-api-auth.up.railway.app/*'
          }
        ]
      }
    }
  };