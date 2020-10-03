(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{404:function(s,a,t){"use strict";t.r(a);var e=t(42),v=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("code",[s._v("RESTful")]),s._v("是目前最流行的"),t("code",[s._v("API设计规范")]),s._v("，用于"),t("code",[s._v("Web数据接口的设计")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原则"}},[s._v("#")]),s._v(" 原则")]),s._v(" "),t("ol",[t("li",[s._v("每一个URI代表一种资源；所以网址中不能有动词，只能有名词，而且所用的名词往往与数据库的表格名对应。一般来说，数据库中的表都是同种记录的”集合”（collection），所以API中的名词也应该使用复数。")]),s._v(" "),t("li",[s._v("客户端和服务器之间，传递这种资源的某种表现层；")]),s._v(" "),t("li",[s._v("客户端通过四个HTTP动词，对服务器端资源进行操作，实现”表现层状态转化”。")])]),s._v(" "),t("h2",{attrs:{id:"restful规范的api设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#restful规范的api设计"}},[s._v("#")]),s._v(" Restful规范的API设计")]),s._v(" "),t("h3",{attrs:{id:"一、协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、协议"}},[s._v("#")]),s._v(" 一、协议")]),s._v(" "),t("p",[s._v("API与用户的通信协议，总是使用HTTPS协议。")]),s._v(" "),t("h3",{attrs:{id:"二、域名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、域名"}},[s._v("#")]),s._v(" 二、域名")]),s._v(" "),t("p",[s._v("应该尽量将API部署在专用域名之下。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("https://api.example.com \n")])])]),t("p",[s._v("如果确定API很简单，不会有进一步扩展，可以考虑放在主域名下。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("https://example.org/api/ \n")])])]),t("h3",{attrs:{id:"三、版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、版本"}},[s._v("#")]),s._v(" 三、版本")]),s._v(" "),t("p",[s._v("应该将API的版本号放入URL。")]),s._v(" "),t("p",[s._v("https://api.example.com/v1/")]),s._v(" "),t("p",[s._v("另一种做法是，将版本号放在HTTP头信息中，但不如放入URL方便和直观。")]),s._v(" "),t("h3",{attrs:{id:"四、路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、路径"}},[s._v("#")]),s._v(" 四、路径")]),s._v(" "),t("p",[s._v("路径又称”终点”（endpoint），表示API的具体网址。")]),s._v(" "),t("p",[s._v("在RESTful架构中，每个网址代表一种资源（resource），所以网址中不能有动词，只能有名词，而且所用的名词往往与数据库的表格名对应。一般来说，数据库中的表都是同种记录的”集合”（collection），所以API中的名词也应该使用复数。")]),s._v(" "),t("p",[s._v("举例来说，有一个API提供学校（school）的信息，还包括各种学校和学生的信息，则它的路径应该设计成下面这样。")]),s._v(" "),t("ul",[t("li",[s._v("https://api.example.com/v1/schools")]),s._v(" "),t("li",[s._v("https://api.example.com/v1/students")])]),s._v(" "),t("h3",{attrs:{id:"五、http动词"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、http动词"}},[s._v("#")]),s._v(" 五、HTTP动词")]),s._v(" "),t("p",[s._v("对于资源的具体操作类型，由HTTP动词表示。")]),s._v(" "),t("p",[s._v("常用的HTTP动词有下面五个（括号里是对应的SQL命令）。")]),s._v(" "),t("ul",[t("li",[s._v("GET（SELECT）：从服务器取出资源（一项或多项）。")]),s._v(" "),t("li",[s._v("POST（CREATE）：在服务器新建一个资源。")]),s._v(" "),t("li",[s._v("PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。")]),s._v(" "),t("li",[s._v("PATCH（UPDATE）：在服务器更新资源（客户端提供改变的属性）。 (使用较少)")]),s._v(" "),t("li",[s._v("DELETE（DELETE）：从服务器删除资源。")])]),s._v(" "),t("p",[s._v("还有两个不常用的HTTP动词。")]),s._v(" "),t("ul",[t("li",[s._v("HEAD：获取资源的元数据。")]),s._v(" "),t("li",[s._v("OPTIONS：获取信息，关于资源的哪些属性是客户端可以改变的。")])]),s._v(" "),t("p",[s._v("下面是一些例子。")]),s._v(" "),t("ul",[t("li",[s._v("GET /schools：列出所有学校")]),s._v(" "),t("li",[s._v("POST /schools：新建一个学校")]),s._v(" "),t("li",[s._v("GET /schools/ID：获取某个指定学校的信息")]),s._v(" "),t("li",[s._v("PUT /schools/ID：更新某个指定学校的信息（提供该学校的全部信息）")]),s._v(" "),t("li",[s._v("PATCH /schools/ID：更新某个指定学校的信息（提供该学校的部分信息）")]),s._v(" "),t("li",[s._v("DELETE /schools/ID：删除某个学校")]),s._v(" "),t("li",[s._v("GET /schools/ID/students：列出某个指定学校的所有学生")]),s._v(" "),t("li",[s._v("DELETE /zoos/ID/students/ID：删除某个学校的指定学生")])]),s._v(" "),t("h3",{attrs:{id:"六、过滤信息（filtering）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、过滤信息（filtering）"}},[s._v("#")]),s._v(" 六、过滤信息（Filtering）")]),s._v(" "),t("p",[s._v("如果记录数量很多，服务器不可能都将它们返回给用户。API应该提供参数，过滤返回结果。")]),s._v(" "),t("p",[s._v("下面是一些常见的参数。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("?limit=10：指定返回记录的数量 \n?offset=10：指定返回记录的开始位置。 \n?sortby=name&order=asc：指定返回结果按照哪个属性排序，以及排序顺序。 \n?schools_type_id=1：指定筛选条件 \n参数的设计允许存在冗余，即允许API路径和URL参数偶尔有重复。比如，GET /school/ID/students/ID 与 GET /students?student_id=ID 的含义是相同的。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"七、状态码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#七、状态码"}},[s._v("#")]),s._v(" 七、状态码")]),s._v(" "),t("p",[s._v("服务器向用户返回的状态码和提示信息，常见的有以下一些（方括号中是该状态码对应的HTTP动词）。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("200 OK - [GET]：服务器成功返回用户请求的数据，该操作是幂等的。 \n201 CREATED - [POST/PUT/PATCH]：用户新建或修改数据成功。 \n204 NO CONTENT - [DELETE]：用户删除数据成功。 \n400 INVALID REQUEST - [POST/PUT/PATCH]：用户发出的请求有错误，服务器没有进行新建或修改数据的操作，该操作是幂等的。。 \n404 NOT FOUND - [*]：用户发出的请求针对的是不存在的记录，服务器没有进行操作，该操作是幂等的。 \n500 INTERNAL SERVER ERROR - [*]：服务器发生错误，用户将无法判断发出的请求是否成功。 \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"八、错误处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#八、错误处理"}},[s._v("#")]),s._v(" 八、错误处理")]),s._v(" "),t("p",[s._v("如果状态码是4xx，就应该向用户返回出错信息。一般来说，返回的信息中将error作为键名，出错信息作为键值即可。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v('{ error: "Invalid API key” } \n')])])]),t("h3",{attrs:{id:"九、返回结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#九、返回结果"}},[s._v("#")]),s._v(" 九、返回结果")]),s._v(" "),t("p",[s._v("针对不同操作，服务器向用户返回的结果应该符合以下规范。")]),s._v(" "),t("ul",[t("li",[s._v("GET /collection：返回资源对象的列表（数组）")]),s._v(" "),t("li",[s._v("GET /collection/resource：返回单个资源对象")]),s._v(" "),t("li",[s._v("POST /collection：返回新生成的资源对象")]),s._v(" "),t("li",[s._v("PUT /collection/resource：返回完整的资源对象")]),s._v(" "),t("li",[s._v("PATCH /collection/resource：返回完整的资源对象")]),s._v(" "),t("li",[s._v("DELETE /collection/resource：返回一个空文档")])]),s._v(" "),t("h3",{attrs:{id:"十、hypermedia-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#十、hypermedia-api"}},[s._v("#")]),s._v(" 十、Hypermedia API")]),s._v(" "),t("p",[s._v("RESTful\nAPI最好做到Hypermedia，即返回结果中提供链接，连向其他API方法，使得用户不查文档，也知道下一步应该做什么。")]),s._v(" "),t("p",[s._v("比如，当用户向api.example.com的根目录发出请求，会得到这样一个文档。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('  "link”: {\n     "rel”: "https: //www.example.com/zoos",\n     "href”: "https: //api.example.com/",\n     "title”: "Listofzoos”,\n     "type”: "application/vnd.yourformat+json”\n  }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("上面代码表示，文档中有一个link属性，用户读取这个属性就知道下一步该调用什么API了。rel表示这个API与当前网址的关系（collection关系，并给出该collection的网址），href表示API的路径，title表示API的标题，type表示返回类型。")]),s._v(" "),t("p",[s._v("Hypermedia API的设计被称为HATEOAS。Github的API就是这种设计，访问api.github.com会得到一个所有可用API的网址列表。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v('{ "current_user_url”: "https://api.github.com/user", "authorizations_url”: "https://api.github.com/authorizations", // … } \n')])])]),t("p",[s._v("从上面可以看到，如果想获取当前用户的信息，应该去访问api.github.com/user，然后就得到了下面结果。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v('{ "message”: "Requires authentication”, "documentation_url”: "https://developer.github.com/v3” } \n')])])]),t("p",[s._v("上面代码表示，服务器给出了提示信息，以及文档的网址。")]),s._v(" "),t("h3",{attrs:{id:"十一、其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#十一、其他"}},[s._v("#")]),s._v(" 十一、其他")]),s._v(" "),t("ul",[t("li",[s._v("（1）API的身份认证应该使用OAuth 2.0框架。")]),s._v(" "),t("li",[s._v("（2）服务器返回的数据格式，应该尽量使用JSON，避免使用XML。")])])])}),[],!1,null,null,null);a.default=v.exports}}]);