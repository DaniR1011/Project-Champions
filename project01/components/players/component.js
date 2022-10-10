const app = document.querySelector("section");

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
    app.innerHTML = `<h1 id="tituloPag"> Players </h1>
    <p> Here you can see six importants players of the Uefa Champions League. 
    I know that there are more and more, but I choose these random players to explain the project.
    My main idea is to create like players cards, with information about the player.</p>
    `;
    
    for (const player of players) {
      const playerFigure = `
      <br>
      <figure class="player">
        <h3>${player.name}</h3>
        <hr>
        <p>Age: ${player.age} years old</p>
        <p>Team: ${player.team}</p>
        <p>Foot: ${player.foot}</p>
        <p>Nationality: ${player.nation}</p>
        <img src=${player.img} alt=${player.img} />
      </figure>
      `  
      app.innerHTML += playerFigure;
    }
    app.innerHTML += `<br><a href="#">Back to top</a>`
}