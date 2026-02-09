export default class MusicController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    //  render existing playlists when app starts
    this.view.render(this.model.getPlaylists());

    this.form = document.getElementById("playlistForm");
    // ADD SONG
this.form.addEventListener("submit", (e) => {
  e.preventDefault();

  // get values + trim spaces
  const name = document.getElementById("playlistName").value.trim();
  const genre = document.getElementById("genre").value.trim();
  const artist = document.getElementById("artist").value.trim();
  const song = document.getElementById("song").value.trim();

   this.model.addSong(name, genre, artist, song);
   this.view.render(this.model.getPlaylists());
   this.form.reset();
  
});


       

   
  }
}
