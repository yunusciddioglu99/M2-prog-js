class App
{
    runApplication()
    {
        let array = ["Cochise", "Amalee", "Playboi Carti"];
        console.log(array);

        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            console.log(i+ ": " + element);
        }

        array.push("bob dylan");
        array.push("prince");

        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            console.log(i+ ": " + element);
        }



    let indexToRemove = array.indexOf("bob dylan");
    array.splice(indexToRemove,1);

    let indexToRemove1 = array.indexOf("prince");
    array.splice(indexToRemove1,1);

    array.push("Ado");
    array.push("Lil Uzi Verti");


    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        console.log(i+ ": " + element);
    }

   let games = document.getElementsByClassName("games");

   for (let i = 0; i < games.length; i++) {
    let element1 = games[i];
    console.log(element1);
    console.log(element1.innerText);
    console.log(element1.innerText = "Huh?");
   }

games[0].innerText = "nieuws"   
games[1].innerText = "reviews"
games[2].innerText = "commentaar"
games[3].innerText = "beste forum posts"
games[4].innerText = "pricewatch"


let data = ["Nier:Automata, Persona 5, Nier:Replicant, God of War, Call of Duty Black Ops 3"]



        let arraynummers = [9, 8, 7];

        console.log(arraynummers);
    }

}

let app = new App();
app.runApplication();

