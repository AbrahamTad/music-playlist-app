// MusicModel.js
export default class MusicModel {
  constructor() {
    this.playlists = [];
  }

  save() {
    localStorage.setItem("playlists", JSON.stringify(this.playlists));
  }

  addSong(playlistName, genre, artist, song) {
    let playlist = this.playlists.find((p) => p.name === playlistName);
    if (!playlist) {
      playlist = { name: playlistName, genres: [] };
      this.playlists.push(playlist);
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
    this.save();
  }

  getPlaylists() {
    return this.playlists;
  }
}
