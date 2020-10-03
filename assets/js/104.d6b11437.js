(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{550:function(a,v,_){"use strict";_.r(v);var t=_(42),s=Object(t.a)({},(function(){var a=this,v=a.$createElement,_=a._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("p",[a._v("并发问题是互联网应用不可以忽视的，本文以一些简单场景为例，分析下如何设计一个可靠的 高并发系统")]),a._v(" "),_("h2",{attrs:{id:"高并发会来带的后果"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#高并发会来带的后果"}},[a._v("#")]),a._v(" 高并发会来带的后果")]),a._v(" "),_("ul",[_("li",[_("p",[a._v("服务端")]),a._v(" "),_("p",[a._v("导致站点服务器/DB服务器资源被占满崩溃，数据的存储和更新结果和理想的设计是不一样的，比如：出现重复的数据记录，多次添加了用户积分等。")])]),a._v(" "),_("li",[_("p",[a._v("用户角度")]),a._v(" "),_("p",[a._v("这么卡的网站，怎么用？")])]),a._v(" "),_("li",[_("p",[a._v("个人经历")]),a._v(" "),_("p",[a._v("在做公司产品网站的过程中，经常会有这样的需求，比如什么搞个活动专题，抽奖，签到，搞个积分竞拍等等，如果没有考虑到高并发下的数据处，很容易导致抽奖被多抽走，签到会发现一个用户有多条记录，签到一次获得了获得了多积分，等等，各种超出正常逻辑的现象，这就是做产品网站必须考虑的问题，因为这些都是面向大量用户的，而不是像做ERP管理系统，OA系统那样，只是面向员工。")])])]),a._v(" "),_("h2",{attrs:{id:"并发下的数据处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#并发下的数据处理"}},[a._v("#")]),a._v(" 并发下的数据处理")]),a._v(" "),_("ul",[_("li",[_("p",[a._v("通过表设计")]),a._v(" "),_("ul",[_("li",[a._v("数据处理逻辑使用事务防止并发下的数据错乱问题")]),a._v(" "),_("li",[a._v("订单表、记录表添加唯一约束")])])]),a._v(" "),_("li",[_("p",[a._v("通过服务端锁进程防止高并发下的数据错乱问题")])])]),a._v(" "),_("p",[_("strong",[a._v("这里主要讲述的是在并发请求下的数据逻辑处理的接口,如何保证数据的一致性和完整性，这里的并发可能是大量用户发起的，也可能攻击者通过并发工具发起的并发请求")])]),a._v(" "),_("h3",{attrs:{id:"表设计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#表设计"}},[a._v("#")]),a._v(" 表设计")]),a._v(" "),_("p",[_("strong",[a._v("锁机制:")]),a._v(" 乐观锁和悲观锁")]),a._v(" "),_("h4",{attrs:{id:"需求点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#需求点"}},[a._v("#")]),a._v(" 需求点")]),a._v(" "),_("p",[a._v("【签到功能】")]),a._v(" "),_("ul",[_("li",[a._v("一天一个用户只能签到一次")]),a._v(" "),_("li",[a._v("签到成功后用户获取到一个积分")])]),a._v(" "),_("h4",{attrs:{id:"已知表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#已知表"}},[a._v("#")]),a._v(" 已知表")]),a._v(" "),_("ul",[_("li",[a._v("用户表，包含积分字段")])]),a._v(" "),_("h4",{attrs:{id:"高并发分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#高并发分析"}},[a._v("#")]),a._v(" 高并发分析")]),a._v(" "),_("p",[a._v("在高并发的情况下，会导致，一个用户签到记录会有多条，或者用户签到后不止加一积分。")]),a._v(" "),_("h4",{attrs:{id:"我的设计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#我的设计"}},[a._v("#")]),a._v(" 我的设计")]),a._v(" "),_("ul",[_("li",[_("p",[a._v("首先根据需求我会添加一张签到记录表，重点来了，这张表需要把用户唯一标识字段(ID,Token)和签到日期字段添加为唯一约束，或者唯一索引，这样就可以防止并发的时候插入重复用户的签到记录。")])]),a._v(" "),_("li",[_("p",[a._v("然后再程序代码逻辑里，先执行签到数据的添加(这里可以防止并发，添加成功后再进行积分的添加，这样就可以防止重复的添加积分了。")])]),a._v(" "),_("li",[_("p",[a._v("最后我还是建议所有的数据操作都写在一个sql事务里面，这样在添加失败，或者编辑用户积分失败的时候可以回滚数据。")])])]),a._v(" "),_("h3",{attrs:{id:"事务-通过更新锁-事物-update的锁表机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#事务-通过更新锁-事物-update的锁表机制"}},[a._v("#")]),a._v(" 事务+通过更新锁 / 事物+Update的锁表机制")]),a._v(" "),_("h4",{attrs:{id:"需求点-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#需求点-2"}},[a._v("#")]),a._v(" 需求点")]),a._v(" "),_("p",[a._v("【抽奖功能】")]),a._v(" "),_("ul",[_("li",[a._v("抽奖一次消耗一个积分,抽奖中奖后编辑剩余奖品总数;")]),a._v(" "),_("li",[a._v("剩余奖品总数为0，或者用户积分为0的时候无法进行抽奖")])]),a._v(" "),_("h5",{attrs:{id:"已知表-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#已知表-2"}},[a._v("#")]),a._v(" 已知表")]),a._v(" "),_("ul",[_("li",[a._v("用户表，包含积分字段")]),a._v(" "),_("li",[a._v("奖品表，包含奖品剩余数量字段")])]),a._v(" "),_("h4",{attrs:{id:"高并发分析-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#高并发分析-2"}},[a._v("#")]),a._v(" 高并发分析")]),a._v(" "),_("p",[a._v("在高并发的情况下，会导致用户参与抽奖的时候积分被扣除，而奖品实际上已经被抽完了")]),a._v(" "),_("h4",{attrs:{id:"我的设计-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#我的设计-2"}},[a._v("#")]),a._v(" 我的设计")]),a._v(" "),_("p",[a._v("在事务里，通过WITH (UPDLOCK) 锁住商品表，或者Update 表的奖品剩余数量和最后编辑时间字段，来把数据行锁住，然后进行用户积分的消耗，都完成后提交事物，失败就回滚。")]),a._v(" "),_("p",[a._v("这样就可以保证，只有可能存在一个操作在操作这件商品的数量，只有等到这个操作事物提交后，其他的操作这个商品行的事务才会继续执行。")]),a._v(" "),_("h3",{attrs:{id:"通过程序代码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#通过程序代码"}},[a._v("#")]),a._v(" 通过程序代码")]),a._v(" "),_("h4",{attrs:{id:"需求点-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#需求点-3"}},[a._v("#")]),a._v(" 需求点")]),a._v(" "),_("p",[a._v("【缓存数据到cache里】")]),a._v(" "),_("ul",[_("li",[a._v("当缓存不存在的时候，从数据库中获取并保存在cache里")]),a._v(" "),_("li",[a._v("如果存在从cache里获取，每天10点必须更新一次，其他时间点缓存两个小时更新一次")]),a._v(" "),_("li",[a._v("到10点的时候，凡是打开页面的用户会自动刷新页面")])]),a._v(" "),_("h4",{attrs:{id:"问题点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题点"}},[a._v("#")]),a._v(" 问题点")]),a._v(" "),_("p",[a._v("这里有个逻辑用户触发缓存的更新，用户刷新页面，当缓存存在的时候，会取到最后一次缓存更新时间，如果当前时间大于十点，并且最后缓存时间是10点前，则会从数据库中重新获取数据保存到cache中。")]),a._v(" "),_("p",[a._v("还有客户端页面会在10点时候用js发起页面的刷新，就是因为有这样的逻辑，导致10点的时候有很多并发请求同时过来，然后就会导致很多的sql查询操作，理想的逻辑是，只有一个请求会去数据库获取，其他都是从缓存中获取数据。(因为这个sql查询很耗服务器性能，所以导致在10点的时候，突然间数据库服务器压力暴增)")]),a._v(" "),_("h4",{attrs:{id:"解决问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解决问题"}},[a._v("#")]),a._v(" 解决问题")]),a._v(" "),_("p",[a._v("在从数据读取到缓存的那段代码前面加上锁，这样在并发的情况下只会有一个请求是从数据库里获取数据，其他都是从缓存中获取。")]),a._v(" "),_("h3",{attrs:{id:"访问量大的数据统计接口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#访问量大的数据统计接口"}},[a._v("#")]),a._v(" 访问量大的数据统计接口")]),a._v(" "),_("h4",{attrs:{id:"需求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#需求"}},[a._v("#")]),a._v(" 需求")]),a._v(" "),_("p",[a._v("用户行为数据统计接口，用来记录商品展示次数，用户通过点击图片，或者链接，或者其他方式进入到商品详情的行为次数")]),a._v(" "),_("h4",{attrs:{id:"问题点-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#问题点-2"}},[a._v("#")]),a._v(" 问题点")]),a._v(" "),_("p",[a._v("这接口是给前端ajax使用，访问量会很大，一页面展示的时候就会有几十件商品的展示，滚动条滚到到页面显示商品的时候就会请求接口进行展示数据的统计，每次翻页又会加载几十件")]),a._v(" "),_("h4",{attrs:{id:"高并发分析-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#高并发分析-3"}},[a._v("#")]),a._v(" 高并发分析")]),a._v(" "),_("p",[a._v("设想如果同时有1W个用户同时在线访问页面，一个次拉动滚动条屏幕页面展示10件商品，这样就会有10W个请求过来，服务端需要把请求数据入库。在实际线上环境可能还会超过这个请求量，如果不经过进行高并发设计处理，服务器分分钟给跪了。")]),a._v(" "),_("h4",{attrs:{id:"解决问题-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解决问题-2"}},[a._v("#")]),a._v(" 解决问题")]),a._v(" "),_("p",[a._v("我们通过nodejs写了一个数据处理接口，把统计数据先存到redis的list里。(使用nodejs写接口的好处是，nodejs使用单线程异步事件机制，高并发处理能力强，不会因为数据逻辑处理问题导致服务器资源被占用而导致服务器宕机)")]),a._v(" "),_("p",[a._v("然后再使用nodejs写了一个脚本，脚本功能就是从redis里出列数据保存到mysql数据库中。这个脚本会一直运行，当redis没有数据需要同步到数据库中的时候，sleep，让在进行数据同步操作")]),a._v(" "),_("h3",{attrs:{id:"高并发的下的服务器压力均衡，合理站点架设，db部署"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#高并发的下的服务器压力均衡，合理站点架设，db部署"}},[a._v("#")]),a._v(" 高并发的下的服务器压力均衡，合理站点架设，DB部署")]),a._v(" "),_("p",[a._v("以下我所知道的：")]),a._v(" "),_("ul",[_("li",[a._v("服务器代理nginx，做服务器的均衡负载，把压力均衡到多台服务器")]),a._v(" "),_("li",[a._v("部署集群 mysql数据库， redis服务器，或者mongodb服务器，把一些常用的查询数据，并且不会经常的变化的数据保存到其他nosql DB服务器中，来减少数据库服务器的压力，加快数据的响应速度。")]),a._v(" "),_("li",[a._v("数据缓存，Cache")]),a._v(" "),_("li",[a._v("在高并发接口的设计中可以使用具有高并发能力的编程语言去开发，如：nodejs 做web接口")]),a._v(" "),_("li",[a._v("服务器部署，图片服务器分离，静态文件走CDN")]),a._v(" "),_("li",[a._v("DBA数据库的优化查询条件，索引优化")]),a._v(" "),_("li",[a._v("消息存储机制，将数据添加到信息队列中(redis list)，然后再写工具去入库")]),a._v(" "),_("li",[a._v("脚本合理控制请求，如，防止用户重复点击导致的ajax多余的请求，等等。")])]),a._v(" "),_("h2",{attrs:{id:"消息队列"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#消息队列"}},[a._v("#")]),a._v(" 消息队列")]),a._v(" "),_("p",[a._v("秒杀活动，一般会因为流量过大，导致流量暴增，应用挂掉。为解决这个问题，一般需要在应用前端加入消息队列。\n秒杀一般要求实时返回结果，消息队列不太合适。")]),a._v(" "),_("h2",{attrs:{id:"缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[a._v("#")]),a._v(" 缓存")]),a._v(" "),_("p",[a._v("比如，有100件商品要秒杀，可以实现在缓存里写入100条数据，每来一次请求删除一条。")]),a._v(" "),_("h2",{attrs:{id:"并发测试"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#并发测试"}},[a._v("#")]),a._v(" 并发测试")]),a._v(" "),_("p",[a._v("使用压测工具进行质量验证")]),a._v(" "),_("ul",[_("li",[a._v("Apache JMeter")]),a._v(" "),_("li",[a._v("Microsoft Web Application Stress Tool")])])])}),[],!1,null,null,null);v.default=s.exports}}]);