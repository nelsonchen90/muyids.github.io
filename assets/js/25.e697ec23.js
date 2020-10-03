(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{451:function(t,e,o){"use strict";o.r(e);var r=o(42),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"区间型动态规划"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#区间型动态规划"}},[t._v("#")]),t._v(" 区间型动态规划")]),t._v(" "),o("p",[t._v("区间类动态规划是线性动态规划的扩展，它在分阶段地划分问题时，与阶段中元素出现的顺序和由前一阶段的哪些元素合并而来由很大的关系。令状态f(i,j)表示将下标位置 i 到 j 的所有元素合并能获得的价值的最大值，那么 f(i,j) = max{f(i,k) + f(k+1, j) + cost}, cost 为将这两组元素合并起来的代价。")]),t._v(" "),o("p",[t._v("区间 DP 的特点：")]),t._v(" "),o("ul",[o("li",[t._v("合并：即将两个或多个部分进行整合，当然也可以反过来；")]),t._v(" "),o("li",[t._v("特征：能将问题分解为能两两合并的形式；")]),t._v(" "),o("li",[t._v("求解：对整个问题设最优值，枚举合并点，将问题分解为左右两个部分，最后合并两个部分的最优值得到原问题的最优值。")]),t._v(" "),o("li",[t._v("一般用二维数组表示区间")]),t._v(" "),o("li",[t._v("区间问题只需要考虑 "),o("code",[t._v("区间头和区间尾")])])]),t._v(" "),o("h2",{attrs:{id:"题目"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#题目"}},[t._v("#")]),t._v(" 题目")]),t._v(" "),o("ul",[o("li",[o("p",[o("RouterLink",{attrs:{to:"/alg/dp/problems/501-600/516.longest-palindromic-subsequence.html"}},[t._v("LeetCode 516. Longest Palindromic Subsequence (medium)")])],1)]),t._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/alg/dp/problems/801-900/877.stone-game.html"}},[t._v("LeetCode 877. Stone Game (medium)")])],1)]),t._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/alg/dp/problems/1-100/87.scramble-string.html"}},[t._v("LeetCode 87. Scramble String (hard)")])],1)]),t._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/alg/dp/problems/301-400/312.burst-balloons.html"}},[t._v("LeetCode 312. Burst Balloons (hard)")])],1)]),t._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/alg/dp/problems/501-600/546.remove-boxes.html"}},[t._v("LeetCode 546. Remove Boxes (hard)")])],1)]),t._v(" "),o("li",[o("p",[o("a",{attrs:{href:"https://www.acwing.com/problem/content/description/284/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Acwing282. 石子合并"),o("OutboundLink")],1)])]),t._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/alg/dp/problems/901-1000/1000.minimum-cost-to-merge-stones.html"}},[t._v("LeetCode 1000. Minimum Cost to Merge Stones (hard)")])],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);