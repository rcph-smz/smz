<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Here</title>
    <style>
         * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            overflow-x: hidden;
         }
         *::selection {
             background-color: rgb(159, 124, 225,0.4);
             color: lavender;
         }
         *::-webkit-scrollbar {
             width: 10px;
         }
         *::-webkit-scrollbar-track {
             background-color: transparent;
         }
         *::-webkit-scrollbar-thumb {
             background-color: rgb(157, 144, 202);
             border-radius: 20px;
             border: solid 2px aliceblue;
         }
         body {
            background-color: lavender;
            width: 100vw;
         }
         .nav {
            position: fixed;
            z-index: 1000;

            display: block;
            height: clamp(50px,5vw,60px);
            width: clamp(50px,5vw,60px);
            border: solid 1px rgb(157, 144, 202);
            border-radius: 0 0 10px 0;
            background-color: rgb(157, 144, 202);
         }
         .nav-container {
            position: fixed;
            z-index: 10;
            left: -100%;

            display: block;
            height: 100vh;
            width: 280px;
            background-color: rgba(0, 0, 255, .1);
         }
         .nav-content-title {
            position: auto;

            display: flex;
            align-items: center;
            justify-content: center;
            height: clamp(50px,5vw,60px);
            width: 100%;

            font-family: 'Times New Roman', Times, serif;
            font-weight: 1000;
            font-size: 1.2em;
            text-shadow: 1px 1px 1px black;
            color: white;
         }
         .nav-content {
            position: auto;
            
            display: block;
            padding: 14px;
            text-align: center;
            text-shadow: 1px 1px 1px lavender;
            font-size: 1.1em;

            color: rgb(121, 0, 121);
         }
         .header {
             position: fixed;

             display: block;
             width: 100vw;

             padding: 24px;
             text-transform: capitalize;
             text-align: right;
             font-size: 2.2em;
             font-weight: 900;
             text-shadow: 1px 1px 1px black;

             color: rgb(159, 124, 225);
         }
         .svgbackground {

             display: block;
             width: 100vw;
             height: 100vh;

         }
         .wavesvg {
             position: absolute;
             z-index: -12;

             display: block;
             width: 100vw;
             height: 130vh;

             opacity: .2;
         }
         .wavesvg_second {
             position: absolute;
             z-index: -11;

             display: block;
             width: 100vw;
             height: 130vh;
             transform: translateY(5vh);

             opacity: .4;
         }
         .wavesvg_third {
             position: absolute;
             z-index: -10;

             display: block;
             width: 100vw;
             height: 130vh;
             transform: translateY(10vh);
             
             opacity: .6;
         }
         .wavesvg_fourth {
             position: absolute;
             z-index: -9;

             display: block;
             width: 100vw;
             height: 130vh;
             transform: translateY(15vh);

             opacity: .8;
         }
         .wavesvg_fifth {
             position: absolute;
             z-index: -8;

             display: block;
             width: 100vw;
             height: 130vh;
             transform: translateY(20vh);

             opacity: 1;
         }
         .wavesvg_sixth {
             position: absolute;
             z-index: -8;

             display: block;
             width: 100vw;
             height: 130vh;
             transform: translateY(25vh);

             opacity: 1;
         }
         .wavesvg_seventh {
             position: absolute;
             z-index: -8;

             display: block;
             width: 100vw;
             height: 130vh;
             transform: translateY(30vh);

             opacity: 1;
         }
         
         .wavesvg_text {
             position: absolute;
             z-index: 1;

             display: flex;
             justify-content: center;
             align-items: center;
             width: 100vw;
             height: 90vh;
             padding: 10px 20vw;
             font-size: clamp(1.2em, 4vw, 5em);
             font-weight: 1200;

             text-align: center;
             text-shadow: 2px 2px 2px black;

             color: rgb(255, 139, 30);
         }
         .backgroundheader {
             position: absolute;
             z-index: -13;

             display: block;
             height: 130vh;
             width: 100vw;
             background-image: url("easy.jpeg");
             background-repeat: no-repeat;
             background-attachment: fixed;
             background-position: center;
             background-size: cover;
             filter: blur(10px);
         }


        .content {
            position: relative;

            display: block;
            width: 100vw;

            background: #8F00FF;
            padding: 0;


        }
        .content-child {
            position: relative;

            display: block;
            padding: 160px 10vw;

            text-align: center;
            text-shadow: 1px 1px 1px black;
            border: solid 0; 
            background-color: rgba(255, 255, 255, 0);
            font-size: clamp(1.2em, 2.5vw, 1.5em);

            color: lavender;

        }
        .sign_up {
            position: relative;

            display: block;

            text-align: center;
            border: solid 0; 
            background-color: lavender;
            
            color: lavender;

        }
        .sign_up_header {
            position: relative;

            display: block;
            width: 60vw;
            margin: 0 auto;
            padding: 40px 10vw;
            border: solid 1px black;
            border-radius: 10px;

            text-align: center;
            text-shadow: 1px 1px 1px black;
            border: solid 0; 
            background-color: lavender;
            font-size: clamp(1.2em, 2.5vw, 1.5em);

            color: rgb(53, 53, 53);

        }
        .sign_up_input {
            position: relative;

            display: block;
            width: 70vw;
            padding: 10px;

            text-align: center;
            border: solid 1px black;
            border-radius: 10px; 
            background-color: lavender;
            font-size: clamp(1.2em, 2.5vw, 1.5em);
            margin: 40px auto;

            color: rgb(53, 53, 53);
        }
        .textbox_input {
            position: relative;

            display: block;
            width: 70vw;
            padding: 10px;

            text-align: left;
            border: solid 1px black;
            border-radius: 10px; 
            background-color: lavender;
            font-size: clamp(1.2em, 2.5vw, 1.5em);
            margin: 10px auto;

            color: rgb(53, 53, 53);
        }
        @keyframes nav_in {
            0% {
            left: -100%;
            }
            30% {
            left: 25%;
            }
            100% {
            left: 0;
            }
        }
        @keyframes nav_out {
            0% {
            left: 0;
            }
            100% {
            left: -100%;
            }
        }
        .alert {
            position: fixed;
            z-index: 1000;
            top: 0;

            display: none;
            padding: 24px;
            width: 100vw;
            text-align: center;
            font-size: clamp(1.2em, 2.5vw, 1.5em);
            background-color: rgba(255, 0, 0, 0.774);
            color: lavender;
            
        }
    </style>
