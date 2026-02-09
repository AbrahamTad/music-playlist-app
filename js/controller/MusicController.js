export default class MusicController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    //  render existing playlists when app starts
    this.view.render(this.model.getPlaylists());

    this.form = document.getElementById("playlistForm");

  

   
  }
}
