(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{335:function(e,a,t){"use strict";t.r(a);var s=t(33),i=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"cp2k的安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cp2k的安装"}},[e._v("#")]),e._v(" CP2K的安装")]),e._v(" "),t("blockquote",[t("p",[e._v("作者: Dylan Huang")]),e._v(" "),t("p",[e._v("日期：2019年10月13日")])]),e._v(" "),t("p",[e._v("参考： cp2k.org/howto:compile")]),e._v(" "),t("p",[e._v("方法：先安装相应的软件包，然后利用arch文件，使用make命令编译。")]),e._v(" "),t("p",[e._v("先下载cp2k源代码,并解压:")]),e._v(" "),t("p",[e._v("$ wget https://github.com/cp2k/cp2k/archive/v6.1.0.tar.gz")]),e._v(" "),t("p",[e._v("$ tar -zxvf v6.1.0.tar.gz")]),e._v(" "),t("p",[e._v("第二步：安装必需软件包。下载软件源码，解压，make, make install. 不提.")]),e._v(" "),t("ul",[t("li",[e._v("Read toolchain installation options:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> cd tools/toolchain/\n> ./install_cp2k_toolchain.sh --help\n")])])]),t("p",[e._v("安装哪些工具，该怎么选择？")]),e._v(" "),t("p",[e._v("./install_cp2k_toolchain.sh --with-libxsmm=install --with-openblas=system "),t("br"),e._v("\n--with-fftw=system --with-reflapack=no  --enable-cuda=yes  --enable-omp --mpimode=mpich --with-pexsi  --with-ptscotch=yes  --with-parmetis=yes  --with-pexsi =yes  --with-superlu=yes")]),e._v(" "),t("p",[e._v("FURTHER INSTRUCTIONS")]),e._v(" "),t("p",[e._v("All packages to be installed locally will be downloaded and built inside\n./build, and then installed into package specific directories inside\n./install.")]),e._v(" "),t("p",[e._v("Both ./build and ./install are safe to delete, as they contain\nonly the files and directories that are generated by this script. However,\nonce all the packages are installed, and you compile CP2K using the arch\nfiles provided by this script, then you must keep ./install in exactly\nthe same location as it was first created, as it contains tools and libraries\nyour version of CP2K binary will depend on.")]),e._v(" "),t("p",[e._v("It should be safe to terminate running of this script in the middle of a\nbuild process. The script will know if a package has been successfully\ninstalled, and will just carry on and recompile and install the last\npackage it is working on. This is true even if you lose the content of\nthe entire ./build directory.")]),e._v(" "),t("p",[e._v("+----------------------------------------------------------------+\n|  YOU SHOULD ALWAYS SOURCE ./install/setup BEFORE YOU RUN CP2K  |\n|  COMPILED WITH THIS TOOLCHAIN                                  |\n+----------------------------------------------------------------+")]),e._v(" "),t("h3",{attrs:{id:"实际操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实际操作"}},[e._v("#")]),e._v(" 实际操作")]),e._v(" "),t("ol",[t("li")]),e._v(" "),t("p",[e._v("./install_cp2k_toolchain.sh --with-libxsmm=install --with-openblas=system   --with-fftw=insnable-cuda=no --with-pexsi  --with-ptscotch=yes  --with-parmetis=yes  --with-pexsi=yes  --with-superlu=yes --with-metis\nMPI is detected and it appears to be MPICH\nnvcc found, enabling CUDA by default\nCompiling with 20 processes.\nStep valgrind took 0.00 seconds.")]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("install_cp2k_toolchain.sh好像只接受tar.get格式的文件。比如，在安装libint库时，我的/build/目录中没有tar.gz格式的文件，需要先从libint网站下载一个，文件名如libint-2.6.0.tar.gz，然后复制到/build/文件夹下。只有这样它才会自动安装libint.")]),e._v(" "),t("li")]),e._v(" "),t("h3",{attrs:{id:"基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[e._v("#")]),e._v(" 基本概念")]),e._v(" "),t("h4",{attrs:{id:"cray"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cray"}},[e._v("#")]),e._v(" CRAY")]),e._v(" "),t("p",[e._v("CRAY is a company name. 该公司致力于HPC, 是该领域的行家。CLE:")]),e._v(" "),t("h4",{attrs:{id:"nvcc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nvcc"}},[e._v("#")]),e._v(" nvcc")]),e._v(" "),t("p",[e._v("It is the purpose of nvcc, the CUDA compiler driver, to hide the intricate details of CUDA compilation from developers. 因为对每一个CUDA源文件，编译过程包含好几个步骤：分离，编译，预处理和合并。")]),e._v(" "),t("p",[e._v("sanitizer: 消毒剂")]),e._v(" "),t("h4",{attrs:{id:"pexsi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pexsi"}},[e._v("#")]),e._v(" PEXSI")]),e._v(" "),t("p",[e._v("A library name. The Ploe EXpansion and Selected Inversion (PESXI) method is a fast method for electronic structure calculation based on KS DFT. 其特点：It efficiently evaluates certain selected elements of matrix functions, eg., the Ferim-Dirac function of the KS Hamiltonian, which yields a density matrix. It can be used as an alternative to diagonalization methods for obtaining the density, energy and forces in electronic structure calculations.  PEXS利用MPI来做并行计算(10,000核)。从线性代数的观点看，PEXSI库的特点是可以作为一种通用的工具以计算一个矩阵函数的某些特定元素(certain selected elements),因此不仅仅适用于电子结构计算，而且可以有更广的应用。(参考: PEXSI文档)")]),e._v(" "),t("h4",{attrs:{id:"quip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quip"}},[e._v("#")]),e._v(" QUIP")]),e._v(" "),t("p",[e._v("a library name.")]),e._v(" "),t("h4",{attrs:{id:"sirius"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sirius"}},[e._v("#")]),e._v(" SIRIUS")]),e._v(" "),t("h4",{attrs:{id:"hdf5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hdf5"}},[e._v("#")]),e._v(" HDF5")]),e._v(" "),t("p",[e._v("HDF5 is also a library name. HDF5 is a popular container for datasets that can grow to terabytes (T) and beyond.  （参考推特网）")]),e._v(" "),t("h4",{attrs:{id:"parmetis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#parmetis"}},[e._v("#")]),e._v(" ParMETIS")]),e._v(" "),t("p",[e._v("a library name.")]),e._v(" "),t("h4",{attrs:{id:"cp2k代码的版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cp2k代码的版本"}},[e._v("#")]),e._v(" CP2K代码的版本")]),e._v(" "),t("p",[e._v("CP2K的代码有多种版本。例如，cp2k.sopt: Serial version of CP2K code.  cp2k.popt: parallel version of CP2K code.   Linux-x86-64-gfortran.psmp : a archer file.  cp2k.psmp is a mixed-mode MPI/OpenMP parallel version and it may give better performace than the MPI code on ARCHER when running very large jobs, using 2--4 threads per MPI process. (参考：archer.ac.uk/documentation/software/cp2k)")]),e._v(" "),t("h4",{attrs:{id:"cp2k中的一些模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cp2k中的一些模块"}},[e._v("#")]),e._v(" CP2K中的一些模块")]),e._v(" "),t("p",[e._v("经典力场模块FIST，可用于QM/MM计算。尽管它已经优化得比较好，但是其性能还不能和GROMACS, LAMMPS相比。")]),e._v(" "),t("p",[e._v("LS-DFT: LS-DFT is typically faster than standard DFT for systems of over 5000 atoms.  Excellent scaling is obtained up to a few atoms per MPI process - and using multiple OpenMP threads per process gives best performance.")]),e._v(" "),t("h4",{attrs:{id:"elpa库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elpa库"}},[e._v("#")]),e._v(" ELPA库")]),e._v(" "),t("p",[e._v("Large, metallic systems (using DIAGONALIZATION rather than OT) may benefit from using the ELPA library. To enable this, set PREFERRED_DIAG_LIBRARY ELPA in the GLOBAL input section. (参考：archer.ac.uk/documentation/software/cp2k")]),e._v(" "),t("h4",{attrs:{id:"libxsmm库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#libxsmm库"}},[e._v("#")]),e._v(" LIBXSMM库")]),e._v(" "),t("p",[e._v("In the last years, new workloads such as deep learning and more specifically convolutional neural networks (CNN) emerged and are pushing the limits of today's hardware. One of the expensive kernels is a small convolution with certain kernel sizes such that calculations in the frequency space is not the most efficient method when compared with direct convolutions. LIBXSMM's current support for convolutions aims for an easy to use invocation of small (direct) convolutions, which are intended for CNN training and classification. LIBXSMM的目标：为CNN训练和分类提供了一种非常好用的直接卷积。")]),e._v(" "),t("h4",{attrs:{id:"计算机科学-线程与进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#计算机科学-线程与进程"}},[e._v("#")]),e._v(" (计算机科学)线程与进程")]),e._v(" "),t("p",[e._v("OpenMP threads per process:  一个线程，就是可以被独立处理的最小指令序列。 Threads (in computing) is a sequence of instructions that may execute in parallel with others. 多数情况下，一个线程是一个进程的组成部分。 一个进程中，可以有多线程存在。这些处于同一进程中的线程可以贡献内存资源，同事执行程序。 但是处于不同进程中的线程之间无法共享内存资源。")]),e._v(" "),t("h4",{attrs:{id:"libint库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#libint库"}},[e._v("#")]),e._v(" LIBINT库")]),e._v(" "),t("p",[e._v("其主要目的：致力于高效率地计算量子力学矩阵元(over Gaussian basis sets).")]),e._v(" "),t("p",[e._v("其本质： 一个用于高效计算各种两体"),t("mark",[e._v("分子积分")]),e._v("的C/C++模块。（Ealuation of several kinds of two-body molecular integrals over Gaussian functions.）算符可以用矩阵表示，这个矩阵的矩阵元就可用用分子积分表示出来。")]),e._v(" "),t("h4",{attrs:{id:"plumed库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plumed库"}},[e._v("#")]),e._v(" PLUMED库")]),e._v(" "),t("p",[e._v("Plumed is a plugin for enhanced sampling and analysis of molecular dynamics simulations. PLUMED is an open-source, community-developed library that provides a wide range of different methods, which include: (1) enhanced-sampling algorithms; (2) free-energy methods; (3) tools to analyze the vast amounts of data produced by MD simulations.")]),e._v(" "),t("h2",{attrs:{id:"第一性原理模拟"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一性原理模拟"}},[e._v("#")]),e._v(" 第一性原理模拟")]),e._v(" "),t("p",[e._v("u")]),e._v(" "),t("h2",{attrs:{id:"plugin-for-the-vim-editor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plugin-for-the-vim-editor"}},[e._v("#")]),e._v(" Plugin for the Vim editor")]),e._v(" "),t("h3",{attrs:{id:"syntax-highlighting-for-cp2k-input-file-inp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax-highlighting-for-cp2k-input-file-inp"}},[e._v("#")]),e._v(" Syntax highlighting for CP2K input file (.inp)")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("(base) huang@xian /home/huang [2]$ mkdir -p ~/.vim/syntax\n(base) huang@xian /home/huang [3]$ wget -O ~/.vim/syntax/cp2k.vim http://manual.cp2k.org/trunk/cp2k.vim\n")])])]),t("p",[e._v("In addition create a file with the name filetype.vim in the ~/.vim folder containing the following lines")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('if exists("did_load_filetypes")\n   finish\nendif\naugroup filetypedetect\n   au! BufNewFile,BufRead *.inp setf cp2k\naugroup END\n')])])]),t("p",[e._v("which causes that all files with the name extension '.inp' will be considered as CP2K files by the Vim editor.")]),e._v(" "),t("h2",{attrs:{id:"pimd-in-cp2k"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pimd-in-cp2k"}},[e._v("#")]),e._v(" PIMD in CP2K")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("timeout")]),e._v(" 1430m aprun -B cp2k.psmp "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$inp_cp2k")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$out_cp2k")]),e._v("\n")])])]),t("p",[e._v("The aprun command is used to run a compiled application program across one or more computer nodes. Eg, Each Titan compute node contains(2) 8-core NUMA nodes on a single socket (a total of 16 cores).")])])}),[],!1,null,null,null);a.default=i.exports}}]);