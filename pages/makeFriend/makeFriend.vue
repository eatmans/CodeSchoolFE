<template>
	<view class="c-container">
		<view class="box">
			<silder-like :drag-distance="150" :top-space="30" :show-card-number="4" height="420px" width="330px">
				<silder-like-item @silder-left="like(item)" @silder-right="nulike(item)" v-for="(item, index) in items"
					:key="index">
					<!-- <img class="c-user-zp" :src="item.img" /> -->
					<view class="c-cart" @click="gotoLookFirend()">
						<img class="c-user-zp" src="../../static/ys4.jpg"  mode="top"/>
						<view class="c-user">
							<view class="">
								<text class="c-user-name">{{item.title}}</text>
								<text class="c-verification ">
									<u-icon name="weibo" color="#5aa897" size="28"></u-icon>真实头像
								</text>
							</view>
							<view class="c-tag-box">
								<text class="c-tag c-blue">
									<u-icon name="weibo" color="#FFF" size="28"></u-icon>20
								</text>
								<text class="c-tag">
									</u-icon>水瓶座
								</text>
							</view>
							<text class="c-user-say">{{item.body}}</text>
						</view>
					</view>
				</silder-like-item>
			</silder-like>
		</view>

		<view class="">
			<button class="c-button" @click="addItem">再来一批</button>
		</view>
	</view>
</template>

<script>
	import {
		SilderLike,
		SilderLikeItem
	} from 'vue-silder-like'

	export default {
		name: 'demo',
		components: {
			SilderLike,
			SilderLikeItem
		},
		data() {
			return {
				getMore: 0,
				items: [{
						title: 'Susie1',
						body: 'Susie1',
						img: '//static.51kcwc.com/car/static/activity/spring/zunyi/h1@2x.png'
					},
					{
						title: 'Susie2',
						body: 'Susie2',
						img: '//static.51kcwc.com/car/static/activity/spring/zunyi/h1@2x.png'
					},
					{
						title: 'Susie3',
						body: 'Susie3',
						img: '//static.51kcwc.com/car/static/activity/spring/zunyi/h1@2x.png'
					}
				]
			}
		},
		mounted() {},
		methods: {
			zailai() {

			},
			addItem() {
				this.items.push({
					title: 'Susie' + (this.items.length + 1),
					body: 'Susie' + (this.items.length + 1),
					img: '//static.51kcwc.com/car/static/activity/spring/zunyi/h1@2x.png'
				});
				this.items.push({
					title: 'Susie' + (this.items.length + 1),
					body: 'Susie' + (this.items.length + 1),
					img: '//static.51kcwc.com/car/static/activity/spring/zunyi/h1@2x.png'
				});
				this.items.push({
					title: 'Susie' + (this.items.length + 1),
					body: 'Susie' + (this.items.length + 1),
					img: '//static.51kcwc.com/car/static/activity/spring/zunyi/h1@2x.png'
				});

			},
			gotoLookFirend(){
				uni.navigateTo({
					url: './lookFirend/lookFirend',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			nulike(item) {
				uni.showToast({
					title: '你玩完了，居然不喜欢我',
					icon: "none"
				});
				console.log('不喜欢', item)
			},
			like(item) {
				uni.showToast({
					title: '你居然喜欢' + item.title
				});
				console.log('喜欢', item)
				// console.log(this.items.length)
			}
		}
	}
</script>

<style lang="less">
	.c-container {
		margin-top: 45px;
	}

	.box {
		padding-bottom: 20px;
	}

	.c-cart {}

	.c-user-zp {
		
		width: 700rpx;
		height: 650rpx;
	}

	.c-user {
		margin-left: 20rpx;
	}

	.c-user-name {
		font-size: 40rpx;
	}

	.c-button {
		background-color: #ff7171;
		width: 60%;
		color: #FFFFFF;
	}

	.c-verification {
		margin: 5rpx;
		padding: 5rpx;
		border-radius: 45rpx;
		background-color: #eeeeee;
		color: #5aa897;
	}
		
	.c-tag-box{
		margin: 10rpx;
		margin-left: -20rpx;
	}
	.c-tag {
		margin: 10rpx;
		padding: 5rpx;
		height: 50rpx;
		border-radius: 10rpx;
		background-color: #00917c;
		color: #FFFFFF;
	}
	.c-blue{
		background-color: #64dfdf;
	}
	
	.c-user-say{
		color: #999;
	}
</style>
