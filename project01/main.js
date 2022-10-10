import './style.css'
import {init} from "./components/players/component";
import {initTeams} from "./components/teams/components";
import {initHeader} from "./components/header/component";
import {initBody} from './components/body/component';
import { initContact } from './components/contact/component';
import { initFooter } from './components/footer/component';

// const navbar = initHeader()

// const cabecera = document.querySelector("header");
// cabecera.innerHTML = navbar;

// const btnPlayer = document.querySelector("#btnplayer")
// btnPlayer.addEventListener("click", init);

// const btnTeam = document.querySelector("#btnteam")
// btnTeam.addEventListener("click", initTeams);

const header = document.querySelector("header")
header.innerHTML = initHeader();

let players = document.querySelector("section")
players = initBody();

const homebtn = document.querySelector("#home")
homebtn.addEventListener("click", initBody);

const playersbtn = document.querySelector("#players")
playersbtn.addEventListener("click", init);

const teamsbtn = document.querySelector("#teams")
teamsbtn.addEventListener("click", initTeams);

const contactbtn = document.querySelector("#contact")
contactbtn.addEventListener("click", initContact);