//Question 16
let guestlist : string[] = ["Zumar", "Aidam", "Haneen", "Selena"];

//Inform about bigger dinner table
console.log("Great news! I found a bigger dinner table.");

//Adding more guests
guestlist.unshift("Haram");
guestlist.splice(guestlist.length / 2, 0, "Taalia" );
guestlist.push("Alam");

//Print new invitation
guestlist.forEach(guestlist => {
    console.log(`Hey ${guestlist}! \n You are invited to a dinner at my home.`);
});

//Question 17

//Apologize for cancel there invitation
console.log("Sorry guyz only two of you can come");
while (guestlist.length > 2) {
    let removedguest = guestlist.pop()
    console.log(`Sorry ${removedguest} we will meet again sometimes`);

}

guestlist.forEach(guestlist => {
    console.log(`Dear ${guestlist}, you're stil invited to dinner.`);
});
