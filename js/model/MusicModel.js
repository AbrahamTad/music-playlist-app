export default class MusicModel {
  constructor() {
    try {
      const saved = localStorage.getItem("playlists");
      this.playlists = saved ? JSON.parse(saved) : [];
    } catch {
      this.playlists = [];
    }
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

  removeSong(playlistName, genre, artist, song) {
    const playlist = this.playlists.find((p) => p.name === playlistName);
    if (!playlist) return;

    const genreObj = playlist.genres.find((g) => g.name === genre);
    if (!genreObj) return;

    const artistObj = genreObj.artists.find((a) => a.name === artist);
    if (!artistObj) return;

    artistObj.songs = artistObj.songs.filter((s) => s !== song);

    // cleanup empty structures
    genreObj.artists = genreObj.artists.filter((a) => a.songs.length);
    playlist.genres = playlist.genres.filter((g) => g.artists.length);
    this.playlists = this.playlists.filter((p) => p.genres.length);

    this.save();
  }

  getPlaylists() {
    return this.playlists;
  }
  updateSong(playlistName, genre, artist, oldSong, newSong) {
  const playlist = this.playlists.find(p => p.name === playlistName);
  if (!playlist) return;

  const genreObj = playlist.genres.find(g => g.name === genre);
  if (!genreObj) return;

  const artistObj = genreObj.artists.find(a => a.name === artist);
  if (!artistObj) return;

  const index = artistObj.songs.indexOf(oldSong);
  if (index === -1) return;

  artistObj.songs[index] = newSong;
  this.save();
}

}
