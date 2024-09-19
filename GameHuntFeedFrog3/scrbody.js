
'use strict';  // Строгий режим js Для тестов

//GitHab



function Game_Frog_3 (){
	
	
	
//Отключаем вывод стандартного контекстного меню правой кнопкой мыши

document.getElementById( "IEFfield" ).addEventListener("contextmenu",  function (e) {  e.preventDefault() },false,);


//Отключаем прокрутку страницы колесиком мыши или стрелками вверх и вниз

  window.addEventListener("wheel", (event) => event.preventDefault(), {
    passive: false,
});

   window.addEventListener("keydown", (event) => {
    if (["ArrowUp", "ArrowDown", " "].includes(event.key)) {
        event.preventDefault();
    }
});


//console.log ('Version_5_final') //выводим номер текущей версии закрыть







let cpok="data:audio/mpeg;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAAFAAAJYABeXl5eXl5eXl5eXl5eXl5eXl5elJSUlJSUlJSUlJSUlJSUlJSUlJS1tbW1tbW1tbW1tbW1tbW1tbW1td7e3t7e3t7e3t7e3t7e3t7e3t7e//////////////////////////8AAABQTEFNRTMuMTAwBLkAAAAAAAAAABUgJAMzQQAB4AAACWBcwd8+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//vAxAAAB0wBQbQAACNtpye/O7AAAAAJEbbv++AIHBOD5cH3y4IRO8uD4f4nB8Plz8o7Lh/KAg6IAx5QMP5RxQEDnlCkQAgD4Pn/qB/lAwAAJhaAoghAphUPrv5anAUCgCDAdMRBSMdg2MIiwN1aBIgabsYOAMAgONwzlNdCwdAwMDcwcCweDgxFJ8yfGkBCsMokiQGZtBnXpcqjyigKDAMPqTMgDjOQIFImT7sQXIXEacrfPmOh4wDmUkappU8ztyOC2IMzhbgSsFC6E9QukpHe3aoYevOFAFexOJzkRA797leBZzda3+fKCUdpJRnYHgyS0lXvec1v/5vX1O4c/m8pvKc/e8Pydjn//9///4v3+fz//vrCWbeF2fr0waP/11DzzaHlxAIJAEUAOX7cwyHBwMDxDEZqM3iwyGHjA4IMNEMxQBDHR/O5Q84GkDVwcRtUTTwSJMBAlAEpdE33XKXBRx6tJjheIiCY4ZBpoyAxsyUI69kDXJS0lerKY7LItSSPGzQ3LltsqKjM4xR/Wv97l/65/6uWt5tcSzY5D+GXf/////////L7PaWvjjvm/z/m8K+Hf///LK12XMFiv1hv/0NJ3O7jWuUz5+b2QV/+L/hhYx1zPsNolfyDABR/3YdAMVeQ1SAzZQuCOCYBNK0MOkA+c2g0xWY2t405FAEijLVh2CvUuugsz+V+VW31bxMKUOonvDEoE54tg09vGWF0mt80JUAq076W+cf//79XhEVpq6FMz1gp2KHPkRZIVgEPU9kOesnGGDCqaUiL/MA0pn08zLZRaV4CgtyVsu5rgQgKT4gPjKbt4xP/IWF/SsQAAAf3+2MYwSXeIwqIBUE+IECxt7TKjTV7TtLTWADJAxoKFwy0mXNC4ejsei4m/Y2mzk+EUBKF/X61YU2WTorVohPfVMIV3L/+OXy95pPZO1ZOhHjtP9cmT5izupggxbhGOkKndpS6df//+5DE2AEWIQdKfcyAKlKw6Kmkjt0HDhb+ZQvJDLjuRHU2O0zFjGxFaazJMws3r0DDmb9j5jm0nKLIrIAyDPv7KCiCoEhEDhQjEaGi4IDQ9AJRhHqBmTIdoip1NX1kMfcmZ1DUr5a3a6yYg1JtWVz0+163JgtWZXR9heCpdXpPrXnLZ3TfcnaunKl3OyctD1HY7QduUld1IKK69DDa/W693HJsxlly1Vz80Oq2KfK/56mx5lwvY2nknU1B9bXQFCFG92s3r1YNsAB1r762OHeYmcuSWREmJkJWjIkdSZIto7BSNTfVyvZ3thYGhCykIUW1PKNGIkITc080qxpNyiO0ntToOQI2bLn8xyS712lllFatXMR1t2Puecf36aUd2sViAAmY4GakGh6kiCMpVshmYR+alq/cs7RBa17o6I8FITfkJk2wMBGlgSQAJGv97Gma2gfRehAaPCV5J0TEdwu8WoYzEJkynrUGtS4IQBRFkNmjj5phGiiw6s4GwiCoi0PRySQhH0aKKSbGQPsYNGTLcCCLCMNFWEM/FxzSszzdY2P/+2DE+wAR5YtFTTBv4i6s6CmWDn1muovVOJNqIzavUar9vy3MNTS2RxUdI2r1Vft/Eoie81Hy9z33f75lIOl89KWPn4+YhfUDgHdDZ4RWVXWeLIUBAEAAihH5MkC04jPYI2UCMPPjKC0KjYVBjEh1zwFymJCxQFCwIYQJhYGA7YD5gsuAOwXRNwwg5AUCHth0gfGFhwfsI2C8xXSRJMPfELiDhOAXxI0QqSxstAXKREaYgwlhZgypMlwZYpEGUYFRRwc0ZcmSJpkTIcdUsumJrOHHTuThSLhHk4Ta1VJKdEyMXQQRRU66DoUKdFl0qU+6j6CZPonGa9NlWsnWitlVJKcpIIP/+3DE5YAQSNc9rCTOai6vJzawgAUXFmRkZHzY8yRtq+iuu9FbdK6/0JqvU6mUZ///9WvSTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//tgxPCAG32zM/m5kEAAAD/DgAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";

// Чтобы начать игру заново, нажмите   <div id='IEFpr2' >&#8634;</div> <br><br>

let obj_language = {

ru:{help:"<br><br>Маленький лягушонок только узнаёт окружающий его необычный мир. Помогите лягушонку  удачно провести охоту на вкусных насекомых.  Сытый и довольный лягушонок будет вам благодарен.  Чтобы поймать вкусное насекомое  кликните указателем мышки  на него. И если лягушонок дотянется до него своим языком, он скушает его.   Если на вашем устройстве сенсорный экран, нажимайте на насекомых пальцем. Чтобы начать игру заново, откройте меню и нажмите   <div id='IEFpr2' >&#8634;</div> <br><br>", 


fr1: "<br><br>К сожалению лягушонка, сильно покусали комары. Попробуйте ещё раз.<br><br>",
fr1_1: "<br><br>К сожалению лягушонка, сильно покусали пауки. Попробуйте ещё раз.<br><br>",
fr1_2: "<br><br>К сожалению лягушонка, укусила пчела. Попробуйте ещё раз.<br><br>",
fr1_3: "<br><br>К сожалению лягушонок, сильно ударился о дно сухого озера. Попробуйте ещё раз.<br><br>",
fr2:"Пауза",
fr3:"Играть",
fr6:"1. Русский",
fr7:"<br><br> Поздравляем, Лягушонок наелся и благодарит вас за успешную охоту.<br><br><br> <div id='IEFpr2_2'  >&#8634;</div><br><br>",

fr9:"<br><br>В игре произошла критическая ошибка. Вы можете попробовать :<br><br><div id='IEFEr_1'  >Перезагрузить уровень</div><br><br><div id='IEFEr_2'  >Перезагрузить всю игру</div><br><br>Описание ошибки <br><br> Gopro <br><br>",

fr10:"Лёгкий",

fr11:"Сложный",




name_game : { name : "Охота - накорми лягушку 3" , size : 27 , sizeLine : 25 , x : 415 , y : 25 , ugol : 0  },

},
en:{help:"<br><br>The little frog is just getting to know the unusual world around him. Help the frog successfully hunt for tasty insects. A well-fed and happy little frog will be grateful to you. To catch a tasty insect, click the mouse pointer on it. If the little frog reaches it with his tongue, he will eat it. If your device has a touch screen, press the insects with your finger. To start the game again, open the menu and press <div id='IEFpr2' >&#8634;</div> <br><br>", 


fr1: "<br><br>Unfortunately, the little frog was bitten badly by mosquitoes. Try again.<br><br>",
fr1_1: "<br><br>Unfortunately the little frog was bitten badly by spiders. Try again.<br><br>",
fr1_2: "<br><br>Unfortunately the little frog was bitten by a bee. Try again.<br><br>",
fr1_3: "<br><br>Unfortunately, the little frog hit the bottom of a dry lake hard. Try again.<br><br>",
fr2:"Pause",
fr3:"Play",
fr6:"2. English",
fr7:"<br><br> Congratulations, Little Frog has eaten his fill and thanks you for the successful hunt.<br><br><br> <div id='IEFpr2_2'  >&#8634;</div><br><br>",


fr9:"<br><br>A critical error has occurred in the game. You can try:<br><br><div id='IEFEr_1' >Reload level</div><br><br><div id='IEFEr_2' >Reload whole game</div><br><br >Error description <br><br> Gopro <br><br>",

fr10:"Easy",
fr11:"Hard",

name_game : { name : "Hunt - feed the frog 3" , size : 27 , sizeLine : 25 , x : 450 , y : 25 , ugol : 0  },

},

fr:{
help:"<br><br>La petite grenouille découvre tout juste le monde insolite qui l'entoure. Aidez la petite grenouille à chasser avec succès de délicieux insectes. Une grenouille bien nourrie et satisfaite vous en sera reconnaissante. Pour attraper un insecte savoureux, cliquez dessus avec le pointeur de la souris. Si la grenouille l’atteint avec sa langue, elle le mangera. Si votre appareil dispose d'un écran tactile, touchez les insectes avec votre doigt. Pour relancer le jeu, ouvrez le menu et cliquez sur <div id='IEFpr2' >&#8634;</div> <br><br>", 


fr1: "<br><br>Malheureusement, la petite grenouille a été gravement piquée par des moustiques. Réessayez.<br><br>",
fr1_1: "<br><br>Malheureusement, la petite grenouille a été gravement mordue par des araignées. Réessayez.<br><br>",
fr1_2: "<br><br>Malheureusement la petite grenouille a été mordue par une abeille. Réessayez.<br><br>",
fr1_3: "<br><br>Malheureusement, la petite grenouille a heurté durement le fond d'un lac asséché. Réessayez.<br><br>",
fr2:"Pause",
fr3:"Jouer",
fr6 :"3. Français",
fr7:"<br><br> Félicitations, Petite Grenouille a mangé à sa faim et vous remercie pour cette chasse réussie.<br><br><br> <div id='IEFpr2_2' >&#8634;</div><br><br>",


fr9:"<br><br>Une erreur critique s'est produite dans le jeu. Vous pouvez essayer :<br><br><div id='IEFEr_1' >Recharger le niveau</div><br><br><div id='IEFEr_2' >Recharger tout le jeu</div><br><br >Description de l'erreur <br><br> Gopro <br><br>",

fr10:"Facile",
fr11:"Complexe",



name_game : { name : "Hunt - nourrir la grenouille 3" , size : 27 , sizeLine : 25 , x : 410 , y : 25 , ugol : 0  },

},

de:{

help:"<br><br>Der kleine Frosch lernt gerade die ungewöhnliche Welt um sich herum kennen. Helfen Sie dem kleinen Frosch, erfolgreich nach leckeren Insekten zu suchen. Ein wohlgenährter und zufriedener Frosch wird Ihnen dankbar sein. Um ein leckeres Insekt zu fangen, klicken Sie mit dem Mauszeiger darauf. Wenn der Frosch mit der Zunge dorthin gelangt, frisst er es. Wenn Ihr Gerät über einen Touchscreen verfügt, tippen Sie mit dem Finger auf die Insekten. Um das Spiel erneut zu starten, öffnen Sie das Menü und klicken Sie auf <div id='IEFpr2' >&#8634;</div> <br><br>", 


fr1:"<br><br>Leider wurde der kleine Frosch von Mücken schwer gebissen. Versuchen Sie es noch einmal.<br><br>",
fr1_1:"<br><br>Leider wurde der kleine Frosch von Spinnen schwer gebissen. Versuchen Sie es noch einmal.<br><br>",
fr1_2:"<br><br>Leider wurde der kleine Frosch von einer Biene gebissen. Versuchen Sie es noch einmal.<br><br>",
fr1_3:"<br><br>Leider ist der kleine Frosch schwer auf dem Grund eines ausgetrockneten Sees aufgeschlagen. Versuchen Sie es noch einmal.<br><br>",
fr2:"Pause",
fr3:"Spielen",
fr6:"4. Deutsch",
fr7:"<br><br> Herzlichen Glückwunsch, der kleine Frosch hat sich satt gefressen und bedankt sich für die erfolgreiche Jagd.<br><br><br> <div id='IEFpr2_2' >&#8634;</div><br><br>",


fr9:"<br><br>Im Spiel ist ein kritischer Fehler aufgetreten. Sie können Folgendes versuchen:<br><br><div id='IEFEr_1' >Level neu laden</div><br><br><div id='IEFEr_2' >Gesamtes Spiel neu laden</div><br><br >Fehlerbeschreibung <br><br> Gopro <br><br>",

fr10:"Einfach",
fr11:"Komplex",



 name_game : { name : "Jagd – füttere den Frosch 3" , size : 27 , sizeLine : 25 , x : 410 , y : 25 , ugol : 0  },

},

it:{

help:"<br><br>La piccola rana sta appena imparando a conoscere il mondo insolito che lo circonda. Aiuta la piccola rana a cacciare con successo insetti gustosi. Una rana ben nutrita e soddisfatta ti sarà grata. Per catturare un gustoso insetto, cliccaci sopra con il puntatore del mouse. Se la rana lo raggiunge con la lingua, lo mangerà. Se il tuo dispositivo ha un touch screen, tocca gli insetti con il dito. Per riavviare il gioco, apri il menu e fai clic su <div id='IEFpr2' >&#8634;</div> <br><br>", 


fr1: "<br><br>Purtroppo la piccola rana è stata morsa gravemente dalle zanzare. Riprova.<br><br>",
fr1_1: "<br><br>Purtroppo la piccola rana è stata morsa gravemente dai ragni. Riprova.<br><br>",
fr1_2: "<br><br>Purtroppo la piccola rana è stata morsa da un'ape. Riprova.<br><br>",
fr1_3: "<br><br>Sfortunatamente, la piccola rana ha colpito duramente il fondo di un lago asciutto. Riprova.<br><br>",
fr2:"Pausa",
fr3:"Giocare",
fr6:"5. Italiano",
fr7:"<br><br> Congratulazioni, la piccola rana ha mangiato a sazietà e ti ringrazia per la caccia riuscita.<br><br><br> <div id='IEFpr2_2' >&#8634;</div><br><br>",

fr9:"<br><br>Si è verificato un errore critico nel gioco. Puoi provare:<br><br><div id='IEFEr_1' >Ricarica il livello</div><br><br><div id='IEFEr_2' >Ricarica l'intero gioco</div><br><br >Descrizione errore <br><br> Gopro <br><br>",

fr10:"Facile",
fr11:"Complesso",



name_game : { name : "Caccia - nutri la rana 3" , size : 27 , sizeLine : 25 , x : 450 , y : 25 , ugol : 0  },

},




};

let obj_local = {loc_base_name: 'Base_Hunt_feed_the_frog_3'};


// картинки 



let obj_img = {
	
 Field  : { getElementById : 'IEFfield' , width_canvas : 0 , height_canvas : 0 ,} ,


	Holst  : { width_canvas : 0 , height_canvas : 0 ,} ,
   
      

     Frog_Big : { width_canvas : 600 , height_canvas : 600 ,} ,	

          Frog_Ulibka : { x_img : 295 , y_img : 0 , width_img : 262 , height_img : 298 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 131 , height_canvas : 149 ,    } ,
		  
		  Frog_Ulibka_Left : { x_img : 1126 , y_img : 0 , width_img : 262 , height_img : 298 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 65 , height_canvas : 74 ,    } ,

          Frog_Zlaya : { x_img : 0 , y_img : 0 , width_img : 262 , height_img : 298 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 131 , height_canvas : 149 ,    } ,

          Frog_Pluet : { x_img : 590 , y_img : 0 , width_img : 262 , height_img : 298 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 131 , height_canvas : 149 ,    } ,
	  
	      Frog_Udivlenie : { x_img : 864 , y_img : 0 , width_img : 262 , height_img : 298 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 131 , height_canvas : 149 ,    } ,

          Frog_Yazyk : { x_img : 0 , y_img : 302 , width_img : 624 , height_img : 71 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 200 , height_canvas : 71 ,    } ,

     Komar_Big : {width_canvas : 0 , height_canvas : 0 ,} ,  
	  
	      Komar_1 :  { x_img : 0 , y_img : 383 , width_img : 264 , height_img : 200 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 60 , height_canvas : 45 ,    } ,
	  
	      Komar_2 :  { x_img : 264 , y_img : 383 , width_img : 264 , height_img : 200 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 60 ,	  height_canvas : 45 ,    } ,
	  
	 Muha_Big : {width_canvas : 0 , height_canvas : 0 ,} ,  
	  
	      Muha_1_L :  { x_img : 0 , y_img : 613 , width_img : 300 , height_img : 308 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 58 , height_canvas : 60 ,    } ,
	  
	      Muha_2_L :  { x_img : 300 , y_img : 613 , width_img : 300 , height_img : 308 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 58 , height_canvas : 60 ,    } ,
	  
	      Muha_1_R :  { x_img : 2376 , y_img : 613 , width_img : 300 , height_img : 308 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 58 , height_canvas : 60 ,    } ,
	  
	      Muha_2_R :  { x_img : 2076 , y_img : 613 , width_img : 300 , height_img : 308 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 58 , height_canvas : 60 ,    } ,
	  
	 Pauk_Big : {width_canvas : 0 , height_canvas : 0 ,} ,  

          Pauk_1 :  { x_img : 599 , y_img : 688 , width_img : 339 , height_img : 233 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 60 , height_canvas : 41 ,    } ,
	  
	      Pauk_2 :  { x_img : 938 , y_img : 688 , width_img : 339 , height_img : 233 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 60 , height_canvas : 41 ,    } ,
		  
     Babochka_Big : {width_canvas : 0 , height_canvas : 0 ,} ,  

          Babochka_1 :  { x_img : 2104 , y_img : 0 , width_img : 600 , height_img : 600 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 600 , height_canvas : 600 ,    } ,
	  
	      Babochka_2 :  { x_img : 1505 , y_img : 0 , width_img : 600 , height_img : 600 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 600 , height_canvas : 600 ,    } ,
	  
	 Pchela_Big : {width_canvas : 0 , height_canvas : 0 ,} ,  
	  
	      Pchela_1_L :  { x_img : 599 , y_img : 488 , width_img : 209 , height_img : 201 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 40 , height_canvas : 38 ,    } ,
	  
	      Pchela_2_L :  { x_img : 808 , y_img : 488 , width_img : 209 , height_img : 201 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 40 , height_canvas : 38 ,    } ,
	  
	      Pchela_1_R :  { x_img : 1223 , y_img : 488 , width_img : 209 , height_img : 201 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 40 , height_canvas : 38 ,    } ,
	  
	      Pchela_2_R :  { x_img : 1015 , y_img : 488 , width_img : 209 , height_img : 201 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 40 , height_canvas : 38 ,    } ,
	  
	  
	  
	  Poceluy :  { x_img : 1278 , y_img : 808 , width_img : 162 , height_img : 112 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 20 , height_canvas : 14 ,    } ,
	  
	  Help_Hend_Big :  {   width_canvas : 84 , height_canvas : 100 ,    } ,
	  
	       Help_Hend :  { x_img : 4046 , y_img : 618 , width_img : 256 , height_img : 304 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 84 , height_canvas : 100 ,    } ,
	  
	  Oblaka :  { x_img : 2688 , y_img : 720 , width_img : 600 , height_img : 200 , x_canvas : 0 , y_canvas : 0 ,  width_canvas_nacalnoe_znacenie : 600 , height_canvas_nacalnoe_znacenie : 200 , width_canvas : 0 , height_canvas : 0 ,   } ,
	  
	  Ozero :  { x_img : 3287 , y_img : 821 , width_img : 300 , height_img : 100 , x_canvas : 0 , y_canvas : 0 ,  width_canvas_nacalnoe_znacenie : 300 , height_canvas_nacalnoe_znacenie : 100 , width_canvas : 0 , height_canvas : 0 ,   } ,
	  
	  Suhoe_Ozero :  { x_img : 3307 , y_img : 302 , width_img : 300 , height_img : 100 , x_canvas : 0 , y_canvas : 0 ,  width_canvas_nacalnoe_znacenie : 300 , height_canvas_nacalnoe_znacenie : 100 , width_canvas : 0 , height_canvas : 0 ,   } ,
	  
	  Oblogka :  { x_img : 3600 , y_img : 0 , width_img : 600 , height_img : 600 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 600 , height_canvas : 600 ,   } ,
	  
	  Zamok :  { x_img : 4223 , y_img : 385 , width_img : 60 , height_img : 60 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 20 , height_canvas : 20 ,   } ,
	  
	  Galka :  { x_img : 4218 , y_img : 290 , width_img : 60 , height_img : 60 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 30 , height_canvas : 30 ,   } ,
	  
	  Kaply :  { x_img : 3742 , y_img : 606 , width_img : 303 , height_img : 220 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 120 , height_canvas : 88 ,   } ,
	  
	  Piano :  { x_img : 3307 , y_img : 501 , width_img : 300 , height_img : 310 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 60 , height_canvas : 58 ,   } ,
	  
	  DarkVeyder :  { x_img : 1441 , y_img : 620 , width_img : 188 , height_img : 300 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 94 , height_canvas : 150 ,   } ,
	  
	  Dogdy :   { x_img : 2705 , y_img : 0 , width_img : 600 , height_img : 600 , x_canvas : 0 , y_canvas : 0 ,  width_canvas_nacalnoe_znacenie : 600 , height_canvas_nacalnoe_znacenie : 600 , width_canvas : 0 , height_canvas : 0 ,   } ,

	  Molniya :  { x_img : 3311 , y_img : 0 , width_img : 288 , height_img : 300 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 60 , height_canvas : 60 ,   } ,
	  
	  Udar :  { x_img : 3631 , y_img : 600 , width_img : 100 , height_img : 93 , x_canvas : 0 , y_canvas : 0 ,  width_canvas : 100 , height_canvas : 93 ,   } ,

      
	
	
	};


 let obj_canvas = {};
 
 //звуки
 
 let obj_audio = {
	 
	 Magic : { path : 'audio/' , src : 'Magic.mp3' , } ,
	 
	 Cpok : { path : '' , src : cpok , } ,
	 
	 FinalGame : { path : 'audio/' , src : 'FinalGame.mp3' , } ,
	 
	 Klavesin : { path : 'audio/' , src : 'Klavesin.mp3' , } ,
	 
	 Level : { path : 'audio/' , src : 'Level.mp3' , } ,
	 
	 Chekotka : { path : 'audio/' , src : 'Chekotka.mp3' , } ,
	 
	 Frog : { path : 'audio/' , src : 'Frog.mp3' , } ,
	 
	 Oyyy : { path : 'audio/' , src : 'Oyyy.mp3' , } ,
	 
	 Ouch : { path : 'audio/' , src : 'Ouch.mp3' , } ,
	 
	 Oh : { path : 'audio/' , src : 'Oh.mp3' , } ,
	 
	 Jump : { path : 'audio/' , src : 'Jump.mp3' , } ,
	 
	 Trabl : { path : 'audio/' , src : 'Trabl.mp3' , } ,
	 
	 Ukus : { path : 'audio/' , src : 'Ukus.mp3' , } ,
	 
	 Pchela : { path : 'audio/' , src : 'Pchela.mp3' , } ,
	 
	 Pauk : { path : 'audio/' , src : 'Wow_Pauk.mp3' , },

     Piano : { path : 'audio/' , src : 'Piano.mp3' , },

     Bulk : { path : 'audio/' , src : 'Bulk.mp3' , },

     Dogdy : { path : 'audio/' , src : 'Dogdy.mp3' , },	 

     Sliv_Ozera : { path : 'audio/' , src : 'Sliv_Ozera.mp3' , },
	 
	 DarkVeyder : { path : 'audio/' , src : 'DarkVeyder.mp3' , },
	 
	 Babochka : { path : 'audio/' , src : 'Babochka.mp3' , },

 };

let obj_audio_game = {};


   let Display_Error = 'No' // Переменная управляющая показом пользователю ошибок.

function Error_Onload ( a , e ){
	
	     if ( Display_Error == 'No' ) return false

	     let language = window.navigator ? (window.navigator.language || window.navigator.systemLanguage || window.navigator.userLanguage ) : "en";

          language = language.substr(0, 2).toLowerCase();

         if (obj_language.hasOwnProperty(language)) {  } else {  language = "en" }

		  let re = /Gopro/gi;
          let str = obj_language[language]['fr9'] ;
          let newstr = str.replace( re , a + ' - ' + e );
		  
		  document.getElementById("IEFm").innerHTML =   newstr  ;
				   
		  document.getElementById("IEFEr_1").remove ();
		  
		  document.getElementById("IEFhelp_end").remove ();

		  document.getElementById("IEFmessage").style.display = "block";

		    
		   if ('ontouchstart' in window) { 

			 document.getElementById("IEFEr_2").addEventListener('touchstart', function (){ location.reload () } , {passive:false});

			} else {
 
			 document.getElementById("IEFEr_2").addEventListener('mousedown', function (){ location.reload () }   , {passive:false});

		    }

	  }







function Body_Game(){  

 let Volume_audioControl = 0.5 ,  Sound_control = 'Yes' ;  // Установка уровня звука  и переменная контроля звука в данный момент 



  function Audio_Game () {

      if ( typeof window.Audio !== "undefined" ){
	  
	     if ( storageAvailable("localStorage") ) {
	 
	         if ( localStorage.getItem( 'audioControl_' + obj_local['loc_base_name']  ) !== null ) {  Sound_control = localStorage.getItem( 'audioControl_' + obj_local['loc_base_name'] ) } else {
		  
		          if ( Field.hasAttribute('data-audioControl') ){ Sound_control = Field.getAttribute('data-audioControl') } else {  Sound_control = 'No_base'  } 

	            }

            } else {
			
			 if ( Field.hasAttribute('data-audioControl') ){ Sound_control = Field.getAttribute('data-audioControl') } else {  Sound_control = 'No_base' }
			
			
			}
			
			 if ( Sound_control == 'No_base' ){ 
			 
			 if( ! El_audio ){ Sound_control = 'No' } else {

			     if ( El_audio.getAttribute('backgroundColor') == 'red'  ) { Sound_control = 'No' 
				 
				 
				 } else { Sound_control = 'Yes' }
			 
			    }
		
		
		
		    }
			
			  //звуки
			  
			  obj_audio ['Cpok']['src'] = cpok;
			  
			  for (let key in obj_audio ) {
	
	              if ( obj_audio_game ['audio_' + key  ] == undefined ) {
					  
					
					  
					  if ( obj_audio [ key ]['path'] == '' ){
						  
						  obj_audio_game ['audio_' + key  ] = new Audio( obj_audio [ key ]['src'] );
						  
					  } else{
	
	                      obj_audio_game ['audio_' + key  ] = new Audio(  obj_audio [ key ]['path'] + obj_audio [ key ]['src'] );
						  
					    }
					  
					  
	 
                      document.getElementById("IEFaudio_control").append ( obj_audio_game ['audio_' + key  ] );

                      obj_audio_game ['audio_' + key  ].preload = "auto";
	 
	                  obj_audio_game ['audio_' + key  ].volume = Volume_audioControl;
	                }
	            }
			  
			  
			 // console.log (obj_audio_game );
			 

			  
			  
			  
			  
              
		 
		   
		 
		 
		 
		 if( Sound_control == 'No' ){ 
		 
		      mutePage();  //Выключаем звук
		 
		     

             El_audio.style.textDecoration = "line-through"; El_audio.style.backgroundColor="red";

		    }else{
			
			  unmutePage();  //Включаем звук

		      El_audio.style.textDecoration = "none";  El_audio.style.backgroundColor="#35a300";
		  
            }

            arr_result.audio_exists = 2;
	  
        } else { El_audio.style.display = 'none'; arr_result.audio_exists = 1; }
    } 
	
	
	   function Audio_button (e){
		
          if (typeof e === 'object') {  if ('ontouchstart' in window) { e.preventDefault(); }else{ e.stopPropagation(); } }
			  
		  if ( arr_result.audio_exists == 1 ) return false;
			  
			  

			  
			  if( Sound_control == 'No' ){			  //Включаем звук
			  
			      unmutePage();

                  Sound_control = 'Yes' ;
				 
				 El_audio.style.textDecoration = "none";  El_audio.style.backgroundColor="#35a300";
				 
				 

                } else {   //Выключаем звук
				
				 mutePage();

                  Sound_control = 'No'; 
				 
				 El_audio.style.textDecoration = "line-through";  El_audio.style.backgroundColor="red";

                }
			
              if ( storageAvailable("localStorage") ) {
	 
	              localStorage.setItem( 'audioControl_' + obj_local['loc_base_name'] , Sound_control ) ;

                } 
				 
				 Field.setAttribute('data-audioControl' , Sound_control )

                
  
            }
			// Общая функция воспроизведения звуков
			
			function Play_Audio ( a , b ){ 
				
				if( arr_result.audio_exists == 2 ){
					
				 if( b == undefined ){
					 
					 if( obj_audio_game [ a ].paused ){
					 
				         obj_audio_game [ a ].play().catch( error => { } )
						 
					    }						
					 
				    } else if ( b == 'pause' ) {
						 
					     obj_audio_game [ a ].pause()	 
						 
						 
					} else {
						
						if( obj_audio_game [ a ].paused ){
					
					       if ( obj_audio_game [ a ].playbackRate != b ){
					  
				              obj_audio_game [ a ].playbackRate = b ;
							  
						   }

						  obj_audio_game [ a ].play().catch( error => { } )
						
						}

				    }

			   
			    }		

			}

      //Функции отключения и включения всех звуков на странице в данный момент
	  
	  function StopAudio() { // Выключает воспроизведение
	  
	  document.querySelectorAll('audio, video').forEach(element => { element.pause () });
	  
	  }
	  
	  function mutePage() { 
          document.querySelectorAll('audio, video').forEach(element => { // отключает звук
                element.muted = true; 
            }); 
        } 
 
      function unmutePage() { 
          document.querySelectorAll('audio, video').forEach(element => {  // включает звук 
             element.muted = false; 
            }); 
        }
	
	
	
              
				
				

////////////////////////////////////////////////////////////////////////////////

    function Save_base_game (){ 
	
	      Field.setAttribute( 'data-arr_result' , JSON.stringify( arr_result ) ); 
		  
		  
		  
		  
	      if ( storageAvailable("localStorage") ) {  
		  
		      localStorage.setItem( obj_local['loc_base_name'] , JSON.stringify(arr_result) ) 
	
	          
			   
			}	


        }
		
		



function Vibor_Variant_Game_button (e){  // Старт игры.
		
		  if (typeof e === 'object') { if ('ontouchstart' in window ) { e.preventDefault() } else { e.stopPropagation() } }
		  
		  
		
		   obj_canvas['Canvas_Field_Context'].save();
                              obj_canvas['Canvas_Field_Context'].font = 'bold 20px Kalam-Regular,  cursive';
                              obj_canvas['Canvas_Field_Context'].fillStyle = '#ffffff';
							  obj_canvas['Canvas_Field_Context'].textAlign = "center";
			                  obj_canvas['Canvas_Field_Context'].textBaseline="middle";
                              obj_canvas['Canvas_Field_Context'].translate( X_st + arr_result.X_Vibor_Variant_Game_button_Easy * machtab_fig ,Y_st + arr_result.Y_Vibor_Variant_Game_button_Easy * machtab_fig );
							  
							  obj_canvas['Canvas_Field_Context'].drawImage (myimg, 3732 , 841 , 300 , 81 , - arr_result.W_Vibor_Variant_Game_button / 2 , - arr_result.H_Vibor_Variant_Game_button / 2 , arr_result.W_Vibor_Variant_Game_button , arr_result.H_Vibor_Variant_Game_button );
							  
                              obj_canvas['Canvas_Field_Context'].fillText( obj_language[language]['fr10'] , 0 , 0 );
							  
							  obj_canvas['Canvas_Field_Context'].restore();
							  
							  
		  obj_canvas['Canvas_Field_Context'].save();
		  
		                      obj_canvas['Canvas_Field_Context'].font = 'bold 20px Kalam-Regular, cursive';
                              obj_canvas['Canvas_Field_Context'].fillStyle = '#ffffff';
							  obj_canvas['Canvas_Field_Context'].textAlign = "center";
			                  obj_canvas['Canvas_Field_Context'].textBaseline="middle";
		  
							  obj_canvas['Canvas_Field_Context'].translate(  X_st + arr_result.X_Vibor_Variant_Game_button_Hard * machtab_fig , Y_st + arr_result.Y_Vibor_Variant_Game_button_Hard  * machtab_fig );
							  
							  obj_canvas['Canvas_Field_Context'].drawImage (myimg, 3732 , 841 , 300 , 81 , - arr_result.W_Vibor_Variant_Game_button / 2 , - arr_result.H_Vibor_Variant_Game_button / 2 , arr_result.W_Vibor_Variant_Game_button , arr_result.H_Vibor_Variant_Game_button );
							  
                              obj_canvas['Canvas_Field_Context'].fillText( obj_language[language]['fr11'] , 0 , 0 );

							  obj_canvas['Canvas_Field_Context'].restore();
							  
							  
		    if ('ontouchstart' in window) { 

				           Field.addEventListener('touchstart', handleXY_board ,{passive:false});

			            } else {
				
				          Field.addEventListener('mousedown', handleXY_board ,{passive:false});
						  
						 

				        }
						
						
						
					//document.addEventListener('keydown',  handleXY_board ,{passive:false});
		
		
		
		}





		function Start_button (e){  // Старт игры.
		
		  if (typeof e === 'object') { if ('ontouchstart' in window ) { e.preventDefault() } else { e.stopPropagation() } }
		  
		  
		
		   obj_canvas['Canvas_Field_Context'].save();
                              obj_canvas['Canvas_Field_Context'].font = 'bold 16px  cursive';
                              obj_canvas['Canvas_Field_Context'].fillStyle = '#ffffff';
							  obj_canvas['Canvas_Field_Context'].textAlign = "center";
			                  obj_canvas['Canvas_Field_Context'].textBaseline="middle";
                              obj_canvas['Canvas_Field_Context'].translate( X_st + st_fig/2 * machtab_fig , Y_st + st_fig/2 * machtab_fig );
							  
							  obj_canvas['Canvas_Field_Context'].drawImage (myimg, 4216 , 100 , 87 , 100 , - 35 , - 50 , 87 , 100 );
							  
                              obj_canvas['Canvas_Field_Context'].fillText( obj_language[language]['fr3'] , 0 , 0 );

							  obj_canvas['Canvas_Field_Context'].restore();
							  
							  
		    if ('ontouchstart' in window) { 

				           Field.addEventListener('touchstart', handleXY_board ,{passive:false});

			            } else {
				
				          Field.addEventListener('mousedown', handleXY_board ,{passive:false});
						  
						 

				        }
						
						
						
					//document.addEventListener('keydown',  handleXY_board ,{passive:false});
		
		
		
		}


    function Pause_button (e){  // Пауза в игре
	
	  
	
	  if (typeof e === 'object') { if ('ontouchstart' in window ) { e.preventDefault() } else { e.stopPropagation() } }
	  
	  
	  
	  if( e.button == 2 ) return false;

      if( arr_result.Status_game == 'GamePlay' ){  // Включаем паузу
	  


	         arr_result.Status_game = 'GamePause';
		  
		  
		  
		   Save_base_game ();
		   
		 StopAudio();
		  
		  mutePage();

           

          Pause_bottom_res.innerHTML = '&#9658;';

			 if ('ontouchstart' in window) { 
	   
	              Field.removeEventListener("touchstart", handleStart, {passive:false}); 
			
			      Field.addEventListener("touchstart", Pause_button, {passive:false});
		
	            } else { 

				  Field.removeEventListener( 'mousedown' , handleStart, {passive:false}); 

			      Field.addEventListener( 'click' , Pause_button, {passive:false});
				  
	            }
	
		//	document.removeEventListener('keydown', handleStart_board ,{passive:false});
				
		   // document.addEventListener('keydown',  Pause_button ,{passive:false});
			
			return false;

        }  
		
		
		
		
	 if ( arr_result.Status_game == 'GamePause' )	{   
	 
	           arr_result.Status_game = 'GamePlay'; 

			   Save_base_game ();

               Pause_bottom_res.innerHTML = '&#448;&#160;&#448;';  //пауза
			   
			  
			   
			   if ( Sound_control == 'Yes' ){ unmutePage() }
 
			   
		
               Second ();
			   
			   if ('ontouchstart' in window ) { 
				  
				  Field.removeEventListener("touchstart", Pause_button , {passive:false}); 

			      Field.addEventListener("touchstart", handleStart, {passive:false});

				  
	            } else { 
				   
				   Field.removeEventListener( 'click' , Pause_button , {passive:false}); 
	
			       Field.addEventListener( 'mousedown' , handleStart, {passive:false});
				  
				   
	            }
	
			//  document.removeEventListener('keydown',  Pause_button ,{passive:false});
				  
			//  document.addEventListener('keydown',  handleStart_board ,{passive:false});

            }
 
    }








/////////////////////////////////////////////////////////////////////////// активная / неактивная страница


let hidden, visibilityChange;
if (typeof document.hidden !== "undefined") {
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.mozHidden !== "undefined") {
  hidden = "mozHidden";
  visibilityChange = "mozvisibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}


      if (typeof document.addEventListener === "undefined" || typeof hidden === "undefined") {

           window.addEventListener('blur',  function() {
		   
		          if (typeof arr_result === 'object') {
		            
					   if ( arr_result.Status_game == 'GamePlay' && ( arr_result.VisibilityChange_Game == 'Yes' || arr_result.VisibilityChange_Game == 'yes' ) ) { Pause_button (1) }
		            }
		   
		   });

           window.addEventListener('focus',  function() {});

        }else{

          document.addEventListener(visibilityChange, function() {

              if (document[hidden]) {   
			  
			      if (typeof arr_result === 'object') {
			  
			          if ( arr_result.Status_game == 'GamePlay' && ( arr_result.VisibilityChange_Game == 'Yes' || arr_result.VisibilityChange_Game == 'yes' ) ) { Pause_button (1) } //открыть
			  
			        } else {  }
			  
			    }

            },false);

        }



     function Opasity_Game_Start ( a , b , c ) {
		 
		 if (arr_result.Opasity_control == 'No' ) return false;
		 
		 if ( c != 'No' ) {
			 
			 Play_Audio ( 'audio_Magic' ) ;

		 }
		 
		 arr_result.Opasity_control = 'No';
		
		 let i = 1  ;
		 
		 function Opasity_Game () { 

			 if (i > 0) { i = Math.round( ( i - 0.05 ) * 100) / 100  ;
					  
				 Field.style.opacity = i ;

				 setTimeout ( function (){requestAnimationFrame(Opasity_Game ) }, 1000 / arr_result.Opasity_Time )
				 
				} else { 
				
				 a ();
				 
				 if ( typeof b === 'function' ) b ()

				 Opasity_Game_End ( )
				}
				  
				  
			} 

         Opasity_Game ()			
				  
		}

		  
     function Opasity_Game_End (  a ) {
	         
		 let i = 0;
			  
		 function Opasity_Game () {
  
				  if (i < 1 ) { i = Math.round( ( i + 0.05 ) * 100 ) / 100 ;
					  
					 Field.style.opacity = i ;
					 
					

					 setTimeout ( function (){requestAnimationFrame(Opasity_Game ) } ,1000 / arr_result.Opasity_Time ) 
				    } else {
						
					arr_result.Opasity_control = 'Yes';
					
					}
 
			}  
			
		 Opasity_Game ()
				  
     	}







//   Ресайз  

let addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
};

let resizeTimeoutId;
 
    addEvent(window, "resize", function(event) {
	
          clearTimeout(resizeTimeoutId);

          resizeTimeoutId = setTimeout(  function(){
		  
		      let w = window.innerWidth;     let h = window.innerHeight;
	   
	           if (typeof arr_result === 'object') {
	   
	                if (  Math.abs( arr_result.W_win - w ) > 10  ||  Math.abs( arr_result.H_win - h ) > 10 && ( arr_result.Resize_Game == 'Yes' || arr_result.Resize_Game == 'yes' )  ){ 
			  
			           

                       
					   
					   if ( arr_result.Status_game == 'OneStartGame' ){ 

					       setTimeout( One  , 10 );
						  
						  } else if ( arr_result.Status_game == 'LevelStart'  ) {
						   
						   setTimeout( Second , 10 );

					   } else if ( arr_result.Status_game == 'GamePlay' || arr_result.Status_game == 'GamePause' ) { 

						  arr_result.Status_game = 'GamePause';
						  
						  Save_base_game ();

		                   setTimeout( Second , 10 );
						
                        }
						 
						 
						
             
		              

				    }  
		  
		        }
		  
		    }, 1000); 
 
        });


//Выбор языка




let promoimg="Эта игра принадлежит Наседкину Тимофею Борисовичу Украина";

//Смена языка игры

    function Language_in (e){ 
	
         if (typeof e === 'object') { if ('ontouchstart' in window) {e.preventDefault();}else{e.stopPropagation();}
        
		      language = e.target.id.replace('IEF', ''); 
			  
			  
		
		    } else {
		 
		       if ( e == 'Digit1') { language = 'ru'}
			   
			   else if ( e == 'Digit2' ) { language = 'en' }
			   
			   else if ( e == 'Digit3' ) { language = 'fr' }
			   
			   else if ( e == 'Digit4' ) { language = 'de' }
			   
			   else if ( e == 'Digit5') { language = 'it' }
			   
			   else { language = 'en' }

		    }

        //Game.setAttribute( 'data-language' , language ); 
		
		Field.setAttribute( 'data-language' , language ); 
	  
	   if ( storageAvailable("localStorage") ) {  localStorage.setItem( 'language_'+ obj_local['loc_base_name'] , language ) } //Открыть  

        
		Help_button_close ( 1 );
		
		if ( arr_result.Status_game == 'OneStartGame' )	{ RestartGame_button (1) }

    }

      let L_closed = 1;

    function Language_button (e){

     if (typeof e === 'object') { if ('ontouchstart' in window) {e.preventDefault();}else{e.stopPropagation();} }

       //Mes.style.backgroundColor = "#FFFFCC";
	   
	   if ( L_closed == 1 ){ H_closed = 1 ; L_closed = 2 ;

       

          let lang_div = "<div id='IEFlang'>";

          for( let key in obj_language ) {
		  
                if(key == language){
				
                   lang_div = lang_div + "<div id='IEF" + key + "' class='lang_div' style='border-color:#fe17d4; background-color: #fe17d4;' >" + obj_language[key]['fr6'] + "</div>";
                }else{
				
                   lang_div = lang_div + "<div id='IEF" + key + "' class='lang_div' >" + obj_language[key]['fr6'] + "</div>";
				   
                }

            }

           Mes_m.innerHTML = lang_div + "</div><br><br>";

           lang_div = lang_div + "</div><br><br>";

           Mes.style.display="block";

 
           if ('ontouchstart' in window) {
              document.getElementById("IEFlang").addEventListener("touchstart", Language_in, {passive:false});
            }else{
              document.getElementById("IEFlang").addEventListener('mousedown', Language_in,{passive:false});
            }

        } else { Help_button_close ( 1 ) }
		   
        
    }




let H_closed = 1;

    function Help_button (e){
	
	 
	
      if (typeof e === 'object') { if ('ontouchstart' in window) {e.preventDefault();}else{e.stopPropagation();} }

       if ( document.getElementById("IEFm") ) {

           if( H_closed == 1 ){ L_closed = 1 ;  H_closed = 2;

               Mes_m.innerHTML =  obj_language[language]['help'];

              Mes.style.display = "block";

            }else{ Help_button_close ( 1 ) }

        }

    }




   function Help_button_close (e){
    if (typeof e === 'object') { if ('ontouchstart' in window) {e.preventDefault();}else{e.stopPropagation();} }
	
     Mes.style.display = "none";
	 
     Mes.style.width=300+"px";
	 
	 H_closed = L_closed = 1; 
	 
    }

    
	function Greate_Pause_Play_Button (){
	
	  if ('ontouchstart' in window) { // Ставим обработчики событий паузы или игры
			
			     if (arr_result.Status_game == 'GamePause') {
				 
				     Field.addEventListener("touchstart", Pause_button, {passive:false});
					 
					}
	   
	             if (arr_result.Status_game == 'GamePlay'  ){

				     Field.addEventListener("touchstart", handleStart , {passive:false});
					 
					}

	            }else{

			     if (arr_result.Status_game == 'GamePause') {

				      Field.addEventListener('click', Pause_button, {passive:false});
					  
				    }
	   
	             if (arr_result.Status_game == 'GamePlay'   ) {

				      Field.addEventListener('mousedown',handleStart,{passive:false});
	
				    }

	            } 
				
			    if (arr_result.Status_game == 'GamePause') {

					// document.addEventListener('keydown', Pause_button,{passive:false});

				}
	
	           if (arr_result.Status_game == 'GamePlay'  ) {

				   //  document.addEventListener('keydown',handleStart_board,{passive:false});
	 
	            }
				
				
	}
	
	

	
	function Delete_Pause_Play_Button (){
	
	  if ('ontouchstart' in window) { // Снимаем обработчики событий паузы или игры
			
			     if (arr_result.Status_game == 'GamePause') {
				 
				     Field.removeEventListener("touchstart", Pause_button, {passive:false});
					 
					}
	   
	             if (arr_result.Status_game == 'GamePlay'  ){

				     Field.removeEventListener("touchstart", handleStart , {passive:false});
					 
					}

	            }else{

			     if (arr_result.Status_game == 'GamePause') {

				      Field.removeEventListener('click', Pause_button, {passive:false});
					  
				    }
	   
	             if (arr_result.Status_game == 'GamePlay'   ) {

				      Field.removeEventListener('mousedown',handleStart,{passive:false});
	
				    }

	            } 
				
			    if (arr_result.Status_game == 'GamePause') {

					// document.removeEventListener('keydown', Pause_button,{passive:false});

				}
	
	           if (arr_result.Status_game == 'GamePlay'  ) {

				  //   document.removeEventListener('keydown',handleStart_board,{passive:false});
	 
	            }
				
				
	}


//Перезапуск игры

   function RestartGame_button (e){
   
    if (typeof e === 'object') {   if ('ontouchstart' in window) { e.preventDefault() }else{ e.stopPropagation() } }
	   
	   Mes_m.innerHTML = ""; 
	   
	   Help_button_close ( 1 );

	   StopAudio();
	   
	   Delete_Pause_Play_Button ();

	   arr_result.Status_game = 'RestartGame';

	   clearTimeout( idT );
	   
	   cancelAnimationFrame( tmuvID );

	   //Удаляем резервную базу уровня
	   
	     Delete_Rezerv_Level_Base ();

       Opasity_Game_Start (  One )

	}
	
	
	function Load_Rezerv_Level_Base ( a , b , c ){
	
	 let Rezerv_level = 'No';
	
	 if ( storageAvailable("localStorage") ) {

		 if (localStorage.getItem( obj_local['loc_base_name'] ) !== null){ 
		 
		      Rezerv_level = JSON.parse( localStorage.getItem( 'Rezerv_Base_Level_' + obj_local['loc_base_name'] ) )

		    }else{  
		 
		     if ( Field.hasAttribute('data-Rezerv_Base_Level_arr_result') ){ 
			 
			     Rezerv_level = JSON.parse( Field.getAttribute('data-Rezerv_Base_Level_arr_result') ) 

				}
				
			}
			
	    }
		
		if ( a == 'Base' ){
			
			  //Получаем копию всей базы уровня
				
	         return 	Rezerv_level ['Base_Level']
	  
		    } else if ( b == undefined ) { 
			
			  //Получаем копию элемента уровня ( герой )
			
			  return 	Rezerv_level ['Base_Level'] [ a ] 
			
			
			} else  {
				
				//Получаем копию свойство из элемента уровня 
				
				return 	Rezerv_level ['Base_Level'] [ a ] [ b ]
				
			}

	}

  function Delete_Rezerv_Level_Base () {
						  
	 if ( Field.hasAttribute('data-Rezerv_Base_Level_arr_result') ){ 
						   
		 Field.removeAttribute( 'data-Rezerv_Base_Level_arr_result' )
						   
		} 
	  
	 if ( storageAvailable("localStorage") ) {  
	 
	      if ( localStorage.getItem( 'Rezerv_Base_Level_' +  obj_local['loc_base_name'] ) !== null){
	 
	         localStorage.removeItem( 'Rezerv_Base_Level_' + obj_local['loc_base_name'] ) 

	        }
	    } 
	}


function randomNumber (m,n){
m = parseInt(m);
n = parseInt(n);
return Math.floor( Math.random() * (n - m + 1) ) + m;
}

// Функция проверки является ли переменная числом

function isNumeric(num) {
	return !isNaN(parseFloat(num)) && isFinite(num);
};

let Field = document.getElementById("IEFfield") , 

Body_doc = document.body ,


Mes , Mes_m , Services_menu , Pause_bottom_res , El_audio , Loader = document.getElementById("IEFloader");


// Функция отрисовки текста на канве с переносом строк

         
function drawText(ctx, text, x, y, lineHeight) {
                     text.split('\n').forEach((line, index) => ctx.fillText(line, x, y + index * lineHeight));
                }




let X_st , Y_st , st , kls , st_fig , st_fig_canvas , language = 'en' , machtab_fig , tmuvID , idT , arr_result , arr_Level , W_win , H_win , fps;
											 
														 
	function Window ( ){
	
	try {     
										 
        
         
        
		 
		 fps = arr_result.fps; 
		 
		 
		 
		 Field = document.getElementById("IEFfield");

         Loader = document.getElementById("IEFloader");

         Mes = document.getElementById("IEFmessage");
		 
		 Mes_m = document.getElementById("IEFm");

         Services_menu = document.getElementById("IEFservices_menu");

         Pause_bottom_res = document.getElementById("IEFpause");
		 
		 El_audio = document.getElementById("IEFaudio");

		 //Field.setAttribute('data-arr_result', JSON.stringify( arr_result ) );
			 
			 
			 
			 Audio_Game ();
		 
		 
		 if ('ontouchstart' in window) {
		 
		     document.getElementById("IEFlanguage").addEventListener("touchstart", Language_button, {passive:false});
			 
			 document.getElementById("IEFhelp").addEventListener("touchstart", Help_button, {passive:false});
			 
			 document.getElementById("IEFhelp_end").addEventListener("touchstart", Help_button_close, {passive:false});
			 
			 document.getElementById("IEFhome").addEventListener("touchstart", RestartGame_button, {passive:false});
			 
			 document.getElementById("IEFmenu").addEventListener("touchstart", Menu, {passive:false});

              Pause_bottom_res.addEventListener("touchstart", Pause_button, {passive:false});
			  
			  El_audio.addEventListener("touchstart", Audio_button, {passive:false});
			  
			  //Game.addEventListener("touchstart", Def, {passive:false});

              Mes.addEventListener("touchstart", Def, {passive:false});
			  
			  Services_menu.addEventListener("touchstart", Def, {passive:false});
			  
			  
            }else{
              
			  document.getElementById("IEFlanguage").addEventListener( 'click' , Language_button,{passive:false});
			  
			  document.getElementById("IEFhelp").addEventListener( 'click' , Help_button,{passive:false});
			  
			  document.getElementById("IEFhelp_end").addEventListener( 'click' , Help_button_close,{passive:false});
			  
			  document.getElementById("IEFhome").addEventListener( 'click' , RestartGame_button,{passive:false});
			  
			  document.getElementById("IEFmenu").addEventListener( 'click' , Menu,{passive:false});

			  Pause_bottom_res.addEventListener( 'click' , Pause_button,{passive:false});
			  
			  El_audio.addEventListener( 'click' , Audio_button,{passive:false});
			  
			  
              
			  
			  
            }
			
		
			


       //Минимальная ширина смартфона 320
       // Минимальная высота смартфона 500

       let W_menu_min = 320; //минимальная ширина по ширине меню

       let W_menu_max = 600; //максимальная  ширина игры

       let W_game_min = 320; //минимальная ширина требуемая для игры

       let H_menu1 = 0; //Высота верхнего меню
	   
       let H_menu2 = 0; //Высота нижнего меню
	   
	   let W_game;

  
       let H_Igr_pole_min = 320; //Минимальная требуемая высота игрового поля

       let H_Igr_pole_max = 600; //Максимальная требуемая высота игрового поля

       let H_menu_max=H_Igr_pole_max+H_menu1+H_menu2; //Максимальная высота всей игры с учетом верхнего меню 30 и нижнего меню 30

       let H_menu_min=H_Igr_pole_min+H_menu1+H_menu2; //минимальная высота с учетом верхнего меню 30 и нижнего меню 30
	   
	   let H_game;

       //Получаем размеры видимой части окна браузера и приводим к кратно 2


       let w = window.innerWidth;     let h = window.innerHeight;
	   
	   
	   
	   //Body.style.width = w + 'px';
	   
	   //Body.style.height = h + 'px';
	   
	   arr_result.W_win = w;  arr_result.H_win = h;
	   
	 
	   
	   Mes.style.maxHeight = Number ( h - 60 - 20 ) + "px";
	   
	   Loader.style.position = 'absolute';
	   
	   Loader.style.zIndex = '3';
	   
	   //Loader.style.top = 40 +'%';
	   
	   //Loader.style.left = 40 +'%';
	   
	    
	   
	   

       // W_game; //Ширина всей игры div Game

       if(w <= W_menu_min ){ W_game = W_menu_min }

       if(w > W_menu_min && w < W_menu_max ){ W_game = w }

       if(w >= W_menu_max ){ W_game = W_menu_max  }

       // H_game; //Высота всей игры div Game

       if( h <= H_menu_min ){ H_game = H_menu_min }  //высота меньше минимальной

       if( h > H_menu_min && h <  H_menu_max ){ H_game = h }  //высота меньше минимальной

       if( h >= H_menu_max ){ H_game = H_menu_max }

       if(W_game>=H_game){ st=H_game-H_menu1-H_menu2    } else {st=W_game}


     


       st_fig = 600;
	   
	   st_fig_canvas = 600;

       machtab_fig = ( st / st_fig_canvas  );

	    
        X_st = ( w - st ) / 2 ;
		
		Y_st = ( h - st ) / 2 ;


        
		
		
		
		///// Выравниваем градиенты в Body по установленному уровню

        kls = Math.round( Y_st + (st / 2) + st / 10 ) ;

        let kls2 = h - kls ;
 
	  Body_doc.style.background = 'linear-gradient( #1db6f6  , #98E0FE ' + kls  + 'px , #57ac00  , #6ad100 ' + kls2 + 'px )';
	  
	 
	 // Картинки
		
		obj_img ['Holst']['width_canvas'] = st ;
		
		obj_img ['Holst']['height_canvas'] = st ;
		
		obj_img ['Field']['width_canvas'] = w ;
		
		obj_img ['Field']['height_canvas'] = h ;

	 obj_img ['Oblaka']['width_canvas'] = obj_img ['Oblaka']['width_canvas_nacalnoe_znacenie'] * machtab_fig ;
	 
	 obj_img ['Oblaka']['height_canvas'] = obj_img ['Oblaka']['height_canvas_nacalnoe_znacenie'] * machtab_fig ;
	 
	 
	 obj_img ['Dogdy']['width_canvas'] = obj_img ['Dogdy']['width_canvas_nacalnoe_znacenie'] * machtab_fig ;
	 
	 obj_img ['Dogdy']['height_canvas'] = obj_img ['Dogdy']['height_canvas_nacalnoe_znacenie'] * machtab_fig ;
	 
	 
	 
	 obj_img ['Ozero']['width_canvas'] = obj_img ['Ozero']['width_canvas_nacalnoe_znacenie'] * machtab_fig ;
	 
	 obj_img ['Ozero']['height_canvas'] = obj_img ['Ozero']['height_canvas_nacalnoe_znacenie'] * machtab_fig ;
	 
	 // Требуется для обложки и анимации озера не убирать
	 
	  arr_result['Animation_Ozero']['X'] = X_st + ( st / 2 ) ;
	 
	  arr_result['Animation_Ozero']['Y'] = kls  ;
	  
	 /////////////////////////
	 
	 obj_img ['Suhoe_Ozero']['width_canvas'] = obj_img ['Suhoe_Ozero']['width_canvas_nacalnoe_znacenie'] * machtab_fig ;
	 
	 obj_img ['Suhoe_Ozero']['height_canvas'] = obj_img ['Suhoe_Ozero']['height_canvas_nacalnoe_znacenie'] * machtab_fig ;
	 

	  
	  obj_img ['Babochka_Big']['width_canvas'] = obj_img ['Help_Hend_Big']['width_canvas'] = obj_img ['Oblogka']['width_canvas'] = obj_img ['Frog_Big']['width_canvas'] = obj_img ['Komar_Big']['width_canvas'] = obj_img ['Muha_Big']['width_canvas'] = obj_img ['Pauk_Big']['width_canvas'] = obj_img ['Pchela_Big']['width_canvas'] = st_fig;
	  
	  obj_img ['Babochka_Big']['height_canvas'] = obj_img ['Help_Hend_Big']['height_canvas'] = obj_img ['Oblogka']['height_canvas'] = obj_img ['Frog_Big']['height_canvas'] = obj_img ['Komar_Big']['height_canvas'] = obj_img ['Muha_Big']['height_canvas'] = obj_img ['Pauk_Big']['height_canvas'] = obj_img ['Pchela_Big']['height_canvas'] = st_fig;			

     
	 
	 //картинки
	  
	  
	  for (let key in obj_img ) {
		 
		 if (  obj_canvas ['Canvas_' + key  ] == undefined ){   
		 
		      if (obj_img [ key ]['getElementById'] != undefined ){

                 obj_canvas ['Canvas_' + key  ] =   document.getElementById( obj_img [ key ]['getElementById'] ) ;
			 
		        } else {
				
			     obj_canvas ['Canvas_' + key  ] = document.createElement("canvas");	
				
			    }

			}
			
			
		 if (  obj_canvas ['Canvas_' + key + '_Context'  ] == undefined ){     

		       obj_canvas ['Canvas_' + key + '_Context'  ] =  obj_canvas ['Canvas_' + key  ].getContext('2d'  );
			   
		   }
			
			
		 if( obj_img [ key ]['width_canvas'] != undefined && obj_img [ key ]['height_canvas'] != undefined ){

		      obj_canvas ['Canvas_' + key  ].width = obj_img [ key ]['width_canvas'] ;
		
		      obj_canvas ['Canvas_' + key  ].height = obj_img [ key ]['height_canvas'] ;
			 
		    } //else {console.log ( 'Присвоение ширины и высоты конвайсу спрайта' + key + ' Отсутствует требуемый параметр' )}	
			
			 
		
		
		 if ( obj_img [ key ]['x_img'] != undefined && obj_img [ key ]['y_img'] != undefined && obj_img [ key ]['width_img'] != undefined && obj_img [ key ]['height_img'] != undefined && obj_img [ key ]['x_canvas'] != undefined && obj_img [ key ]['y_canvas'] != undefined && obj_img [ key ]['width_canvas'] != undefined &&  obj_img [ key ]['height_canvas'] != undefined ) {
			 
			
		
		     obj_canvas ['Canvas_' + key + '_Context'  ].drawImage (myimg , obj_img [ key ]['x_img'], obj_img [ key ]['y_img'] , obj_img [ key ]['width_img'] , obj_img [ key ]['height_img'] , obj_img [ key ]['x_canvas'] , obj_img [ key ]['y_canvas']  , obj_img [ key ]['width_canvas'] , obj_img [ key ]['height_canvas'] )
			 
		    } //else {console.log ( 'Отрисовка спрайта' + key + ' Отсутствует требуемый параметр' )}

        }
	 
	 
	// console.log ( obj_canvas ) ;
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 obj_canvas['Canvas_Holst_Context'].scale(machtab_fig,machtab_fig);
	  
	  
	  //Востанавливаем укусы комаров если страница была перезагружена
	  
	  
	  
	  if ( arr_result['Level_' + arr_result.Level ]['Komar'] != undefined ) {
	  
	      if (  arr_result['Level_' + arr_result.Level ]['Komar']['Karta_Ukusov_Komar'].length != 0 ){ 

	          for ( let h = 0 ; h < arr_result['Level_' + arr_result.Level ]['Komar']['Karta_Ukusov_Komar'].length ; h++ ) {
	   
	   
	              let Num_per = arr_result['Level_' + arr_result.Level ]['Komar']['Karta_Ukusov_Komar'] [ h ].split ('|');


                  Ukus_Komara ( Num_per [0] , Num_per [1] )
					  
		        }//for
					  
	        }
	    }
	  
	  
	  //let      Canvas_Poceluy_Context , Canvas_Pyatno_Context ;
	  
7

	  fun = Img_Oblaka ;  //Подключение первой функции персонажей
	   
	     
	            
	     
		 
		          //alert (arr_result.Status_game);    
              
	    
		 if ( arr_result.Status_game == 'OneStartGame' ){ /// первый запуск игры когда база в начальном состоянии
		 
		      // alert ('первый запуск игры');

		 
		        obj_canvas['Canvas_Holst_Context'].save();

		        obj_canvas['Canvas_Holst_Context'].drawImage ( myimg , 3609 , 0 , 600 , 600 , 0 , 0 , st_fig , st_fig ); // Основная картинка

				obj_canvas['Canvas_Holst_Context'].drawImage ( myimg , 305 , 0 , 240 , 298 , 0 , st_fig - 298 , 240 , 298 ); //Лягушка
				
				

                              obj_canvas['Canvas_Holst_Context'].font = obj_language[language]['name_game'][ 'size' ] + 'px cursive';
                              obj_canvas['Canvas_Holst_Context'].fillStyle = '#000000';
							  obj_canvas['Canvas_Holst_Context'].textAlign = "center";
			                  obj_canvas['Canvas_Holst_Context'].textBaseline="middle";
                              obj_canvas['Canvas_Holst_Context'].translate( obj_language[language]['name_game'][ 'x' ] , obj_language[language]['name_game'][ 'y' ] );
							  
							  obj_canvas['Canvas_Holst_Context'].rotate( obj_language[language]['name_game'][ 'ugol' ] * Math.PI  / 180 );
							  
						  drawText( obj_canvas['Canvas_Holst_Context'] , obj_language[language]['name_game'][ 'name' ] , 0 , 0 , obj_language[language]['name_game'][ 'sizeLine' ] );
							  
							  
                              obj_canvas['Canvas_Holst_Context'].restore (); 
							  
							  obj_canvas['Canvas_Holst_Context'].save();
				
							 // Рисуем открытые и закрытые уровни
				
				for ( let end_game = 0 , i = 0 ; i < arr_result.Kol_Level ; i++ ){
				
				  if (arr_result['Level_' + i ] != undefined ){
				
				       if ( arr_result['Level_' + i ]['Status_Level']  == 'EndLevel' ){  
					   
					     
						  
						   

					      obj_canvas['Canvas_Holst_Context'].drawImage (obj_canvas['Canvas_Galka'] , arr_result['Level_' + i ]['X_Norka_Menu'] , arr_result['Level_' + i ]['Y_Norka_Menu']   );
					
					
					    } else if ( arr_result['Level_' + i ]['Status_Level']  == 'ClosedLevel' ) { 
						
						obj_canvas['Canvas_Holst_Context'].drawImage (obj_canvas['Canvas_Zamok'] , arr_result['Level_' + i ]['X_Norka_Menu'] , arr_result['Level_' + i ]['Y_Norka_Menu']  );  //отображение замка закрытого уровня

						}
						
					}
					
				
				 if ( i == arr_result.Kol_Level - 1 ){
				 
				     obj_canvas['Canvas_Holst_Context'].restore ();
				
				     obj_canvas['Canvas_Field_Context'].clearRect ( 0 , 0 , arr_result.W_win , arr_result.H_win );
					 
					 obj_canvas['Canvas_Field_Context'].save ();   // Озеро
               
				        obj_canvas['Canvas_Field_Context'].translate ( arr_result['Animation_Ozero']['X'] ,  arr_result['Animation_Ozero']['Y'] );
                   
				   
				        obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas['Canvas_Ozero'] , - obj_img['Ozero']['width_canvas'] / 2 ,  0 );

					      obj_canvas['Canvas_Field_Context'].restore ();
				
				      obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas['Canvas_Holst'] , X_st , Y_st );
					  
					  
					  //Start_button (1);
					  
					  Vibor_Variant_Game_button (1);

					}
	
				}
				
					
				

				return false;
		 
		    }
		

			
			if( arr_result.Status_game == 'LevelStart' ) { //Смена уровня
			
			
			       function Ball_Menu (){ 
							   
						  if ( end_game >= arr_result.Kol_Level ) {  //событие окончания игры когда все уровни пройдены
						  

						       obj_canvas['Canvas_Holst_Context'].restore ();
							   
							   obj_canvas['Canvas_Field_Context'].clearRect ( 0 , 0 , arr_result.W_win , arr_result.H_win );
							   
							    obj_canvas['Canvas_Field_Context'].save ();   // Озеро
               
				                      obj_canvas['Canvas_Field_Context'].translate ( arr_result['Animation_Ozero']['X'] ,  arr_result['Animation_Ozero']['Y'] );
                   
				   
				                     
									  
									  obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas['Canvas_Ozero'] , - obj_img['Ozero']['width_canvas'] / 2 ,  0 );

					            obj_canvas['Canvas_Field_Context'].restore ();
				
				               obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas['Canvas_Holst'] , X_st , Y_st );
							   
							   arr_result.Status_game = 'EndGame';
							   
							   
							   
							   function Animation_End_Game (){
								   
								   let Canvas_End_Game = document.getElementById('IEFEnd_Game') ,
								   
								   Canvas_End_Game_Context = Canvas_End_Game.getContext('2d') ,
								   
								   VN = 1 , idTE , End_Animation = 'No' ,
								   
								   W1 = obj_img ['Frog_Ulibka'] ['width_canvas'] ,
								   
								   H1 = obj_img ['Frog_Ulibka'] ['height_canvas'] ,
								   
								   W2 = obj_img ['Piano'] ['width_canvas'] ,
								   
								   H2 = obj_img ['Piano'] ['height_canvas'] 
								   
								   ;
								   
								   Canvas_End_Game.width = W1 + W2;
								   
								   Canvas_End_Game.height = H1 + 20 ;
								   
								   
								  function Animation_Body (){
									  
									  Canvas_End_Game_Context.clearRect ( 0, 0 , W1 + W2 , H1 + 20 );
									  
									   Canvas_End_Game_Context.drawImage ( obj_canvas ['Canvas_Piano'] , W1 - 20 , H1 + 20 - H2 )
									  
									  Canvas_End_Game_Context.save ();

									 if (End_Animation == 'No' ) {

									     if ( VN == 1 ){ VN = 2;
										 
										      Canvas_End_Game_Context.translate (W1 /2 + 10 , H1 / 2 )

									          Canvas_End_Game_Context.rotate( -25 * Math.PI  / 180 );

									        }else { VN = 1;
											
											  Canvas_End_Game_Context.translate (W1 /2 + 10 , ( H1 / 2 ) +10 )

									          Canvas_End_Game_Context.rotate( -20 * Math.PI  / 180 );

									        }
											
											Canvas_End_Game_Context.drawImage ( obj_canvas ['Canvas_Frog_Ulibka'] , -W1 /2 , -H1 / 2 )
									  
									     Canvas_End_Game_Context.restore ();

										
										  
									     idTE = setTimeout( Animation_Body , 170 );
										 
										} else {
											
										clearTimeout( idTE );
										
										    Canvas_End_Game_Context.drawImage ( obj_canvas ['Canvas_Piano'] , W1 - 20 , H1 + 20 - H2 );

                                           Canvas_End_Game_Context.drawImage ( obj_canvas ['Canvas_Frog_Ulibka'] , 0 , 10 );

                                           Play_Audio ( 'audio_Frog' ) ;										   
											
										}
									  

								    } 
								   
								   Animation_Body ();
								   
								   setTimeout ( function () { End_Animation = 'Yes' } , 17000 );
								   
								   
							   }
							   
							   
							   Mes_m.innerHTML = "<canvas id='IEFEnd_Game' ></canvas> " + obj_language[language]['fr7'] ;
							   
							   
							   
						       Animation_End_Game ();

                               
							   
							   // let dataURL = obj_canvas ['Canvas_Frog_Ulibka'  ].toDataURL("image/png");
								
								//let dataURL2 = obj_canvas ['Canvas_Piano'  ].toDataURL("image/png");
								
								//Mes_m.innerHTML = "<img src ='" + dataURL + "'   ><img src ='" + dataURL2 + "'   >" + obj_language[language]['fr7'] ;
				   
				               Mes.style.display = "block";
							   
							   Play_Audio ( 'audio_FinalGame' ) ;
	
								
							   if ('ontouchstart' in window) { 

				                  document.getElementById("IEFpr2_2").addEventListener('touchstart' ,
								  RestartGame_button , {passive:false});

			                      } else {
				
				                  document.getElementById("IEFpr2_2").addEventListener('mousedown',  RestartGame_button , {passive:false});

								
								}
							

							} else {
							
							  obj_canvas['Canvas_Holst_Context'].restore ();
							  
							  obj_canvas['Canvas_Field_Context'].clearRect ( 0 , 0 , arr_result.W_win , arr_result.H_win );

							    obj_canvas['Canvas_Field_Context'].save ();   // Озеро
               
				                      obj_canvas['Canvas_Field_Context'].translate ( arr_result['Animation_Ozero']['X'] ,  arr_result['Animation_Ozero']['Y'] );
 
									  
									  obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas['Canvas_Ozero'] , - obj_img['Ozero']['width_canvas'] / 2 ,  0 );

					            obj_canvas['Canvas_Field_Context'].restore ();

				               obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas['Canvas_Holst'] , X_st , Y_st );


                               Start_button (1);								
								
							
							  if ( arr_result['Level_' + arr_result.Level ]['Status_Level'] == 'ErrorLevel' ){ 
			
							    

								 arr_result['Level_' + arr_result.Level ]['Status_Level'] = 'OpenLevel';
								 
								 Save_base_game ();
							  
							  }
							  
							 
							  
							  if ( arr_result['Level_' + arr_result.Level ]['Status_Level'] == 'Vihod_S_Obnuleniem' || arr_result['Level_' + arr_result.Level ]['Status_Level'] == 'ErrorLevel'  ){ 


								 arr_result['Level_' + arr_result.Level ]['Status_Level'] = 'OpenLevel';
								 
								 Save_base_game ();
							  
							  }
							
							}	  
				
							
						

				    }
			

			
			
			
			     obj_canvas['Canvas_Holst_Context'].save();

		        obj_canvas['Canvas_Holst_Context'].drawImage ( myimg , 3609 , 0 , 600 , 600 , 0 , 0 , st_fig , st_fig ); // Основная картинка

				obj_canvas['Canvas_Holst_Context'].drawImage ( myimg , 305 , 0 , 240 , 298 , 0 , st_fig - 298 , 240 , 298 ); //Лягушка
				
				//obj_canvas['Canvas_Holst_Context'].drawImage ( myimg , 1458 , 500 , 600 , 420 , 0 , st_fig - 420 , 600 , 420 ); //Камыш
 
                              obj_canvas['Canvas_Holst_Context'].restore (); 
							  
							  obj_canvas['Canvas_Holst_Context'].save();
				
							 // Рисуем открытые и закрытые уровни
							 
							 let end_game = 0;
				
				for ( let i = 0 ; i < arr_result.Kol_Level ; i++ ){
				
				  if (arr_result['Level_' + i ] != undefined ){
				
				       if ( arr_result['Level_' + i ]['Status_Level']  == 'EndLevel' ){  
					  
					       end_game++; 
					
					       obj_canvas['Canvas_Holst_Context'].drawImage (obj_canvas['Canvas_Galka'] , arr_result['Level_' + i ]['X_Norka_Menu'] , arr_result['Level_' + i ]['Y_Norka_Menu']   );
					
					
					    } else if ( arr_result['Level_' + i ]['Status_Level']  == 'ClosedLevel' ) { 
						
						obj_canvas['Canvas_Holst_Context'].drawImage (obj_canvas['Canvas_Zamok'] , arr_result['Level_' + i ]['X_Norka_Menu'] , arr_result['Level_' + i ]['Y_Norka_Menu']  );  //отображение замка закрытого уровня

						}
						
					}
					
				
				 if ( i == arr_result.Kol_Level - 1 ){
				 
				      Ball_Menu ()

					}
	
				}
				
		       return false;

			}		  

           
		   
		   
		   if( arr_result.Status_game == 'GamePlay' ) { 

			  Help_button_close ( 1 );

		       Greate_pole ();

		    }	

          if( arr_result.Status_game == 'GamePause' ) {  // Запуск текущего состояния игры после перезагрузки без сброса базы. реклама
		  
		      
		   
		      Help_button_close ( 1 );

		      arr_result.Status_game = 'GamePlay';
			 
			  Save_base_game ();
			  
			  Greate_pole ();  

			  setTimeout( function (){  
			  
			  Pause_button (1); 
			  
			  } , ( 1000 / fps ) + 100 ) 

			  
			}			

            
		  
	      	
	
	
	
	
	
	
	
	
	
	 }//try
		 
             catch (e) {  console.log ( e ); Error_Start ( 'Window' , e ) 
	   
	   }		 
		  

    }
