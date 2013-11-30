({
    afterChannelMessage: function(message, channel, html) {
    if (message.indexOf(':') >= 0) { 
        message = message.substr(message.indexOf(':') + 2); 
        }
    if (message == "BattleBot") { // Put bot name 
        client.network().sendChanMessage(channel, "BattleBot Version 2.3 Current Supported Tiers: XY 1v1 Created By: Tyrantrum, Akari1 Use ~commands to view commands");
       return;
}
if (message == "-commands") {
client.network().sendChanMessage(channel, "Commands are -mute, -jump, -catch, -attack, -botbattle.");
return;
}
if (message == "-mute") {
client.network().sendChanMessage(channel, "! HC ! Bot must have channel auth for this command to work.");
return;
}
if (message == "-jump") {
client.network().sendChanMessage(channel, "** Jumps!.");
return;
}
if (message == "-catch") {
client.network().sendChanMessage(channel, " You caught a " + sys.gender(sys.rand(1,2)) + ":" + sys.pokemon(sys.rand(1, 649)) + " with a " + sys.nature(sys.rand(1,8)) + " nature!");
}
if (message == "-attack") {
client.network().sendChanMessage(channel, "You used " + sys.move(sys.rand(0, 559)) + " It took down " + sys.rand(0, 230) + " HP.");
}
if (message == "-botbattle") {
client.network().sendChanMessage(channel, "»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»");
}
if (message == "-botbattle") {
client.network().sendChanMessage(channel, "BattleBot is active just challenge me to XY 1v1");
}
if (message == "-botbattle") {
client.network().sendChanMessage(channel, "»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»");
}   
}
});
