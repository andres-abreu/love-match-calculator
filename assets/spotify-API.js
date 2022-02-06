const APIController = (function() {
    
    const clientId = 'd245ff07687e4c18957270032baa5893';
    const clientSecret = '3e4f57d60c91475182ec44d630f39f8b';

    // private methods
    const _getToken = async () => {

        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'

        });
