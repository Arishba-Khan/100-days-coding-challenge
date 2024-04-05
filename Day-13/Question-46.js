var laptop = {
    make: "Lenovo",
    model: "Thinkpad",
    year: "2022",
    object: function () {
        console.log("This is a ".concat(this.year, " ").concat(this.make, " ").concat(this.model, "."));
    },
};
laptop.object();
