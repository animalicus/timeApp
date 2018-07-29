var acts = document.getElementById('acts');
var jumbo = document.getElementById('jumbo');
var warning = document.getElementById('warning');

//input
var activityInput;
var checkedTag;
var tagInput;

//button
var tags = document.getElementById('tags');
var addTag = document.getElementById('addTag');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var del = document.getElementById('del');

//counter
var interval;
var time = 0;
var startDate;
var endDate;
var minute = 0;
var second = 0;
var min = document.getElementById('min');
var sec = document.getElementById('sec');

//database
var ccc;


var getTagList;
var aaa = JSON.parse(localStorage.getItem('tagList'));
if (aaa == null) {
    getTagList = [];
}
else {

    getTagList = JSON.parse(localStorage.getItem('tagList'));
}

var tagList = getTagList;
updateList(tags, getTagList);

var getData;
var bbb = JSON.parse(localStorage.getItem('data'));
if (bbb == null) {
    var getData = [];
}
else {

    getData = JSON.parse(localStorage.getItem('data'));
}
var data = getData;
updateList2(data, getData);

function checkNull(whichCheck, str) {
    ccc = JSON.parse(localStorage.getItem(str));
    if (ccc == null) {
        whichCheck = [];
    }
    else {

        whichCheck = JSON.parse(localStorage.getItem(str));
    }
}




//title
var tit;
var clock = 0;
var clock2 = 0;


stop.style.display = 'none';
warning.style.display = 'none';

addTag.onclick = function () {
    tagInput = document.getElementById("tagInput").value;
    tagList.push(tagInput);
    localStorage.setItem('tagList', JSON.stringify(tagList));
    updateList(tags, getTagList);
    document.getElementById("tagInput").value = '';
}



function updateList(whichList, whichArray) {
    whichList.innerHTML = '';
    whichArray.forEach(changeList);
    function changeList(item, index) {
        tags.innerHTML += '<li class="wala"><input type="radio" name="tags" value="' + item + '">' + item + '<button type="button" class="close" aria-label="Close" onclick="myFunc(this)" id="' + index + '"><span aria-hidden="true">&times;</span></button></li>';
    }


}
function updateList2(whichList, whichArray) {
    whichList.innerHTML = '';
    whichArray.forEach(changeList);
    function changeList(item, index) {
        acts.innerHTML += '<td>' + item.activity + '</td><td>' + item.tag + '</td><td>' + item.duration + '</td><td><button type="button" class="close" aria-label="Close" onclick="myFunc2(this)" id="' + index + '"><span aria-hidden="true">&times;</span></button></td>';
    }


}
function myFunc(e) {

    var d = e.id;
    tagList.splice(d, 1);
    localStorage.setItem('tagList', JSON.stringify(tagList))
    updateList(tags, getTagList);
}
function myFunc2(f) {

    var g = f.id;
    data.splice(g, 1);
    localStorage.setItem('data', JSON.stringify(data))
    updateList2(acts, getData);
}

function calculate() {
    time++;
    minute = Math.floor(time / 60);
    second = time - minute * 60;
    if (second < 10) {
        clock = '0' + second

    }
    if (second >= 10) {
        clock = second

    }
    if (minute < 10) {
        clock2 = '0' + minute

    }
    if (minute >= 10) {
        clock2 = minute

    }

    var ddd = document.getElementById("activityInput").value;
    var fff = document.querySelector('input[type="radio"]:checked').value;
    jumbo.innerHTML = '<h1>' + clock2 + ':' + clock + '</h1><p>' + ddd + ' #' + fff + '</p>';
    document.title = clock2 + ':' + clock;
}
function clearInt() {
    clearInterval(interval);
    jumbo.innerHTML = '<h1>00:00</h1><p></p>';
}

start.onclick = function () {
    if (document.getElementById("activityInput").value === '') {
       warning.style.display = 'block';
    }
    else {
        startDate = new Date();
        interval = setInterval(calculate, 1000);
        start.style.display = 'none';
        stop.style.display = 'block';
        warning.style.display = 'none';
    }

}
stop.onclick = function () {
    activityInput = document.getElementById("activityInput").value;
    checkedTag = document.querySelector('input[type="radio"]:checked').value;
    endDate = new Date();

    data.push({
        activity: activityInput,
        tag: checkedTag,
        startDate: startDate,
        endDate: endDate,
        duration: time
    });
    console.log(data);
    clearInt();
    document.title = '';

    localStorage.setItem('data', JSON.stringify(data));
    updateList2(acts, getData);
    document.getElementById("activityInput").value = '';
    stop.style.display = 'none';
    start.style.display = 'block';



}



