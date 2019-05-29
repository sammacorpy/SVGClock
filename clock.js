var he= document.getElementById("mainrim");
var me =document.getElementById("minute");
var se =document.getElementById("secondrim");



function get_time(){
    
    var datetime = new Date();
    var h=datetime.getHours();
    var m=datetime.getMinutes();
    var s=datetime.getSeconds();
    return {"h":h, "m": m, "s": s};
}

function runclock(){
    var t = get_time();
    if (t.h>12){
        t.h=t.h-12;
    }
 

    var toihtadd=-t.h*76.414166667-916.97;
    var toimtadd =-t.m*17.2833333-1037;
    he.style.strokeDashoffset=toihtadd;
    me.style.strokeDashoffset=toimtadd;
    se.style.strokeDashoffset=-1186.996-t.s*19.783266667;

    requestAnimationFrame(runclock);
    

}

runclock();

