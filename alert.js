function line(x, y, x1, y1){
    var example = document.getElementById("canvas"),
    ctx = example.getContext('2d');
    example.height = 200;
    example.width  = 200;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.stroke();
} 
line(3, 10, 25, 50);