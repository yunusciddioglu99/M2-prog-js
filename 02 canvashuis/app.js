class App
{
    runApplication()
    {
        
        
        let canvas = document.getElementById("canvasId")
        let g = canvas.getContext("2d");
        console.log(canvas)
        g.fillStyle = "blue";
        g.fillRect(0,0,canvas.width,canvas.height);
        g.fillStyle = "yellow";
        g.fillRect(0,0,10,10);

    }
}

let app = new App();
app.runApplication();