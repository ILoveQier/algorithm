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


// 截断字符串
// function truncate(str,n) {
//   let len = str.length
//   let s1 = str.slice(0,n)
//   let s2 = str.slice(n,len)
//   console.log(s1,'---',s2);
// }
// truncate("Absolutely Longer", 114);

// 指定数目 分割数组
// function chunk(arr, n) {
//   let newarr = []
//   for (let index = 0; index < arr.length; index+=n) {
//       newarr.push(arr.slice(index,index+n).join(''))    
//   }
//   console.log(newarr);
// }
// chunk(["a", "1b", "c4", "d4", "1e"], 4);

// 去重
// function reduplicate(arr) {
//   // 1. set
//   // return [...new Set(arr)]
//   // 2. forof, indexof
//   // let newarr = []
//   // for (const item of arr) {
//   //   if (newarr.indexOf(item) === -1) {
//   //     newarr.push(item)
//   //   }
//   // }
//   // return newarr
//   // 3. foreach , indexof
//   // let newarr = []
//   // arr.forEach(e => {
//   //   if (newarr.indexOf(e) === -1) {
//   //     newarr.push(e)
//   //   }
//   // })
//   // return newarr
//   // 4. filter
//   // return arr.filter((item,i) => i === arr.indexOf(item))
// }
// let a = reduplicate([1, 23, 1, 1, 11, 24, 1, 5, 2, 5, 5, 25, 6,
//   1, 213, 541, 5123, 5, 13, 1, 2])
// console.log(a.toString());

// 数组打乱
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// function reArr(arr) {
//   let len = arr.length
//   while (len) {
//     let index = Math.floor(Math.random() * len--)
//     {
//       [arr[len], arr[index]] = [arr[index], arr[len]]
//     }
//   }
//   console.log(arr);
// }
// function reArr(arr) {
//   let len = arr.length
//   for (let i = 0; i < len; i++) {
//     var index = Math.floor(Math.random() * len)
//     {
//       [arr[i], arr[index]] = [arr[index], arr[i]]
//     }
//   }
//   console.log(arr);
// }
// reArr(arr)

// // arr.sort(()=>0.5-Math.random())

// 大数相加
// function sumBig(a, b) {
//   let res = '', temp = 0
//   a = a.split('')
//   b = b.split('')
//   while (a.length || b.length || temp) {
//     temp = ~~a.pop() + ~~b.pop()
//     res = temp % 10 + res
//     temp = temp > 9
//   }
//   console.log(res.replace(/^0+/g, ''));
// }
// sumBig('12421512', '21566')

// 从nums里面过滤出所有奇数，并翻倍这些奇数
// let nums = [1, 2, 3, 4, 5, 6, 7]
// let isodd = num => num % 2 !== 0
// let double = num => num *2
// let add = (a,b) => a+b

// let res = nums.filter(isodd).map(double).reduce(add)
// console.log(res);

// let arr = [2, 13, 5, 15, 6]
// // // 插入排序
// function charu(arr) {
//   let res = arr.splice(0, 1)
//   for (const item of arr) {
//     for (let i = 0; i < res.length; i++) {
//       if (item < res[i]) {
//         res.splice(i, 0, item)
//         break
//       } else if (i === res.length - 1) {
//         res.push(item)
//         break
//       }
//     }
//   }
//   return res
// }
// console.log(charu(arr));

// 快速排序
// function kuaisu(arr) {
//   if (arr.length <= 1) {
//     return arr
//   }
//   let mid = arr.splice(parseInt(arr.length / 2), 1)[0]
//   let left = []
//   let right = []
//   for (const item of arr) {
//     (item < mid ? left : right).push(item)
//   }
//   return kuaisu(left).concat(mid, kuaisu(right))
// }
// console.log(kuaisu(arr));

// 冒泡排序
// function maopao(arr) {
//   for (let i = 0; i < arr.length-1; i++) {
//     for (let j = i + 1; j < arr.length ; j++) {
//       if (arr[i] > arr[j]) {
//         [arr[i], arr[j]] = [arr[j], arr[i]]
//       }
//     }
//   }
//   console.log(arr);
// }
// maopao(arr)

// 字符串slice
// let str = '123456'
// console.log([].slice.call(str));
// var obj = {0:'hello',1:'world',length:2};
// console.log(Array.prototype.slice.call(obj));//["hello", "world"]
// var obj = {0:'hello',1:'world'};//没有length属性
// console.log(Array.prototype.slice.call(obj,0));//[]

// let arr = [12, 2, 34, 15, 1, 32, 5, 754, 231, 6, 25, 749, 32785, 32, 3685, 123, 678, 23, 7]
// function kuai(arr, flag) {
//   if (arr.length <= 1) {
//     return arr
//   }
//   let mid = arr.splice(parseInt(arr.length / 2), 1)[0]
//   let left = []
//   let right = []
//   for (const item of arr) {
//     ((flag ? item < mid : item > mid) ? left : right).push(item)
//   }
//   return kuai(left,true).concat(mid, kuai(right,true))
// }
// console.log(kuai(arr, true));

// key去重
// let arr = [1,13,2,13,25,21,56,12,56,1,6,24,11,11,14,1,2]
// function del(arr) {
//   let hash = {}
//   let narr = []
//   for (const item of arr) {
//     if (!hash[item]) {
//       hash[item] = item
//       narr.push(item)
//     }
//   }
//   return narr
// }
// console.log(del(arr));
