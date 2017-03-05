getPosts();
createPost();

document.querySelector('#post').addEventListener('click', post);

function getPosts() {
    var api_token = sessionStorage.getItem('api_token');
    // var uname = location.href.split('?')[1].split('=').pop();

    fetch('https://nameless-earth-94324.herokuapp.com/timeline?api_token=' + api_token)
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        renderPostList(response);
    })
}

function renderPostsList(posts) {
    console.log(posts);
    posts = posts.reverse();
    posts.forEach(createPost);
}

function createPost(post) {
    
}
    var currentPostHTML = document.querySelector('#posts').innerHTML;

function createPost() {
    var body = document.querySelector('#body').value;

    fetch('https://nameless-earth-94324.herokuapp.com/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            body: body,
        })
    })

        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            // console.log(response);

            if (response.api_token) {
                sessionStorage.setItem('api_token', response.api_token);
                location.href = 'timeline.html';
            }
        })
}

 
