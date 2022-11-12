let Beer = 100;
let ninetyNine = 99;
function Tadaam () {
    let p = document.querySelector(".Tadaam");
    p.style.display = "block";
}
function BeerBottles () {
while (Beer >=0) {
    if (Beer === 1){
       console.log (" " + Beer + " bottle of beer on the wall , " + Beer + " bottle of beer.  Take one down and pass it around.");
    } 
    else{
    console.log( " " + Beer + " bottles of beer on the wall , " + Beer + " bottles of beer.  Take one down and pass it around.");
}
    Beer--;

  if (Beer > 1 ){
  console.log(Beer+ " bottles of beer on the wall.");
}
 if (Beer === 1) {
        console.log(Beer + " bottle of beer on the wall.");
    }
    if (Beer === 0) {
    console.log(Beer + " bottles of beer on the wall.");
}
 if (Beer === -1 ){
    console.log(ninetyNine + " bottles of beer on the wall.");
 }
}
}

