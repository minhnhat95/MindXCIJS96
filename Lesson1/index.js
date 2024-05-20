// Normail Function
// f(x)=ax+b

// Hàm này không trả về gia trị gì cả chỉ để thực thi
// function sayHello(x){
//   // code ...
//   let a=2;
//   let b=9;
//   const result = a*x+b;
//   console.log(result);
//   return result;
// }
// let resultSayHello = sayHello(4);

// Arrow Function
// Cú pháp co bản nhất
// const sayHi =(x)=>{
//   let a=2;
//   let b=9;
//   return =a*x+b;
// }
// Cú pháp số hai
// Khi suy ra (=>)là một giá trị hoặc các logic trả về giá trị, thì giống như phép return bình thường
// const sayHi =(x)=> 2*x+9;
// Cú pháp số ba. Khi tham số truyền vào chỉ có 1, ta được phép bỏ "()"
// const sayHi =x=> 2*x+9;
// {}
// Bên trong đóng mở () phải là giá trị
// const sayHi=(x,y,z)=>({name:`MindX`})

// Template literal
// Được ra đời để phục vụ việc nối chuỗi hay xử lý biến (giá trị). Hỗ trợ viết trên nhiều dòng
const user = "MindX";
// const text= "Hello " + user;
const text = `Hello ${user}`;
console.log(text);
