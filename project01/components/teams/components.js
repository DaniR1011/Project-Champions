const app2 = document.querySelector(".hero");

export const initTeams = () => {
    getTeams();
};

const getTeams = async () => {
    try {
      const rawTeams = await fetch("http://localhost:3000/teams");
      const jsonTeams = await rawTeams.json();
      transformTeams(jsonTeams)
      console.log(jsonTeams); 
      console.log(rawTeams);
    } catch (error) {
        console.log(error);
    }
};
const transformTeams = (teams) => {
    const mappedTeams = teams.map((teams) => ({
        id: teams.id,
        name: teams.name,
        manager: teams.manager,
        country: teams.country,
        competition: teams.competition,
        shield: teams.shield,
    }))
printTeams(mappedTeams)
};

// const printTeams = (teams) => {
//     for (const team of teams) {
//       const teamDiv = `
//       <div class="team">
//         <h3>${team.name}</h3>
//         <p>${team.manager} years old</p>
//         <img src=${team.shield} alt=${team.shield} />
//       </div>
//       `  
//       app2.innerHTML += teamDiv;
//     }

    const printTeams = (teams) => {
      app2.innerHTML = "<h2>Teams</h2>";
      teams.forEach((finalTeams) => {
        app2.innerHTML += `
          <div>
            <h1>${finalTeams.name}</h1>
            <hr>
            <p>${finalTeams.manager}</p>
            <p>${finalTeams.country}</p>
            <p>${finalTeams.competition}</p>
            <img src=${finalTeams.shield} alt=${finalTeams.shield} />
          </div>
          `
      })
    };