/////////////////////////////////////////////////////////


let fun  ;

    function Greate_pole (){
	
	      try {     
										 
              fps = arr_result.fps; 
             
	
	           if ( arr_result.Status_game == 'EndGame' || arr_result.Status_game == 'LevelStart' ) return false;
			   
			   
	 
	           obj_canvas['Canvas_Holst_Context'].clearRect ( 0 , 0 ,  st_fig_canvas ,  st_fig_canvas ); 
		
		       obj_canvas['Canvas_Field_Context'].clearRect ( 0 , 0 , arr_result.W_win , arr_result.H_win );
	           
			   
			   
			   arr_result.Timer_fps = new Date().getTime();
  
	          fun ();  


    
	
	        }//try
		 
           catch (e) {  console.log ( e ); Error_Start ( 'Greate_pole' , e ) }
		   
		}
	
/////////////////////////////////////////////////////////////////// Обработчики ошибок



 function Error_Start ( a , e ){
	 
	        if ( Display_Error == 'No' ) return false;
 
           if ( storageAvailable("localStorage") ) {  
	 
	          if ( localStorage.getItem( 'Rezerv_Base_Level_' + obj_local['loc_base_name'] ) !== null){
	 
	                  localStorage.removeItem( 'Rezerv_Base_Level_' + obj_local['loc_base_name'] ) 

	                }
					
		     if ( localStorage.getItem( obj_local['loc_base_name'] ) !== null){
	 
	                  localStorage.removeItem( obj_local['loc_base_name'] ) 
 
	                }
		
	        } 
			
		 let language = window.navigator ? (window.navigator.language || window.navigator.systemLanguage || window.navigator.userLanguage ) : "en";

          language = language.substr(0, 2).toLowerCase();

         

      if (obj_language.hasOwnProperty(language)) {  } else {  language = "en" }
	  
	  
		  
		  let re = /Gopro/gi;
          let str = obj_language[language]['fr9'] ;
          let newstr = str.replace( re , a + ' - ' + e );
		  
		  document.getElementById("IEFm").innerHTML =   newstr  ;
				   
		  document.getElementById("IEFEr_1").remove ();


		 document.getElementById("IEFmessage").style.display = "block";

		    
		   if ('ontouchstart' in window) { 

				                 
								  
								   document.getElementById("IEFEr_2").addEventListener('touchstart', function (){ location.reload () } , {passive:false});

			                      } else {
				
				                
								  
								  document.getElementById("IEFEr_2").addEventListener('mousedown', function (){ location.reload () }   , {passive:false});

				                }
		  

							   
							
						
	  
	  }

       

      function Error_Game ( a , e ){
		  
		  if ( Display_Error == 'No' ) return false
	  
	     clearTimeout(idT);
	     cancelAnimationFrame(tmuvID);
	  
	     StopAudio();
	  
	      arr_result['Level_' + arr_result.Level ]['Status_Level'] = 'ErrorLevel';
		  
		  arr_result.Status_game = 'LevelStart';
		  
		  Save_base_game ();
		
		  Second ();
							 
				
	 
	         Delete_Pause_Play_Button ();	
		  

	      StopAudio();
		  
		  let re = /Gopro/gi;
          let str = obj_language[language]['fr9'] ;
          let newstr = str.replace( re , a + ' - ' + e );
		  
		  Mes_m.innerHTML =   newstr  ;
				   
		  Mes.style.display = "block";

		    
		   if ('ontouchstart' in window) { 

				                  document.getElementById("IEFEr_1").addEventListener('touchstart', Diagonal , {passive:false});
								  
								   document.getElementById("IEFEr_2").addEventListener('touchstart', RestartGame_button , {passive:false});

			                      } else {
				
				                  document.getElementById("IEFEr_1").addEventListener('mousedown', Diagonal  , {passive:false});
								  
								  document.getElementById("IEFEr_2").addEventListener('mousedown', RestartGame_button  , {passive:false});

				                }
		  

							   
							
							  //document.addEventListener('keydown', function () { Mes.style.display = "none";  One () } ,{passive:false});

	  
	  }
	  
	  
	  
	   function Error_Handle ( a , e ){
		   
		    if ( Display_Error == 'No' ) return false
	  
	     clearTimeout(idT);
	     cancelAnimationFrame(tmuvID);
	  
	     StopAudio();
	  
	      //arr_result['Level_' + arr_result.Level ]['Status_Level'] = 'ErrorLevel';
		  
		  arr_result.Status_game = 'LevelStart';
		  
		  Save_base_game ();
		
		  Second ();
							 
				
	 
	         Delete_Pause_Play_Button ();	
		  

	      StopAudio();
		  
		  let re = /Gopro/gi;
          let str = obj_language[language]['fr9'] ;
          let newstr = str.replace( re , a + ' - ' + e );
		  
		  Mes_m.innerHTML =   newstr  ;
				   
		  Mes.style.display = "block";

		    
		   if ('ontouchstart' in window) { 

				                  document.getElementById("IEFEr_1").addEventListener('touchstart', Diagonal , {passive:false});
								  
								   document.getElementById("IEFEr_2").addEventListener('touchstart', RestartGame_button , {passive:false});

			                      } else {
				
				                  document.getElementById("IEFEr_1").addEventListener('mousedown', Diagonal  , {passive:false});
								  
								  document.getElementById("IEFEr_2").addEventListener('mousedown', RestartGame_button  , {passive:false});

				                }
	
							  //document.addEventListener('keydown', function () { Mes.style.display = "none";  One () } ,{passive:false});

	  }




