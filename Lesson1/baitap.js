// Bai1:Tạo một arrow function để tính bình phương của một số
// Cach1
// function squareA(x) {
//   return x * x;
// }
// console.log("Bình phương của 4");
// console.log(squareA(4));

// Cach 2
// let squareB = (x) => x * x;
// let kQ = squareB(4);
// console.log(kQ);

// Cach 3
// let squareC = (x) => {
//   return x * x;
// };
// let kQ = squareC(4);
// console.log(kQ);

// --------------------------------------------------------------------------------

// Bai2:Viết một arrow function để kiểm tra xem một chuỗi có chứa một từ khóa cụ thể hay không
// includes js trả true/false
// let bai2 = (text, object) => {
//   return text.includes(object);
// };
// let kQ = bai2("Hello world", "world");
// console.log(kQ);

// indexof js trả về thứ tự
// let bai2 = (text, object) => {
//   let a = text.indexOf(object);
//   return a !== -1;
// };
// let kQ = bai2("Hello world", "world");
// console.log(kQ);

// Cach rut gon
// let bai2 = (text, object) => {
//   return text.indexOf(object) !== -1;
// };
// console.log(bai2("Hello world", "world"));

// Rut gon
// let bai2 = (text, object) => text.indexOf(object) !== -1;
// console.log(bai2("Hello world", "world"));

// -------------------------------------------------------------------------------

// Bai3:Viết arrow function thêm một tiền tố vào mỗi phần tử của một mảng chuỗi
// let addPrefix = (arr, prefix) => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const e = `${prefix} : ${arr[i]}`;
//     result.push(e);
//   }
//   return result;
// };
// console.log(addPrefix(["one", "two", "three"], "number"));

// MAP (BTVN)
// let addPrefix = (arr, prefix) => {
//   let result = arr.map((x) => `${prefix} : ${x}`);
//   return result;
// };
// console.log(addPrefix(["one", "two", "three"], "number"));

// ----------------------------------------------------------------------------------

// Bài4: Sử dụng Arrow function để nhân đôi giá trị của các phần tử trong một mảng số
// let double = (arr) => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const e = arr[i] * 2;
//     result.push(e);
//   }
//   return result;
// };
// console.log(double([1, 2, 3, 4]));

// (Buổi sau) map để nhân đôi giá trị của các phần tử trong một mảng số
// let double = (arr) => {
//   let result = arr.map((x) => x * 2);
//   return result;
// };
// console.log(double([1, 2, 3, 4]));

// ---------------------------------------------------------------

// Bài5: Sử dụng Arrow function để lấy ra các phần tử là số lẻ từ một mảng
// let le = (arr) => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       const e = arr[i];
//       result.push(e);
//     }
//   }
//   return result;
// };
// console.log(le([1, 2, 3, 4, 5, 6]));

// -------------------------------------------------------------------

// Bài6:Tính tổng số công làm việc của các nhân viên
// let sum = (employees) => {
//   let result = 0;
//   for (let i = 0; i < employees.length; i++) {
//     result += employees[i].workingDays;
//   }
//   return result;
// };
// console.log("Tổng số công làm việc của các nhân viên:");
// console.log(
//   sum([
//     { id: 1, name: "John", workingDays: 22 },
//     { id: 2, name: "Jane", workingDays: 20 },
//     { id: 3, name: "Mark", workingDays: 25 },
//   ])
// );

// ------------------------------------------------------------------------

// Bài7:Tìm nhân viên có mức lương cao nhất và trả về thông tin của họ
let best = (employees) => {
  let a = employees[0].salary;
  let result = employees[0];
  for (let i = 1; i < employees.length; i++) {
    if (a < employees[i].salary) {
      a = employees[i].salary;
      result = employees[i];
    }
  }
  return result;
};
console.log("Nhân viên có mức lương cao nhất là:");
console.log(
  best([
    { id: 1, name: "John", salary: 2000 },
    { id: 2, name: "Jane", salary: 2500 },
    { id: 3, name: "Mark", salary: 3000 },
  ])
);
