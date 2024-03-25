function sandwhich(ingredients:string[]){
    console.log("Ingredients in sandwhich");
    ingredients.forEach((ingredient) => {
        console.log(". " + ingredient);
    }
)};

sandwhich(["Chicken","cheese","onion\n"])
sandwhich(["beef","mustard sauce","tomato\n"])
sandwhich(["mayo","ketchup\n"])

