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
if (message == "-scenario") {
client.network().sendChanMessage(channel, "Who would win? "  + sys.pokemon(sys.rand(1, 649)) + " VS "  + sys.pokemon(sys.rand(1, 649)) + "!");
return;
}
if (message == "-catch") {
client.network().sendChanMessage(channel, " You caught a " + sys.gender(sys.rand(0, 3)) + " " + sys.pokemon(sys.rand(1, 649)) + " with a " + sys.nature(sys.rand(1,8)) + " nature!");
}
if (message == "-dig") {
client.network().sendChanMessage(channel, " You dug up a " + sys.item(sys.rand(1, 175)) + "!");
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
