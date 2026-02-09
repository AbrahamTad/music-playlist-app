import MusicModel from "./model/MusicModel.js";
import MusicView from "./view/MusicView.js";
import MusicController from "./controller/MusicController.js";

document.addEventListener("DOMContentLoaded", () => {
  const model = new MusicModel();
  const view = new MusicView();
  const controller = new MusicController(model, view);
});
