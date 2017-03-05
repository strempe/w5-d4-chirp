
document.querySelector('#signupButton').addEventListener('click', signup);

if (location.href.includes('logout')) {
    document.querySelector('#loggedout').innerHTML = '<div class="alert alert-warning text-center">Logged out successfully.</div>';
}

function signup() {
    var name = document.querySelector('#name').value;
    var username = document.querySelector('#username').value;
    var password = document.querySelector('#password').value;
    var photo = document.querySelector('#photo').value;

    fetch('https://nameless-earth-94324.herokuapp.com/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        // Back-end controls the left side, properties, of this object
        // Front-end controls the variables names and values on the right side
        body: JSON.stringify({
            name: name,
            password: password,
            uname: username,
            photo: photo,
        })
    })
    // parse his response and puts it into a json object
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            // console.log(response);
// this is telling me if the token comes back true - it will be stored in the sessionStorage to stay logged in 
            if (response.api_token) {
                // Saves any string into a named spot within your browser for the current domain.
                sessionStorage.setItem('api_token', response.api_token);
                // Sends to next page
                location.href = 'users.html';
            }
            else {
                alert('There was an error. Please check your fields.');
                console.log(response);
            }
        })
}