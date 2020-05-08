function twitchEmotes(){
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var req = new XMLHttpRequest();
    req.open('GET', 'https://api.twitchemotes.com/api/v4/channels/0', false); 
    req.send(null);
    if (req.status == 200)
        return JSON.parse(req.responseText)
}

module.exports = {
    twitchEmotes
  };