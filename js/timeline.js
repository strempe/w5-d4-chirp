getPosts();

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
    var postListItem =`<div class="new post">
                    <ul class="media-list">
                        <li class="media">
                            <div class="media-left">
                                <a href="#">
                                    <img class="postIMG" src="${post.image}" alt="${post.uname}profile photo">
                                </a>
                            </div>
                            <div class="media-body">
                                <h4 class="media-heading">${post.uname}</h4>
                                <h6 class="media-subhead">${name}</h6>
                                <textarea class="form-control" placeholder=${post.body} rows="2"></textarea>
                            </div>
                        </li>
                    </ul>
                </div>`    
}
    // var currentPostHTML = document.querySelector('#posts').innerHTML;

    document.querySelector('#posts').innerHTML += postListItem;


 
