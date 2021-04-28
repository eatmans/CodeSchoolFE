<template>
	<view class="u-flex u-flex-col">
		<image class="logo" src="/static/codelogo.png"></image>
		<u-toast ref="uToast" />
		<u-form :model="form" ref="uForm" class="c-container">
			<u-form-item prop="uid">
				<u-input v-model.trim="form.uid" placeholder="请输入学号" />
			</u-form-item>
			<u-form-item prop="phoneNumber">
				<u-input v-model.trim="form.phoneNumber" placeholder="手机号码" />
			</u-form-item>

			<u-form-item prop="inputPassword">
				<u-input v-model.trim="form.inputPassword" :border-bottom="form.borderBottom"
					placeholder="密码(6-12位数字字母组合密码)" type="password" />
			</u-form-item>

			<u-form-item prop="confirmPassword">
				<u-input v-model.trim="form.confirmPassword" :border-bottom="form.borderBottom" placeholder="再输入一次"
					type="password" />
			</u-form-item>
		</u-form>

		<u-button class="c-botton" type="primary" :ripple="true" @click="submit">注册</u-button>
		<navigator class="c-a" href="#" @click="gotoLogin">已经有账号了？</navigator>
		<view class="c-agress">
			<u-checkbox v-model="form.agress">
				*注册代表你同意
			</u-checkbox>
			<label class="c-blue" @click="gotoAgreement()">《可得校园用户协议》</label>
		</view>

	</view>

</template>

<script>
	export default {
		data() {
			return {
				form: {
					uid: "",
					phoneNumber: '',
					inputPassword: '',
					confirmPassword: '',
					border: true,
					borderBottom: true,
					agress: true
				},
				rules: {
					uid: [{
						required: true,
						message: '请输入学号',
						trigger: ['change', 'blur'],

					}, {
						len: 9,
						message: '学号为9位',
						trigger: ['blur', 'change'],
					}, {
						type: "number",
						message: '学号只能数字',
						trigger: ['blur', 'change'],
					}, ],
					phoneNumber: [
						// 必填规则
						{
							required: true,
							message: '请输入正确手机号码',
							trigger: ['change', 'blur'],

						},
						{
							validator: (rule, value, callback) => {
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							trigger: ['change', 'blur'],
						}
					],
					inputPassword: [{
							min: 8,
							message: '密码不得少于8位',
							trigger: ['blur', 'change'],
						}, {
							// pattern: /^[0-9a-zA-Z]*$/g,
							// pattern: /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*])[\da-zA-Z~!@#$%^&*]{8,}$/g,
							pattern: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)(?=.*?[!#@*&.])[a-zA-Z\d!#@*&.]{8,}.*$/g,
							// 正则检验前先将值转为字符串
							transform(value) {
								return String(value);
							},
							message: '必须包含字母、数字和特殊符号'
						},
						{
							required: true,
							message: '此为必填字段',
							trigger: ['blur', 'change'],
						}

					],
					confirmPassword: [{
						required: true,
						message: '此为必填字段',
						trigger: ['blur', 'change']
					}, {
						validator: (rule, value, callback) => {
							return value == this.form.inputPassword;
						},
						message: '两次的密码不一致',
						trigger: ['change', 'blur'],
					}]
				}
			};
		},
		methods: {
			gotoLogin() {
				uni.navigateTo({
					url: '../login/login',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			error(desc) {
				this.$refs.uToast.show({
					title: desc,
					type: 'error',
				});
			},
			gotoAgreement() {
				uni.navigateTo({
					url: '../agreement/agreement',
				});
			},
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log('验证通过');
						this.$u.post('register/phone', {
							uid: this.form.uid * 1,
							phoneNumber: this.form.phoneNumber,
							password: this.form.confirmPassword
						}).then(res => {
							if (res.code == 200) {
								uni.setStorage({
									key: "isLogined",
									data: true,
									success: function() {
										console.log('写入是否已经登录！');
									}
								});
								uni.switchTab({
									url: "../login/login",
								});
							} else if (res.code == -2) {
								this.error(res.desc);
							} else {
								this.error(res.desc);
							}
							console.log(res);
						});

					} else {
						console.log('验证失败');

					}
				});


			}

		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		}
	};
</script>

<style>
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.c-container {
		width: 500rpx;
	}

	.c-a {
		text-decoration: none;
		cursor: pointer;
		color: #007AFF;
		margin-top: 20rpx;
	}

	.c-botton {
		width: 500rpx;
		margin-top: 20rpx;
		border-radius: 45rpx;
	}

	.c-agress {
		margin-top: 10rpx;
	}

	.c-blue {
		margin-left: -20rpx;
		color: #0000FF;
	}
</style>
