


<template>

	
	
  <div>
	  <navbar></navbar>
	  <slider></slider>
	  <list></list>
  </div>
</template>

<script>
	
	import slider from './slider';
	import list from './list';
    import navbar from './navbar';
	export default {
// 		mounted(){
// 			this.$root.bLoading=true;
// 		}
		components:{slider,list,navbar}
	}
	
	
</script>

<style>

</style>
