# SVGClock
Beautiful summer design for digital clock


click [here](https://sammacorpy.github.io/SVGClock/clock.html) for demo
# HTML

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="./clock.css">
        </style>
    </head>

    <body>

        <svg  width="530" height="501" id="clock">
            <ellipse cx="328.97441295075447" cy="184.5721170823108" rx="146" ry="146" fill="none"
                stroke="#999" stroke-width="15" stroke-linecap="butt" stroke-linejoin="miter" opacity="1"
                transform="matrix(1 0 0 1 -64.0284 65.5801)" id="mainrim" >

            </ellipse>
            <ellipse cx="328.97441295075447" cy="184.5721170823108" rx="187" ry="187" fill="none"
                stroke="#ccc" stroke-width="18.5" stroke-linecap="butt" stroke-linejoin="miter" opacity="1"
                transform="matrix(1 0 0 1 -64.0284 65.5801)" id="secondrim" >

            </ellipse>
            <ellipse cx="265.999" cy="249.99848907470703" rx="220" ry="220" fill="none"
                stroke="rgba(148,148,148,1)" stroke-width="50" stroke-linecap="butt" stroke-linejoin="miter" opacity="1"
                transform="matrix(1 0 0 1 -3.04152 -3.61507)" stroke-dasharray="350" stroke-dashoffset="189" id="second"
                class="second"></ellipse>
            <ellipse cx="265.36158752441406" cy="250.17584228515625" rx="110" ry="110" fill="none"
                stroke="rgba(0,182,182,1)" stroke-width="30" stroke-dasharray="28.5" stroke-linecap="butt"
                stroke-linejoin="round" opacity="1"  stroke-dashoffset="15"
                id="timering" class="innermost">
                <title>showtime</title>
            </ellipse>
            <ellipse cx="305.39882531398143" cy="286.5577312876722" rx="165" ry="165" fill="none" stroke="rgba(4,4,87,1)"
                stroke-width="25" stroke-dasharray="0" stroke-linecap="butt" stroke-linejoin="round" opacity="1"
                transform="matrix(1 0 0 1 -40.1908 -36.4144)" selected="true" id = "minute"></ellipse>
        </svg>

    </body>
    <script src="./clock.js"></script>

    </html>
    
# CSS

    #clock{
        padding:calc(315px - 220px);
        display: table-cell;
        position: relative;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right:auto; 
        vertical-align:middle;
        margin-top: calc(50vh - 315px);
        transform-origin: 50% 50%;
        transform: rotate(-90deg);
    }
    body{
        background: #fff;
    }
    #second{
        transform-origin: 265.99px 249.98px;  
        animation: secondrot 0.8s infinite;
        animation-direction: normal;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
    }
    #timering{
        /* transform-origin: 265.36158752441406px 250.17584228515625px;  
        animation: secondrot 3s infinite;
        animation-direction: normal;
        animation-fill-mode: forwards;
        animation-timing-function: linear; */
    }

    #secondrim{
        stroke-dasharray: 1186.996;
        stroke-dashoffset: -1186.996;
    }
    #mainrim{
        /* transform-origin: 328.97441295075447px 184.5721170823108px;   */
        stroke-dasharray: 916.97;
        stroke-dashoffset: -916.97;

    }
    #minute{
        /* transform-origin: 280.39882531398143px 296.5577312876722px;   */
        stroke-dasharray: 1037;
        stroke-dashoffset: -1037;
        /* transform: rotate(-90deg); */
    }
    @keyframes secondrot{
        0%{

            transform: rotate(0deg);

        }
        100%{

            transform: rotate(360deg);
        }
    }
# Js

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

