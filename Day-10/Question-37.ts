let make_shirt = (size:string = "large", message:string = "Code needs a coffee") => {
    console.log(
        `Making a ${size} t-shirt with the message ${message} printing on it`
    );
}

make_shirt();
make_shirt("Medium");
make_shirt("Large", "Code Mode On");

export{}

