(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{401:function(s,e,a){"use strict";a.r(e);var n=a(42),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("总结了"),a("code",[s._v("MongoDB 性能优化")]),s._v("的几个点，遇到mongodb的性能问题时，可以按照如下步骤排查，希望能够有所帮助。")]),s._v(" "),a("h2",{attrs:{id:"查看process信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看process信息"}},[s._v("#")]),s._v(" 查看Process信息")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("db.currentOp()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("强制结束请求")])]),s._v(" "),a("p",[a("code",[s._v("db.currentOp()")]),s._v("找出一直没结束的请求的opid（currentOp.opid字段)，然后db.killOp(opid)来杀掉对应的请求。")]),s._v(" "),a("h2",{attrs:{id:"找出慢语句-优化器profile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#找出慢语句-优化器profile"}},[s._v("#")]),s._v(" 找出慢语句 - 优化器profile")]),s._v(" "),a("p",[s._v("一般来说查询语句太慢和性能问题瓶颈有着直接的关系，找出这些慢语句对于定位线上产品问题至关重要")]),s._v(" "),a("ul",[a("li",[s._v("在MySQL 中，慢查询日志是经常作为我们优化数据库的依据")]),s._v(" "),a("li",[s._v("在MongoDB 中是否有类似的功能呢？答案是肯定的，那就是MongoDB Database Profiler。")])]),s._v(" "),a("p",[a("code",[s._v("db.getProfilingLevel()")]),s._v("命令来获取当前的Profile级别")]),s._v(" "),a("p",[s._v("profile的级别可以取0，1，2 三个值，他们表示的意义如下：")]),s._v(" "),a("ul",[a("li",[s._v("0 – 不开启")]),s._v(" "),a("li",[s._v("1 – 记录慢命令 (默认为>100ms)")]),s._v(" "),a("li",[s._v("2 – 记录所有命令")])]),s._v(" "),a("p",[s._v("有两种方式可以控制 Profiling 的开关和级别")]),s._v(" "),a("ul",[a("li",[s._v("第一种是直接在启动参数里直接进行设置。\n启动MongoDB 时加上–profile=级别 即可。")]),s._v(" "),a("li",[s._v("在客户端调用db.setProfilingLevel(级别) 命令来实时配置，Profiler 信息保存在system.profile 中。我们可以通过db.getProfilingLevel()命令来获取当前的Profile 级别，类似如下操作：\n"),a("ul",[a("li",[s._v("db.setProfilingLevel(2);")])])])]),s._v(" "),a("p",[s._v("查询慢sql")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("db['system.profile'].find()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("与 MySQL 的慢查询日志不同，MongoDB Profile 记录是直接存在系统 db 里的，记录位置 system.profile ，所以，我们只要查询这个 Collection 的记录就可以获取到我们的 Profile 记录了。列出执行时间长于某一限度(5ms)的 Profile 记录：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("db.system.profile.find( { millis : { $gt : 5 } } )\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查看最新的 Profile 记录：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("db.system.profile.find().sort({$natural:-1}).limit(1)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"使用-explain-分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-explain-分析"}},[s._v("#")]),s._v(" 使用 explain 分析")]),s._v(" "),a("p",[s._v("通过使用 "),a("a",{attrs:{href:"http://docs.mongodb.org/manual/reference/method/cursor.explain/",target:"_blank",rel:"noopener noreferrer"}},[s._v("explain"),a("OutboundLink")],1),s._v(" 来对这些慢语句进行诊断。此外还可以 mtools 来分析日志。")]),s._v(" "),a("p",[s._v("explain在写代码阶段就可以做性能分析，开发阶段用")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("db.usermodels.find({}).explain()\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("MongoDB 提供了一个 explain 命令让我们获知系统如何处理查询请求。利用 explain命令，我们可以很好地观察系统如何使用索引来加快检索，同时可以针对性优化索引。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('db.t5.ensureIndex({name:1})\ndb.t5.ensureIndex({age:1})\ndb.t5.find({age:{$gt:45}}, {name:1}).explain()\n\t  {\n\t      "cursor" : "BtreeCursor age_1",\n\t      "nscanned" : 0,\n\t      "nscannedObjects" : 0,\n\t      "n" : 0,\n\t      "millis" : 0,\n\t      "nYields" : 0,\n\t      "nChunkSkips" : 0,\n\t      "isMultiKey" : false,\n\t      "indexOnly" : false,\n\t      "indexBounds" : {\n\t      "age" : [\n\t                    [45,1.7976931348623157e+308]\n\t                ]\n\t       }\n\t  }\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("字段说明:")]),s._v(" "),a("ul",[a("li",[s._v("cursor: 返回游标类型(BasicCursor 或 BtreeCursor)")]),s._v(" "),a("li",[s._v("nscanned: 被扫描的文档数量")]),s._v(" "),a("li",[s._v("n: 返回的文档数量")]),s._v(" "),a("li",[s._v("millis: 耗时(毫秒)")]),s._v(" "),a("li",[s._v("indexBounds: 所使用的索引")])]),s._v(" "),a("h2",{attrs:{id:"创建索引"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建索引"}},[s._v("#")]),s._v(" 创建索引")]),s._v(" "),a("p",[s._v("分析完之后需要创建新的索引 (index) 来提升查询的性能。别忘了在 MongoDB 中可以在后台创建索引以避免 collections 锁和系统崩溃。")]),s._v(" "),a("h2",{attrs:{id:"使用稀疏索引来减少空间占用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用稀疏索引来减少空间占用"}},[s._v("#")]),s._v(" 使用稀疏索引来减少空间占用")]),s._v(" "),a("p",[s._v("如果使用 sparse documents，并重度使用关键字 $exists，可以使用 sparse indexes 来减少空间占用提升查询的性能。")]),s._v(" "),a("h2",{attrs:{id:"分析mongodb性能瓶颈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分析mongodb性能瓶颈"}},[s._v("#")]),s._v(" 分析mongodb性能瓶颈")]),s._v(" "),a("p",[s._v("连接数，CPU，IOPS等，保证资源充分利用")]),s._v(" "),a("h2",{attrs:{id:"读写分离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读写分离"}},[s._v("#")]),s._v(" 读写分离")]),s._v(" "),a("p",[s._v("如果读写都在主节点的话，从节点就一直处在空置状态，这是一种浪费。\n对于报表或者搜索这种读操作来说完全可以在从节点实现，因此要做的是在 connection string 中设置成 secondarypreferred。")]),s._v(" "),a("h2",{attrs:{id:"扬长避短"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#扬长避短"}},[s._v("#")]),s._v(" 扬长避短")]),s._v(" "),a("p",[s._v("利用mongodb的写入优势，\n避免其他鸡肋功能的使用，如聚合计算、ttl、固定集合等")]),s._v(" "),a("h2",{attrs:{id:"题外话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题外话"}},[s._v("#")]),s._v(" 题外话")]),s._v(" "),a("p",[s._v("当mongodb性能充分使用，使用如下方法：")]),s._v(" "),a("ul",[a("li",[s._v("修改查询逻辑，优化schema；")]),s._v(" "),a("li",[s._v("增加缓存")])])])}),[],!1,null,null,null);e.default=t.exports}}]);