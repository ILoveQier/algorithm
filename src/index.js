// 素数
// function testSu(num) {
//   let i = 2
//   while (1) {
//     if (num == i || num == 1) {
//       return true
//     }
//     if(num % i == 0) {
//       return false
//     }
//     i++
//   }
// }
// console.log(testSu(17));

// 素数因子
// function testSuyinzi(num) {
//   let fac = []
//   let div = 2
//   while (num > 2) {
//     if (num % div == 0) {
//       fac.push(div)
//       num = num / div
//     } else {
//       div++
//     }
//   }
//   return fac
// }
// console.log(testSuyinzi(69));

// 斐波那契
// function fibonacci(n) {
//   if (n == 2 || n == 1) {
//     return 1;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2);
//   }
// }
// console.log(fibonacci(12));

// function fib(n) {
//   let arr = [1, 1]
//   if (n == 1 || n == 2) {
//     return arr
//   }
//   let res = 0
//   while (res < n - 2) {
//     arr.push(arr[res] + arr[res + 1])
//     res++
//   }
//   console.log(arr);
//   console.log(arr.reduce((a, b) => a + b));
// }
// fib(12)

// 反转一个整数
// function reserveInteger(num) {
//   let arr = Array.from(num.toString())
//   let res = ''
//   for (let index = arr.length - 1; index >= 0; index--) {
//     res = res + arr[index]
//   }
//   console.log(res);

// }
// reserveInteger(11423)

// 去重
function dup(arr) {
  
  
}
dup([1,4,24,55,2,15,5,63,12,62,125,3426,12,56,2,3,1,34,2,15,4])



