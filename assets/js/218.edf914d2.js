(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{376:function(v,_,a){"use strict";a.r(_);var e=a(42),t=Object(e.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("p",[v._v("我们平时在设计一个系统时，应该如何去思考呢？")]),v._v(" "),a("p",[v._v("通常我们要依次去考虑下面几个问题：")]),v._v(" "),a("ul",[a("li",[v._v("系统面临的"),a("strong",[v._v("场景")]),v._v("是什么，需要解决哪些问题？")]),v._v(" "),a("li",[v._v("为了解决这些问题，我们的系统应该抽象出哪些"),a("strong",[v._v("服务")]),v._v("？")]),v._v(" "),a("li",[v._v("什么样的"),a("strong",[v._v("存储")]),v._v("方案比较合适呢？")]),v._v(" "),a("li",[v._v("如果系统压力增大需要"),a("strong",[v._v("扩展")]),v._v("，我们应该如何做？")])]),v._v(" "),a("p",[v._v("这就是 "),a("strong",[v._v("4S分析法")]),v._v("：Scenario、Service、Storage、Scale")]),v._v(" "),a("ul",[a("li",[v._v("程序 = 算法 + 数据结构")]),v._v(" "),a("li",[v._v("系统 = 服务 + 数据存储")])]),v._v(" "),a("p",[v._v("核心思想："),a("code",[v._v("trade-off\b")]),v._v("分析，用这种设计有什么不好，有什么好")]),v._v(" "),a("h2",{attrs:{id:"核心步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心步骤"}},[v._v("#")]),v._v(" 核心步骤")]),v._v(" "),a("ol",[a("li",[v._v("分析功能／需求／QPS／存储容量")]),v._v(" "),a("li",[v._v("画图：根据分析结果设计可行方案：Service + Storage")]),v._v(" "),a("li",[v._v("优化：研究可能遇到的问题，怎么样scale")])]),v._v(" "),a("h2",{attrs:{id:"_4s分析法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4s分析法"}},[v._v("#")]),v._v(" 4S分析法")]),v._v(" "),a("h3",{attrs:{id:"scenario-场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scenario-场景"}},[v._v("#")]),v._v(" Scenario 场景")]),v._v(" "),a("ul",[a("li",[v._v("搞清楚需要设计哪些功能")]),v._v(" "),a("li",[v._v("分析出所设计的系统大概所需要支持的 "),a("strong",[v._v("Features/ DAU / Concurrent Users / QPS / Memory / Storage")]),v._v(" 等")])]),v._v(" "),a("h3",{attrs:{id:"service-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-服务"}},[v._v("#")]),v._v(" Service 服务")]),v._v(" "),a("ul",[a("li",[v._v("拆分：将大系统拆分为小服务，Split / Application / Module")]),v._v(" "),a("li",[v._v("合并：相似的功能整合为一个Service")])]),v._v(" "),a("h3",{attrs:{id:"storage-存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-存储"}},[v._v("#")]),v._v(" Storage 存储")]),v._v(" "),a("ul",[a("li",[v._v("对每个 Service 选择合适的存储结构")]),v._v(" "),a("li",[v._v("综合情况考虑，从"),a("code",[v._v("Schema / Data / SQL / NoSQL / File System")]),v._v("中选择合适的存储")]),v._v(" "),a("li",[v._v("细化到"),a("code",[v._v("数据表单")]),v._v("如何设计")]),v._v(" "),a("li",[v._v("画图展示数据存储和读取的流程")])]),v._v(" "),a("h3",{attrs:{id:"scale-升级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scale-升级"}},[v._v("#")]),v._v(" Scale 升级")]),v._v(" "),a("ul",[a("li",[v._v("解决缺陷，处理可能遇到的问题")]),v._v(" "),a("li",[v._v("Sharding / Optimize / Special Case")])]),v._v(" "),a("h2",{attrs:{id:"明确系统场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#明确系统场景"}},[v._v("#")]),v._v(" 明确系统场景")]),v._v(" "),a("ol",[a("li",[v._v("问清楚自己要做哪些功能")]),v._v(" "),a("li",[v._v("问清楚或者说清楚自己要handle多大用户量，面试官起码得给你确认这么几个信息，否则聊不下去")])]),v._v(" "),a("ul",[a("li",[v._v("一个是你平均每天handle多少用户")]),v._v(" "),a("li",[v._v("一个是你峰值（最多？不太精确但是形容一下）每天handle多少用户")])]),v._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[v._v("把自己 要算的东西都算出来:")])]),v._v(" "),a("ul",[a("li",[v._v("QPS 、存储size，不非得一口气全部算完，但是记住最基本的用户量，然后再说然后的")])]),v._v(" "),a("p",[v._v("分析出QPS的作用：")]),v._v(" "),a("ul",[a("li",[v._v("QPS = 100：用你的笔记本做 Web 服务器就好了")]),v._v(" "),a("li",[v._v("QPS = 1k\n"),a("ul",[a("li",[v._v("用一台好点的 Web 服务器就差不多了")]),v._v(" "),a("li",[v._v("需要考虑 Single Point Failure")])])]),v._v(" "),a("li",[v._v("QPS = 1m\n"),a("ul",[a("li",[v._v("需要建设一个1000台 Web 服务器的集群")]),v._v(" "),a("li",[v._v("需要考虑如何 "),a("code",[v._v("Maintainance（某一台挂了怎么办）")])])])]),v._v(" "),a("li",[v._v("QPS和 Web Server (服务器) / Database (数据库) 之间的关系\n"),a("ul",[a("li",[v._v("一台 Web Server 约承受量是 1k 的 QPS （考虑到逻辑处理时间以及数据库查询的瓶颈）")]),v._v(" "),a("li",[v._v("一台 SQL Database 约承受量是 1k 的 QPS（如果 JOIN 和 INDEX query比较多的话，这个值会更小）")]),v._v(" "),a("li",[v._v("一台 NoSQL Database (Cassandra) 约承受量是 10k 的 QPS")]),v._v(" "),a("li",[v._v("一台 NoSQL Database (Memcached) 约承受量是 1M 的 QPS")])])])]),v._v(" "),a("h2",{attrs:{id:"设计服务概要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计服务概要"}},[v._v("#")]),v._v(" 设计服务概要")]),v._v(" "),a("p",[v._v("使用所有重要的组件来描绘出一个概要设计。搭架子，我的系统要干嘛，为了做这件事情，我们需要什么组件，怎么安排。这里一切最简单，保证这个东西可以work，不要有明显的优化还不做。")]),v._v(" "),a("p",[v._v("这里可以说出要设计哪些服务Service，比如设计一个音乐播放系统，则需要这几个服务：")]),v._v(" "),a("ul",[a("li",[v._v("User Service")]),v._v(" "),a("li",[v._v("Channel Service")]),v._v(" "),a("li",[v._v("Music Service")])]),v._v(" "),a("h2",{attrs:{id:"设计核心组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计核心组件"}},[v._v("#")]),v._v(" 设计核心组件")]),v._v(" "),a("p",[v._v("对每一个核心组件进行详细深入的分析:")]),v._v(" "),a("ul",[a("li",[v._v("数据存储方案选择：SQL 还是 NoSQL")]),v._v(" "),a("li",[v._v("数据库表设计")]),v._v(" "),a("li",[v._v("API和面向对象设计")])]),v._v(" "),a("h2",{attrs:{id:"度量你的设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#度量你的设计"}},[v._v("#")]),v._v(" 度量你的设计")]),v._v(" "),a("p",[v._v("确认和处理瓶颈以及一些限制。举例来说就是你需要下面的这些来完成拓展性的议题吗？")]),v._v(" "),a("ul",[a("li",[v._v("负载均衡")]),v._v(" "),a("li",[v._v("水平扩展")]),v._v(" "),a("li",[v._v("缓存")]),v._v(" "),a("li",[v._v("数据库分片")])])])}),[],!1,null,null,null);_.default=t.exports}}]);