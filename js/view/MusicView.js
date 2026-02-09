// MusicView.js

export default class MusicView {
  constructor() {
    this.listContainer = document.getElementById("playlistContainer");
  }

  // Renderar alla spellistor, genrer, artister och låtar i DOM:en
  render(playlists) {
    if (!this.listContainer) return;

    if (!playlists || playlists.length === 0) {
      this.listContainer.innerHTML = `<p class="empty">Inga spellistor ännu… Lägg till en låt 🎵</p>`;
      return;
    }

    this.listContainer.innerHTML = "";

   this.listContainer.innerHTML = playlists
     .map(
       (pl) => `
  <div class="playlist-card">
    <h3 class="playlist-title clickable">▼ ${pl.name}</h3>

    <div class="playlist-content">
      ${pl.genres
        .map(
          (g) => `
        <div class="genre-section">
          <span class="genre-badge">${g.name}</span>

          ${g.artists
            .map(
              (a) => `
            <div class="artist-block">
              <div class="artist-name">${a.name}</div>

              ${a.songs
                .map(
                  (song) => `
                <div class="song-row">
                  <span>🎵 ${song}</span>

                  <div class="song-actions">
                    <button class="edit-btn"
                      data-playlist="${pl.name}"
                      data-genre="${g.name}"
                      data-artist="${a.name}"
                      data-song="${song}">
                      ✏️
                    </button>

                    <button class="delete-btn"
                      data-playlist="${pl.name}"
                      data-genre="${g.name}"
                      data-artist="${a.name}"
                      data-song="${song}">
                      ❌
                    </button>
                  </div>
                </div>
              `,
                )
                .join("")}

            </div>
          `,
            )
            .join("")}

        </div>
      `,
        )
        .join("")}
    </div>
  </div>
`,
     )
     .join("");

  }
}
