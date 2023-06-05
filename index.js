var array = [34, 56, -56, 0.06, 88, -23, -98, -26];

var positive = array.filter((v) => {
    return v >= 0;
});

console.log(positive);

