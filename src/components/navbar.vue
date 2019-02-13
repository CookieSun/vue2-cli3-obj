<template>
	<header class="header">
		<div class="fix_nav">
		<div style="max-width:768px;margin:0 auto;height: 44px;position: relative;background:#000;">
			<form action="/m_search/list" method="get" id="searchform" name="searchform">
				<div class="navbar-search left-search">
						<input type="text" id="keyword" name="keyword" value="" placeholder="搜索商品" class="form-control">
				</div>
				<div class="nav-right">
					<input type="button" value="搜索" onclick="searchproduct();" class="img-responsive" style="text-align:center;background:#ccc;border-radius: 5px;border:none;height:34px;vertical-align:middle;clear:both;padding:0px;width:42px;" />
				</div>
			</form>
		</div>
		</div>
	</header>
	
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
	/* .header{background:#000;}
	.nav_inner{max-width:768px;margin:0 auto;background:#000000; position: relative;}
	.navbar-search{height: 100%; top:0; position: absolute; width: auto !important;}
	.left-search{padding-right: 0;left:5px;right: 55px;width: 100%;
    height: 34px;}
	.right-search{padding-right: 0;right:5px;left: 55px;}
	.left-search .form-control{background:#fff url(../assets/images/search.jpg) no-repeat 5px center; background-size: 25px;padding-left: 30px;margin-top:5px;width: 90%;
    height: 30px; border: 1px solid #ccc;border-radius: 4px;}
	.right-search .form-control{background:#fff url(../assets/images/search.jpg) no-repeat right center; background-size: 25px; margin-top:5px;}
	.nav-left,.nav-right{width:42px; height:34px; position:absolute; top:5px; display:block; overflow:hidden; text-indent:-999px;border-radius: 5px;}
	.nav-left{left:5px;}
	.nav-right{right:5px;text-align: center;}
	.img-responsive{display:block;text-align:center;background:#ccc;border-radius: 5px;border:none;height:34px;vertical-align:middle;clear:both;padding:0px;width:100%;}
 */

</style>
