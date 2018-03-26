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

link和@import引入css的区别

解释一下css3的flexbox，以及适用场景

inline和inline-block的区别

哪些是块级元素那些是行级元素，各有什么特点

grid布局

table布局的作用

实现两栏布局有哪些方法？

css dpi

你知道attribute和property的区别么

css布局问题？css实现三列布局怎么做？如果中间是自适应又怎么做？

流式布局如何实现，响应式布局如何实现

移动端布局方案

实现三栏布局（圣杯布局，双飞翼布局，flex布局）

清除浮动的原理

overflow:hidden有什么缺点？

padding百分比是相对于父级宽度还是自身的宽度

css3动画，transition和animation的区别，animation的属性，加速度，重力的模拟实现

CSS 3 如何实现旋转图片（transform: rotate）

sass less

对移动端开发了解多少？（响应式设计、Zepto；@media、viewport、JavaScript 正则表达式判断平台。）

什么是bfc，如何创建bfc？解决什么问题？

CSS中的长度单位（px,pt,rem,em,ex,vw,vh,vh,vmin,vmax）

CSS 选择器的优先级是怎样的？

雪碧图

svg

媒体查询的原理是什么？

CSS 的加载是异步的吗？表现在什么地方？

常遇到的浏览器兼容性问题有哪些？常用的hack的技巧

外边距合并

解释一下“::before”和“:after”中的双冒号和单冒号的区别-
