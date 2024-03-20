let current_user: string[] = ["User1", "User2", "User3", "User4"];
let new_user: string[] = ["user1", "user5", "user6", "user7"];

new_user.forEach((new_user) => {
    if ( 
        current_user.some(
            (current_user) => current_user.toLowerCase() === new_user.toLowerCase()
        )
    )  {
        console.log(`${new_user} will need to enter a new username.`);
    }  else {
        console.log(`${new_user} is available.`);
    }
});
