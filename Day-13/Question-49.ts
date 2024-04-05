function my_hobbies(...hobbies:string[]) {
    hobbies.forEach((hobby) => {
        console.log(`I really enjoy doing ${hobby}.`);
    });
}

my_hobbies("painting" , "Caligraphy" , "Sketching" , "Reading");