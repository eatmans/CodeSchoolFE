<template>
	<view class="swiper-content">
		<view class="swiper-item" v-for="(prev, index) in resData.prevDays" :key="'type'+index"></view>
		<view class="swiper-item" v-for="(item, index) in resData.days" :key="'current'+index" :class="[item.isToday ? 'swiper-item-today' : 'swiper-item-normal']" @click="itemClick(item)">
			<view style="display: flex; justify-content: center; align-items: center;" :class="{'swipt-item-bg' : (item.timeStr == day)}">
				<view>{{item.day}}</view>
			</view>
		</view>
		<view class="swiper-item" v-for="(next, index) in resData.nextDays" :key="'next'+index"></view>
	</view>
</template>

<script>
	import calendar from './calendar.js'
	export default {
		name: 'CalendarView',
		props: {
			
			//默认选中的日期
			day: {
				type: String,
				default: ()=>{
					return calendar.currentDateStr(new Date())
				}
			},
			
			//当前月信息
			resData: {
				type: Object,
				default: () => {}
			}
		},

		created() {
			console.log(this.resData)
		},
		
		methods: {
			itemClick(item){
				this.$emit('update:selectDay', item.timeStr)
			}
		}
	}
</script>

<style scoped>
	.swiper-content {
		width: 100vw;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.swiper-item {
		width: calc(100vw/7);
		height: calc(100vw/7*0.8);
		justify-content: center;
		align-items: center;
		text-align: center;
		background-color: #3DC2AE;
		display: flex;
		font-size: 28upx;
	}

	.swiper-item-normal {
		color: #FFFFFF;
	}

	.swiper-item-today {
		color: yellow;
	}
	
	.swipt-item-bg{
		background-color: #2C405A;
		width: 60upx;
		height: 60upx;
		border-radius: 30upx;
	}
</style>
