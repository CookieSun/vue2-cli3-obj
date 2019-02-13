<template>
	<div>
	<header class="header">
		<div class="fix_nav">
			<div class="nav_inner">
				<a class="nav-left back-icon" href="javascript:history.go(-1);">返回</a>
				<div class="tit">分类</div>
				<div class="sousuo" id="sousou"><img src="../assets/images/sou.png"></div>
			</div>
		</div>
	</header>
	<div style="overflow: hidden;position: fixed;width: 100%;z-index: 10000;top:0px;">
	<div class="order_top_count" style="display:none;">
		<div class="order_top">
			<div class="order_a_l">
				<div id="nav-left_ll"><img src="../assets/images/order_top_l.png"></div>
			</div>
			<div class="order_sou">
				<form action="/m_search/list" method="get" id="searchform" name="searchform">
					<input name="keyword" id="keyword" placeholder="搜索商品" type="text" value="">
					<span class="pro_sou" style="cursor: pointer;" onclick="searchproduct();"><img src="../assets/images/Search.png"></span>
				</form>
			</div>
		</div>
	</div>
	</div>
	<fenlei></fenlei>
	</div>
</template>

<script>
	
	
	
   
	import fenlei from './fenlei';
	export default {
		components:{fenlei}
	}
	
	
</script>

<style>
	.header{height:44px;position: relative;}
	.fix_nav{height:44px; line-height: 44px;top:0; left: 0; width: 100%; z-index:99;/* position: fixed; */}
	.nav_inner{max-width:768px;margin:0 auto;background:#000000; position: relative;}
	.nav-left,.nav-right{width:42px; height:34px; position:absolute; top:5px; display:block; overflow:hidden; text-indent:-999px;border-radius: 5px;}
	.nav-left{left:5px;}
	.tit{color: #fff;/* font-size: 18px; */font-weight: normal;height: 100%; text-align: center;font-size:18px;}
	.order_top_count, .order_bg_img, .order_i_h, .order_content_cou, .order_bot_cou, .or_de_p_z, .or_de_xq, .or_de_sp, .member_top, .sou_count, .sou_g_cou, .member_bod_cou, .list_count{max-width:768px;margin:0 auto;}
	.order_top_count{background:#000000;height:44px;color:#fff;}
	.order_top{height:44px;position:relative;}
	.order_a_l{float:left;line-height: 44px;width:15%;position:absolute;}
	#nav-left_ll{padding-left: 10px;cursor: pointer;}
	#nav-left_ll img{width: 12px;}
	.order_sou{float:right;line-height:28px;width: 85%;padding-top: 6px;position: relative;}
	.order_sou input{border-radius:7px;width: 96%;color:#999;font-size: 16px;padding-left: 10px;line-height:32px;height:32px;-webkit-appearance:none;}
	.order_sou img{position: absolute;right:7%;top:11px;width: 20px;}
	.sou_count{background:#eee;height:125px;padding-right: 4%;padding-left: 4%;display:none;margin-top: 44px;}
	.sousuo{height: 44px;line-height: 44px; position: absolute;right: 10px;top: 0;color:#fff;font-size: 13px;cursor: pointer;}
	.sousuo img{width: 25px;}
	

</style>
