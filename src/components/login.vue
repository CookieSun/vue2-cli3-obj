<template>
	<div class="content">
	  <p class="fhbtn"><a href="mydoc_m.html"></a></p>
	  <h1></h1>
	  <div class="login-box">
	    <p class="lsolid"></p>
	    <div class="login">
	      <a href="login_m.html">登录</a>
	      <span></span>
	      <a href="reg_m.html">注册</a>
	    </div>
	    <p class="rsolid"></p>
	  </div>
	  <ul>
	    <li class="lifirst">
	      <input type="text" value=""/>
	      <span>帐号</span>
	    </li>
	    <li>
	      <input type="text" value=""/>
	      <span>密码</span>
	    </li>
	  </ul>
	  <div class="footbox">
	    <input type="button" value="登 录" class="login-btn"/>
	    <a href="javascript:;" class="tishi">忘记密码？</a>
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
	 body{ background:#f2f4f5;}
	.content{max-width:100%; margin:0 auto;}
	.content .fhbtn{ padding-top:27px;}
	.content .fhbtn a{ display:block;width:23px;height:25px; background:url(../assets/img/history1.png) no-repeat 0 0; background-size:100%; margin-left:30px;}
	.content h1{width:218px;height:135px; background:url(../assets/img/say.png) no-repeat 0 0; background-size:100%; margin:0 auto; margin-top:122px;}
	.content .login{width:200px;height:38px; margin:0 auto; margin-top:85px;}
	.login a{width:97px;height:38px; font-size:35px; line-height:38px; float:left; color:#4c4f50; text-align:center;}
	.login span{ float:left;height:38px; border-left:1px solid #4c4f50;}
	.content .login-box{ position:relative;}
	.content .login-box .lsolid{width:196px;height:18px; border-bottom:1px solid #4c4f50; position:absolute;top:0;left:10px;}
	.content .login-box .rsolid{width:196px;height:18px; border-bottom:1px solid #4c4f50; position:absolute;top:0;right:10px;}
	.content ul{width:578px;height:192px; border:1px solid #e5e7e8; background:#fff; margin:0 auto; margin-top:68px;}
	.content ul li{height:95px; position:relative;}
	.content ul li.lifirst{border-bottom:1px solid #e5e7e8;}
	.content ul li input{ padding-left:124px;width:454px;height:100%; font-size:40px;}
	.content ul li span{width:123px;height:49px; position:absolute;top:26px;left:0; border-right:1px solid #676868; color:#676868; font-size:25px; line-height:49px; text-align:center;}
	.content .footbox{width:465px;height:65px;margin:0 auto; }
	.content .login-btn{width:465px;height:65px; background:#4c4f50; color:#fff; text-align:center; line-height:65px; border-radius:8px; display:block; margin-top:62px; font-size:28px;}
	.content .tishi{width:140px; font-size:25px; margin-top:28px; display:block;}
</style>
