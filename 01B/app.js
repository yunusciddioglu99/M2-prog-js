class App
{
    runApplication()
    {
     
        this.appNaam = "Angry Birds"
     
        this.versienummer = "1.2"
    
        this.versiedatum = "16/11/2023 14:56:21"
  
        this.autheur = "Yunus"
       
        this.copyright = "Rovio"
        
        this.distributeur = "Sega"
       
        this.darkmode = true
        
    }
}

let app = new App();
app.runApplication();

console.log("appNaam: " + app.appNaam);
console.log("verisenummer: " + app.versienummer);
console.log("versiedatum: " + app.versiedatum);
console.log("autheur: " + app.autheur);
console.log("copyright: " + app.copyright);
console.log("distributeur: " + app.distributeur);
console.log("darkmode: " + app.darkmode);
