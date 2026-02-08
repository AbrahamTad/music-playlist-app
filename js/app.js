import MusicModel from "./model/MusicModel.js";
import MusicView from "./view/MusicView.js";
import MusicController from "./controller/MusicController.js";


window.addEventListener("load", () => {
  const model = new MusicModel();
  const view = new MusicView();
  new MusicController(model, view);

  //first render to show existing playlists
  view.render(model.getPlaylists());
});
