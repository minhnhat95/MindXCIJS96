// Bài7:Tìm nhân viên có mức lương cao nhất và trả về thông tin của họ
// let best = (employees) => {
//   let a = employees[0].salary;
//   let result = employees[0];
//   for (let i = 1; i < employees.length; i++) {
//     if (a < employees[i].salary) {
//       a = employees[i].salary;
//       result = employees[i];
//     }
//   }
//   return result;
// };
// console.log("Nhân viên có mức lương cao nhất là:");
// console.log(
//   best([
//     { id: 1, name: "John", salary: 2000 },
//     { id: 2, name: "Jane", salary: 2500 },
//     { id: 3, name: "Mark", salary: 3000 },
//   ])
// );

// --------------------------------------------------------------

// Bài8: Tìm nhân viên làm việc chăm chỉ nhất (công cao nhất)

// let hardWorking = (employees) => {
//   let a = employees[0].workingDays - employees[0].lateDays;
//   let result = employees[0];
//   for (let i = 1; i < employees.length; i++) {
//     if (a < employees[i].workingDays - employees[i].lateDays) {
//       a = employees[i].workingDays - employees[i].lateDays;
//       result = employees[i];
//     }
//   }
//   return result;
// };
// console.log("Nhân viên làm việc chăm chỉ nhất là:");
// console.log(
//   hardWorking([
//     { id: 1, name: "John", workingDays: 22, lateDays: 2 },
//     { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
//     { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
//   ])
// );

// -----------------------------------------------------------------

// Bài9:Tạo một hàm để nhóm các nhân viên theo tên và trả về một object với tên của nhân viên là key và danh sách các nhân viên có cùng tên đó là value
// const employees = [
//   { id: 1, name: "John", salary: 2000 },
//   { id: 2, name: "Jane", salary: 2500 },
//   { id: 3, name: "Mark", salary: 3000 },
//   { id: 4, name: "John", salary: 2200 },
// ];
// const result = {};
// const listName = employees.map((item) => item.name);
// console.log(listName);
// listName.forEach((item, idx) => {
//   if (!result[item]) {
//     result[item] = [];
//   }
//   result[item].push(employees[idx]);
// });
// console.log(result);

// Cach2:
// const employees = [
//   { id: 1, name: "John", salary: 2000 },
//   { id: 2, name: "Jane", salary: 2500 },
//   { id: 3, name: "Mark", salary: 3000 },
//   { id: 4, name: "John", salary: 2200 },
// ];
// const result = {};
// employees.forEach((item) => {
//   if (!result[item.name]) {
//     result[item.name] = [];
//   }
//   result[item.name].push(item);
// });
// console.log(result);

// -------------------------------------------------------------------------

// Bai10: Cho một mảng các đối tượng nhân viên, mỗi đối tượng chứa thông tin về số công làm việc, số công đi làm muộn và mức lương của nhân viên.
// Tính hiệu suất của mỗi nhân viên bằng cách chia số ngày làm việc cho mức lương, sau đó tìm nhân viên có hiệu suất cao nhất và trả về thông tin của họ.

// let hardWorking = (employees) => {
//   let a = employees[0].workingDays / employees[0].salary;
//   let result = employees[0];
//   for (let i = 1; i < employees.length; i++) {
//     if (a < employees[i].workingDays / employees[i].salary) {
//       a = employees[i].workingDays / employees[i].salary;
//       result = employees[i];
//     }
//   }
//   return result;
// };
// console.log("Nhân viên hiệu suất nhất là:");
// console.log(
//   hardWorking([
//     { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
//     { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
//     { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
//   ])
// );

// -------------------------------------------------------------

// Bài11: Cho một mảng các đối tượng nhân viên, mỗi đối tượng chứa thông tin về số công làm việc của nhân viên. Tạo một biểu đồ phân bố số công làm việc (histogram) trong đó mỗi mốc là số công làm việc, và số lượng nhân viên nằm trong mốc đó.
// const employees = [
//   { id: 1, name: "John", workingDays: 20 },
//   { id: 2, name: "Jane", workingDays: 22 },
//   { id: 3, name: "Mark", workingDays: 20 },
//   { id: 4, name: "Sam", workingDays: 24 },
//   { id: 5, name: "Lucy", workingDays: 22 },
// ];
// const result = {};
// employees.forEach((item) => {
//   if (!result[item.workingDays]) {
//     result[item.workingDays] = 0;
//   }
//   result[item.workingDays]++;
// });
// console.log(result);

// ----------------------------------------------------------------

