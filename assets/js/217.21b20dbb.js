(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{394:function(v,_,a){"use strict";a.r(_);var s=a(42),t=Object(s.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("p",[v._v("文本编辑器有很多，比如图形模式下的gedit、kwrite等，文本模式下的vi、vim（vi的增强版本）、emacs等，本文介绍vim的一些基本操作")]),v._v(" "),a("h2",{attrs:{id:"模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模式"}},[v._v("#")]),v._v(" 模式")]),v._v(" "),a("p",[v._v("vim有3种模式")]),v._v(" "),a("ul",[a("li",[v._v("普通模式")]),v._v(" "),a("li",[v._v("编辑模式")]),v._v(" "),a("li",[v._v("命令模式")])]),v._v(" "),a("h3",{attrs:{id:"普通模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#普通模式"}},[v._v("#")]),v._v(" 普通模式")]),v._v(" "),a("p",[v._v("由Shell进入vi编辑器时，首先进入普通模式。在普通模式下，从键盘输入任何字符都被当作命令来解释。")]),v._v(" "),a("p",[v._v("如下是普通模式视图")]),v._v(" "),a("p",[a("img",{attrs:{src:"/image/vim_ordinary_mode.png",alt:"vim普通模式"}})]),v._v(" "),a("h3",{attrs:{id:"编辑模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编辑模式"}},[v._v("#")]),v._v(" 编辑模式")]),v._v(" "),a("p",[v._v("编辑模式主要用于文本的输入。在该模式下，用户输入的任何字符都被作为文件的内容保存起来，并在屏幕上显示出来。")]),v._v(" "),a("p",[v._v("在普通模式下，输入a（附加命令）、c（修改命令）、i（插入命令）、o（另起新行）、r（取代命令）以及s（替换命令）都将进入编辑模式，此时vi窗口的最后一行会显示“Insert”")]),v._v(" "),a("p",[a("img",{attrs:{src:"/image/vim_edit_mode.png",alt:"vim编辑模式"}})]),v._v(" "),a("h3",{attrs:{id:"命令模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令模式"}},[v._v("#")]),v._v(" 命令模式")]),v._v(" "),a("p",[v._v("命令模式下，用户可以对文件进行一些附加处理。尽管普通模式下的命令可以完成很多功能，但要执行一些如字符串查找、替换、显示行号等操作还是必须要进入命令模式的。")]),v._v(" "),a("h2",{attrs:{id:"模式切换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模式切换"}},[v._v("#")]),v._v(" 模式切换")]),v._v(" "),a("p",[v._v("可以按照如下方式切换工作模式")]),v._v(" "),a("p",[a("img",{attrs:{src:"/image/vim_working_mode.png",alt:"vim工作模式切换"}})]),v._v(" "),a("h2",{attrs:{id:"vi启动与退出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vi启动与退出"}},[v._v("#")]),v._v(" vi启动与退出")]),v._v(" "),a("p",[v._v("通过直接输入vi进入vi的普通模式,可用参数如下")]),v._v(" "),a("ul",[a("li",[v._v("-R 只读模式")]),v._v(" "),a("li",[v._v("-x 对文件进行加密")])]),v._v(" "),a("p",[v._v("在命令模式下输入"),a("code",[v._v(":q")]),v._v("退出")]),v._v(" "),a("h2",{attrs:{id:"光标移动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#光标移动"}},[v._v("#")]),v._v(" 光标移动")]),v._v(" "),a("h3",{attrs:{id:"向指定方向移动（前后左右）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#向指定方向移动（前后左右）"}},[v._v("#")]),v._v(" 向指定方向移动（前后左右）")]),v._v(" "),a("p",[v._v("普通模式下，使用组合键"),a("code",[v._v("数字N(optional) + 方向键")]),v._v("实现光标移动")]),v._v(" "),a("p",[v._v("方向键")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("前 l、Space键或方向键→")])]),v._v(" "),a("li",[a("p",[v._v("后 h、空格键或方向键←")])]),v._v(" "),a("li",[a("p",[v._v("上 -、k、Ctrl+p或方向键↑")]),v._v(" "),a("ul",[a("li",[v._v("+和Enter键是将光标移到下一行的行首")]),v._v(" "),a("li",[v._v("其余命令仅是移到下一行，所在的列不变。如果下一行比当前光标所在位置还短，则下标到行尾。")])])]),v._v(" "),a("li",[a("p",[v._v("下 +、Enter键、j、Ctrl+n或方向键↓")]),v._v(" "),a("ul",[a("li",[v._v("-命令将光标移到上一行行首")]),v._v(" "),a("li",[v._v("另外3个保持在同一列。")])])])]),v._v(" "),a("h3",{attrs:{id:"移动到行首"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动到行首"}},[v._v("#")]),v._v(" 移动到行首")]),v._v(" "),a("p",[v._v("普通模式下使用"),a("code",[v._v("0或^")]),v._v("命令")]),v._v(" "),a("ul",[a("li",[v._v("0 将光标移到当前行的第一个字符")]),v._v(" "),a("li",[v._v("^ 将光标移到当前行的第一个非空白符")])]),v._v(" "),a("h3",{attrs:{id:"移至行尾"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移至行尾"}},[v._v("#")]),v._v(" 移至行尾")]),v._v(" "),a("p",[v._v("普通模式下使用"),a("code",[v._v("$")]),v._v("命令")]),v._v(" "),a("p",[v._v("如果在该命令前加数字n，则光标将下移到n-1行的行尾。")]),v._v(" "),a("h3",{attrs:{id:"按词移动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按词移动"}},[v._v("#")]),v._v(" 按词移动")]),v._v(" "),a("ul",[a("li",[v._v("按词前移 - 将光标后移至上一个单词的开头\n"),a("ul",[a("li",[v._v("w  以标点符号或空白符（如制表符、换行符或空格符）分隔的字母或数字串")]),v._v(" "),a("li",[v._v("W  搜索的词被定义为非空白符字符串")])])])]),v._v(" "),a("div",{staticClass:"language-example line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[v._v("例如有字符串：\n\n    echo l > /proc/sys/net/ipv4/conf/default/rp_filter\n\n连续输入命令w，光标从行首移动的位置为：e、l、>、/、p、s、…、/、r、r。\n而命令W，光标从行首移动的位置为：e、l、>、/、r。\n")])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br"),a("span",{staticClass:"line-number"},[v._v("2")]),a("br"),a("span",{staticClass:"line-number"},[v._v("3")]),a("br"),a("span",{staticClass:"line-number"},[v._v("4")]),a("br"),a("span",{staticClass:"line-number"},[v._v("5")]),a("br"),a("span",{staticClass:"line-number"},[v._v("6")]),a("br")])]),a("ul",[a("li",[a("p",[v._v("按词后移 - 将光标后移至上一个单词的开头")]),v._v(" "),a("p",[v._v("b和B")])]),v._v(" "),a("li",[a("p",[v._v("移至词尾")]),v._v(" "),a("p",[v._v("e和E")])])]),v._v(" "),a("h3",{attrs:{id:"移至指定行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移至指定行"}},[v._v("#")]),v._v(" 移至指定行")]),v._v(" "),a("ul",[a("li",[v._v("命令模式 "),a("code",[v._v(":行号")])]),v._v(" "),a("li",[v._v("普通模式 "),a("code",[v._v("行号G")])])]),v._v(" "),a("p",[v._v("显示行号")]),v._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[v._v(":set number\n:set nu\n")])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br"),a("span",{staticClass:"line-number"},[v._v("2")]),a("br")])]),a("p",[v._v("去掉行号")]),v._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[v._v(":set nonumber\n:set nonu\n")])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br"),a("span",{staticClass:"line-number"},[v._v("2")]),a("br")])]),a("h2",{attrs:{id:"屏幕滚动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#屏幕滚动"}},[v._v("#")]),v._v(" 屏幕滚动")]),v._v(" "),a("p",[v._v("在文件的编辑查看过程中经常涉及屏幕的滚动问题。")]),v._v(" "),a("p",[v._v("在vi编辑器中，尽管可以使用键盘上的Page Up键和Page Dawn键来完成这些操作，甚至使用方向键↑和↓，但是效率比较低，下面来看看相关屏幕滚动的命令。")]),v._v(" "),a("ol",[a("li",[a("p",[v._v("向后滚动一屏")]),v._v(" "),a("p",[v._v("使用的命令为：Ctrl+f （滚屏后保留上一屏的最后两行）")])]),v._v(" "),a("li",[a("p",[v._v("向后滚动半屏")]),v._v(" "),a("p",[v._v("使用的命令为：Ctrl+d")])]),v._v(" "),a("li",[a("p",[v._v("向前滚动一屏")]),v._v(" "),a("p",[v._v("使用的命令为：Ctrl+b")])]),v._v(" "),a("li",[a("p",[v._v("向前滚动半屏")]),v._v(" "),a("p",[v._v("使用的命令为：Ctrl+u")])]),v._v(" "),a("li",[a("p",[v._v("屏幕定位")]),v._v(" "),a("ul",[a("li",[v._v("使用命令zz将当前行置为屏幕正中央")]),v._v(" "),a("li",[v._v("使用命令zt会将当前行置为屏幕顶端")]),v._v(" "),a("li",[v._v("命令zb则会将当前行置于屏幕底端")])])]),v._v(" "),a("li",[a("p",[v._v("滚动至第一屏或最后一屏")]),v._v(" "),a("ul",[a("li",[v._v("gg 定位于文件第一屏")]),v._v(" "),a("li",[v._v("G 定位于文件最后一屏")])])])]),v._v(" "),a("h2",{attrs:{id:"文本输入、删除与修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文本输入、删除与修改"}},[v._v("#")]),v._v(" 文本输入、删除与修改")]),v._v(" "),a("p",[v._v("文本的输入、删除与修改是文件编辑的基本操作，其中大部分命令会将vi编辑器由普通模式切换为编辑模式，下面来介绍这些命令。")]),v._v(" "),a("ol",[a("li",[a("p",[v._v("插入命令")]),v._v(" "),a("p",[v._v("文本的插入命令为i和I。其中i是将其后输出的字符插入到当前光标位置之前。命令I是将其后输入的字符插入到当前光标所在行的行首。")])]),v._v(" "),a("li",[a("p",[v._v("附加命令")]),v._v(" "),a("p",[v._v("附加文本的命令为a和A，其中命令a是将其后输入的字符插入到当前光标位置之后，而命令A则是将其后输入的字符追加到当前光标所在行的行尾。")])]),v._v(" "),a("li",[a("p",[v._v("另起新行")]),v._v(" "),a("p",[v._v("另起新行的命令为o和O，其中命令o是在当前行的下面另起一行，命令O是在当前行的上面另起一行。新行创建完后，光标停留在新行行首，等待输入文字。")])]),v._v(" "),a("li",[a("p",[v._v("删除字符")]),v._v(" "),a("p",[v._v("删除字符的命令为x和X。其中命令x删除光标所在处的字符，而命令X删除光标前面的那个字符。如果之前给出一个数字n，则删除由光标所在字符开始向右的n个字符。")])]),v._v(" "),a("li",[a("p",[v._v("删除文本对象")]),v._v(" "),a("p",[v._v("命令dd删除光标所在的行，命令D删除从光标所在位置开始到行尾的所有字符。")])])]),v._v(" "),a("p",[v._v("字母d可以与光标移动命令组合，例如：")]),v._v(" "),a("ul",[a("li",[v._v("d^\t从光标位置删至行首，不包括光标位。")]),v._v(" "),a("li",[v._v("d$\t从光标位置删至行尾，包括光标位，与D作用相同。")]),v._v(" "),a("li",[v._v("dG\t删除当前行至文件尾的内容。")]),v._v(" "),a("li",[v._v("Dgg\t删除当前行至文件头的内容。")])]),v._v(" "),a("h2",{attrs:{id:"修改命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改命令"}},[v._v("#")]),v._v(" 修改命令")]),v._v(" "),a("p",[v._v("修改文本的命令为cw,C和cc")]),v._v(" "),a("p",[v._v("作用是用新输入的文本取代原来的文本，这等价于将原来的文本删除后，利用命令i插入新的文本。")]),v._v(" "),a("p",[v._v("例如有一字符串：Hello World!")]),v._v(" "),a("p",[v._v("假设光标当前处在e处，输入命令cw后，屏幕显示如下：")]),v._v(" "),a("p",[v._v("H World!")]),v._v(" "),a("p",[v._v("此时光标处在H后的空格处，接着输入文本i后按Esc键，屏幕显示如下：")]),v._v(" "),a("p",[v._v("Hi World!")]),v._v(" "),a("p",[v._v("从上面可以看出，cw只是修改光标当前位置到词尾的字符，如果要修改整个单词，可以使用命令caw。")]),v._v(" "),a("p",[v._v("C命令用来修改从光标位置到行尾的文本。如果在前面加一个数字n，那么会把从当前光标位置至当前行下面的n-1行的内容都删除。")]),v._v(" "),a("p",[v._v("命令cc的功能和C相同，只是修改的范围不同，它修改光标所在的整行内容。")]),v._v(" "),a("h2",{attrs:{id:"取代命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取代命令"}},[v._v("#")]),v._v(" 取代命令")]),v._v(" "),a("p",[v._v("取代文本的命令为r和R。其中命令r是用其后输入的单个字符取代光标所在的字符，如果在r前加一个数字n，则用其后输入的单个字符取代光标所在处开始向后的n个字符。")]),v._v(" "),a("p",[v._v("R命令用其后输入的文本取代光标所在处开始的若干个字符，每输入一个字符就取代原有的一个字符，多出的部分附加在后面。")]),v._v(" "),a("h2",{attrs:{id:"复制与粘帖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复制与粘帖"}},[v._v("#")]),v._v(" 复制与粘帖")]),v._v(" "),a("p",[v._v("vi编辑器中的缓冲区分为无名缓冲区和命名缓冲区。无名缓冲区以数字编号，一共有9个。前面讲过可以使用删除命令x和dd来删除文本，其实被删除的内容还保存在缓冲区中，最近一次删除的内容被保存在缓冲区1中，次近的在缓冲区2中，以此类推，我们可以使用命令把他们提取回来。")]),v._v(" "),a("h3",{attrs:{id:"粘帖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#粘帖"}},[v._v("#")]),v._v(" 粘帖")]),v._v(" "),a("p",[v._v("粘帖缓冲区内容的命令是p和P，这两个命令的区别是：命令p将文本放在当前行之下或当前光标之后，而命令P将文本放在当前行之上或光标之前。")]),v._v(" "),a("h3",{attrs:{id:"复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复制"}},[v._v("#")]),v._v(" 复制")]),v._v(" "),a("p",[v._v("命名缓冲区是以字母a~z命名的，利用命名缓冲区可以很好地保存若干文本段，便于以后存取、移动或者重排。访问这些缓冲区时，和前面一样，使用单个双引号。")]),v._v(" "),a("p",[v._v("复制文本的命令有如下两种格式：")]),v._v(" "),a("ul",[a("li",[v._v("yy")]),v._v(" "),a("li",[v._v("y<光标移动命令>")])]),v._v(" "),a("p",[v._v("其中yy表示复制整行内容，而后者则通过光标移动命令来限定被复制的文本，如果没有指定缓冲区的名字，文本就被插入到无名缓冲区中。如果用大写字母表示缓冲区，则文本就附加到该缓冲区中，缓冲区中原有的内容不会被覆盖。")]),v._v(" "),a("h3",{attrs:{id:"不使用缓冲区的复制与移动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不使用缓冲区的复制与移动"}},[v._v("#")]),v._v(" 不使用缓冲区的复制与移动")]),v._v(" "),a("p",[v._v("使用的命令为co，它的基本格式如下：")]),v._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[v._v(":<开始行>,<结束行> co <目标行>\n")])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br")])]),a("p",[v._v("这个命令在命令模式下执行，其中开始行和结束行标识了文本复制的范围，而目标行则是文本粘帖的位置。")]),v._v(" "),a("p",[a("strong",[v._v("注：")])]),v._v(" "),a("p",[v._v("把"),a("code",[v._v("co")]),v._v(" 改为 "),a("code",[v._v("m")]),v._v(" 即完成剪切复制操作")]),v._v(" "),a("h2",{attrs:{id:"多行删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多行删除"}},[v._v("#")]),v._v(" 多行删除")]),v._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[v._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<")]),v._v("开始行"),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(","),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("<")]),v._v("结束行"),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v(">")]),v._v(" d\n")])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br")])]),a("h2",{attrs:{id:"查找与替换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查找与替换"}},[v._v("#")]),v._v(" 查找与替换")]),v._v(" "),a("h3",{attrs:{id:"简单替换表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单替换表达式"}},[v._v("#")]),v._v(" 简单替换表达式")]),v._v(" "),a("p",[v._v(":[range]s/from/to/[flags]")]),v._v(" "),a("p",[v._v("%表示所有行，$表示文件尾，")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("range:搜索范围，如果没有指定范围，则作用于但前行。")]),v._v(" "),a("ol",[a("li",[v._v("1,10s/from/to/ 表示在第1到第10行（包含第1，第10行）之间搜索替换；")]),v._v(" "),a("li",[v._v("10s/from/to/ 表示只在第10行搜索替换；")]),v._v(" "),a("li",[v._v("%s/from/to/ 表示在所有行中搜索替换；")]),v._v(" "),a("li",[v._v("1,$s/from/to/ 同上。")])])]),v._v(" "),a("li",[a("p",[v._v("flags 有如下四个选项：")]),v._v(" "),a("ol",[a("li",[v._v("c confirm，每次替换前询问；")]),v._v(" "),a("li",[v._v("e error， 不显示错误；")]),v._v(" "),a("li",[v._v("g globle，不询问，整行替换。如果不加g选项，则只替换每行的第一个匹配到的字符串；")]),v._v(" "),a("li",[v._v("i ignore，忽略大小写。")])])])]),v._v(" "),a("p",[v._v("这些选项可以合并使用，如cgi表示不区分大小写，整行替换，替换前询问。")]),v._v(" "),a("p",[a("strong",[v._v("例子")])]),v._v(" "),a("ul",[a("li",[v._v("删除行尾空格: "),a("code",[v._v("%s/\\s+$//g")])]),v._v(" "),a("li",[v._v("删除行首多余空格: "),a("code",[v._v("%s/^\\s*//")])]),v._v(" "),a("li",[v._v("删除第101到200行行首空格："),a("code",[v._v("101,200s/^\\s\\+//")])]),v._v(" "),a("li",[v._v("删除第101到200行行前5个字符："),a("code",[v._v("101,200s/^.\\{5\\}//")])]),v._v(" "),a("li",[v._v("删除沒有內容的空行："),a("code",[v._v("%s/^$//")]),v._v(" 或者 "),a("code",[v._v("g/^$/d")])]),v._v(" "),a("li",[v._v("删除包含有空格组成的空行："),a("code",[v._v("%s/^\\s*$//")]),v._v(" 或者 "),a("code",[v._v("g/^\\s*$/d")])]),v._v(" "),a("li",[v._v("删除以空格或TAB开头到结尾的空行："),a("code",[v._v("%s/^[ |\\t]*$//")]),v._v(" 或者 "),a("code",[v._v("g/^[ |\\t]*$/d")])]),v._v(" "),a("li",[v._v('把文中的所有字符串"abc……xyz"替换为"xyz……abc"可以有下列写法\n'),a("ul",[a("li",[v._v(":%s/abc(.*)xyz/xyz\\1abc/g")]),v._v(" "),a("li",[v._v(":%s/(abc)(.*)(xyz)/\\3\\2\\1/g")])])])])])}),[],!1,null,null,null);_.default=t.exports}}]);