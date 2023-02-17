import { BucketList, todo } from "./todo";

window.onload = function () {
  displayTodo();
};

let myBucketList = [
  new BucketList("Städa", false),
  new BucketList("Gymma", false),
  new BucketList("laga mat", false),
  new BucketList("plugga", false),
];

let myEmptyList = [];

let ulList = document.getElementById("ulList");
// displayTodo();

function displayTodo() {
  ulList.innerHTML = "";

  console.log(myBucketList);
  for (let i = 0; i < myBucketList.length; i++) {
    let newLiList = document.createElement("li");
    let textSpan = document.createElement("span");

    newLiList.classList.add("newLiListStyle");
    textSpan.classList.add("textSpanStyle");

    textSpan.innerHTML = myBucketList[i].task;

    let todoList = myBucketList[i];

    ulList.appendChild(newLiList);
    newLiList.appendChild(textSpan);

    let listCheckbox = document.createElement("input");
    listCheckbox.setAttribute("type", "checkbox");
    listCheckbox.classList.add("listCheckboxStyle");
    newLiList.appendChild(listCheckbox);
    listCheckbox.addEventListener("click", () => {
      myCheckboxList(listCheckbox, textSpan, todoList);
    });

    let listButton = document.createElement("button");
    listButton.classList.add("listButtonStyle");
    newLiList.appendChild(listButton);
    listButton.innerHTML = "ta bort!";
    listButton.addEventListener("click", () => {
      changeMyBucketList(todoList);
      //deleteSpan(listButton, newLiList, todoList)
    });
  }
}

function myCheckboxList(listCheckbox, textSpan, todoList) {
  if (listCheckbox.checked) {
    textSpan.innerHTML = todoList.task + " " + ":Klar";
  } else {
    return (textSpan.innerHTML = todoList.task);
  }
}

function changeMyBucketList(todoList) {
  let index = myBucketList.indexOf(todoList);
  console.log(index);
  myBucketList.splice(index, 1);
  myEmptyList.push(todoList);
  console.log(myBucketList);
  console.log(myEmptyList);

  displayTodo();
}

let inputTask = document.getElementById("inputTask");
inputTask.classList.add("inputTaskStyle");

let inputButton = document.getElementById("inputButton");
inputButton.classList.add("inputButtonStyle");
inputButton.innerHTML = "Lägg till Todo!";
inputButton.addEventListener("click", addTaskToList);

function addTaskToList(e) {
  e.preventDefault();
  let inputValue = inputTask.value;
  if (inputValue !== "") {
    let addToList = new BucketList(inputValue, false);
    myBucketList.push(addToList);
    displayTodo(addToList);
  }

  // let newLiAddToList = document.createElement("li");

  // let newSpanAddToList = document.createElement("span");
  // let newInputAddToList = document.createElement("input");
  // newInputAddToList.setAttribute = ("type", "checkbox");
  // let newButtonAddToList = document.createElement("button");

  // newLiAddToList.appendChild(newSpanAddToList);
  // newLiAddToList.appendChild(newInputAddToList);
  // newLiAddToList.appendChild(newButtonAddToList);
  // ulList.appendChild(newLiAddToList);
}

// function deleteSpan(listButton, newLiList, todoList){

//     let index = myBucketList.indexOf(todoList);
//     newLiList.innerHTML = "";
//     myBucketList.splice(index,1);

//     if (todoList.completed === false) {
//         todoList.completed = true;

//         let deleteList = document.getElementById("deleteList");
//         let deletedListLi = document.createElement("li");
//         deletedListLi.className = "deletedListStyle";
//         let deletedButtonList = document.createElement("button");
//         deletedButtonList.classList = "styleButton";
//         deletedButtonList.innerHTML ="Ångra!";
//         deleteList.appendChild(deletedListLi);
//         deleteList.appendChild(deletedButtonList);
//         deletedListLi.innerHTML += todoList.task;
//         let valueFromMyList = todoList.task;

//         deletedButtonList.addEventListener("click", () => {

//             deletedButtonList.style.display = "none";
//             spanGoBackToList(deletedButtonList,valueFromMyList, deletedListLi,todoList)

//         });

//     }

// }

// function spanGoBackToList(deletedButtonList, valueFromMyList, deletedListLi,todoList){

//     myBucketList.push(todoList);
//     deletedListLi.innerHTML = "";
//     newLiList.innerHTML += todoList.task;
//     newLiList.appendChild(deletedButtonList);
//     //komma på hur jag ska få tillbaka värdet i den andra listan.

// }