//////////////////Область функций персонажей


function Img_Oblaka (){ ////Облака
	
  try {
	     
		 function Next_func (){ Img_Ozero () }
		 
		
	   
	      if( arr_result['Animation_Oblaka'] == undefined ||   arr_result['Animation_Oblaka']['Animation_Status'] == 'StopAnimation' ){

	          Next_func ();
		 
		      return false ;
		
		    } 

         			
		  
	     let  W1 = obj_img['Oblaka']['width_canvas'] , H1 = obj_img['Oblaka']['height_canvas']  ;

		  if ( arr_result['Animation_Oblaka']['Animation_Status'] == 'StartAnimation' ){
			  
			  arr_result['Animation_Oblaka']['X'] = X_st + ( st / 2 ) + (st / 4 );
	 
	          arr_result['Animation_Oblaka']['Y'] = Y_st + ( obj_img ['Oblaka']['height_canvas'] ) / 2 ;

		  }

	       let X =  arr_result['Animation_Oblaka']['X'] ,

               Y = arr_result['Animation_Oblaka']['Y'] ,

               Hag = arr_result['Animation_Oblaka']['Hag']	

            ;			   
			
			
			arr_result['Animation_Oblaka']['Animation_Status'] = 'AnimationInProgress'; 
			     
	      obj_canvas['Canvas_Field_Context'].save ();
               
		  obj_canvas['Canvas_Field_Context'].translate ( X , Y );
                   
				   
		  obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas['Canvas_Oblaka'] , - W1 / 2 ,  - H1 / 2 );
				   
		  obj_canvas['Canvas_Field_Context'].restore ();

           if ( X + W1 / 2 > 0 ){
						   
			 X =  X - Hag 
					   
		    } else {
						   
			 X =  obj_img['Field']['width_canvas'] +  W1 / 2 ;
						   
		    }						  
					  
            if ( isNumeric ( X ) ) {
				
				arr_result['Animation_Oblaka']['X'] = X 
				
			}
				      

					  Next_func ()

	} //try
	
	catch (e) {  console.log ( e ); Error_Game ( 'Img_Oblaka' , e ) }
	
	
	}



  function Img_Ozero (){ ////Озеро
	
  try {
	     
		 function Next_func (){ img_Animation_Suhoe_Ozero () }
		 
		
	   
	      if( arr_result['Animation_Ozero'] == undefined ||  arr_result['Animation_Ozero']['Animation_Status'] == 'StopAnimation' ){
			  
			  

	          Next_func ();
		 
		      return false ;
		
		    } 

		  //if ( arr_result['Animation_Ozero']['Animation_Status'] == 'StartAnimation' ){
 
		//	  arr_result['Animation_Ozero']['X'] = X_st + ( st / 2 ) ;
	 
	     //     arr_result['Animation_Ozero']['Y'] = kls  ;

		//  }

            
	      arr_result['Animation_Ozero']['Animation_Status'] = 'AnimationInProgress'; 
		  
		  let W1 = obj_img['Ozero']['width_canvas'] ;
		  
		    obj_canvas['Canvas_Field_Context'].save ();
               
			obj_canvas['Canvas_Field_Context'].translate ( arr_result['Animation_Ozero']['X'] ,  arr_result['Animation_Ozero']['Y'] );
                   
				   
            obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas['Canvas_Suhoe_Ozero'] , - W1 / 2 ,  0 );

		    obj_canvas['Canvas_Field_Context'].restore ();
		  
		  
		  
			obj_canvas['Canvas_Field_Context'].save ();
			
			obj_canvas['Canvas_Field_Context'].globalAlpha = arr_result['Animation_Ozero']['globalAlpha'];
               
			obj_canvas['Canvas_Field_Context'].translate ( arr_result['Animation_Ozero']['X'] ,  arr_result['Animation_Ozero']['Y'] );
                   
				   
            obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas['Canvas_Ozero'] , - W1 / 2 ,  0 );

		    obj_canvas['Canvas_Field_Context'].restore ();



					  Next_func ()

	} //try
	
	catch (e) {  console.log ( e ); Error_Game ( 'Img_Ozero' , e ) }
	
	
	}
	
	function img_Animation_Suhoe_Ozero () { // Анимация высыхания озера
	
	 try {
	
	      function Next_func (){ Img_Pauk () }
		 
		
	   
	      if( arr_result['Animation_Ozero'] == undefined || arr_result['Level_' + arr_result.Level ]['Animation_Suhoe_Ozero'] == undefined ||  arr_result['Animation_Ozero']['Animation_Status'] == 'StopAnimation' || arr_result['Level_' + arr_result.Level ]['Animation_Suhoe_Ozero']['Animation_Status'] == 'StopAnimation' || arr_result.Zapusk_Play_Game == 'No' ){
			  
			  if ( arr_result['Animation_Ozero'] != undefined && arr_result['Level_' + arr_result.Level ]['Animation_Suhoe_Ozero'] != undefined && arr_result.Zapusk_Play_Game != 'No' && arr_result['Animation_Ozero']['Ozero_Status'] == 'Polnoe' && arr_result['Level_' + arr_result.Level ]['Animation_Dogdy']['Animation_Status'] == 'StopAnimation' ) {
			  
			      let Start_Animation = randomNumber ( 1 , arr_result['Level_' + arr_result.Level ]['Animation_Suhoe_Ozero']['Start_Animation'] );
			 
			      if ( Start_Animation == 5   ){ 
			 
			         arr_result['Level_' + arr_result.Level ]['Animation_Suhoe_Ozero']['Animation_Status'] = 'StartAnimation' 
				 
			        }
			    }

	          Next_func ();
		 
		      return false ;
		
		    } 
			
		   let globalAlpha = arr_result['Animation_Ozero']['globalAlpha'] ,
			
			  Ozero_Status = arr_result['Animation_Ozero']['Ozero_Status'] ,
			  
			  Hag = arr_result['Level_' + arr_result.Level ]['Animation_Suhoe_Ozero']['Hag']

			;
		  

		  if (  arr_result['Level_' + arr_result.Level ]['Animation_Suhoe_Ozero']['Animation_Status'] == 'StartAnimation' ){
 
			  arr_result['Level_' + arr_result.Level ]['Napravlenie_Frog' ]= 'Udivlenie' ; 
			  if (Ozero_Status == 'Polnoe') {
				  
				  Play_Audio ( 'audio_Sliv_Ozera' )

		        }
				
		    }
		  
		   

            
	      arr_result['Level_' + arr_result.Level ]['Animation_Suhoe_Ozero']['Animation_Status'] = 'AnimationInProgress'; 
		
		
		 if ( Ozero_Status == 'Polnoe' ) {
			 
			 if ( globalAlpha == 0 ) {
				 
				 arr_result['Animation_Ozero']['Ozero_Status'] = 'Suhoe';
				 
				 arr_result['Level_' + arr_result.Level ]['Animation_Suhoe_Ozero']['Animation_Status'] = 'StopAnimation';
				 
				 
			    } else {
					
					globalAlpha = Math.round( (globalAlpha  - Hag) * 100) / 100; 
					
				 
					
				}	
					
			} else if ( Ozero_Status == 'Suhoe' ){
				
				if ( globalAlpha == 1 ) {
				 
				 arr_result['Animation_Ozero']['Ozero_Status'] = 'Polnoe';
				 
				 arr_result['Level_' + arr_result.Level ]['Animation_Suhoe_Ozero']['Animation_Status'] = 'StopAnimation';
				 
				 
			    } else {
					
					globalAlpha = Math.round( (globalAlpha + Hag) * 100) / 100;

				 
					
				}	

		    }
			
		if ( isNumeric ( globalAlpha ) ){
			
		 arr_result['Animation_Ozero']['globalAlpha'] = globalAlpha 
		
		}
			
		Next_func ()
		
		
		} //try
	
	catch (e) {  console.log ( e ); Error_Game ( 'img_Animation_Suhoe_Ozero' , e ) }
	
	}



let idTA_Pauk_control = undefined ;

	 function Animation_Pauk_Ukus( ) { //Анимация укуса паука
	 
	         
		 
		      let Num_per = arr_result['Level_' + arr_result.Level ]['Pauk']['Animation_Pauk'].split ('|');

             let a = Num_per [ 1 ] , drag = 1 , str_Poceluy , idTA , 
			  
			  W1 = obj_img['Frog_Ulibka']['width_canvas'] , H1 = obj_img['Frog_Ulibka']['height_canvas'] ,  W2 = obj_img['Frog_Ulibka']['width_img'] ;
			  
			  
			  let TU = arr_result['Level_' + arr_result.Level ]['Pauk']['Karta_Ukusov_Pauk'].length ;
						  
						     
					     
						
				
			 let Tochka_Ukus = arr_result['Level_' + arr_result.Level ]['Pauk']['Tochka_Ukus_Pauk'] [ TU ].split("|");
			 
			  let mash_ukus_Frog = W1 /  W2 ;
			 
			 let x_ukus = Number ( Tochka_Ukus [ 0 ] ) * mash_ukus_Frog ;
			 
			 let y_ukus = Number ( Tochka_Ukus [ 1 ] ) * mash_ukus_Frog ;


			 arr_result['Level_' + arr_result.Level ]['Pauk']['X_Pauk'] [ a ]  = arr_result['Level_' + arr_result.Level ]['X_Frog'] + W1 ; 
			 
			 arr_result['Level_' + arr_result.Level ]['Pauk']['Y_Pauk'] [ a ]  = arr_result['Level_' + arr_result.Level ]['Y_Frog'] + H1 ;  
	
             function Animation_Body (){
				 
				
	 
	             if( arr_result['Level_' + arr_result.Level ]['Pauk']['Animation_Pauk'].includes('AnimationInProgress')  ) { 
	 
	                  if ( drag == 1 ){ drag = 2;
		 
		                 
						  
						  arr_result['Level_' + arr_result.Level ]['Y_Frog']  = arr_result['Level_' + arr_result.Level ]['Y_Frog'] - 10 ;

		                } else { drag = 1;
		 
		                  
						  
						  arr_result['Level_' + arr_result.Level ]['Y_Frog']  = arr_result['Level_' + arr_result.Level ]['Y_Frog'] + 10 ;
	
		                }

		              idTA = setTimeout( Animation_Body , 1000 / arr_result.fps_animation  );
					  
					  

		            } else {

		              clearTimeout(idTA); 

				
				    arr_result['Level_' + arr_result.Level ]['Pauk']['Karta_Ukusov_Pauk'].push( x_ukus + '|' + y_ukus ) ;
	
		            }
	            }
			
		     Animation_Body ()	
			 
			

            }


function Img_Pauk (){ // Паук   

      try {
		  

	  
	      function Next_func (){ Img_Animation_Frog_Start () }
		  
		 
		  
		  if ( arr_result['Level_' + arr_result.Level ]['Pauk'] == undefined || arr_result['Level_' + arr_result.Level ]['Pauk']['Kolichestvo_Pauk'] == 0  || arr_result.Zapusk_Play_Game == 'No'   ){

	          Next_func ();
		 
		      return false ;
		
		    } 

         // if ( arr_result ['Animation_Frog_Start']['Animation_Frog_Start'] != undefined &&  arr_result ['Animation_Frog_Start']['Animation_Status'] != 'StopAnimation' ){
			 
		//	  Next_func ();
		 
		 //     return false ; 

		 //   }			
	  
	     
	  
	     let  W1 = obj_img['Pauk_1']['width_canvas'] , H1 = obj_img['Pauk_1']['height_canvas'] , W2 = obj_img['Frog_Ulibka']['width_canvas'] , H2 = obj_img['Frog_Ulibka']['height_canvas'] , smena_napravleniya ;
		 
		


		 obj_canvas['Canvas_Pauk_Big_Context'].clearRect ( 0 , 0 , st_fig , st_fig );
		 
		  for (let i = 0 ; i < arr_result['Level_' + arr_result.Level ]['Pauk']['Kolichestvo_Pauk'] ; i++ ){
			  
			  
			  
			      let X_Pauk = arr_result['Level_' + arr_result.Level ]['Pauk']['X_Pauk'] [ i ] ;
			  
	              let Y_Pauk = arr_result['Level_' + arr_result.Level ]['Pauk']['Y_Pauk'] [ i ] ;
				  
				  let W_Pauk_Zoom = arr_result['Level_' + arr_result.Level ]['Pauk']['W_Pauk_Zoom'] [ i ]; 
				  
				  let H_Pauk_Zoom = arr_result['Level_' + arr_result.Level ]['Pauk']['H_Pauk_Zoom'] [ i ];
				  
				  let x_end , y_end , x_start , y_start ;
   
                  smena_napravleniya = randomNumber ( 1 , 20 );
				  
				  if (arr_result['Level_' + arr_result.Level ]['Pauk']['Karta_Ukusov_Pauk'].length >= arr_result['Level_' + arr_result.Level ]['Pauk']['Max_Kolichestvo_Ukusov_Pauk']) {
					  
					  //Событие когда количество укусов превышает лимит и лягушка выходит из уровня с обнулением и началом уровня сначала. Окончание в Img_End
					  
					  arr_result['Level_' + arr_result.Level ]['Status_Level'] = 'Vihod_S_Obnuleniem';
					  
					  arr_result['Level_' + arr_result.Level ]['Kto_poymal'] = 'Previhenie_Max_Kolichestvo_Ukusov_Pauk';

				  
				   }  
				   
				    else if ( arr_result['Level_' + arr_result.Level ]['Pauk']['Napravlenie_Pauk'] [ i ] == 'Poymana'  ){
				   
				   
				   
				   
				   
				    }
				   
				   
				   else if ( arr_result['Level_' + arr_result.Level ]['Pauk']['Napravlenie_Pauk'] [ i ] == 'PaukUkus' && arr_result['Level_' + arr_result.Level ]['Pauk']['Animation_Pauk'].includes('StopAnimation') ){
					   
					   //alert ('Окончание анимации');
					   // Окончание анимации
					   
					
					   
					   arr_result['Level_' + arr_result.Level ]['Napravlenie_Frog'] = 'Zlaya';  //Открыть
				   
				       arr_result['Level_' + arr_result.Level ]['Pauk']['Napravlenie_Pauk'] [ i ] = 'vibor';
					   
					   arr_result['Level_' + arr_result.Level ]['Pauk']['Variant_Vibor_Pauk'] [ i ] = 1 ;
					   
					  

						arr_result['Level_' + arr_result.Level ]['Y_Frog'] = Load_Rezerv_Level_Base ( 'Y_Frog' );
						
						
						
						arr_result['Level_' + arr_result.Level ]['Pauk']['Animation_Pauk'] = '';
				        
						//Greate_Pause_Play_Button (); // Восстанавливаем управление лягушкой
				   
				   }  else if ( arr_result['Level_' + arr_result.Level ]['Pauk']['Napravlenie_Pauk'] [ i ] == 'PaukUkus' && arr_result['Level_' + arr_result.Level ]['Pauk']['Animation_Pauk'].includes('AnimationInProgress') ){
					   
					   //Анимация показывается
					 // alert ( 'Анимация показывается' );

					  
					 
					  if ( !idTA_Pauk_control ) { 
						  
					  
						 
                          idTA_Pauk_control = setTimeout ( function () { 
			 
			              clearTimeout( idTA_Pauk_control ); idTA_Pauk_control = undefined;
			 
			 
			              arr_result['Level_' + arr_result.Level ]['Pauk']['Animation_Pauk'] = 'StopAnimation' 
			 
			            } , 500 ); // Перезапускаем анимацию	в случаях паузы или перезагрузки страницы во время анимации				 
					  
					  } else { 
					  
					  }
					 

					   
				  }  else if ( arr_result['Level_' + arr_result.Level ]['Pauk']['Napravlenie_Pauk'] [ i ] == 'PaukUkus' 
				  
				  
				  && arr_result['Level_' + arr_result.Level ]['Pauk']['Animation_Pauk'].includes('StartAnimation') ){
					  
					  // Событие анимирования укуса паука
					  
					  Play_Audio ( 'audio_Ukus' )

					   arr_result['Level_' + arr_result.Level ]['Napravlenie_Frog']= 'Udivlenie' ; 	
					  
					  arr_result['Level_' + arr_result.Level ]['Pauk']['Animation_Pauk'] = 'AnimationInProgress|' + i; 
					  
					  Animation_Pauk_Ukus( );
					  
					  
					  
					  
					  // Запускаем анимацию
					  
					  
					  idTA_Pauk_control = setTimeout ( function () { 
			 
			              clearTimeout( idTA_Pauk_control ); idTA_Pauk_control = undefined;
			 
			 
			              arr_result['Level_' + arr_result.Level ]['Pauk']['Animation_Pauk'] = 'StopAnimation' 
			 
			            } , 500 );
			 
			         Play_Audio ( 'audio_Ouch' );
					 

					 //Delete_Pause_Play_Button ();

					 //alert ('Запускаем анимацию');
				  

					  
				  }		
				  else if ( arr_result['Level_' + arr_result.Level ]['Pauk']['Napravlenie_Pauk'] [ i ] == 'vibor' ) { //Выбор
					  
					  if ( arr_result['Level_' + arr_result.Level ]['Pauk']['Variant_Vibor_Pauk'] [ i ] == 1 ) {
						  
						  
						 
						  

	                     x_start = randomNumber ( st_fig / 2 + st_fig / 4 , st_fig  ) ; 
						 
						
						 
						 y_start = st_fig / 2 + st_fig / 10  ;
					  
					 
					 
					 
					     x_end = randomNumber ( st_fig / 2  ,  st_fig / 2 + st_fig / 4  ) ;



						 y_end = randomNumber ( st_fig / 2 + st_fig / 4   , st_fig - H1  );
					  
					    } else {
							
					     x_start = arr_result['Level_' + arr_result.Level ]['Pauk']['X_End_Pauk_Vibor'] [ i ] ; 
						 
						 y_start = arr_result['Level_' + arr_result.Level ]['Pauk']['Y_End_Pauk_Vibor'] [ i ] ;
						 
	
						  x_end = arr_result['Level_' + arr_result.Level ]['X_Frog'] ; 
						 
						 
						  y_end =  arr_result['Level_' + arr_result.Level ]['Y_Frog'] ;
							
							
							
						}
					  
					  arr_result['Level_' + arr_result.Level ]['Pauk']['X_End_Pauk_Vibor'] [ i ] = x_end ;
					  
					  arr_result['Level_' + arr_result.Level ]['Pauk']['Y_End_Pauk_Vibor'] [ i ] = y_end ;
					  
					  arr_result['Level_' + arr_result.Level ]['Pauk']['W_Pauk_Zoom'] [ i ] = 0 ;
					  
					  arr_result['Level_' + arr_result.Level ]['Pauk']['H_Pauk_Zoom'] [ i ] = 0 ;
			  
			   
					  
					  
					  
					  
					   arr_result['Level_' + arr_result.Level ]['Pauk']['X_Start_Pauk_Vibor'] [ i ] = arr_result['Level_' + arr_result.Level ]['Pauk']['X_Pauk'] [ i ] = x_start ;
					  
					   arr_result['Level_' + arr_result.Level ]['Pauk']['Y_Start_Pauk_Vibor'] [ i ] = arr_result['Level_' + arr_result.Level ]['Pauk']['Y_Pauk'] [ i ] = y_start ;
					  
					  

	                  let radius =  Math.sqrt( Math.abs( x_start - x_end ) *  Math.abs( x_start - x_end )  +  Math.abs( y_start - y_end )  *  Math.abs( y_start - y_end )  );

			          let ugol_arc = Math.asin( Math.abs( y_start - y_end ) / radius ) * 180 / Math.PI;
			 
			          arr_result['Level_' + arr_result.Level ]['Pauk']['Delta_x_Pauk'] [ i ] =  Math.abs( x_start - x_end ) / radius  ;
	  
	                  arr_result['Level_' + arr_result.Level ]['Pauk']['Delta_y_Pauk'] [ i ] =  Math.abs( y_start - y_end ) / radius  ;
			 
			          arr_result['Level_' + arr_result.Level ]['Pauk']['Diagonal_Pauk'] [ i ] = radius ;
					  
					  
					  
					  
					
					      let kol_hagov = radius / arr_result['Level_' + arr_result.Level ]['Pauk']['Hag_Pauk'] [ i ] ;
						  
					      arr_result['Level_' + arr_result.Level ]['Pauk']['Mashtab_Zoom_Pauk'] [ i ] =  ( 100 / kol_hagov ) / 100 ;
						  
					    
	
			          if ( x_end < x_start && y_end < y_start ){

     		             // arr_result['Level_' + arr_result.Level ]['Ugol_Pauk'] [ i ] = ugol_arc + 30 ;
					 
				          arr_result['Level_' + arr_result.Level ]['Pauk']['Delta_x_Pauk'] [ i ] =  arr_result['Level_' + arr_result.Level ]['Pauk']['Delta_x_Pauk'] [ i ] * -1;
					 
				          arr_result['Level_' + arr_result.Level ]['Pauk']['Delta_y_Pauk'] [ i ] =  arr_result['Level_' + arr_result.Level ]['Pauk']['Delta_y_Pauk'] [ i ] * -1 ;
					  
					      arr_result['Level_' + arr_result.Level ]['Pauk']['Img_L_R_Pauk'] [ i ] = 'L'; 
	
				        }// 1 верхняя левая четверть

                        else if ( x_end < x_start && y_end > y_start ){ 
				
				       //  arr_result['Level_' + arr_result.Level ]['Ugol_Pauk'] [ i ] = - ugol_arc + 30 ;
				  
				         arr_result['Level_' + arr_result.Level ]['Pauk']['Delta_x_Pauk'] [ i ] =  arr_result['Level_' + arr_result.Level ]['Pauk']['Delta_x_Pauk'] [ i ] * -1;
					  
					     arr_result['Level_' + arr_result.Level ]['Pauk']['Img_L_R_Pauk'] [ i ] = 'L' ;
				  
				        } // 2 Нижняя левая четверть

                        else if ( x_end > x_start && y_end > y_start ){ 
				
				       //  arr_result['Level_' + arr_result.Level ]['Ugol_Pauk'] [ i ] = Math.round( ugol_arc ) ;
					 
					     arr_result['Level_' + arr_result.Level ]['Pauk']['Img_L_R_Pauk'] [ i ] = 'R' ;
	
				        } //3 Нижняя правая четверть

                        else if ( x_end > y_start && y_end < y_start ){ 
				
				       //  arr_result['Level_' + arr_result.Level ]['Ugol_Pauk'] [ i ] = Math.round( 90 - ugol_arc + 270 ) ;
				 
				         arr_result['Level_' + arr_result.Level ]['Pauk']['Delta_y_Pauk'] [ i ] = arr_result['Level_' + arr_result.Level ]['Pauk']['Delta_y_Pauk'] [ i ] * -1;
		
				         arr_result['Level_' + arr_result.Level ]['Pauk']['Img_L_R_Pauk'] [ i ] = 'R';
					  
				        }  //4 Верхняя правая четверть
					
					

				     arr_result['Level_' + arr_result.Level ]['Pauk']['Napravlenie_Pauk'] [ i ] = 'start'
				
				    } else {
						
 
						  
						  if ( arr_result['Level_' + arr_result.Level ]['Pauk']['Napravlenie_Pauk'] [ i ] == 'PaukUkus'  ){
					  
					           // Событие анимирования укуса паука паук стоит на месте

							
							} else 
								
							 if ( arr_result['Level_' + arr_result.Level ]['Pauk']['Variant_Vibor_Pauk'] [ i ] == 2 
							 
							 && arr_result['Level_' + arr_result.Level ]['Pauk']['X_Pauk'] [ i ] < arr_result['Level_' + arr_result.Level ]['Pauk']['X_End_Pauk_Vibor'] [ i ] 
							 
							 && arr_result['Level_' + arr_result.Level ]['Pauk']['X_Pauk'] [ i ] > W1 / 2
							 
							 && arr_result['Level_' + arr_result.Level ]['Pauk']['Y_Pauk'] [ i ] > arr_result['Level_' + arr_result.Level ]['Pauk']['Y_End_Pauk_Vibor'] [ i ] 
							 
							 && arr_result['Level_' + arr_result.Level ]['Pauk']['Y_Pauk'] [ i ] < st_fig - H1

							 && arr_result['Level_' + arr_result.Level ]['Pauk']['Animation_Pauk'] == ''

							 ) {

								          arr_result['Level_' + arr_result.Level ]['Pauk']['Napravlenie_Pauk'] [ i ] = 'PaukUkus';
								   
								          arr_result['Level_' + arr_result.Level ]['Pauk']['Animation_Pauk'] = 'StartAnimation';

							 
							 } else
								 
							 if (  arr_result['Level_' + arr_result.Level ]['Pauk']['Variant_Vibor_Pauk'] [ i ] == 1 && 
							 
							 arr_result['Level_' + arr_result.Level ]['Pauk']['X_Pauk'] [ i ] < arr_result['Level_' + arr_result.Level ]['Pauk']['X_End_Pauk_Vibor'] [ i ] 
							 
							 
							 && arr_result['Level_' + arr_result.Level ]['Pauk']['Y_Pauk'] [ i ] > arr_result['Level_' + arr_result.Level ]['Pauk']['Y_End_Pauk_Vibor'] [ i ]
							 
							 
							 ) {
								 
								 // События полета комара от стартовой до конечной точки
			
								 arr_result['Level_' + arr_result.Level ]['Pauk']['Napravlenie_Pauk'] [ i ]	= 'vibor';
								 arr_result['Level_' + arr_result.Level ]['Pauk']['Variant_Vibor_Pauk'] [ i ] = 2;
								 
								 
							 }

							else if (   ( arr_result['Level_' + arr_result.Level ]['Pauk']['X_Pauk'] [ i ] >= st_fig -  W1/2 || arr_result['Level_' + arr_result.Level ]['Pauk']['X_Pauk'] [ i ] <= W1/2 || arr_result['Level_' + arr_result.Level ]['Pauk']['Y_Pauk'] [ i ] >= st_fig - H1/2 || arr_result['Level_' + arr_result.Level ]['Pauk']['Y_Pauk'] [ i ] <= H1/2 )  ) {
						  
						     //Паук вышел за пределы поля
							 
							 

						      arr_result['Level_' + arr_result.Level ]['Pauk']['Napravlenie_Pauk'] [ i ]	= 'vibor';
							  
							  arr_result['Level_' + arr_result.Level ]['Pauk']['Variant_Vibor_Pauk'] [ i ] = 1;
							
							
					        //} else if ( smena_napravleniya == 1  ){ 
						  
						  // Случайное изменение направления движения паука
						  
						  
						      //arr_result['Level_' + arr_result.Level ]['Pauk']['Napravlenie_Pauk'] [ i ]	= 'vibor' 
						  
						    } else { 
				
				              X_Pauk =  arr_result['Level_' + arr_result.Level ]['Pauk']['X_Pauk'] [ i ] + arr_result['Level_' + arr_result.Level ]['Pauk']['Hag_Pauk'] [ i ] * arr_result['Level_' + arr_result.Level ]['Pauk']['Delta_x_Pauk'] [ i ]  ;
	  
	                          Y_Pauk =  arr_result['Level_' + arr_result.Level ]['Pauk']['Y_Pauk'] [ i ] + arr_result['Level_' + arr_result.Level ]['Pauk']['Hag_Pauk'] [ i ] *  arr_result['Level_' + arr_result.Level ]['Pauk']['Delta_y_Pauk'] [ i ] ;
							  
							  
							  if ( arr_result['Level_' + arr_result.Level ]['Pauk']['Variant_Vibor_Pauk'] [ i ] == 1 ) {
								  
								  if (  X_Pauk > st_fig / 2 ) {
							  
							          W_Pauk_Zoom = arr_result['Level_' + arr_result.Level ]['Pauk']['W_Pauk_Zoom'] [ i ] + W1 * arr_result['Level_' + arr_result.Level ]['Pauk']['Mashtab_Zoom_Pauk'] [ i ]; 
				  
				                       H_Pauk_Zoom =  arr_result['Level_' + arr_result.Level ]['Pauk']['H_Pauk_Zoom'] [ i ] + H1 * arr_result['Level_' + arr_result.Level ]['Pauk']['Mashtab_Zoom_Pauk'] [ i ];
								 
							        }
								 
							    } else {
									
								 W_Pauk_Zoom =  W1 ; 
				  
				                 H_Pauk_Zoom = H1 ;
			
								}
							   
							 
							  
							  
							  if ( isNumeric( W_Pauk_Zoom ) && isNumeric( H_Pauk_Zoom ) ){ 
		
		                          arr_result['Level_' + arr_result.Level ]['Pauk']['W_Pauk_Zoom'] [ i ] = W_Pauk_Zoom ;

		                          arr_result['Level_' + arr_result.Level ]['Pauk']['H_Pauk_Zoom'] [ i ] = H_Pauk_Zoom ;
							  
                               }
							  

					         if ( isNumeric( X_Pauk ) && isNumeric( Y_Pauk ) ){ 
		
		                          arr_result['Level_' + arr_result.Level ]['Pauk']['X_Pauk'] [ i ] = X_Pauk ;

		                          arr_result['Level_' + arr_result.Level ]['Pauk']['Y_Pauk'] [ i ] = Y_Pauk ;
							  
                               }	
					        }
                    //}

				}
                    if ( arr_result['Level_' + arr_result.Level ]['Pauk']['Napravlenie_Pauk'] [ i ] == 'Poymana' || arr_result.Zapusk_Play_Game == 'No' ){
						
						//Не рисуем паука если он пойман или игра остановлена
						
					} else{
                  
				      obj_canvas['Canvas_Pauk_Big_Context'].save();

                      obj_canvas['Canvas_Pauk_Big_Context'].translate( arr_result['Level_' + arr_result.Level ]['Pauk']['X_Pauk'] [ i ] , arr_result['Level_' + arr_result.Level ]['Pauk']['Y_Pauk'] [ i ] );
				   
                     // obj_canvas['Canvas_Pauk_Big_Context'].rotate( ( arr_result['Level_' + arr_result.Level ]['Ugol_Pauk'] [ i ] ) * Math.PI  / 180 );
					  
					  
					  let W1_Zoom = arr_result['Level_' + arr_result.Level ]['Pauk']['W_Pauk_Zoom'] [ i ] ;
					  
					  let H1_Zoom = arr_result['Level_' + arr_result.Level ]['Pauk']['H_Pauk_Zoom'] [ i ] ;
				   
				  
				      if (  arr_result['Level_' + arr_result.Level ]['Pauk']['L_R_B_Pauk'] [ i ] == 1  ){ 
				  
				         arr_result['Level_' + arr_result.Level ]['Pauk']['L_R_B_Pauk'] [ i ] = 2;
				   
				         if ( arr_result['Level_' + arr_result.Level ]['Pauk']['Img_L_R_Pauk'] [ i ] == 'L' ){ 
					 
					          obj_canvas['Canvas_Pauk_Big_Context'].drawImage ( obj_canvas['Canvas_Pauk_1'] , 0 , 0 ,  W1 , H1 , - W1_Zoom / 2 , - H1_Zoom / 2 , W1_Zoom , H1_Zoom );
						   
					        } else{
							
						       obj_canvas['Canvas_Pauk_Big_Context'].drawImage ( obj_canvas['Canvas_Pauk_1'] , 0 , 0 ,  W1 , H1 , - W1_Zoom / 2 , - H1_Zoom / 2 , W1_Zoom , H1_Zoom   );
						   
						    }
							
				        } else {  
					
					      arr_result['Level_' + arr_result.Level ]['Pauk']['L_R_B_Pauk'] [ i ] = 1;
				   
				          if ( arr_result['Level_' + arr_result.Level ]['Pauk']['Img_L_R_Pauk'] [ i ] == 'L' ){
					 
					          obj_canvas['Canvas_Pauk_Big_Context'].drawImage ( obj_canvas['Canvas_Pauk_2'] , 0 , 0 ,  W1 , H1 , - W1_Zoom / 2 , - H1_Zoom / 2 , W1_Zoom , H1_Zoom   );
						   
					        } else{
							
							obj_canvas['Canvas_Pauk_Big_Context'].drawImage ( obj_canvas['Canvas_Pauk_2'] , 0 , 0 ,  W1 , H1 , - W1_Zoom / 2 , - H1_Zoom / 2 , W1_Zoom , H1_Zoom   );
						   
						    }
					 
	                    }
						
						
					 
                      obj_canvas['Canvas_Pauk_Big_Context'].restore();
					  
				    } // Poymana
					
					
				//	obj_canvas['Canvas_Pauk_Big_Context'].beginPath();
		           
                //    obj_canvas['Canvas_Pauk_Big_Context'].arc( arr_result['Level_' + arr_result.Level ]['Pauk']['X_Start_Pauk_Vibor'] [ i ] , arr_result['Level_' + arr_result.Level ]['Pauk']['Y_Start_Pauk_Vibor'] [ i ]  , 5 , 0, 2*Math.PI, false);
					
				//	obj_canvas['Canvas_Pauk_Big_Context'].closePath();
					
				//	obj_canvas['Canvas_Pauk_Big_Context'].fillStyle = 'rgba( 0 , 0 , 0 , 1 )';
						 
						 
			
	              //        obj_canvas['Canvas_Pauk_Big_Context'].fill();

                  //  obj_canvas['Canvas_Pauk_Big_Context'].beginPath();					

                  //  obj_canvas['Canvas_Pauk_Big_Context'].arc( arr_result['Level_' + arr_result.Level ]['Pauk']['X_End_Pauk_Vibor'] [ i ] , arr_result['Level_' + arr_result.Level ]['Pauk']['Y_End_Pauk_Vibor'] [ i ]  , 5 , 0, 2*Math.PI, false); 
					
					//obj_canvas['Canvas_Pauk_Big_Context'].closePath();

 					
						 
						// obj_canvas['Canvas_Pauk_Big_Context'].fillStyle = 'rgba(255 , 0 , 0 , 1 )';
						 
						 
			
	                   //   obj_canvas['Canvas_Pauk_Big_Context'].fill();
	              
				  
				  
				  
				  
				  if ( i == arr_result['Level_' + arr_result.Level ]['Pauk']['Kolichestvo_Pauk'] - 1 ) {

			        

	                 obj_canvas['Canvas_Holst_Context'].drawImage ( obj_canvas['Canvas_Pauk_Big'] , 0 , 0 );

	                  Next_func ()
	  
	                }
				

	        }//for

        } //try
	
	       catch (e) { console.log ( e );  Error_Game ( 'Img_Pauk' , e ) }

	}          	

 
 
 function Img_Animation_Frog_Start (){ //первый выход лягушки

 function Next_func (){ Img_Animation_Frog_Prygok_v_vodu () } 
	 
	 try {   
	 
	    
	      
		 if( arr_result ['Animation_Frog_Start'] == undefined || arr_result ['Animation_Frog_Start']['Animation_Status'] == 'StopAnimation' ){

	          Next_func ();

		      return false ;
		
		    }  
			

	     let W1 = obj_img['Frog_Ulibka']['width_canvas'] , H1 =  obj_img['Frog_Ulibka']['height_canvas'] ,  W1_Zoom = arr_result ['Animation_Frog_Start']['W_Frog_Zoom'] , H1_Zoom = arr_result ['Animation_Frog_Start']['H_Frog_Zoom'] ,

         X = arr_result['Level_' + arr_result.Level ]['X_Frog'] ,

		 X_END = arr_result ['Animation_Frog_Start']['X_END'] ,

         Y = arr_result['Level_' + arr_result.Level ]['Y_Frog']   ,
		 
		  

         Hag = arr_result ['Animation_Frog_Start']['Hag'] ,		 
		 
		 VN = arr_result ['Animation_Frog_Start']['VN'] ,

         audio_speed = arr_result ['Animation_Frog_Start']['Audio_speed'] ,

         Hag_Frog_animation = arr_result ['Animation_Frog_Start']['Hag_Frog_animation']	 
		 
		 ;
          
		  

 		  if(  arr_result ['Animation_Frog_Start']['Animation_Status'] == 'StartAnimation' ){    

		       arr_result.Zapusk_Play_Game = 'No' ;
			   
			 X_END = arr_result ['Animation_Frog_Start']['X_END'] = arr_result['Level_' + arr_result.Level ]['X_Frog'] * machtab_fig ;

			 X = 0;
			 
			 Y = arr_result['Level_' + arr_result.Level ]['Y_Frog'] * machtab_fig  ;

			 Hag = arr_result ['Animation_Frog_Start']['Hag'] * machtab_fig  ;

			 Hag_Frog_animation = arr_result ['Animation_Frog_Start']['Hag_Frog_animation'] = ( X_END + X_st - X * machtab_fig ) / Hag ;
			 
			 
			 
			  arr_result ['Animation_Frog_Start']['Animation_Status'] = 'AnimationInProgress' ;
		 
		    }
		  
		 
		 
		 W1_Zoom = W1_Zoom + ( W1 * machtab_fig ) /  Hag;
		 
		 H1_Zoom = H1_Zoom + ( H1 * machtab_fig ) /  Hag;
		 
		 

            // console.log ( X + '  ' + Number ( X_END + X_st ) );
			 
		 if ( X  < X_END + X_st ) {
			 
			fps = arr_result ['Animation_Frog_Start']['Fps'];
		 
		      X = X  +  Hag_Frog_animation ;
			  
			  
		  
		      if ( VN == 1){ VN = 2 ;
			  
			      Y = Y + Hag ; 

			   } else{ VN = 1 ;

			      Y = Y - Hag ;			 

			   }

              arr_result ['Animation_Frog_Start']['VN'] = VN ;
		
	
		  
		  if ( isNumeric( W1_Zoom ) && isNumeric( H1_Zoom ) ){
			  
			     arr_result ['Animation_Frog_Start']['W_Frog_Zoom'] = W1_Zoom ; 

				 arr_result ['Animation_Frog_Start']['H_Frog_Zoom'] = H1_Zoom ; 

			    }
		  
		  
		  if ( isNumeric( X ) && isNumeric( Y ) ){
			  
			    
			
			     arr_result['Level_' + arr_result.Level ]['X_Frog'] = X ;

			     arr_result['Level_' + arr_result.Level ]['Y_Frog'] = Y ;
				 
			    }
		
		    Play_Audio ( 'audio_Jump' , audio_speed ) ;
		

		    obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas ['Canvas_Frog_Ulibka'  ] , 0 , 0 , W1 , H1 , X  - ( W1 * machtab_fig ) / 2  , ( Y  - ( H1 * machtab_fig ) / 2 ) + Y_st , W1_Zoom  , H1_Zoom  ); 
		

		} else {
			
			obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas ['Canvas_Frog_Ulibka'  ] , 0 , 0 , W1 , H1 , X  - ( W1 * machtab_fig ) / 2  , ( Y  - ( H1 * machtab_fig ) / 2 ) + Y_st ,  W1 * machtab_fig  , H1 * machtab_fig  ); 
			
			
		  arr_result['Level_' + arr_result.Level ]['X_Frog'] = Load_Rezerv_Level_Base ( 'X_Frog' );
			
		  arr_result['Level_' + arr_result.Level ]['Y_Frog'] = Load_Rezerv_Level_Base ( 'Y_Frog' ) ;
			
		  arr_result ['Animation_Frog_Start']['Animation_Status'] = 'StopAnimation' ;
		   
		  
		  
		 arr_result ['Animation_Frog_Start']['Zapusk_Frog'] = 'Yes' ;


		 setTimeout ( function (){
			  
			 
		  
		     arr_result.Zapusk_Play_Game = 'Yes'	;
		  
		  
			
			
		   if ('ontouchstart' in window) {

				  Field.addEventListener('touchstart', handleStart ,{passive:false});
		  
		        }else{
				  
				  Field.addEventListener('mousedown', handleStart ,{passive:false});
		  
		        }
		   
		      // document.addEventListener('keydown',  handleStart_board ,{passive:false});

		           Play_Audio ( 'audio_Frog' ) ;

                    
					
					//Запускаем анимацию хэлпа
					
					if( arr_result ['Animation_Help'] != undefined && arr_result ['Animation_Help']['Help_Closed'] == 'Open' ) { 
 
						
			          idTH =  setTimeout ( function () {  arr_result ['Animation_Help']['Animation_Status'] = 'StartAnimation' } ,  arr_result ['Animation_Help']['Help_Time_Start'] )
					  
					}

		
	        } , arr_result ['Animation_Frog_Start']['Time_Zapusk_Game']  );
		
		}		

		  
		 
		  
		  
		  Next_func ();


  } //try
	
	       catch (e) { console.log ( e );  Error_Game ( 'Img_Animation_Frog_Start' , e ) }



}
 
 
 
 
 
 
 
 
 function Img_Animation_Frog_Prygok_v_vodu (){ //Анимация прыжок другой лягушки в озеро
	 
	 function Next_func (){ Img_Animation_DarkVeyder_Prygok_v_vodu () } 
	 
	 try {   
	      if( arr_result['Level_' + arr_result.Level ]['Animation_Frog_Prygok_v_vodu'] == undefined  || arr_result['Level_' + arr_result.Level ]['Animation_Frog_Prygok_v_vodu']['Animation_Status'] == 'StopAnimation' || arr_result.Zapusk_Play_Game == 'No' ){
			  
			  if ( arr_result['Level_' + arr_result.Level ]['Animation_Frog_Prygok_v_vodu'] != undefined && arr_result.Zapusk_Play_Game != 'No' ) {
			  
			      let Start_Animation = randomNumber ( 1 , arr_result['Level_' + arr_result.Level ]['Animation_Frog_Prygok_v_vodu']['Start_Animation'] );
			 
			      if ( Start_Animation == 5   ){ 
			 
			         arr_result['Level_' + arr_result.Level ]['Animation_Frog_Prygok_v_vodu']['Animation_Status'] = 'StartAnimation' 
				 
			        }
			    }
			  
			  

	          Next_func ();
		 
		      return false ;
		
		    } 

              if ( arr_result['Level_' + arr_result.Level ]['Animation_Frog_Prygok_v_vodu']['Animation_Status'] == 'StartAnimation' ){
				  
				 arr_result['Level_' + arr_result.Level ]['Animation_Frog_Prygok_v_vodu']['X_Frog_Prigok'] = arr_result.W_win ;
			 
			
			     arr_result['Level_' + arr_result.Level ]['Animation_Frog_Prygok_v_vodu']['Y_Frog_Prigok'] = kls ;
				  
				  
				  
			  }		

             arr_result['Level_' + arr_result.Level ]['Animation_Frog_Prygok_v_vodu']['Animation_Status'] = 'AnimationInProgress';			  
			
			 let W1 = obj_img['Frog_Ulibka_Left']['width_canvas'] , H1 =  obj_img['Frog_Ulibka_Left']['height_canvas'] , W2 = obj_img['Kaply']['width_canvas'] , H2 =  obj_img['Kaply']['height_canvas'] ,  W3 = obj_img['Udar']['width_canvas'] , H3 =  obj_img['Udar']['height_canvas'] ,  W4 = obj_img['Ozero']['width_canvas'] ,
			 
			 X = arr_result['Level_' + arr_result.Level ]['Animation_Frog_Prygok_v_vodu']['X_Frog_Prigok'] ,
			 
			 Y = arr_result['Level_' + arr_result.Level ]['Animation_Frog_Prygok_v_vodu']['Y_Frog_Prigok'] ,
			 
			 Hag = arr_result['Level_' + arr_result.Level ]['Animation_Frog_Prygok_v_vodu']['Hag'] ,

             VN = arr_result['Level_' + arr_result.Level ]['Animation_Frog_Prygok_v_vodu']['VN'] ,

             audio_speed = arr_result['Level_' + arr_result.Level ]['Animation_Frog_Prygok_v_vodu']['Audio_speed']	;
			 
		 if ( X >  arr_result['Animation_Ozero']['X'] + obj_img['Ozero']['width_canvas'] / 2  ) {
		 
		      X = X - Hag * machtab_fig ;
		  
		      if ( VN == 1){  VN = 2 ;
			  
			      Y = Y  + Hag * machtab_fig ; 

			   } else { VN = 1 ;

                  Y = Y - Hag * machtab_fig ;
			   }
			 
			 Play_Audio ( 'audio_Jump' , audio_speed ) ;
			
			

		      obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas [ 'Canvas_Frog_Ulibka_Left' ] , 0 , 0 , W1 , H1 ,

			  X  - ( W1 * machtab_fig ) / 2 ,

			  ( Y   - ( H1 * machtab_fig ) / 2 ) , 
			  
			  W1 * machtab_fig , H1 * machtab_fig );
			  
			  
			  arr_result['Level_' + arr_result.Level ]['Animation_Frog_Prygok_v_vodu']['VN'] = VN ;
			
             if ( isNumeric( X ) && isNumeric( Y ) ){
			
			     arr_result['Level_' + arr_result.Level ]['Animation_Frog_Prygok_v_vodu']['X_Frog_Prigok'] = X ;

			     arr_result['Level_' + arr_result.Level ]['Animation_Frog_Prygok_v_vodu']['Y_Frog_Prigok'] = Y ;
				 
			    }

			} else {
				
			  fps = arr_result['Level_' + arr_result.Level ]['Animation_Frog_Prygok_v_vodu']['Fps'] ;
			  
			  if ( arr_result['Animation_Ozero'] != undefined && arr_result['Animation_Ozero']['Ozero_Status'] == 'Suhoe' ) {
				  
				  obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas [ 'Canvas_Udar' ] , 0 , 0 , W3 , H3 , arr_result['Animation_Ozero']['X'] + W4 / 4 - ( W3 * machtab_fig ) / 2 , Y   - ( H3 * machtab_fig ) / 2 , W3* machtab_fig , H3* machtab_fig );
			  
			     Play_Audio ( 'audio_Cpok' ) ;
				 
				 Play_Audio ( 'audio_Oh' )

			    } else {

			 
			     obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas [ 'Canvas_Kaply' ] , 0 , 0 , W2 , H2 , arr_result['Animation_Ozero']['X'] + W4 / 4 - ( W2 * machtab_fig ) / 2 , Y   - ( H2 * machtab_fig ) / 2 , W2* machtab_fig , H2* machtab_fig );
			  
			     Play_Audio ( 'audio_Bulk' ) 
				 
				}
			  
			  
			  arr_result['Level_' + arr_result.Level ]['Animation_Frog_Prygok_v_vodu']['X_Frog_Prigok'] = arr_result.W_win ;
			 
			
			 arr_result['Level_' + arr_result.Level ]['Animation_Frog_Prygok_v_vodu']['Y_Frog_Prigok'] = kls ;
			 
			 
			 

			  arr_result['Level_' + arr_result.Level ]['Animation_Frog_Prygok_v_vodu']['Animation_Status'] = 'StopAnimation';
	
			}

			
			Next_func ()
			
	 } //try
	
	       catch (e) { console.log ( e );  Error_Game ( 'Img_Animation_Frog_Prygok_v_vodu' , e ) }		
			
			
			
	}
	
	function Img_Animation_DarkVeyder_Prygok_v_vodu (){ //Анимация прыжок Дарк Вейдера в озеро
	 
	 function Next_func (){ Img_Animation_Piano_Prygok_v_vodu () } 
	 
	 try {   
	      if( arr_result['Level_' + arr_result.Level ]['Animation_DarkVeyder_Prygok_v_vodu'] == undefined  || arr_result['Level_' + arr_result.Level ]['Animation_DarkVeyder_Prygok_v_vodu']['Animation_Status'] == 'StopAnimation' || arr_result.Zapusk_Play_Game == 'No' ||  arr_result.Easy_Game == 'Yes' ){
			  
			  if ( arr_result['Level_' + arr_result.Level ]['Animation_DarkVeyder_Prygok_v_vodu'] != undefined && arr_result.Zapusk_Play_Game != 'No' &&  arr_result.Easy_Game != 'Yes' ) {
			  
			      let Start_Animation = randomNumber ( 1 , arr_result['Level_' + arr_result.Level ]['Animation_DarkVeyder_Prygok_v_vodu']['Start_Animation'] );
			 
			      if ( Start_Animation == 5   ){ 
			 
			         arr_result['Level_' + arr_result.Level ]['Animation_DarkVeyder_Prygok_v_vodu']['Animation_Status'] = 'StartAnimation' 
				 
			        }
			    }
			  
			  

	          Next_func ();
		 
		      return false ;
		
		    } 

              if ( arr_result['Level_' + arr_result.Level ]['Animation_DarkVeyder_Prygok_v_vodu']['Animation_Status'] == 'StartAnimation' ){
				  
				 arr_result['Level_' + arr_result.Level ]['Animation_DarkVeyder_Prygok_v_vodu']['X_DarkVeyder_Prigok'] = arr_result.W_win ;
			 
			
			     arr_result['Level_' + arr_result.Level ]['Animation_DarkVeyder_Prygok_v_vodu']['Y_DarkVeyder_Prigok'] = kls ;
				  
				Play_Audio ( 'audio_DarkVeyder' ) ;  
				  
			  }		

             arr_result['Level_' + arr_result.Level ]['Animation_DarkVeyder_Prygok_v_vodu']['Animation_Status'] = 'AnimationInProgress';			  
			
			 let W1 = obj_img['DarkVeyder']['width_canvas'] , H1 =  obj_img['DarkVeyder']['height_canvas'] , W2 = obj_img['Kaply']['width_canvas'] , H2 =  obj_img['Kaply']['height_canvas'] ,  W3 = obj_img['Udar']['width_canvas'] , H3 =  obj_img['Udar']['height_canvas'] ,  W4 = obj_img['Ozero']['width_canvas'] ,
			 
			 X = arr_result['Level_' + arr_result.Level ]['Animation_DarkVeyder_Prygok_v_vodu']['X_DarkVeyder_Prigok'] ,
			 
			 Y = arr_result['Level_' + arr_result.Level ]['Animation_DarkVeyder_Prygok_v_vodu']['Y_DarkVeyder_Prigok'] ,
			 
			 Hag = arr_result['Level_' + arr_result.Level ]['Animation_DarkVeyder_Prygok_v_vodu']['Hag'] ,

             VN = arr_result['Level_' + arr_result.Level ]['Animation_DarkVeyder_Prygok_v_vodu']['VN'] ,

             audio_speed = arr_result['Level_' + arr_result.Level ]['Animation_DarkVeyder_Prygok_v_vodu']['Audio_speed']	;
			 
		 if ( X >  arr_result['Animation_Ozero']['X'] + obj_img['Ozero']['width_canvas'] / 2  ) {
		 
		      X = X - Hag * machtab_fig ;
		  
		     if( VN == 1 ) { VN = 2;

		          obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas [ 'Canvas_DarkVeyder' ] , 0 , 0 , W1 , H1 ,

			         X  - ( W1 * machtab_fig ) / 2 ,

			         Y   - ( H1 * machtab_fig ) / 2  , 
			  
			          W1 * machtab_fig , H1 * machtab_fig );

			
			    } else { VN = 1;
				 
				 obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas [ 'Canvas_DarkVeyder' ] , 0 , 0 , W1 , H1 ,

			         X  - ( W1 * machtab_fig ) / 2 ,

			         Y   - ( H1 * machtab_fig ) / 2  , 
			  
			          W1 * machtab_fig - 10 , H1 * machtab_fig - 10 );

			    }
				
				arr_result['Level_' + arr_result.Level ]['Animation_DarkVeyder_Prygok_v_vodu']['VN'] = VN ;


			if ( isNumeric( X ) ){
			
			     arr_result['Level_' + arr_result.Level ]['Animation_DarkVeyder_Prygok_v_vodu']['X_DarkVeyder_Prigok'] = X ;

			    
				 
			    }

			} else {
				
				Play_Audio ( 'audio_DarkVeyder' , 'pause' ) ;
				
			  fps = arr_result['Level_' + arr_result.Level ]['Animation_DarkVeyder_Prygok_v_vodu']['Fps'] ;
			  
			  if ( arr_result['Animation_Ozero'] != undefined && arr_result['Animation_Ozero']['Ozero_Status'] == 'Suhoe' ) {
				  
				  obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas [ 'Canvas_Udar' ] , 0 , 0 , W3 , H3 , arr_result['Animation_Ozero']['X'] + W4 / 4 - ( W3 * machtab_fig ) / 2 , Y   - ( H3 * machtab_fig ) / 2 , W3* machtab_fig , H3* machtab_fig );
			  
			     Play_Audio ( 'audio_Cpok' ) ;
				 
				 Play_Audio ( 'audio_Oh' )

			    } else {

			 
			     obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas [ 'Canvas_Kaply' ] , 0 , 0 , W2 , H2 , arr_result['Animation_Ozero']['X'] + W4 / 4 - ( W2 * machtab_fig ) / 2 , Y   - ( H2 * machtab_fig ) / 2 , W2* machtab_fig , H2* machtab_fig );
			  
			     Play_Audio ( 'audio_Bulk' ) 
				 
				}
			  
			  
			  arr_result['Level_' + arr_result.Level ]['Animation_DarkVeyder_Prygok_v_vodu']['X_DarkVeyder_Prigok'] = arr_result.W_win ;
			 
			
			 arr_result['Level_' + arr_result.Level ]['Animation_DarkVeyder_Prygok_v_vodu']['Y_DarkVeyder_Prigok'] = kls ;
			 
			 
			 

			  arr_result['Level_' + arr_result.Level ]['Animation_DarkVeyder_Prygok_v_vodu']['Animation_Status'] = 'StopAnimation';
	
			}

			
			Next_func ()
			
	 } //try
	
	       catch (e) { console.log ( e );  Error_Game ( 'Img_Animation_DarkVeyder_Prygok_v_vodu' , e ) }		
			
			
			
	}


    function Img_Animation_Piano_Prygok_v_vodu (){ //Анимация прыжок пианино в озеро
	 
	 function Next_func (){ Img_Frog () } 
	 
	 try {   
	      if( arr_result['Level_' + arr_result.Level ]['Animation_Piano_Prygok_v_vodu'] == undefined || arr_result['Level_' + arr_result.Level ]['Animation_Piano_Prygok_v_vodu']['Animation_Status'] == 'StopAnimation' || arr_result.Zapusk_Play_Game == 'No' ||  arr_result.Easy_Game == 'Yes'  ){
			  
			   if ( arr_result['Level_' + arr_result.Level ]['Animation_Piano_Prygok_v_vodu'] != undefined && arr_result.Zapusk_Play_Game != 'No' &&  arr_result.Easy_Game != 'Yes' ) {
			  
			      let Start_Animation = randomNumber ( 1 , arr_result['Level_' + arr_result.Level ]['Animation_Piano_Prygok_v_vodu']['Start_Animation'] );
			 
			      if ( Start_Animation == 5   ){ 
			 
			         arr_result['Level_' + arr_result.Level ]['Animation_Piano_Prygok_v_vodu']['Animation_Status'] = 'StartAnimation' 
				 
			        }
			    }
			  
			  

	          Next_func ();
		 
		      return false ;
		
		    } 
			
		if (arr_result['Level_' + arr_result.Level ]['Animation_Piano_Prygok_v_vodu']['Animation_Status'] == 'StartAnimation' ) {
			
			arr_result['Level_' + arr_result.Level ]['Animation_Piano_Prygok_v_vodu']['X'] = arr_result.W_win ;

			 arr_result['Level_' + arr_result.Level ]['Animation_Piano_Prygok_v_vodu']['Y'] = kls ;

		}

		      arr_result['Level_' + arr_result.Level ]['Animation_Piano_Prygok_v_vodu']['Animation_Status'] = 'AnimationInProgress' ;

			  let W1 = obj_img['Piano']['width_canvas'] , H1 =  obj_img['Piano']['height_canvas'] , W2 = obj_img['Kaply']['width_canvas'] , H2 =  obj_img['Kaply']['height_canvas'] , W3 = obj_img['Udar']['width_canvas'] , H3 =  obj_img['Udar']['height_canvas'] , W4 = obj_img['Ozero']['width_canvas'] ,
			 
			 X = arr_result['Level_' + arr_result.Level ]['Animation_Piano_Prygok_v_vodu']['X'] ,
			 
			 Y = arr_result['Level_' + arr_result.Level ]['Animation_Piano_Prygok_v_vodu']['Y'] ,
			 
			 Hag = arr_result['Level_' + arr_result.Level ]['Animation_Piano_Prygok_v_vodu']['Hag'] ,

             VN = arr_result['Level_' + arr_result.Level ]['Animation_Piano_Prygok_v_vodu']['VN'] ,

             audio_speed = arr_result['Level_' + arr_result.Level ]['Animation_Piano_Prygok_v_vodu']['Audio_speed']	;
			
			
			 
		 if ( X >  arr_result['Animation_Ozero']['X'] + obj_img['Ozero']['width_canvas'] / 2 - Hag * machtab_fig   ) { 
		 
		    
		    
		 
		      X = X - Hag * machtab_fig ;
		  
		      if ( VN == 1){  VN = 2 ;
			  
			      Y = Y  + Hag * machtab_fig ; 

			   } else{ VN = 1 ;

                  Y = Y - Hag * machtab_fig ;
			   }
			 
			 Play_Audio ( 'audio_Piano' , audio_speed ) ;

		      obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas [ 'Canvas_Piano' ] , 0 , 0 , W1 , H1 , X  - ( W1 * machtab_fig ) / 2 , ( Y   - ( H1 * machtab_fig ) / 2 ) , W1 * machtab_fig , H1 * machtab_fig );
			  
			  
			 arr_result['Level_' + arr_result.Level ]['Animation_Piano_Prygok_v_vodu']['VN'] = VN ;
			
             if ( isNumeric( X ) && isNumeric( Y ) ){
			
			     arr_result['Level_' + arr_result.Level ]['Animation_Piano_Prygok_v_vodu']['X'] = X ;

			     arr_result['Level_' + arr_result.Level ]['Animation_Piano_Prygok_v_vodu']['Y'] = Y ;
				 
			    }
				
				

			} else {
				
				 fps = arr_result['Level_' + arr_result.Level ]['Animation_Piano_Prygok_v_vodu']['Fps'] ;
				 
				 
				 
			  if ( arr_result['Animation_Ozero'] != undefined && arr_result['Animation_Ozero']['Ozero_Status'] == 'Suhoe' ) {
				  
				  obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas [ 'Canvas_Udar' ] , 0 , 0 , W3 , H3 , arr_result['Animation_Ozero']['X'] + W4 / 4 - ( W3 * machtab_fig ) / 2 , Y   - ( H3 * machtab_fig ) / 2 , W3* machtab_fig , H3* machtab_fig );
			  
			      Play_Audio ( 'audio_Cpok' ) ;
				  
				 setTimeout ( function (){ Play_Audio ( 'audio_Piano' , 1 ) }, 10 );

			    } else {

			     obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas [ 'Canvas_Kaply' ] , 0 , 0 , W2 , H2 ,  arr_result['Animation_Ozero']['X'] + W4 / 4 - ( W3 * machtab_fig ) / 2 , Y - ( H2 * machtab_fig ) / 2   , W2* machtab_fig , H2* machtab_fig );
			 
			       Play_Audio ( 'audio_Bulk' ) 
				 
				}
			  
			  
			  arr_result['Level_' + arr_result.Level ]['Animation_Piano_Prygok_v_vodu']['X'] = arr_result.W_win ;
			 
			
			 arr_result['Level_' + arr_result.Level ]['Animation_Piano_Prygok_v_vodu']['Y'] = kls ;
			 
			 

			     arr_result['Level_' + arr_result.Level ]['Animation_Piano_Prygok_v_vodu']['Animation_Status'] = 'StopAnimation' ;

			}

			
			Next_func ()
			
	 } //try
	
	       catch (e) { console.log ( e );  Error_Game ( 'Img_Animation_Piano_Prygok_v_vodu' , e ) }		
			
			
			
	}




   
	
 
 
