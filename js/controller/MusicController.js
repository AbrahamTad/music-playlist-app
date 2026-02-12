export default class MusicController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.render(this.model.getPlaylists());

    // FORM
    this.form = document.getElementById("playlistForm");
    if (this.form) {
      this.form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("playlistName").value.trim();
        const genre = document.getElementById("genre").value.trim();
        const artist = document.getElementById("artist").value.trim();
        const song = document.getElementById("song").value.trim();

        if (!name || !genre || !artist || !song) return;

        this.model.addSong(name, genre, artist, song);
        this.view.render(this.model.getPlaylists());
        this.form.reset();
      });
    }

    // CLICK EVENTS
    this.view.listContainer.addEventListener("click", (e) => {
      const isActionBtn = e.target.closest("[data-playlist]");
      const header = e.target.closest(".clickable");

      // COLLAPSE
      if (header && !isActionBtn) {
        const card = header.closest(".playlist-card");
        const content = card?.querySelector(".playlist-content");

        if (content) {
          content.classList.toggle("hidden");
          header.classList.toggle("open");
        }
        return;
      }

      if (!isActionBtn) return;

      const { playlist, genre, artist, song } = isActionBtn.dataset;

      if (isActionBtn.classList.contains("delete-btn")) {
        this.model.removeSong(playlist, genre, artist, song);
      } else if (isActionBtn.classList.contains("edit-btn")) {
        const newSongName = prompt("Edit song name:", song);
        if (newSongName === null || !newSongName.trim()) return;
        this.model.updateSong(
          playlist,
          genre,
          artist,
          song,
          newSongName.trim(),
        );
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
