var todoapp = function (){
    
    var lista = document.getElementById("lista");
    var item = document.createElement("il");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    
    lista.appendChild(item);
    item.innerHTML = document.getElementById("elemento").value;
    item.appendChild(checkbox);
    document.getElementById("elemento").value = "";
    checkbox.onclick = function(){
        if (checkbox.checked)
        item.className = "greenItem"
        else 
        item.className = "redItem"
    }

}
document.getElementById("botao").onclick = todoapp;