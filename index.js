const Discord = require('discord.js');
const txtomp3 = require("text-to-mp3");
const ytdl = require('ytdl-core');
const fs = require('fs');

const bot  = new Discord.Client();
const stream = fs.createReadStream('./sound.mp3');

const PREFIX = "!";
const streamOptions = { seek: 0, volume: 1 };

process.on('unhandledRejection', up => { throw up })

bot.on("ready", function(){
    console.log("I'm Ready To Send LOOOOVE !");
});

bot.on("message", message => {
    if(message.content.includes("waew")){
        message.channel.send("https://media.giphy.com/media/12xRMv14BGASAg/giphy.gif");
    }
    if(message.content[0] === PREFIX){
        if(message.content === "!bonjour"){
            message.reply(" de l'AMOUUR <3");
        }
        else if(message.content === "!ah"){
            message.channel.send("https://media.tenor.com/images/79566904b2c1358ccf9ba4b5231730aa/tenor.gif");
        }
        else if(message.content === "!help"){
            message.author.send("Voiçi la liste des fonctionnalités du bot (n'hésitez pas à soumettre vos idées à CrashBomb) :\n"+
                                "\t - !ah : Dites bonjour à Denis !\n" +
                                "\t - !bonjour : Recevez un message rempli d'amour !\n" +
                                "\t : !play ton_message : J'use de ma magnifique voix et de mes problèmes de prononciation pour répeter ton message <3\n" +
                                "\t : !leave : Je quitte le channel audio\n" +
                                "\t - Ecrivez `\"waew\" dans votre message pour faire apparaître notre mascotte officielle !\n");
        }
    }
    if (message.content.split(" ")[0] === '!play') {
        // Note that this will only work if the message was sent in a guild
        // and the author is actually in a voice channel.
        // You might want to check for all that stuff first
        const voiceChannel = message.member.voiceChannel;

        if (!voiceChannel){
            return message.channel.send(":x: You must be in a voice channel first!");
        }
        else{
            var mess = message.content.split(" ")
            if (mess.length == 1){
                return message.channel.send("Veuillez respecter la syntaxe suivante : !play votre_message");
            }else{
                voiceChannel.join().then(connection => {
                    txtomp3.getMp3(message.content.slice(6, message.content.length-1), function(err, binaryStream){
                        if(err){
                            console.log(err);
                            return;
                        }
                       var file = fs.createWriteStream("sound.mp3"); // write it down the file
                       file.write(binaryStream);
                       file.end();
                       file.close();
                       setTimeout(function(){
                           connection.playFile("./sound.mp3");}
                        , 2000);
                    });
                });   
            } 
        }
    }  

    if (message.content === "!leave"){
        const voiceChannel = message.member.voiceChannel;
        voiceChannel.leave();
    }
    
});


bot.login('Mzk0MTUzNzU3NTg1NDQwNzc5.DSCqGw.H3AMAfib8Mhap8kAFMPoNhBCVuc'); //Token