//assignment no 12
var names = ["Noriyah", "Baqir", "Fatima", "Hussain", "Ali"];
for (var i = 0; i < names.length; i++) {
    console.log("hello, ".concat(names[i], "! how are you today?"));
}
names.forEach(function (friend) {
    console.log("Hi, ".concat(friend, "! how are you today?"));
});
