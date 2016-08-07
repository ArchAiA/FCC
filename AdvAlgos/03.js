
function checkCashRegister(price, cash, cid) {
cid2 = cid;
cash2 = cash * 100;
price2 = price *100;

changeAvailable = 0;

changeToReturn = [
	{name: 'PENNY', unit: 1, toReturn: 0},
	{name: 'NICKEL', unit: 5, toReturn: 0},
	{name: 'DIME', unit: 10, toReturn: 0},
	{name: 'QUARTER', unit: 25, toReturn: 0},
	{name: 'ONE', unit: 100, toReturn: 0},
	{name: 'FIVE', unit: 500, toReturn: 0},
	{name: 'TEN', unit: 1000, toReturn: 0},
	{name: 'TWENTY', unit:2000, toReturn: 0},
	{name: 'ONE HUNDRED', unit:10000, toReturn: 0},
	];

register = [];

denom = [
	{name: 'PENNY', unit: 1},
	{name: 'NICKEL', unit: 5},
	{name: 'DIME', unit: 10},
	{name: 'QUARTER', unit: 25},
	{name: 'ONE', unit: 100},
	{name: 'FIVE', unit: 500},
	{name: 'TEN', unit: 1000},
	{name: 'TWENTY', unit:2000},
	{name: 'ONE HUNDRED', unit:10000},
	];


//Add Value of Each Denomination to the denom array
for(var i=0; i<cid2.length; i++) {
	denom[i].val = Math.round(cid2[i][1] * 100);
	denom[i].num = denom[i].val / denom[i].unit;
	changeAvailable += denom[i].val;
}



//Add Value of Each Denomination to the denom array

keys = Object.keys(register);

// changeAvailable = Number(changeAvailable.toFixed(2));
remainingChange = (cash2 - price2);


if(remainingChange == changeAvailable) {
	return "Closed";
} else if(remainingChange > changeAvailable) {
	return "Insufficient Funds";
} else {


	for(var j = denom.length - 1; j >= 0; j--) {
		while(remainingChange >= denom[j].unit && denom[j].num > 0) {
			changeToReturn[j].toReturn += 1;
			remainingChange = remainingChange - denom[j].unit;
			denom[j].num -= 1;
		}
	}


	for(var k = changeToReturn.length -1; k >= 0; k--) {
		if(changeToReturn[k].toReturn > 0) {
			tempList = [];
			tempValue = changeToReturn[k].unit * changeToReturn[k].toReturn / 100;
			tempList.push(changeToReturn[k].name, tempValue);
			register.push(tempList);
		}
	}






  // Here is your change, ma'am.


}

if(remainingChange > 0) {
	return "Insufficient Funds";
} else {
  return register;
}

}








// checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

// checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

// checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])

// checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

// checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

// checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
