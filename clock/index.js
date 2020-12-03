window.onload = displayClock();
function clock(){
    let clock_html = '';
    let sec = '';
    let min = '';
    let hours = '';
    let am_pm = 'AM';
    let _date = new Date();
    
    _date.getHours() > 12 ? hours = _date.getHours() % 12  : hours = _date.getHours();
    _date.getSeconds()<10 ? sec = '0'+ _date.getSeconds() : sec = _date.getSeconds();
    _date.getMinutes()<10 ? min = '0' + _date.getMinutes() : min = _date.getMinutes();
    _date.getHours()>11 ? am_pm = "PM" : am_pm;
    if(_date.getHours() == 24) am_pm = "AM";
    
    clock_html =  clock_html + 
    `
    <div>${hours}:${min}:${sec} ${am_pm}</div>
    `;
    document.getElementById("clock").innerHTML = clock_html;
}

function displayClock(){
    setInterval(() => {
        clock(); 
    }, 1000);
}
