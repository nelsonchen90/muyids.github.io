(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{412:function(r,a,e){"use strict";e.r(a);var t=e(42),s=Object(t.a)({},(function(){var r=this,a=r.$createElement,e=r._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[e("h2",{attrs:{id:"推荐配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#推荐配置"}},[r._v("#")]),r._v(" 推荐配置")]),r._v(" "),e("h3",{attrs:{id:"分区数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分区数"}},[r._v("#")]),r._v(" 分区数")]),r._v(" "),e("p",[r._v("partitions = 16")]),r._v(" "),e("h3",{attrs:{id:"副本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#副本"}},[r._v("#")]),r._v(" 副本")]),r._v(" "),e("p",[r._v("rc.factor = 2")]),r._v(" "),e("h3",{attrs:{id:"log-dirs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#log-dirs"}},[r._v("#")]),r._v(" log.dirs")]),r._v(" "),e("p",[r._v("log.dirs 建议配置多目录")]),r._v(" "),e("p",[r._v("原因：kafka的吞吐量 与 数据写入磁盘的效率 有很大关系，可以通过数据文件的多目录配置，提高吞吐")]),r._v(" "),e("h2",{attrs:{id:"指标及其含义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#指标及其含义"}},[r._v("#")]),r._v(" 指标及其含义")]),r._v(" "),e("h3",{attrs:{id:"brokers-spread"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#brokers-spread"}},[r._v("#")]),r._v(" Brokers Spread")]),r._v(" "),e("p",[r._v("看作broker使用率，如kafka集群9个broker，某topic有7个partition，则 "),e("code",[r._v("broker spread: 7 / 9 = 77%")])]),r._v(" "),e("h3",{attrs:{id:"brokers-skew"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#brokers-skew"}},[r._v("#")]),r._v(" Brokers Skew")]),r._v(" "),e("p",[r._v("partition是否存在倾斜，如kafka集群9个broker，某topic有18个partition，正常每个broker应该2个partition。若其中有3个broker上的partition数>2，则"),e("code",[r._v("broker skew: 3 / 9 = 33%")])]),r._v(" "),e("h3",{attrs:{id:"brokers-leader-skew"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#brokers-leader-skew"}},[r._v("#")]),r._v(" Brokers Leader Skew")]),r._v(" "),e("p",[r._v("leader partition是否存在倾斜，如kafka集群9个broker，某topic14个partition，则正常每个broker有2个leader partition。若其中一个broker有0个leader partition，一个有4个leader partition，则"),e("code",[r._v("broker leader skew: (4 - 2) / 14 = 14%")])]),r._v(" "),e("p",[r._v("由于kafka所有读写都在leader上进行， "),e("code",[r._v("broker leader skew")]),r._v("会导致不同broker的读写负载不均衡，配置参数 "),e("code",[r._v("auto.leader.rebalance.enable=true")]),r._v(" 可以使kafka每5min自动做一次leader的"),e("code",[r._v("rebalance")]),r._v("，消除这个问题。")]),r._v(" "),e("h2",{attrs:{id:"lag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lag"}},[r._v("#")]),r._v(" Lag")]),r._v(" "),e("p",[r._v("Lag代表consumer的消费能力")]),r._v(" "),e("p",[e("strong",[r._v("为什么Lag有时是负数？")])]),r._v(" "),e("p",[r._v("Lag的计算公式为"),e("code",[r._v("Lag = Consumer Offset - LogSize")]),r._v("，Kafka Manager先从zk获取LogSize，再从"),e("code",[r._v("kafka __consumer_offsets topic")]),r._v("读取Offset。两步操作存在一个时间gap，因此吞吐很大的topic上会出现"),e("code",[r._v("Offset > LogSize")]),r._v("的情况。导致Lag负数")])])}),[],!1,null,null,null);a.default=s.exports}}]);