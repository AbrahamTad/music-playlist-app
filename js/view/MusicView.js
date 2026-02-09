// View handles display data to the UI
export default class MusicView {
  constructor() {
    // container where playlists will be rendered
    this.container = document.getElementById("playlistContainer");
  }

  //add render method to display playlists
  render(playlists) {
    if (!this.listContainer) return;

    if (!playlists || playlists.length === 0) {
      this.listContainer.innerHTML = `<p class="empty">Inga spellistor ännu… Lägg till en låt 🎵</p>`;
      return;
    }

    this.listContainer.innerHTML = "";
    playlists.forEach((pl) => {
      const card = document.createElement("div");
      card.className = "playlist-card";

      const title = document.createElement("h3");
      title.className = "playlist-title clickable";
      title.textContent = "▼ " + pl.name;
      card.appendChild(title);

      const content = document.createElement("div");
      content.className = "playlist-content";
      card.appendChild(content);

      title.addEventListener("click", () => {
        content.classList.toggle("hidden");
        title.textContent = content.classList.contains("hidden")
          ? "▶ " + pl.name
          : "▼ " + pl.name;
      });

      pl.genres.forEach((g) => {
        const genreSection = document.createElement("div");
        genreSection.className = "genre-section";

        const badge = document.createElement("span");
        badge.className = "genre-badge";
        badge.textContent = g.name;
        genreSection.appendChild(badge);

        g.artists.forEach((a) => {
          const artistBlock = document.createElement("div");
          artistBlock.className = "artist-block";

          const artistName = document.createElement("div");
          artistName.className = "artist-name";
          artistName.textContent = a.name;
          artistBlock.appendChild(artistName);

          a.songs.forEach((song) => {
            const row = document.createElement("div");
            row.className = "song-row";

            const songTitle = document.createElement("span");
            songTitle.textContent = "🎵 " + song;

            const actions = document.createElement("div");

            const editBtn = document.createElement("button");
            editBtn.className = "edit-btn";
            editBtn.dataset.playlist = pl.name;
            editBtn.dataset.genre = g.name;
            editBtn.dataset.artist = a.name;
            editBtn.dataset.song = song;
            editBtn.textContent = "✏️";

            const deleteBtn = document.createElement("button");
            deleteBtn.className = "delete-btn";
            deleteBtn.dataset.playlist = pl.name;
            deleteBtn.dataset.genre = g.name;
            deleteBtn.dataset.artist = a.name;
            deleteBtn.dataset.song = song;
            deleteBtn.textContent = "❌";

            actions.append(editBtn, deleteBtn);
            row.append(songTitle, actions);
            artistBlock.appendChild(row);
          });

          genreSection.appendChild(artistBlock);
        });

        content.appendChild(genreSection);
      });

      this.listContainer.appendChild(card);
    });
  }
}
