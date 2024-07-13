const todoView = document.getElementById("todolist");
const form = document.getElementById("form-list");
const contentPopup = document.getElementById("content-popup");
const buttonOk = document.getElementById("button-ok");
const formList = document.getElementById("form-list");
const popup = document.querySelector(".popup");
const btnDelete = document.getElementById("button-delete");

let data = [
  {
    text: " jogging",
    timestamp: new Date().getTime(),
  },
];

const datas = localStorage.getItem("datas");
if (datas !== null) {
  data = JSON.parse(datas);
}

formList.addEventListener("submit", function (e) {
  e.preventDefault();
  contentPopup.classList.remove("hide");
});

buttonOk.addEventListener("click", function () {
  contentPopup.classList.add("hide");
});

contentPopup.addEventListener("click", function (e) {
  if (!popup.contains(e.target)) {
    contentPopup.classList.add("hide");
  }
});

console.log(data);
const showList = () => {
  todoView.innerHTML = "";
  data.forEach((e, index) => {
    console.log(e.timestamp);
    const listcontent = document.createElement("div");
    listcontent.className = "todo-list";

    const act1 = document.createElement("div");
    act1.className = "act1";

    listcontent.appendChild(act1);

    const dateTodoList = document.createElement("div");
    dateTodoList.className = "date-todolist";

    const padding = document.createElement("div");
    padding.className = "padding-date-todolist";

    const textDateTodolist = document.createElement("div");
    textDateTodolist.className = "text-date-todolist";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = "todo" + index + 1;

    const label = document.createElement("label");
    label.textContent = e.text;
    label.htmlFor = input.id;

    const textTime = document.createElement("div");
    textTime.className = "text-time";
    textTime.textContent = e.time;
    const jam = new Date(e.timestamp).getHours();
    const minute = new Date(e.timestamp).getMinutes();
    textTime.textContent = jam + ":" + minute;
    // console.log(e.timestamp);

    textDateTodolist.appendChild(input);
    textDateTodolist.appendChild(label);
    textDateTodolist.appendChild(textTime);
    padding.appendChild(textDateTodolist);
    dateTodoList.appendChild(padding);
    act1.appendChild(dateTodoList);
    listcontent.appendChild(act1);
    todoView.appendChild(listcontent);
  });
};
showList();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const toDoText = e.target.toDoText.value;
  data.push({
    text: toDoText,
    timestamp: new Date().getTime(),
    finish: false,
  });

  window.localStorage.setItem("datas", JSON.stringify(data));

  btnDelete.addEventListener("click", () => {
    localStorage.removeItem("datas");
    data = [];
    showList();
  });

  showList();
});
