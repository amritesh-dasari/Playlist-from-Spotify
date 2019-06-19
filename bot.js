var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.user.setPresence({ game: { name: 'Game', type: "Playing"}});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `>>`
    if (message.substring(0, 2) == '>>') {
        var args = message.substring(2).split();
        var cmd = args[0];
        
		args = args.splice(1);
        switch(cmd) {
            case 'Hello':
                bot.sendMessage({
                    to: channelID,
					message: 'urmumgei lol'});
				bot.sendMessage({
					to: channelID,
					message: 'Uff GotTem'});
			break;
			
			case 'test':
				bot.sendMessage({
                    to: channelID,
					message: 'Everything is working fine for now, Just relax!'});
            break;
			
			case 'Who is Sonic':
				bot.sendMessage({
                    to: channelID,
					message: 'Oh, He is just a water bottle'});
			break;
			
			case 'Who is Potato':
				bot.sendMessage({
                    to: channelID,
					message: 'He is the EdgeLord'});
			break;
			
			case 'Who is RainbowFurt':
				bot.sendMessage({
                    to: channelID,
					message: 'I have never met him but legend has it, he is still reconnecting'});
			break;
			
			case 'Fuck Off':
				bot.sendMessage({
                    to: channelID,
					message: 'NO U '+user});
			break;
            // Just add any case commands if you want to..
         }
     }
});