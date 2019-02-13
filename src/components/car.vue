<template>
	<div>
	<div class="fanhui_cou">
		<div class="fanhui_1"></div>
		<div class="fanhui_ding">顶部</div>
	</div> <header class="header header_1">
	    <div class="fix_nav">
	        <div class="nav_inner">
	            <a class="nav-left back-icon" @click="goback">返回</a>
	            <div class="tit">购物车</div>
	        </div>
	    </div>
	</header>
	<div class="container ">
	    <div class="row rowcar">
	        <ul class="list-group">
			            <li class="list-group-item text-primary">
			            <div class="icheck pull-left mr5">
			                           <input type="checkbox" checked="checked" class="ids" prodStatus="1"  itemkey=""/>
	                                       <label class="checkLabel">
			                       <span></span>
	                               </label>
			            </div>
			            	朗尊软件</li>
			            <li class="list-group-item hproduct clearfix">
				                <div class="p-pic"><a href="/views/663"><img class="img-responsive" src="../assets/img/1787bd1d-9381-402b-b98e-97ceeddf7692.jpg"></a></div>
				                <div class="p-info">
				                    <a href="/views/663"><p class="p-title">艾吉贝2015新款多层收纳真皮单肩斜挎包女包头层牛皮斜跨小包包女</p></a>
			                    	<p class="p-attr">
				                    		<span>颜色：红色；</span></p>
			                    	<p class="p-origin">
				                    	<a class="close p-close" onclick="deleteShopCart('','艾吉贝2015新款多层收纳真皮单肩斜挎包女包头层牛皮斜跨小包包女','663','1358')" href="javascript:void(0);">×</a>
				                        <em class="price">¥179.00</em>
				                    </p>
				                </div>
			            </li>
			            <li class="list-group-item clearfix">
			                <div class="pull-left mt5">
			                	<span class="gary">小计：</span>
			                	<em class="red productTotalPrice">¥179.00</em>
			                </div>
							<div class="btn-group btn-group-sm control-num">
			                    <a onclick="disDe(this)" href="javascript:void(0);" class="btn btn-default"><span class="glyphicon glyphicon-minus gary"></span></a>
			                    <input type="tel" class="btn gary2 Amount" readonly="readonly" value="1" maxlength="4" itemkey="" prodId="663" skuId="1358">
			                    <a onclick="increase(this)" href="javascript:void(0);" class="btn btn-default"><span class="glyphicon glyphicon-plus gary"></span></a>
			                </div>
						</li>
						</ul>
			       </div>
	</div>
	<div class="fixed-foot">
	<div class="fixed_inner">
	    <div class="pay-point">
	        <div class="icheck pull-left mr10">
	            <input type="checkbox" checked="checked" id="buy-sele-all" value="1">
	            <label for="buy-sele-all">
	                <span class="mt10"></span>全选
	            </label>
	        </div>
	         <p>合计：<em class="red f22">¥<span id="totalPrice">179.00</span></em></p>
	    </div>
	    <div class="buy-btn-fix">
	        <a href="javascript:submitShopCart();" class="btn btn-danger btn-buy">去结算</a>
	    </div>
	</div>
	</div>
	<div class="clear"></div>
	</div>
</template>

<script>
	export default {
		methods:{
			goback(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style>
	/* 返回顶部 */
	.fanhui_cou{position: fixed;bottom:60px;right:10px;z-index: 10000;opacity:0.8;background:#fff;width:52px;height:52px;border-radius: 50%;text-align: center;color:#909ca9;border:1px solid #8f9caa;display:none;}
	.fanhui_1{background:url(../assets/images/bot_top_arrow.png) no-repeat;width:14px;height:14px;background-size:14px;font-size: 12px;text-align: center;margin: 10px auto 0;}
	.fanhui_ding{padding-top: 2px;}
	.header{height:44px;position: relative;}
	.fix_nav{height:44px; line-height: 44px;top:0; left: 0; width: 100%; z-index:99;/* position: fixed; */}
	.nav_inner{max-width:768px;margin:0 auto;background:#000000; position: relative;}
	.nav-left,.nav-right{width:42px; height:34px; position:absolute; top:5px; display:block; overflow:hidden; text-indent:-999px;border-radius: 5px;}
	.nav-left{left:5px;}
	.tit{color: #fff;/* font-size: 18px; */font-weight: normal;height: 100%; text-align: center;font-size:18px;}
	.fixed-foot{height: 50px; z-index: 999; position: fixed; bottom: 0;left: 0; right: 0;width:100%; }
	.fixed_inner{margin:0 auto;position: relative;background:#fff;border-top:1px solid #ccc; max-width: 768px;}

</style>
