// MusicModel.js
export default class MusicModel {
  constructor() {
    this.playlists = [];
  }

  getPlaylists() {
    return this.playlists;
  }
}

let genreObj = playlist.genres.find((g) => g.name === genre);
if (!genreObj) {
  genreObj = { name: genre, artists: [] };
  playlist.genres.push(genreObj);
}

let artistObj = genreObj.artists.find((a) => a.name === artist);
if (!artistObj) {
  artistObj = { name: artist, songs: [] };
  genreObj.artists.push(artistObj);
}

artistObj.songs.push(song);