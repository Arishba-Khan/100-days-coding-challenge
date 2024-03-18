// Question 14
const guest: string[] = ["Rukhsar", "Hashir", "Harmain"];
guest.forEach(guest => {
    console.log(`Assalam-o-Alikum ${guest},\n You are invited to a dinner at my home.`);
});
     
//Question 15
console.log(`\n${guest[2]} won't be able to attend dinner tonight. \n`);

//Replace guest 
let new_guest = "Zubair";
guest.pop();
guest.push(new_guest);

//New invitations
guest.forEach(guest => {
    console.log(`Assalam-o-Alikum ${guest},\n You are invited to a dinner at my home.`);
});

export{} 