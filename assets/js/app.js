$(document).ready(function(){
   
});

//itero para transformar mi data en mi lista de amigos
for (var i = 0; i < friendList.length; i++) {
  var name = friendList[i].name;
  var state = friendList[i].state;
  $(".friends-zone").append("<div class='friend' id='" + 
    [i] + "'><div class='friend-photo' id='friendPhoto" + [i] + "'></div><div class='friend-info'><h5 class='friend-name'>" + 
    name + "</h5><p class='friend-state'>" + 
    state + "</p></div></div>");
   $("#chat-fullBox").append("<div class='chat' id='chat" + 
    [i] + "'><div class='text-box right-align'></div></div><div class='row clear-margin chat-bottom'><div class='col s11'><input type='text' class='chat-input' id='chat-input" + 
    [i] + "' placeholder='Escriba un mensaje aquí'></div><div class='col s1'><i class='fa fa-microphone send right' id='send" + 
    [i] + "'></i></div></div>");
   $("#friendPhoto" + [i]).css("background-image", "url(" + friendList[i].photo + ")")
   $("#chat"+ [i]).hide();
  $("#chat-input"+ [i]).hide();
  $("#send"+ [i]).hide();
}

//Inicio en el índice 0 (primer amigo)
$("#chat0").show();
$("#chat-input0").show();
$("#send0").show();
$("#chat-input0").focus();
$(".talkingToName").text(friendList[0].name)
$(".talkingToInfo").text(friendList[0].state)
$(".talkingToPhoto").css("background-image", "url(" + friendList[0].photo + ")")

//inicializo index
var index = 0;

//itero para ocultar y mostrar chat según el índice del amigo al que le haga click
for (var i = 0; i < friendList.length; i++) {
  $("#" + [i]).click(function(){
    var indexFriend = $(this).index();

    //oculto chats
    $(".chat").hide();
    $(".chat-input").hide();
    $(".send").hide();

    //muestro el chat de mi indice
    $("#chat"+ indexFriend).show();
    $("#chat-input"+ indexFriend).show();
    $("#send"+ indexFriend).show();

    //Focus al input
    $("#chat-input" + indexFriend).focus();

    //sobrescribo la variable para usarla en el send
    index = $(this).index();
    $(".talkingToName").text(friendList[indexFriend].name)
    $(".talkingToInfo").text(friendList[indexFriend].state)
    $(".talkingToPhoto").css("background-image", "url(" + friendList[indexFriend].photo + ")")

  })
  //asigno cursor pointer a mis amigos
  $("#" + [i]).css("cursor", "pointer");
  //asigno funcion click a todos mis botrones de enviar
  $("#send" + [i]).click(function(){
    sendMessage();
  })
}

//.which, para detectar la tecla presionada en jquery, la detecta como un numero
//enter = 13
$(document).keypress(function(e) {
    if(e.which == 13) {
      sendMessage();
    }
});

//Filter friends
$("#search-friend").keypress(function(){
  var searchVal = $("#search-friend").val();
  for (var i = 0; i < friendList.length; i++) {
    var friendName = friendList[i].name;

  }
});

var sendMessage = function(){
  var text = $("#chat-input" + index).val();
  var container = $("#chat" + index);
  if (text.length > 0) {
     //new Date = hora en milisegundos - re-seteo la variable por cada mensaje enviado
    var dt = new Date();
    //getHours, getMinutes, getSeconds, etc, transforma el newdate en lo solicitado.
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
     container.append("<div class='text-box right-align'><div class='text'><p>" + 
     text + "</p><p>" + time + "</p></div></div>");
    $("#chat-input" + index).val("");
    $("#chat-input" + index).focus();
    }
};

