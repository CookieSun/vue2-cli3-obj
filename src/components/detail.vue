<template>
	<div>
	<div class="fanhui_cou">
		<div class="fanhui_1"></div>
		<div class="fanhui_ding">顶部</div>
	</div>
	
	<header class="header">
		<div class="fix_nav">
			<div style="max-width:768px;margin:0 auto;background:#000;position: relative;">
				<a class="nav-left back-icon" href="javascript:history.back();">返回</a>
				<div class="tit">商品详细</div>
			</div>
		</div>
	</header>
	<input type="hidden" id="prodId" value="663"/>
	<input id="currSkuId" value="" type="hidden"/>
	<div class="container">
	    <div class="row white-bg">
	        <div id="slide"> 
	            <div class="hd">
	                <ul>
	                	<li>1</li></ul>
	            </div>
	            <div class="bd">
	                <div class="tempWrap" style="overflow:hidden; position:relative;">
	                	<ul style="width: 3072px; position: relative; overflow: hidden; padding: 0px; margin: 0px; transition-duration: 200ms; transform: translateX(-768px);">
	                        <li style="display: table-cell; vertical-align: middle; max-width: 768px;">
	                        		<a href="#"><img style="max-width:100vw;max-height:80vw;margin:auto;" src="../assets/img/53698282-4ff7-4daa-bb4c-4bcaa14b00fc.jpg"></a>
	                        	</li>
	                        </ul>
	               </div>
	            </div>
	        </div>
	    </div>
	    <div class="row gary-bg">
	         <div class="white-bg p10 details_con">
	         <h1 class="item-name" id="prodName">艾吉贝2015新款多层收纳真皮单肩斜挎包女包头层牛皮斜跨小包包女</h1>
	         <ul>
				<li>
					<label>商城价格：</label>
					<span class="price">¥<span class="price" id="prodCash">179.00</span></span>
				</li>
	<li id="choose_0" index="0" >
						<label id="propName" propname="颜色">颜色：</label>
						<dl>
							<dd key="208:635" valId="635" >黑色<span></span></dd>
									<dd class="check" key="208:636" valId="636" >红色<span></span></dd>
									<dd key="208:661" valId="661" >黄色<span></span></dd>
									</dl>
					</li>
				  <li>
					<label>数量：</label>
					<div class="count_div" style="height: 30px; width: 130px;">
						<a href="javascript:void(0);" class="minus" ></a>
						  <input type="text" class="count" value="1" id="prodCount" readonly="readonly"/>
						<a href="javascript:void(0);" class="add" ></a>
					</div>
				</li>
				</ul>
			</div>
	        <div id="goodsContent" class="goods-content white-bg">
				
	            <div class="hd hd_fav">
	                <ul>
	                    <li class="on">图文详情</li>
	                    <li class="">规格参数</li>
	                    <li class="">评价(0)</li>
	                </ul>
	            </div>
				
	            <div class="tempWrap" style="overflow:hidden; position:relative;">
	            <div style="width: 100%; position: relative; overflow: hidden; padding: 0px; margin: 0px; transition-duration: 200ms; transform: translateX(0px);" class="bd">
	                <ul style="display: table-cell; vertical-align: top; max-width: 768px;width: 100%;" class="property">
	                    <div class="prop-area" style="min-height:300px;overflow: hidden;">
	                    	<img src="../assets/img/8a9740c7-7f8e-4f20-ba64-1e90dd596ebe.jpg" alt="" /></div>
	                </ul>
	                <ul class="txt-imgs" style="display: table-cell; vertical-align: top; max-width: 768px;width: 100%;">
	                	<div class="desc-area" style="padding: 0px 10px 0 10px;">
		                <li style="height:30px;">
		                	<div id="ajax_loading" style="margin: 10px  auto 15px;text-align:center;"> </div>
		                </li>
		                </div>
	                </ul>
	                <ul style="display: table-cell; vertical-align: top; max-width: 768px;width: 100%;" class="appraise" rel="1" status="1">
	                	<div style="height:30px;">
		                	<div id="ajax_loading" style="margin: 10px  auto 15px;text-align:center;"></div>
		                </div>
	                     <div class="wap_page" style="display: none;" onclick="next_comments(this)"><span>下一页</span></div>
	                </ul>
	            </div>
	            </div>
	        </div>
	    </div>
	</div>
	
	<div class="fixed-foot">
		<div class="fixed_inner">
			<a class="btn-fav" href="javascript:void(0);" onclick="addInterest(this,'663');">
			<i class="i-fav"></i><span>收藏</span>
			</a>
			<a class="cart-wrap" href="/shopcart">
				<i class="i-cart"></i>
				<span>购物车</span>
				<span class="add-num" id="totalNum">0</span>
			</a>
			<div class="buy-btn-fix">
			    <a class="btn btn-info btn-cart"  onclick="addShopCart();" href="javascript:void(0);">加入购物车</a>
			    <a class="btn btn-danger btn-buy" onclick="buyNow();" href="javascript:void(0);">立即购买</a>
			</div>
		</div>
	</div>
	
	<div class="clear"></div>
	</div>
</template>

<script>
	
// 	import list from './list';
// 	
// 	export default {
// 		methods:{
// 			goback(){
// 				this.$router.go(-1);
// 			}
// 		}
// 	}
	
</script>

<style>
	


</style>
