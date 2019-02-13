<template>
	<footer class="footer">
	  <div class="foot-con">
		<div class="foot-con_2">
			<router-link to="/home" tag="li" active-class="active"><a href="javascript:;">
				<i class="navIcon home"></i>
				<span class="text">首页</span>
			</a></router-link>
			<router-link to="/column" tag="li" active-class="active"><a href="javascript:;">
				<i class="navIcon sort"></i>
				<span class="text">分类</span>
			</a></router-link>
		    <router-link to="/car" tag="li" active-class="active">
			<a href="javascript:;">
				<i class="navIcon shop"></i>
				<span class="text">购物车</span>		
			</a>
			</router-link>
			<router-link to="/user" tag="li" active-class="active">
			<a href="javascript:;">
				<i class="navIcon member"></i>
				<span class="text">我的</span>
			</a>
			</router-link>
		</div>
	  </div>
	</footer>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.footer{height: 50px;}
	.foot-con{width:100%;height:49px;position:fixed; z-index:100; right:0; bottom:0;}
	.foot-con_2{margin:0 auto;max-width:768px;background:#fff;height: 50px;border-top:1px solid #ccc;}
	.foot-con_2 a:active{color:#666;}
	.foot-con_2 a:visited{color:#666;}
	.foot-con a{display: block; width:25%; float:left; text-align:center; font-size: 12px; position:relative;}
	.foot-con .navIcon{width: 28px; height: 28px; margin-top:3px; display: inline-block; background:url(../assets/images/icon.png) no-repeat; background-size: 280px 90px;}
	.foot-con .badge{background-color: #f15353; position: absolute;right:50%; margin-right:-32px; top: 2px;}
	.foot-con .text{display:block; line-height: 1; margin-top: -3px;}
	.foot-con .active .text{color:#6b92ed;}
	.foot-con .home{background-position: 0 0;}
	.foot-con .active .home{background-position: 0 -34px;}
	.foot-con .sort{background-position: -33px 0;}
	.foot-con .active .sort{background-position: -33px -34px;}
	.foot-con .shop{background-position: -66px 0;}
	.foot-con .active .shop{background-position: -66px -34px;}
	.foot-con .member{background-position: -99px 0;}
	.foot-con .active .member{background-position: -99px -34px;}

</style>
