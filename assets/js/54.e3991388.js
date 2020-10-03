(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{509:function(t,v,_){"use strict";_.r(v);var e=_(42),a=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"区间问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#区间问题"}},[t._v("#")]),t._v(" 区间问题")]),t._v(" "),_("p",[t._v("区间问题是贪心中常见的一类问题")]),t._v(" "),_("p",[t._v("常用**扫描线算法（sweep-line）**去解决")]),t._v(" "),_("p",[t._v("一般需要先对其起始位置信息进行排序，然后考虑区间的起始位置如何处理，得到最优解")]),t._v(" "),_("h2",{attrs:{id:"解决区间问题的通用思路"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解决区间问题的通用思路"}},[t._v("#")]),t._v(" 解决区间问题的通用思路")]),t._v(" "),_("ol",[_("li",[t._v("将每个区间按左端点（或者右端点）进行排序")]),t._v(" "),_("li",[t._v("从前往后依次枚举每个区间，贪心策略计算结果")])]),t._v(" "),_("h2",{attrs:{id:"四类区间问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四类区间问题"}},[t._v("#")]),t._v(" 四类区间问题")]),t._v(" "),_("p",[t._v("题目来源")]),t._v(" "),_("ul",[_("li",[t._v("AcWing 905. 区间选点")]),t._v(" "),_("li",[t._v("AcWing 908. 最大不相交区间数量")]),t._v(" "),_("li",[t._v("AcWing 906. 区间分组")]),t._v(" "),_("li",[t._v("AcWing 907. 区间覆盖")])]),t._v(" "),_("h3",{attrs:{id:"区间选点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#区间选点"}},[t._v("#")]),t._v(" 区间选点")]),t._v(" "),_("p",[t._v("给定N个闭区间[ai,bi]，请你在数轴上选择尽量少的点，使得每个区间内至少包含一个选出的点。")]),t._v(" "),_("p",[t._v("输出选择的点的最小数量。")]),t._v(" "),_("p",[t._v("位于区间端点上的点也算作区间内。")]),t._v(" "),_("p",[t._v("实际问题：用最少的箭射爆所有气球")]),t._v(" "),_("p",[t._v("算法思路：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("将所有区间按照右端点从小到大排序")])]),t._v(" "),_("li",[_("p",[t._v("从前往后枚举每个区间")]),t._v(" "),_("p",[t._v("如果当前区间已经包含点，直接pass\n否则结果加一，选择当前区间的右端点，继续枚举后面的区间")])])]),t._v(" "),_("h3",{attrs:{id:"最多不想交区间"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#最多不想交区间"}},[t._v("#")]),t._v(" 最多不想交区间")]),t._v(" "),_("p",[t._v("给定N个闭区间，选择若干区间，使得选中的区间之间互不相交（包括端点）。")]),t._v(" "),_("p",[t._v("输出可选取区间的最大数量。")]),t._v(" "),_("p",[t._v("实际问题：很多课程，或者活动，我们从中选择最多数量的课程或活动参加")]),t._v(" "),_("p",[t._v("算法思路：跟区间选点一致")]),t._v(" "),_("h3",{attrs:{id:"区间分组"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#区间分组"}},[t._v("#")]),t._v(" 区间分组")]),t._v(" "),_("p",[t._v("给定N个闭区间，将这些区间分成若干组，使得每组内部的区间两两之间（包括端点）没有交集，并使得组数尽可能小。")]),t._v(" "),_("p",[t._v("输出最小组数。")]),t._v(" "),_("p",[t._v("实际问题：公司今天有20场会议，问最少用几个会议室可以安排下")]),t._v(" "),_("p",[t._v("算法思路：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("将所有区间按照左端点从小到大排序")])]),t._v(" "),_("li",[_("p",[t._v("从前往后处理每个区间")]),t._v(" "),_("p",[t._v("判断能否将其放到某个现有的组中（小顶堆维护右端点（最早结束的区间））")])])]),t._v(" "),_("h3",{attrs:{id:"区间覆盖"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#区间覆盖"}},[t._v("#")]),t._v(" 区间覆盖")]),t._v(" "),_("p",[t._v("给定N个闭区间[ai,bi]以及一个线段区间[s,t]，请你选择尽量少的区间，将指定线段区间完全覆盖。")]),t._v(" "),_("p",[t._v("输出最少区间数，如果无法完全覆盖则输出-1。")]),t._v(" "),_("p",[t._v("算法思路：")]),t._v(" "),_("ol",[_("li",[t._v("将所有区间按左端点从小到大排序")]),t._v(" "),_("li",[t._v("从前往后依次枚举每个区间，在所有能覆盖start的区间中选择右端点最大的，然后将start更新成右端点的最大值")])]),t._v(" "),_("h2",{attrs:{id:"题目"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),_("ul",[_("li",[_("p",[_("RouterLink",{attrs:{to:"/alg/greedy/problems/401-500/452.minimum-number-of-arrows-to-burst-balloons.html"}},[t._v("LeetCode 452. Minimum Number of Arrows to Burst Balloons (medium)")])],1)]),t._v(" "),_("li",[_("p",[_("RouterLink",{attrs:{to:"/alg/greedy/problems/201-300/253.meeting-rooms-ii.html"}},[t._v("LeetCode 253. Meeting Rooms II (medium)")])],1)]),t._v(" "),_("li",[_("p",[_("RouterLink",{attrs:{to:"/alg/greedy/problems/201-300/218.the-skyline-problem.html"}},[t._v("LeetCode 218. The Skyline Problem (hard)")])],1)]),t._v(" "),_("li",[_("p",[_("RouterLink",{attrs:{to:"/alg/greedy/problems/1201-1300/1235.maximum-profit-in-job-scheduling.html"}},[t._v("LeetCode 1235. Maximum Profit in Job Scheduling (hard)")])],1)]),t._v(" "),_("li",[_("p",[t._v("领扣 391. 数飞机")])])]),t._v(" "),_("p",[t._v("给出飞机起飞，降落时间，求天上最多有多少架飞机")]),t._v(" "),_("p",[t._v("扫描线算法：记录 扫描线坐标（起飞降落时间点），记录起飞降落动作，用差分数组的思想，起飞 +1，降落 -1，求最大值")])])}),[],!1,null,null,null);v.default=a.exports}}]);