function Img_Frog (){ ////Лягушка
	
  try {
	     
		 function Next_func (){ Img_Muha () }
		 
		
	   
	      
			
			if ( arr_result ['Animation_Frog_Start'] != undefined && arr_result ['Animation_Frog_Start']['Zapusk_Frog'] == 'No' ){
				
			   Next_func ();
		 
		      return false ;
	
			}

         			
		  
	   let  W1 = obj_img [ 'Frog_Ulibka' ]['width_canvas'] , H1 = obj_img [ 'Frog_Ulibka' ]['height_canvas'] , W2 = obj_img [ 'Frog_Yazyk' ]['width_canvas'] , H2 = obj_img [ 'Frog_Yazyk' ]['height_canvas'] ;

			obj_canvas [ 'Canvas_Frog_Big_Context'].clearRect ( 0 , 0 , st_fig , st_fig );

	            obj_canvas [ 'Canvas_Frog_Big_Context'].save();
			 
			     
	 
                obj_canvas [ 'Canvas_Frog_Big_Context'].translate( arr_result['Level_' + arr_result.Level ]['X_Frog'] , arr_result['Level_' + arr_result.Level ]['Y_Frog'] );
				   
                   
				   
				     obj_canvas [ 'Canvas_Frog_Big_Context'].rotate( ( arr_result['Level_' + arr_result.Level ]['Ugol_Frog'] ) * Math.PI  / 180 );  //Открыть
					 
				   
				   if ( arr_result['Level_' + arr_result.Level ]['Napravlenie_Frog'] == 'DoNotShow' ){
				   
				    
				    
				   } else if ( arr_result['Level_' + arr_result.Level ]['Napravlenie_Frog'] == 'Udivlenie' ){
					   
					   obj_canvas [ 'Canvas_Frog_Big_Context'].drawImage ( obj_canvas ['Canvas_Frog_Udivlenie'] , - W1 / 2 , - H1 / 2 );
		
				   } else if ( arr_result['Level_' + arr_result.Level ]['Napravlenie_Frog'] == 'Zlaya' ){
					   
				   obj_canvas [ 'Canvas_Frog_Big_Context'].drawImage ( obj_canvas ['Canvas_Frog_Zlaya'] , - W1 / 2 , - H1 / 2 );
		
				   } else if ( arr_result['Level_' + arr_result.Level ]['Napravlenie_Frog'] == 'Yazyk' ){ 
					   
					  //fps = 5;
					             
					  
					   
					      obj_canvas [ 'Canvas_Frog_Big_Context'].drawImage ( obj_canvas ['Canvas_Frog_Pluet'] , - W1 / 2 , - H1 / 2 ); 

                        

				           obj_canvas [ 'Canvas_Frog_Big_Context'].drawImage ( obj_canvas ['Canvas_Frog_Yazyk' ] , 0 , 0 , W2 , H2 , 0 , -  H2 / 3  , arr_result['Level_' + arr_result.Level ]['Diagonal_Yazyk'] , H2 );

					    
				  

					   
				   } else {
				   
				     obj_canvas [ 'Canvas_Frog_Big_Context'].drawImage ( obj_canvas ['Canvas_Frog_Ulibka'] , - W1 / 2 , - H1 / 2 );
					 
				    }

                  obj_canvas ['Canvas_Frog_Big_Context'].restore();

				      obj_canvas['Canvas_Holst_Context'].drawImage ( obj_canvas [ 'Canvas_Frog_Big'] , 0 , 0 );

					  Next_func ()

	} //try
	
	catch (e) {  console.log ( e ); Error_Game ( 'Img_Frog' , e ) }
	
	
	}
	


	
      let idTA_Muha_control = undefined ;

	 function Animation_Muha_Poceluy( ) { //Анимация Муха
	 
	         
		 
		      let Num_per = arr_result['Level_' + arr_result.Level ]['Muha']['Animation_Muha'].split ('|');

              let a = Num_per [ 1 ] , drag = 1 , str_Poceluy , idTA   ;
			  
			
	
             function Animation_Body (){
				 
				
	 
	             if( arr_result['Level_' + arr_result.Level ]['Muha']['Animation_Muha'].includes('AnimationInProgress')  ) { 
	 
	                  if ( drag == 1 ){ drag = 2;
		 
		                  arr_result['Level_' + arr_result.Level ]['Muha']['X_Muha'] [ a ] = arr_result['Level_' + arr_result.Level ]['Muha']['X_Muha'] [ a ] + 10 ;
						  
						  arr_result['Level_' + arr_result.Level ]['Y_Frog']  = arr_result['Level_' + arr_result.Level ]['Y_Frog'] - 10 ;

		                } else { drag = 1;
		 
		                  arr_result['Level_' + arr_result.Level ]['Muha']['X_Muha'] [ a ] = arr_result['Level_' + arr_result.Level ]['Muha']['X_Muha'] [ a ] - 10 ;
						  
						  arr_result['Level_' + arr_result.Level ]['Y_Frog']  = arr_result['Level_' + arr_result.Level ]['Y_Frog'] + 10 ;
	
		                }

		              idTA = setTimeout( Animation_Body , 1000 / arr_result.fps_animation  );
					  
					  

		            } else {

		              clearTimeout(idTA); 

		            }
	            }
			
		     Animation_Body ()	
			 
			

            }
	

	
	function Img_Muha (){ // Муха   

      try {
		  

	  
	      function Next_func (){ Img_Pchela () }
	   
	      if( arr_result['Level_' + arr_result.Level ]['Muha'] == undefined || arr_result['Level_' + arr_result.Level ]['Muha']['Kolichestvo_Muha'] == 0 || arr_result.Zapusk_Play_Game == 'No' ){

	          Next_func ();
			  
			  
		 
		      return false ;
		
		    }  
			
			
	      
		 let  W1 = obj_img['Muha_1_L']['width_canvas'] , H1 = obj_img['Muha_1_L']['height_canvas'] , W2 = obj_img['Frog_Ulibka']['width_canvas'] , H2 = obj_img['Frog_Ulibka']['height_canvas'] ,  smena_napravleniya   ;
		  
	     


		 obj_canvas['Canvas_Muha_Big_Context'].clearRect ( 0 , 0 , st_fig , st_fig );
		 
		  for (let i = 0 ; i < arr_result['Level_' + arr_result.Level ]['Muha']['Kolichestvo_Muha'] ; i++ ){
			  
			  
			  
			      let X_Muha = arr_result['Level_' + arr_result.Level ]['Muha']['X_Muha'] [ i ] ;
			  
	              let Y_Muha = arr_result['Level_' + arr_result.Level ]['Muha']['Y_Muha'] [ i ] ;
   
                  smena_napravleniya = randomNumber ( 1 , 20 );
				  
				    if ( arr_result['Level_' + arr_result.Level ]['Muha']['Napravlenie_Muha'] [ i ] == 'Poymana'  ){
				   
				   
				   
				   
				   
				    } else
				  
 
				   if ( arr_result['Level_' + arr_result.Level ]['Muha']['Napravlenie_Muha'] [ i ] == 'MuhaPoceluy' && arr_result['Level_' + arr_result.Level ]['Muha']['Animation_Muha'].includes('StopAnimation') ){
					   
					   
					   // Окончание анимации
					   

				       arr_result['Level_' + arr_result.Level ]['Muha']['Napravlenie_Muha'] [ i ] = 'start';
							  
			           
						   
			            arr_result['Level_' + arr_result.Level ]['Muha']['X_Muha'] [ i ] = Load_Rezerv_Level_Base ( 'Muha' , 'X_Muha' ) [ i ];
						
						 arr_result['Level_' + arr_result.Level ]['Muha']['Y_Muha'] [ i ] = Load_Rezerv_Level_Base ( 'Muha' , 'Y_Muha' ) [ i ];
						
						arr_result['Level_' + arr_result.Level ]['Y_Frog'] =

                         Load_Rezerv_Level_Base ( 'Y_Frog' );


					
						
						 arr_result['Level_' + arr_result.Level ]['Napravlenie_Frog'] = 'Ulibka';
						
						arr_result['Level_' + arr_result.Level ]['Muha']['Animation_Muha'] = '';
				        
						Greate_Pause_Play_Button (); // Восстанавливаем управление лягушкой
				   
				   }  else if ( arr_result['Level_' + arr_result.Level ]['Muha']['Napravlenie_Muha'] [ i ] == 'MuhaPoceluy' && arr_result['Level_' + arr_result.Level ]['Muha']['Animation_Muha'].includes('AnimationInProgress') ){
					   
					   //Анимация показывается
					 // alert ( 'Анимация показывается' );

					  
					 
					  if ( !idTA_Muha_control ) { 
						  
					  
						 
                          idTA_Muha_control = setTimeout ( function () { 
			 
			              clearTimeout( idTA_Muha_control ); idTA_Muha_control = undefined;
			 
			 
			              arr_result['Level_' + arr_result.Level ]['Muha']['Animation_Muha'] = 'StopAnimation' 
			 
			            } , 2000 ); // Перезапускаем анимацию	в случаях паузы или перезагрузки страницы во время анимации				 
					  
					  } else { 
					  
					  }
					 

					   
				  }  else if ( arr_result['Level_' + arr_result.Level ]['Muha']['Napravlenie_Muha'] [ i ] == 'MuhaPoceluy' 
				  
				  
				  && arr_result['Level_' + arr_result.Level ]['Muha']['Animation_Muha'].includes('StartAnimation') ){
					  
					  // Событие анимирования поцелуя мухи
					  
					  arr_result['Level_' + arr_result.Level ]['Napravlenie_Frog'] = 'Ulibka';
					  
					  arr_result['Level_' + arr_result.Level ]['Muha']['Animation_Muha'] = 'AnimationInProgress|' + i; 
					  
					  Animation_Muha_Poceluy( );
					  
					  
					  // Запускаем анимацию
					  
					  
					  idTA_Muha_control = setTimeout ( function () { 
			 
			              clearTimeout( idTA_Muha_control); idTA_Muha_control = undefined;
			 
			 
			              arr_result['Level_' + arr_result.Level ]['Muha']['Animation_Muha'] = 'StopAnimation' 
			 
			            } , 2000 );
			 
			        Play_Audio ( 'audio_Chekotka' ) ;

					 Delete_Pause_Play_Button ();

				  }		
				  else if ( arr_result['Level_' + arr_result.Level ]['Muha']['Napravlenie_Muha'] [ i ] == 'vibor' ) {

	                  let  x = randomNumber ( 0 , st_fig ) , y = randomNumber ( 0 , st_fig );

	                  let radius =  Math.sqrt( Math.abs( arr_result['Level_' + arr_result.Level ]['Muha']['X_Muha'] [ i ] - x ) *  Math.abs( arr_result['Level_' + arr_result.Level ]['Muha']['X_Muha'] [ i ] - x )  +  Math.abs( arr_result['Level_' + arr_result.Level ]['Muha']['Y_Muha'] [ i ] - y )  *  Math.abs( arr_result['Level_' + arr_result.Level ]['Muha']['Y_Muha'] [ i ] - y )  );

			          let ugol_arc = Math.asin( Math.abs( arr_result['Level_' + arr_result.Level ]['Muha']['Y_Muha'] [ i ] - y ) / radius ) * 180 / Math.PI;
			 
			          arr_result['Level_' + arr_result.Level ]['Muha']['Delta_x_Muha'] [ i ] =  Math.abs( arr_result['Level_' + arr_result.Level ]['Muha']['X_Muha'] [ i ] - x ) / radius  ;
	  
	                  arr_result['Level_' + arr_result.Level ]['Muha']['Delta_y_Muha'] [ i ] =  Math.abs( arr_result['Level_' + arr_result.Level ]['Muha']['Y_Muha'] [ i ] - y ) / radius  ;
			 
			          arr_result['Level_' + arr_result.Level ]['Muha']['Diagonal_Muha'] [ i ] = Math.round(  W1 / 2  ) ;
		
			 
			          if ( x < arr_result['Level_' + arr_result.Level ]['Muha']['X_Muha'] [ i ] && y < arr_result['Level_' + arr_result.Level ]['Muha']['Y_Muha'] [ i ] ){

     		              arr_result['Level_' + arr_result.Level ]['Muha']['Ugol_Muha'] [ i ] = Math.round( ugol_arc + 180 ) ;
					 
				          arr_result['Level_' + arr_result.Level ]['Muha']['Delta_x_Muha'] [ i ] =  arr_result['Level_' + arr_result.Level ]['Muha']['Delta_x_Muha'] [ i ] * -1;
					 
				          arr_result['Level_' + arr_result.Level ]['Muha']['Delta_y_Muha'] [ i ] =  arr_result['Level_' + arr_result.Level ]['Muha']['Delta_y_Muha'] [ i ] * -1 ;
					  
					      arr_result['Level_' + arr_result.Level ]['Muha']['Img_L_R_Muha'] [ i ] = 'L'; 
	
				        }// 1 верхняя левая четверть

                        else if ( x < arr_result['Level_' + arr_result.Level ]['Muha']['X_Muha'] [ i ] && y > arr_result['Level_' + arr_result.Level ]['Muha']['Y_Muha'] [ i ] ){ 
				
				         arr_result['Level_' + arr_result.Level ]['Muha']['Ugol_Muha'] [ i ] = Math.round( 180 - ugol_arc ) ;
				  
				         arr_result['Level_' + arr_result.Level ]['Muha']['Delta_x_Muha'] [ i ] =  arr_result['Level_' + arr_result.Level ]['Muha']['Delta_x_Muha'] [ i ] * -1;
					  
					     arr_result['Level_' + arr_result.Level ]['Muha']['Img_L_R_Muha'] [ i ] = 'L' ;
				  
				        } // 2 Нижняя левая четверть

                        else if ( x > arr_result['Level_' + arr_result.Level ]['Muha']['X_Muha'] [ i ] && y > arr_result['Level_' + arr_result.Level ]['Muha']['Y_Muha'] [ i ] ){ 
				
				         arr_result['Level_' + arr_result.Level ]['Muha']['Ugol_Muha'] [ i ] = Math.round( ugol_arc ) ;
					 
					     arr_result['Level_' + arr_result.Level ]['Muha']['Img_L_R_Muha'] [ i ] = 'R' ;
	
				        } //3 Нижняя правая четверть

                        else if ( x > arr_result['Level_' + arr_result.Level ]['Muha']['X_Muha'] [ i ] && y < arr_result['Level_' + arr_result.Level ]['Muha']['Y_Muha'] [ i ] ){ 
				
				         arr_result['Level_' + arr_result.Level ]['Muha']['Ugol_Muha'] [ i ] = Math.round( 90 - ugol_arc + 270 ) ;
				 
				         arr_result['Level_' + arr_result.Level ]['Muha']['Delta_y_Muha'] [ i ] = arr_result['Level_' + arr_result.Level ]['Muha']['Delta_y_Muha'] [ i ] * -1;
		
				         arr_result['Level_' + arr_result.Level ]['Muha']['Img_L_R_Muha'] [ i ] = 'R';
					  
				        }  //4 Верхняя правая четверть
					
					

				     arr_result['Level_' + arr_result.Level ]['Muha']['Napravlenie_Muha'] [ i ] = 'start'
				
				    } else {
						
						   if (  arr_result['Level_' + arr_result.Level ]['Muha']['X_Muha'] [ i ] > arr_result['Level_' + arr_result.Level ]['X_Frog'] - W2 / 3

                             &&  arr_result['Level_' + arr_result.Level ]['Muha']['X_Muha'] [ i ] < arr_result['Level_' + arr_result.Level ]['X_Frog'] + W2 / 5
							 
							 && arr_result['Level_' + arr_result.Level ]['Muha']['Y_Muha'] [ i ] > arr_result['Level_' + arr_result.Level ]['Y_Frog'] - H2 / 8
							 
							 &&  arr_result['Level_' + arr_result.Level ]['Muha']['Y_Muha'] [ i ] < arr_result['Level_' + arr_result.Level ]['Y_Frog'] + H2 / 4 

                             && arr_result['Level_' + arr_result.Level ]['Muha']['Animation_Muha'] == ''
						   ){
							   
								   
							       //Событие поцелуя мухи
							  
							        
								  
								          arr_result['Level_' + arr_result.Level ]['Muha']['Napravlenie_Muha'] [ i ] = 'MuhaPoceluy';
								   
								          arr_result['Level_' + arr_result.Level ]['Muha']['Animation_Muha'] = 'StartAnimation';

 
						   }


						  if ( arr_result['Level_' + arr_result.Level ]['Muha']['Napravlenie_Muha'] [ i ] == 'MuhaPoceluy'  ){
					  
					           // Событие анимирования поцелуя мухи муха стоит на месте

							
							} else 
								
							if (   ( arr_result['Level_' + arr_result.Level ]['Muha']['X_Muha'] [ i ] >= st_fig - W1 || arr_result['Level_' + arr_result.Level ]['Muha']['X_Muha'] [ i ] <= W1 || arr_result['Level_' + arr_result.Level ]['Muha']['Y_Muha'] [ i ] >= st_fig - H1 || arr_result['Level_' + arr_result.Level ]['Muha']['Y_Muha'] [ i ] <= H1 )  ) {
						  
						  //Муха вышла за пределы поля

						      arr_result['Level_' + arr_result.Level ]['Muha']['X_Muha'] [ i ] = Load_Rezerv_Level_Base ( 'Muha' , 'X_Muha' ) [ i ];
							  
							 
						   
						      arr_result['Level_' + arr_result.Level ]['Muha']['Y_Muha'] [ i ] = Load_Rezerv_Level_Base ( 'Muha' , 'Y_Muha' ) [ i ];
							
							
					        } else if ( smena_napravleniya == 1  ){ 
						  
						  // Случайное изменение направления движения мухи
						  
						  
						      arr_result['Level_' + arr_result.Level ]['Muha']['Napravlenie_Muha'] [ i ]	= 'vibor' 
						  
						    } else { 
				
				              X_Muha =  arr_result['Level_' + arr_result.Level ]['Muha']['X_Muha'] [ i ] + arr_result['Level_' + arr_result.Level ]['Muha']['Hag_Muha'] [ i ] * arr_result['Level_' + arr_result.Level ]['Muha']['Delta_x_Muha'] [ i ]  ;
	  
	                          Y_Muha =  arr_result['Level_' + arr_result.Level ]['Muha']['Y_Muha'] [ i ] + arr_result['Level_' + arr_result.Level ]['Muha']['Hag_Muha'] [ i ] *  arr_result['Level_' + arr_result.Level ]['Muha']['Delta_y_Muha'] [ i ] ;

					         if ( isNumeric( X_Muha ) && isNumeric( Y_Muha ) ){
		
		                          arr_result['Level_' + arr_result.Level ]['Muha']['X_Muha'] [ i ] = X_Muha ;

		                          arr_result['Level_' + arr_result.Level ]['Muha']['Y_Muha'] [ i ] = Y_Muha ;
							  
                               }	
					        }
                    //}

				}
                    if ( arr_result['Level_' + arr_result.Level ]['Muha']['Napravlenie_Muha'] [ i ] == 'Poymana' || arr_result.Zapusk_Play_Game == 'No' ){
						
						//Не рисуем муху если она поймана  или игра остановлена
						
					} else{
						
						
                  
				      obj_canvas['Canvas_Muha_Big_Context'].save();

                      obj_canvas['Canvas_Muha_Big_Context'].translate( arr_result['Level_' + arr_result.Level ]['Muha']['X_Muha'] [ i ] , arr_result['Level_' + arr_result.Level ]['Muha']['Y_Muha'] [ i ] );
				   
                      //obj_canvas['Canvas_Muha_Big_Context'].rotate( ( arr_result['Level_' + arr_result.Level ]['Muha']['Ugol_Muha'] [ i ] ) * Math.PI  / 180 );
				   
				  
				      if (  arr_result['Level_' + arr_result.Level ]['Muha']['L_R_B_Muha'] [ i ] == 1  ){ 
				  
				         arr_result['Level_' + arr_result.Level ]['Muha']['L_R_B_Muha'] [ i ] = 2;
				   
				         if ( arr_result['Level_' + arr_result.Level ]['Muha']['Img_L_R_Muha'] [ i ] == 'L' ){ 
					 
					          obj_canvas['Canvas_Muha_Big_Context'].drawImage ( obj_canvas['Canvas_Muha_1_L'] , - W1 / 2 , - H1 / 2  );
						   
					        } else{
							
						       obj_canvas['Canvas_Muha_Big_Context'].drawImage ( obj_canvas['Canvas_Muha_1_R'] , - W1 / 2 , - H1 / 2  );
						   
						    }
							
				        } else {  
					
					      arr_result['Level_' + arr_result.Level ]['Muha']['L_R_B_Muha'] [ i ] = 1;
				   
				          if ( arr_result['Level_' + arr_result.Level ]['Muha']['Img_L_R_Muha'] [ i ] == 'L' ){
					 
					          obj_canvas['Canvas_Muha_Big_Context'].drawImage ( obj_canvas['Canvas_Muha_2_L'] , - W1 / 2 , - H1 / 2  );
						   
					        } else{
							
						      obj_canvas['Canvas_Muha_Big_Context'].drawImage ( obj_canvas['Canvas_Muha_2_R'] , - W1 / 2 , - H1 / 2  );
						   
						    }
					 
	                    }
						
						
					 
                      obj_canvas['Canvas_Muha_Big_Context'].restore();
					  
				    } // Poymana
					
		           

	              if ( i == arr_result['Level_' + arr_result.Level ]['Muha']['Kolichestvo_Muha'] - 1 ) {

				

	                 obj_canvas['Canvas_Holst_Context'].drawImage ( obj_canvas['Canvas_Muha_Big'] , 0 , 0 );

	                  Next_func ()
	  
	                }
				

	        }//for

        } //try
	
	       catch (e) { console.log ( e );  Error_Game ( 'Img_Muha' , e ) }

	}
	
  
  let idTA_Pchela_control = undefined ;
  
 function Animation_Pchela_Ukus( ) { //Анимация укуса пчелы
	 
	         
		 
		      let Num_per = arr_result['Level_' + arr_result.Level ]['Pchela']['Animation_Pchela'].split ('|');

              let a = Num_per [ 1 ] , drag = 1 , idTA  ;

             function Animation_Body (){
				 
				
	 
	             if( arr_result['Level_' + arr_result.Level ]['Pchela']['Animation_Pchela'].includes('AnimationInProgress')  ) { 
	 
	                  if ( drag == 1 ){ drag = 2;

						  arr_result['Level_' + arr_result.Level ]['Y_Frog']  = arr_result['Level_' + arr_result.Level ]['Y_Frog'] - 10 ;

		                } else { drag = 1;
		 
		                  
						  
						  arr_result['Level_' + arr_result.Level ]['Y_Frog']  = arr_result['Level_' + arr_result.Level ]['Y_Frog'] + 10 ;
	
		                }

		              idTA = setTimeout( Animation_Body , 1000 / arr_result.fps_animation  );
					  
					  

		            } else {

		              clearTimeout(idTA); 

		            }
	            }
			
		     Animation_Body ()	
			 
			

            }



  function Img_Pchela (){ // Пчела  

      try {
		  

	  
	      function Next_func (){  Img_Komar () }
	   
	      if( arr_result['Level_' + arr_result.Level ]['Pchela'] == undefined || arr_result['Level_' + arr_result.Level ]['Pchela']['Kolichestvo_Pchela'] == 0  || arr_result.Zapusk_Play_Game == 'No' ){

	          Next_func ();
		 
		      return false ;
		
		    }  
	  
	     let  W1 = obj_img['Pchela_1_L']['width_canvas'] , H1 = obj_img['Pchela_1_L']['height_canvas'] , W2 = obj_img['Frog_Ulibka']['width_canvas'] , H2 = obj_img['Frog_Ulibka']['he_canvas'] ,  smena_napravleniya   ;


		 obj_canvas['Canvas_Pchela_Big_Context'].clearRect ( 0 , 0 , st_fig , st_fig );
		 
		  for (let i = 0 ; i < arr_result['Level_' + arr_result.Level ]['Pchela']['Kolichestvo_Pchela'] ; i++ ){
			  
			  
			  
			      let X_Pchela = arr_result['Level_' + arr_result.Level ]['Pchela']['X_Pchela'] [ i ] ;
			  
	              let Y_Pchela = arr_result['Level_' + arr_result.Level ]['Pchela']['Y_Pchela'] [ i ] ;
   
                  smena_napravleniya = randomNumber ( 1 , 20 );
				  
				    if ( arr_result['Level_' + arr_result.Level ]['Pchela']['Napravlenie_Pchela'] [ i ] == 'Poymana'  ){
				   
				   
				   
				   
				   
				    } else
				  
 
				   if ( arr_result['Level_' + arr_result.Level ]['Pchela']['Napravlenie_Pchela'] [ i ] == 'PchelaPoceluy' && arr_result['Level_' + arr_result.Level ]['Pchela']['Animation_Pchela'].includes('StopAnimation') ){
					   
					   
					   // Окончание анимации
					   
					    arr_result['Level_' + arr_result.Level ]['Napravlenie_Frog'] = 'Zlaya';

				       arr_result['Level_' + arr_result.Level ]['Pchela']['Napravlenie_Pchela'] [ i ] = 'start';
							  
			           
						   
			            arr_result['Level_' + arr_result.Level ]['Pchela']['X_Pchela'] [ i ] = Load_Rezerv_Level_Base ( 'Pchela' , 'X_Pchela' ) [ i ];
						
						 arr_result['Level_' + arr_result.Level ]['Pchela']['Y_Pchela'] [ i ] = Load_Rezerv_Level_Base ( 'Pchela' , 'Y_Pchela' ) [ i ];
						
						arr_result['Level_' + arr_result.Level ]['Y_Frog'] =

                         Load_Rezerv_Level_Base ( 'Y_Frog' );
						 
						 //Событие когда поймана пчела и лягушка выходит из уровня с обнулением и началом уровня сначала. Окончание в Img_End
					  
					     arr_result['Level_' + arr_result.Level ]['Status_Level'] = 'Vihod_S_Obnuleniem';
					  
					    arr_result['Level_' + arr_result.Level ]['Kto_poymal'] = 'Poymana_Pchela';


					
						
						
				        
					//	Greate_Pause_Play_Button (); // Восстанавливаем управление лягушкой
				   
				   }  else if ( arr_result['Level_' + arr_result.Level ]['Pchela']['Napravlenie_Pchela'] [ i ] == 'PchelaPoceluy' && arr_result['Level_' + arr_result.Level ]['Pchela']['Animation_Pchela'].includes('AnimationInProgress') ){
					   
					   //Анимация показывается
					 // alert ( 'Анимация показывается' );

					  
					 
					  if ( !idTA_Pchela_control ) { //console.log ( 'Нет' ) 
						  
					  
						 
                          idTA_Pchela_control = setTimeout ( function () { 
			 
			              clearTimeout( idTA_Pchela_control ); idTA_Pchela_control = undefined;
			 
			 
			              arr_result['Level_' + arr_result.Level ]['Pchela']['Animation_Pchela'] = 'StopAnimation' 
			 
			            } , 500 ); // Перезапускаем анимацию	в случаях паузы или перезагрузки страницы во время анимации				 
					  
					  } else { //console.log ( 'Да' ) 
					  
					  }
					 

					   
				  }  else if ( arr_result['Level_' + arr_result.Level ]['Pchela']['Napravlenie_Pchela'] [ i ] == 'PchelaPoceluy' 
				  
				  
				  && arr_result['Level_' + arr_result.Level ]['Pchela']['Animation_Pchela'].includes('StartAnimation') ){
					  
					  // Событие анимирования укуса пчелы
					  
					  arr_result['Level_' + arr_result.Level ]['Napravlenie_Frog'] = 'Udivlenie';
					  
					  arr_result['Level_' + arr_result.Level ]['Pchela']['Animation_Pchela'] = 'AnimationInProgress|' + i; 
					  
					  Animation_Pchela_Ukus ( );
					  
					  
					  // Запускаем анимацию
					  
					  
					  idTA_Pchela_control = setTimeout ( function () { 
			 
			              clearTimeout( idTA_Pchela_control); idTA_Pchela_control = undefined;
			 
			 
			              arr_result['Level_' + arr_result.Level ]['Pchela']['Animation_Pchela'] = 'StopAnimation' 
			 
			            } , 500 );
			 
			        

					 Delete_Pause_Play_Button ();

					  
				  }		
				  else if ( arr_result['Level_' + arr_result.Level ]['Pchela']['Napravlenie_Pchela'] [ i ] == 'vibor' ) {

	                  let  x = randomNumber ( 0 , st_fig ) , y = randomNumber ( 0 , st_fig );

	                  let radius =  Math.sqrt( Math.abs( arr_result['Level_' + arr_result.Level ]['Pchela']['X_Pchela'] [ i ] - x ) *  Math.abs( arr_result['Level_' + arr_result.Level ]['Pchela']['X_Pchela'] [ i ] - x )  +  Math.abs( arr_result['Level_' + arr_result.Level ]['Pchela']['Y_Pchela'] [ i ] - y )  *  Math.abs( arr_result['Level_' + arr_result.Level ]['Pchela']['Y_Pchela'] [ i ] - y )  );

			          let ugol_arc = Math.asin( Math.abs( arr_result['Level_' + arr_result.Level ]['Pchela']['Y_Pchela'] [ i ] - y ) / radius ) * 180 / Math.PI;
			 
			          arr_result['Level_' + arr_result.Level ]['Pchela']['Delta_x_Pchela'] [ i ] =  Math.abs( arr_result['Level_' + arr_result.Level ]['Pchela']['X_Pchela'] [ i ] - x ) / radius  ;
	  
	                  arr_result['Level_' + arr_result.Level ]['Pchela']['Delta_y_Pchela'] [ i ] =  Math.abs( arr_result['Level_' + arr_result.Level ]['Pchela']['Y_Pchela'] [ i ] - y ) / radius  ;
			 
			          arr_result['Level_' + arr_result.Level ]['Pchela']['Diagonal_Pchela'] [ i ] = Math.round(  W1 / 2  ) ;
		
			 
			          if ( x < arr_result['Level_' + arr_result.Level ]['Pchela']['X_Pchela'] [ i ] && y < arr_result['Level_' + arr_result.Level ]['Pchela']['Y_Pchela'] [ i ] ){

     		              arr_result['Level_' + arr_result.Level ]['Pchela']['Ugol_Pchela'] [ i ] = Math.round( ugol_arc + 180 ) ;
					 
				          arr_result['Level_' + arr_result.Level ]['Pchela']['Delta_x_Pchela'] [ i ] =  arr_result['Level_' + arr_result.Level ]['Pchela']['Delta_x_Pchela'] [ i ] * -1;
					 
				          arr_result['Level_' + arr_result.Level ]['Pchela']['Delta_y_Pchela'] [ i ] =  arr_result['Level_' + arr_result.Level ]['Pchela']['Delta_y_Pchela'] [ i ] * -1 ;
					  
					      arr_result['Level_' + arr_result.Level ]['Pchela']['Img_L_R_Pchela'] [ i ] = 'L'; 
	
				        }// 1 верхняя левая четверть

                        else if ( x < arr_result['Level_' + arr_result.Level ]['Pchela']['X_Pchela'] [ i ] && y > arr_result['Level_' + arr_result.Level ]['Pchela']['Y_Pchela'] [ i ] ){ 
				
				         arr_result['Level_' + arr_result.Level ]['Pchela']['Ugol_Pchela'] [ i ] = Math.round( 180 - ugol_arc ) ;
				  
				         arr_result['Level_' + arr_result.Level ]['Pchela']['Delta_x_Pchela'] [ i ] =  arr_result['Level_' + arr_result.Level ]['Pchela']['Delta_x_Pchela'] [ i ] * -1;
					  
					     arr_result['Level_' + arr_result.Level ]['Pchela']['Img_L_R_Pchela'] [ i ] = 'L' ;
				  
				        } // 2 Нижняя левая четверть

                        else if ( x > arr_result['Level_' + arr_result.Level ]['Pchela']['X_Pchela'] [ i ] && y > arr_result['Level_' + arr_result.Level ]['Pchela']['Y_Pchela'] [ i ] ){ 
				
				         arr_result['Level_' + arr_result.Level ]['Pchela']['Ugol_Pchela'] [ i ] = Math.round( ugol_arc ) ;
					 
					     arr_result['Level_' + arr_result.Level ]['Pchela']['Img_L_R_Pchela'] [ i ] = 'R' ;
	
				        } //3 Нижняя правая четверть

                        else if ( x > arr_result['Level_' + arr_result.Level ]['Pchela']['X_Pchela'] [ i ] && y < arr_result['Level_' + arr_result.Level ]['Pchela']['Y_Pchela'] [ i ] ){ 
				
				         arr_result['Level_' + arr_result.Level ]['Pchela']['Ugol_Pchela'] [ i ] = Math.round( 90 - ugol_arc + 270 ) ;
				 
				         arr_result['Level_' + arr_result.Level ]['Pchela']['Delta_y_Pchela'] [ i ] = arr_result['Level_' + arr_result.Level ]['Pchela']['Delta_y_Pchela'] [ i ] * -1;
		
				         arr_result['Level_' + arr_result.Level ]['Pchela']['Img_L_R_Pchela'] [ i ] = 'R';
					  
				        }  //4 Верхняя правая четверть
					
					

				     arr_result['Level_' + arr_result.Level ]['Pchela']['Napravlenie_Pchela'] [ i ] = 'start'
				
				    } else {
						
						   


						  
					      

				
						  if ( arr_result['Level_' + arr_result.Level ]['Pchela']['Napravlenie_Pchela'] [ i ] == 'PchelaPoceluy'  ){
					  
					           // Событие анимации укуса пчелы  пчела стоит на месте

							
							} else 
								
							if (   ( arr_result['Level_' + arr_result.Level ]['Pchela']['X_Pchela'] [ i ] >= st_fig - W1 || arr_result['Level_' + arr_result.Level ]['Pchela']['X_Pchela'] [ i ] <= W1 || arr_result['Level_' + arr_result.Level ]['Pchela']['Y_Pchela'] [ i ] >= st_fig - H1 || arr_result['Level_' + arr_result.Level ]['Pchela']['Y_Pchela'] [ i ] <= H1 )  ) {
						  
						  //Пчела вышла за пределы поля

						      arr_result['Level_' + arr_result.Level ]['Pchela']['X_Pchela'] [ i ] = Load_Rezerv_Level_Base ( 'Pchela' , 'X_Pchela' ) [ i ];
							  
							 
						   
						      arr_result['Level_' + arr_result.Level ]['Pchela']['Y_Pchela'] [ i ] = Load_Rezerv_Level_Base ( 'Pchela' , 'Y_Pchela' ) [ i ];
							
							
					        } else if ( smena_napravleniya == 1  ){ 
						  
						  // Случайное изменение направления движения пчелы
						  
						  
						      arr_result['Level_' + arr_result.Level ]['Pchela']['Napravlenie_Pchela'] [ i ]	= 'vibor' 
						  
						    } else { 
				
				              X_Pchela =  arr_result['Level_' + arr_result.Level ]['Pchela']['X_Pchela'] [ i ] + arr_result['Level_' + arr_result.Level ]['Pchela']['Hag_Pchela'] [ i ] * arr_result['Level_' + arr_result.Level ]['Pchela']['Delta_x_Pchela'] [ i ]  ;
	  
	                          Y_Pchela =  arr_result['Level_' + arr_result.Level ]['Pchela']['Y_Pchela'] [ i ] + arr_result['Level_' + arr_result.Level ]['Pchela']['Hag_Pchela'] [ i ] *  arr_result['Level_' + arr_result.Level ]['Pchela']['Delta_y_Pchela'] [ i ] ;

					         if ( isNumeric( X_Pchela ) && isNumeric( Y_Pchela ) ){
		
		                          arr_result['Level_' + arr_result.Level ]['Pchela']['X_Pchela'] [ i ] = X_Pchela ;

		                          arr_result['Level_' + arr_result.Level ]['Pchela']['Y_Pchela'] [ i ] = Y_Pchela ;
							  
                               }	
					        }
                    //}

				}
                    if ( arr_result['Level_' + arr_result.Level ]['Pchela']['Napravlenie_Pchela'] [ i ] == 'Poymana' || arr_result.Zapusk_Play_Game == 'No' ){
						
						//Не рисуем пчелу если она поймана  или игра остановлена
						
					} else{
                  
				      obj_canvas['Canvas_Pchela_Big_Context'].save();

                      obj_canvas['Canvas_Pchela_Big_Context'].translate( arr_result['Level_' + arr_result.Level ]['Pchela']['X_Pchela'] [ i ] , arr_result['Level_' + arr_result.Level ]['Pchela']['Y_Pchela'] [ i ] );
				   
                      //obj_canvas['Canvas_Pchela_Big_Context'].rotate( ( arr_result['Level_' + arr_result.Level ]['Pchela']['Ugol_Pchela'] [ i ] ) * Math.PI  / 180 );
				   
				  
				      if (  arr_result['Level_' + arr_result.Level ]['Pchela']['L_R_B_Pchela'] [ i ] == 1  ){ 
				  
				         arr_result['Level_' + arr_result.Level ]['Pchela']['L_R_B_Pchela'] [ i ] = 2;
				   
				         if ( arr_result['Level_' + arr_result.Level ]['Pchela']['Img_L_R_Pchela'] [ i ] == 'L' ){ 
					 
					          obj_canvas['Canvas_Pchela_Big_Context'].drawImage (  obj_canvas['Canvas_Pchela_1_L'] , - W1 / 2 , - H1 / 2  );
						   
					        } else{
							
						       obj_canvas['Canvas_Pchela_Big_Context'].drawImage (  obj_canvas['Canvas_Pchela_1_R'] , - W1 / 2 , - H1 / 2  );
						   
						    }
							
				        } else {  
					
					      arr_result['Level_' + arr_result.Level ]['Pchela']['L_R_B_Pchela'] [ i ] = 1;
				   
				          if ( arr_result['Level_' + arr_result.Level ]['Pchela']['Img_L_R_Pchela'] [ i ] == 'L' ){
					 
					          obj_canvas['Canvas_Pchela_Big_Context'].drawImage (  obj_canvas['Canvas_Pchela_2_L'] , - W1 / 2 , - H1 / 2  );
						   
					        } else{
							
						      obj_canvas['Canvas_Pchela_Big_Context'].drawImage (  obj_canvas['Canvas_Pchela_2_R'] , - W1 / 2 , - H1 / 2  );
						   
						    }
					 
	                    }
						
						
					 
                      obj_canvas['Canvas_Pchela_Big_Context'].restore();
					  
				    } // Poymana
					
		           

	              if ( i == arr_result['Level_' + arr_result.Level ]['Pchela']['Kolichestvo_Pchela'] - 1 ) {

				

	                 obj_canvas['Canvas_Holst_Context'].drawImage (  obj_canvas['Canvas_Pchela_Big'] , 0 , 0 );

	                  Next_func ()
	  
	                }
				

	        }//for

        } //try
	
	       catch (e) { console.log ( e );  Error_Game ( 'Img_Pchela' , e ) }

	}







  function Ukus_Komara ( a , b ) { // Отрисовка укуса комара
		
		let color = arr_result.Color_Ukus_Komar , r = arr_result.Radius_Ukus_Komar ;
	 
	 obj_canvas ['Canvas_Frog_Zlaya_Context'].save ();
					   
					      obj_canvas ['Canvas_Frog_Zlaya_Context'].beginPath();

						   obj_canvas ['Canvas_Frog_Zlaya_Context'].fillStyle = color;

                           obj_canvas ['Canvas_Frog_Zlaya_Context'].arc(  a , b , r , 0, 2*Math.PI, false);
					
					       obj_canvas ['Canvas_Frog_Zlaya_Context'].closePath();

	                       obj_canvas ['Canvas_Frog_Zlaya_Context'].fill();

	 obj_canvas ['Canvas_Frog_Zlaya_Context'].restore ();
					  
					  
	 obj_canvas ['Canvas_Frog_Ulibka_Context'].save ();
					   
					      obj_canvas ['Canvas_Frog_Ulibka_Context'].beginPath();

                           obj_canvas ['Canvas_Frog_Ulibka_Context'].fillStyle = color;

                           obj_canvas ['Canvas_Frog_Ulibka_Context'].arc( a , b  , r , 0, 2*Math.PI, false);
					
					       obj_canvas ['Canvas_Frog_Ulibka_Context'].closePath();

	                       obj_canvas ['Canvas_Frog_Ulibka_Context'].fill();
					  
	 obj_canvas ['Canvas_Frog_Ulibka_Context'].restore ();
	 
					  
	 obj_canvas ['Canvas_Frog_Pluet_Context'].save ();
					   
					       obj_canvas ['Canvas_Frog_Pluet_Context'].beginPath();

                           obj_canvas ['Canvas_Frog_Pluet_Context'].fillStyle = color;

                           obj_canvas ['Canvas_Frog_Pluet_Context'].arc(  a , b  , r , 0, 2*Math.PI, false);
					
					       obj_canvas ['Canvas_Frog_Pluet_Context'].closePath();

	                       obj_canvas ['Canvas_Frog_Pluet_Context'].fill();
					  
	 obj_canvas ['Canvas_Frog_Pluet_Context'].restore ();

    }

 let idTA_Komar_control = undefined ;

	 function Animation_Komar_Ukus( ) { //Анимация укуса комара
	 
	         
		 
		      let Num_per = arr_result['Level_' + arr_result.Level ]['Komar']['Animation_Komar'].split ('|');

              let a = Num_per [ 1 ] , drag = 1 , str_Poceluy , idTA , 
			  
			  W1 = obj_img['Frog_Ulibka']['width_canvas'] , H1 = obj_img['Frog_Ulibka']['height_canvas'] ,  W2 = obj_img['Frog_Ulibka']['width_img'] ;
			  
			  
			  let TU = arr_result['Level_' + arr_result.Level ]['Komar']['Karta_Ukusov_Komar'].length ;
	
			 let Tochka_Ukus = arr_result['Level_' + arr_result.Level ]['Komar'][ "Tochka_Ukus_Komar" ] [ TU ].split("|");
			 
			 
			 
			 let mash_ukus_Frog = W1 /  W2 ;
			 
			 let x_ukus = Number ( Tochka_Ukus [ 0 ] ) * mash_ukus_Frog ;
			 
			 let y_ukus = Number ( Tochka_Ukus [ 1 ] ) * mash_ukus_Frog ;


			 arr_result['Level_' + arr_result.Level ]['Komar']['X_Komar'] [ a ]  = arr_result['Level_' + arr_result.Level ]['X_Frog'] + W1 ; 
			 
			 arr_result['Level_' + arr_result.Level ]['Komar']['Y_Komar'] [ a ]  = arr_result['Level_' + arr_result.Level ]['Y_Frog'] - H1 ;  
	
             function Animation_Body (){
				 
				
	 
	             if( arr_result['Level_' + arr_result.Level ]['Komar']['Animation_Komar'].includes('AnimationInProgress')  ) { 
	 
	                  if ( drag == 1 ){ drag = 2;
		 
		                 
						  
						  arr_result['Level_' + arr_result.Level ]['Y_Frog']  = arr_result['Level_' + arr_result.Level ]['Y_Frog'] - 10 ;

		                } else { drag = 1;
		 
		                  
						  
						  arr_result['Level_' + arr_result.Level ]['Y_Frog']  = arr_result['Level_' + arr_result.Level ]['Y_Frog'] + 10 ;
	
		                }

		              idTA = setTimeout( Animation_Body , 1000 / arr_result.fps_animation  );
					  
					  

		            } else {

		              clearTimeout(idTA); 

				    
				
				    arr_result['Level_' + arr_result.Level ]['Komar']['Karta_Ukusov_Komar'].push( x_ukus + '|' + y_ukus ) ;
				
				
				
				     //console.log ( x_ukus + "   " + y_ukus );
					   
					   Ukus_Komara ( x_ukus , y_ukus ) 
					   

		            }
	            }
			
		     Animation_Body ()	
			 
			

            }



 function Img_Komar (){ // Комар   

      try {
		  

	  
	      function Next_func (){  Img_Help_Level () }
		 
	   
	      if( arr_result['Level_' + arr_result.Level ]['Komar'] == undefined || arr_result['Level_' + arr_result.Level ]['Komar']['Kolichestvo_Komar'] == 0  || arr_result.Zapusk_Play_Game == 'No' ){

	          Next_func ();
		 
		      return false ;
		
		    }  
	  
	     let  W1 = obj_img['Komar_1']['width_canvas'] , H1 =  obj_img['Komar_1']['height_canvas'] ,W2 = obj_img['Frog_Ulibka']['width_canvas']   ;
		 
		


		 obj_canvas['Canvas_Komar_Big_Context'].clearRect ( 0 , 0 , st_fig , st_fig );
		 
		  for (let i = 0 ; i < arr_result['Level_' + arr_result.Level ]['Komar']['Kolichestvo_Komar'] ; i++ ){
			  
			  
			  
			      let X_Komar = arr_result['Level_' + arr_result.Level ]['Komar']['X_Komar'] [ i ] ;
			  
	              let Y_Komar = arr_result['Level_' + arr_result.Level ]['Komar']['Y_Komar'] [ i ] ;
				  
				  let W_Komar_Zoom = arr_result['Level_' + arr_result.Level ]['Komar']['W_Komar_Zoom'] [ i ]; 
				  
				  let x_end , y_end , x_start , y_start ;
				  
				  let H_Komar_Zoom = arr_result['Level_' + arr_result.Level ]['Komar']['H_Komar_Zoom'] [ i ];
   
               
				  
				  if (arr_result['Level_' + arr_result.Level ]['Komar']['Karta_Ukusov_Komar'].length >= arr_result['Level_' + arr_result.Level ]['Komar']['Max_Kolichestvo_Ukusov_Komar']) {
					  
					  //Событие когда количество укусов превышает лимит и лягушка выходит из уровня с обнулением и началом уровня сначала. Окончание в Img_End
					  
					  arr_result['Level_' + arr_result.Level ]['Status_Level'] = 'Vihod_S_Obnuleniem';
					  
					  arr_result['Level_' + arr_result.Level ]['Kto_poymal'] = 'Previhenie_Max_Kolichestvo_Ukusov_Komar';

				  
				   }  
				   
				    else if ( arr_result['Level_' + arr_result.Level ]['Komar']['Napravlenie_Komar'] [ i ] == 'Poymana'  ){
				   
				   
				   
				   
				   
				    }
				   
				   
				   else if ( arr_result['Level_' + arr_result.Level ]['Komar']['Napravlenie_Komar'] [ i ] == 'KomarUkus' && arr_result['Level_' + arr_result.Level ]['Komar']['Animation_Komar'].includes('StopAnimation') ){
					   
					   //alert ('Окончание анимации');
					   // Окончание анимации
					   
					
					   
					   arr_result['Level_' + arr_result.Level ]['Napravlenie_Frog'] = 'Zlaya';  //Открыть
				   
				       arr_result['Level_' + arr_result.Level ]['Komar']['Napravlenie_Komar'] [ i ] = 'vibor';
					   
					   arr_result['Level_' + arr_result.Level ]['Komar']['Variant_Vibor_Komar'] [ i ] = 1 ;

						arr_result['Level_' + arr_result.Level ]['Y_Frog'] = Load_Rezerv_Level_Base ( 'Y_Frog' );
						
						
						
						arr_result['Level_' + arr_result.Level ]['Komar']['Animation_Komar'] = '';
				        
						//Greate_Pause_Play_Button (); // Восстанавливаем управление лягушкой
				   
				   }  else if ( arr_result['Level_' + arr_result.Level ]['Komar']['Napravlenie_Komar'] [ i ] == 'KomarUkus' && arr_result['Level_' + arr_result.Level ]['Komar']['Animation_Komar'].includes('AnimationInProgress') ){
					   
					   //Анимация показывается
					 // alert ( 'Анимация показывается' );

					  
					 
					  if ( !idTA_Komar_control ) { //console.log ( 'Нет' ) 
						  
					  
						 
                          idTA_Komar_control = setTimeout ( function () { 
			 
			              clearTimeout( idTA_Komar_control ); idTA_Komar_control = undefined;
			 
			 
			              arr_result['Level_' + arr_result.Level ]['Komar']['Animation_Komar'] = 'StopAnimation' 
			 
			            } , 500 ); // Перезапускаем анимацию	в случаях паузы или перезагрузки страницы во время анимации				 
					  
					  } else { //console.log ( 'Да' ) 
					  
					  }
					 

					   
				  }  else if ( arr_result['Level_' + arr_result.Level ]['Komar']['Napravlenie_Komar'] [ i ] == 'KomarUkus' 
				  
				  
				  && arr_result['Level_' + arr_result.Level ]['Komar']['Animation_Komar'].includes('StartAnimation') ){
					  
					  // Событие анимирования укуса комара
					  
					  
					  
					  arr_result['Level_' + arr_result.Level ]['Komar']['Animation_Komar'] = 'AnimationInProgress|' + i; 
					  
					  Animation_Komar_Ukus( );
					  
					  
					  // Запускаем анимацию
					  
					  
					  idTA_Komar_control = setTimeout ( function () { 
			 
			              clearTimeout( idTA_Komar_control ); idTA_Komar_control = undefined;
			 
			 
			              arr_result['Level_' + arr_result.Level ]['Komar']['Animation_Komar'] = 'StopAnimation' 
			 
			            } , 500 );
			 
			          Play_Audio ( 'audio_Ouch' ) ;

					 //Delete_Pause_Play_Button ();

					 //alert ('Запускаем анимацию');
				  

					  
				  }		
				  else if ( arr_result['Level_' + arr_result.Level ]['Komar']['Napravlenie_Komar'] [ i ] == 'vibor' ) { //Выбор
					  
					  if ( arr_result['Level_' + arr_result.Level ]['Komar']['Variant_Vibor_Komar'] [ i ] == 1 ) {

	                     x_start = randomNumber ( st_fig / 2 + st_fig / 4 , st_fig ) , y_start = randomNumber ( st_fig / 4  , st_fig / 2 );
					  
					     x_end = randomNumber ( arr_result['Level_' + arr_result.Level ]['X_Frog'] + W2 / 2  ,  st_fig / 2 ) ; 
						 
						 
						 y_end = randomNumber ( st_fig / 4   , st_fig / 2 );
					  
					    } else {
							
					     x_start = arr_result['Level_' + arr_result.Level ]['Komar']['X_End_Komar_Vibor'] [ i ] ; 
						 
						 y_start = arr_result['Level_' + arr_result.Level ]['Komar']['Y_End_Komar_Vibor'] [ i ] ;
						 
	
						 x_end = arr_result['Level_' + arr_result.Level ]['X_Frog'] ; 
						 
						 
						 y_end =  arr_result['Level_' + arr_result.Level ]['Y_Frog'] ;
							
							
							
						}
					  
					  arr_result['Level_' + arr_result.Level ]['Komar']['X_End_Komar_Vibor'] [ i ] = x_end ;
					  
					  arr_result['Level_' + arr_result.Level ]['Komar']['Y_End_Komar_Vibor'] [ i ] = y_end ;
					  
					  arr_result['Level_' + arr_result.Level ]['Komar']['W_Komar_Zoom'] [ i ] = 0 ;
					  
					  arr_result['Level_' + arr_result.Level ]['Komar']['H_Komar_Zoom'] [ i ] = 0 ;
			  
			   
					  
					  
					  
					  
					   arr_result['Level_' + arr_result.Level ]['Komar']['X_Start_Komar_Vibor'] [ i ] = arr_result['Level_' + arr_result.Level ]['Komar']['X_Komar'] [ i ] = x_start ;
					  
					   arr_result['Level_' + arr_result.Level ]['Komar']['Y_Start_Komar_Vibor'] [ i ] = arr_result['Level_' + arr_result.Level ]['Komar']['Y_Komar'] [ i ] = y_start ;
					  
					  

	                  let radius =  Math.sqrt( Math.abs( x_start - x_end ) *  Math.abs( x_start - x_end )  +  Math.abs( y_start - y_end )  *  Math.abs( y_start - y_end )  );

			          let ugol_arc = Math.asin( Math.abs( y_start - y_end ) / radius ) * 180 / Math.PI;
			 
			          arr_result['Level_' + arr_result.Level ]['Komar']['Delta_x_Komar'] [ i ] =  Math.abs( x_start - x_end ) / radius  ;
	  
	                  arr_result['Level_' + arr_result.Level ]['Komar']['Delta_y_Komar'] [ i ] =  Math.abs( y_start - y_end ) / radius  ;
			 
			          arr_result['Level_' + arr_result.Level ]['Komar']['Diagonal_Komar'] [ i ] = radius ;
					  
					  
					  
					  
					
					      let kol_hagov = radius / arr_result['Level_' + arr_result.Level ]['Komar']['Hag_Komar'] [ i ] ;
						  
					      arr_result['Level_' + arr_result.Level ]['Komar']['Mashtab_Zoom_Komar'] [ i ] =  ( 100 / kol_hagov ) / 100 ;
						  
					    
	
			          if ( x_end < x_start && y_end < y_start ){

     		             // arr_result['Level_' + arr_result.Level ]['Ugol_Komar'] [ i ] = ugol_arc + 30 ;
					 
				          arr_result['Level_' + arr_result.Level ]['Komar']['Delta_x_Komar'] [ i ] =  arr_result['Level_' + arr_result.Level ]['Komar']['Delta_x_Komar'] [ i ] * -1;
					 
				          arr_result['Level_' + arr_result.Level ]['Komar']['Delta_y_Komar'] [ i ] =  arr_result['Level_' + arr_result.Level ]['Komar']['Delta_y_Komar'] [ i ] * -1 ;
					  
					      arr_result['Level_' + arr_result.Level ]['Komar']['Img_L_R_Komar'] [ i ] = 'L'; 
	
				        }// 1 верхняя левая четверть

                        else if ( x_end < x_start && y_end > y_start ){ 
				
				       //  arr_result['Level_' + arr_result.Level ]['Ugol_Komar'] [ i ] = - ugol_arc + 30 ;
				  
				         arr_result['Level_' + arr_result.Level ]['Komar']['Delta_x_Komar'] [ i ] =  arr_result['Level_' + arr_result.Level ]['Komar']['Delta_x_Komar'] [ i ] * -1;
					  
					     arr_result['Level_' + arr_result.Level ]['Komar']['Img_L_R_Komar'] [ i ] = 'L' ;
				  
				        } // 2 Нижняя левая четверть

                        else if ( x_end > x_start && y_end > y_start ){ 
				
				       //  arr_result['Level_' + arr_result.Level ]['Ugol_Komar'] [ i ] = Math.round( ugol_arc ) ;
					 
					     arr_result['Level_' + arr_result.Level ]['Komar']['Img_L_R_Komar'] [ i ] = 'R' ;
	
				        } //3 Нижняя правая четверть

                        else if ( x_end > y_start && y_end < y_start ){ 
				
				       //  arr_result['Level_' + arr_result.Level ]['Ugol_Komar'] [ i ] = Math.round( 90 - ugol_arc + 270 ) ;
				 
				         arr_result['Level_' + arr_result.Level ]['Komar']['Delta_y_Komar'] [ i ] = arr_result['Level_' + arr_result.Level ]['Komar']['Delta_y_Komar'] [ i ] * -1;
		
				         arr_result['Level_' + arr_result.Level ]['Komar']['Img_L_R_Komar'] [ i ] = 'R';
					  
				        }  //4 Верхняя правая четверть
					
					

				     arr_result['Level_' + arr_result.Level ]['Komar']['Napravlenie_Komar'] [ i ] = 'start'
				
				    } else {
						
 
						  
						  if ( arr_result['Level_' + arr_result.Level ]['Komar']['Napravlenie_Komar'] [ i ] == 'KomarUkus'  ){
					  
					           // Событие анимирования укуса комара комар стоит на месте

							
							} else 
								
							 if ( arr_result['Level_' + arr_result.Level ]['Komar']['Variant_Vibor_Komar'] [ i ] == 2 
							 
							 && arr_result['Level_' + arr_result.Level ]['Komar']['X_Komar'] [ i ] < arr_result['Level_' + arr_result.Level ]['Komar']['X_End_Komar_Vibor'] [ i ] 
							 
							 && arr_result['Level_' + arr_result.Level ]['Komar']['X_Komar'] [ i ] > W1 / 2
							 
							 && arr_result['Level_' + arr_result.Level ]['Komar']['Y_Komar'] [ i ] > arr_result['Level_' + arr_result.Level ]['Komar']['Y_End_Komar_Vibor'] [ i ] 
							 
							 && arr_result['Level_' + arr_result.Level ]['Komar']['Y_Komar'] [ i ] < st_fig - H1

							 && arr_result['Level_' + arr_result.Level ]['Komar']['Animation_Komar'] == ''

							 ) {

								          arr_result['Level_' + arr_result.Level ]['Komar']['Napravlenie_Komar'] [ i ] = 'KomarUkus';
								   
								          arr_result['Level_' + arr_result.Level ]['Komar']['Animation_Komar'] = 'StartAnimation';

							 
							 } else
								 
							 if (  arr_result['Level_' + arr_result.Level ]['Komar']['Variant_Vibor_Komar'] [ i ] == 1 && 
							 
							 arr_result['Level_' + arr_result.Level ]['Komar']['X_Komar'] [ i ] < arr_result['Level_' + arr_result.Level ]['Komar']['X_End_Komar_Vibor'] [ i ] 
							 
							 
							 && arr_result['Level_' + arr_result.Level ]['Komar']['Y_Komar'] [ i ] < arr_result['Level_' + arr_result.Level ]['Komar']['Y_End_Komar_Vibor'] [ i ]
							 
							 
							 ) {
								 
								 // События полета комара от стартовой до конечной точки
			
								 arr_result['Level_' + arr_result.Level ]['Komar']['Napravlenie_Komar'] [ i ]	= 'vibor';
								 arr_result['Level_' + arr_result.Level ]['Komar']['Variant_Vibor_Komar'] [ i ] = 2;
								 
								 
							 }

							else if (   ( arr_result['Level_' + arr_result.Level ]['Komar']['X_Komar'] [ i ] >= st_fig || arr_result['Level_' + arr_result.Level ]['Komar']['X_Komar'] [ i ] <= W1/2 || arr_result['Level_' + arr_result.Level ]['Komar']['Y_Komar'] [ i ] >= st_fig || arr_result['Level_' + arr_result.Level ]['Komar']['Y_Komar'] [ i ] <= H1/2 )  ) {
						  
						     //Комар вышел за пределы поля
							 
							 

						      arr_result['Level_' + arr_result.Level ]['Komar']['Napravlenie_Komar'] [ i ]	= 'vibor';
							  
							  arr_result['Level_' + arr_result.Level ]['Komar']['Variant_Vibor_Komar'] [ i ] = 1;

						  
						    } else { 
				
				              X_Komar =  arr_result['Level_' + arr_result.Level ]['Komar']['X_Komar'] [ i ] + arr_result['Level_' + arr_result.Level ]['Komar']['Hag_Komar'] [ i ] * arr_result['Level_' + arr_result.Level ]['Komar']['Delta_x_Komar'] [ i ]  ;
	  
	                          Y_Komar =  arr_result['Level_' + arr_result.Level ]['Komar']['Y_Komar'] [ i ] + arr_result['Level_' + arr_result.Level ]['Komar']['Hag_Komar'] [ i ] *  arr_result['Level_' + arr_result.Level ]['Komar']['Delta_y_Komar'] [ i ] ;
							  
							  
							  if ( arr_result['Level_' + arr_result.Level ]['Komar']['Variant_Vibor_Komar'] [ i ] == 1 ) {
								  
								  if (  X_Komar > st_fig / 2 ) {
							  
							          W_Komar_Zoom = arr_result['Level_' + arr_result.Level ]['Komar']['W_Komar_Zoom'] [ i ] + W1 * arr_result['Level_' + arr_result.Level ]['Komar']['Mashtab_Zoom_Komar'] [ i ]; 
				  
				                       H_Komar_Zoom =  arr_result['Level_' + arr_result.Level ]['Komar']['H_Komar_Zoom'] [ i ] + H1 * arr_result['Level_' + arr_result.Level ]['Komar']['Mashtab_Zoom_Komar'] [ i ];
								 
							        }
								 
							    } else {
									
								 W_Komar_Zoom =  W1 ; 
				  
				                 H_Komar_Zoom = H1 ;
			
								}
							   
							 
							  
							  
							  if ( isNumeric( W_Komar_Zoom ) && isNumeric( H_Komar_Zoom ) ){ 
		
		                          arr_result['Level_' + arr_result.Level ]['Komar']['W_Komar_Zoom'] [ i ] = W_Komar_Zoom ;

		                          arr_result['Level_' + arr_result.Level ]['Komar']['H_Komar_Zoom'] [ i ] = H_Komar_Zoom ;
							  
                               }
							  

					         if ( isNumeric( X_Komar ) && isNumeric( Y_Komar ) ){ 
		
		                          arr_result['Level_' + arr_result.Level ]['Komar']['X_Komar'] [ i ] = X_Komar ;

		                          arr_result['Level_' + arr_result.Level ]['Komar']['Y_Komar'] [ i ] = Y_Komar ;
							  
                               }	
					        }
                    //}

				}
                    if ( arr_result['Level_' + arr_result.Level ]['Komar']['Napravlenie_Komar'] [ i ] == 'Poymana' || arr_result.Zapusk_Play_Game == 'No' ){
						
						//Не рисуем комара если он пойман  или игра остановлена
						
					} else{
                  
				      obj_canvas['Canvas_Komar_Big_Context'].save();

                      obj_canvas['Canvas_Komar_Big_Context'].translate( arr_result['Level_' + arr_result.Level ]['Komar']['X_Komar'] [ i ] , arr_result['Level_' + arr_result.Level ]['Komar']['Y_Komar'] [ i ] );
				   
                     // obj_canvas['Canvas_Komar_Big_Context'].rotate( ( arr_result['Level_' + arr_result.Level ]['Ugol_Komar'] [ i ] ) * Math.PI  / 180 );
					  
					  
					  let W1_Zoom = arr_result['Level_' + arr_result.Level ]['Komar']['W_Komar_Zoom'] [ i ] ;
					  
					  let H1_Zoom = arr_result['Level_' + arr_result.Level ]['Komar']['H_Komar_Zoom'] [ i ] ;
				   
				  
				      if (  arr_result['Level_' + arr_result.Level ]['Komar']['L_R_B_Komar'] [ i ] == 1  ){ 
				  
				         arr_result['Level_' + arr_result.Level ]['Komar']['L_R_B_Komar'] [ i ] = 2;
				   
				         if ( arr_result['Level_' + arr_result.Level ]['Komar']['Img_L_R_Komar'] [ i ] == 'L' ){ 
					 
					          obj_canvas['Canvas_Komar_Big_Context'].drawImage ( obj_canvas['Canvas_Komar_1'] , 0 , 0 ,  W1 , H1 , - W1_Zoom / 2 , - H1_Zoom / 2 , W1_Zoom , H1_Zoom );
						   
					        } else{
							
						       obj_canvas['Canvas_Komar_Big_Context'].drawImage ( obj_canvas['Canvas_Komar_1'] , 0 , 0 ,  W1 , H1 , - W1_Zoom / 2 , - H1_Zoom / 2 , W1_Zoom , H1_Zoom   );
						   
						    }
							
				        } else {  
					
					      arr_result['Level_' + arr_result.Level ]['Komar']['L_R_B_Komar'] [ i ] = 1;
				   
				          if ( arr_result['Level_' + arr_result.Level ]['Komar']['Img_L_R_Komar'] [ i ] == 'L' ){
					 
					          obj_canvas['Canvas_Komar_Big_Context'].drawImage ( obj_canvas['Canvas_Komar_2'] , 0 , 0 ,  W1 , H1 , - W1_Zoom / 2 , - H1_Zoom / 2 , W1_Zoom , H1_Zoom   );
						   
					        } else{
							
							obj_canvas['Canvas_Komar_Big_Context'].drawImage ( obj_canvas['Canvas_Komar_2'] , 0 , 0 ,  W1 , H1 , - W1_Zoom / 2 , - H1_Zoom / 2 , W1_Zoom , H1_Zoom   );
						   
						    }
					 
	                    }
						
						
					 
                      obj_canvas['Canvas_Komar_Big_Context'].restore();
					  
				    } // Poymana
					
					
					//obj_canvas['Canvas_Komar_Big_Context'].beginPath();
		           
                  //  obj_canvas['Canvas_Komar_Big_Context'].arc( arr_result['Level_' + arr_result.Level ]['Komar']['X_Start_Komar_Vibor'] [ i ] , arr_result['Level_' + arr_result.Level ]['Komar']['Y_Start_Komar_Vibor'] [ i ]  , 5 , 0, 2*Math.PI, false);
					
					//obj_canvas['Canvas_Komar_Big_Context'].closePath();
					
				//	obj_canvas['Canvas_Komar_Big_Context'].fillStyle = 'rgba( 0 , 0 , 0 , 1 )';
						 
						 
			
	                //      obj_canvas['Canvas_Komar_Big_Context'].fill();

                  //  obj_canvas['Canvas_Komar_Big_Context'].beginPath();					

                 //   obj_canvas['Canvas_Komar_Big_Context'].arc( arr_result['Level_' + arr_result.Level ]['Komar']['X_End_Komar_Vibor'] [ i ] , arr_result['Level_' + arr_result.Level ]['Komar']['Y_End_Komar_Vibor'] [ i ]  , 5 , 0, 2*Math.PI, false); 
					
				//	obj_canvas['Canvas_Komar_Big_Context'].closePath();

 					
						 
						// obj_canvas['Canvas_Komar_Big_Context'].fillStyle = 'rgba(255 , 0 , 0 , 1 )';
						 
						 
			
	                   //   obj_canvas['Canvas_Komar_Big_Context'].fill();
	              
				  
				  
				  
				  
				  if ( i == arr_result['Level_' + arr_result.Level ]['Komar']['Kolichestvo_Komar'] - 1 ) {

			

	                 obj_canvas['Canvas_Holst_Context'].drawImage ( obj_canvas['Canvas_Komar_Big'] , 0 , 0 );

	                  Next_func ()
	  
	                }
				

	        }//for

        } //try
	
	       catch (e) { console.log ( e );  Error_Game ( 'Img_Komar' , e ) }

	}          	
		   
	
 function Img_Help_Level (){ //// Хэлп для уровня
	
  try { 
  
  
             function Next_func (){ Img_Animation_Dogdy () 
			 
			 }
		  
		 
	   
  if( arr_result ['Animation_Help'] == undefined || arr_result ['Animation_Help']['Animation_Status'] == 'StopAnimation' || arr_result.Zapusk_Play_Game == 'No' ){

	          Next_func ();
		 
		      return false ;
		
		    }  
  
         
         
		  let  W1 = obj_img ['Help_Hend']['width_canvas'] , H1 = obj_img ['Help_Hend']['height_canvas'] ,

             X = arr_result ['Animation_Help']['X'] ,

		     Y = arr_result ['Animation_Help']['Y'] ,
		   
		     Hag = arr_result ['Animation_Help']['Hag'] ,
		   
		     Ugol = arr_result ['Animation_Help']['Ugol'] ,
		   
		     Timer = arr_result ['Animation_Help']['Timer'] ;
		  
		  if (arr_result ['Animation_Help']['Animation_Status'] == 'StartAnimation'){

		  }
		  
		  arr_result ['Animation_Help']['Animation_Status'] = 'AnimationInProgress' ;
		  
		  
		  fps = arr_result ['Animation_Help']['Fps']  ;
		 
		 obj_canvas['Canvas_Help_Hend_Big_Context'].clearRect ( 0 , 0 , st_fig , st_fig );
		 

	             obj_canvas['Canvas_Help_Hend_Big_Context'].save();
			 
			     
	 
                obj_canvas['Canvas_Help_Hend_Big_Context'].translate( X  , Y );
				   
                   obj_canvas['Canvas_Help_Hend_Big_Context'].rotate( ( Ugol ) * Math.PI  / 180 );

		 
		               if ( X <= st_fig / 2 && Y <= st_fig / 2 ) { 

						   X = X + Hag ;
						   
						   Y = Y + Hag;
						   
						   if (isNumeric (X) && isNumeric (Y) ){
							   
							  arr_result ['Animation_Help']['X'] = X ;

		                      arr_result ['Animation_Help']['Y'] = Y  
							   
							   
						    } else {
							   
							   arr_result ['Animation_Help']['X'] = 0 ;

		                       arr_result ['Animation_Help']['Y'] = 0  
							   
						    }

						   
					   } else {

						  if( Timer >= 0) {
						   
					             Timer = Timer - 0.1;
								 
								 if (isNumeric (Timer)){
								 
								     arr_result ['Animation_Help']['Timer'] = Timer
									 
								    } else { arr_result ['Animation_Help']['Timer'] = 1   }
						 
						    } else {

							 arr_result ['Animation_Help']['Animation_Status'] = 'StopAnimation';
							 
							 arr_result ['Animation_Help']['Help_Closed'] = 'Closed'

						    }

					   
					   }

                     if ( Timer > 0.6 ){
     					
                     obj_canvas['Canvas_Help_Hend_Big_Context'].drawImage ( obj_canvas['Canvas_Help_Hend'] , 0 , 0 , W1 , H1 , -W1/2 , -H1/2  , W1 * Timer , H1 * Timer );
					 
					 } else {
						 
						 obj_canvas['Canvas_Help_Hend_Big_Context'].arc(- W1/2 , -H1/2 , 30, 0, 2*Math.PI, false);  
						 
						 obj_canvas['Canvas_Help_Hend_Big_Context'].fillStyle = 'rgba(255 , 0 , 0 , ' + Timer + ')';
						 
						 
			
	                      obj_canvas['Canvas_Help_Hend_Big_Context'].fill();
					 
					 obj_canvas['Canvas_Help_Hend_Big_Context'].drawImage ( obj_canvas['Canvas_Help_Hend'] , 0 , 0 , W1 , H1 , -W1/2 , -H1/2  , W1  , H1  );
					 
					 }
					 

                      obj_canvas['Canvas_Help_Hend_Big_Context'].restore();

				      obj_canvas['Canvas_Holst_Context'].drawImage ( obj_canvas['Canvas_Help_Hend_Big'] , 0 , 0 );
		
		
		
		
		
		Next_func ()
		
		
      } //try
	
	catch (e) {  console.log ( e ); Error_Game ( 'Img_Help_Level' , e ) }
	
	
	}
	
	
  function Img_Animation_Dogdy (){ ////Дождь
	
  try {
	     
		 function Next_func (){ Img_Animation_Babochka () }
		 
		 
	   
	      if( arr_result['Animation_Oblaka'] == undefined ||   arr_result['Animation_Oblaka']['Animation_Status'] == 'StopAnimation' || arr_result['Level_' + arr_result.Level ]['Animation_Dogdy'] == undefined ||  arr_result['Level_' + arr_result.Level ]['Animation_Dogdy']['Animation_Status'] == 'StopAnimation' || arr_result.Zapusk_Play_Game == 'No' ){
			  
			 if (arr_result['Animation_Oblaka'] != undefined && arr_result['Level_' + arr_result.Level ]['Animation_Suhoe_Ozero']['Animation_Status'] == 'StopAnimation' && arr_result.Zapusk_Play_Game != 'No' ){
				 
				 
				 
			     let Start_Animation = randomNumber ( 1 , arr_result['Level_' + arr_result.Level ]['Animation_Dogdy']['Start_Animation'] );
			 
			      if ( Start_Animation == 5  && arr_result.Zapusk_Play_Game != 'No' && arr_result['Animation_Oblaka']['X'] > X_st + ( st / 2 ) && arr_result['Animation_Oblaka']['X'] < arr_result.W_win ){ 
			 
			         arr_result['Level_' + arr_result.Level ]['Animation_Dogdy']['Animation_Status'] = 'StartAnimation' 
				 
			        }
			    }
			  

	          Next_func ();
		 
		      return false ;
		
		    } 

         			
		  
	     

		  if ( arr_result['Level_' + arr_result.Level ]['Animation_Dogdy']['Animation_Status'] == 'StartAnimation' ){
			  
			  fps = arr_result['Level_' + arr_result.Level ]['Animation_Dogdy']['Fps'] ;
			  
			   obj_canvas['Canvas_Field_Context'].save ();
               
		         obj_canvas['Canvas_Field_Context'].translate ( arr_result['Animation_Oblaka']['X'] , arr_result['Animation_Oblaka']['Y'] + obj_img['Molniya']['height_canvas'] );

		         obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas['Canvas_Molniya'] , - obj_img['Molniya']['width_canvas'] / 2 ,  - obj_img['Molniya']['height_canvas'] / 2 );

		         obj_canvas['Canvas_Field_Context'].restore ();

		          arr_result['Level_' + arr_result.Level ]['Napravlenie_Frog'] = 'Udivlenie' ; 
			  
		  
			      Play_Audio ( 'audio_Dogdy' ) ;

              
		    
			
			}
			
			    // Включаем наполнение озера во время дождя если оно сухое
				
				
			if ( arr_result['Animation_Ozero']['Ozero_Status'] == 'Suhoe' ) {
				  
				  if( arr_result['Level_' + arr_result.Level ]['Animation_Suhoe_Ozero'] != undefined && arr_result['Level_' + arr_result.Level ]['Animation_Suhoe_Ozero']['Animation_Status'] == 'StopAnimation' 

                     &&  arr_result ['Animation_Oblaka'] ['X']	> arr_result ['Animation_Ozero'] ['X'] - obj_img ['Ozero']['width_canvas']

                     &&	arr_result ['Animation_Oblaka'] ['X'] < arr_result ['Animation_Ozero'] ['X'] + obj_img ['Ozero']['width_canvas']
				   ){
					  
				      arr_result['Level_' + arr_result.Level ]['Animation_Suhoe_Ozero']['Animation_Status'] = 'StartAnimation'
	
			       }
				   
			    }

	      

		  let  W1 = obj_img['Dogdy']['width_canvas'] , H1 = obj_img['Dogdy']['height_canvas'] ,
      		  X = arr_result['Animation_Oblaka']['X'] ,

		      Y = arr_result['Animation_Oblaka']['Y'] + H1 / 2 ,
		   
		      Hag = arr_result['Animation_Oblaka']['Hag'] ,
			  
			  VN = arr_result['Level_' + arr_result.Level ]['Animation_Dogdy']['VN']

		   ;

          arr_result['Level_' + arr_result.Level ]['Animation_Dogdy']['Animation_Status'] = 'AnimationInProgress' ;
		   
		     if ( VN == 1 ) { VN = 2;
			     
	             obj_canvas['Canvas_Field_Context'].save ();
               
		         obj_canvas['Canvas_Field_Context'].translate ( X , Y );

		         obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas['Canvas_Dogdy'] , - W1 / 2 ,  - H1 / 2 );

		         obj_canvas['Canvas_Field_Context'].restore ();
				 
			    } else { VN = 1 }
		  
		        arr_result['Level_' + arr_result.Level ]['Animation_Dogdy']['VN'] = VN ;

                       if ( X + W1 / 2 > 0 ){
						   
						    X =  X - Hag 
					   
					   } else {
						   
						  arr_result['Level_' + arr_result.Level ]['Animation_Dogdy']['Animation_Status'] = 'StopAnimation' ;
						   
					   }						  
					  
                      
					  
					  if ( isNumeric ( X ) ) {
						  
				         arr_result['Level_' + arr_result.Level ]['Animation_Dogdy']['X_Dogdy'] = X 
					  
					  } else{
						  
						  arr_result['Level_' + arr_result.Level ]['Animation_Dogdy']['X_Dogdy'] = arr_result['Animation_Oblaka']['X'];

					  }

					  Next_func ()

	} //try
	
	catch (e) {  console.log ( e ); Error_Game ( 'Img_Animation_Dogdy' , e ) }
	
	
	}
	
  function Img_Animation_Babochka (){ ////Бабочка
	
  try {
	     
		 function Next_func (){ Animation_End_Level_Heppy () }
		 
		 
	   
	      if( arr_result['Level_' + arr_result.Level ]['Animation_Babochka'] == undefined || arr_result['Level_' + arr_result.Level ]['Animation_Babochka']['Animation_Status'] == 'StopAnimation' || arr_result.Zapusk_Play_Game == 'No' ||  arr_result.Easy_Game == 'Yes' ){
			  
			 if ( arr_result['Level_' + arr_result.Level ]['Animation_Babochka'] != undefined  && arr_result.Zapusk_Play_Game != 'No' &&  arr_result.Easy_Game != 'Yes' ){
				 
				 
				 
			     let Start_Animation = randomNumber ( 1 , arr_result['Level_' + arr_result.Level ]['Animation_Babochka']['Start_Animation'] );
			 
			      if ( Start_Animation == 5  ){ 
			 
			         arr_result['Level_' + arr_result.Level ]['Animation_Babochka']['Animation_Status'] = 'StartAnimation' 
				 
			        }
			    }
			  

	          Next_func ();
		 
		      return false ;
		
		    } 
    

	     let W1 = obj_img['Babochka_1']['width_canvas'] , H1 =  obj_img['Babochka_1']['height_canvas'] , 

		 W1_Zoom = arr_result['Level_' + arr_result.Level ]['Animation_Babochka']['W_Zoom'] ,
		 
		 
		 H1_Zoom = arr_result['Level_' + arr_result.Level ]['Animation_Babochka']['H_Zoom'] ,

         X = arr_result['Level_' + arr_result.Level ]['Animation_Babochka']['X'] ,

         Y = arr_result['Level_' + arr_result.Level ]['Animation_Babochka']['Y']   ,
		 
		  

         Hag = arr_result['Level_' + arr_result.Level ]['Animation_Babochka']['Hag'] ,	
	
	      VN = arr_result['Level_' + arr_result.Level ]['Animation_Babochka']['VN'] 
	
	    ;
		
		 if(  arr_result['Level_' + arr_result.Level ]['Animation_Babochka']['Animation_Status'] == 'StartAnimation' ){ 
		 
		      Play_Audio ('audio_Babochka');
		 
		     X = arr_result['Level_' + arr_result.Level ]['Animation_Babochka']['X'] = st_fig / 2 ;
			 
			 Y = arr_result['Level_' + arr_result.Level ]['Animation_Babochka']['Y'] = st_fig / 2 ;
			 
			 W1_Zoom = W1 ;
		 
		 
		     H1_Zoom = H1 ;
		 
		 }
		 
		 arr_result['Level_' + arr_result.Level ]['Animation_Babochka']['Animation_Status'] = 'AnimationInProgress' ;
		
	      W1_Zoom = W1_Zoom - W1 / Hag;
		 
		  H1_Zoom = H1_Zoom - H1 / Hag;
		  
		  
		  
		   if (  W1_Zoom  > 0 ) { 
		   
		       obj_canvas['Canvas_Babochka_Big_Context'].clearRect ( 0 , 0 , st_fig , st_fig );
		   
		   
		      obj_canvas['Canvas_Babochka_Big_Context'].save();

              obj_canvas['Canvas_Babochka_Big_Context'].translate( X , Y );
		   
		   
		     if ( VN == 1){ VN = 2 ;

			      obj_canvas['Canvas_Babochka_Big_Context'].drawImage ( obj_canvas['Canvas_Babochka_1'] , 0 , 0 ,  W1 , H1 , - W1_Zoom / 2 , - H1_Zoom / 2 , W1_Zoom , H1_Zoom );

			   } else{ VN = 1 ;

			     obj_canvas['Canvas_Babochka_Big_Context'].drawImage ( obj_canvas['Canvas_Babochka_2'] , 0 , 0 ,  W1 , H1 , - W1_Zoom / 2 , - H1_Zoom / 2 , W1_Zoom , H1_Zoom );	 
			   }

              
			  obj_canvas['Canvas_Babochka_Big_Context'].restore ();
			  
			  
			  obj_canvas['Canvas_Holst_Context'].drawImage ( obj_canvas['Canvas_Babochka_Big'] , 0 , 0 );
			 



			 arr_result['Level_' + arr_result.Level ]['Animation_Babochka']['VN'] = VN ;
		
	
		  
		  if ( isNumeric( W1_Zoom ) && isNumeric( H1_Zoom ) ){
			  
			     arr_result['Level_' + arr_result.Level ]['Animation_Babochka']['W_Zoom'] = W1_Zoom ; 

				 arr_result['Level_' + arr_result.Level ]['Animation_Babochka']['H_Zoom'] = H1_Zoom ; 

			    }
		   

		   
		    } else {

				arr_result['Level_' + arr_result.Level ]['Animation_Babochka']['Animation_Status'] = 'StopAnimation' ;

			}
	
       Next_func ()
	
	} //try
	
	catch (e) {  console.log ( e ); Error_Game ( 'Img_Animation_Babochka' , e ) }
	
	
	}
  
  function Animation_End_Level_Heppy ( ) { //Анимация окончания уровня
  
             function Next_func (){  Img_End ()  }
		  
		 
	   
	      if(  arr_result['Animation_End_Level_Heppy' ]['End_Level_Heppy'] == 0  ){

	          Next_func ();
		 
		      return false ;
		
		    }  
  
	 
	          let  i_max = 10 , audio_speed = arr_result['Animation_End_Level_Heppy']['Audio_speed'] , W2 = obj_img['Kaply']['width_canvas'] , H2 =  obj_img['Kaply']['height_canvas'] , Max_kol_prigok = arr_result['Animation_End_Level_Heppy']['Max_kol_prigok'] ;

			     fps = arr_result['Animation_End_Level_Heppy']['Fps'];  
				 
				 obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas['Canvas_Holst'] , X_st , Y_st );

	 
	             if(  arr_result['Animation_End_Level_Heppy']['End_Level_Heppy'] < Max_kol_prigok  ) { 
	 
	                  if ( arr_result['Animation_End_Level_Heppy']['End_Level_Heppy'] % 2 ){ 
		 
						  arr_result['Level_' + arr_result.Level ]['Y_Frog']  = arr_result['Level_' + arr_result.Level ]['Y_Frog'] - 100 ;

		                } else { 
		 
						  arr_result['Level_' + arr_result.Level ]['Y_Frog']  = arr_result['Level_' + arr_result.Level ]['Y_Frog'] + 100 ;
	
		                }

		              if (arr_result['Animation_End_Level_Heppy']['End_Level_Heppy'] == Max_kol_prigok - 2 ){

						  arr_result['Level_' + arr_result.Level ]['Napravlenie_Frog'] = 'DoNotShow';
						
						  Play_Audio ( 'audio_Jump' , audio_speed ) ;

					    } else if(  arr_result['Animation_End_Level_Heppy']['End_Level_Heppy'] == Max_kol_prigok - 1  ) { 
					 
					      arr_result['Level_' + arr_result.Level ]['Napravlenie_Frog'] = 'DoNotShow';
					 
					 
                          if ( arr_result['Animation_Ozero'] != undefined && arr_result['Animation_Ozero']['Ozero_Status'] == 'Suhoe' ) {
				  
				              let W3 = obj_img['Udar']['width_canvas'] , H3 =  obj_img['Udar']['height_canvas'] ,  W4 = obj_img['Ozero']['width_canvas'] , dataURL , Num_mes ;

                              obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas [ 'Canvas_Udar' ] , 0 , 0 , W3 , H3 ,

			                  arr_result['Animation_Ozero']['X'] - ( W3 * machtab_fig ) / 2 , arr_result['Animation_Ozero']['Y']   - ( H3 * machtab_fig ) / 2 , W3* machtab_fig , H3* machtab_fig );				   
					  
					  
					          //obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas [ 'Canvas_Udar' ] , 0 , 0 , W3 , H3 , arr_result['Animation_Ozero']['X'] + W4 / 4 - ( W3 * machtab_fig ) / 2 , Y   - ( H3 * machtab_fig ) / 2 , W3* machtab_fig , H3* machtab_fig );
			  
			                  Play_Audio ( 'audio_Cpok' ) ;
				 
				              Play_Audio ( 'audio_Oh' ) ;
					  
					          //Событие когда лягушонок ударился о дно сухого озера
					  
					          // arr_result['Animation_End_Level_Heppy' ]['End_Level_Heppy'] = 0 ;
					  
					          // arr_result['Level_' + arr_result.Level ]['Status_Level'] = 'Vihod_S_Obnuleniem';
					  
					          // Num_mes = obj_language[language]['fr1_3']
							
					          //dataURL = obj_canvas [ 'Canvas_Frog_Udivlenie' ].toDataURL("image/png");

                              // Mes_m.innerHTML = "<img src ='" + dataURL + "'   >" + Num_mes ;

				              // arr_result.Status_game = 'LevelStart';

	                          // Delete_Pause_Play_Button ();			 
							 
				              // Save_base_game ();
				  
				              // Play_Audio ( 'audio_Trabl' ) ;

				              // Opasity_Game_Start ( Second , function (){  Mes.style.display = "block" } , 'No' )

			                } else {


					           obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas [ 'Canvas_Kaply' ] , 0 , 0 , W2 , H2 ,

			                   arr_result['Animation_Ozero']['X'] - ( W2 * machtab_fig ) / 2 , arr_result['Animation_Ozero']['Y'] - ( H2 * machtab_fig ) / 2 , W2* machtab_fig , H2* machtab_fig );

					        }
					
					} else { 

                       Play_Audio ( 'audio_Jump' , audio_speed ) ;
					   
					 }

					   arr_result['Animation_End_Level_Heppy']['End_Level_Heppy'] =  arr_result['Animation_End_Level_Heppy']['End_Level_Heppy'] + 1 ;

		            } else {
						
						Play_Audio ( 'audio_Frog' ) ;
						
						
						//arr_result['Animation_End_Level_Heppy']['End_Level_Heppy'] = 0 ;
						
					//	arr_result['Animation_Frog_Start'] = arr_result['Animation_Frog_Start_Rezerv']
						
						
					  clearTimeout(idT);
                      cancelAnimationFrame(tmuvID);
					  
					  //Удаляем резервную базу уровня
					  
					     Delete_Rezerv_Level_Base ();
						  
						  
					  
					   arr_result.Status_game = 'LevelStart';
					   
					   arr_result['Level_' + arr_result.Level ]['Status_Level'] = 'EndLevel';

						    if ( arr_result.Level + 1 == arr_result.Kol_Level  ) { } else {
						   
						      arr_result['Level_' + Number ( arr_result.Level + 1 ) ]['Status_Level'] = 'OpenLevel';
						   
					        }
			 
			               Save_base_game ();

						   Reclama_control = 'Yes'; //Реклама
						   
						   Play_Audio ( 'audio_Level' ) ;

						   Opasity_Game_Start ( Second , 1  , 'No' );
							
							return false ;


		            }
	           
			 idT = setTimeout(function (){tmuvID = requestAnimationFrame( Greate_pole ) }, Math.round( (1000/fps )   ) );
		    

    }	
	
	
	
	
	
	
	
	
	
	
	
	function Img_End (){ //// Финальная функция
	
      try {
		 
		 // obj_canvas['Canvas_Field_Context'].clearRect ( 0 , 0 , arr_result.W_win , arr_result.H_win );
		  
		  
		                   //   obj_canvas['Canvas_Holst_Context'].strokeRect( 0 , 0 , st_fig , st_fig );
							  
							//  obj_canvas['Canvas_Holst_Context'].strokeRect( 0 , st_fig * 0.6 , st_fig , 1 );

                             obj_canvas['Canvas_Field_Context'].drawImage ( obj_canvas['Canvas_Holst'] , X_st , Y_st );
							 
	     if ( arr_result['Level_' + arr_result.Level ]['Pchela'] != undefined ){
		 if ( arr_result['Level_' + arr_result.Level ]['Pchela']['Kolichestvo_Pchela'] != 0 ) {				 
						

						
			 let   WP = obj_img['Pchela_1_L']['width_canvas'] , HP = obj_img['Pchela_1_L']['height_canvas'] ;
		 
		     
		 
             for (let i = 0 ; i < arr_result['Level_' + arr_result.Level ]['Pchela']['Kolichestvo_Pchela'] ; i++ ){
				 
				  if ( arr_result['Level_' + arr_result.Level ]['Pchela']['Napravlenie_Pchela'] [ i ] != 'Poymana' ){
				   
				     
			 
		             if ( arr_result['Level_' + arr_result.Level ]['X_Click'] >  arr_result['Level_' + arr_result.Level ]['Pchela']['X_Pchela'] [ i ] - WP / 2 

					     && arr_result['Level_' + arr_result.Level ]['X_Click'] <  arr_result['Level_' + arr_result.Level ]['Pchela']['X_Pchela'] [ i ] + WP / 2
							 
					     && arr_result['Level_' + arr_result.Level ]['Y_Click'] >  arr_result['Level_' + arr_result.Level ]['Pchela']['Y_Pchela'] [ i ] - HP / 2
						
					     && arr_result['Level_' + arr_result.Level ]['Y_Click'] <  arr_result['Level_' + arr_result.Level ]['Pchela']['Y_Pchela'] [ i ] + HP / 2
						 
						 && arr_result['Level_' + arr_result.Level ]['Pchela']['Animation_Pchela'] == ''
	
				        ) {
							
						      // Событие поимки пчелы	
							
					         // arr_result['Level_' + arr_result.Level ]['Pchela']['Napravlenie_Pchela'] [ i ] = 'Poymana' ;
							 
							 arr_result['Level_' + arr_result.Level ]['Pchela']['Napravlenie_Pchela'] [ i ] = 'PchelaPoceluy';
								   
						      arr_result['Level_' + arr_result.Level ]['Pchela']['Animation_Pchela'] = 'StartAnimation';

					         Play_Audio ( 'audio_Pchela' ) ;
 
							   break
							   
						    }
							
				    }
							
				}//for
		
		    }
		    }			  					 
		

		
		let End_Muha = undefined , Popal = 'No' ;	

		 if ( arr_result['Level_' + arr_result.Level ]['Muha'] != undefined ) {
							 
		 if ( arr_result['Level_' + arr_result.Level ]['Muha']['Kolichestvo_Muha'] != 0 ) {				 
				End_Muha = 'Yes' ;		

						
			 let  WM = obj_img['Muha_1_L']['width_canvas'] , HM = obj_img['Muha_1_L']['height_canvas'] ;
		 
		     
		 
             for (let i = 0 ; i < arr_result['Level_' + arr_result.Level ]['Muha']['Kolichestvo_Muha'] ; i++ ){
				 
				  if ( arr_result['Level_' + arr_result.Level ]['Muha']['Napravlenie_Muha'] [ i ] != 'Poymana' ){
				   
				      End_Muha = 'No' ;
			 
		             if ( arr_result['Level_' + arr_result.Level ]['X_Click'] >  arr_result['Level_' + arr_result.Level ]['Muha']['X_Muha'] [ i ] - WM / 2 

					     && arr_result['Level_' + arr_result.Level ]['X_Click'] <  arr_result['Level_' + arr_result.Level ]['Muha']['X_Muha'] [ i ] + WM / 2
							 
					     && arr_result['Level_' + arr_result.Level ]['Y_Click'] >  arr_result['Level_' + arr_result.Level ]['Muha']['Y_Muha'] [ i ] - HM / 2
						
					     && arr_result['Level_' + arr_result.Level ]['Y_Click'] <  arr_result['Level_' + arr_result.Level ]['Muha']['Y_Muha'] [ i ] + HM / 2
						 
						 && arr_result['Level_' + arr_result.Level ]['Muha']['Animation_Muha'] == ''
	
				        ) {
							
						      // Событие поимки мухи	
							
					          arr_result['Level_' + arr_result.Level ]['Muha']['Napravlenie_Muha'] [ i ] = 'Poymana' ;

					          Play_Audio ( 'audio_Oyyy' ) ;

							  Popal = 'Yes';
							  
							   break
							   
						    }
							
				    }
							
				}//for
		
		     

		    }

		    }			
							 
							 
	
       let End_Komar = undefined ;
	   
	  if ( arr_result['Level_' + arr_result.Level ]['Komar'] != undefined ) {
		
	  if (  arr_result['Level_' + arr_result.Level ]['Komar']['Kolichestvo_Komar'] != 0 ) {	
	  
			End_Komar = 'Yes' ;

             for (let i = 0 ; i < arr_result['Level_' + arr_result.Level ]['Komar']['Kolichestvo_Komar'] ; i++ ){
				 
			      if ( arr_result['Level_' + arr_result.Level ]['Komar']['Napravlenie_Komar'] [ i ] != 'Poymana' ){
				   
				      End_Komar = 'No' ;
			 
			          let W1_Zoom = arr_result['Level_' + arr_result.Level ]['Komar']['W_Komar_Zoom'] [ i ] ;
					  
			          let H1_Zoom = arr_result['Level_' + arr_result.Level ]['Komar']['H_Komar_Zoom'] [ i ] ;
			  
			 
		              if ( arr_result['Level_' + arr_result.Level ]['X_Click'] >  arr_result['Level_' + arr_result.Level ]['Komar']['X_Komar'] [ i ] - W1_Zoom / 2 

					      && arr_result['Level_' + arr_result.Level ]['X_Click'] <  arr_result['Level_' + arr_result.Level ]['Komar']['X_Komar'] [ i ] + W1_Zoom / 2
							 
					      && arr_result['Level_' + arr_result.Level ]['Y_Click'] >  arr_result['Level_' + arr_result.Level ]['Komar']['Y_Komar'] [ i ] - W1_Zoom / 2
						
					       && arr_result['Level_' + arr_result.Level ]['Y_Click'] <  arr_result['Level_' + arr_result.Level ]['Komar']['Y_Komar'] [ i ] + W1_Zoom / 2
						   
						   && arr_result['Level_' + arr_result.Level ]['Komar']['Animation_Komar'] == ''
	
				        ) {
							
						      // Событие поимки Комара	
							
					         arr_result['Level_' + arr_result.Level ]['Komar']['Napravlenie_Komar'] [ i ] = 'Poymana' ;
   
					         Play_Audio ( 'audio_Oh' ) ;
							   
							 Popal = 'Yes';
							 
							 break
							   
						    } 
							
				}//for
		
		     

		    }			  						 
	  }					 
	  }					 
			
//////////////////////////////////////////////////////////Для Паука

          let End_Pauk = undefined ;
		  
	  if ( arr_result['Level_' + arr_result.Level ]['Pauk'] != undefined ) {
		
	  if ( arr_result['Level_' + arr_result.Level ]['Pauk']['Kolichestvo_Pauk'] != 0 ) {				 
			End_Pauk = 'Yes' ;

             for (let i = 0 ; i < arr_result['Level_' + arr_result.Level ]['Pauk']['Kolichestvo_Pauk'] ; i++ ){
				 
			      if ( arr_result['Level_' + arr_result.Level ]['Pauk']['Napravlenie_Pauk'] [ i ] != 'Poymana' ){
				   
				      End_Pauk = 'No' ;
			 
			          let W1_Zoom = arr_result['Level_' + arr_result.Level ]['Pauk']['W_Pauk_Zoom'] [ i ] ;
					  
			          let H1_Zoom = arr_result['Level_' + arr_result.Level ]['Pauk']['H_Pauk_Zoom'] [ i ] ;
			  
			 
		              if ( arr_result['Level_' + arr_result.Level ]['X_Click'] >  arr_result['Level_' + arr_result.Level ]['Pauk']['X_Pauk'] [ i ] - W1_Zoom / 2 

					      && arr_result['Level_' + arr_result.Level ]['X_Click'] <  arr_result['Level_' + arr_result.Level ]['Pauk']['X_Pauk'] [ i ] + W1_Zoom / 2
							 
					      && arr_result['Level_' + arr_result.Level ]['Y_Click'] >  arr_result['Level_' + arr_result.Level ]['Pauk']['Y_Pauk'] [ i ] - W1_Zoom / 2
						
					       && arr_result['Level_' + arr_result.Level ]['Y_Click'] <  arr_result['Level_' + arr_result.Level ]['Pauk']['Y_Pauk'] [ i ] + W1_Zoom / 2
						   
						   && arr_result['Level_' + arr_result.Level ]['Pauk']['Animation_Pauk'] == ''
	
				        ) {
							
						      // Событие поимки Паука	
							
					         arr_result['Level_' + arr_result.Level ]['Pauk']['Napravlenie_Pauk'] [ i ] = 'Poymana' ;
   
					         Play_Audio ( 'audio_Pauk' ) ; 

							 Popal = 'Yes';
							 
							 break
							   
						    } 
							
				}//for
		
		     

		    }			  						 
							 
	  }
      }	  













				  
				  if ( Popal == 'Yes' ){
					  
					  arr_result['Level_' + arr_result.Level ]['Napravlenie_Frog'] = 'Ulibka'
					  
					  
				    } else if ( Popal == 'No' && ( arr_result['Level_' + arr_result.Level ]['X_Click'] != 0 || arr_result['Level_' + arr_result.Level ]['Y_Click'] != 0 ) )  {
					  
					  arr_result['Level_' + arr_result.Level ]['Napravlenie_Frog'] = 'Zlaya';
					  
					  Play_Audio ( 'audio_Frog' ) ;

					  
				    } else if ( arr_result['Level_' + arr_result.Level ]['Napravlenie_Frog'] == 'Yazyk' ) {
						
						arr_result['Level_' + arr_result.Level ]['Napravlenie_Frog'] = 'Ulibka'
	
					}
					
		 if (arr_result['Level_' + arr_result.Level ]['X_Click'] != 0 || arr_result['Level_' + arr_result.Level ]['Y_Click'] != 0 ) {
			 
			     arr_result['Level_' + arr_result.Level ]['Ugol_Frog'] = 0;
				
				arr_result['Level_' + arr_result.Level ]['X_Click'] = 0;
							   
		         arr_result['Level_' + arr_result.Level ]['Y_Click'] = 0;
				 
				 
			}			
					
					
         
							 
		if ( ( arr_result.Level == 0 && End_Muha == 'Yes' ) || ( arr_result.Level == 1 && End_Komar == 'Yes' ) || ( arr_result.Level == 2 && End_Komar == 'Yes'&& End_Muha == 'Yes' ) || ( arr_result.Level == 3 && End_Pauk == 'Yes' && End_Muha == 'Yes' ) || ( arr_result.Level == 4 && End_Pauk == 'Yes' && End_Komar == 'Yes' ) )	{ 
		
		      
		 
		      function Start_PodLevel () { arr_result.Zapusk_Play_Game = 'Yes';   }

		      //////////////////////////////////////////////// Для первого уровня

		     if (  arr_result.Level == 0 ) { 
		
		          let step = 2 , Kolichestvo_Muha ;
				  
				   arr_result.Zapusk_Play_Game = 'No';
				  
				 
				  
		          if (  arr_result['Level_' + arr_result.Level ]['Muha']['Kolichestvo_Muha'] == 1 ) {
					  
					  Kolichestvo_Muha = 3;   

				   } else if (  arr_result['Level_' + arr_result.Level ]['Muha']['Kolichestvo_Muha'] == 3  ) {
					  
					  Kolichestvo_Muha = 5;  

				   } else if (  arr_result['Level_' + arr_result.Level ]['Muha']['Kolichestvo_Muha'] == 5 ) {
					  
					  Kolichestvo_Muha = 10; 
	
				   } else { step = 1;  
				   
				   }
				   
				   
				     

		          if (  step == 2 ) {
					  
					 arr_result['Level_' + arr_result.Level ]['Muha'] = Load_Rezerv_Level_Base ( 'Muha'   );
					   
					   if (  arr_result.Easy_Game == 'Yes' ){ 
						   
						   arr_result['Level_' + arr_result.Level ]['Muha']['Hag_Muha'] = arr_result['Level_' + arr_result.Level ]['Muha']['Hag_Muha_Easy'];

					   }
					   
					   arr_result['Level_' + arr_result.Level ]['Muha']['Kolichestvo_Muha'] = Kolichestvo_Muha ;
					  
					  
					 
                      Start_PodLevel ();

					 //setTimeout ( Start_PodLevel , 4000 );


					   return false;

				    }
				
				}				   
		
		
		          //////////////////////////////////////////////// Для второго уровня
				  
			 else if (  arr_result.Level == 1 ) { 
		
		          let step = 2 , Kolichestvo_Komar , Karta_Ukusov_Komar =  arr_result['Level_' + arr_result.Level ]['Komar']['Karta_Ukusov_Komar'];
				  
				   arr_result.Zapusk_Play_Game = 'No';
				  
		          if (  arr_result['Level_' + arr_result.Level ]['Komar']['Kolichestvo_Komar'] == 1 ) {
					  
					  Kolichestvo_Komar = 3;


				   } 

		          else if (  arr_result['Level_' + arr_result.Level ]['Komar']['Kolichestvo_Komar'] == 3  ) {
					  
					  Kolichestvo_Komar = 5;

				   }
				   

		          else if (  arr_result['Level_' + arr_result.Level ]['Komar']['Kolichestvo_Komar'] == 5 ) {
					  
					  Kolichestvo_Komar = 10;

				   } else { step = 1  }

		          if (  step == 2 ) { 

					   arr_result['Level_' + arr_result.Level ]['Komar'] = Load_Rezerv_Level_Base ( 'Komar'   );
					   

					    if (  arr_result.Easy_Game == 'Yes' ){ 
						   
						   arr_result['Level_' + arr_result.Level ]['Komar']['Hag_Komar'] = arr_result['Level_' + arr_result.Level ]['Komar']['Hag_Komar_Easy'];

					   }
					   

					   arr_result['Level_' + arr_result.Level ]['Komar']['Kolichestvo_Komar'] = Kolichestvo_Komar ;
					   
					   arr_result['Level_' + arr_result.Level ]['Komar']['Karta_Ukusov_Komar'] = Karta_Ukusov_Komar ;
					   
					   
                      Start_PodLevel ();
					 
					 //setTimeout ( Start_PodLevel , 4000 );

					   return false;

				    }
				
				}				   
		
		   //////////////////////////////////////////////// Для третьего уровня
				  
			 else if (  arr_result.Level == 2 ) { 
		
		          let step = 2 , Kolichestvo_Komar , Kolichestvo_Muha , Karta_Ukusov_Komar =  arr_result['Level_' + arr_result.Level ]['Komar']['Karta_Ukusov_Komar'];
				  
				   arr_result.Zapusk_Play_Game = 'No';
				  
		          if (  arr_result['Level_' + arr_result.Level ]['Komar']['Kolichestvo_Komar'] == 1 ) {
					  
					  
					   Kolichestvo_Muha = 3;
					  
					  Kolichestvo_Komar = 3;

				   } 

		          else if (  arr_result['Level_' + arr_result.Level ]['Komar']['Kolichestvo_Komar'] == 3  ) {
					  
					   Kolichestvo_Muha = 5;
					  
					  Kolichestvo_Komar = 5;

				   }
				   

		          else if (  arr_result['Level_' + arr_result.Level ]['Komar']['Kolichestvo_Komar'] == 5 ) {
					  
					   Kolichestvo_Muha = 10;
					  
					  Kolichestvo_Komar = 10;

				   } else { step = 1 }

		          if (  step == 2 ) {
					  
					  arr_result['Level_' + arr_result.Level ]['Komar'] = Load_Rezerv_Level_Base ( 'Komar'   );
					  
					   arr_result['Level_' + arr_result.Level ]['Muha'] = Load_Rezerv_Level_Base ( 'Muha'   );
					  
					  
					   
					   
					  if (  arr_result.Easy_Game == 'Yes' ){ 
						   
						   arr_result['Level_' + arr_result.Level ]['Muha']['Hag_Muha'] = arr_result['Level_' + arr_result.Level ]['Muha']['Hag_Muha_Easy'];

						   arr_result['Level_' + arr_result.Level ]['Komar']['Hag_Komar'] = arr_result['Level_' + arr_result.Level ]['Komar']['Hag_Komar_Easy'];

					   }
					   


					   arr_result['Level_' + arr_result.Level ]['Komar']['Kolichestvo_Komar'] = Kolichestvo_Komar ;
					   
					   arr_result['Level_' + arr_result.Level ]['Muha']['Kolichestvo_Muha'] = Kolichestvo_Muha ;
					   
					   arr_result['Level_' + arr_result.Level ]['Komar']['Karta_Ukusov_Komar'] = Karta_Ukusov_Komar ;
					   
					  
					  
					  Start_PodLevel ();

					  //setTimeout ( Start_PodLevel , 4000 );

					   return false;

				    }
				
				}


           //////////////////////////////////////////////// Для четвертого уровня
				  
			else if (  arr_result.Level == 3 ) { 
		
		          let step = 2 , Kolichestvo_Pauk , Kolichestvo_Muha , Karta_Ukusov_Pauk =  arr_result['Level_' + arr_result.Level ]['Pauk']['Karta_Ukusov_Pauk'];
				  
				   arr_result.Zapusk_Play_Game = 'No';
				  
		          if (  arr_result['Level_' + arr_result.Level ]['Pauk']['Kolichestvo_Pauk'] == 1 ) {
					  
					  
					   Kolichestvo_Muha = 3;
					  
					  Kolichestvo_Pauk = 3;

				   } 

		          else if (  arr_result['Level_' + arr_result.Level ]['Pauk']['Kolichestvo_Pauk'] == 3  ) {
					  
					   Kolichestvo_Muha = 5;
					  
					  Kolichestvo_Pauk = 5;

				   }
				   

		          else if (  arr_result['Level_' + arr_result.Level ]['Pauk']['Kolichestvo_Pauk'] == 5 ) {
					  
					   Kolichestvo_Muha = 10;
					  
					  Kolichestvo_Pauk = 10;

				   }  else { step = 1 }

		          if (  step == 2 ) {
					  
					 arr_result['Level_' + arr_result.Level ]['Muha'] = Load_Rezerv_Level_Base ( 'Muha'   );
					 
					 arr_result['Level_' + arr_result.Level ]['Pauk'] = Load_Rezerv_Level_Base ( 'Pauk'   );
					  
					  
					   
					     
					   
					   if (  arr_result.Easy_Game == 'Yes' ){ 
						   
						   arr_result['Level_' + arr_result.Level ]['Muha']['Hag_Muha'] = arr_result['Level_' + arr_result.Level ]['Muha']['Hag_Muha_Easy'];
						   
						   arr_result['Level_' + arr_result.Level ]['Pauk']['Hag_Pauk'] = arr_result['Level_' + arr_result.Level ]['Pauk']['Hag_Pauk_Easy'];

					   }
	


					   arr_result['Level_' + arr_result.Level ]['Pauk']['Kolichestvo_Pauk'] = Kolichestvo_Pauk ;
					   
					   arr_result['Level_' + arr_result.Level ]['Muha']['Kolichestvo_Muha'] = Kolichestvo_Muha ;
					   
					   arr_result['Level_' + arr_result.Level ]['Pauk']['Karta_Ukusov_Pauk'] = Karta_Ukusov_Pauk ;
					   
					  Start_PodLevel ();

					  //setTimeout ( Start_PodLevel , 4000 );

					   return false;

				    }
				
				}				   


               //////////////////////////////////////////////// Для пятого уровня
				  
			else if (  arr_result.Level == 4 ) { 
		
		          let step = 2 , Kolichestvo_Pauk , Kolichestvo_Pchela , Kolichestvo_Komar , Karta_Ukusov_Komar = arr_result['Level_' + arr_result.Level ]['Komar']['Karta_Ukusov_Komar'] ,
					   
					   Karta_Ukusov_Pauk = arr_result['Level_' + arr_result.Level ]['Pauk']['Karta_Ukusov_Pauk'] ;
				  
				  arr_result.Zapusk_Play_Game = 'No';
				  
		          if (  arr_result['Level_' + arr_result.Level ]['Pauk']['Kolichestvo_Pauk'] == 1 ) {
					  
					  
					  // Kolichestvo_Pchela = 3;
					  
					  Kolichestvo_Pauk = 3;
					  
					  Kolichestvo_Komar = 3;

				   } 

		          else if (  arr_result['Level_' + arr_result.Level ]['Pauk']['Kolichestvo_Pauk'] == 3  ) {
					  
					 // Kolichestvo_Pchela = 5;
					  
					  Kolichestvo_Pauk = 5;
					  
					  Kolichestvo_Komar = 5;

				 
				   } else {  step = 1 }

		          if (  step == 2 ) {
					  
					   arr_result['Level_' + arr_result.Level ]['Pauk'] = Load_Rezerv_Level_Base ( 'Pauk'   );
					   
					   arr_result['Level_' + arr_result.Level ]['Komar'] = Load_Rezerv_Level_Base ( 'Komar'   );
					  
                       if (  arr_result.Easy_Game == 'Yes' ){ 
						   
						   arr_result['Level_' + arr_result.Level ]['Komar']['Hag_Komar'] = arr_result['Level_' + arr_result.Level ]['Komar']['Hag_Komar_Easy'];
						   
						   arr_result['Level_' + arr_result.Level ]['Pauk']['Hag_Pauk'] = arr_result['Level_' + arr_result.Level ]['Pauk']['Hag_Pauk_Easy'];
						   
						   arr_result['Level_' + arr_result.Level ]['Pchela']['Kolichestvo_Pchela'] = arr_result['Level_' + arr_result.Level ]['Pchela']['Kolichestvo_Pchela_Easy'];

					   }

					   
					   arr_result['Level_' + arr_result.Level ]['Pauk']['Kolichestvo_Pauk'] = Kolichestvo_Pauk ;
					   
					
					   
					   arr_result['Level_' + arr_result.Level ]['Komar']['Kolichestvo_Komar'] = Kolichestvo_Komar ;
					   
					   arr_result['Level_' + arr_result.Level ]['Komar']['Karta_Ukusov_Komar'] = Karta_Ukusov_Komar ;
					   
					   arr_result['Level_' + arr_result.Level ]['Pauk']['Karta_Ukusov_Pauk'] = Karta_Ukusov_Pauk ;
	

					  Start_PodLevel ();

					   return false;

				    }
				
				}				   



						    arr_result['Level_' + arr_result.Level ]['Napravlenie_Frog'] = 'Ulibka';
			 
			               Delete_Pause_Play_Button ();
	  
	                      arr_result['Animation_End_Level_Heppy' ]['End_Level_Heppy'] = 1 ;
						  
						  idT = setTimeout(function (){tmuvID = requestAnimationFrame( Greate_pole ) }, Math.round( (1000/fps )   ) );
                           
	                       

		} else   if (arr_result.Status_game == 'GamePause' ){ 

		  
		                      obj_canvas['Canvas_Field_Context'].save();
                              obj_canvas['Canvas_Field_Context'].font = 'bold 20px  cursive';
                              obj_canvas['Canvas_Field_Context'].fillStyle = '#000000';
							  obj_canvas['Canvas_Field_Context'].textAlign = "center";
			                  obj_canvas['Canvas_Field_Context'].textBaseline="middle";
                              obj_canvas['Canvas_Field_Context'].translate( X_st + st_fig/2 * machtab_fig , Y_st + st_fig/2 * machtab_fig );
							  
							  obj_canvas['Canvas_Field_Context'].drawImage (myimg, 4216 , 0 , 87 , 100 , - 35 , - 50 , 87 , 100 );
							  
                              obj_canvas['Canvas_Field_Context'].fillText( obj_language[language]['fr2'] , 0 , 0 );
				
							  obj_canvas['Canvas_Field_Context'].restore();
		
				   clearTimeout(idT);
		  
		 cancelAnimationFrame(tmuvID);
	  
	     
	  
	    } else {
		
		     
				 
			 if ( arr_result['Level_' + arr_result.Level ]['Status_Level'] == 'Vihod_S_Obnuleniem' ){
		   
		               // Окончание событий выхода лягушки из уровня в связи с превышением лимитов паражений
		   
		                
                       let dataURL , Num_mes ;
			            

                        if (  arr_result['Level_' + arr_result.Level ]['Kto_poymal'] == 'Previhenie_Max_Kolichestvo_Ukusov_Komar' ){


				            Num_mes = obj_language[language]['fr1']
							
							dataURL = obj_canvas [ 'Canvas_Frog_Zlaya' ].toDataURL("image/png");
	
			            }
						
						
						if (  arr_result['Level_' + arr_result.Level ]['Kto_poymal'] == 'Previhenie_Max_Kolichestvo_Ukusov_Pauk' ){


				            Num_mes = obj_language[language]['fr1_1']
							
							dataURL = obj_canvas [ 'Canvas_Frog_Zlaya' ].toDataURL("image/png");
	
			            }
						
						if (  arr_result['Level_' + arr_result.Level ]['Kto_poymal'] == 'Poymana_Pchela' ){


				            Num_mes = obj_language[language]['fr1_2']
							
						dataURL = obj_canvas [ 'Canvas_Frog_Zlaya' ].toDataURL("image/png");
	
			            }
						
					
						
				    

				  Mes_m.innerHTML = "<img src ='" + dataURL + "'   >" + Num_mes ;
				
                  arr_result['Level_' + arr_result.Level ]['Kto_poymal'] = 'Nikto';

				  arr_result.Status_game = 'LevelStart';
							 
				
	 
	              Delete_Pause_Play_Button ();			 
							 
				  Save_base_game ();
				  
				  Play_Audio ( 'audio_Trabl' ) ;
				  
				  
				  Opasity_Game_Start ( Second , function (){  Mes.style.display = "block" } , 'No' )
				  
				  
				 
				 
			    } else {
	 
	              const end = new Date().getTime();
			  
			    

                 clearTimeout(idT);
                 cancelAnimationFrame(tmuvID);			 
		   
		          // idT = setTimeout(function (){tmuvID = requestAnimationFrame( Greate_pole ) }, Math.round( (1000/fps ) - ( end - arr_result.Timer_fps )  ) );
				  
				  
		   
		          idT = setTimeout(function (){tmuvID = requestAnimationFrame( Greate_pole ) }, Math.round( (1000/fps )   ) );
				  
				}
		     
		    
	 
	    }
	
	
	    } //try
	
	      catch (e) {  console.log ( e ); Error_Game ( 'Img_End' , e ) }
	
	
	}
	
	
	
	
	
