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
// function dup(arr) {
//   // let newarr = [arr[0]]
//   // for (const item of arr) {
//   //   if (newarr.indexOf(item) === -1) {
//   //     newarr.push(item)
//   //   }
//   // }
//   // console.log(newarr);
//   // console.log([...new Set(arr)]);
// }
// dup([1,4,24,55,2,15,5,63,12,62,125,3426,12,56,2,3,1,34,2,15,4])

// 实现阶乘(递归)
// function mul(n) {
//   if (n === 1) {
//     return n
//   }
//   return mul(n-1)*n
// }
// console.log(mul(4));

// 回文 - 正念反念都一样
// function reback(str) {
//   let re = /\s+/g
//   str = str.replace(re,'')
//   console.log(Array.from(str).reverse().join(''));
//   console.log(Array.from(str).reverse().join('') == str);
// }
// reback("never odd or ev1en")

// 找出最长单词
// function findLongestWord(str) {
//   str = str.split(' ')
//   let obj = {
//     length: 0,
//     val: ''
//   }
//   for (const i of str) {
//     if (obj.length < i.length) {
//       obj.length = i.length
//       obj.val = i
//     }
//   }
//   console.log(obj);
// }
// findLongestWord("The quick brown fox j1umped ove111111r the lazy dog");

// 每个单词首字母大写
// function titleCase(str) {
//   // let arr = str.split(' ')
//   // let res = ''
//   // arr.forEach(e => {
//   //   let first = e[0].toUpperCase()
//   //   e = e.substr(1)
//   //   res = res + first + e + ' '
//   // })
//   // console.log(res.trim());

//   let res = str.split(' ').map(item => {
//     return item.replace(item.charAt(0),item[0].toUpperCase())
//   }).join(' ')
//   console.log(res);
// }
// titleCase("I'm a little tea pot");

// 返回数组中最大的数
// function largestOfFour(arr) {
//   let newarr = arr.flat()
//   let max = newarr[0]
//   for (const a of newarr) {
//     max = max < a ? a : max
//   }
//   console.log(max);
// }
// largestOfFour([[4, 5, 1, 3], [13, 2117, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// 判断字符串是否是指定字符结尾
// function confirmEnding(str, target) { 
//   console.log((str.substr(-target.length)==target) ? true:false);
// }
// confirmEnding("He has to give me a new name", "ame");
