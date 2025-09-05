const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const innerR = 80; // 
ctx.clearRect(0, 0, canvas.width, canvas.height);

const g = ctx.createRadialGradient(centerX, centerY, innerR * 0.3, centerX, centerY, innerR);
g.addColorStop(0, '#ff7a00');   
g.addColorStop(0.4, '#ffd54f'); 
g.addColorStop(1, '#d84315');   

ctx.beginPath();
ctx.arc(centerX, centerY, innerR, 0, Math.PI * 2);
ctx.closePath();
ctx.fillStyle = g;
ctx.fill();
let flower = new Image();
flower.src = "pink.png"; 

flower.onload = function () {
  let numFlowers = 7;      
  let ringRadius = 40;   
  let flowerSize = 40;   

  for (let i = 0; i < numFlowers; i++) {
    let angle = (i / numFlowers) * 2 * Math.PI;
    let x = centerX + ringRadius * Math.cos(angle);
    let y = centerY + ringRadius * Math.sin(angle);

    ctx.drawImage(flower, x - flowerSize / 2, y - flowerSize / 2, flowerSize, flowerSize);
  }
};
let numCircles = 12;
let circleringRadius = 65; 
let circleSize = 16;   
let smallRadius = 12;
for (let i = 0; i < numCircles; i++) {
  let angle = (i / numCircles) * 2 * Math.PI;
  let x = centerX + circleringRadius * Math.cos(angle);
  let y = centerY + circleringRadius * Math.sin(angle);

  ctx.beginPath();
  ctx.arc(x, y, circleSize, 0, 2 * Math.PI);
  ctx.fillStyle = "#e53935"; 
  ctx.fill();
   
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, 2 * Math.PI);
  ctx.fillStyle = "#ffeb3b"; 
  ctx.fill();
}
let outerFlower = new Image();
outerFlower.src = "red.png"; 

outerFlower.onload = function () {
  let numFlowers = 18;      
  let ringRadius = 90;    
  let flowerSize = 60;     

  for (let i = 0; i < numFlowers; i++) {
    let angle = (i / numFlowers) * 2 * Math.PI;
    let x = centerX + ringRadius * Math.cos(angle);
    let y = centerY + ringRadius * Math.sin(angle);

    ctx.drawImage(
      outerFlower,
      x - flowerSize / 2,
      y - flowerSize / 2,
      flowerSize,
      flowerSize
    );
  }
};

function drawTriangle(ctx, x1, y1, x2, y2, x3, y3, color) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

function drawTriangle(ctx, x1, y1, x2, y2, x3, y3, color) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}



let outerRadius = 200;
let innerRadius = 160; 
let numSegments = 28;  

for (let i = 0; i < numSegments; i++) {
  let startAngle = (i * 2 * Math.PI) / numSegments;
  let endAngle = ((i + 1) * 2 * Math.PI) / numSegments;

  ctx.beginPath();

  ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle);

  ctx.lineTo(centerX + innerRadius * Math.cos(endAngle), centerY + innerRadius * Math.sin(endAngle));

  ctx.arc(centerX, centerY, innerRadius, endAngle, startAngle, true);
  ctx.closePath(); 

 
  ctx.fillStyle = i % 2 === 0 ? "#f1ce09ff" : "#cf3333ff"; 
  ctx.fill();
}
let greenGrad = ctx.createRadialGradient(centerX, centerY, 90, centerX, centerY, 170);
greenGrad.addColorStop(0, "#66bb6a");  
greenGrad.addColorStop(1, "#1b5e20");  

ctx.beginPath();
ctx.arc(centerX, centerY, 170, 0, 2 * Math.PI);
ctx.arc(centerX, centerY, 90, 0, 2 * Math.PI, true);
ctx.closePath();
ctx.fillStyle = greenGrad;
ctx.fill();
let outerFlower2 = new Image();
outerFlower2.src = "orange.png"; 

outerFlower2.onload = function () {
  let numFlowers = 20;     
  let ringRadius = 120;     
  let flowerSize = 50;      

  for (let i = 0; i < numFlowers; i++) {
    let angle = (i / numFlowers) * 2 * Math.PI;
    let x = centerX + ringRadius * Math.cos(angle);
    let y = centerY + ringRadius * Math.sin(angle);

    ctx.drawImage(
      outerFlower2,
      x - flowerSize / 2,
      y - flowerSize / 2,
      flowerSize,
      flowerSize
    );
  }
};
let outerFlower3 = new Image();
outerFlower3.src = "flower.png"; 

