<template>
	<view class="u-flex u-flex-col c-container">
		<!-- <image class="c-bg" src="../../static/mybg.png" mode=""></image> -->
		<view class="c-user u-col-center">
			<view class="c-user-av" @click="">
				<image class="c-user-av-image" src="../../static/codelogo.png" mode=""></image>
				<view class="c-user-name">
					<text class="c-user-name-text">BLACK WATER</text>
					<view class="c-user-desc">
						广东邮电职业技术学院19级软件技术专业
					</view>
				</view>
				<!-- <button class="c-user-edit" type="default">编辑</button> -->
			</view>

			<view class="c-user-info">
				<view class="c-info-item" @click="gotoMyFollow()">
					<view class="c-info-data">
						35
					</view>
					<view class="c-info-desc">
						关注
					</view>
				</view>
				<view class="c-info-item" @click="gotoMyFans()">
					<view class="c-info-data">
						1935
					</view>
					<view class="c-info-desc">
						粉丝
					</view>
				</view>
				<view class="c-info-item" @click="gotoMyLikes()">
					<view class="c-info-data">
						276
					</view>
					<view class="c-info-desc">
						获赞
					</view>
				</view>
				<view class="c-info-item" @click="gotoMyNews()">
					<view class="c-info-data">
						5
					</view>
					<view class="c-info-desc">
						动态
					</view>
				</view>
			</view>
		</view>
		<view class="c-tools">
			<view v-if="!isLogined" class="c-item" @click="exitLogin()">
				<view class="c-button-box">
					<!-- <u-icon name="file-text"></u-icon> -->
					<image class="c-icon" src="../../static/exit.svg" mode=""></image>
					<text class="c-item-text">退出登录</text>
				</view>
				<view class="">
					<u-icon color="#d76333" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="c-item">
				<view class="c-button-box">
					<image class="c-icon" src="../../static/icon_圈圈.svg" mode=""></image>
					<text class="c-item-text">我的圈子</text>
				</view>
				<view class="">
					<u-icon color="#d76333" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="c-item" @click="gotoMyFile()">
				<view class="c-button-box">
					<image class="c-icon" src="../../static/myfile.svg" mode=""></image>
					<text class="c-item-text">我的文件</text>
				</view>
				<view class="">
					<u-icon color="#d76333" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="c-item" @click="gotoActivity()">
				<view class="c-button-box">
					<image class="c-icon" src="../../static/active.svg" mode=""></image>
					<text class="c-item-text">我的活动</text>
				</view>
				<view class="">
					<u-icon color="#d76333" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="c-item" @click="gotoAbout()">
				<view class="c-button-box">
					<image class="c-icon" src="../../static/about.svg" mode=""></image>
					<text class="c-item-text">关于我们</text>
				</view>
				<view class="">
					<u-icon color="#d76333" name="arrow-right"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isLogined: false,
			}
		},
		methods: {

			gotoActivity() {
				uni.navigateTo({
					url: '../activity/activity',
				});
			},
			gotoMyFile() {
				uni.navigateTo({
					url: '../myFile/myFile',
				});
			},
			gotoMyFollow() {
				uni.navigateTo({
					url: '../myFollow/myFollow',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			gotoMyFans() {
				uni.navigateTo({
					url: '../myFans/myFans',
				});
			},

			gotoMyLikes() {
				uni.navigateTo({
					url: '../myLikes/myLikes',

				});
			},
			gotoMyNews() {
				uni.navigateTo({
					url: '../myNews/myNews',

				});
			},
			gotoAbout() {
				uni.navigateTo({
					url: '../about/about',
				});
			},
			exitLogin() {
				try {
					uni.setStorageSync('isLogined', 'unlogined');
					uni.showToast({
						title: '退出成功！'
					});
					try {
						const value = uni.getStorageSync('isLogined');
						this.isLogined = value;
						if (value) {
							console.log(value);
						}
					} catch (e) {
						// error
					}
					console.log("成功退出")
				} catch (e) {
					console.log("出错了")
				}
			}
		}
	}
</script>

<style>
	.c-container {}

	.c-bg {
		width: 100%;
		background-size: 100%;
		margin-bottom: -400rpx;
		z-index: -11;
	}

	.c-user {
		width: 100%;
		display: flex;
		flex-direction: column;
		background-color: #f5f0f0;
		color: #333333;
	}

	.c-user-edit {
		background-color: #007AFF;
		color: #FFFFFF;
		border-radius: 45rpx;
		height: 60rpx;
		font-size: 25rpx;
		position: fixed;
		top: 80px;
		right: 30px;
	}

	.c-user-info {
		display: flex;
		flex-direction: row;
	}

	.c-user-name-text {
		color: #000000;
		font-size: 45rpx;
	}

	.c-user-desc {
		color: #808080;
		font-size: 20rpx;
	}

	.c-bar {
		display: flex;
		flex-direction: column;
		margin: 10rpx;
	}

	.c-bar-item {
		margin: 5rpx;
	}

	.c-impo {
		margin-left: 20rpx;
		color: #000;
	}

	.c-user-av {
		/* background-color: #18B566; */
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

	}

	.c-user-av-image {
		/* margin-top: -100rpx; */
		margin-top: 50rpx;
		/* margin-left: -250rpx; */
		width: 150rpx;
		height: 150rpx;
		border: 5rpx double #FFFFFF;
		border-radius: 100rpx;
	}

	.c-user-name {
		margin: 10rpx;
		margin-top: 50rpx;
		/* margin-left: -100rpx; */
	}

	.c-tools {
		margin-top: 20rpx;
	}

	.c-item {
		background-color: #fbf5f4;
		height: 80rpx;
		width: 720rpx;
		margin-top: 25rpx;
		margin-bottom: 25rpx;
		padding: 20rpx;
		padding-left: 100rpx;
		border-radius: 25rpx;
		color: #000;
		border: 2rpx solid #F1F1F1;
		font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.c-item-text {
		margin-left: 25rpx;
	}

	.c-info-item {
		padding: 50rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

	}

	.c-info-data {
		font-size: 35rpx;
	}

	.c-info-desc {
		margin-top: 10rpx;
		color: #999;
	}

	.c-icon {
		width: 50rpx;
		height: 50rpx;
	}

	.c-button-box {
		display: flex;
		/* background-color: #18B566; */
		margin-left: -70rpx;
		align-items: center;
		/* margin-left: 50rpx; */
	}
</style>
