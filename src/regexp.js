// let str = '  asb235bb  12n512jn 125 '
// test匹配成功返回true
// let re = /\W/
// console.log(re.test(str));

// search匹配成功后的下标
// let re = /b23/
// console.log(str.search(re));

// match 返回数组
// let re = /\d+/g
// console.log(str.match(re));

// replace
// let re = /\d/g
// let re = /b+/g
// console.log(str.replace(re,'*'));

// 去掉字符串中的空格
// let re = /^\s+|\s+$/
// // let re = /\s/g
// console.log(str);
// console.log(str.replace(re,''));

// 匹配字符串中所有的HTML（1）标签头部 或 尾部 （2）标签头部（3）完整标签
// let str = 'ada<option value="hh">0</option>54<div id="as">adda</div>ad'
// let re = /<.*>/g

//（1）匹配 标签头部 或 尾部
// let re = /<.*?>/g

//（2）匹配 标签头部
// let re = /<[^\/].*?>/g
// let re = /<\w.*?>/g
// let re = /<[A-z].*?>/g

// （3）匹配 完整标签
// let re = /<.*?>.*?<\/.*?>/g

// 提取所有链接地址
// var str = 'IT<a href="http://hi.baidu.com/mianshiti/blog/category/微软面试题">微软面题</a>';
// let re = /(?:<a href=")(.*)(?:">)/g
// console.log(re.exec(str));

// 获取参数 组成数组返回
// let url = 'http://wwww.jb51.net/?q=js&a=33&b="哈哈"'
// function testUrl(url) {
//   let str = (/(?:\?)(.*)/g).exec(url)[1]
//   str = str.split('&')
//   let arr = []
//   for (const i of str) {
//     let r = (/(.*)(?:=)(.*)/g).exec(i)
//     arr.push(r[2])
//   }
//   console.log(arr);
// }
// testUrl(url)

// 驼峰
// var str = "get-element-by-id";
// let re = /-\w/g
// str = str.replace(re, a => a[1].toUpperCase())
// console.log(str);

// 分隔数字
// var str = "12345678901";
// let re = /\d{3}/g
// console.log(str.match(re).join(','));
 
// 过滤标签
// var str="<p>dasdsa</p>nice <br> test</br>"
// var regx = /<.*?>/g;
// str = str.replace(regx, '');
// console.log(str);





