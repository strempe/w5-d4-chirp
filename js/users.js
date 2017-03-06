// document.querySelector('#users').addEventListener('click', function(e) {
//     var userListItem = e.target;
//     var userId = userListItem.dataset.id;

//     location.href = 'messages.html?userId=' + uname;
// });

document.querySelector('#logout').addEventListener('click', function() {
    sessionStorage.clear();
    location.href = 'signin.html?logout=yes';
    // sessionStorage.removeItem('token');
});

document.querySelector('#follow').addEventListener('click', follow);



getUsers();

function getUsers() {
    var token = sessionStorage.getItem('api_token');

    fetch('https://nameless-earth-94324.herokuapp.com/users')
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        renderUsersList(response);
    })
}

function renderUsersList(users) {
    console.log(users);

    users.forEach(function(user) {
        var userListItem = `

        <li class="list-group-item">${user.photo}: ${user.uname}<button type="submit" ${user.follow} class="btn btn-default">follow</button></li>`;

               
        document.querySelector('#users').innerHTML += userListItem;
    });;
}

function follow() {

    document.querySelector('#follow').value;

    fetch('https://nameless-earth-94324.herokuapp.com/users', {

        users: JSON.stringify({
            uname: uname,
            name: name,
            follow: follow
        })
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            // console.log(response);

        })
}