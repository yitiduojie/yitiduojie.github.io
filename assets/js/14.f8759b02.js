(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{333:function(e,a,s){"use strict";s.r(a);var n=s(33),t=Object(n.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"binutils-package"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binutils-package"}},[e._v("#")]),e._v(" Binutils Package")]),e._v(" "),s("blockquote",[s("p",[e._v("作者: Dylan Huang")]),e._v(" "),s("p",[e._v("日期：2019年10月16日")])]),e._v(" "),s("p",[e._v("A basic fact is : CPU读的是机器语言（二进制）指令，而不是源代码！")]),e._v(" "),s("h2",{attrs:{id:"编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[e._v("#")]),e._v(" 编译")]),e._v(" "),s("p",[e._v("编译是什么？是这样一个过程，将一个程序由其某一种语言写成的源代码形式转换成机器代码的过程。[1] 机器代码往往以某种特殊格式保存，称为可执行文件，或二进制文件(binaray file). 在Linux和BSD系统中，它又称为ELF（Executable and Linkable Format）.")]),e._v(" "),s("h2",{attrs:{id:"readelf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#readelf"}},[e._v("#")]),e._v(" readelf")]),e._v(" "),s("p",[e._v("举例。用readelf查看ls命令的信息:\n(base) huang@xian /home/huang/git/yitiduojie_source/high [55]$ readelf -h /bin/ls\nELF Header:\nMagic:   7f 45 4c 46 02 01 01 00 00 00 00 00 00 00 00 00\nClass:                             ELF64\nData:                              2's complement, little endian\nVersion:                           1 (current)\nOS/ABI:                            UNIX - System V\nABI Version:                       0\nType:                              DYN (Shared object file)\nMachine:                           Advanced Micro Devices X86-64\nVersion:                           0x1\nEntry point address:               0x5850\nStart of program headers:          64 (bytes into file)\nStart of section headers:          132000 (bytes into file)\nFlags:                             0x0\nSize of this header:               64 (bytes)\nSize of program headers:           56 (bytes)\nNumber of program headers:         9\nSize of section headers:           64 (bytes)\nNumber of section headers:         28\nSection header string table index: 27")]),e._v(" "),s("p",[e._v("用ldd命令查看ls命令依赖于那些系统库(system libraries):")]),e._v(" "),s("p",[e._v("(base) huang@xian /home/huang/git/yitiduojie_source/high [56]$ ldd /bin/ls\nlinux-vdso.so.1 (0x00007fffc07a2000)\nlibselinux.so.1 => /lib/x86_64-linux-gnu/libselinux.so.1 (0x00007f2ab86b2000)\nlibc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00007f2ab82c1000)\nlibpcre.so.3 => /lib/x86_64-linux-gnu/libpcre.so.3 (0x00007f2ab804f000)\nlibdl.so.2 => /lib/x86_64-linux-gnu/libdl.so.2 (0x00007f2ab7e4b000)\n/lib64/ld-linux-x86-64.so.2 (0x00007f2ab8afc000)\nlibpthread.so.0 => /lib/x86_64-linux-gnu/libpthread.so.0 (0x00007f2ab7c2c000)")]),e._v(" "),s("p",[e._v("对其中的/lib/x86_64-linux-gnu/libc.so.6，利用readelf查看：\n(base) huang@xian /home/huang [9]$ readelf -h /lib/x86_64-linux-gnu/libc.so.6\nELF Header:\nMagic:   7f 45 4c 46 02 01 01 03 00 00 00 00 00 00 00 00\nClass:                             ELF64\nData:                              2's complement, little endian\nVersion:                           1 (current)\nOS/ABI:                            UNIX - GNU\nABI Version:                       0\nType:                              DYN (Shared object file)\nMachine:                           Advanced Micro Devices X86-64\nVersion:                           0x1\nEntry point address:               0x21cb0\nStart of program headers:          64 (bytes into file)\nStart of section headers:          2025872 (bytes into file)\nFlags:                             0x0\nSize of this header:               64 (bytes)\nSize of program headers:           56 (bytes)\nNumber of program headers:         10\nSize of section headers:           64 (bytes)\nNumber of section headers:         73\nSection header string table index: 72")]),e._v(" "),s("p",[e._v("可见，/lib/x86_64-linux-gnu/libc.so.6是一个DYN（Shared object file).DYN意味着它不能直接被执行，it must by an executable file that internally uses any functions made available by the library.(它必须由在内部使用库提供的任何函数的可执行文件使用)。")]),e._v(" "),s("h2",{attrs:{id:"ldd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ldd"}},[e._v("#")]),e._v(" ldd")]),e._v(" "),s("h2",{attrs:{id:"size"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#size"}},[e._v("#")]),e._v(" size")]),e._v(" "),s("p",[e._v("List section size and the total size.")]),e._v(" "),s("h2",{attrs:{id:"strings"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#strings"}},[e._v("#")]),e._v(" Strings")]),e._v(" "),s("p",[e._v("Prints the strings of printable characters in files.")]),e._v(" "),s("h2",{attrs:{id:"objdump"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#objdump"}},[e._v("#")]),e._v(" objdump")]),e._v(" "),s("p",[e._v("Displays information from object files.")]),e._v(" "),s("h2",{attrs:{id:"strip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#strip"}},[e._v("#")]),e._v(" strip")]),e._v(" "),s("p",[e._v("Discards symbols from object files.")]),e._v(" "),s("h2",{attrs:{id:"addr2line"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#addr2line"}},[e._v("#")]),e._v(" addr2line")]),e._v(" "),s("p",[e._v("将地址转化为文件名或行数(line numbers)")]),e._v(" "),s("h2",{attrs:{id:"nm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nm"}},[e._v("#")]),e._v(" nm")]),e._v(" "),s("p",[e._v("Lists symbols from object files.")]),e._v(" "),s("h3",{attrs:{id:"注释："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注释："}},[e._v("#")]),e._v(" 注释：")]),e._v(" "),s("p",[e._v('[0] Gaurav Kamathe, 9 essential GNU binutils tools.\n[1] R. Antonsen在TED演讲中提到一个观念：理解的本质是具有改变视角(perspective)的能力。程序好比一种Antonsen所谓的"模式”，而其不同语言形式，只是视角不同而已。它们其实是等价的。\n[2]GCC, GNU Compiler Collection: 它的功能是将经过预处理(如C prprocessor, cpp)的源代码转化为汇编语言。\n[3]汇编程序 assembler: 其目的是将汇编语言指令转化成机器代码，并产生一个具有扩展名为.o的对象文件。在Linux平台下，一般可用as命令实现：\n# as hello.s -o hello.o\n[4]对象文件(扩展名.o)和可执行文件有差别。一个可执行文件往往需要来自系统库的外部函数。\n[5]ld命令:是一个连接工具。 其目的是：将多个对象文件连接(link)到一起,并生成一个可执行文件。（ld如何实现linking?以后再具体说）\n[6]readelf命令：其作用是给出一个二进制文件的大量信息，例如它是ELF64-bit格式，还是ELF32-bit格式，')])])}),[],!1,null,null,null);a.default=t.exports}}]);