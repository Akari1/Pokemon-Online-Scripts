({
    afterChannelMessage: function(message, channel, html) {
    if (message.indexOf(':') >= 0) { 
	message = message.substr(message.indexOf(':') + 2); 
	}
    if (message == "BattleBot") { // Put bot name 
        client.network().sendChanMessage(channel, "BattleBot Version 1.7 Current Supported Tiers: XY 1v1 Created By: Tyrantrum, Akari1 Use ~commands to view commands");
       return;
}
if (message == "~commands") {
client.network().sendChanMessage(channel, "Commands are ~mute, ~jump");
return;
}
if (message == "~mute") {
client.network().sendChanMessage(channel, "You cannot mute silly faggot.");
return;
}
if (message == "~jump") {
client.network().sendChanMessage(channel, "** Jumps!.");
return;
}
if (message == "~Angelite") {
client.network().sendChanMessage(channel, "We don't discuss information on Angelite");
return;
}   
}
});
