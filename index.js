
 


const cards =["awadh","swaleh","omar","jaffer"];

function writeCards(cards){
    console.log(`Thank you , ${cards} for the wonderful birthday gift!`)
}
writeCards(cards[0]);
writeCards(cards[1]);
writeCards(cards[2]);
writeCards(cards[3]);




const count =["10","9","8","7","6","5","4","3","2","1","0"];

function countDown(count){
    let i = 0;
    while(i < count.length){
        console.log(`${count[i]}`);
        i++;
    }
return count;
}

countDown(count);