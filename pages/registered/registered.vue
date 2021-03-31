<template>
	<view>
		我是注册页
		<text class="">{{ info }}</text>
		<button type="default" @click="mounted()">获取数据</button>
	</view>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				info: null
			}
		},
		methods: {
			mounted() {
				axios
					.get('https://api.coindesk.com/v1/bpi/currentprice.json')
					.then(response => (this.info = response))
			}
		}
	}
</script>

<style>

</style>
