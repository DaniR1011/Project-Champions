const app = document.querySelector("#app");

export const init = () => {
    getPlayers();
};

const getPlayers = async () => {
    try {
      const rawPlayers = await fetch("http://localhost:3000/Players");
      const jsonPlayers = await rawPlayers.json();
      transformPlayers(jsonPlayers)
      console.log(jsonPlayers); 
    } catch (error) {
        console.log(error);
    }
};

const transformPlayers = (players) => {
    const mappedPLayers = players.map((players) => ({
        name: players.name,
        age: players.age,
        team: players.team,
        foot: players.foot,
        nation: players.nation,
        img: players.img,
    }))
printPLayers(mappedPLayers)
};

const printPLayers = (players) => {
    for (const player of players) {
      const playerFigure = `
      <figure class="player">
        <h3>${player.name}</h3>
        <p>${player.age} years old</p>
        <img src=${player.img} alt=${player.img} />
      </figure>
      `  
      app.innerHTML += playerFigure;
    }
}