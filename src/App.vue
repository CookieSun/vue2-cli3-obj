<template>
	<div>
		<loading v-show="$root.bLoading"></loading>
		<!-- <user></user> -->
	<!-- 	<column></column> -->
		<!-- <home></home> -->
		<!-- <car></car> -->
		<!-- <login></login> -->
    <router-view></router-view>
		<footbar v-show="$root.bFoot"></footbar>
	</div>
  
</template>


<script>
	// import car from './components/car'
	// import column from './components/column';
// 	import user from './components/user';
// 	// import detail from './components/detail';
	// import home from './components/home';
	import footbar from './components/footbar';
	// import login from './components/login';
	export default {
		components:{footbar}
	}

</script>