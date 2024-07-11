// Define an interface for the album
interface Album {
    artist: string;
    album_title: string;
    num_tracks?: number;
}

// Define the make_album function
function make_album(artist: string, album_title: string, num_tracks?: number): Album {
    let album: Album = {
        artist: artist,
        album_title: album_title
    };
    if (num_tracks !== undefined) {
        album.num_tracks = num_tracks;
    }
    return album;
}

// Create three albums using the make_album function
let album1 = make_album('Ed Sheeran', 'Divide');
let album2 = make_album('Taylor Swift', '1989');
let album3 = make_album('Coldplay', 'A Head Full of Dreams', 11); // Example with number of tracks

// Print each album object to verify the information stored
console.log(album1);
console.log(album2);
console.log(album3);
