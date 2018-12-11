var fortuneCookies = [
    "Conquer your fears or they will conquer you.", 
    "Rivers need springs.", 
    "Do not fear what you don't know.", 
    "You will have a pleasant surprise.", 
    "Whenever possible, keep it simple.",
];

exports.getFortune = function() {
    var idx = Math.floor(Math.random() * fortuneCookies.length);
    return fortuneCookies[idx];
};


exports.displayTime = function () {
    var currentDate = new Date(),
        month = currentDate.getMonth() + 1,
        day = currentDate.getDate(),
        year = currentDate.getFullYear();

    var currentTime = new Date(),
        hours = currentTime.getHours(),
        minutes = currentTime.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    var time = "Time: " + hours + ":" + minutes + " Date: " + month + "/" + day + "/" + year;
    console.log(time);
    return time;
};