outerFlower3.onload = function () {
  let numFlowers = 24;      
  let ringRadius = 150;    
  let flowerSize = 55;      

  for (let i = 0; i < numFlowers; i++) {
    let angle = (i / numFlowers) * 2 * Math.PI;
    let x = centerX + ringRadius * Math.cos(angle);
    let y = centerY + ringRadius * Math.sin(angle);

    ctx.drawImage(
      outerFlower3,
      x - flowerSize / 2,
      y - flowerSize / 2,
      flowerSize,
      flowerSize
    );
  }
};
function drawDiamond(ctx, x, y, size, color) {
  ctx.beginPath();
  ctx.moveTo(x, y - size);   
  ctx.lineTo(x + size, y); 
  ctx.lineTo(x, y + size); 
  ctx.lineTo(x - size, y);   
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

// Violet diamond ring
let numDiamonds = 92;      
let ringRadius = 200;     
let diamondSize = 12;      

for (let i = 0; i < numDiamonds; i++) {
  let angle = (i / numDiamonds) * 2 * Math.PI;
  let x = centerX + ringRadius * Math.cos(angle);
  let y = centerY + ringRadius * Math.sin(angle);

  drawDiamond(ctx, x, y, diamondSize, "#840a2bff"); 
}
// Second diamond ring
let numDiamonds2 = 92;        
let ringRadius2 = 210;        
let diamondSize2 = 12;        

for (let i = 0; i < numDiamonds2; i++) {
  let angle = (i / numDiamonds2) * 2 * Math.PI;
  let x = centerX + ringRadius2 * Math.cos(angle);
  let y = centerY + ringRadius2 * Math.sin(angle);

  drawDiamond(ctx, x, y, diamondSize2, "#541160ff"); 
}

let flowerRingRadius = 230;  
let numFlowers = 40;          
let flowerSize = 40;         

let flowerImg = new Image();
flowerImg.src = "yellow.png";

flowerImg.onload = function () {
  for (let i = 0; i < numFlowers; i++) {
    let angle = (i / numFlowers) * 2 * Math.PI;
    let x = centerX + flowerRingRadius * Math.cos(angle);
    let y = centerY + flowerRingRadius * Math.sin(angle);

    ctx.drawImage(flowerImg, x - flowerSize / 2, y - flowerSize / 2, flowerSize, flowerSize);
  }
};

function drawTrianglePath(ctx, x1, y1, x2, y2, x3, y3) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.closePath();
  ctx.fill();

}

const numTriRing = 150;        
const triOuterRadius = 250;   
const triInnerRadius =300;   
const triColors = ["#b72f17ff", "#e7df02ff"]; 
const triStroke = false;     
const triStrokeColor = "#a1250fff";
const triStrokeWidth = 0.9;

if (triStroke) {
  ctx.lineWidth = triStrokeWidth;
  ctx.strokeStyle = triStrokeColor;
}

for (let i = 0; i <numTriRing; i++) {

  const delta = (2 * Math.PI) / numTriRing;
  const angle = i * delta;
  const half = delta / 2*0.8;

  const color = triColors[i % triColors.length];
  ctx.fillStyle = color;

  // Alternate orientation: even index -> tip outward, odd -> tip inward
  if (i % 2 === 0) {
   
    const tx = centerX + triOuterRadius * Math.cos(angle);
    const ty = centerY + triOuterRadius * Math.sin(angle);

    const b1x = centerX + triInnerRadius * Math.cos(angle + half);
    const b1y = centerY + triInnerRadius * Math.sin(angle + half);

    const b2x = centerX + triInnerRadius * Math.cos(angle - half);
    const b2y = centerY + triInnerRadius * Math.sin(angle - half);

    drawTrianglePath(ctx, tx, ty, b1x, b1y, b2x, b2y);
    if (triStroke) ctx.stroke();
  } else {
   
    const tx = centerX + triInnerRadius * Math.cos(angle);
    const ty = centerY + triInnerRadius * Math.sin(angle);

    const b1x = centerX + triOuterRadius * Math.cos(angle + half);
    const b1y = centerY + triOuterRadius * Math.sin(angle + half);

    const b2x = centerX + triOuterRadius * Math.cos(angle - half);
    const b2y = centerY + triOuterRadius * Math.sin(angle - half);

    drawTrianglePath(ctx, tx, ty, b1x, b1y, b2x, b2y);
    if (triStroke) ctx.stroke();
  }
}

ctx.beginPath();
ctx.arc(centerX, centerY, triOuterRadius, 0, 2 * Math.PI);
ctx.strokeStyle = "#e5c405ff"; 
ctx.lineWidth = 4;  
ctx.stroke();
const outerCircleRadius = triOuterRadius + 50; 
ctx.beginPath();
ctx.arc(centerX, centerY, outerCircleRadius, 0, 2 * Math.PI);
ctx.strokeStyle = "#970c0cff"; 
ctx.lineWidth = 5;            
ctx.stroke();

