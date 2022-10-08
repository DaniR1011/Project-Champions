const app = document.querySelector(".hero");

export const init = () => {
    getPlayers();
};

const getPlayers = async () => {
    try {
      const rawPlayers = await fetch("http://localhost:3000/players");
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
    app.innerHTML = "";
    for (const player of players) {
      const playerFigure = `
      <figure class="player">
        <h3>${player.name}</h3>
        <p>${player.age} years old</p>
        <p>${player.team}</p>
        <p>${player.foot}</p>
        <p>${player.nation}</p>
        <img src=${player.img} alt=${player.img} />
      </figure>
      `  
      app.innerHTML += playerFigure;
    }
}