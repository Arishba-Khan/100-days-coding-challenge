function make_album(artist: string, title: string, tracks?: number)  {
    let album : { artist: String ; title: String ; tracks? : Number } = { artist, title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    
    return album;
}

console.log(make_album("Selena Gomez","Album 1"));
console.log(make_album("Jokhay","Album 2",8));
console.log(make_album("Ariana Grande","Album 3",3));

export{}
