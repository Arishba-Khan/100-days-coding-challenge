let laptop = {
    make: "Lenovo",
    model: "Thinkpad",
    year: "2022",
    object: function () {
        console.log(`This is a ${this.year} ${this.make} ${this.model}.`);
    },
};
laptop.object();
