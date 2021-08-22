var marks = [30,40,45,35];
var avg;
function average(){
  var sum = 0
  for(i=0; i<marks.length; i++){
    sum = sum + marks[i];
  }
  avg = sum/marks.length;
  console.log(avg);
}



function setup() {
  createCanvas(400, 400);
  average();
}

function draw() {
  background(150);
  
}