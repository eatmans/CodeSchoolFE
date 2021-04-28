<template>
	<view class="c-container">
		<u-form :model="form" ref="uForm">
			<u-form-item label="账号" prop="phoneNumber">
				<u-input v-model="form.phoneNumber" />
			</u-form-item>
			<u-form-item label="简介" prop="inputPassword">
				<u-input v-model="form.inputPassword" />
			</u-form-item>
			<u-form-item label="确认密码" prop="inputPassword">
				<u-input v-model="form.inputPassword" />
			</u-form-item>
		</u-form>
		<u-button @click="submit">提交</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					phoneNumber: '',
					inputPassword: '',
				},
				rules: {
					phoneNumber: [{
							required: true,
							message: '请输入手机号',
							trigger: ['blur']
						},
						{
							// 自定义验证函数，见上说明
							validator: (rule, value, callback) => {
								// 上面有说，返回true表示校验通过，返回false表示不通过
								// this.$u.test.mobile()就是返回true或者false的
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							// 触发器可以同时用blur和change
							trigger: ['change', 'blur'],
						}
					],
					inputPassword: [{
						min: 5,
						message: '简介不能少于5个字',
						trigger: 'change'
					}]
				}
			};
		},
		methods: {
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log('验证通过');
					} else {
						console.log('验证失败');
					}
				});
			}
		},
		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		}
	};
</script>

<style>
	.c-container{
		width: 20vh;
	}
</style>