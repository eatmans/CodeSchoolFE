export const getTime = function() {
	// 起止日期数组
	let dateTime = {
		// 昨天    
		yesterday: [],
		,
		// 今天   
		today: [],
		,
		// 上一周    
		lastWeekDate: [],
		,
		// 本周   
		thisWeekDate: [],
	}
	// 获取当前时间 
	let currentDate = new Date()
	// 返回date是一周中的某一天 
	let week = currentDate.getDay()
	// 返回date是一个月中的某一天  
	// let month = currentDate.getDate() 
	// 一天的毫秒数 
	let millisecond = 1000 * 60 * 60 * 24
	// 减去的天数 
	let minusDay = week !== 0 ? week - 1 : 6
	// 获得当前周的第一天
	let currentWeekDayOne = new Date(currentDate.getTime() - (millisecond * minusDay))
	// 上周最后一天即本周开始的前一天 
	let priorWeekLastDay = new Date(currentWeekDayOne.getTime() - millisecond)
	// 上周的第一天  
	let priorWeekFirstDay = new Date(priorWeekLastDay.getTime() - (millisecond * 6))
	// 上周第一天时间封装
	const start =
		`${priorWeekFirstDay.getFullYear()}-${supplement(priorWeekFirstDay.getMonth() + 1, 2)}-${supplement(priorWeekFirstDay.getDate(), 2)} 00:00:00`
	// 上周最后一天时间封装  
	const end =
		`${priorWeekLastDay.getFullYear()}-${supplement(priorWeekLastDay.getMonth() + 1, 2)}-${supplement(priorWeekLastDay.getDate(), 2)} 23:59:59`
	// 本周 周一 
	let monday = new Date(currentDate.getTime() - (minusDay * millisecond))
	// 本周 周日 
	let sunday = new Date(monday.getTime() + (6 * millisecond))
	// 本周第一天时间封装 
	const start1 =
		`${monday.getFullYear()}-${supplement(monday.getMonth() + 1, 2)}-${supplement(monday.getDate(), 2)} 00:00:00`
	// 本周最后一天时间封装  
	const end2 =
		`${sunday.getFullYear()}-${supplement(sunday.getMonth() + 1, 2)}-${supplement(sunday.getDate(), 2)} 23:59:59`
	// 添加至上周数组 
	dateTime.lastWeekDate.push(start, end)
	// 添加至本周数组  
	dateTime.thisWeekDate.push(start1, end2)
	// 昨天  
	dateTime.yesterday.push(
		`${currentDate.getFullYear()}-${supplement(currentDate.getMonth() + 1, 2)}-${supplement(currentDate.getDate() - 1, 2)} 00:00:00`,
		`${currentDate.getFullYear()}-${supplement(currentDate.getMonth() + 1, 2)}-${supplement(currentDate.getDate() - 1, 2)} 23:59:59`
		)
	// 今天 
	dateTime.today.push(
		`${currentDate.getFullYear()}-${supplement(currentDate.getMonth() + 1, 2)}-${supplement(currentDate.getDate(), 2)} 00:00:00`,
		`${currentDate.getFullYear()}-${supplement(currentDate.getMonth() + 1, 2)}-${supplement(currentDate.getDate(), 2)} 23:59:59`
		)
	return dateTime
}
