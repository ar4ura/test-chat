var chat = document.querySelector('.chat');
var form = document.querySelector('.form-new-message');
var template = document.querySelector('#template-message').content;
var msg = template.querySelector('.msg');
var chatHidden = document.querySelector('.chat-hidden');

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    var who = form.querySelector('.who-message');
    var nickName = msg.querySelector('.nick-name');
    nickName.textContent = who.value;
    var text = form.querySelector('.text-message');
    var nickMessage = msg.querySelector('.nick-message');
    nickMessage.textContent = text.value;
    var sms = msg.cloneNode(true);
    chat.appendChild(sms);
    text.value = '';
});

//-chatHidden.addEventListener('click', function(evt){
//    evt.preventDefault();
//    if (chat) {}
//    else {};
//})



