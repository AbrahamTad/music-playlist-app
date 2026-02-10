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
//click event delegation for edit and delete buttons
this.view.listContainer.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-playlist]");
  if (!btn) return;

  const { playlist, genre, artist, song } = btn.dataset;

  if (btn.classList.contains("delete-btn")) {
    this.model.removeSong(playlist, genre, artist, song);
  } else if (btn.classList.contains("edit-btn")) {
    const newSongName = prompt("Edit song name:", song)?.trim();
    if (!newSongName) return;
    this.model.updateSong(playlist, genre, artist, song, newSongName);
  }

  this.view.render(this.model.getPlaylists());
});


// DEMO DATA
    const demoBtn = document.getElementById("demoBtn");
    if (demoBtn) {
      demoBtn.addEventListener("click", () => {
        this.model.addSong("Träning", "Pop", "The Weeknd", "Blinding Lights");
        this.model.addSong("Träning", "Pop", "The Weeknd", "Starboy");
        this.model.addSong("Chill", "Rock", "Coldplay", "Yellow");
        this.model.addSong("Chill", "Rock", "Coldplay", "Fix You");

        this.view.render(this.model.getPlaylists());
      });
    }

  }
}
