(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{339:function(a,s,t){"use strict";t.r(s);var e=t(33),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"vmd中的基本命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vmd中的基本命令"}},[a._v("#")]),a._v(" VMD中的基本命令")]),a._v(" "),t("p",[a._v("作者:  "),t("strong",[a._v("huanggang08")])]),a._v(" "),t("p",[a._v("书名：《VMD Tcl/Tk中的基本命令》")]),a._v(" "),t("p",[a._v("VMD中的基本操作，即能够熟练地使用Tcl语言是每一个学习计算机模拟的学生的基本功. 在介绍VMD中Tcl/Tk命令之前，我们要先了解Tcl的最基本的特征和其中的最基本的概念。")]),a._v(" "),t("p",[a._v("打开Tck控制台。打开VMD，在主窗口>Extensions>TkConsole,这就进入到了TkConsole 命令终端。所有的VMD里的操作，比如，改变原子颜色，改变背景，改变分子的角度，甚至制备样品等都可以做。")]),a._v(" "),t("h2",{attrs:{id:"_0-tcl解释语言中的数据结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-tcl解释语言中的数据结构"}},[a._v("#")]),a._v(" 0. Tcl解释语言中的数据结构")]),a._v(" "),t("h3",{attrs:{id:"_0-1-tcl的特征："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-1-tcl的特征："}},[a._v("#")]),a._v(" 0.1 Tcl的特征：")]),a._v(" "),t("ol",[t("li",[a._v("在Tcl中，所有的数据类型都被当作"),t("strong",[a._v("字符串")]),a._v("(string)来操作.")])]),a._v(" "),t("h3",{attrs:{id:"_0-2-一般语法："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-2-一般语法："}},[a._v("#")]),a._v(" 0.2 一般语法：")]),a._v(" "),t("div",{staticClass:"language-tcl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-tcl"}},[t("code",[a._v("command "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("flag "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("flag "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("flag "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("args"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("args"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("p",[a._v("什么量可以做为参数值呢？是一些变量$variable, 它们可以是字符串，列表{}, 或者数组()。Tcl中的数组又称 hash-映射.")]),a._v(" "),t("h3",{attrs:{id:"_0-3-变量类性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-3-变量类性"}},[a._v("#")]),a._v(" 0.3 变量类性")]),a._v(" "),t("h4",{attrs:{id:"_0-3-0-字符串"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-3-0-字符串"}},[a._v("#")]),a._v(" 0.3.0  字符串")]),a._v(" "),t("p",[a._v("我们来看，定义一个变量和打印一个变量的命令。")]),a._v(" "),t("div",{staticClass:"language-tcl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-tcl"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("set")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("a")]),a._v(" 1\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("puts")]),a._v(" $"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("a")]),a._v("\n")])])]),t("p",[a._v("定义变量后，使用变量，前面要加$ 符号！")]),a._v(" "),t("h4",{attrs:{id:"_0-3-1-列表-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-3-1-列表-list"}},[a._v("#")]),a._v(" 0.3.1 列表 (list)")]),a._v(" "),t("p",[a._v("定义一个列表：[2] [3]")]),a._v(" "),t("div",{staticClass:"language-tcl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-tcl"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("set")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("li")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("1 2 3 5"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" \n")])])]),t("p",[a._v("或者")]),a._v(" "),t("div",{staticClass:"language-tcl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-tcl"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("set")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("li")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("list")]),a._v(" 1 2 3 5"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("p",[a._v("注意 [2]：从语法(形式)上看，与Python列表不同，Tcl列表中，元素之间"),t("strong",[a._v("无逗号")]),a._v("。")]),a._v(" "),t("p",[a._v("[3] : Tcl/Tk控制台里，命令都是以绿色显示出来的。例如，下面例子中的set, list, puts等，都是命令，或者称为操作名")]),a._v(" "),t("p",[a._v("打印该列表：")]),a._v(" "),t("div",{staticClass:"language-tcl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-tcl"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("puts")]),a._v(" $"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("li")]),a._v("\n")])])]),t("p",[a._v("类似与Python里面的print()函数。所以，Tcl中的命令，就相当于函数，是对对象做一些操作。")]),a._v(" "),t("p",[a._v("再次注意，定义变量后，使用变量，前面要加$ 符号！ 其他命令(操作)有：")]),a._v(" "),t("p",[a._v("lindex: 提取元素 ;  lsort： 对列表做排序操作; lset: 改变列表中某个元素的值.")]),a._v(" "),t("div",{staticClass:"language-tcl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-tcl"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("puts")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("lindex")]),a._v(" $"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("li")]),a._v(" 2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("div",{staticClass:"language-tcl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-tcl"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("puts")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("lsort")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("increasing $"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("li")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("div",{staticClass:"language-tcl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-tcl"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("lset")]),a._v(" li 2 0\n")])])]),t("p",[a._v("最后一个命令的含义：将列表li的第三个元素设置为0. 注意：li 以字符串形式传入命令 lset，lset将该字符串理解为该字符串对应的列表。不是直接传入的列表li的值，所以，这里不加$符号。 下面的lappend 也是类似道理。")]),a._v(" "),t("p",[a._v("注意： 想打印出一个命令的结果，要用puts命令. 这和Anaconda里面Ipython交互环境，直接输入变量名就可以打印出其值不同。")]),a._v(" "),t("p",[a._v("还有，foreach循环：先来看一个一个地循环，")]),a._v(" "),t("div",{staticClass:"language-tcl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-tcl"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("foreach")]),a._v(" x $"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("li")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("puts $"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("x")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("div",{staticClass:"language-tcl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-tcl"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("foreach")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("x y"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" $"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("li")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("puts “$"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("x")]),a._v(" $"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("y")]),a._v("”"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("我么当然也可以多个多个地循环。")]),a._v(" "),t("p",[a._v("“追加元素”操作：lappend")]),a._v(" "),t("div",{staticClass:"language-tcl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-tcl"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("lappend")]),a._v(" li a\n")])])]),t("p",[a._v("注意:  上例中，lappend的参数是字符串li.")]),a._v(" "),t("div",{staticClass:"language-tcl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-tcl"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("lassign")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("1 2 3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" a b c\n")])])]),t("p",[a._v("将列表{1,2,3}中的 元素分别赋值给三个变量a,b,c.")]),a._v(" "),t("div",{staticClass:"language-tcl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-tcl"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("lassign")]),a._v(" $"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("li")]),a._v(" a b c d "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("##错的！##")]),a._v("\n")])])]),t("h4",{attrs:{id:"_0-3-2-hash-maps-arrays-数组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_0-3-2-hash-maps-arrays-数组"}},[a._v("#")]),a._v(" 0.3.2 Hash Maps/ Arrays/数组")]),a._v(" "),t("p",[a._v("Tcl中的数组，在其他语言里有别的名字. Awk中，它们被称为associative arrays, Perl 中被称为哈希映射(Hash maps), 在Python里，称为字典. [3]")]),a._v(" "),t("p",[a._v("注释[3] wiki.tcl-lang.org")]),a._v(" "),t("p",[a._v("为什么Hash映射如此重要呢？")]),a._v(" "),t("p",[a._v("原因：Tcl并不提供以数值索引的数组,Tcl数组的索引都是字符串！")]),a._v(" "),t("p",[t("strong",[a._v("Hash映射的特征：")])]),a._v(" "),t("p",[a._v("Hash映射其实不应该称为是一种数据类型，而是一种与标量变量（scalar variables）相对的变量类型: array variables！ Hash映射是标量变量的集合.")]),a._v(" "),t("p",[a._v("“Only scalar variables have a value, each array element being a scalar variable.”")]),a._v(" "),t("p",[a._v("Tcl数组都是一维的。")]),a._v(" "),t("p",[a._v("不像列表，哈希映射不会保留它填充时的元素之间的顺序.")]),a._v(" "),t("p",[a._v("对Tcl数组操作有那些？")]),a._v(" "),t("p",[a._v("清除数组: 有多种方式, 如下三种：")]),a._v(" "),t("div",{staticClass:"language-tcl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-tcl"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("array")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("unset")]),a._v(" arr\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("unset")]),a._v(" arr\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("array")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("set")]),a._v(" arr "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("h2",{attrs:{id:"_1-显示盒子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-显示盒子"}},[a._v("#")]),a._v(" 1. 显示盒子")]),a._v(" "),t("p",[a._v("版本： VMD1.9.4")]),a._v(" "),t("h3",{attrs:{id:"_1-生成特定尺寸的模拟盒子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-生成特定尺寸的模拟盒子"}},[a._v("#")]),a._v(" 1. 生成特定尺寸的模拟盒子")]),a._v(" "),t("p",[a._v("打开TCl/Tk (Tickle)控制台运行，输入命令")]),a._v(" "),t("div",{staticClass:"language-tcl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-tcl"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("set")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("cell")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("pbc set "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("15.64 15.64 31.28"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$variable")]),a._v("\n")])])]),t("p",[a._v("是定义一个变量，其名字为$variable.")]),a._v(" "),t("p",[a._v("这里的 cell是一个变量，它表示后面[]内命令的返回结果。你可以把它设置成其他名字，无所谓。例如，你可以这样写：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" x "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("pbc "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("15.64")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("15.64")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("31.28")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("p",[a._v("这个命令生成的模拟盒子和上面的是完全一样的，仅仅是名字不同而已。所以，set cell可以理解为生成一个名为cell的对象.")]),a._v(" "),t("p",[a._v("pbc 不是一个变量名,而是命令. （绿色标识）")]),a._v(" "),t("p",[a._v("pbc set 表示要建立一个周期性盒子，{}内为三维矢量，作为pbc set的参数。 它表示盒子的大小。")]),a._v(" "),t("p",[a._v("这个命令，可以在打开文件后，在vmd终端运行；也可以在TCl/Tk控制台运行。执行了上面命令后，就有盒子显示出来了。 我们可以执行 打开和关闭pbc box 这样的简单操作。")]),a._v(" "),t("div",{staticClass:"language-tcl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-tcl"}},[t("code",[a._v("pbc box "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("on\n")])])]),t("p",[a._v("-on 参数是盒子显示出来.  pbc box操作带上-off参数，就是消去盒子操作（让盒子不可见）。")]),a._v(" "),t("div",{staticClass:"language-tcl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-tcl"}},[t("code",[a._v("pbc box "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("off\n")])])]),t("p",[a._v('pbc box -on 和 pbc box -off其实可看做是同一个操作----"开关"操作。我们可以假设存在这样一个参数-swith, 那么， pbc box -switch on 等价与pbc box -on;  pbc box -switch off 等价与pbc box -off.')]),a._v(" "),t("h3",{attrs:{id:"另一种方法："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#另一种方法："}},[a._v("#")]),a._v(" 另一种方法：")]),a._v(" "),t("p",[a._v("In vmd version 1.9, to show the periodic copies of a system:")]),a._v(" "),t("ol",[t("li",[a._v("Open VMD main> Extensions> Tk Console")]),a._v(" "),t("li",[a._v("In the VMD Tk Condole, type in")])]),a._v(" "),t("div",{staticClass:"language-tcl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-tcl"}},[t("code",[a._v("pbc set "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("a b c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("all\npbc box "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("on\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[a._v("Graphics > Periodic\nThen select +X, -X, or any others.")])]),a._v(" "),t("p",[a._v("注： 1. pbc set 作为一个整体，是一个设置周期盒子尺寸的命令; 2. pbc set 命令中的-all 参数表示要对所有时间点的构型都做同样的操作，即，定义一个周期性盒子. 如果不加-all,则该命令只在当前这一帧构型上操作！")]),a._v(" "),t("h3",{attrs:{id:"_2-对盒子的状态进行操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-对盒子的状态进行操作"}},[a._v("#")]),a._v(" 2. 对盒子的状态进行操作")]),a._v(" "),t("p",[a._v("pbc box可以看成是作用在cell上的一个操作（函数），这个函数有几个参数，如颜色，中心，边线宽度等，加上这些参数后，pbc box可以更改盒子的颜色，更改盒子的中心位置，更改边线的宽度等。这些操作，使得cell这个对象，变到了一个新的状态.")]),a._v(" "),t("p",[a._v("设置盒子的中心位置：-center 是pbc box操作的一个参数，其参数值是com, 它操作的对象是当前的cell. 其他参数，如-color， -width等等也类似。")]),a._v(" "),t("p",[a._v("com: 指质心.")]),a._v(" "),t("div",{staticClass:"language-tcl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-tcl"}},[t("code",[a._v("pbc box "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("center com\n")])])]),t("div",{staticClass:"language-tcl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-tcl"}},[t("code",[a._v("pbc box "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("center origin\npbc box "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("shiftcenterrel "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("1 0 0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("上面的{1 0 0}表示盒子移动的相对位置{a b c}的一个具体例子，表示一个矢量。设置盒子的边框的颜色：")]),a._v(" "),t("div",{staticClass:"language-tcl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-tcl"}},[t("code",[a._v("pbc box "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("color black\n")])])]),t("div",{staticClass:"language-tcl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-tcl"}},[t("code",[a._v("pbc box "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("color red\n")])])]),t("p",[a._v("改变边框的宽度：")]),a._v(" "),t("div",{staticClass:"language-tcl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-tcl"}},[t("code",[a._v("pbc box "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("width 2.0\n")])])]),t("p",[a._v("真正用的时候，是多个参数同时用：")]),a._v(" "),t("div",{staticClass:"language-tcl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-tcl"}},[t("code",[a._v("pbc box "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("width 2.0 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("center com "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("color black "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("width 2.0\n")])])]),t("h3",{attrs:{id:"_3-将原子都放到盒子中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-将原子都放到盒子中"}},[a._v("#")]),a._v(" 3.  将原子都放到盒子中")]),a._v(" "),t("p",[a._v("我们可能会看到，模拟过程中，有些原子运动到盒子外面去了。坐标超出了盒子的范围。提出一个问题：有没有方法使原子的坐标限制在盒子里面呢？ 由于我们用的PBC, 所有，从右边出去的原子，其像会从盒子的左边再次进入。所以我们可以用原子的一个想到坐标代替原子的坐标。 我们来看看图形界面的操作，以此来显示原子的镜像。在主菜单>Graphics>Graphical Representations>Periodic 里面做选择。")]),a._v(" "),t("p",[a._v("（看了镜像以后，去掉所有的镜像）")]),a._v(" "),t("p",[a._v("pbc wrap就是实现的这个操作：使所有的原子的坐标都位于盒子之中。")]),a._v(" "),t("p",[a._v("wrap的本意: 围巾，包装材料 (n); 包裹，围起来(v)。")]),a._v(" "),t("div",{staticClass:"language-tcl extra-class"},[t("pre",{pre:!0,attrs:{class:"language-tcl"}},[t("code",[a._v("pbc wrap "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("center com\n")])])]),t("p",[a._v("-center操作有其他参数，如bb, origin,...")]),a._v(" "),t("p",[a._v("将盒子的中心沿着x方向移动2个单位.")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("pbc wrap -shiftcenterrel "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2,0")]),a._v(",0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("命令中，${2,0,0}$ 表示三维空间的矢量。盒子的中心就沿着这个矢量移动一定的相对位移。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("pbc wrap -all\n")])])]),t("p",[a._v("注： 参数-all 的意思，与前面同理.")]),a._v(" "),t("p",[a._v("有时候，最小单位不能是原子，而必须是复合物。比如，分子，残基，分子链等.")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("pbc wrap -compound fragment\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("pbc wrap -compound residue\n")])])]),t("p",[a._v("residue可简写为res, -compound参数其他值有chain,... (以残基为最小单位，还是以原子，还是以链为最小单位呢？ -compound就是在做这个选择。)")]),a._v(" "),t("p",[a._v("（跑一个分子动力学，演示wrap的效果。)")]),a._v(" "),t("h3",{attrs:{id:"总结："}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结："}},[a._v("#")]),a._v(" 总结：")]),a._v(" "),t("ol",[t("li",[a._v("学一个命令/操作，首先要知道这个命令的总的效果，或者说它要实现的"),t("strong",[a._v("基本目标")]),a._v("。")]),a._v(" "),t("li",[a._v("最好要理解这个命令的每一组成部分的本质。即要知道它的每一部分"),t("strong",[a._v("是什么")]),a._v("。也就是说，要理解命令的结构/"),t("strong",[a._v("原理")]),a._v("。就是说，基本概念要清楚，比如，命令和变量的区别，列表，Hash-Table.等.")])]),a._v(" "),t("p",[a._v("例如")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("pbc box -center com\n")])])]),t("p",[a._v("这个命令中，pbc box 是函数，其作用的对象(object)为cell, -center是pbc box这个操作(或者你可以称之为函数)的一个参数， com是参数-center中的具体值。注意有些参数不需要值，例如 -on, -off 等，就分别把pbc box 显示和隐藏。可以认为他们分别是某个隐藏参数switch的值.")]),a._v(" "),t("h2",{attrs:{id:"_2-atomselect命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-atomselect命令"}},[a._v("#")]),a._v(" 2. Atomselect命令:")]),a._v(" "),t("p",[a._v("选择一个研究对象!")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" sel "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("atomselect molid “selection text”"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" atomselect0\n")])])]),t("p",[a._v("这个命令的功能： Returns a handle to an internally created proc that references the atoms satisfying the selection text criteria.")]),a._v(" "),t("p",[a._v("返回满足选择标准的原子。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" sel "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(". "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("set sel [atomselect top -all]\n")])])]),t("p",[a._v("问题：选择一种原子，并将其尺寸放大1.2倍. 怎么用命令实现？")]),a._v(" "),t("h3",{attrs:{id:"问题：-仅利用vmd构建一个充满水的模拟盒子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题：-仅利用vmd构建一个充满水的模拟盒子"}},[a._v("#")]),a._v(" 问题： 仅利用VMD构建一个充满水的模拟盒子.")]),a._v(" "),t("h3",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[a._v("#")]),a._v(" 参考文献:")]),a._v(" "),t("p",[a._v("J. Stone, VMD Visulization Scripting_Topotools, PPT")])])}),[],!1,null,null,null);s.default=r.exports}}]);