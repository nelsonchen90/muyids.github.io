(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{393:function(a,r,t){"use strict";t.r(r);var _=t(42),v=Object(_.a)({},(function(){var a=this,r=a.$createElement,t=a._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"背景描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景描述"}},[a._v("#")]),a._v(" 背景描述")]),a._v(" "),t("ul",[t("li",[a._v("刚开始我们的系统只用了单机数据库")]),a._v(" "),t("li",[a._v("随着用户的不断增多，考虑到系统的高可用和越来越多的用户请求，我们开始使用数据库主从架构\n当用户量级和业务进一步提升后，写请求越来越多，这时我们开始使用了分库分表")])]),a._v(" "),t("h1",{attrs:{id:"遇到的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#遇到的问题"}},[a._v("#")]),a._v(" 遇到的问题")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("用户请求量太大")]),a._v(" "),t("p",[a._v("单服务器TPS、内存、IO都是有上限的，需要将请求打散分布到多个服务器")])]),a._v(" "),t("li",[t("p",[a._v("单库数据量太大")]),a._v(" "),t("p",[a._v("单个数据库处理能力有限；单库所在服务器的磁盘空间有限；单库上的操作IO有瓶颈")])]),a._v(" "),t("li",[t("p",[a._v("单表数据量太大")]),a._v(" "),t("p",[a._v("查询、插入、更新操作都会变慢，在加字段、加索引、机器迁移都会产生高负载，影响服务")])])]),a._v(" "),t("h1",{attrs:{id:"垂直拆分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垂直拆分"}},[a._v("#")]),a._v(" 垂直拆分")]),a._v(" "),t("h2",{attrs:{id:"垂直分库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垂直分库"}},[a._v("#")]),a._v(" 垂直分库")]),a._v(" "),t("p",[a._v("微服务架构时，业务切割得足够独立，数据也会按照业务切分，保证业务数据隔离，大大提\n升了数据库的吞吐能力")]),a._v(" "),t("h2",{attrs:{id:"垂直分表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垂直分表"}},[a._v("#")]),a._v(" 垂直分表")]),a._v(" "),t("p",[a._v("表中字段太多且包含大字段的时候，在查询时对数据库的IO、内存会受到影响，同时更新数\n据时，产生的binlog文件会很大，MySQL在主从同步时也会有延迟的风险")]),a._v(" "),t("h1",{attrs:{id:"水平拆分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#水平拆分"}},[a._v("#")]),a._v(" 水平拆分")]),a._v(" "),t("h2",{attrs:{id:"水平分表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#水平分表"}},[a._v("#")]),a._v(" 水平分表")]),a._v(" "),t("p",[a._v("针对数据量巨大的单张表（比如订单表），按照规则把一张表的数据切分到多张表里面去。\n但是这些表还是在同一个库中，所以库级别的数据库操作还是有IO瓶颈。")]),a._v(" "),t("h3",{attrs:{id:"水平分表规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#水平分表规则"}},[a._v("#")]),a._v(" 水平分表规则")]),a._v(" "),t("h4",{attrs:{id:"range"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#range"}},[a._v("#")]),a._v(" RANGE")]),a._v(" "),t("ul",[t("li",[a._v("时间：按照年、月、日去切分。例如order_2020、order_202005、order_20200501")]),a._v(" "),t("li",[a._v("地域：按照省或市去切分。例如order_beijing、order_shanghai、order_chengdu")]),a._v(" "),t("li",[a._v("大小：从0到1000000一个表。例如1000001-2000000放一个表，每100万放一个表")])]),a._v(" "),t("h4",{attrs:{id:"hash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hash"}},[a._v("#")]),a._v(" HASH")]),a._v(" "),t("p",[a._v("根据用户ID取模，不同的业务使用的切分规则是不一样，就上面提到的切分规则，举例如下：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("站内信")]),a._v(" "),t("p",[a._v("用户维度：用户只能看到发送给自己的消息，其他用户是不可见的，这种情况下是按照\n用户ID hash分库，在用户查看历史记录翻页查询时，所有的查询请求都在同一个库内")])]),a._v(" "),t("li",[t("p",[a._v("用户表")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("范围法：以用户ID为划分依据，将数据水平切分到两个数据库实例，如：1到1000W在一张表，1000W到2000W在一张表，这种情况会出现单表的负载较高")])]),a._v(" "),t("li",[t("p",[a._v("按照用户ID HASH尽量保证用户数据均衡分到数据库中")]),a._v(" "),t("blockquote",[t("p",[a._v("如果在登录场景下，用户输入手机号和验证码进行登录，这种情况下，登录时是不是需要扫描所有分库的信息？\n最终方案：用户信息采用ID做切分处理，同时存储用户ID和手机号的映射的关系表（新增一个关系表），关系表采用手机号进行切分。可以通过关系表根据手机号查询到对应的ID，再定位用户信息。")])])])])]),a._v(" "),t("li",[t("p",[a._v("流水表")]),a._v(" "),t("ul",[t("li",[a._v("时间维度：可以根据每天新增的流水来判断，选择按照年份分库，还是按照月份分库，甚至也可以按照日期分库")])])])]),a._v(" "),t("h2",{attrs:{id:"水平分库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#水平分库"}},[a._v("#")]),a._v(" 水平分库")]),a._v(" "),t("p",[a._v("将单张表的数据切分到多个服务器上去，每个服务器具有相应的库与表，只是表中数据集合\n不同。 水平分库分表能够有效的缓解单机和单库的性能瓶颈和压力，突破IO、连接数、硬件\n资源等的瓶颈")]),a._v(" "),t("h3",{attrs:{id:"水平分库规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#水平分库规则"}},[a._v("#")]),a._v(" 水平分库规则")]),a._v(" "),t("p",[a._v("不跨库、不跨表，保证同一类的数据都在同一个服务器上面。\n数据在切分之前，需要考虑如何高效的进行数据获取，如果每次查询都要跨越多个节点，就需要谨\n慎使用。")]),a._v(" "),t("h1",{attrs:{id:"shardingsphere"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shardingsphere"}},[a._v("#")]),a._v(" ShardingSphere")]),a._v(" "),t("p",[t("code",[a._v("Apache ShardingSphere")]),a._v("是一款开源的分布式数据库中间件组成的生态圈。它由"),t("code",[a._v("Sharding-JDBC")]),a._v("、\n"),t("code",[a._v("Sharding-Proxy")]),a._v("和"),t("code",[a._v("Sharding-Sidecar（规划中）")]),a._v("这3款相互独立的产品组成。 他们均提供标准化的数据\n分片、分布式事务和数据库治理功能，可适用于如Java同构、异构语言、容器、云原生等各种多样化的\n应用场景。")]),a._v(" "),t("p",[a._v("ShardingSphere定位为"),t("strong",[a._v("关系型数据库中间件")]),a._v("，旨在充分合理地在分布式的场景下利用关系型数据库的\n计算和存储能力，而并非实现一个全新的关系型数据库。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://muyids.oss-cn-beijing.aliyuncs.com/sharding-sphere.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("Sharding-JDBC：被定位为轻量级Java框架，在Java的JDBC层提供的额外服务，以jar包形式使用。")]),a._v(" "),t("li",[a._v("Sharding-Proxy：被定位为透明化的数据库代理端，提供封装了数据库二进制协议的服务端版本，用于完成对异构语言的支持。")]),a._v(" "),t("li",[a._v("Sharding-Sidecar：被定位为Kubernetes或Mesos的云原生数据库代理，以DaemonSet的形式代理所有对数据库的访问。")])]),a._v(" "),t("h1",{attrs:{id:"mycat中间件实战操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mycat中间件实战操作"}},[a._v("#")]),a._v(" MyCat中间件实战操作")]),a._v(" "),t("h1",{attrs:{id:"分库分表实战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分库分表实战"}},[a._v("#")]),a._v(" 分库分表实战")])])}),[],!1,null,null,null);r.default=v.exports}}]);