<template>
	<view class="u-flex u-flex-col">
		<view class="">
			<view class="c-show-tips" v-if="!isLogined" @click="gotoLogin()">
				你还没有登录！点击马上登录
			</view>
		</view>
		<view class="c-cart">
			<view class="c-cart-show-box">
				<view class="c-cart-show">
					<text class="c-cart-title">Hello，可得</text>
					<text class="c-cart-text">{{helloDay}}</text>
					<u-icon name="order"></u-icon>
				</view>
				<view class="c-cart-iamge">
					<image class="c-cart-avt" src="../../static/codelogo.png" mode=""></image>
				</view>
			</view>
			<view class="c-cart-day">
				<niu-calendar :rightnow="rightenow" :day="day"></niu-calendar>
			</view>

		</view>
		<view class="c-today-course">
			<view class="c-today-course-top">
				<view class="c-today-title">
					<text class="c-big">今日课程</text>
					<text class="c-loss">(3)</text>
				</view>
				<view class="c-more" @click="gotoSchedule()">
					<text>查看全部</text>
				</view>
			</view>
			<view class="c-today-course-list">
				<!-- 遍历今日全部课程 -->
				<view class="c-today-course-item">
					<view class="c-today-course-item-left">
						<text class="">14:30</text>
						<text class="">-</text>
						<text class="">16:10</text>
					</view>
					<view class="c-gap"></view>
					<view class="c-today-course-item-center">
						<text class="c-text-dark c-blue">软件项目全岗位实践*</text>
						<text class="c-text-light">
							<u-icon name="map-fill" color="#888385" size="28"></u-icon>本部 敏行楼203
						</text>
						<text class="c-text-light">
							<u-icon name="account-fill" color="#888385" size="28"></u-icon>翁秀木
						</text>
					</view>
					<view class="c-today-course-item-righte" @click="scanCode()">
						<u-icon name="camera-fill" color="#0055ff" size="60"></u-icon>
						<text class="">考勤</text>
					</view>
				</view>

				<view class="c-today-course-item">
					<view class="c-today-course-item-left">
						<text class="">16:20</text>
						<text class="">-</text>
						<text class="">18:00</text>
					</view>
					<view class="c-gap"></view>
					<view class="c-today-course-item-center">
						<text class="c-text-dark c-blue">软件项目全岗位实践*</text>
						<text class="c-text-light">
							<u-icon name="map-fill" color="#888385" size="28"></u-icon>本部 敏行楼203
						</text>
						<text class="c-text-light">
							<u-icon name="account-fill" color="#888385" size="28"></u-icon>翁秀木
						</text>
					</view>
					<view class="c-today-course-item-righte" @click="scanCode()">
						<u-icon name="camera-fill" color="#888385" size="60"></u-icon>
						<text class="">考勤</text>
					</view>
				</view>
			</view>
		</view>

		<view class="c-today-task">
			<view class="c-today-task-top">
				<view class="c-today-title">
					<text class="c-big">今日任务</text>
					<text class="c-loss">(4)</text>
				</view>
				<view class="c-more" @click="gotoTodo()">
					<text>查看全部</text>
				</view>
			</view>
			<view class="c-today-task-list">
				<!--  遍历今日的TODO -->
				<scroll-view class="c-scroll-view" scroll-x="true" @scroll="scroll" scroll-left="120">
					<view class="c-today-task-item ">
						<text class="c-text-light">置顶提醒：</text>
						<view class="c-time-box">
							<view class="c-dot"></view>
							<text class="c-time c-text-light">16:30</text>
						</view>
						<text class="c-text-desc">参加学生讲座记得带笔记本</text>
					</view>
					<view class="c-today-task-item ">
						<text class="c-text-light">置顶提醒：</text>
						<view class="c-time-box">
							<view class="c-dot"></view>
							<text class="c-time c-text-light">16:30</text>
						</view>
						<text class="c-text-desc">参加学生讲座记得带笔记本</text>
					</view>
					<view class="c-today-task-item ">
						<text class="c-text-light">置顶提醒：</text>
						<view class="c-time-box">
							<view class="c-dot"></view>
							<text class="c-time c-text-light">16:30</text>
						</view>
						<text class="c-text-desc">参加学生讲座记得带笔记本</text>
					</view>

					<view class="c-today-task-item ">
						<text class="c-text-light">置顶提醒：</text>
						<view class="c-time-box">
							<view class="c-dot"></view>
							<text class="c-time c-text-light">16:30</text>
						</view>
						<text class="c-text-desc">参加学生讲座记得带笔记本</text>
					</view>
					<view class="c-today-task-item ">
						<text class="c-text-light">置顶提醒：</text>
						<view class="c-time-box">
							<view class="c-dot"></view>
							<text class="c-time c-text-light">16:30</text>
						</view>
						<text class="c-text-desc">参加学生讲座记得带笔记本</text>
					</view>
				</scroll-view>

			</view>
		</view>
	</view>

</template>

