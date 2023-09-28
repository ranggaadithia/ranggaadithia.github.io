document.addEventListener("DOMContentLoaded", function () {
 const taskInput = document.getElementById("taskInput");
 const addTaskButton = document.getElementById("addTask");
 const taskList = document.getElementById("taskList");

 addTaskButton.addEventListener("click", function () {
   const taskText = taskInput.value.trim();

   if (taskText !== "") {
     const listItem = document.createElement("li");
     listItem.innerHTML = `
         <span>${taskText}</span>
         <button class="done-btn"><i class="bi bi-check-square"></i></button>
     `;
     taskList.appendChild(listItem);

     taskInput.value = "";

     listItem
       .querySelector(".done-btn")
       .addEventListener("click", function () {
         taskList.removeChild(listItem);
       });
   }
 });
});