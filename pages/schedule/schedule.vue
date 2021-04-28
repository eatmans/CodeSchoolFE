<template>
	<view>


	</view>
</template>

<script>

	export default {
		data() {
			return {}
		},

		methods: {
		
		},
	}
</script>

<style lang="scss">
	.cu-custom {
		width: 100vw;
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		// align-items: ;
		// 顶部左侧打开抽屉
		.cu-left {
			width: 25vw;
			display: flex;
			flex-direction: row;
			position: relative;

			.left-rectangle {
				height: 50rpx;
				width: 80rpx;
				position: absolute;
				bottom: 14rpx;
			}

			.left-round {
				width: 66rpx;
				height: 66rpx;
				border-radius: 50%;
				box-shadow: 0 0 1rpx;
				position: absolute;
				left: 50rpx;
				bottom: 6rpx;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
			}
		}

		.cu-center {
			width: 50vw;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			position: relative;

			.week-btn {
				position: absolute;
				bottom: 10rpx;
			}
		}

		.cu-right {
			width: 25vw;
		}
	}

	.course-bg {
		background-size: cover;
		background-position: center center;
	}

	.kcb-item {
		position: absolute;
		justify-content: center;
		display: flex;
		align-items: center;
	}
</style>