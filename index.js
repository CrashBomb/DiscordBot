const Discord = require('discord.js');

const bot  = new Discord.Client();

const PREFIX = "!";


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
                                "\t - Ecrivez `\"waew\" dans votre message pour faire apparaître notre mascotte officielle !\n");
        }
    }
});


bot.login('Mzk0MTUzNzU3NTg1NDQwNzc5.DSQAmA._0cDXvmNeTj2KAZukA9U8b7o3WI'); //Token