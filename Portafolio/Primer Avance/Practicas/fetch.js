// var url = 'https://jsonplaceholder.typicode.com/users';

// var responseData = fetch(url).then(response => response.json());
// responseData.then(({username, email}) => {
//     for (const {username, email} of responseData) {
//         console.log("Username: " + username + "\neMail: " + email)
//     }
// })
// var url = 'https://jsonplaceholder.typicode.com/users';

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     for (const { username, email } of data) {
//       console.log("Username: " + username + "\neMail: " + email);
//     }
//   });

// Suite & zipcode
// fetch(url).then(response => response.json())
//     .then(response => {
//         for (var key in response) {
//             console.log("Username: " + response[key].username + "\n" +
//                         "eMail: \t" + response[key].email + "\n" +
//                         "City: \t" + response[key].address.city + "\n" +
//                         "Address Suite:   " + response[key].address.suite  + "\n" +
//                         "Address zipcode: " + response[key].address.zipcode + "\n")
//         }
//     })

// var url = 'https://jsonplaceholder.typicode.com/albums';
// fetch(url).then(response => response.json())
//     .then(response => {
//         for (key in response) {
//             if (key <= 19){
//                 console.log("UserID: " + response[key].userID + "\n" +
//                 "ID: " + response[key].id + "\n" +
//                 "Image title: " + response[key].title + "\n")
//             }
//         }
//     })

// fetch(url, {
//     method: "Post",
//     headers: {
//         "Content_type": "application/json"
//     },
//     body: JSON.stringify({
//         userid: 101,
//         id: 101,
//         title: "Foo bar title"
//     })
//     }).then(response => response.json())
//     .then(response => console.log(response))

var url = 'https://jsonplaceholder.typicode.com/users';

fetch(url,{
    method: "Post",
    headers: {
        "Content_type": "appliaction/json"
    },
    body: JSON.stringify({
        id: 10,
        name: "Miguel",
        username: "ElMikol",
        email: "elmikol@mike.zip",
        address: {
            street: "La calle",
            suite: "Apt. 64",
            city: "Tijuas",
            zipcode: "348012-2131",
            geo:{
                lat: "-38.5",
                lng: "80.7"
            }
        },
        phone: "52-664-264-213",
        website: "xd.com",
        company: {
            name: "compani generica",
            catchPhrase: "Frase mas generica",
            bs: "No se que es"
        }
    })
    }).then(response => response.json())
    .then(response => console.log(response))