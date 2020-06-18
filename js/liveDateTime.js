// GET CURRENT DATE 
var d = new Date();
document.getElementById("date").innerHTML = d.toDateString();

// GET CURRENT TIME 
function getDateTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    if (month.toString().length == 1) {
        month = '0' + month;
    }
    if (day.toString().length == 1) {
        day = '0' + day;
    }
    if (hour.toString().length == 1) {
        hour = '0' + hour;
    }
    if (minute.toString().length == 1) {
        minute = '0' + minute;
    }
    if (second.toString().length == 1) {
        second = '0' + second;
    }
    var dateTime = hour + ':' + minute + ':' + second;
    return dateTime;
}

setInterval(function () {
    currentTime = getDateTime();
    document.getElementById("itemImageItemLiveDateTime").innerHTML = currentTime;
}, 1000);

document.getElementById("in").innerHTML = new Date().getDate();
document.getElementById("out").innerHTML = new Date().getDate() + 10;

document.getElementById("person").innerHTML = 5