//////////////////////////////////////////////////////////////////////	
	
	
	
	
	
	
 async  function handleXY_board (e){ //Клавиатура мышка и палец старт
  
            
         
             

              //   let x = ( e.clientX - X_st ) / machtab_fig;
             //    let y = ( e.clientY - Y_st ) / machtab_fig;

		      //   if( e.button == 2 ) {
		     
			  //   alert ( x + " - " + y ); // Координаты клика на гл странице закрыть
			 
			   //  return false;
		 
		       // }    
  
  
   try {  
   
      let x , y ;
   
        if ('ontouchstart' in window) {
		 
                      e.preventDefault();
			  
                      let touches = e.changedTouches;

                      x = ( touches[0].clientX - X_st ) / machtab_fig; 
                      y = ( touches[0].clientY - Y_st ) / machtab_fig;

                    }else{
			
                       e.stopPropagation();

                      x = ( e.clientX - X_st ) / machtab_fig;
                      y = ( e.clientY - Y_st ) / machtab_fig;
			  
                    }
   
         if( e.button == 2 ) {
		     
			
			 
			 return false;
		 
		 }    
  
         
			
	   if ( arr_result.Status_game == 'OneStartGame' ) {

           if ( x >  arr_result.X_Vibor_Variant_Game_button_Easy - arr_result.W_Vibor_Variant_Game_button / 2 && x <  arr_result.X_Vibor_Variant_Game_button_Easy + arr_result.W_Vibor_Variant_Game_button / 2 && y >  arr_result.Y_Vibor_Variant_Game_button_Easy - arr_result.H_Vibor_Variant_Game_button / 2 && y <  arr_result.Y_Vibor_Variant_Game_button_Easy + arr_result.H_Vibor_Variant_Game_button / 2 ){
		 
		       arr_result.Easy_Game = 'Yes';
 
	        } else if ( x >  arr_result.X_Vibor_Variant_Game_button_Hard - arr_result.W_Vibor_Variant_Game_button / 2 && x <  arr_result.X_Vibor_Variant_Game_button_Hard + arr_result.W_Vibor_Variant_Game_button / 2 && y >  arr_result.Y_Vibor_Variant_Game_button_Hard - arr_result.H_Vibor_Variant_Game_button / 2 && y <  arr_result.Y_Vibor_Variant_Game_button_Hard + arr_result.H_Vibor_Variant_Game_button / 2 ){
		 
		       arr_result.Easy_Game = 'No';

	        } else { return false }
			
	    }




	  if ('ontouchstart' in window) {
		 
			          Field.removeEventListener('touchstart', handleXY_board ,{passive:false});
			
			        } else {
			
			          Field.removeEventListener('mousedown', handleXY_board ,{passive:false});

			        }
			
		        // document.removeEventListener('keydown',  handleXY_board ,{passive:false});
	   


	   function handleXY_board_Body (){

	  
	  // console.log ( e.code );
	
	   
	   
	   let Level; // Переменная контролирует смену уровня
	   
      for ( let i = 0 ; i < arr_result.Kol_Level ; i++ ){
				
	      if (arr_result['Level_' + i ] != undefined ){
				
				      
				
			 if ( arr_result['Level_' + i ]['Status_Level']  != 'EndLevel' &&  arr_result['Level_' + i ]['Status_Level']  != 'ClosedLevel'  ){ 
			 

					  
				 Level = i ; 
				 

				 
				 //Сохраняем копию уровня и количество набранных баллов для перезопуска в случае критической ошибки или поимки муравья. Копия удаляется при финале уровня и переходе на следующий уровень или при перезагрузке игры.
				 
				  if ( arr_result.Status_game == "OneStartGame" ){ // Первый запуск игры если выбран первый уровень 
			 
			      arr_result.Level = Level;
			 
			      Save_Rezerv_Level ();

			    } else {

			      if( Level != arr_result.Level ) { //Если выбран другой уровень
			 
			      arr_result.Level = Level;
			 
			      Save_Rezerv_Level ();
	
			    } else { arr_result.Level = Level }

			    } 
				 

				 if ( Reclama_control == 'Yes' ) {
					 
					 Reclama ();
					 
				 }else {  Diagonal ( ) }
				 
				 
				
				 
				// console.log ( arr_result );
				 
				 break;

				 
				
				}
  
            }
        }

		}////////handleXY_board_Body
    
	    Opasity_Game_Start ( handleXY_board_Body )
	
	} //try
	
	 catch (e) {  console.log ( e ); 
	
	
	         if ( arr_result.Status_game == "OneStartGame" ){
			 
			     Error_Start ( 'handleXY_board' , e );
			 
			 
			 } else if ( arr_result.Status_game == "LevelStart" ){
			 
			     Error_Handle ( 'handleXY_board' , e );
			 
			 
			 } else {  Error_Start ( 'handleXY_board' , e ) }

	    }	 
	
	
	
	
	
	}
	
	
	
	
	
  
  function Save_Rezerv_Level () {
  
      try {
  
     // if ( Field.hasAttribute('data-Rezerv_Base_Level_arr_result') ){ } else {
     
	     Field.setAttribute( 'data-Rezerv_Base_Level_arr_result' , JSON.stringify( { Base_Level : arr_result['Level_' + arr_result.Level ] , Ball : arr_result.Ball } ) );

     //   }		 
	  
	 if ( storageAvailable("localStorage") ) {  
	 
	  // if ( localStorage.getItem( 'Rezerv_Base_Level_' + obj_local['loc_base_name'] ) === null){
	 
	      localStorage.setItem( 'Rezerv_Base_Level_' + obj_local['loc_base_name'] , JSON.stringify( { Base_Level : arr_result['Level_' + arr_result.Level ] , Ball : arr_result.Ball } ) ) 
	 
	 
	   // }
	 } 
	 
	 
	} //try
	
	 catch (e) {  console.log ( e ); 
	
	
	         if ( arr_result.Status_game == "OneStartGame" ){
			 
			     Error_Start ( 'Save_Rezerv_Level' , e );
			 
			 
			 } else if ( arr_result.Status_game == "LevelStart" ){
			 
			     Error_Handle ( 'Save_Rezerv_Level' , e );
			 
			 
			 } else {  Error_Start ( 'Save_Rezerv_Level' , e ) }

	    }	  
	 
	 
	 
	 

  }
  
  
  
  
	
  function Start_Restart_Level ( ) { //Обнавление переменных в существующей базе при выходе входе в игру или уровень
  
     try {
  
     if ( arr_result['Level_' + arr_result.Level ]['Status_Level'] == 'Vihod_S_Obnuleniem' || arr_result['Level_' + arr_result.Level ]['Status_Level'] == 'OpenLevel'|| arr_result['Level_' + arr_result.Level ]['Status_Level'] == 'ErrorLevel'
	 
	 ){
	 
	          ///Берем копию исходной базы уровня из ранее сохраненного резерва

			  arr_result['Level_' + arr_result.Level ] = Load_Rezerv_Level_Base ( 'Base' ) ;
			  
			  arr_result['Animation_End_Level_Heppy']['End_Level_Heppy'] = 0 ;
						
arr_result['Animation_Frog_Start'] = arr_result['Animation_Frog_Start_Rezerv'] ;
			 

			 ////////////////////////////////////////////////////////
			 
			  
			  arr_result['Level_' + arr_result.Level ]['Status_Level'] = 'OpenLevel';


		  
		  }
			 
             // Вариант лёгкой игры
			 
		  if (  arr_result.Easy_Game == 'Yes' ){ 
			  
			  if ( arr_result['Level_' + arr_result.Level ]['Muha'] !=  undefined ){ 
			  
			      if ( arr_result['Level_' + arr_result.Level ]['Muha']['Kolichestvo_Muha'] !=  0 ){ 
	
				      arr_result['Level_' + arr_result.Level ]['Muha']['Hag_Muha'] = arr_result['Level_' + arr_result.Level ]['Muha']['Hag_Muha_Easy'];
					 
				   }

			    }
				
			 if ( arr_result['Level_' + arr_result.Level ]['Pchela'] !=  undefined ){ 

      			  if ( arr_result['Level_' + arr_result.Level ]['Pchela']['Kolichestvo_Pchela'] !=  0 ){ 
			  
			         arr_result['Level_' + arr_result.Level ]['Pchela']['Hag_Pchela'] = arr_result['Level_' + arr_result.Level ]['Pchela']['Hag_Pchela_Easy'];
					 
					 arr_result['Level_' + arr_result.Level ]['Pchela']['Kolichestvo_Pchela'] = arr_result['Level_' + arr_result.Level ]['Pchela']['Kolichestvo_Pchela_Easy'];	
					 
				   }

			    }
			  
			 if ( arr_result['Level_' + arr_result.Level ]['Komar'] !=  undefined ){
			   
			   
			     if ( arr_result['Level_' + arr_result.Level ]['Komar']['Kolichestvo_Komar'] !=  0 ){ 

				     arr_result['Level_' + arr_result.Level ]['Komar']['Hag_Komar'] =  arr_result['Level_' + arr_result.Level ]['Komar']['Hag_Komar_Easy'];
					 
				    }

			    }
				
				 if ( arr_result['Level_' + arr_result.Level ]['Pauk'] !=  undefined ) {
					 
				     if (  arr_result['Level_' + arr_result.Level ]['Pauk']['Kolichestvo_Pauk'] != 0 ){


				          arr_result['Level_' + arr_result.Level ]['Pauk']['Hag_Pauk'] =  arr_result['Level_' + arr_result.Level ]['Pauk']['Hag_Pauk_Easy'];

			            }
				    }

		    }//

          		  
			 
		
		  
		  if ( arr_result['Level_' + arr_result.Level ]['Status_Level'] == 'OpenLevel' ) {

		      
			 
			 if ( Reclama_control == 'Yes' ) { // реклама

			     arr_result.Status_game = 'GamePause';

		        } else {
				
				 arr_result.Status_game = 'GamePlay';

				}
				
				Reclama_control = 'No'; // Отменяем рекламу 
	
			   arr_result['Level_' + arr_result.Level ]['Status_Level'] = 'PlayLevel';

			} else {
			
			   arr_result['Level_' + arr_result.Level ]['Status_Level'] = 'PlayLevel';
			
			   arr_result.Status_game = 'GamePlay';
			
			}

		  Save_base_game ();

		  
		  Second ();
		  
		 
		  
	} //try
	
	 catch (e) {  console.log ( e ); 
	
	
	         if ( arr_result.Status_game == "OneStartGame" ){
			 
			     Error_Start ( 'Load_Rezerv_Level' , e );
			 
			 
			 } else if ( arr_result.Status_game == "LevelStart" ){
			 
			     Error_Handle ( 'Load_Rezerv_Level' , e );
			 
			 
			 } else {  Error_Start ( 'Load_Rezerv_Level' , e ) }

	    }	  	  
		  

    }
  
   
  
  function Diagonal(  ){ 
  
     try {
	 
	      Start_Restart_Level ( );
		  
		  
		 } //try
	
	 catch (e) {  console.log ( e ); 
	
	
	         if ( arr_result.Status_game == "OneStartGame" ){
			 
			     Error_Start ( 'Diagonal' , e );
			 
			 
			 } else if ( arr_result.Status_game == "LevelStart" ){
			 
			     Error_Handle ( 'Diagonal' , e );
			 
			 
			 } else {  Error_Start ( 'Diagonal' , e ) }

	    }	  	  

  
  
    }


