({ 
afterChannelMessage: function(message, channel, html){
if (message.indexOf(':') >= 0) {
name = message.split(':')[0];
 message = message.substr(message.indexOf(':') + 2);
}
if (message == "Golurk") { // Put bot name
client.network().sendChanMessage(channel, "BattleBot Version 3.0 Current Supported Tiers: XY 1v1 Created By: Tyrantrum, Akari1 Use -commands to view commands");
return;
}
if (message == "hi") {
client.network().sendChanMessage(channel, "Hi " + name + ".");
}
if (message == "Hi") {
client.network().sendChanMessage(channel, "Hi " + name + ".");
}
if (message == "hello") {
client.network().sendChanMessage(channel, "Hi " + name + ".");
}
if (message == "Hello") {
client.network().sendChanMessage(channel, "Hi " + name + ".");
}
if (message == "Hey") {
client.network().sendChanMessage(channel, "Hi " + name + ".");
}
if (message == "hey") {
client.network().sendChanMessage(channel, "Hi " + name + ".");
}
if (message == "yo") {
client.network().sendChanMessage(channel, "Hi " + name + ".");
}
if (message == "Yo") {
client.network().sendChanMessage(channel, "Hi " + name + ".");
}
if (message == "-commands") {
client.network().sendChanMessage(channel, "Commands are -jump, -catch, -attack, -botbattle, -scenario, -dig, -randomMS .");
return;
}
if (message == "-jump") {
client.network().sendChanMessage(channel, "/me Jumps");
return;
}
if (message == "-scenario") {
client.network().sendChanMessage(channel, "Who would win? "  + sys.pokemon(sys.rand(1, 649)) + " VS "  + sys.pokemon(sys.rand(1, 649)) + "!");
return;
}
if (message == "-catch") {
client.network().sendChanMessage(channel, "" + name + " caught a " + sys.gender(sys.rand(1, 3)) + " " + sys.pokemon(sys.rand(1, 649)) + " At Level " + sys.rand(1, 100) + " with a " + sys.nature(sys.rand(1,25)) + " nature!");
}
if (message == "-dig") {
client.network().sendChanMessage(channel, "" + name +  " dug up a " + sys.item(sys.rand(1, 190)) + "!");
}
if (message == "-attack") {
client.network().sendChanMessage(channel, "" + name + " used " + sys.move(sys.rand(0, 559)) + " It took down " + sys.rand(0, 230) + " HP.");
}
if (message == "-randomMS") {
client.network().sendChanMessage(channel, "A " + sys.pokemon(sys.rand(1, 649)) + " with " + sys.move(sys.rand(0, 559)) + " , " + sys.move(sys.rand(0, 559)) + " , " + sys.move(sys.rand(0, 559)) + ", " + sys.move(sys.rand(0, 559)) + " With ability " + sys.ability(sys.rand(0, 100)) + " and a " + sys.nature(sys.rand(1,25)) + " nature!");
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
