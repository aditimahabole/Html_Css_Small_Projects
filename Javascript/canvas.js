
let canvas = document.getElementById("#my_canvas").getContext('2d');
console.log(canvas)
let context = canvas.getContext('2d');
;
console.log(context)
context.beginPath();
context.moveTo(0,0);
context.lineTo(250,250);
context.lineTo(250,500);
context.stroke();



