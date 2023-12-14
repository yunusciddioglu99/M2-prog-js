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
    array.push("Lil Uzi Vert");


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

