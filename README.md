# Banner for websites to show support for Palestine 
Use this snippet to show your support for Palestinians on the top of your website. Installing it takes minutes.
![image](https://github.com/Safouene1/support-palestine-banner/assets/22036449/168519a7-86de-46bf-9ce1-c877c5870a66)


## About 
This code adds a small black banner on top of your website with Palestinian flag and support message. It links to islamic-relief's donation site but you can change the link to point to a support channel of your choice.
![image](https://github.com/Safouene1/support-palestine-banner/assets/22036449/269d2610-7025-4b69-a3b1-00fbfc2a949a)


## Installation 
Installation is dead simple. Just copy this code to your template right after the opening <body> tag.
```

<style>
body {
	margin-top: 35px;
}
.support-palestine, .support-palestine:visited {
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	background: rgb(0,0,0);
	display: flex;
	justify-content: center;
	padding-top: 5px;
	padding-bottom: 5px;
	z-index: 10000;
	text-decoration: none;
	font-family: arial;
}
.support-palestine:hover, .support-palestine:active {
	background: black;
	display: flex;
	background: rgb(80,80,80);
	text-decoration: none;
}
.support-palestine__flag {

	margin-right: 10px;
}

.support-palestine__label {
	color: white;
	font-size: 12px;
	line-height: 24px;
}
.background {
  background: darkgreen;

height:21px;
} 
.top { 
  background: black;
  width:40px;
  height: 8px;
  z-index: 1;
}
.middle {
  background: white;
  width: 100%;
  height: 8px;
  z-index: 1;
}
.triangle {
  background: auto;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-left: 20px solid red;
  z-index: 2;
  position: relative;
  top: -18px;
  left: 0;
}
</style>
<a class="support-palestine" href="https://www.islamic-relief.org.uk/giving/appeals/palestine/" target="_blank" rel="nofollow noopener" title="Donate to support palestine">
	<div class="support-palestine__flag" role="img" aria-label="Flag of palestine">
	<div class="background">
  <div class="top"></div>
  <div class="middle"></div>
  <div class="triangle"></div>
</div>
	</div>
	<div class="support-palestine__label">
		Donate to support Palestine
	</div>
</a>

```