//////////////////////////////////////////////////////////////////////////////////////////////////////// Клик

   let idTH = undefined ; // переменная контролирует запуск анимации хэлпа

  function handleStart (e){ 
  
  try { 

        
					let x , y ;					 
        
          if ( e == 'Help') {
				 
				 
				  x = arr_result.X_Help_Level - obj_canvas ['Help_Hend']['width_canvas'] / 2 ;
				  
                  y = arr_result.Y_Help_Level - obj_canvas ['Help_Hend']['height_canvas'] / 2 ;
					  
				 
			    } else {

		           if ('ontouchstart' in window) {
		 
                      e.preventDefault();
			  
                      let touches = e.changedTouches;

                       x = ( touches[0].clientX - X_st ) / machtab_fig; 
                       y = ( touches[0].clientY - Y_st ) / machtab_fig;

                    }else{
			
                       e.stopPropagation();

                       x = ( e.clientX - X_st ) / machtab_fig;
                       y = ( e.clientY - Y_st ) / machtab_fig;
			  
                    }
					
				}
				
				// сбрасываем таймер анимации хэлпа ии отключаем её если пользователь разобрался раньше
				
				if( arr_result ['Animation_Help'] != undefined  && arr_result ['Animation_Help']['Help_Closed'] == 'Open' ) {
					
					arr_result ['Animation_Help']['Help_Closed'] = 'Closed' ;
				
				   arr_result ['Animation_Help']['Animation_Status'] = 'StopAnimation'
				
				    if (idTH != undefined ){ clearTimeout ( idTH );  idTH = undefined  }
					
                }
			
			
		
		 
		 if( e.button == 2  ) { //закрыть
		     
		//	alert ( x + " - " + y ); // Координаты клика на уровне закрыть
			 
			 return false;
		 
		 } //закрыть
		 
		 
         
		
		 
		 if( arr_result.Status_game == 'GamePlay' ) {
			 
		//	  clearTimeout( idT );
	   
	   //cancelAnimationFrame( tmuvID );
		     
			
			
			 
			 let radius =  Math.sqrt( Math.abs( arr_result['Level_' + arr_result.Level ]['X_Frog'] - x ) *  Math.abs( arr_result['Level_' + arr_result.Level ]['X_Frog'] - x ) +  Math.abs( arr_result['Level_' + arr_result.Level ]['Y_Frog'] - y )  *  Math.abs( arr_result['Level_' + arr_result.Level ]['Y_Frog'] - y ));
			 
			 
			
			 
			 let ugol_arc = Math.asin( Math.abs( arr_result['Level_' + arr_result.Level ]['Y_Frog'] - y ) / radius ) * 180 / Math.PI;
			 
			 if ( radius == undefined || ugol_arc == undefined ) return false;

			 
			 arr_result['Level_' + arr_result.Level ]['Delta_x_Yazyk'] = Math.abs( arr_result['Level_' + arr_result.Level ]['X_Frog'] - x ) / radius ;
	  
	         
			 
			 arr_result['Level_' + arr_result.Level ]['Delta_y_Yazyk'] =  Math.abs( arr_result['Level_' + arr_result.Level ]['Y_Frog'] - y ) / radius ;
			 
			  if (radius > arr_result['Level_' + arr_result.Level ]['Max_Dlina_Yazyk'] ) {
				 
				 
				 radius = arr_result['Level_' + arr_result.Level ]['Max_Dlina_Yazyk']
				 
				 
			 }
			 
			 arr_result['Level_' + arr_result.Level ]['Diagonal_Yazyk'] = radius ;
			 

				
				if ( x <   arr_result['Level_' + arr_result.Level ]['X_Frog'] && y <   arr_result['Level_' + arr_result.Level ]['Y_Frog'] ){ // верхняя левая четверть

     		      arr_result['Level_' + arr_result.Level ]['Ugol_Frog'] = arr_result['Level_' + arr_result.Level ]['Ugol_Frog_Yazyk'] =  ugol_arc + 180 ;
					 
				  arr_result['Level_' + arr_result.Level ]['Delta_x_Yazyk'] = arr_result['Level_' + arr_result.Level ]['Delta_x_Yazyk'] * -1;
					 
				  arr_result['Level_' + arr_result.Level ]['Delta_y_Yazyk'] = arr_result['Level_' + arr_result.Level ]['Delta_y_Yazyk'] * -1;
				  
			    
	
				}// 1

                else if ( x <   arr_result['Level_' + arr_result.Level ]['X_Frog'] && y >   arr_result['Level_' + arr_result.Level ]['Y_Frog'] ){ //Нижняя левая четверть 
				
				 arr_result['Level_' + arr_result.Level ]['Ugol_Frog'] =  arr_result['Level_' + arr_result.Level ]['Ugol_Frog_Yazyk'] =  180 - ugol_arc  ;
				  
				  arr_result['Level_' + arr_result.Level ]['Delta_x_Yazyk'] = arr_result['Level_' + arr_result.Level ]['Delta_x_Yazyk'] * -1;
				  
				 
				  
				} // 2

                else if ( x >   arr_result['Level_' + arr_result.Level ]['X_Frog'] && y >   arr_result['Level_' + arr_result.Level ]['Y_Frog'] ){ // Нижняя правая четверть 
				
				arr_result['Level_' + arr_result.Level ]['Ugol_Frog'] =  arr_result['Level_' + arr_result.Level ]['Ugol_Frog_Yazyk'] = ugol_arc ;

	
				} //3

                else if ( x > arr_result['Level_' + arr_result.Level ]['X_Frog'] && y <   arr_result['Level_' + arr_result.Level ]['Y_Frog']  ){ // Верхняя правая четверть
				
				 arr_result['Level_' + arr_result.Level ]['Ugol_Frog'] = arr_result['Level_' + arr_result.Level ]['Ugol_Frog_Yazyk'] =  90 - ugol_arc + 270 ;
				 
				 arr_result['Level_' + arr_result.Level ]['Delta_y_Yazyk'] = arr_result['Level_' + arr_result.Level ]['Delta_y_Yazyk'] * -1;
                   
				 
				
				}  //4
				
				
				 arr_result['Level_' + arr_result.Level ]['X_Click'] = arr_result['Level_' + arr_result.Level ]['X_Frog'] + arr_result['Level_' + arr_result.Level ]['Diagonal_Yazyk'] * arr_result['Level_' + arr_result.Level ]['Delta_x_Yazyk'] ; 
				 
				
			 
			 arr_result['Level_' + arr_result.Level ]['Y_Click'] = arr_result['Level_' + arr_result.Level ]['Y_Frog'] + arr_result['Level_' + arr_result.Level ]['Diagonal_Yazyk'] * arr_result['Level_' + arr_result.Level ]['Delta_y_Yazyk'] ;
				
            



			 
			  arr_result['Level_' + arr_result.Level ]['Napravlenie_Frog'] = 'Yazyk';
			  
			  Play_Audio ( 'audio_Cpok' ) ;

			}
			
			

        
      }//try
		 
           catch (e) {  console.log ( e ); Error_Handle ( 'handleStart' , e ) }
	         
	 
	 }

    
    
		





		


