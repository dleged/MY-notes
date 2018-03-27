## CSS知识点汇总(面试)


> 盒模型，box-sizing

	(content-box)标准盒模型，浏览器实际计算的宽为margin + border + width的值；
	(content-box)怪异盒模型，width就包扩margin，border，padding的值

> CSS3新特性，伪类，伪元素，锚伪类

	css3新特性有: 伪类,为元素,@media查询,transform二维变化,transition动画过渡,相对视口长度单位vw、vh、vmax 和 vmi等
	伪类有: 类选择器:first-child,:last-child,+,~等一些常规css选择器不好选这的元素；
	伪元素有: before和:after分别在元素内前后添加内容，有:first-letter和:first-line分别为第一个文本和第一行添加特殊样式；
	锚伪类: active,:hover,:focus,:link为一些激活了这些动作的元素添加样式。


> CSS实现隐藏页面的方式

	display: none;不占文档流
	visibility: hidden;占文档流
	{
		position: absolute;
		left: -9999px;
		top: -9999px;
	}


> 如何实现水平居中和垂直居中。

 我总结的一些居中方法：http://www.cnblogs.com/faithZZZ/p/7160459.html

> 说说position，display

	position常用的定位方式有static,relative,absolute,fixed
	static: 指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。此时 top, right, bottom, left 和 z-index 属性无效
	relative: 元素相对与自己进行便宜定位
	absolut: 脱离文档流，相对于已经计算过定位的relative祖先元素进行便宜定位
	fixed: 相对元素屏幕定位，滚动条滚动，元素不发生改变


> 请解释*{box-sizing:border-box;}的作用，并说明使用它的好处

	* {box-sizing:border-box;}将所有的元素变为怪异盒模型，元素的宽高包括margin，border，padding值，我们可以按照正常的宽度值布局，简化了计算位置的问题，更符合我们日常对盒子的认识

> 浮动元素引起的问题和解决办法？元素浮动后的display值

	浮动元素触发bfc，导致父元素高度塌陷。可以通过设置父元素float: left;display: inline-block;overflow: hidden;display: absolute等触发bfc解决。

	无论行内元素还是块元素，被设置浮动之后，display属性值都变为block;

> link和@import引入css的区别


	区别1：link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS。
	区别2：link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载。
	区别3：link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持。
	区别4：ink支持使用Javascript控制DOM去改变样式；而@import不支持。

> 解释一下css3的flexbox，以及适用场景

	flexbox布局为弹性布局，可以上下左右居中位置宽高的元素，多列布局,环绕布局等。

> 实现三栏布局（圣杯布局，双飞翼布局，flex布局）

	关于圣杯布局和双飞翼布局的实现：https://github.com/dleged/front-end-demo/tree/master/Css%26Css3
	flex布局父亲元素dislplay: flex；三个子元素flex：number；划分等分

> overflow:hidden有什么缺点？

	行内块的基线为其文档流内最后一个行盒的基线，除非该行内块没有文档流内行盒或者其 overflow 属性计算值不为 visible，这种情况下基线为下外边距边缘。

> padding百分比是相对于父级宽度还是自身的宽度

	当内边距（padding）是一个百分比的时候， 百分比是和父元素的宽度有关的，同样一定不能为负数。

> css3动画，transition和animation的区别，animation的属性，加速度，重力的模拟实现

	transition关注的是CSS property的变化，property值和时间的关系是一个三次贝塞尔曲线。
	animation作用于元素本身而不是样式属性，可以使用关键帧的概念，应该说可以实现更自由的动画效果。

> CSS 3 如何实现旋转图片（transform: rotate）

	transform: rotate(100deg) = transform: rotate(0.5turn);

> sass less

	相同点：两者都是CSS预处理器，都具有相同的功能，可以帮助我们快速编译代码，帮助我们更好的维护我们的样式代码或者说维护项目吧。
	不同点：语法规则不同，当然功能或许略有差别

	两者相同特点如下:
	1、Mixins，此处我译成了混合，也有很多同行朋友将其译成混入，不管是混合也好，还是混入也罢。其主要意思是将一个定义好的class A引入到另一个class B中，从而简单实现class B继承了class A的所有属性。
	2、Parametric，带参数混合，像函数一样在class A中定义一个参数的默认值、或者参数属性集合，还可以是@arguments蛮量，然后将定义好的class A引入class B中
	3、Nested Rules译成嵌套规则，指的是在一个选择器中嵌套另一个选择器来实现继承。从而减少了代码量，并且增加了代码的可读性。
	4、Operations运算，在CSS中使用加、减、乘、除进行数学运算，主要运用于属性值和颜色的运算，可以轻松实现属性值之间的复杂关系。
	5、Color function颜色功能，颜色的函数运算，颜色会先被转化成HSL色彩空间，然后在通道级别操作。
	6、Namespaces命名空间，将一些变量或者混合模块打包封装，更好的组织CSS和属性集的重复使用；
	7、Scope作用域，先从本地查找变量或者混合模块，如果没有找到的话就会去父级作用域中查找，直到找到为止，这一点和其他程序语言的作域非常的相似；
	8、Javascript evaluation，javascript的表达式,在Less或sass文件中可以使用js的表达式,用来赋值。
	原文: https://www.w3cplus.com/css/an-introduction-to-less-and-comparison-to-sass.html © w3cplus.com

>	简述一下src与href的区别。

	src用于替换当前元素，href用于在当前文档和引用资源之间确立联系。
	　　src是source的缩写，指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。
	　　<script src ="js.js"></script>
	　　当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。

	　　href是Hypertext Reference的缩写，指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，如果我们在文档中添加
	　　<link href="common.css" rel="stylesheet"/>
	　　那么浏览器会识别该文档为css文件，就会并行下载资源并且不会停止对当前文档的处理。这也是为什么建议使用link方式来加载css，而不是使用@import方式。

> 什么是bfc，如何创建bfc？解决什么问题？

	bfc是块格式化上下文
	下列方式会创建块格式化上下文：
		根元素或包含根元素的元素
		浮动元素（元素的 float 不是 none）
		绝对定位元素（元素的 position 为 absolute 或 fixed）
		行内块元素（元素的 display 为 inline-block）
		表格单元格（元素的 display为 table-cell，HTML表格单元格默认为该值）
		表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）
		匿名表格单元格元素（元素的 display为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML table、row、tbody、thead、tfoot的默认属性）或 inline-table）
		overflow 值不为 visible 的块元素
		display 值为 flow-root 的元素
		contain 值为 layout、content或 strict 的元素
		弹性元素（display为 flex 或 inline-flex元素的直接子元素）
		网格元素（display为 grid 或 inline-grid 元素的直接子元素）
		多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）
		column-span 为 all 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）
	浮动定位和清除浮动时只会应用于同一个BFC内的元素。浮动不会影响其它BFC中元素的布局，而清除浮动只能清除同一BFC中在它前面的元素的浮动。外边距折叠（Margin collapsing）也只会发生在属于同一BFC的块级元素之间。

>媒体查询的原理是什么？

   可用于根据一个或多个基于设备类型、具体特点和环境的媒体查询来应用样式。

> CSS的加载是异步的吗？表现在什么地方？

	css的加载默认是异步的，会阻塞dom树的加载和js脚步的加载。

解释一下“::before”和“:after”中的双冒号和单冒号的区别

	:是老式浏览器的写法，css2的版本，为了兼容::可以设置浏览器文档类型为标准模式<!DOCTYPE html>
	::是现代浏览器的写法
