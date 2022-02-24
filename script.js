//Ability to use Enter-key to add tasks
document.querySelector('#text').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      add();
    }
});

function add(){
    var container = document.getElementById("todos");
    const div = document.createElement('div');
    var text = document.getElementById("text").value;
    div.className="task";
    div.innerHTML = `<br><a onclick="remove(this)">${text}</a><br>`;
    
    //add new task
    if (text!='')container.appendChild(div);
    //clear input
    document.getElementById("text").value = '';
}
function remove(input){
    document.getElementById("todos").removeChild(input.parentNode);
}