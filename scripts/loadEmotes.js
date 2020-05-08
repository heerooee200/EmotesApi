let bttv    = require("./BTTVEmotes.js");
let channel = require("./channelEmotes.js");
let twitch  = require("./twitchEmotes.js");

function loadEmotes(channelid){
    try {
        BBTVEmotes=bttv.BTTVEmotes(channelid)['sharedEmotes'];
        BBTVEmotes=BBTVEmotes.map(function(Emote) {
            tempId = Emote["id"];
            delete Emote.imageType;
            delete Emote.user;
            delete Emote.id;
            Emote["id"]=tempId;
            Emote["type"]='bttv';
            return Emote ;
        });
    } catch (error) {
        BBTVEmotes = []
    }
      
    try {
        tEmotes=twitch.twitchEmotes()['emotes'];
        tEmotes=tEmotes.map(function(Emote) {
            delete Emote.emoticon_set;
            Emote["type"]='twitch';
            return Emote ;
        });
    }
    catch (error) {
        tEmotes = []
    }

    try{
        cEmotes=channel.channelEmotes(channelid)['emotes'];
        cEmotes=cEmotes.map(function(Emote) {
            delete Emote.emoticon_set;
            Emote["type"]='channel';
            return Emote ;
         });
    }
    catch (error) {
        cEmotes = []
    }

    

    var allEmotes = [].concat( BBTVEmotes,cEmotes, tEmotes );
    return allEmotes
    
}
module.exports = {
    loadEmotes
  };