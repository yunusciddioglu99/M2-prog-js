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


        let arraynummers = [9, 8, 7];

        console.log(arraynummers);
    }
}

let app = new App();
app.runApplication();

