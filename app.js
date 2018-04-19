function onReady(){
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  function createNewToDo() {
    if (!newToDoText.value) { return; }

    toDos.push({
       title: newToDoText.value,
       complete: false
     });
     newToDoText.value = '';

     renderTheUI();
   }
   function renderTheUI() {


      toDoList.textContent = '';


      toDos.forEach(function(toDo) {
        const newToDo = document.createElement('li');

       const checkbox = document.createElement('input');
       checkbox.type = "checkbox";

       newToDo.textContent = toDo.title;

       toDoList.appendChild(newToDo);
       newToDo.appendChild(checkbox);
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
