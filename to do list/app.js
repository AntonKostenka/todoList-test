let inpMessage = document.querySelector('.message'),
   addButton = document.querySelector('.add');
let todoList = [], //массив в котором будет хранится обьект с новыми делами
   todo = document.querySelector('.todo')

addButton.addEventListener('click', function () {// добавляем событие на кнопку
   let newTodo = { // создаем обьект в котором буде хранится каждое новое дело
      todo: inpMessage.value, // новая запись дела
      checked: false, // дело віполнено или нет
      important: false,
   }
   todoList.push(newTodo)// добавляем дело(обьект) в список(масив) 
   displayMessages()// выводим дело на страницу
});
function displayMessages() {
   let displayMessages = '';
   todoList.forEach((item, index) => {// перебираем массив
      displayMessages += (
      `<li>
      <input type="checkbox" id="item_${index}">
      <label for="item_${index}">
      Наше дело ${(index + 1)}: ${item.todo}
      </label>
      </li>`);
      todo.innerHTML = displayMessages;
   })
}