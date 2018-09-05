

console.log(1);
const io = require('socket.io-client')

const randSentences = [
	'Hello?',
	'Yooooo',
	'Why not',
	'Wanna chat?',
	'Anyone here?',
	'I like this a lot!',
	'Why?',
	'That makes sense',
	'That sounds weird',
	'OK',
	'Oh no...',
	'sry...',
	'wait...',
	'yes?',
	'Where are you from?',
	'I\'m from LA',
	'I guess you are right',
	'Could you explain more?',
	'HAHAHAHAH!',
	'Please!',
	'man..',
	'That\'s what I talking about',
	'cool...',
	'Nice!',
	'But...',
	'Oh, come on!',
	'I don\'t understand',
	'What do you think?',
	'有人吗？',
	'哈哈哈，有意思~',
	'好吧，拜拜'
]
// var username = 'David';
// var userId = 'bot-50';

function rand(range) {
	// return [0 - range)
	return Math.floor(Math.random()*range);
}

function doIt(userId, roomId) {

	var socket = io("https://quotime.me", {path:'/socket.io'});
	socket.on('login', function(data){
		socket.emit('login', {
			username: 'no name',
			userId: userId,
			roomId: roomId,
			shareLocation: true,
			version: 'bot'
		});
		keepSendingMsg(socket);
	});


}

function keepSendingMsg(socket) {
	socket.emit('new message', {msg: randSentences[rand(randSentences.length)]});
	setTimeout(function(){keepSendingMsg(socket)}, (15+rand(60))*1000);
}


doIt('bot-50', 'https://www.youtube.com/');
doIt('bot-55', 'https://www.youtube.com/');



doIt('bot-30', 'https://www.google.com/');
doIt('bot-35', 'https://www.google.com/');
doIt('bot-45', 'https://www.google.com/');


doIt('bot-10', 'https://www.facebook.com/');
doIt('bot-15', 'https://www.facebook.com/');

