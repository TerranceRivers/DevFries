var players = [
    'altuve',
    'tdotrivers',
    'CCorrea',
    'Springer'
];

for (var i = 0;  i < players.length; i++)
console.log(players[i]);


for (player in players) {
    console.log(players[player]);
    console.log(player)
}