///////////////////////////////////////////////////////////////////////////////////////////////////


   


     function Def (e){ if ('ontouchstart' in window) {e.preventDefault();}else{e.stopPropagation();} }


function storageAvailable(type) {
  try {
    let storage = window[type],
      x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return false;
  }
}

  function Language_detection () {
	
	try {     

	  

          language = window.navigator ? (window.navigator.language || window.navigator.systemLanguage || window.navigator.userLanguage) : "en";

          language = language.substr(0, 2).toLowerCase();

       

      if (obj_language.hasOwnProperty(language)) {  } else {  language = "en"; }

       Field.setAttribute( 'data-language' , language ); 
	  
	   if ( storageAvailable("localStorage") ) {  localStorage.setItem( 'language_' + obj_local['loc_base_name'] , language ) } 	  
	
	  }//try
		 
           catch (e) {  console.log ( e ); // Error_Start ( 'Language_detection' , e ) 
		   
		      language = 'en';
		   
		   
		   }
	
	
	}





   function One (){  
   
        try {     
										 
        
             
   
         if ( storageAvailable("localStorage") ) {
		 
              if ( localStorage.getItem( 'language_' + obj_local['loc_base_name'] ) === null ) { Language_detection () } else { language = localStorage.getItem( 'language_' + obj_local['loc_base_name'] ) }
			  
			}else {
			
			  if ( Field.hasAttribute('data-language') ){ language = Field.getAttribute('data-language') } else { Language_detection () } 
			
			
			}
			
		
		 
		 
		 
		
		if ( storageAvailable("localStorage") ) {
		 
              if ( localStorage.getItem( 'audioControl_' + obj_local['loc_base_name'] ) === null ) { 
			  
			  
			     localStorage.setItem( 'audioControl_' + obj_local['loc_base_name'] , Sound_control ) ;
				 
				 Field.setAttribute( 'data-audioControl' , Sound_control );
	
				} 
			  
			} else {
			
			  if ( Field.hasAttribute('data-audioControl') ){  } else { 
			  
			     Field.setAttribute( 'data-audioControl' , Sound_control ); 

			    } 
			
			}
		
		
		
	    
         
       
	   
	   //База
       // 60 240
	   
	   
   
       arr_result = { fps : 20 , fps_animation : 20 , Timer_fps : 0 ,  Zona_Clica_Menu : 100 , Level : 0 , Kol_Level : 5 ,  Status_game : 'OneStartGame', Audio_exists : 1 ,  Ball: 0 , Timer: [0,0,0] ,  Resize_Game : 'Yes' , VisibilityChange_Game : 'Yes',
	   
	     Zapusk_Play_Game : 'No' ,
	   
	     W_Vibor_Variant_Game_button : 150 , H_Vibor_Variant_Game_button : 40 ,
		 
		 X_Vibor_Variant_Game_button_Easy : 416 , Y_Vibor_Variant_Game_button_Easy : 476 , X_Vibor_Variant_Game_button_Hard : 416 , Y_Vibor_Variant_Game_button_Hard : 556 , Easy_Game : 'Yes',

		 
		 Opasity_Time : 60 ,  Opasity_control : 'Yes' ,
		 
		 
		
	   
	   W_win: 0, H_win : 0 ,
	   
	   Animation_Help : {
		   
		   Animation_Status : 'StopAnimation' ,
		   
		    X : 0 , Y : 0 , Ugol : 0  ,	Hag : 10 ,   Timer : 1 ,
			
			Fps : 10 ,
	   
	     Help_Time_Start : 9000 , // Время задержки показа Хэлпа на уровне
		 
		 Help_Closed : 'Open' , // Закрытие показа хэлпа после первого показа
		 
	   } ,
	   
	   Animation_Oblaka : {

		   X : 0 , Y : 0 , Hag : 1 , Animation_Status : 'StartAnimation' , 
	   
	   },
	   
	   Animation_Ozero : { 
	   
	    X : 0 , Y : 0 , Kls : 0 ,
	   
	    Animation_Status : 'StartAnimation' , 
		
		globalAlpha : 1 ,
		
		Ozero_Status : 'Polnoe' ,
		
		},
		
		
		
		 // Анимация первого выхода лягушки в начале уровня
			
			Animation_Frog_Start : {
				
				Animation_Status : 'StartAnimation' ,
				
				W_Frog_Zoom : 0 , H_Frog_Zoom : 0 ,
			 
			 Hag : 30 , VN : 1 , Time_Zapusk_Game : 3000 ,

			  Audio_speed : 2 ,
			  
			  X_END : 0 ,
			  
			  Hag_Frog_animation : 0 ,
			  
			  Zapusk_Frog : 'No' ,
			  
			  Fps : 10 ,

				
			} ,
			
			//Резервные копии анимаций первого выхода лягушки для обнавления при переходе между уровнями
			
			Animation_Frog_Start_Rezerv : {
				
				Animation_Status : 'StartAnimation' ,
				
				W_Frog_Zoom : 0 , H_Frog_Zoom : 0 ,
			 
			 Hag : 30 , VN : 1 , Time_Zapusk_Game : 3000 ,

			  Audio_speed : 2 ,
			  
			  X_END : 0 ,
			  
			  Hag_Frog_animation : 0 ,
			  
			  Zapusk_Frog : 'No' ,
			  
			  Fps : 10 ,

				
			} ,
	   
	   // Анимация выхода лягушки из уровня
	   
	    Animation_End_Level_Heppy : {
			
			End_Level_Heppy : 0 ,
			
			Audio_speed : 2 ,
			
			Fps : 10 ,
			
			Max_kol_prigok : 18 ,
			
			
		},
	   

	   Napravlenie_Frog : 'Ulibka' , Color_Ukus_Komar : "rgba(255,20,147,1)" , Radius_Ukus_Komar : 3 ,

         //OpenLevel
		
	Level_0 : { N_L : 0 , Status_Level : 'OpenLevel' ,  X_Norka_Menu : 194 , Y_Norka_Menu : 30  , X_Click : 0 ,      Y_Click : 0 , Kto_poymal : 'Nikto',


			 X_Frog : 135 , Y_Frog :  500 , Ugol_Frog : 0  , Ugol_Frog_Yazyk : 0  , Delta_x_Yazyk : 0 , Delta_y_Yazyk : 0 , Diagonal_Yazyk : 0 , Max_Dlina_Yazyk : 200 ,
			  
			
          // Анимация высыхания озера не показывается без озера


		  Animation_Suhoe_Ozero : { 

		     Animation_Status : 'StopAnimation' ,

			  Hag : 0.01 ,
		  
		     Start_Animation : 1000 ,

	        },



		 // Анимация дождя не показывается без облаков


		  Animation_Dogdy : { 

		     Animation_Status : 'StopAnimation' ,

			 VN : 1 , 
		  
		     Start_Animation : 300 ,
			 
			 Fps : 5 ,
	   
	        },
			
			
			//////// Анимация полета бабочки
			
			Animation_Babochka : {
				
			Animation_Status : 'StopAnimation' ,

			X : 0 , Y : 0 , W_Zoom : 0 , H_Zoom : 0 ,

				Hag : 30 ,
				
				VN : 1 ,

				Start_Animation : 1000 ,
		
			},
			
			
			//////// Анимация прыжка другой лягушки в озеро
			
			Animation_Frog_Prygok_v_vodu : {
				
			Animation_Status : 'StopAnimation' ,

			X_Frog_Prigok : 0 , Y_Frog_Prigok : 0 ,

				Hag : 10 ,
				
				VN : 1 ,
				
				Audio_speed : 2 ,

				Start_Animation : 2000 ,
				
				Fps : 5 ,
				
				
			},
			
			//////// Анимация прыжка Дарк Вэйдера в озеро
			
			Animation_DarkVeyder_Prygok_v_vodu : {
				
			Animation_Status : 'StartAnimation' ,

			X_DarkVeyder_Prigok : 0 , Y_DarkVeyder_Prigok : 0 ,

				Hag : 10 ,

				Audio_speed : 2 ,

				Start_Animation : 2000 ,
				
				Fps : 5 ,
				
				VN : 1 ,
				
				
			},
			
			 //////// Анимация прыжка Рояля в озеро
			
			Animation_Piano_Prygok_v_vodu : {
				
			Animation_Status : 'StopAnimation' ,

			X : 0 , Y : 0 ,

				Hag : 10 ,
				
				VN : 1 ,
				
				Audio_speed : 3 ,
				
				Start_Animation : 2000 ,
				
				Fps : 5 ,
				
				
			},



			////////////////////////// Муха исправленная
			 
			Muha : { Kolichestvo_Muha : 3 , L_R_B_Muha : [ 1 , 2 , 1 , 2 , 1 , 2 , 1 , 2 , 1 , 2  ] , Move_Muha : 'Yes' ,

			X_Muha : [ 300 , 300 ,  300 , 300 ,  300 , 300 ,  300 , 300 ,  300 , 300 ] , 
			
			Y_Muha : [ 300 , 100 ,  300 , 100 ,  300 , 100 ,  300 , 100 ,  300 , 100 ] ,  
	
			Ugol_Muha : []  , 
			
			Napravlenie_Muha : [ 'vibor', 'vibor' , 'vibor', 'vibor' , 'vibor' , 'vibor', 'vibor' , 'vibor', 'vibor' , 'vibor' ] ,

			Delta_x_Muha : [] , Delta_y_Muha : [] ,	Diagonal_Muha : [] , 
					
			Animation_Muha : '' ,
			
			Hag_Muha_Easy : [ 15 , 5 , 5 , 5 , 15 , 5 , 5 , 7 , 15 , 7 ] ,
	
			Hag_Muha : [ 10 , 10 , 10 , 10 , 10 , 10 , 10 , 15 , 15 , 15 ] ,

			Img_L_R_Muha : [] ,
			
            },
	

	   } ,  // Конец первого уровня

       //ClosedLevel	   
	   
    Level_1 : { N_L : 1 , Status_Level : 'ClosedLevel' ,  X_Norka_Menu : 320  , Y_Norka_Menu : 50 , X_Click : 0 ,      Y_Click : 0 , Kto_poymal : 'Nikto',

			 X_Frog : 135 , Y_Frog :  500 , Ugol_Frog : 0  , Ugol_Frog_Yazyk : 0  , Delta_x_Yazyk : 0 , Delta_y_Yazyk : 0 , Diagonal_Yazyk : 0 , Max_Dlina_Yazyk : 200 ,
			  
		
		
          // Анимация высыхания озера не показывается без озера


		  Animation_Suhoe_Ozero : { 

		     Animation_Status : 'StopAnimation' ,

			  Hag : 0.1 ,
		  
		     Start_Animation : 1000 ,

	        },



		 // Анимация дождя не показывается без облаков


		  Animation_Dogdy : { 

		     Animation_Status : 'StopAnimation' ,

			 VN : 1 , 
		  
		     Start_Animation : 300 ,
			 
			 Fps : 5 ,
	   
	        },
			
			
			//////// Анимация полета бабочки
			
			Animation_Babochka : {
				
			Animation_Status : 'StopAnimation' ,

			X : 0 , Y : 0 , W_Zoom : 0 , H_Zoom : 0 ,

				Hag : 30 ,
				
				VN : 1 ,

				Start_Animation : 1000 ,
		
			},
			
			
			//////// Анимация прыжка другой лягушки в озеро
			
			Animation_Frog_Prygok_v_vodu : {
				
			Animation_Status : 'StopAnimation' ,

			X_Frog_Prigok : 0 , Y_Frog_Prigok : 0 ,

				Hag : 10 ,
				
				VN : 1 ,
				
				Audio_speed : 2 ,

				Start_Animation : 2000 ,
				
				Fps : 5 ,
				
				
			},
			
			//////// Анимация прыжка Дарк Вэйдера в озеро
			
			Animation_DarkVeyder_Prygok_v_vodu : {
				
			Animation_Status : 'StopAnimation' ,

			X_DarkVeyder_Prigok : 0 , Y_DarkVeyder_Prigok : 0 ,

				Hag : 10 ,

				Audio_speed : 2 ,

				Start_Animation : 2000 ,
				
				Fps : 5 ,
				
				VN : 1 ,
				
				
			},
			
			 //////// Анимация прыжка Рояля в озеро
			
			Animation_Piano_Prygok_v_vodu : {
				
			Animation_Status : 'StopAnimation' ,

			X : 0 , Y : 0 ,

				Hag : 10 ,
				
				VN : 1 ,
				
				Audio_speed : 3 ,
				
				Start_Animation : 2000 ,
				
				Fps : 5 ,
				
				
			},
		
		//////////////////////////////////////////////////// Комар исправленный
			
			Komar : {	Kolichestvo_Komar : 3 , Max_Kolichestvo_Ukusov_Komar : 5 , L_R_B_Komar : [ 1 , 2 , 1 , 2 , 1 , 2 , 1 , 2 , 1 , 2  ] ,

			X_Komar : [] , Y_Komar : [] , 

			Napravlenie_Komar : [ 'vibor', 'vibor' , 'vibor', 'vibor' , 'vibor' , 'vibor', 'vibor' , 'vibor', 'vibor' , 'vibor' ] ,

			Delta_x_Komar : [] , Delta_y_Komar : [] ,	Diagonal_Komar : []  ,

			Animation_Komar : '' ,
			
			X_End_Komar_Vibor : [] , Y_End_Komar_Vibor : [] , X_Start_Komar_Vibor : [] , Y_Start_Komar_Vibor : [] , Mashtab_Zoom_Komar : [] , 
			
			W_Komar_Zoom : [ ] , H_Komar_Zoom : [  ] , Variant_Vibor_Komar : [ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]  , Karta_Ukusov_Komar : [] ,
	
			Tochka_Ukus_Komar : ['50|180' , '70|190' , '30|200' , '65|220' , '40|220'  ] ,
			
			
			Hag_Komar_Easy : [ 7 , 7 , 10 , 7 , 8 , 8 , 7 , 8 , 10 , 10 ] ,

			Hag_Komar : [ 10 , 10 , 20 , 10 , 15 , 15 , 10 , 15 , 20 , 20 ] ,
			
			Img_L_R_Komar : [] ,

        } ,   			
	


        } ,  // Конец второго уровня


	Level_2 : { N_L : 2 , Status_Level : 'ClosedLevel' ,  X_Norka_Menu : 430  , Y_Norka_Menu : 100 ,  X_Click : 0 ,      Y_Click : 0 , Kto_poymal : 'Nikto',
	
	 		 X_Frog : 135 , Y_Frog :  500 , Ugol_Frog : 0  , Ugol_Frog_Yazyk : 0  , Delta_x_Yazyk : 0 , Delta_y_Yazyk : 0 , Diagonal_Yazyk : 0 , Max_Dlina_Yazyk : 200 ,
			  
			   // Анимация высыхания озера не показывается без озера


		  Animation_Suhoe_Ozero : { 

		     Animation_Status : 'StopAnimation' ,

			  Hag : 0.1 ,
		  
		     Start_Animation : 1000 ,

	        },



		 // Анимация дождя не показывается без облаков


		  Animation_Dogdy : { 

		     Animation_Status : 'StopAnimation' ,

			 VN : 1 , 
		  
		     Start_Animation : 300 ,
			 
			 Fps : 5 ,
	   
	        },
			
			
			//////// Анимация полета бабочки
			
			Animation_Babochka : {
				
			Animation_Status : 'StopAnimation' ,

			X : 0 , Y : 0 , W_Zoom : 0 , H_Zoom : 0 ,

				Hag : 30 ,
				
				VN : 1 ,

				Start_Animation : 1000 ,
		
			},
			
			
			//////// Анимация прыжка другой лягушки в озеро
			
			Animation_Frog_Prygok_v_vodu : {
				
			Animation_Status : 'StopAnimation' ,

			X_Frog_Prigok : 0 , Y_Frog_Prigok : 0 ,

				Hag : 10 ,
				
				VN : 1 ,
				
				Audio_speed : 2 ,

				Start_Animation : 2000 ,
				
				Fps : 5 ,
				
				
			},
			
			//////// Анимация прыжка Дарк Вэйдера в озеро
			
			Animation_DarkVeyder_Prygok_v_vodu : {
				
			Animation_Status : 'StopAnimation' ,

			X_DarkVeyder_Prigok : 0 , Y_DarkVeyder_Prigok : 0 ,

				Hag : 10 ,

				Audio_speed : 2 ,

				Start_Animation : 2000 ,
				
				Fps : 5 ,
				
				VN : 1 ,
				
				
			},
			
			 //////// Анимация прыжка Рояля в озеро
			
			Animation_Piano_Prygok_v_vodu : {
				
			Animation_Status : 'StopAnimation' ,

			X : 0 , Y : 0 ,

				Hag : 10 ,
				
				VN : 1 ,
				
				Audio_speed : 3 ,
				
				Start_Animation : 2000 ,
				
				Fps : 5 ,
				
				
			},
			  
			  
			  /////////////////// Муха исправленная
			 
			Muha : { Kolichestvo_Muha : 3 , L_R_B_Muha : [ 1 , 2 , 1 , 2 , 1 , 2 , 1 , 2 , 1 , 2  ] , Move_Muha : 'Yes' ,

			X_Muha : [ 300 , 300 ,  300 , 300 ,  300 , 300 ,  300 , 300 ,  300 , 300 ] , 
			
			Y_Muha : [ 300 , 100 ,  300 , 100 ,  300 , 100 ,  300 , 100 ,  300 , 100 ] ,  
	
			Ugol_Muha : []  , 
			
			Napravlenie_Muha : [ 'vibor', 'vibor' , 'vibor', 'vibor' , 'vibor' , 'vibor', 'vibor' , 'vibor', 'vibor' , 'vibor' ] ,

			Delta_x_Muha : [] , Delta_y_Muha : [] ,	Diagonal_Muha : [] , 
					
			Animation_Muha : '' ,
			
			Hag_Muha_Easy : [ 15 , 5 , 5 , 5 , 15 , 5 , 5 , 7 , 15 , 7 ] ,
	
			Hag_Muha : [ 10 , 10 , 10 , 10 , 10 , 10 , 10 , 15 , 15 , 15 ] ,

			Img_L_R_Muha : [] ,
			
            },
			
			
			//////////////////////////////////////////////////// Комар исправленный
			
			Komar : {	Kolichestvo_Komar : 3 , Max_Kolichestvo_Ukusov_Komar : 5 , L_R_B_Komar : [ 1 , 2 , 1 , 2 , 1 , 2 , 1 , 2 , 1 , 2  ] ,

			X_Komar : [] , Y_Komar : [] , 

			Napravlenie_Komar : [ 'vibor', 'vibor' , 'vibor', 'vibor' , 'vibor' , 'vibor', 'vibor' , 'vibor', 'vibor' , 'vibor' ] ,

			Delta_x_Komar : [] , Delta_y_Komar : [] ,	Diagonal_Komar : []  ,

			Animation_Komar : '' ,
			
			X_End_Komar_Vibor : [] , Y_End_Komar_Vibor : [] , X_Start_Komar_Vibor : [] , Y_Start_Komar_Vibor : [] , Mashtab_Zoom_Komar : [] , 
			
			W_Komar_Zoom : [ ] , H_Komar_Zoom : [  ] , Variant_Vibor_Komar : [ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]  , Karta_Ukusov_Komar : [] ,
	
			Tochka_Ukus_Komar : ['50|180' , '70|190' , '30|200' , '65|220' , '40|220'  ] ,
			
			
			Hag_Komar_Easy : [ 3 , 3 , 10 , 3 , 4 , 4 , 3 , 4 , 10 , 10 ] ,

			Hag_Komar : [ 10 , 10 , 20 , 10 , 15 , 15 , 10 , 15 , 20 , 20 ] ,
			
			Img_L_R_Komar : [] ,

        } ,   			

        } ,  // Конец третьего уровня


    Level_3 : { N_L : 3 , Status_Level : 'ClosedLevel' ,  X_Norka_Menu : 512  , Y_Norka_Menu : 185 ,  X_Click : 0 ,      Y_Click : 0 , Kto_poymal : 'Nikto',

	      		 X_Frog : 135 , Y_Frog :  500 , Ugol_Frog : 0  , Ugol_Frog_Yazyk : 0  , Delta_x_Yazyk : 0 , Delta_y_Yazyk : 0 , Diagonal_Yazyk : 0 , Max_Dlina_Yazyk : 200 ,
				 
				 
		  // Анимация высыхания озера не показывается без озера


		  Animation_Suhoe_Ozero : { 

		     Animation_Status : 'StopAnimation' ,

			  Hag : 0.1 ,
		  
		     Start_Animation : 1000 ,

	        },



		 // Анимация дождя не показывается без облаков


		  Animation_Dogdy : { 

		     Animation_Status : 'StopAnimation' ,

			 VN : 1 , 
		  
		     Start_Animation : 300 ,
			 
			 Fps : 5 ,
	   
	        },
			
			
			//////// Анимация полета бабочки
			
			Animation_Babochka : {
				
			Animation_Status : 'StopAnimation' ,

			X : 0 , Y : 0 , W_Zoom : 0 , H_Zoom : 0 ,

				Hag : 30 ,
				
				VN : 1 ,

				Start_Animation : 1000 ,
		
			},
			
			
			//////// Анимация прыжка другой лягушки в озеро
			
			Animation_Frog_Prygok_v_vodu : {
				
			Animation_Status : 'StopAnimation' ,

			X_Frog_Prigok : 0 , Y_Frog_Prigok : 0 ,

				Hag : 10 ,
				
				VN : 1 ,
				
				Audio_speed : 2 ,

				Start_Animation : 2000 ,
				
				Fps : 5 ,
				
				
			},
			
			//////// Анимация прыжка Дарк Вэйдера в озеро
			
			Animation_DarkVeyder_Prygok_v_vodu : {
				
			Animation_Status : 'StopAnimation' ,

			X_DarkVeyder_Prigok : 0 , Y_DarkVeyder_Prigok : 0 ,

				Hag : 10 ,

				Audio_speed : 2 ,

				Start_Animation : 2000 ,
				
				Fps : 5 ,
				
				VN : 1 ,
				
				
			},
			
			 //////// Анимация прыжка Рояля в озеро
			
			Animation_Piano_Prygok_v_vodu : {
				
			Animation_Status : 'StopAnimation' ,

			X : 0 , Y : 0 ,

				Hag : 10 ,
				
				VN : 1 ,
				
				Audio_speed : 3 ,
				
				Start_Animation : 2000 ,
				
				Fps : 5 ,
				
				
			},
			  
		//////////////////////////////////////////////////////////////////////// Паук
		
		
		Pauk : {
		
		Kolichestvo_Pauk : 3 , Max_Kolichestvo_Ukusov_Pauk : 5 , L_R_B_Pauk : [ 1 , 2 , 1 , 2 , 1 , 2 , 1 , 2 , 1 , 2  ] ,

			X_Pauk : [] , Y_Pauk : [] , 

			// Ugol_Pauk_start : [0]  , 
			
			//Ugol_Pauk : []  , 
			
			Napravlenie_Pauk : [ 'vibor', 'vibor' , 'vibor', 'vibor' , 'vibor' , 'vibor', 'vibor' , 'vibor', 'vibor' , 'vibor' ] ,
			
			


			Delta_x_Pauk : [] , Delta_y_Pauk : [] ,	Diagonal_Pauk : []  , Animation_Pauk : '' ,
			
			X_End_Pauk_Vibor : [] , Y_End_Pauk_Vibor : [] , X_Start_Pauk_Vibor : [] , Y_Start_Pauk_Vibor : [] , Mashtab_Zoom_Pauk : [] , 
			
			W_Pauk_Zoom : [ ] , H_Pauk_Zoom : [  ] , Variant_Vibor_Pauk : [ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]  , Karta_Ukusov_Pauk : [] ,
			
			 
			 Tochka_Ukus_Pauk : ['50|180' , '70|190' , '30|200' , '65|220' , '40|220'  ] ,
			 
			 
			 
			Hag_Pauk_Easy : [ 1 , 1 , 2 , 1 , 5 , 5 , 1 , 3 , 2 , 2 ] ,
			

			Hag_Pauk : [ 5 , 5 , 15 , 5 , 10 , 5 , 15 , 10 , 15 , 15 ] ,
			
			Img_L_R_Pauk : [] ,
        },
			
			
			 ////////////////////////// Муха исправленная
			 
		Muha : { Kolichestvo_Muha : 3 , L_R_B_Muha : [ 1 , 2 , 1 , 2 , 1 , 2 , 1 , 2 , 1 , 2  ] , Move_Muha : 'Yes' ,

			X_Muha : [ 300 , 300 ,  300 , 300 ,  300 , 300 ,  300 , 300 ,  300 , 300 ] , 
			
			Y_Muha : [ 300 , 100 ,  300 , 100 ,  300 , 100 ,  300 , 100 ,  300 , 100 ] ,  
	
			Ugol_Muha : []  , 
			
			Napravlenie_Muha : [ 'vibor', 'vibor' , 'vibor', 'vibor' , 'vibor' , 'vibor', 'vibor' , 'vibor', 'vibor' , 'vibor' ] ,

			Delta_x_Muha : [] , Delta_y_Muha : [] ,	Diagonal_Muha : [] , 
					
			Animation_Muha : '' ,
			
			Hag_Muha_Easy : [ 15 , 5 , 5 , 5 , 15 , 5 , 5 , 7 , 15 , 7 ] ,
	
			Hag_Muha : [ 10 , 10 , 10 , 10 , 10 , 10 , 10 , 15 , 15 , 15 ] ,

			Img_L_R_Muha : [] ,
			
            },
		
		
		
		

        } ,  // Конец четвертого уровня	

    Level_4 : { N_L : 4 , Status_Level : 'ClosedLevel' ,  X_Norka_Menu : 553  , Y_Norka_Menu : 309 ,  X_Click : 0 ,      Y_Click : 0 ,  Kto_poymal : 'Nikto',
	
			 X_Frog : 135 , Y_Frog :  500 , Ugol_Frog : 0  , Ugol_Frog_Yazyk : 0  , Delta_x_Yazyk : 0 , Delta_y_Yazyk : 0 , Diagonal_Yazyk : 0 , Max_Dlina_Yazyk : 200 ,
			  
			 // Анимация высыхания озера не показывается без озера


		  Animation_Suhoe_Ozero : { 

		     Animation_Status : 'StopAnimation' ,

			  Hag : 0.1 ,
		  
		     Start_Animation : 1000 ,

	        },



		 // Анимация дождя не показывается без облаков


		  Animation_Dogdy : { 

		     Animation_Status : 'StopAnimation' ,

			 VN : 1 , 
		  
		     Start_Animation : 300 ,
			 
			 Fps : 5 ,
	   
	        },
			
			
			//////// Анимация полета бабочки
			
			Animation_Babochka : {
				
			Animation_Status : 'StopAnimation' ,

			X : 0 , Y : 0 , W_Zoom : 0 , H_Zoom : 0 ,

				Hag : 30 ,
				
				VN : 1 ,

				Start_Animation : 1000 ,
		
			},
			
			
			//////// Анимация прыжка другой лягушки в озеро
			
			Animation_Frog_Prygok_v_vodu : {
				
			Animation_Status : 'StopAnimation' ,

			X_Frog_Prigok : 0 , Y_Frog_Prigok : 0 ,

				Hag : 10 ,
				
				VN : 1 ,
				
				Audio_speed : 2 ,

				Start_Animation : 2000 ,
				
				Fps : 5 ,
				
				
			},
			
			//////// Анимация прыжка Дарк Вэйдера в озеро
			
			Animation_DarkVeyder_Prygok_v_vodu : {
				
			Animation_Status : 'StopAnimation' ,

			X_DarkVeyder_Prigok : 0 , Y_DarkVeyder_Prigok : 0 ,

				Hag : 10 ,

				Audio_speed : 2 ,

				Start_Animation : 2000 ,
				
				Fps : 5 ,
				
				VN : 1 ,
				
				
			},
			
			 //////// Анимация прыжка Рояля в озеро
			
			Animation_Piano_Prygok_v_vodu : {
				
			Animation_Status : 'StopAnimation' ,

			X : 0 , Y : 0 ,

				Hag : 10 ,
				
				VN : 1 ,
				
				Audio_speed : 3 ,
				
				Start_Animation : 2000 ,
				
				Fps : 5 ,
				
				
			},  
		 //////////////////////////////////////////////////////////////////////// Паук
		
		Pauk : {
		
		Kolichestvo_Pauk : 3 , Max_Kolichestvo_Ukusov_Pauk : 5 , L_R_B_Pauk : [ 1 , 2 , 1 , 2 , 1 , 2 , 1 , 2 , 1 , 2  ] ,

			X_Pauk : [] , Y_Pauk : [] , 

			// Ugol_Pauk_start : [0]  , 
			
			//Ugol_Pauk : []  , 
			
			Napravlenie_Pauk : [ 'vibor', 'vibor' , 'vibor', 'vibor' , 'vibor' , 'vibor', 'vibor' , 'vibor', 'vibor' , 'vibor' ] ,
			
			


			Delta_x_Pauk : [] , Delta_y_Pauk : [] ,	Diagonal_Pauk : []  , Animation_Pauk : '' ,
			
			X_End_Pauk_Vibor : [] , Y_End_Pauk_Vibor : [] , X_Start_Pauk_Vibor : [] , Y_Start_Pauk_Vibor : [] , Mashtab_Zoom_Pauk : [] , 
			
			W_Pauk_Zoom : [ ] , H_Pauk_Zoom : [  ] , Variant_Vibor_Pauk : [ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]  , Karta_Ukusov_Pauk : [] ,
			
			 
			 Tochka_Ukus_Pauk : ['50|180' , '70|190' , '30|200' , '65|220' , '40|220'  ] ,
			 
			 
			 
			Hag_Pauk_Easy : [ 5 , 1 , 2 , 1 , 5 , 5 , 1 , 3 , 2 , 2 ] ,
			

			Hag_Pauk : [ 5 , 5 , 15 , 5 , 10 , 5 , 15 , 10 , 15 , 15 ] ,
			
			Img_L_R_Pauk : [] ,
        },

            //////////////////////////////////////////////////// Комар исправленный
			
		Komar : {	Kolichestvo_Komar : 3 , Max_Kolichestvo_Ukusov_Komar : 5 , L_R_B_Komar : [ 1 , 2 , 1 , 2 , 1 , 2 , 1 , 2 , 1 , 2  ] ,

			X_Komar : [] , Y_Komar : [] , 

			Napravlenie_Komar : [ 'vibor', 'vibor' , 'vibor', 'vibor' , 'vibor' , 'vibor', 'vibor' , 'vibor', 'vibor' , 'vibor' ] ,

			Delta_x_Komar : [] , Delta_y_Komar : [] ,	Diagonal_Komar : []  ,

			Animation_Komar : '' ,
			
			X_End_Komar_Vibor : [] , Y_End_Komar_Vibor : [] , X_Start_Komar_Vibor : [] , Y_Start_Komar_Vibor : [] , Mashtab_Zoom_Komar : [] , 
			
			W_Komar_Zoom : [ ] , H_Komar_Zoom : [  ] , Variant_Vibor_Komar : [ 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 , 1 ]  , Karta_Ukusov_Komar : [] ,
	
			Tochka_Ukus_Komar : ['50|180' , '70|190' , '30|200' , '65|220' , '40|220'  ] ,
			
			
			Hag_Komar_Easy : [ 3 , 3 , 10 , 3 , 4 , 4 , 3 , 4 , 10 , 10 ] ,

			Hag_Komar : [ 10 , 10 , 20 , 10 , 15 , 15 , 10 , 15 , 20 , 20 ] ,
			
			Img_L_R_Komar : [] ,

        } ,   			
			  
		////////////////////////// Пчела исправленная
			 
		Pchela : {	Kolichestvo_Pchela : 10 , Kolichestvo_Pchela_Easy : 5 , L_R_B_Pchela : [ 1 , 2 , 1 , 2 , 1 , 2 , 1 , 2 , 1 , 2  ] ,

			X_Pchela : [ 300 , 300 ,  300 , 300 ,  300 , 300 ,  300 , 300 ,  300 , 300 ] , 
			
			Y_Pchela : [ 300 , 100 ,  300 , 100 ,  300 , 100 ,  300 , 100 ,  300 , 100 ] ,  
	
			Ugol_Pchela : []  , 
			
			Napravlenie_Pchela : [ 'vibor', 'vibor' , 'vibor', 'vibor' , 'vibor' , 'vibor', 'vibor' , 'vibor', 'vibor' , 'vibor' ] ,

			Delta_x_Pchela : [] , Delta_y_Pchela : [] ,	Diagonal_Pchela : [] , 
					
			Animation_Pchela : '' ,
			
			Hag_Pchela_Easy : [ 15 , 5 , 5 , 5 , 15 , 5 , 5 , 7 , 15 , 7 ] ,
	
			Hag_Pchela : [ 10 , 10 , 10 , 10 , 10 , 10 , 10 , 15 , 15 , 15 ] ,

			Img_L_R_Pchela : [] ,	  
			  
		},	  
			  
			  
			  
			  

        } ,  // Конец пятого уровня		
	   
	   
	   }; 


 
        Save_base_game ();
        
		Window ();
		
	
       }//try
		 
           catch (e) {  console.log ( e ); Error_Start ( 'One' , e ) }


    }
	
	function Second (){ 

     try {     

			
	      if ( storageAvailable("localStorage") ) {
		 
              if ( localStorage.getItem( 'language_' + obj_local['loc_base_name'] ) === null ) {   Language_detection () } else {  language = localStorage.getItem( 'language_' + obj_local['loc_base_name'] ) }
			  
			}else {
			
			  if ( Field.hasAttribute('data-language') ){ language = Field.getAttribute('data-language') } else { Language_detection () } 
			
			
			}
			
		
		 
		 
		 
			if ( storageAvailable("localStorage") ) {
		 
             if ( localStorage.getItem( 'audioControl_' + obj_local['loc_base_name'] ) === null ) { 
			  
			  
			     localStorage.setItem( 'audioControl_' + obj_local['loc_base_name'] , Sound_control ) ;
				 
				 Field.setAttribute( 'data-audioControl' , Sound_control )
				 
				}
			  
			} else {
			
			  if ( Field.hasAttribute('data-audioControl') ){ } else { Field.setAttribute( 'data-audioControl' , Sound_control ) } 
			
			
			}
	 
	     
        if ( storageAvailable("localStorage") ) {

		 if (localStorage.getItem( obj_local['loc_base_name'] ) !== null){ 
		 
		      arr_result = JSON.parse( localStorage.getItem( obj_local['loc_base_name'] ) )

		    }else{  
		 
		     if ( Field.hasAttribute('data-arr_result') ){ 
			 
			     arr_result = JSON.parse( Field.getAttribute('data-arr_result') ) 
				 
				 
				} else { 
				
				 One (); return false;

				}
			 
			 //localStorage.setItem( obj_local['loc_base_name'] , JSON.stringify( arr_result ) );
		 
		    }

		} else { 

          if ( Field.hasAttribute('data-arr_result') ){ 
		  
		     arr_result = JSON.parse( Field.getAttribute('data-arr_result') ) 
		  
		  
		    } else {  
			
			 One (); return false;

			}		  
	
		}
	      
		 
	
	 Save_base_game ();

	   Window ();
	   
	}//try
		 
           catch (e) {  console.log ( e ); Error_Start ( 'Second' , e ) }
	
	
	}






















