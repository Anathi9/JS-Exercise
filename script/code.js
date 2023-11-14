let numeral = [12,18,11,5,8,2git]
function Middle(numeral) {
const middle = numeral.length >> 1;
return numeral.length & 1
? numeral[middle]
: numeral.slice(middle-1,middle + 1);

}
console.log(Middle(numeral));