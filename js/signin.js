document.querySelector('#signinButton').addEventListener('click', signin);

function signin() {
    var name = document.querySelector('#uname').value;
    var password = document.querySelector('#password').value;

    fetch('https://nameless-earth-94324.herokuapp.com/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        // Back-end controls the left side, properties, of this object
        // Front-end controls the variables names and values on the right side
        body: JSON.stringify({
            uname: uname,
            password: password,
        })
    })
   
        .then(function(response) {
            return response.json();
            console.log(response)
        })
        .then(function(response) {
            if (response.api_token) {
                // Saves any string into a named spot within your browser for the current domain.
                sessionStorage.setItem('api_token', response.api_token);
                location.href = 'timeline.html';
                console.log(response);
            }
            else {
                alert('There was an error. Please try again.');
                console.log(response);
            }
        })
}
console.log(signinButton.innerHTML);