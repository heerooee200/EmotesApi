function BTTVEmotes(channelId){
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var req = new XMLHttpRequest();
    req.open('GET', 'https://api.betterttv.net/3/cached/users/twitch/'+channelId, false); 
    /*req.setRequestHeader('Content-Type', 'application/json')
    req.setRequestHeader('Cache-Control', 'no-cache')
    req.setRequestHeader('Access-Control-Allow-Origin', '*')*/
    req.withCredentials = true;
    req.send(null);
    if (req.status == 200)
        return JSON.parse(req.responseText)
}

module.exports = {
    BTTVEmotes
  };