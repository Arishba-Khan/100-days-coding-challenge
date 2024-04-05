function my_hobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("I really enjoy ".concat(hobby, "."));
    });
}
my_hobbies("painting", "Caligraphy", "Sketching", "Reading");
