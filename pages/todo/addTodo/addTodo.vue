<template>
	<view class="c-container u-flex u-flex-col">
		<view class="c-title-box">
			<text class="c-title">标题</text>
			<textarea class="c-textarea" value="" placeholder="请输入你的待办" />
			<!-- <input type="text" value="" placeholder="" /> -->
		</view>
		
		<view class="c-box">
			<text class="">选择时间</text>
			<view class="c-time-bar">
				<view class="c-time-select">
					开始时间
				</view>
				<view class="c-time-select">
					结束时间
				</view>
			</view>

		</view>
		<view class="c-box">
			<text class="">全天 </text>
			<view class="c-time-bar">
				<view class="c-time-select">
					开始时间
				</view>
				<view class="c-time-select">
					结束时间
				</view>
			</view>

		</view>

		<view class="c-box">
			<view class="">
				<text class="">置顶提醒</text>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: true,
				mode: 'range'
			}
		},
		methods: {
			change(e) {
				console.log(e);
			}
		}
	}
</script>

<style  lang="scss" scoped>
	.c-container{
		background-color: #F8F8F8;
		height: 100vh;
	}
	
	.c-textarea{
		
	}
	.c-title-box {
		height: 125rpx;
		width: 100%;
		background-color: #F8F8F8;
		padding: 25rpx;
	}

	.c-title {
		font-size: 35rpx;
	}

	.c-box {
		height: 180rpx;
		width: 100%;
		background-color: #F8F8F8;
		padding: 25rpx;
	}

	.c-time-bar {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.c-time-select {
		padding: 20rpx;
		height: 120rpx;
	}

</style>
