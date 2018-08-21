const getFeed = function(token) {
    console.log('Token',token);
    
    const url = 'https://api-iddog.idwall.co/feed';
    fetch(url, {
        method: 'get', // opcional
        headers: new Headers({
            'Authorization': token,
            'Content-Type': 'application/json'
        })
    })
    .then(response => response.json()) // retorna uma promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('Failed retrieving information', error);
    });
}

const url_signup = 'https://api-iddog.idwall.co/signup';

fetch(url_signup, {
    method: 'post',
    headers: new Headers({
        'Content-Type': 'application/json',
        'email': 'silvano.amaral9@gmail.com'
    })
})
.then(response => response.json())
.then(result => {
    console.info('tokem',result.user.token);
    getFeed(result.user.token);
})
.catch(error => {
    console.log('Failed POST signup user',error.message);
});