let arr_menu=["IEFhome","IEFpause","IEFhelp","IEFlanguage","IEFaudio"];
let m_st=0;
     
	 function Menu_start ( a ){
	 
	 try {     
										 
        
         
           
		   
           if( a == "open" ){
	
               document.getElementById(arr_menu[m_st]).style.display="inline-block";
		
               document.getElementById("IEFmenu").style.transform='rotate('+ Number(m_st*90) + 'deg)';
			   
               m_st++;
			   
               if(m_st == arr_menu.length ) {  document.getElementById("IEFmenu").innerHTML="&times;"; return false; }

            }else{
			
               m_st = m_st - 1;
			   
               document.getElementById(arr_menu[m_st]).style.display="none";
			   
               document.getElementById("IEFmenu").style.transform='rotate('+ Number(m_st*45) + 'deg)';

               if(m_st == 0 ) {
			   
                  document.getElementById("IEFmenu").innerHTML="&#9776;";
				  
                  Services_menu.style.backgroundColor="";
				  
                  Services_menu.style.width="54px";
				  
                  return false;
				}
            }


            setTimeout( function(){Menu_start (a)},100 )

       }//try
		 
           catch (e) {  console.log ( e ); Error_Start ( 'Menu_start' , e ) } 



	   }


let men=2;
      function Menu(e) {
	  
	   try {     

	      if ('ontouchstart' in window) {e.preventDefault();}else{e.stopPropagation();}

			  
                  if( men == 1 ){
				  
				 
				  
                     if( m_st != arr_menu.length ) return false;
					  
                      men=2;

                      Menu_start ('o');
					  
                    }else{
					
                      if( m_st != 0 ) return false;
					  
                      men=1;
					  
                      Services_menu.style.backgroundColor="#ffd800";
					  
                      Services_menu.style.width="98%";
					  
                      Menu_start ('open');
                    
			        }
 
		 }//try
		 
           catch (e) {  console.log ( e ); //Error_Start ( 'Menu' , e ) 
		   
		   
		   }
		
		
		}
		




function StartGame () { 
	
	  //try {     

	   if ( storageAvailable("localStorage") ) { 
	 
	
		 if ( localStorage.getItem( obj_local['loc_base_name'] ) !== null ){ 
		 
		      arr_result = JSON.parse( localStorage.getItem( obj_local['loc_base_name'] ) )
			  
			

			  if ( arr_result.Status_game == 'OneStartGame' ) { Second (); Reclama_Start_Game () }   // Реклама
			  
			  else if ( arr_result.Status_game == 'LevelStart' ) { Second (); Reclama_Start_Game () }

              else if (  arr_result.Status_game == 'EndGame' ){ One () } else {	Second () }
	
	        } else {  One (); Reclama_Start_Game ()  }
		   
			
		} else { One (); Reclama_Start_Game ()  }

		  document.getElementById("IEFfield").style.display = "block";
		  
		  
          document.getElementById("IEFloader").style.display = "none";
		  
	//}//try
		 
         //  catch (e) {  console.log ( e ); Error_Start ( 'StartGame' , e ) 
		   
		   
		  // }
    }
   


 
 function Reclama_Start_Game (){

          try {  
                 
				 
	           // alert('Реклама в начале игры');   //Для тэста закрыть

		          

            } catch (e) { console.log("Get Start AD game error: ", e);
			
			          

	                       
	                    }

        }

   let Reclama_control = 'No';// контролирует запуск рекламы между уровнями.

       function Reclama_End( ErrorReklama ){
	
          Loader.style.display = "none"; 
		  
		  if ( Sound_control == 'Yes' ){ unmutePage() }

		  
		  if (ErrorReklama == 'errorReklama' ) { Reclama_control = 'Error'; }
		  
		  
		  Diagonal (  );
 
        }

      function Reclama (){

          try {  

               Loader.style.display = "block";

		      StopAudio();
		  
		       mutePage();

	           // alert('Реклама между уровнями');   //Для тэста закрыть
			   
			   

            } catch (e) { console.log("Get Start AD game error: ", e);

	                       Reclama_End( 'errorReklama' )
	                    }

        }



 StartGame ();



	
	



}// Body_Game

let myimg = new Image();

myimg.src ="img.png";

myimg.onload = function() { Body_Game () }

myimg.onerror = function() {

console.log ( 'Error OnloadImg ' + this.src ); 

Error_Onload ( 'OnloadImg' ,  this.src )

};



}// Конец функции Game_Anthill_Robbery ()