let html = document.querySelector("#html"); //用css选择器找到id为html的元素
let style = document.querySelector("#style");
let string = `/* 你好，我是一名前端新人
 * 我叫容新
 * 首先我要准备一个div 
 */ 
#div1{
  
  border: 1px solid red;
  width: 200px;
  height: 200px
}
/* 接下来我把 div 变成一个八卦图
 * 看过来
 * 首先把div变成一个圆圈
*/
#div1{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,.5);
  border:none;
}
/* 八卦是阴阳相结合的
 * 一黑一白
 */
#div1{
 background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/* 加两个球*/
#div1::before{
  width: 100px;
  height: 100px;
  left:0;
  top:0;
  left:50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background: #000;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after{
  width: 100px;
  height: 100px;
  left:0;
  bottom:0;
  left:50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background: #fff;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
`;
let string2 = "";
let n = 0;
let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      //如果是回车加<br>
      string2 += "<br>";
    } else if (string[n] === " ") {
      //如果是空格就加“&nbsp”
      string2 += "&nbsp";
    } else {
      //其余照搬string[n]的内容
      string2 += string[n];
    }
    //如果是回车，就不照搬,并变成<br>
    //如果不是回车就照搬

    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    html.scrollTo(0, 99999);
    window.scrollTo(0, 99999); //使视口保持在页面最下面

    if (n + 1 < string.length) {
      //如果不写n+1最后就会多一个undefined
      n += 1;
      step();
    }
  }, 50);
};
step();
