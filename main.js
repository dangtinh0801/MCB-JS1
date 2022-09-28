var nhietdo = Math.floor(Math.random() * 100);
var doam = Math.floor(Math.random() * 100);
var anhsang = Math.floor(Math.random() * 200);
document.body.style.backgroundColor = "lightsalmon";
if (nhietdo > 0 && nhietdo < 10){
    document.getElementById("box1").style.backgroundColor = "lightgray";
} else if (nhietdo < 37){
    document.getElementById("box1").style.backgroundColor = "green";
} else if (nhietdo < 100){
    document.getElementById("box1").style.backgroundColor = "red";
} else if (nhietdo > 100){
    alert('Cảnh báo: Quá 100 độ C');
}
if (doam > 0 && doam < 40){
    document.getElementById("box2").style.backgroundColor = "brown";
} else if (doam < 80){
    document.getElementById("box2").style.backgroundColor = "cornflowerblue";
} else {
    document.getElementById("box2").style.backgroundColor = "blue";
}
if (anhsang < 110){
    document.getElementById("box3").style.backgroundColor = "yellow";
} else {
    document.getElementById("box3").style.backgroundColor = "red";
}
document.getElementById("box1").innerHTML = "NHIỆT ĐỘ: " + nhietdo + "<span>&#176</span>C";
document.getElementById("box2").innerHTML = "ĐỘ ẨM: " + doam + "%";
document.getElementById("box3").innerHTML = "ÁNH SÁNG: " + anhsang;
function functionOn() {
    document.getElementById("box4").style.backgroundColor = "orange";
}
function functionOff() {
    document.getElementById("box4").style.backgroundColor = "violet";
}