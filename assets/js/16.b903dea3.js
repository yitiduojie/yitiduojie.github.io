(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{334:function(t,e,a){"use strict";a.r(e);var s=a(33),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"calculate-the-average-of-a-column-of-data-求某列数据的平均值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#calculate-the-average-of-a-column-of-data-求某列数据的平均值"}},[t._v("#")]),t._v(" Calculate the average of a column of data (求某列数据的平均值)")]),t._v(" "),a("p",[t._v("Author: Huanggang08")]),t._v(" "),a("p",[t._v("Problem： Assume that you get a trajectory named NO3-2.ener.  Extract one column, eg., the 5th column,  and to calculate the average and deviation of them.")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("NO3-2.ener\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("# step Nr.            Time "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("fs                Kin. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a.u."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("               Temp. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("K"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("                 Pot. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a.u. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("                 Cons. Qty. "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a.u."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("                    Used Time "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6861")]),t._v("                   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3430.500000")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.017100803")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300.0000000")]),t._v("            -137.810608977    -137.784886346   "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("360.690000000")]),t._v("   \n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6862")]),t._v("                      "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3431.00000")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.016742656")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("293.717014094")]),t._v("             -137.810247862   - "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("137.784884019")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("85.5870000000")]),t._v("\n")])])]),a("p",[t._v("Solution:")]),t._v(" "),a("p",[t._v("step 1：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{i++; s=s+"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$5")]),t._v('; printf "%d %10.6f'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v('", '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(", s/i}'")]),t._v(" NO3-2.ener "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ave\n")])])]),a("p",[t._v("Notes: the above command calculate the average of the 5th column in each step (record), therefore, by using it , we get the evolution of the average value of the 5th column (potential). The file named “ave” is a two-column file.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("$5 denotes  the  datum in 5th column.")])]),t._v(" "),a("li",[a("p",[t._v("Printf: print formatted data to stdout. The format tags follow this prototype:")])])]),t._v(" "),a("p",[t._v("%[flags] [width] [.precision] [length]  specifier")]),t._v(" "),a("p",[t._v("Eg., "),a("code",[t._v("d")]),t._v(" means  signed decimal integer (有符号的十进制整数)")]),t._v(" "),a("p",[t._v("Using this command, we can get the convergence process of the average .")]),t._v(" "),a("p",[t._v("step 2: plotting the figure.")]),t._v(" "),a("p",[t._v("Here, we find the average value is -137.804, and the deviation is 0.00392435.")]),t._v(" "),a("p",[t._v("Open the gnuplot, the command is:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("gnuplot\n\n")])])]),a("p",[t._v("after get into the gnuplot，type in the following commands:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("plot ‘ave’ u "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" w l  \nf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("c\nfit  f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ‘./NO3-2.ener’ u  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("  via  c\nplot ‘NO3-2.ener’  u  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" w  l  \nreplot  -137.804\nrep -137.804 +0.00392435\nrep -137.804 -0.00392435\n")])])]),a("p",[t._v("Using the last three lines, we make three signs on the average value and the boundaries of the  deviation.")])])}),[],!1,null,null,null);e.default=n.exports}}]);