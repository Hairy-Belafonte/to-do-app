function onReady(){
  let id = 0;
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo() {
    if (!newToDoText.value) { return; }
    id++;
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id,
    });
    newToDoText.value = '';

    renderTheUI();

  }
  function deleteToDo(id){
    toDos = toDos.filter(item => item.id !== id);
  }
  function renderTheUI() {


    toDoList.textContent = '';


    toDos.forEach(function(toDo) {
      const newToDo = document.createElement('li');

      const button = document.createElement('button');
      //checkbox.type = "checkbox";
      button.addEventListener('click', event =>  {
        deleteToDo(toDo.id);
        renderTheUI();
      });
      button.textContent = 'Delete';
      newToDo.textContent = toDo.title;

      toDoList.appendChild(newToDo);
      newToDo.appendChild(button);
    });
  }
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();

  });
  renderTheUI();
}


window.onload = function() {
  onReady();

};
