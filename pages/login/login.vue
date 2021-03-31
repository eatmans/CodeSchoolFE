<template>
	<view class="content">
		<image class="logo" src="/static/codelogo.png"></image>
		<view class="hen">
			<image class="mini" src="/static/codelogo.png"></image>
			<input  class="input-style" type="text" value="" placeholder="请输入手机号码"/>
		</view>
		<view class="hen">
			<image class="mini" src="/static/codelogo.png"></image>
			<u-input v-model="value" :type="type" :border="border" :password-icon="passwordIcon" />
		</view>
		<view class="other">
			<a class="left">立即注册</a>
			<a class="right">忘记密码</a>
		</view>
		
		<u-button type="primary" :ripple="true">登录</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
	
	.hen{
		display: flex;
		flex-direction: row;

	}
	.mini{
		height: 50rpx;
		width: 50rpx;

		margin-left: auto;
		margin-right: auto;
		margin-bottom: 20rpx;
	}
	
	.input-style{
		color: #007AFF;
		 border-color: #66afe9;
		 outline: 0;
		 -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
		 box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
	}
	
	.btn{
		background-color: #007AFF;
		color: #FFFFFF;
		width: 350rpx;
		height: 80rpx;
		border-radius: 25px;
		margin: auto;
	}
</style>
