window.onload = function () {
    //input
    var activityInput;
    var tag;
    var tagInput;

    //button
    var addTag=document.getElementById('addTag');
    var start=document.getElementById('start');
    var stop=document.getElementById("stop");

    //counter
    var interval;
    var time=0;
    var startDate;
    var startSec;
    var presentDate;
    var presentSec;
    var minutes;
    var seconds;
    var min=document.getElementById("min");
    var sec=document.getElementById("sec");

    //database
    var tagList=[];
    var data=[];

    addTag.onclick=function(){
        tagInput=document.getElementById("tagInput").value;
        tagList.push(tagInput);
        
    };
    start.onclick=function(){
        startDate = new Date();
        startSec = startDate.getTime();
        interval=setInterval(calculate, 1000);   
    }
    stop.onclick=function(){
        activityInput=document.getElementById("activityInput").value;
        tag=document.querySelector('input[name="tags"]:checked').value;
        
        data.push({ activity:activityInput,
                    tag:tag,
                    startDate:startDate,
                    endDate:presentDate,
                    time:time});
        console.log(data);

        clearInterval(interval);
        min.innerHTML='00';
        sec.innerHTML='00';
    }
    function calculate(){
        presentDate = new Date();
        presentSec = presentDate.getTime();
        time = parseInt((presentSec - startSec)/1000);
        console.log(time);
        minutes = Math.floor(time / 60);
        seconds = time - minutes * 60;
        if(minutes<10){
            mi.innerHTML='0'+minutes;
        }
        if (minutes>=10) {
            sec.innerHTML=minutes;
        }
        if(seconds<10){
            sec.innerHTML='0'+seconds;
        }
        if (seconds>=10) {
            sec.innerHTML=seconds;
        }
    }
}



