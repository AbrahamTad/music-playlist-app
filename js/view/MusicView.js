// View handles display data to the UI
export default class MusicView {
  constructor() {
    // container where playlists will be rendered
    this.container = document.getElementById("playlistContainer");
  }

  //add render method to display playlists
  render(playlists) {
    if (!playlists || playlists.length === 0) {
      this.container.innerHTML = "<p>No playlists yet</p>";
      return;
    }

    let html = "";

    playlists.forEach((p) => {
      html += `<h2>${p.name}</h2>`;
    });

    this.container.innerHTML = html;
  }
}
