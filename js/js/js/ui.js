import { game } from "./core.js";
import { saveGame } from "./save.js";

export function initUI(){
  document.getElementById("btnClose").onclick = closeDialog;
  document.getElementById("btnAccept").onclick = acceptMission;
}

export function openDialog(node){
  document.getElementById("npcName").textContent = node.npc;
  document.getElementById("npcText").textContent =
    "Mission at " + node.name +
    " | Reward: " + node.reward +
    " | Heat +" + node.heat;

  document.getElementById("dialog").classList.remove("hidden");
}

function closeDialog(){
  document.getElementById("dialog").classList.add("hidden");
}

function acceptMission(){
  const node = game.selectedNode;
  game.money += node.reward;
  game.heat += node.heat;

  document.getElementById("money").textContent = game.money;
  document.getElementById("heat").textContent = game.heat;

  saveGame();
  closeDialog();
}
