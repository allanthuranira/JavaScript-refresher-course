<html>
    <label>Input your kilometers</label><input id="km" type="number"></input>
</html>
function lenghtConvertor(kilometers) {
    const converterValue = 0.621371;
    const miles = converterValue * kilometers;

    var input = document.getElementById("km");
    console.log(input);
    console.log("The distance in miles is :" + miles);
}