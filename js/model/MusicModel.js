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
    const findOrCreate = (arr, name, key) =>
      arr.find((o) => o.name === name) ||
      arr[arr.push({ name, [key]: [] }) - 1];

    const playlist = findOrCreate(this.playlists, playlistName, "genres");
    const genreObj = findOrCreate(playlist.genres, genre, "artists");
    const artistObj = findOrCreate(genreObj.artists, artist, "songs");

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
    const playlist = this.playlists.find((p) => p.name === playlistName);
    if (!playlist) return;

    const genreObj = playlist.genres.find((g) => g.name === genre);
    if (!genreObj) return;

    const artistObj = genreObj.artists.find((a) => a.name === artist);
    if (!artistObj) return;

    const index = artistObj.songs.indexOf(oldSong);
    if (index === -1) return;

    artistObj.songs[index] = newSong;
    this.save();
  }
}
