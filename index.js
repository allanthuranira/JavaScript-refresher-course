//return the number of vowels in a string

var str = "My name is a string, count my number of vowels"

function count(str) {
    const vowels = str.match(/[aeiou]/gi);
    return vowels === null ? 0 : vowels.length;

}
console.log(count(str));





