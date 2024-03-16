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

export{}