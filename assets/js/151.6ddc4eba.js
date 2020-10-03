(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{454:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"准备环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备环境"}},[t._v("#")]),t._v(" 准备环境")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("es集群别名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("节点名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("IP地址")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("master")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("AI-DEV-02")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("129.0.4.37")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("node1")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("AI-DEV-03")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("129.0.4.38")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("node2")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("AI-DEV-04")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("129.0.4.39")])])])]),t._v(" "),a("ul",[a("li",[t._v("java版本: 1.8.0")]),t._v(" "),a("li",[t._v("elasticsearch版本: 7.9.0")])]),t._v(" "),a("h2",{attrs:{id:"集群节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集群节点"}},[t._v("#")]),t._v(" 集群节点")]),t._v(" "),a("p",[a("code",[t._v("Elasticsearch")]),t._v("的集群是由多个节点组成的，通过"),a("code",[t._v("cluster.name")]),t._v("设置集群名称，并且用于区分其它的集群，每个节点\n通过"),a("code",[t._v("node.name")]),t._v("指定节点的名称。")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("Elasticsearch")]),t._v("中，节点的类型主要有4种：")]),t._v(" "),a("ul",[a("li",[t._v("master节点\n"),a("ul",[a("li",[t._v("配置文件中"),a("code",[t._v("node.master")]),t._v("属性为true(默认为true)，就有资格被选为master节点。")]),t._v(" "),a("li",[t._v("master节点用于控制整个集群的操作。比如创建或删除索引，管理其它非master节点等。")])])]),t._v(" "),a("li",[t._v("data节点\n"),a("ul",[a("li",[t._v("配置文件中"),a("code",[t._v("node.data")]),t._v("属性为true(默认为true)，就有资格被设置成data节点。")]),t._v(" "),a("li",[t._v("data节点主要用于执行数据相关的操作。比如文档的CRUD。")])])]),t._v(" "),a("li",[t._v("客户端节点\n"),a("ul",[a("li",[t._v("配置文件中"),a("code",[t._v("node.master")]),t._v("属性和"),a("code",[t._v("node.data")]),t._v("属性均为false。")]),t._v(" "),a("li",[t._v("该节点不能作为master节点，也不能作为data节点。")]),t._v(" "),a("li",[t._v("可以作为客户端节点，用于响应用户的请求，把请求转发到其他节点")])])]),t._v(" "),a("li",[t._v("部落节点\n"),a("ul",[a("li",[t._v("当一个节点配置"),a("code",[t._v("tribe.*")]),t._v("的时候，它是一个特殊的客户端，它可以连接多个集群，在所有连接的集群上执行搜索和其他操作。")])])])]),t._v(" "),a("h2",{attrs:{id:"搭建集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建集群"}},[t._v("#")]),t._v(" 搭建集群")]),t._v(" "),a("h3",{attrs:{id:"下载-解压"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载-解压"}},[t._v("#")]),t._v(" 下载&解压")]),t._v(" "),a("p",[t._v("参考单机版安装")]),t._v(" "),a("h3",{attrs:{id:"分发到其它机器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分发到其它机器"}},[t._v("#")]),t._v(" 分发到其它机器")]),t._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" -r /app/elasticsearch-7.9.0 root@129.0.4.38:/app \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" -r /app/elasticsearch-7.9.0 root@129.0.4.39:/app \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"修改配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件"}},[t._v("#")]),t._v(" 修改配置文件")]),t._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" config/elasticsearch.yml\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h4",{attrs:{id:"master的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master的配置"}},[t._v("#")]),t._v(" master的配置")]),t._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("cluster.name: es-fltrp-dev \nnode.name: master \nnode.master: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nnode.data: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\npath.data: /data/esData\nnetwork.host: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0 \nhttp.port: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9200")]),t._v("\ndiscovery.seed_hosts: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"129.0.4.37:9300"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"129.0.4.38:9300"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"129.0.4.39:9300"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ncluster.initial_master_nodes: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"master"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nhttp.cors.enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" \nhttp.cors.allow-origin: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("h4",{attrs:{id:"slave的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slave的配置"}},[t._v("#")]),t._v(" slave的配置")]),t._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("cluster.name: es-fltrp-dev \nnode.name: node1 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# name必须唯一；另一台node2")]),t._v("\nnode.master: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\nnode.data: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\npath.data: /data/esData\nnetwork.host: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0 \nhttp.port: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9200")]),t._v("\ndiscovery.seed_hosts: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"129.0.4.37:9300"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"129.0.4.38:9300"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"129.0.4.39:9300"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# cluster.initial_master_nodes: ["master"] # slave节点不能配置此项')]),t._v("\nhttp.cors.enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" \nhttp.cors.allow-origin: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("h3",{attrs:{id:"启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[t._v("#")]),t._v(" 启动")]),t._v(" "),a("div",{staticClass:"language-shell script line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v(" elsearch\n/app/elasticsearch-7.9.0/bin/elasticsearch -d\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);