## html知识点汇总(面试题)


> HTML5新特性，语义化

	html5新特性：
		1、语义化：更恰当的描述内容是什么；
		2、多媒体：提供video和audio多媒体播放，webRTC即使通信；
		3、离线和缓存：能够让网页在客户端本地存储数据以及更高效地离线运行；
		4、2D/3D绘图：更复杂和炫酷的图形绘画，提供canvas和WebGL，以及基于xml的svg；
		5、设备访问：地理位置系统，检测设备方向，触控事件，使用 Camera API；
		6、性能 & 集成：XMLHttpRequest支持异步读取数据，History API，拖放，requestAnimationFrame，contentEditable...

	语义化：
		1、HTML5字段和提纲标签一览：<header>、<footer>、<nav>、<article>、<section>、<aside> 和 <hgroup>；
		2、HTML5表单，新增input新的type值，加上强制验证；
		3、HTML5<audio>和<video>元素嵌入和允许操作新的多媒体内容；
		4、其他新的一些意义元素：<data>、<time>、<output>、<figure>、<figcaption>、<main>、<mark>...

> 浏览器的标准模式和怪异模式

	诞生：
	还未完成html和css标准化之前，各个浏览器对html和css有不同的实现，许多旧浏览器都是按照非标准规定去设计的，一方面确保非标准设计的旧浏览器的后向兼容和标准设计的浏览器能够正常显示。因此，现代浏览器就有了标准模式和怪异模式。

	渲染模式：
	遇到的正确确doctype申明，浏览器启用标准模式渲染页面，按照规定的规则解析html和css；但是对于一些没有申明或申明错误的doctype，浏览器启用怪异模式渲染页面。



> xhtml和html的区别

最主要的不同：<br/>
	XHTML 元素必须被正确地嵌套。<br/>
	XHTML 元素必须被关闭。<br/>
	标签名必须用小写字母。<br/>
	XHTML 文档必须拥有根元素。

> 使用data-的好处

	可以使用data-*自定义一些属性，属性值可以通过脚步取得(dom.dataset.name)，也可以作为选择器

> meta标签

> canvas

> HTML废弃的标签

> IE6 bug，和一些定位写法

> css js放置位置和原因

> 什么是渐进式渲染

> html模板语言

> meta viewport原理-
