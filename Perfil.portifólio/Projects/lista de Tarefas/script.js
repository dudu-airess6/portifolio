var nomeTarefa = document.getElementById("taskInput")
var addTarefa = document.getElementById("addTaskBtn")
var lista = document.getElementById("taskList")

addTarefa.addEventListener("click", adicionarTarefa)

function adicionarTarefa() {
     if(nomeTarefa.value == ""){
     alert('Você não digitou uma tarefa, por favor digite!')
}else{
        var li = document.createElement("li");
        var btnDel = document.createElement("button");
        li.innerHTML = nomeTarefa.value;
        btnDel.innerHTML = "x";
        li.appendChild(btnDel);
        lista.appendChild(li);

        btnDel.addEventListener("click", ()=> {
           li.remove();
        })
}
}
