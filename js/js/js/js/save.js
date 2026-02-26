import { game } from "./core.js";

export function saveGame(){
  localStorage.setItem("neonSave", JSON.stringify(game));
}

export function loadGame(){
  const save = localStorage.getItem("neonSave");
  if(save){
    Object.assign(game, JSON.parse(save));
  }
}
