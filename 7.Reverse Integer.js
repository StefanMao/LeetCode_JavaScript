
/*

Q : Given a 32-bit signed integer, reverse digits of an integer.


1.注意 32bit 有號數 範圍 [-2^32,2^32-1]
2.用字串解法

*/
/**
 * @param {number} x
 * @return {number}
 */
reverse = function(x) {
    var isNegative=false

	this.numString=x
	this.newNum;

    
    function stringReverse(target){

 	target=target.toString() //變成字串
 	let array=target.split('').reverse()
 	
 	if(array[0]==='0')
 	{
 		array.shift()
 	}
 	this.newNum = array.join('')
 	this.newNum=parseInt(this.newNum)
 		
 	if(isNegative===true)
 	{
 		this.newNum=-(this.newNum)
 	}

 }
 if(x===0){
     return 0
 }
 if(x<0)
 {
 	isNegative=true //是負數
 	this.numString=Math.abs(numString) //絕對值
 	stringReverse(this.numString)	
 }
 else
 {
 	
     stringReverse(this.numString) 	
 }
    
 
 return (Math.pow(2,31)*(-1)>=this.newNum) || ((Math.pow(2,31)-1)<=this.newNum)? 0:this.newNum

};