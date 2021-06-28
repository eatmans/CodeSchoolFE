<template>
	<view class="u-flex u-flex-col">
		<view class="c-course-controller">
			<view class="">
			</view>
		</view>
		<view class="c-top">
			<view class="c-top-text">
				4月
			</view>
			<view class="c-top-box" v-for="(item,index) in title" :key="index">
				<view v-if="index == thisDay" class="c-curret-day">
					<view class="">
						周{{item}}
					</view>
					<view class="">
						6/{{index+21}}
					</view>
				</view>
				<view v-else class="">
					<view class="">
						周{{item}}
					</view>
					<view class="">
						6/{{index+21}}
					</view>
				</view>

			</view>
		</view>
		<view class="c-center">
			<view class="c-center-left">
				<view class="c-time-box" v-for="(item,index) in sksj" :key="index">
					<view class="">
						{{index+1}}
					</view>
					<view class="">
						{{item.s}}
					</view>
					<view class="">
						{{item.e}}
					</view>
				</view>
			</view>
			<view class="c-center-center">
				<view v-for="(item, index) in testArray" :key="index">
					<view v-if="item == 1" class="c-course-koxian">
					</view>
					<view v-else class="c-course" @click="gotoViewCourse()">
						<view class="">
							<view class="c-course-name">
								{{item.courseName}}
							</view>
							<view class="">
								@{{item.courseAddress}}
							</view>
							<view class="">
								{{item.teacherName}}
							</view>
						</view>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import axios from "axios"
	export default {
		data() {
			return {
				weekIndex: 0, // 周数索引
				tureWeek: 0, // 真实周数
				dayArray: [], // 存放本周日期
				month: 1, //存放当前月
				isShow: [],
				testArray: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
					1, 1, 1,
				],
				colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
				title: ['一', '二', '三', '四', '五', '六', '日'],
				sksj: [{
					's': '08:00',
					'e': '08:45'
				}, {
					's': '08:55',
					'e': '09:50'
				}, {
					's': '10:00',
					'e': '10:45'
				}, {
					's': '10:55',
					'e': '11:40'
				}, {
					's': '14:00',
					'e': '14:50'
				}, {
					's': '14:55',
					'e': '15:45'
				}, {
					's': '16:15',
					'e': '17:05'
				}, {
					's': '17:10',
					'e': '18:00'
				}, {
					's': '19:00',
					'e': '19:50'
				}, {
					's': '19:55',
					'e': '20:45'
				}, ],
				thisDay: 0, // 星期几
				courseList: [{
						id: 671,
						college: "思想政治理论教学部",
						campus: "本部",
						courseCode: 200032,
						teacherCode: "xsc038",
						teacherName: "张慧芳",
						clazzId: "软件1935",
						courseName: "毛泽东思想和中国特色社会主义理论体系概论（下）",
						times: "6-6",
						week: "2",
						section: "1-2节",
						courseAddress: "尚智楼605",
						department: "计算机学院",
						properties: "必修课",
						remarks: "null",
					},
					{
						id: 360,
						college: "计算机学院",
						campus: "本部",
						courseCode: 170481,
						teacherCode: "44412110",
						teacherName: "梁同乐",
						clazzId: "软件1935",
						courseName: "Linux操作系统实践",
						times: "6-6",
						week: "2",
						section: "3-4节",
						courseAddress: "尚智楼704",
						department: "计算机学院",
						properties: "必修课",
						remarks: "null",
					},
					{
						id: 589,
						college: "计算机学院",
						campus: "本部",
						courseCode: 170584,
						teacherCode: "44387831",
						teacherName: "翁秀木",
						clazzId: "软件1935",
						courseName: "软件项目全岗位实践",
						times: "6-6",
						week: "3",
						section: "5-6节",
						courseAddress: "敏行楼203",
						department: "计算机学院",
						properties: "必修课",
						remarks: "null",
					},
					{
						id: 590,
						college: "计算机学院",
						campus: "本部",
						courseCode: 170584,
						teacherCode: "44387831",
						teacherName: "翁秀木",
						clazzId: "软件1935",
						courseName: "软件项目全岗位实践",
						times: "6-6",
						week: "3",
						section: "7-8节",
						courseAddress: "敏行楼203",
						department: "计算机学院",
						properties: "必修课",
						remarks: "null",
					},
					{
						id: 363,
						college: "计算机学院",
						campus: "本部",
						courseCode: 170481,
						teacherCode: "44412110",
						teacherName: "梁同乐",
						clazzId: "软件1935",
						courseName: "Linux操作系统实践",
						times: "6-6",
						week: "4",
						section: "1-2节",
						courseAddress: "敏行楼602",
						department: "计算机学院",
						properties: "必修课",
						remarks: "null",
					},
					{
						id: 591,
						college: "计算机学院",
						campus: "本部",
						courseCode: 170584,
						teacherCode: "44387831",
						teacherName: "翁秀木",
						clazzId: "软件1935",
						courseName: "软件项目全岗位实践",
						times: "6-6",
						week: "5",
						section: "1-2节",
						courseAddress: "敏行楼203",
						department: "计算机学院",
						properties: "必修课",
						remarks: "null",
					},
					{
						id: 592,
						college: "计算机学院",
						campus: "本部",
						courseCode: 170584,
						teacherCode: "44387831",
						teacherName: "翁秀木",
						clazzId: "软件1935",
						courseName: "软件项目全岗位实践",
						times: "6-6",
						week: "5",
						section: "3-4节",
						courseAddress: "敏行楼203",
						department: "计算机学院",
						properties: "必修课",
						remarks: "null",
					},
					{
						id: 367,
						college: "计算机学院",
						campus: "本部",
						courseCode: 170481,
						teacherCode: "44412110",
						teacherName: "梁同乐",
						clazzId: "软件1935",
						courseName: "Linux操作系统实践",
						times: "6-6",
						week: "5",
						section: "5-6节",
						courseAddress: "尚智楼603",
						department: "计算机学院",
						properties: "必修课",
						remarks: "null",
					},
				],
				toShow: {
					id: 367,
					college: "计算机学院",
					campus: "本部",
					courseCode: 170481,
					teacherCode: "44412110",
					teacherName: "梁同乐",
					clazzId: "软件1935",
					courseName: "Linux操作系统实践",
					times: "6-6",
					week: "5",
					section: "5-6节",
					courseAddress: "尚智楼603",
					department: "计算机学院",
					properties: "必修课",
					remarks: "null",
				},
				// 存放开学日期
				startDayList: ['2020-09-07', '2021-03-01', '2021-07-19'],
				// myStyle: `margin-left:{{(item.week-1)*100}}rpx;margin-top:{{(item.section-1)*100+5}}rpx;height:{{2*100-5}}rpx;background-color:{{colorArrays[index%9]}}`

			}
		},
		onShow() {
			this.getCourseData();
			this.showCourse();
		},
		mounted() {
			this.showCourse();
		},
		created() {
			// this.getCourseData();
			this.getDay();

		},
		methods: {
			// 用于判断是展示空白课程，还是已经实时课程,生成展示列表
			showCourse() {
				let kclength = this.courseList.length; // 当前周的总课程数
				// 把需要显示的位置设置为0
				for (let i = 0; i < kclength; i++) {
					// console.log(parseInt(this.courseList[i].section.split("-")[1]) / 2 ); // 获取准确的节数
					// console.log((this.courseList[i].week - 1) * 5); // 获取当前周数*5
					// console.log(((this.courseList[i].week - 1) * 5) + this.courseList[i].section.split("-")[0] * 1) / 2;
					this.testArray[(((this.courseList[i].week - 1) * 5) + parseInt(this.courseList[i].section.split("-")[
							1]) / 2) - 1] = this
						.courseList[i];
				}
				// console.log(this.testArray);
			},


			// 获取课程信息
			getCourseData() {
				// that = this;
				var clazzName = "软件1935"
				uni.request({
					url: 'http://127.0.0.1:8879/api/v1/course/6-6/' + clazzName,
					method: 'GET',
					data: {},
					success: res => {
						console.log(res.data);
						this.courseList = res.data.data;
					},
					fail: () => {},
					complete: () => {}
				});
				// axios
				// 	.get('http://127.0.0.1:8879/api/v1/course/6-6/%E8%BD%AF%E4%BB%B61935')
				// 	.then(function(res) {
				// 		console.log(res);
				// 	})
				// 	.catch(function(error) {
				// 		console.log(error);
				// 	});

			},
			gotoViewCourse() {
				uni.navigateTo({
					url: './viewCourse/viewCourse',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},

			// 获取今天周几
			getDay: function() {
				let date = new Date();
				let day = date.getDay()
				if (day) {
					this.thisDay = day - 1;
				} else {
					this.thisDay = 6
				};
			},
			// 获取今天距离某天相差天数
			dateMinus: function(whichDay) {
				let sdate = new Date(whichDay);
				let now = new Date();
				let days = now.getTime() - sdate.getTime();
				let day = parseInt(days / (1000 * 60 * 60 * 24));
				return day;
			},
		}
	}
</script>

<style>
	page {
		background-color: #F8F8F8;
	}

	.c-top {
		display: flex;
		flex-direction: row;
		/* margin-left: 35rpx; */
	}

	.c-top-text {
		width: 90rpx;
		height: 100rpx;
		font-size: 9pt;
		margin: 3rpx;
		background-color: #FFFFFF;
		justify-content: center;
		display: flex;
		align-items: center;
		border-radius: 5rpx;
	}

	.c-top-box {
		width: 90rpx;
		height: 100rpx;
		font-size: 9pt;
		margin: 3rpx;
		background-color: #FFFFFF;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 5rpx;
	}

	.c-curret-day {
		padding: 20rpx;
		border-radius: 5rpx;
		background-color: #61f5ff;
	}

	.c-center {
		display: flex;
		flex-direction: row;
		width: 100%;
	}

	.c-center-left {
		width: 12%;
	}

	.c-center-center {
		height: 1220rpx;
		width: 86%;
		display: flex;
		flex-direction: column;
		justify-content: left;
		flex-wrap: wrap;

	}

	.c-time-box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #FFF;
		font-size: 9pt;
		height: 120rpx;
		margin: 3rpx;
		border-radius: 10rpx;
	}

	.c-course {
		width: 90rpx;
		height: 240rpx;
		font-size: 20rpx;
		background-color: #1cc5dc;
		margin: 3rpx;
		padding: 6rpx;
		color: #FFFFFF;
		border-radius: 5rpx;
	}

	.c-course-name {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}

	.c-course-koxian {
		width: 90rpx;
		height: 235rpx;
		padding-top: 120rpx;
		padding-bottom: 120rpx;
		margin: 3rpx;
		color: #FFFFFF;
		border-radius: 5rpx;
	}
</style>
