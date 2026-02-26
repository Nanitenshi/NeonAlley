import { initScene } from "./threeScene.js";
import { initWorld } from "./world.js";
import { initUI } from "./ui.js";
import { loadGame } from "./save.js";

export const game = {
  money: 0,
  heat: 0,
  nodes: [],
  selectedNode: null
};

window.addEventListener("DOMContentLoaded", () => {
  loadGame();
  initScene();
  initWorld();
  initUI();
});
