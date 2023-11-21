class App
{
    runApplication()
    {
        console.log("helloworld!");
        let appNaam = "Angry Birds"
        console.log("appNaam: " + appNaam);
        let versienummer = "1.2"
        console.log("verisenummer: " + versienummer);
        let versiedatum = "16/11/2023 14:56:21"
        console.log("versiedatum: " + versiedatum);
        let autheur = "Yunus"
        console.log("autheur: " + autheur);
        let copyright = "Rovio"
        console.log("copyright: " + copyright);
        let distributeur = "Sega"
        console.log("distributeur: " + distributeur)
        let darkmode = true
        console.log("darkmode: " + darkmode)
    }
}

let app = new App();
app.runApplication();