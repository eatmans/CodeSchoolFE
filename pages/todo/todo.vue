<template>
	<view class="u-flex u-flex-col">

		<!-- 日历组件 -->
		<xjCalendar @change="change"></xjCalendar>

		<!-- 置顶提醒 -->
		<view class="c-remind">
			<view class="c-remind-top">
				<view class="c-today-title">
					<text class="c-big">置顶提醒</text>
					<text class="c-loss"></text>
				</view>
				<view class="c-more1" @click="gotoSchedule(e)">
					<text>查看全部</text>
				</view>
			</view>
			<view class="c-remind-list">
				<!-- 遍历全部提醒-->

				<view class="c-remind-item1">
					<view class="c-remind-item-left">
						<view class="c-dot">
						</view>
					</view>
					<view class="c-remind-item-center">
						<view class="c-time">
							16:30
						</view>
						<view class="c-text-dark">
							打疫苗，要带好身份证！！！
						</view>
					</view>
				</view>
				<view class="c-remind-item1">
					<view class="c-remind-item-left">
						<view class="c-dot">
						</view>
					</view>
					<view class="c-remind-item-center">
						<view class="c-time">
							16:30
						</view>
						<view class="c-text-dark">
							打疫苗，要带好身份证！！！
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 提醒 -->
		<view class="c-remind">
			<view class="c-remind-top">
				<view class="c-today-title">
					<text class="c-big">提醒</text>
					<text class="c-loss"></text>
				</view>
				<view class="c-more2" @click="gotoSchedule(e)">
					<text>查看全部</text>
				</view>
			</view>
			<view class="c-remind-list">
				<!-- 遍历全部提醒-->
				<view class="c-remind-item2">
					<view class="c-remind-item-left">
						<view class="c-dot">
						</view>
					</view>
					<view class="c-remind-item-center">
						<view class="c-time">
							16:30
						</view>
						<view class="c-text-dark">
							<text>打疫苗，要带好身份证！！！</text>
						</view>
					</view>
				</view>
				<view class="c-remind-item2">
					<view class="c-remind-item-left">
						<view class="c-dot">
						</view>
					</view>
					<view class="c-remind-item-center">
						<view class="c-time">
							16:30
						</view>
						<view class="c-text-dark">
							<text>打疫苗，要带好身份证！！！</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="">
			<view class="" @click="add()">
				<image class="c-plus" src="../../static/plus-circle-fill.png" mode=""></image>
			</view>
		</view>

	</view>

</template>

<script>
	import xjCalendar from '../../components/xj-calendar/xj-calendar.vue'
	export default {
		components: {
			xjCalendar
		},
		computed: {

			swiptHeight() {
				return `calc(100vw/7*0.8*${this.displayRow} + 20px)`
			},

			scrollHeight() {
				return `calc(100vh - 100vw/7*0.8*${this.displayRow} - 80px - var(--window-top))`
			}
		},
		data() {
			return {
				downloadData: {
					url: 'http://ctf.rjxh.cloud',
					icon: '../static/logo.png'
				}
			}
		},
		methods: {
			change(e) {
				console.log(e);

			},
			add() {
				uni.navigateTo({
					url: 'addTodo/addTodo',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
	/* 	.u-flex {
		background-color: #f5f0f0;
		width: 100%;
		height: 100%;
		position: fixed;
		background-size: 100% 100%;
	} */

	.c-remind {
		width: 90%;
	}

	.c-remind-item1 {
		display: flex;
		flex-direction: row;
		background-color: #fbf5f4;
		border-radius: 45rpx;
		height: 100rpx;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		padding: 20rpx;
		box-shadow: 5rpx 5rpx #e4dfde;

	}

	.c-remind-item2 {
		display: flex;
		flex-direction: row;
		background-color: #fbeee3;
		border-radius: 45rpx;
		height: 100rpx;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		padding: 20rpx;
		box-shadow: 5rpx 5rpx #e4dfde;

	}

	.c-remind-top {
		display: flex;
		flex-direction: row;
	}

	.c-today-title {
		font-size: 30rpx;
		color: #000000;
	}

	.c-big {}

	.c-loss {
		font-size: 25rpx;
		margin: 5rpx;
		flex-direction: column-reverse;
		color: #303133;
	}

	.c-more1 {
		margin-left: 60%;
		color: #0000FF;
	}

	.c-more2 {
		margin-left: 70%;
		color: #0000FF;
	}


	.c-remind-item-left {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 10%;
	}

	.c-gap {
		/* height: 80%; */
		width: 6rpx;
		background-color: #f8f8f8;
		/* margin: 10rpx; */
		margin-right: 10rpx;
	}

	.c-remind-item-center {
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		justify-content: center;
		/* width: 60%; */
	}

	.c-remind-item-righte {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.c-dot {
		width: 15rpx;
		height: 15rpx;
		background-color: #ff5500;
		border-radius: 45rpx;
	}

	.c-plus {
		width: 100rpx;
		height: 100rpx;
		position: fixed; //关键
		bottom: 60px;
		right: 30px;
	}
</style>
