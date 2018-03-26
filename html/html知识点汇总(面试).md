## html知识点汇总(面试)


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

	可以使用data-[name]自定义一些属性，属性值可以通过脚步取得(dom.dataset.name)，也可以作为选择器

> meta标签

	标签提供关于HTML文档的元数据。元数据不会显示在页面上，但是对于机器是可读的。它可用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他 web 服务。 —— W3School

	常用的一些meta：
	<meta name="keywords" content="your tags" />
	<meta name="description" content="150 words" />
	<!-- `width=device-width` 会导致 iPhone 5 添加到主屏后以 WebApp 全屏模式打开页面时出现黑边  -->
	<meta name="viewport" content="width=device-width,
	 initial-scale=1.0,maximum-scale=1.0, user-scalable=no"/>

	<!-- 启用 WebApp 全屏模式 -->
	<meta name="apple-mobile-web-app-capable" content="yes" />

	<!-- 添加到主屏后的标题 -->
	<meta name="apple-mobile-web-app-title" content="标题">

	<!-- 禁止访问邮箱 -->
	<meta content="email=no" name="format-detection" />

	<!-- 优先使用 IE 最新版本和 Chrome -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />

> css js放置位置和原因
	浏览器渲染过程
	1、HTML解析出DOM Tree
	2、CSS解析出Style Rules
	3、将二者关联生成Render Tree
	4、Layout 根据Render Tree计算每个节点的信息
	5、Painting 根据计算好的信息绘制整个页面
	然而加载css和js文件会阻止渲染树渲染，为了第一时间反馈页面的布局,将css文件放入head中引入，js则放入body内最后引入(可能脚步文件中需要用到css解析后的布局，避免多次发生重绘和回流)
