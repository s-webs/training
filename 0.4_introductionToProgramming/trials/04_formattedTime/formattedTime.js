// minutes translate

const length = str => str.length;
const formattedTime = (m) => {
	let hours 	= String(Math.floor(m / 60));
	let minutes = String(m - (hours * 60));
	let day 	= String(Math.floor(hours / 24));
	let resHours = String(hours - (day * 24));
	if (length(resHours) < 2) {
		resHours = 0 + resHours;
	};
	if (length(minutes) < 2) {
		minutes = 0 + minutes;
	};
	if (m >= 1440) {
		return day + ' Day ' + resHours + ':' +  minutes;
	} else {
		return resHours + ':' +  minutes;
	}
}
console.log(formattedTime(800)); 	// 		  13:20
console.log(formattedTime(16857)); // 11 Day 16:57
console.log(formattedTime(300)); 	// 05:00
