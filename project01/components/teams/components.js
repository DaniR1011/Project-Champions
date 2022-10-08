const app2 = document.querySelector("#app2");

export const initTeams = () => {
    getTeams();
};

const getTeams = async () => {
    try {
      const rawTeams = await fetch("http://localhost:3000/Teams");
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
console.log(transformTeams);
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
      app2.innerHTML = "";
      teams.forEach((finalTeams) => {
        app2.innerHTML += `
          <div>
            <h3>${teams.name}</h3>
            <p>${teams.manager}</p>
            <p>${teams.country}</p>
          </div>
          ;`
      })
    };
