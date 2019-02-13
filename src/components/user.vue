<template>
	<div class="maincontainer">
	<div class="container" style="max-width:768px;margin:0 auto;">
		<div class="row">
		<a href="/p/userInfo">
			<div class="member_top member_top_1">
				<div class="member_top_bg"><img  src="../assets/images/member_bg.png"></div>
				<div class="member_m_pic member_m_pic_1">
					<img class="img-circle" src="../assets/images/876605682.png">
	        			</div>
				<div  class="member_m_z member_m_z_1">
					<div class="member_m_x">小彩蛋</div>
					</div>
				<div class="member_m_r">账户管理、收货地址&gt;
				</div>
			</div></a>
			<div class="member_mp_img" data-toggle="modal" data-target="#myModalmin" data-title="我的名片" data-tpl="mp"><img src="../assets/images/member_mp_img.png"></div>
			<div class="list-group mb10">
				<a href="/p/userOrder" class="list-group-item tip">
					<div class="list_group_img">
					<img src="../assets/images/member_img16.png"></div>
					我的订单
					<span class="gary pull-right">查看全部</span>
				</a>
				<div class="list-group-item p0 clearfix">
					<div class="col-xs-3 p0">
						<a class="order_tab_link" href="/p/userOrder?state_type=1">
							<em class="order_img">
							<img src="../assets/images/order_bg_3.png"></em>待付款
							
							</a>
					</div>
					<div class="col-xs-3 p0">
						<a class="order_tab_link" href="/p/userOrder?state_type=2">
							<em class="order_img">
							<img src="../assets/images/order_bg_2.png"></em>待发货
							</a>
					</div>
					<div class="col-xs-3 p0">
						<a class="order_tab_link" href="/p/userOrder?state_type=3">
							<em class="order_img">
							<img src="../assets/images/order_bg_1.png"></em>待收货
							</a>
					</div>
					<div class="col-xs-3 p0">
						<a class="order_tab_link" href="/p/userOrder?state_type=4">
							<em class="order_img">
							<img src="../assets/images/order_bg.png"></em>已完成
							</a>
					</div>
				</div>
			</div>
			<div class="list-group mb10 member_list_group clearfix">
				<a href="/p/collect" class="list-group-item col-xs-4">
					<div class="m_img"><img src="../assets/images/order_bg_5.png"></div>
					<p class="m_name">我的收藏</p>
					<span class="red">0</span>
				</a>
				<a href="/p/userComments" class="list-group-item col-xs-4">
					<div class="m_img"><img src="../assets/images/order_bg_8.png"></div>
					<p class="m_name">我的评论</p>
					<span class="red">&nbsp;&nbsp;</span>
				</a>
				<a href="/p/inbox" class="list-group-item col-xs-4">
					<div class="m_img"><img src="../assets/images/order_bg_4.png"></div>
					<p class="m_name">收件箱</p>
					<span class="red">&nbsp;&nbsp;</span>
				</a>
	
				<a href="/p/systemMessages" class="list-group-item col-xs-4">
					<div class="m_img"><img src="../assets/images/order_bg_7.png"></div>
					<p class="m_name">系统消息</p>
					<span class="red">&nbsp;&nbsp;</span>
				</a>
				
			</div>
					
			<div class="list-group mb10">
				<a href="/p/help" class="list-group-item tip">
					<div class="list_group_img"><img src="../assets/images/order_bg_10.png"></div>
					常见问题
				</a>
				<a href="/p/feedbacks" class="list-group-item tip">
					<div class="list_group_img"><img src="../assets/images/order_bg_9.png"></div>
					意见反馈
				</a>
			</div>
			
		</div>
	</div>
	<div style="display: none;" class="modal fade" id="myModalmin" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	   <div class="modal-dialog">
	      <div class="modal-content">
	      	<form class="form-horizontal" role="form" data-method="formAjax">
		         <div class="modal-header member_tc_top">
		            <button type="button" class="close member_tc_xx" data-dismiss="modal" aria-hidden="true">×</button>
		            <h4 class="modal-title" id="myModalLabel">&nbsp;&nbsp;</h4>
		         </div>
				 <div style="overflow:hidden;width: 100%;padding-top: 20px;">
					<div style="">
						 <div class="member_mp_t_img" >
						 	<img src="../assets/images/noavatar.png">
			        			</div>
						 <div class="member_mp_t_m">萧雅哲</div>
						 <div class="member_mp_t_m_m">
							  	  <img src="../assets/img/a909bfc1-cada-4008-81c0-556ff86aace1.jpg">
							  </div>
							  <div class="member_mp_t_tit">用微信扫一扫二维码，成为我的粉丝</div>
						  </div>
				 </div>
				 <div style="height:60px;"></div>
	         </form>
	      </div>
		</div>
		<!-- <router-link to="/login">登录</router-link>
		<router-link to="/reg">登录</router-link> -->
		
	</div>
	
	</div>


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
	.maincontainer {
	    height: auto !important;
	    margin: 0 auto;
	    max-width: 768px;
	    padding-bottom: 110px;
	    position: relative;
	}
	@media (min-width: 760px) {
	  .container {
	    max-width: 768px!important;position: relative;/*background:#fff;*/
	  }
	}
	
	.member_top{}
	.member_top_bg img{width:100%;}
	.member_top{overflow:hidden;position: relative;}
	
	.member_m_pic{width:25%;text-align: center;position: absolute;top:6%;left: 3%;height: 100%}
	.member_m_pic img{width:100%;height:90%;border-radius: 50%;}
	.member_m_z{width:30%;position: absolute;left: 32%;top:10%;}
	.member_m_x{color: #fff;font-size: 15px;}
	.member_m_s{padding-top: 2px;color: #fff;font-size: 12px;}
	/* .member_m_bz{color: #366cce;width: 95%;background:url(../assets/images/member_m_img.png) no-repeat;width: 130px;height: 30px;background-size:60% 60%;padding-left:25px;font-size: 12px;padding-top:1px;margin-top:9%;}
	.member_m_bz_1{color: #366cce;width: 95%;background:url(../assets/images/member_m_img_1.png) no-repeat;width: 130px;height: 30px;background-size:60% 60%;padding-left:15px;font-size: 12px;padding-top:1px;margin-top:9%;} */
	.member_m_bz img{border-radius: 5px;width:100%;}
	.member_m_bz span{position: absolute;font-size: 12px;left:37%;top:16%;}
	.member_m_r{width:33%;position: absolute;right:4%;text-align: right;bottom: 10%;color: #fff;font-size: 10px;}
	
	/* 会员中心，代理商 */
	.member_m_dl{width:60%;position: absolute;left: 32%;top: 10%;text-align: left;color: #fff;}
	.member_m_dl_top{font-size: 15px;margin-top: 2%;}
	.member_m_dl_bot{font-size: 10px;margin-top: 8%;}
	
	.member_c_z{overflow: hidden;background:#fff;}
	.member_c_num{float:left;width:33.3%;text-align:center;padding: 3% 0px;border-right:1px solid #e5e5e5;}
	.member_c_num_img{width:35%;margin:0 auto;}
	.member_c_num_img img{width:100%}
	.member_c_num_tit{padding-top: 5px;}
	.member_cen_cou{background:#fff;}
	.member_cen_c_num{height:50px;line-height:50px;border-bottom: 1px solid #e5e5e5;}
	.member_cen_c_num_img{float:left;padding-left: 23px;}
	.member_cen_c_num_img img{width: 23px;}
	.member_cen_c_num_tit{float:left;padding-left: 13px;}
	.member_cen_rTxt{float:right; padding-right:10px; color:#999;}
	.member_cen_c_num_r{float:right;padding-right:22px;}
	.red_color{color:#f63234;}
	.member_cen_c_num_r img{width: 10px;}
	
	.wallet_des{padding:5px 20px;}
	.wallet_des p{margin:15px 0; color:#666;}
	.wallet_des p span{color:#333; font-weight:bold;}
	 
	.list_group_img{float:left; margin-top:-3px; margin-right:5px;}
	.list_group_img img{width: 23px;}
	.tip{padding-right:30px; position:relative; font-size:14px;}
	.order_tab_link .badge{background-color: #f15353; position: absolute;right:50%; margin-right:-32px; top: 2px;}
	.tip:before{
		content:"";
	    width:12px;
	    height:12px;
	    position:absolute;
	    top:50%;
		margin-top:-5px;
	    right:15px;
	    border-top:1px solid #6a94e7;
	    border-left:1px solid #6a94e7;
	    -webkit-transform: rotate(135deg);
	       -moz-transform: rotate(135deg);
	        -ms-transform: rotate(135deg);
	         -o-transform: rotate(135deg);
	            transform: rotate(135deg);
	}
	.order_tab_link{display:block; text-align:center; padding:10px 0; color:#686868; position:relative;}
	.order_tab_link .order_img{display: block; margin: 0 auto; text-align: center; width: 30%; margin-bottom:3px;}
	.order_tab_link .order_img img,.member_list_group .m_img img{max-width:100%; display:inline-block;}
	.member_list_group{border-left:1px solid #ddd;}
	.member_list_group .list-group-item{border-left:none; min-height:100px; text-align:center; padding:15px 0;}
	.member_list_group .list-group-item .m_name{margin:5px 0 3px; color:#333;}
	.member_list_group .m_img{margin: 0 auto; text-align: center; width: 35%; margin-bottom:3px;}
	 
	

</style>
