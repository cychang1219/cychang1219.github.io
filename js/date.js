//Reference https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
//show date in the form of YYYY-MM-DD
var dt = new Date().toISOString().slice(0, 10);
document.getElementById("date").innerHTML=dt;