</head>
<body>
    <nav class="nav">
      <canvas id="canvas">

      </canvas>
    </nav>
    <nav class="nav-container">
       <div class="nav-content-title">
           You need help?
       </div>
       <div class="nav-content" id="dashboard">
          Dashboard
       </div>
       <div class="nav-content" id="settings">
           Settings
       </div>
       <div class="nav-content" id="support">
           Support
       </div>
       <div class="nav-content" id="contact">
           Contact
       </div>
    </nav>
    <header class="header">
        welcome here
    </header>
    <div class="svgbackground">
        <div class="backgroundheader">
        </div>
        <img src="wave.svg" class="wavesvg">
        <img src="wave.svg" class="wavesvg_second">
        <img src="wave.svg" class="wavesvg_third">
        <img src="wave.svg" class="wavesvg_fourth">
        <img src="wave.svg" class="wavesvg_fifth">
        <img src="wave.svg" class="wavesvg_sixth">
        <img src="wave.svg" class="wavesvg_seventh">
        <div class="wavesvg_text">
            All your works are easy and fast for your future
        </div>
    </div>
    <div class="content">
       <div class="content-child">
           Hi there!!, we are the adminshistrator of "Welcome Here", we don't manage all customers request on how to draw, design, presention(actually i don't know at all) with a guidance of great profesyonals, we ensure that our customers will reach there desire goals.
       </div>
       <div class="sign_up">
        <form action="submit.php" method="POST" enctype="multipart/form-data">
           <div class="sign_up_header">
               Kindly don't send us Your reaction xD
           </div>
           <input type="text" class="sign_up_input" placeholder="FullName" name="fullname" require>
           <input type="text" class="sign_up_input" placeholder="example@gmail.com" name="email" require>
           <input type="password" class="sign_up_input" placeholder="password" name="password" require>
           <textarea class="textbox_input" name="message" id="message" cols="60" rows="10" placeholder="Message" require></textarea>
           <input type="submit" class="sign_up_input">
        </form>
       </div>
    </div>
    <div class="alert">
          
    </div>
    
    <script>
        const canvas = document.querySelector("#canvas");
        canvas.style.height = "inherit";
        canvas.style.width = "inherit"
        canvas.style.padding = "4px";
        canvas.style.position = "inherit";
        canvas.height = 150;
        canvas.width = 150;
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(20,40);
        ctx.lineTo(130,40);
        ctx.moveTo(20,75.5);
        ctx.lineTo(130,75.5);
        ctx.moveTo(20,110);
        ctx.lineTo(130,110);
        ctx.strokeStyle = "lavender";
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.fill();

        const nav_container = document.querySelector(".nav-container");
        const nav = document.querySelector(".nav");

        //counters 
        var switchNav = true;
        var repeatingPress = 0;

        nav.addEventListener("click", NavButton);
        function NavButton() {
            if(switchNav == true) {
                nav_container.style.animation = "nav_in 1s forwards";
                switchNav = false;
            }
            else {
                nav_container.style.animation = "nav_out 1s forwards";
                switchNav = true;
            }
            
        }

        var alertwindow = document.querySelector(".alert");
        var dashboard = document.querySelector("#dashboard");
        var settings = document.querySelector("#settings");
        var support = document.querySelector("#support");
        var contact = document.querySelector("#contact");
        function AlertWindow() {
            alertwindow.innerText = "this feature doesn't add yet";
            alertwindow.style.display = "block";
            repeatingPress++;
            if(repeatingPress == 5) alertwindow.innerText = "oh man, don't press it again or else";
            if(repeatingPress == 6) alertwindow.innerText = "i said stop kudasai";
            if(repeatingPress == 7) location.href = "https://youtu.be/dQw4w9WgXcQ";
        };
        dashboard.addEventListener("mousedown",AlertWindow);
        settings.addEventListener("mousedown",AlertWindow);
        support.addEventListener("mousedown",AlertWindow);
        contact.addEventListener("mousedown",function() {
        location.href = "https://mail.google.com/mail/u/0/#inbox?compose=new";
        });
        alertwindow.addEventListener("click",() => {
            alertwindow.style.display = "none";
        });
    </script>
</body>
</html>