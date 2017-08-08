// Sample Data :
// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// [1, 2, 3, [[4]], 5, 6]

function flatten(arr, isShallow, temp) {
    if(!temp) temp = [];

    if(isShallow) {
      return temp.concat(arr);
    }

    arr.forEach(ele => {
      if(Array.isArray(ele)) {
        flatten(ele, isShallow, temp);
      } else {
        temp.push(ele);
      }
    });

    return temp;
}

/*
var flatten = function (input, isShallow) {
	var i = 0;
	while(i < input.length){
		var output = input.reduce(function(a, b){
			return a.concat(b);
		},[]);
		if(!isShallow) input = output
		i++;
	}
	return input;
}
console.log(flatten([1, [2,[3,[4]]]], true));
console.log(flatten([1, [2,[3,[4]]]]));
*/