<script>
	import moment from 'moment';
	export default {

		data() {
			return {
				title: 'Hello',
				helloDay: '',
				courseList: 3,
				todoList: [1, 2, 3, 4, 5],
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				rightenow: true,
				day: 6,
				isLogined: false,
			}
		},
		onShow() {
			this.judgmentLogin();
			this.init();
		},
		onLoad() {
			this.judgmentLogin();
		},
		created() {
			// this.judgmentLogin();
		},
		methods: {
			init() {
				moment.locale('zh-cn');
				this.helloDay = moment().format("MMMDo, YYYY");
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},

			judgmentLogin() {
				try {
					const value = uni.getStorageSync('isLogined');
					if (value) {
						console.log("登录状态" + value);
						if (value == "unlogined") {
							this.isLogined = false;
							console.log("还没有登录");
						} else {
							this.isLogined = true;
						}
					}
				} catch (e) {
					// error
				}

			},

			changDay() {
				console.log(e);
			},
			gotoTodo() {
				uni.switchTab({
					url: '../todo/todo'
				});

			},
			gotoSchedule() {
				uni.switchTab({
					url: '../course/course'
				});

			},
			gotoLogin() {
				uni.navigateTo({
					url: '../login/login',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			gotoMy() {
				uni.switchTab({
					url: '../my/my'
				});
				console.log(e)
			},
			scanCode() {
				uni.scanCode({
					onlyFromCamera: true,
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
						uni.showToast({
							title: res.result
						});
					}
				});
			}
		}
	}
</script>

<style>
	page {
		background-color: #F8F8F8;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}


	.c-cart {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		height: 280rpx;
		margin-top: 25rpx;
		width: 90%;
		color: #DCDFE6;
		/* background-color: #007AFF; */
		border-radius: 25rpx;

	}

	.c-cart-title {
		display: block;
		font-size: 40rpx;
		color: #DBF1E1;
	}

	.c-cart-text {
		margin-top: 5rpx;
		color: #DCDFE6;
	}

	.c-cart-show-box {
		display: flex;
		flex-direction: row;
	}

	.c-cart-show {
		height: 180rpx;
		width: 620rpx;
		padding: 25rpx;
		background: url(../../static/mybg.png) center;
		background-size: 620rpx;
		margin-bottom: -45rpx;
		border-radius: 45rpx 45rpx 0 0;
	}

	.c-cart-day {
		height: 140rpx;
		width: 100%;
		padding: 15rpx;
		background-color: #fbefe3;
		border-radius: 45rpx;
	}

	.c-cart-iamge {
		width: 100rpx;
		height: 100rpx;
	}

	.c-cart-avt {
		width: 100rpx;
		height: 100rpx;
		margin-top: 25rpx;
		margin-left: -45rpx;
		border-radius: 25rpx;
	}

	.c-today-course {
		/* background-color: #FBF5F4; */
		width: 90%;
		margin-top: 25rpx;
	}

	.c-today-course-top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		/* 两端对齐 */
	}

	.c-today-title {
		font-size: 30rpx;
		color: #000000;
	}

	.c-big {
		font-weight: bold;
	}

	.c-loss {
		font-size: 25rpx;
		margin: 5rpx;
		color: #d0cbcd;
	}

	.c-more {
		margin-left: 400rpx;
		color: #7b7ab3;
	}

	.c-today-task {
		/* background-color: #FBF5F4; */
		width: 90%;
		margin-top: 25rpx;
	}

	.c-today-task-top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.c-today-course-item {
		display: flex;
		flex-direction: row;
		background-color: #ffffff;
		border-radius: 45rpx;
		height: 150rpx;
		margin-top: 10rpx;
		margin-bottom: 10rpx;
		padding: 20rpx;

	}

	.c-today-course-item-left {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* justify-content: center; */
		width: 25%;
	}

	.c-gap {
		/* height: 80%; */
		width: 6rpx;
		background-color: #f8f8f8;
		/* margin: 10rpx; */
		margin-right: 10rpx;
	}

	.c-today-course-item-center {
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		justify-content: center;
		width: 60%;
	}

	.c-today-course-item-righte {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.c-text-dark {
		color: #000000;
	}

	.c-text-light {
		color: #808080;
		font-size: 25rpx;
		display: inline-block;
		font-weight: 10px
	}

	.c-blue {
		color: #68627a;
	}

	.c-today-task-list {
		/* 		display: flex;
		flex-direction: row; */
	}

	.c-today-task-item {
		margin: 10rpx;
		padding: 18rpx;
		width: 180rpx;
		height: 250rpx;
		/* line-height: 300rpx; */
		display: inline-block;
		background-color: #fbf5f4;
		border-radius: 45rpx;
		font-size: 30rpx;
	}

	.c-dot {
		width: 15rpx;
		height: 15rpx;
		background-color: #ff5500;
		border-radius: 45rpx;
	}

	.c-time-box {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.c-time {
		margin-left: 5rpx;
	}

	.c-scroll-view {
		white-space: nowrap;
		width: 100%;
	}

	.c-text-desc {
		white-space: normal;
		font-size: 28rpx;
	}

	.c-show-tips {
		margin-top: 20rpx;
		background-color: #ff0000;
		padding: 10rpx;
		color: #FFFFFF;
		border-radius: 45rpx;
	}

	.c-more {}
</style>