// Bài12:Cho một mảng các đối tượng nhân viên, mỗi đối tượng chứa thông tin về tên, email, số công làm việc, số công đi làm muộn, và mức lương của nhân viên. Tạo một danh sách các đối tượng mới trong đó mỗi đối tượng chứa tên nhân viên, email và thông tin tổng hợp về số công làm việc và đi làm muộn dưới dạng một object con.
// const employees = [
//   {
//     id: 1,
//     name: "John",
//     email: "john@example.com",
//     workingDays: 22,
//     lateDays: 2,
//     salary: 2000,
//   },
//   {
//     id: 2,
//     name: "Jane",
//     email: "jane@example.com",
//     workingDays: 20,
//     lateDays: 0,
//     salary: 2500,
//   },
//   {
//     id: 3,
//     name: "Mark",
//     email: "mark@example.com",
//     workingDays: 25,
//     lateDays: 1,
//     salary: 3000,
//   },
// ];
// const result = [];
// employees.forEach((item) => {
//   const tmp = {
//     name: item.name,
//     email: item.email,
//     workInfo: {
//       workingDays: item.workingDays,
//       lateDays: item.lateDays,
//     },
//   };
//   result.push(tmp);
// });
// console.log(result);

// Cach2:
// const employees = [
//   {
//     id: 1,
//     name: "John",
//     email: "john@example.com",
//     workingDays: 22,
//     lateDays: 2,
//     salary: 2000,
//   },
//   {
//     id: 2,
//     name: "Jane",
//     email: "jane@example.com",
//     workingDays: 20,
//     lateDays: 0,
//     salary: 2500,
//   },
//   {
//     id: 3,
//     name: "Mark",
//     email: "mark@example.com",
//     workingDays: 25,
//     lateDays: 1,
//     salary: 3000,
//   },
// ];
// const result = [];
// employees.forEach((item) => {
//   const tmp = Object.assign(
//     { name: item.name },
//     { email: item.email },
//     {
//       workInfo: Object.assign(
//         { workingDays: item.workingDays },
//         { lateDays: item.lateDays }
//       ),
//     }
//   );
//   result.push(tmp);
// });
// console.log(result);

// ----------------------------------------------------------------------------
// Bài13: Quản lý danh sách công việc
// Yêu cầu:
// 1. Viết hàm thực thi thêm một công việc mới
// 2. Viết hàm đánh dấu một hoặc nhiều công việc hoàn thành
// 3. Viết hàm sắp xếp các công việc theo alphabet của tên công việc theo hai chiều A -> Z, Z -> A
// let tasks = [
//   {
//     name: "Hoàn thành bài tập JavaScript",
//     description: "Làm xong bài tập về Array và Object",
//     completed: false,
//   },
//   { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
//   {
//     name: "Đi mua hàng",
//     description: "Mua thêm thức ăn cho tuần",
//     completed: false,
//   },
// ];

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const descriptionInput = document.getElementById("description-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const newTask = todoInput.value;
  const newDescription = descriptionInput.value;
  if (newTask === "" && newDescription === "") {
    alert("Please enter a task!");
    return;
  }
  todoInput.value = "";
  descriptionInput.value = "";
  addTask(newTask, newDescription);
});

function addTask(task, description) {
  const listItem = document.createElement("li");
  const taskText = document.createElement("span");
  taskText.setAttribute("class", "name");
  const descriptionText = document.createElement("span");
  descriptionText.setAttribute("class", "descript");
  taskText.textContent = task;
  descriptionText.textContent = description;
  listItem.appendChild(taskText);
  listItem.appendChild(descriptionText);

  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  listItem.appendChild(checkBox);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  listItem.appendChild(deleteButton);

  todoList.appendChild(listItem);

  checkBox.addEventListener("change", function () {
    if (this.checked) {
      taskText.style.textDecoration = "line-through";
      descriptionText.style.textDecoration = "line-through";
      listItem.classList.add("completed");
    } else {
      taskText.style.textDecoration = "none";
      descriptionText.style.textDecoration = "none";
      listItem.classList.remove("completed");
    }
  });

  deleteButton.addEventListener("click", function () {
    todoList.removeChild(listItem);
  });

  saveTasksToLocalStorage();
}

function saveTasksToLocalStorage() {
  const tasks = [];
  document.querySelectorAll("#todo-list li").forEach((task) => {
    const taskText = task.getElementsByClassName("name")[0].textContent;
    const descriptionText =
      task.getElementsByClassName("descript")[0].textContent;
    const isCompleted = task.classList.contains("completed");
    tasks.push({
      name: taskText,
      description: descriptionText,
      completed: isCompleted,
    });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

document.addEventListener("DOMContentLoaded", function () {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((task) => {
    addTask(task.text);
  });
});
