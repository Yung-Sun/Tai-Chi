parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#html"),r=document.querySelector("#style"),e="/* 你好，我是一名前端新人\n * 我叫容新\n * 首先我要准备一个div \n */ \n#div1{\n  \n  border: 1px solid red;\n  width: 200px;\n  height: 200px\n}\n/* 接下来我把 div 变成一个八卦图\n * 看过来\n * 首先把div变成一个圆圈\n*/\n#div1{\n  border-radius: 50%;\n  box-shadow: 0 0 3px rgba(0,0,0,.5);\n  border:none;\n}\n/* 八卦是阴阳相结合的\n * 一黑一白\n */\n#div1{\n background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);\n}\n/* 加两个球*/\n#div1::before{\n  width: 100px;\n  height: 100px;\n  left:0;\n  top:0;\n  left:50%;\n  transform: translateX(-50%);\n  border-radius: 50%;\n  background: #000;\n  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);\n}\n#div1::after{\n  width: 100px;\n  height: 100px;\n  left:0;\n  bottom:0;\n  left:50%;\n  transform: translateX(-50%);\n  border-radius: 50%;\n  background: #fff;\n  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);\n}\n",d="",a=0,t=function t(){setTimeout(function(){"\n"===e[a]?d+="<br>":" "===e[a]?d+="&nbsp":d+=e[a],n.innerHTML=d,r.innerHTML=e.substring(0,a),n.scrollTo(0,99999),window.scrollTo(0,99999),a+1<e.length&&(a+=1,t())},50)};t();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.988659af.js.map