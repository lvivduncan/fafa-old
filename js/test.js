// test.html

let auctionNames = document.getElementsByName('auction'),
    calcAuction = document.getElementById('calc_auction');

auctionNames.forEach(function(index){
    index.onclick = function() {
        calcAuction.innerHTML = this.value;
        console.log(this.value);
    }
});



// console.log(document.getElementById('*'));

let calc = document.getElementsByClassName('calc');

console.log(calc);
console.log(calc[0].value);
console.log(calc[2].value);

// let b = document.getElementById('calc_patrol_range').childNodes[0].nodeValue;

// console.log(b);


let p = document.getElementsByName('p');
console.log(p[0]);
let reg = /aaaaaa/;


var e = document.getElementById("ddlViewBy");
var strUser = e.options[e.selectedIndex].value;

console.log(strUser);