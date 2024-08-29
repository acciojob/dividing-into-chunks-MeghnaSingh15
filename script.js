const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let result =[];
	let subArr=[];
	let sum = 0;
	for(i=0;i<arr.length;i++){
		if(sum + arr[i] <= n){
			subArr.push(arr[i]);
			sum+=arr[i];
		}
		else{
			result.push(subArr);
			subArr = [arr[i]];
			sum = arr[i];
		}
	}
	if(subArr.length>0){
		result.push(subArr);
	}
	return result;
	
};


const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
