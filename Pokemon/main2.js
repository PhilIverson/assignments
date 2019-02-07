var request = axios.get("https://api.vschool.io/ben/todo");

request.then(function(response){
    console.log(response.data);

})

