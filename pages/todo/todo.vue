<template>
	<view class="u-flex">
		我是TODO
	</view>

</template>

<script>
	import vueQr from 'vue-qr'

	export default {
		components: {
			vueQr
		},
		methods: {
			test(dataUrl, id) {
				console.log(url, id)
			}
		},
		data() {
			return {
				downloadData: {
					url: 'http://ctf.rjxh.cloud',
					icon: '../static/logo.png'
				}
			}
		}
	}
</script>
