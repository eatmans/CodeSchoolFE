<template>
	<view>
		<view class="month-title">
			<view style="margin-bottom: 40upx; margin-left: 40upx;">{{current.year + '年' + current.month._fixNum() + '月'}}</view>
			<view class="week-content">
				<view class="week-item" v-for="(week, i) in weeks" :key="week">{{week}}</view>
			</view>
		</view>
		<!-- 日历 -->
		<!-- swiper-item 不能封装 -->
		<swiper v-if="showCalendar" class="swiper" :vertical="true" :current="currentIndex" :style="{height: swiptHeight}" @change="change"
		 @animationfinish="animationfinish" :duration="duration">
			<swiper-item>
				<calendar-view :resData="prev" :day="selectDay" :selectDay.sync="selectDay"></calendar-view>
			</swiper-item>
			<swiper-item>
				<calendar-view :resData="current" :day="selectDay" :selectDay.sync="selectDay"></calendar-view>
			</swiper-item>
			<swiper-item>
				<calendar-view :resData="last" :day="selectDay" :selectDay.sync="selectDay"></calendar-view>
			</swiper-item>
		</swiper>
<!-- 		<scroll-view class="scroller" :scroll-y="true" :style="{height: scrollHeight}">
			<view style="height: 600px; background-color: #007AFF;"></view>
			<view style="height: 100px; background-color: #FFFFFF;"></view>
			<view style="height: 10px; background-color: #007AFF;"></view>
		</scroll-view> -->
	</view>
</template>

<script>
	import calendar from './calendar.js'
	import CalendarView from './calendar-view.vue'

	export default {

		components: {
			CalendarView
		},

		data() {
			return {
				date: null,
				weeks: ['日', '一', '二', '三', '四', '五', '六'],
				current: null,
				prev: null,
				last: null,
				displayRow: 0, //展示页面行数，调整swipt高度
				currentIndex: 1,
				duration: 300,
				selectDay: null,
				showCalendar: true,
			}
		},

		computed: {

			swiptHeight() {
				return `calc(100vw/7*0.8*${this.displayRow} + 20px)`
			},

			scrollHeight() {
				return `calc(100vh - 100vw/7*0.8*${this.displayRow} - 80px - var(--window-top))`
			}
		},



		created() {
			let moment = calendar._getCurrentDate()
			this.current = calendar._initDateObject(moment)
			this.prev = calendar._initDateObject(calendar._getMomentPrev(moment))
			this.last = calendar._initDateObject(calendar._getMomentLast(moment))
			this.selectDay =  calendar.currentDateStr(new Date())//默认选择今天
			this.displayRow = (this.current.amountDays % 7 == 0) ? this.current.amountDays / 7 : (parseInt(this.current.amountDays /
				7) + 1)
			// this.showCalendar = true
			// console.log(JSON.stringify(this.current))
		},

		methods: {

			init() {

			},

			change(e) {
				// console.log(JSON.stringify(e.detail.current))
			},

			animationfinish(e) {
				console.log(JSON.stringify(e.target.current))
				this.currentIndex = e.target.current
				if (this.currentIndex < 1) {
					this.current = this.prev
					setTimeout(e => {
						this.currentIndex = 1
						this.displayRow = (this.current.amountDays % 7 == 0) ? this.current.amountDays / 7 : (parseInt(this.current.amountDays /
							7) + 1)
						this.duration = 0
						this.prev = calendar._initDateObject(calendar._getMomentPrev(this.prev.m))
						this.last = calendar._initDateObject(calendar._getMomentPrev(this.last.m))
						setTimeout(e => {
							this.duration = 300
						}, 300)
					}, 50)
				} else if (this.currentIndex > 1) {
					this.current = this.last
					setTimeout(e => {
						this.currentIndex = 1
						this.displayRow = (this.current.amountDays % 7 == 0) ? this.current.amountDays / 7 : (parseInt(this.current.amountDays /
							7) + 1)
						this.duration = 0
						this.last = calendar._initDateObject(calendar._getMomentLast(this.last.m))
						this.prev = calendar._initDateObject(calendar._getMomentLast(this.prev.m))
						setTimeout(e => {
							this.duration = 300
						}, 300)
					}, 50)
				}
			}
		}
	}
</script>

<style scoped>
	.scroller {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100vw;
		background-color: red;
		transition: height 0.1s ease;
		border-top-left-radius: 50upx;
		border-top-right-radius: 50upx;
		overflow: hidden;
	}

	.swiper {
		position: absolute;
		left: 0;
		top: 160upx;
		width: 100vw;
		background-color: #3DC2AE;
		transition: height 0.1s ease;
	}




	.month-title {
		height: 160upx;
		background-color: #3DC2AE;
		width: 100vw;
		color: #FFFFFF;
		font-size: 34upx;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
	}

	.week-content {
		display: flex;
		flex-direction: row;
		align-items: flex-end;
	}

	.week-item {
		width: calc(100vw/7);
		height: 50upx;
		text-align: center;
		font-size: 26upx;
		color: rgba(255, 255, 255, 0.7);
	}
</style>
