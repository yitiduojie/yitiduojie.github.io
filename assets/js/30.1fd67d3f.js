(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{350:function(t,a,v){"use strict";v.r(a);var _=v(33),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"python神经网络编程-要点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#python神经网络编程-要点"}},[t._v("#")]),t._v(" Python神经网络编程(要点)")]),t._v(" "),v("p",[t._v("作者: Dylan Clark")]),t._v(" "),v("p",[t._v("对于线性模型，我们寻找模型的过程就是：“寻找参数与误差值之间的关系”这个过程。")]),t._v(" "),v("p",[t._v("设计到的概念：学习率(learning rate)")]),t._v(" "),v("p",[t._v("逻辑函数： AND，OR，XOR.")]),t._v(" "),v("p",[t._v("结论：线性模型可以学习到布尔AND, 布尔OR函数; 但无法学习到布尔XOR函数.")]),t._v(" "),v("h1",{attrs:{id:"为什么不能用线性函数来表示神经元？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么不能用线性函数来表示神经元？"}},[t._v("#")]),t._v(" 为什么不能用线性函数来表示神经元？")]),t._v(" "),v("p",[t._v("因为神经元不会对微小的输入有响应，而是会抑制它，直到输入强大到可以触发输出！[塔里克.拉希德]也就是说，神经元不希望传递微小的噪声！所以，神经元中必须要有一个激活函数.")]),t._v(" "),v("h1",{attrs:{id:"神经元的特点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#神经元的特点"}},[t._v("#")]),t._v(" 神经元的特点")]),t._v(" "),v("p",[t._v("可以同时接受许多输入; （树突的作用：收集电信号，组合起来，形成强信号，如果信号足够强，强到超过了阈值，神经元就会发射信号，沿着轴突，到达终端，将信号传递给下一个神经元的树突）")]),t._v(" "),v("p",[t._v("较小的权将弱化信号，而较大的权将放大信号.")]),t._v(" "),v("h1",{attrs:{id:"简单例子"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简单例子"}},[t._v("#")]),t._v(" 简单例子")]),t._v(" "),v("p",[t._v("只有两层，每层两个神经元的较小的神经网络.")]),t._v(" "),v("p",[t._v("权重的初始值怎么取？ 随机取. 这个小神经网络中，只有四个权重.")]),t._v(" "),v("p",[t._v("神经元的每一层的作用，是对态空间的矢量做一次线性变换，再对变换后的态矢量施以数乘S函数(放大或缩小).")]),t._v(" "),v("h1",{attrs:{id:"反向传播"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#反向传播"}},[t._v("#")]),t._v(" 反向传播")]),t._v(" "),v("p",[t._v("基本思想：误差要分割更大的值给较大的权重，分割较小的值给较小的权重.")]),t._v(" "),v("p",[t._v("(1)或许理解神经网络有效性的原因就藏在反向传播机制的本质中.")]),t._v(" "),v("p",[t._v("(2)抑或在高维Loss面的鞍点大量地存在着(增多).")]),t._v(" "),v("h1",{attrs:{id:"梯度下降法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#梯度下降法"}},[t._v("#")]),t._v(" 梯度下降法")]),t._v(" "),v("p",[t._v("梯度下降法是一种求解极值的一种近似方法.其他方法如拉格朗日乘子法. 梯度下降法，是一个无奈之举，正如概率论是在不确定中求确定，梯度下降法是在不够精确中求得尽量精确的解.")]),t._v(" "),v("h1",{attrs:{id:"神经网络之编程操作"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#神经网络之编程操作"}},[t._v("#")]),t._v(" 神经网络之编程操作")]),t._v(" "),v("p",[t._v("编写程序时，我们可以将神经网络视为一个类（Class）. 训练，测试，动作等都是其具体对象实例上的函数(方法). 神经网络的连接权重，就是其内部的数据. 这些连接权重，类比物理系统中的自由度，如位置，自旋，动量等。")])])}),[],!1,null,null,null);a.default=s.exports}}]);