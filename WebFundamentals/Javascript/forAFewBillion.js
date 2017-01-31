

var fewBillion = function (penny, rewardDays) {
 var arr = [];
 var money = 0;
 for (var i = 1; i <=rewarddays; i++){
	if(i===1){
		money=penny;
		arr.push(money);
	} else{
	money=money+money;
	arr.push (money);
	}
	}
  }
	return arr;
}

console.log(fewBillion(0.01,30));