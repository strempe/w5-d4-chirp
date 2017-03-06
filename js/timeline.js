getPosts();
// document.querySelector('#message').addEventListener('keypress', function(e) {
//     if (e.key === 'Enter') {
//         sendMessage();
//     }
// })
// document.querySelector('#logout').addEventListener('click', function() {
//     sessionStorage.clear();
//     location.href = 'signin.html?logout=yes';
//     // sessionStorage.removeItem('token');
// });

document.querySelector('#post').addEventListener('click', createPost);
var api_token = sessionStorage.getItem('api_token');

function getPosts() {

    fetch('https://nameless-earth-94324.herokuapp.com/timeline?api_token=' + api_token)
    .then(function(response) {
        return response.json();
    })
    
    .then(function(response) {
        // console.log(response)
        renderPostList(response)
    })
}

// taking response and pulling the info needed
function renderPostList(posts) {
    console.log(posts);
    // posts = posts.reverse();
    posts.forEach(function(post){
        var postListItem = `<div class="list-group-item">${post.user.name}: ${post.body}</div>`;
    // var currentPostHTML = document.querySelector('#timeline');
    

    document.querySelector('#timeline').innerHTML += postListItem;  
    });
}


function createPost() {
    var body = document.querySelector('#body').value;
    // var currentPostHTML = document.querySelector('#post').innerHTML;
    console.log(body)
    
    fetch('https://nameless-earth-94324.herokuapp.com/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            body: body,
            api_token: api_token
        })
    })
    .then(function(response) {
            return response.json();
            console.log('itworked!')
        })
        .then(function(response) {
            // console.log(response);
            if (response) {
                // sessionStorage.setItem('api_token', response.api_token);
                location.href = 'timeline.html';
            }
        })
        
}




 
