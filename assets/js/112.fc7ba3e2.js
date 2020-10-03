(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{534:function(v,_,l){"use strict";l.r(_);var t=l(42),n=Object(t.a)({},(function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[l("p",[v._v("正式开始讲Linux IO模型前，我们先明确下同步IO和异步IO，阻塞IO和非阻塞IO分别是什么，到底有什么区别？")]),v._v(" "),l("p",[v._v("不同的人在不同的上下文下给出的答案是不同的。所以先限定一下本文的上下文。")]),v._v(" "),l("h2",{attrs:{id:"解释同步和异步，阻塞和非阻塞io"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#解释同步和异步，阻塞和非阻塞io"}},[v._v("#")]),v._v(" 解释同步和异步，阻塞和非阻塞IO")]),v._v(" "),l("p",[v._v("老张爱喝茶，废话不说，煮开水。出场人物：老张，水壶两把（普通水壶，简称水壶；会响的水壶，简称响水壶）。")]),v._v(" "),l("ol",[l("li",[v._v("老张把水壶放到火上，在水壶旁等水开。（同步阻塞）\n老张觉得自己有点傻")]),v._v(" "),l("li",[v._v("老张把水壶放到火上，去客厅看电视，时不时去厨房看看水开没有。（同步非阻塞）\n老张还是觉得自己有点傻，于是变高端了，买了把会响笛的那种水壶。水开之后，能大声发出嘀~~~~的噪音。")]),v._v(" "),l("li",[v._v("老张把响水壶放到火上，立等水开。（异步阻塞）\n老张觉得这样傻等意义不大")]),v._v(" "),l("li",[v._v("老张把响水壶放到火上，去客厅看电视，水壶响之前不再去看它了，响了再去拿壶。（异步非阻塞）\n老张觉得自己聪明了。")])]),v._v(" "),l("p",[v._v("所谓同步异步，只是对于水壶而言; 普通水壶，同步；响水壶，异步。\n虽然都能干活，但响水壶可以在自己完工之后，提示老张水开了。这是普通水壶所不能及的。\n同步只能让调用者去轮询自己（情况2中），造成老张效率的低下。\n所谓阻塞非阻塞，仅仅对于老张而言。立等的老张，阻塞；看电视的老张，非阻塞。\n情况1和情况3中老张就是阻塞的，媳妇喊他都不知道。\n虽然3中响水壶是异步的，可对于立等的老张没有太大的意义。\n所以一般异步是配合非阻塞使用的，这样才能发挥异步的效用。")]),v._v(" "),l("h2",{attrs:{id:"linux的网络io模型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#linux的网络io模型"}},[v._v("#")]),v._v(" linux的网络IO模型")]),v._v(" "),l("p",[v._v("IO的本质是socket的读取，数据先拷贝到内核的缓冲区中，然后拷贝到应用程序的地址空间（进程）")]),v._v(" "),l("p",[v._v("对于一次IO访问（以read举例），数据会先被拷贝到操作系统内核的缓冲区中，然后才会从操作系统内核的缓冲区拷贝到应用程序的地址空间。\n所以说，当一个read操作发生时，它会经历两个阶段：")]),v._v(" "),l("blockquote",[l("p",[v._v("第一阶段：等待数据准备 (Waiting for the data to be ready)。\n第二阶段：将数据从内核拷贝到进程中 (Copying the data from the kernel to the process)。")])]),v._v(" "),l("p",[v._v("5种IO模型")]),v._v(" "),l("ul",[l("li",[v._v("BIO（blocking IO）：同步阻塞 I/O")]),v._v(" "),l("li",[v._v("NIO（nonblocking IO）：同步非阻塞 I/O")]),v._v(" "),l("li",[v._v("多路复用IO（IO multiplexing）")]),v._v(" "),l("li",[v._v("信号驱动IO（signal driven IO）")]),v._v(" "),l("li",[v._v("异步IO（asynchronous IO）")])]),v._v(" "),l("p",[v._v("几个同学用桶去水龙头处接水")]),v._v(" "),l("ol",[l("li",[v._v("A同学来到水龙头旁，等待水来，水来了，等待水接满，整个过程都是阻塞的；-- BIO")]),v._v(" "),l("li",[v._v("B同学每隔一段时间就来水龙头旁观察水有没有来，如果水没来，就回去写会代码，待会再来，水来了，就跑去接水，直到水接满； -- NIO")]),v._v(" "),l("li",[v._v("C同学来装水，发现一排水龙头，舍管阿姨告诉他现在还没水，等有水了告诉他。等了一会，阿姨告诉C同学来水了，但是不知道哪个水龙头有水，自己看吧；于是C同学一个一个水龙头打开，找到有水的水龙头，开始接水 -- 多路复用IO (epoll也属于IO复用模型)")]),v._v(" "),l("li",[v._v("D同学让舍管阿姨等有水的时候通知他（注册信号函数）。过了一会，D同学得知有水了，就跑去接水，直到水接满； -- 信号驱动IO")]),v._v(" "),l("li",[v._v("E同学让舍管阿姨等桶装满谁后通知他，整个过程E同学都可以做别的事情。-- 异步IO")])]),v._v(" "),l("p",[v._v("有没有来水是数据准备阶段；接水过程是数据从内核空间复制到用户进程缓冲区阶段；")]),v._v(" "),l("p",[v._v("总结")]),v._v(" "),l("p",[v._v("IO分两阶段：")]),v._v(" "),l("ol",[l("li",[v._v("数据准备阶段")]),v._v(" "),l("li",[v._v("将数据从内核拷贝到进程中（内核空间复制回用户进程缓冲区阶段）")])]),v._v(" "),l("p",[v._v("一般来讲：阻塞IO模型、非阻塞IO模型、IO复用模型(select/poll/epoll)、信号驱动IO都属于同步IO，因为阶段2是阻塞的(尽管时间很短)。只有异步IO模型是符合异步IO操作含义的，不管在阶段1还是阶段2都可以干别的事。")]),v._v(" "),l("p",[v._v("https://blog.csdn.net/baiye_xing/article/details/74331041")]),v._v(" "),l("p",[v._v("epoll是同步还是异步IO？答案：epoll是同步IO（多路复用IO）")]),v._v(" "),l("p",[v._v("在处理IO时，阻塞和非阻塞都是同步IO；\n只有使用了特殊的API才是异步IO。")]),v._v(" "),l("p",[l("img",{attrs:{src:"https://raw.githubusercontent.com/muyids/tuchuang/master/io-sync-asyn-block-unblock.jpg",alt:"同步异步阻塞非阻塞IO分类"}})]),v._v(" "),l("p",[v._v("Java中的BIO，NIO，AIO分别是哪种IO？")]),v._v(" "),l("p",[v._v("答案：阻塞IO，非阻塞IO，异步IO")])])}),[],!1,null,null,null);_.default=n.exports}}]);