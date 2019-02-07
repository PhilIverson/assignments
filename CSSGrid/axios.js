function getAllTodos(){
    return axios.get(url).then(response => response.data)
}

function renderTodo(todo){
    const li = document.createElement("li");
    const title = document
}