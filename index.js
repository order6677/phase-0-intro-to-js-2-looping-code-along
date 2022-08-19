function writeCards(arr, event){
    let anotherArr = [];
 for(let i=0; i<arr.length; i++) {
    let message = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`
    anotherArr.push(message);
 }
 return anotherArr
}
function countDown(num) {
    while (num>=0){
        console.log(num)
        num--;
    }
}
console.log( countDown(10))