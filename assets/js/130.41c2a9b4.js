(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{498:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"javascript数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript数据类型"}},[t._v("#")]),t._v(" javascript数据类型")]),t._v(" "),a("p",[t._v("ECMAScript 标准定义了 7 种数据类型:")]),t._v(" "),a("p",[a("strong",[t._v("6种原始类型-基本数据类型(按值访问)")])]),t._v(" "),a("ul",[a("li",[t._v("Null (js中的数据在底层是以二进制存储，如果前三位为0，那么就会判定为object，而null的所有都为0)")]),t._v(" "),a("li",[t._v("Undefined")]),t._v(" "),a("li",[t._v("基本包装类型(自动创建的基本包装类型的对象—非Boolean,Number, String内置函数new出来的，对象只存代码的执行瞬间）\n"),a("ul",[a("li",[t._v("Number(基于 IEEE 754 标准的双精度 64 位二进制格式的值——数字、±Infinity、NaN）")]),t._v(" "),a("li",[t._v("String")]),t._v(" "),a("li",[t._v("Boolean")])])]),t._v(" "),a("li",[t._v("Symbol (ECMAScript 6新定义，实例是唯一且不可改变的)")])]),t._v(" "),a("p",[a("strong",[t._v("引用类型")]),t._v("： Object(包括Object/Array/Function/RegExp/Date)")]),t._v(" "),a("h3",{attrs:{id:"什么是弱类型语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是弱类型语言"}},[t._v("#")]),t._v(" 什么是弱类型语言")]),t._v(" "),a("ul",[a("li",[t._v("变量的类型就是其值的类型，也就是说"),a("strong",[t._v("变量当前的类型由其值所决定")])]),t._v(" "),a("li",[t._v('变量类型可以改变，a = 1 类型是number, a= "hello", 类型变为 string')])]),t._v(" "),a("h3",{attrs:{id:"类型检测的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型检测的方式"}},[t._v("#")]),t._v(" 类型检测的方式")]),t._v(" "),a("ol",[a("li",[t._v("typeof；不能检测引用类型；")]),t._v(" "),a("li",[t._v("instanceof；不能检测基本类型；只能判断是否是当前类型实例；不能判断到底属于哪种类型；")]),t._v(" "),a("li",[a("code",[t._v("Object.prototype.toString.call()；")]),t._v(" 推荐使用；")]),t._v(" "),a("li",[t._v("constructor；易被修改，不能跨iframe;")])]),t._v(" "),a("h4",{attrs:{id:"优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[t._v("#")]),t._v(" 优缺点")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("不同类型的优缺点")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("typeof")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("instanceof")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("constructor")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Object.prototype.toString.call")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("优点")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("使用简单")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("能检测出引用类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("基本能检测所有的类型（除了null和undefined）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("检测出所有的类型")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("缺点")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("只能检测出基本类型（除了null）")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("strong",[t._v("不能检测出基本类型")]),t._v("，且不能跨iframe")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("constructor易被修改，也不能跨iframe")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("IE6下，undefined和null均为Object")])])])]),t._v(" "),a("h4",{attrs:{id:"如何准确的判断数组类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何准确的判断数组类型"}},[t._v("#")]),t._v(" 如何准确的判断数组类型")]),t._v(" "),a("ul",[a("li",[t._v("a instanceof Array => instanceof和constructor不能跨iframe,所以此方案不行！")]),t._v(" "),a("li",[t._v("Object.prototype.toString.call(a) === '[object Array]' => "),a("strong",[t._v("应选方案")])])]),t._v(" "),a("h2",{attrs:{id:"数组相关的常用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组相关的常用方法"}},[t._v("#")]),t._v(" 数组相关的常用方法")]),t._v(" "),a("p",[t._v("push/pop, shift/unshift, split/join, slice/splice/concat, sort/reverse, map/reduce, forEach, filter")]),t._v(" "),a("p",[t._v("slice: slice是指定在一个数组中的元素创建一个新的数组，即原数组不会变")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" color "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yellow'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'black'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" color2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" 　　"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出   red,blue,yellow,black")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("color2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//输出   blue;注意：这里只有第二项一个值")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("splice: splice是JS中数组功能最强大的方法，它能够实现对数组元素的"),a("code",[t._v("删除、插入、替换操作")]),t._v("，返回值为"),a("code",[t._v("被操作的值")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("var color = new Array('red','blue','yellow','black');")])]),t._v(" "),a("ul",[a("li",[t._v("splice删除：　　color.splice(1,2) （删除color中的1、2两项）；")]),t._v(" "),a("li",[t._v("splice插入：　　color.splice(1,0,'brown','pink') （在color键值为1的元素前插入两个值）；")]),t._v(" "),a("li",[t._v("splice替换：　　color.splice(1,2,'brown','pink')  （在color中替换1、2元素）；")])]),t._v(" "),a("h2",{attrs:{id:"字符串相关的常用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串相关的常用方法"}},[t._v("#")]),t._v(" 字符串相关的常用方法")]),t._v(" "),a("p",[t._v("indexOf/lastIndexOf/charAt, split/match/test, slice/substring/substr, toLowerCase/toUpperCase")]),t._v(" "),a("h2",{attrs:{id:"对象的底层数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象的底层数据结构"}},[t._v("#")]),t._v(" 对象的底层数据结构")]),t._v(" "),a("p",[t._v("js一切皆对象，所以，js的一些引用类型是 特殊封装的对象")]),t._v(" "),a("h3",{attrs:{id:"object底层实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object底层实现"}},[t._v("#")]),t._v(" Object底层实现")]),t._v(" "),a("p",[t._v("Object => HeapObject => JSReceiver => JSObject")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://muyids.oss-cn-beijing.aliyuncs.com/js-object.png",alt:"JS Object类图"}})]),t._v(" "),a("ul",[a("li",[t._v("V8里面所有的数据类型的根父类都是Object")]),t._v(" "),a("li",[t._v("Object派生"),a("code",[t._v("HeapObject")]),t._v("，提供存储基本功能")]),t._v(" "),a("li",[t._v("往下的"),a("code",[t._v("JSReceiver")]),t._v("用于原型查找")]),t._v(" "),a("li",[t._v("再往下的"),a("code",[t._v("JSObject")]),t._v("就是JS里面的Object")]),t._v(" "),a("li",[t._v("Array/Function/Date等继承于JSObject")]),t._v(" "),a("li",[t._v("左边的"),a("code",[t._v("FixedArray")]),t._v("是实际存储数据的地方")])]),t._v(" "),a("h3",{attrs:{id:"array底层实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#array底层实现"}},[t._v("#")]),t._v(" Array底层实现")]),t._v(" "),a("p",[t._v("Object => HeapObject => JSReceiver => JSArray // 看V8的源码")]),t._v(" "),a("p",[t._v("array 是在 object 的基础上继续封装而实现的，")]),t._v(" "),a("p",[t._v("动态数组，动态分配内存，跟java里的ArrayList, C++里的vector比较类似")]),t._v(" "),a("ul",[a("li",[t._v("push扩容：原数组长度的1.5倍+16")]),t._v(" "),a("li",[t._v("pop减容：容量大于等于length的2倍，容量减为数组长度")])]),t._v(" "),a("h3",{attrs:{id:"map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[t._v("#")]),t._v(" Map")]),t._v(" "),a("p",[t._v("map 和 set")]),t._v(" "),a("p",[t._v("Object => HeapObject => JSReceiver => JSCollection")]),t._v(" "),a("h2",{attrs:{id:"symbol类型在实际开发中的应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#symbol类型在实际开发中的应用"}},[t._v("#")]),t._v(" symbol类型在实际开发中的应用")]),t._v(" "),a("ol",[a("li",[t._v("定义"),a("strong",[t._v("不需要对外")]),t._v("操作和访问的属性")]),t._v(" "),a("li",[a("strong",[t._v("替代常量")]),t._v("；不需要担心"),a("strong",[t._v("常量名字重复")])]),t._v(" "),a("li",[t._v("定义"),a("strong",[t._v("类的私有属性/方法")])])]),t._v(" "),a("h3",{attrs:{id:"不需要对外操作和访问的属性使用symbol来定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不需要对外操作和访问的属性使用symbol来定义"}},[t._v("#")]),t._v(" 不需要对外操作和访问的属性使用Symbol来定义")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Object.keys()")]),t._v("或者"),a("code",[t._v("for...in")]),t._v("不能枚举 Symbol 属性")]),t._v(" "),a("li",[a("code",[t._v("JSON.stringify()")]),t._v("将对象转换成JSON字符串的时候，Symbol属性也会被排除在输出内容之外：")])]),t._v(" "),a("h3",{attrs:{id:"使用symbol来替代常量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用symbol来替代常量"}},[t._v("#")]),t._v(" 使用Symbol来替代常量")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE_AUDIO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE_VIDEO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE_IMAGE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("替换成：")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE_AUDIO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE_VIDEO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TYPE_IMAGE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("好处：不会重复！")]),t._v(" "),a("h3",{attrs:{id:"使用symbol定义类的私有属性-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用symbol定义类的私有属性-方法"}},[t._v("#")]),t._v(" 使用Symbol定义类的私有属性/方法")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PASSWORD")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Symbol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Login")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("username "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" username\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" password\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("checkPassword")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("pwd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" pwd\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" Login\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[a("strong",[t._v("注册和获取全局Symbol")]),t._v(": Symbol.for()")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" gs1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'global_symbol_1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//注册一个全局Symbol")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" gs2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Symbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'global_symbol_1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取全局Symbol")]),t._v("\n\ngs1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" gs2  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"变量在内存中的存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量在内存中的存储"}},[t._v("#")]),t._v(" 变量在内存中的存储")]),t._v(" "),a("p",[t._v("基本数据类型在 栈中；对象在堆中，对象的引用在栈中")]),t._v(" "),a("h3",{attrs:{id:"堆和栈的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#堆和栈的区别"}},[t._v("#")]),t._v(" 堆和栈的区别")]),t._v(" "),a("ul",[a("li",[t._v("栈：基本数据类型和引用，值访问，存储的值大小固定，系统自动分配内存空间；空间小，运行效率高；后进先出；")]),t._v(" "),a("li",[t._v("堆：存储引用的数据，按引用访问，存储的值大小不定，可动态调节，代码指定分配，空间大，运行效率低，无序存储")])]),t._v(" "),a("h2",{attrs:{id:"装箱拆箱操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#装箱拆箱操作"}},[t._v("#")]),t._v(" 装箱拆箱操作")]),t._v(" "),a("ul",[a("li",[t._v("装箱：把基本数据类型转化为对应的引用数据类型的操作;基本类型值=>对象，js内部实现；")]),t._v(" "),a("li",[t._v("拆箱：将引用类型对象转换为对应的值类型对象：通过引用类型的"),a("code",[t._v("valueOf()")]),t._v("或者"),a("code",[t._v("toString()")]),t._v("方法来实现")])]),t._v(" "),a("h2",{attrs:{id:"null和undefined的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#null和undefined的区别"}},[t._v("#")]),t._v(" null和undefined的区别")]),t._v(" "),a("ul",[a("li",[t._v("null表示没有对象，即该处不应该有值")]),t._v(" "),a("li",[t._v("undefined表示缺少值，即此处应该有值，但没有定义")])]),t._v(" "),a("p",[t._v("null和undefined转换成number数据类型时：")]),t._v(" "),a("ul",[a("li",[t._v("null 默认转成 0")]),t._v(" "),a("li",[t._v("undefined 默认转成 NaN")])]),t._v(" "),a("h2",{attrs:{id:"隐式类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隐式类型转换"}},[t._v("#")]),t._v(" 隐式类型转换")]),t._v(" "),a("h3",{attrs:{id:"可能发生隐式类型转换的场景以及转换原则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可能发生隐式类型转换的场景以及转换原则"}},[t._v("#")]),t._v(" 可能发生隐式类型转换的场景以及转换原则")]),t._v(" "),a("p",[t._v("弱类型语言，会把变量隐式转换成自己需要的类型")]),t._v(" "),a("ul",[a("li",[t._v("自动转换 Boolean\n"),a("ul",[a("li",[t._v("if 语句 或者其他需要 Boolean 的地方")]),t._v(" "),a("li",[t._v("== 两个等号判断")])])]),t._v(" "),a("li",[t._v("运算符\n"),a("ul",[a("li",[t._v("在非 Numeber 类型进行数学运算符 - * / 时，会先将非 Number 转换成 Number 类型。")]),t._v(" "),a("li",[t._v("运算符要考虑字符串的情况，在操作数中存在字符串时，优先转换成字符串，")])])])]),t._v(" "),a("h3",{attrs:{id:"应如何避免或巧妙应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应如何避免或巧妙应用"}},[t._v("#")]),t._v(" 应如何避免或巧妙应用")]),t._v(" "),a("p",[t._v("避免：")]),t._v(" "),a("ul",[a("li",[t._v("先进行"),a("strong",[t._v("显示类型转换")]),t._v("再应用")]),t._v(" "),a("li",[t._v("判断相等时使用 === 而不是 ==")])])])}),[],!1,null,null,null);s.default=e.exports}}]);