<template>
	
<swipe class="my-swipe">
  <swipe-item class="slide"><img src="../assets/img/0da8eb94-0159-4700-a6a5-bc007da5a853.jpg" /></swipe-item>
  <swipe-item class="slide"><img src="../assets/img/61647775-f5d0-4cfe-b84f-96060eb8e2e3.jpg" /></swipe-item>
  <swipe-item class="slide"><img src="../assets/img/efa1dc7b-1375-4876-acae-e344cae7d55c.jpg" /></swipe-item>
</swipe>

</template>

<script>
	
	import 'vue-swipe/dist/vue-swipe.css';
	import { Swipe, SwipeItem } from 'vue-swipe';
	
	export default {
		components:{
			swipe:Swipe,
			'swipe-item':SwipeItem	
			}
	}
</script>

<style>
	.my-swipe {
  height: 200px;
  width:100%;
  color: #fff;
  font-size: 30px;
  text-align: center;
} 
.slide{width:100%}
.slide img{width:100%}
</style>
