function radians(degrees) {
  return degrees * Math.PI / 180;
};

function sqrt(n){
  return Math.sqrt(n)
}

function numbers (start, end, n){
  var arr = [];
  for(i = start; i <= end; i++){
    arr.push(i*n)
  } return arr
}

function backNumbers (start, end, n){
  var arr = [];
  for(i = start; i >= end; i--){
    arr.push(i*n)
  } return arr
}

function cot (x) {
  return 1/Math.tan(x)
}

function sin (x) {
  return Math.sin(x)
}

function cos (x) {
  return Math.cos(x)
}

function tan (x) {
  return Math.tan(x)
}

function asin (x) {
  return Math.asin(x)
}

function acos (x) {
  return Math.cos(x)
}

function atan (x) {
  return Math.atan(x)
}


function fancy (arr,f,n){
  var box = [];
  for(i = 0; i < arr.length; i++){
    box.push( n*(Math.pow(sin(arr[i]),f)) )
  } return box
}

function secondTwist(x,y,arr){
  var obj = {
    x: [],
    y: []
  }
  for(i=0;i<x.length;i++){
    obj.x.push((x[i]*cos(arr[i]))+(y[i]*sin(arr[i])));
    obj.y.push((-x[i]*sin(arr[i]))+(y[i]*cos(arr[i])));
  }return obj
}

function strip(topRatio,sidex,sidey){
  var obj = {
    x: [],
    y: []
  }
  for(i=topRatio;i<sidey.length;i++){
    obj.x.push(sidex[i]);
    obj.y.push(sidey[i]);
  }return obj
}


function basePoints(d,start,a,s,cy){
  var radUse = radians(360)/d;
  var e = 1/a;
  var small = [1,2,3,4];
  var obj = {
    p: [],
    x: [],
    y: [],
    dif: [],
    use: [],
    m: [],
    b: []
  }

  for(i=0;i<small.length;i++){
    obj.p.push(radians(start)+(radUse*((d/4)*small[i])));
    obj.x.push(s*sin(obj.p[i]));
    obj.y.push(((cos(obj.p[i])*e)+cy)*s);
  }

  for(i=0;i<small.length;i++){

    if(i<3){
      obj.dif.push(obj.x[i+1]-obj.x[i]);
      obj.m.push((obj.y[i+1]-obj.y[i])/(obj.x[i+1]-obj.x[i]));
    }else{
      obj.dif.push(obj.x[0]-obj.x[i]);
      obj.m.push((obj.y[0]-obj.y[i])/(obj.x[0]-obj.x[i]));
    }

    obj.use.push(obj.dif[i]/d);
    obj.b.push(obj.y[i]-(obj.m[i]*obj.x[i]));

  }return obj
}

function basePointsV(d,obj1,obj2){

  var small = [1,2,3,4];
  var obj = {
    p: obj1.p,
    x: obj1.x,
    y: obj1.y,
    dif: [],
    use: [],
    m: [],
    b: []
  }

  for(i=0;i<small.length;i++){
    obj.dif.push(obj2.x[i]-obj1.x[i]);
    obj.use.push(obj.dif[i]/d);
    obj.m.push((obj2.y[i]-obj1.y[i])/(obj2.x[i]-obj1.x[i]));
    obj.b.push(obj.y[i]-(obj.m[i]*obj.x[i]))
  } return obj
}

function points(objIn,d,start){
  var arr = numbers (0, d, 1);
  var obj = {
    x1: [],
    y1: [],
    x2: [],
    y2: [],
    x3: [],
    y3: [],
    x4: [],
    y4: []
  }

  if(start>-turn-90 && start<turn){
    for(j=0;j<arr.length;j++){
     obj.x3.push(objIn.x[0] + (objIn.use[0]*arr[j]));
     obj.y3.push(objIn.b[0] + (objIn.m[0]*obj.x3[j]));
    }
    for(j=0;j<arr.length;j++){
     obj.x4.push(objIn.x[1] + (objIn.use[1]*arr[j]));
     obj.y4.push(objIn.b[1] + (objIn.m[1]*obj.x4[j]));
    }
    for(j=0;j<arr.length;j++){
     obj.x1.push(objIn.x[2] + (objIn.use[2]*arr[j]));
     obj.y1.push(objIn.b[2] + (objIn.m[2]*obj.x1[j]));
    }
    for(j=0;j<arr.length;j++){
     obj.x2.push(objIn.x[3] + (objIn.use[3]*arr[j]));
     obj.y2.push(objIn.b[3] + (objIn.m[3]*obj.x2[j]));
    }
  }

  if(start>turn && start<turn+90){
    for(j=0;j<arr.length;j++){
     obj.x4.push(objIn.x[0] + (objIn.use[0]*arr[j]));
     obj.y4.push(objIn.b[0] + (objIn.m[0]*obj.x4[j]));
    }
    for(j=0;j<arr.length;j++){
     obj.x1.push(objIn.x[1] + (objIn.use[1]*arr[j]));
     obj.y1.push(objIn.b[1] + (objIn.m[1]*obj.x1[j]));
    }
    for(j=0;j<arr.length;j++){
     obj.x2.push(objIn.x[2] + (objIn.use[2]*arr[j]));
     obj.y2.push(objIn.b[2] + (objIn.m[2]*obj.x2[j]));
    }
    for(j=0;j<arr.length;j++){
     obj.x3.push(objIn.x[3] + (objIn.use[3]*arr[j]));
     obj.y3.push(objIn.b[3] + (objIn.m[3]*obj.x3[j]));
    }
  }

  if(start>turn+90 && start<turn+180){
    for(j=0;j<arr.length;j++){
     obj.x1.push(objIn.x[0] + (objIn.use[0]*arr[j]));
     obj.y1.push(objIn.b[0] + (objIn.m[0]*obj.x1[j]));
    }
    for(j=0;j<arr.length;j++){
     obj.x2.push(objIn.x[1] + (objIn.use[1]*arr[j]));
     obj.y2.push(objIn.b[1] + (objIn.m[1]*obj.x2[j]));
    }
    for(j=0;j<arr.length;j++){
     obj.x3.push(objIn.x[2] + (objIn.use[2]*arr[j]));
     obj.y3.push(objIn.b[2] + (objIn.m[2]*obj.x3[j]));
    }
    for(j=0;j<arr.length;j++){
     obj.x4.push(objIn.x[3] + (objIn.use[3]*arr[j]));
     obj.y4.push(objIn.b[3] + (objIn.m[3]*obj.x4[j]));
    }
  }

  if(start>turn+180 && start<360){
    for(j=0;j<arr.length;j++){
     obj.x4.push(objIn.x[0] + (objIn.use[0]*arr[j]));
     obj.y4.push(objIn.b[0] + (objIn.m[0]*obj.x4[j]));
    }
    for(j=0;j<arr.length;j++){
     obj.x1.push(objIn.x[1] + (objIn.use[1]*arr[j]));
     obj.y1.push(objIn.b[1] + (objIn.m[1]*obj.x1[j]));
    }
    for(j=0;j<arr.length;j++){
     obj.x2.push(objIn.x[2] + (objIn.use[2]*arr[j]));
     obj.y2.push(objIn.b[2] + (objIn.m[2]*obj.x2[j]));
    }
    for(j=0;j<arr.length;j++){
     obj.x3.push(objIn.x[3] + (objIn.use[3]*arr[j]));
     obj.y3.push(objIn.b[3] + (objIn.m[3]*obj.x3[j]));
    }
  }
  return obj
}






//**********************END FUNCTIONS*********************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//******************************************************************************************************************
//*************GLOBAL VARS******************************************************************************************

var d = 100;
var start = 10;
var a1 = 2;
var a2 = 2;
var s1 = 1;
var s2 = .8;
var cy1 = 5;
var cy2 = 4;
var turn = 47.24137;

var radUse = radians(360)/d;
var realUse = radUse/4;
var e2 = 1/a2;
var e1 = 1/a1;

var num = numbers (0, d, 1)
var obj1 = basePoints(d,start,a1,s1,cy1);
var obj2 = basePoints(d,start,a2,s2,cy2);
var objv = basePointsV(d,obj1,obj2);

var obj = {
  big: points(obj1,d,start),
  small: points(obj2,d,start),
  vertical: points(objv,d,start)
}

//console.log(obj)

var finalCount = 0;
var extra = 'blinewidth .5 all' + '\n' + 'drawframe no' + '\n' + 'asetticks x no' + '\n' + 'asetticks y no' + '\n' + 'asetminticks x no' + '\n' + 'asetminticks y no' + '\n' +'framewidth 0' + '\n' + 'bstyle yes no no no no no no yes no no 0' + '\n' + 'margins 0 0 0 0' + '\n' + 'range x -10 10' + '\n' + 'range y -10 10';
var buffer = 'newbuffer' + '\n';
var text = '';

function plot(side,x1,y1,x2,y2){

   //1 = white
   //0 = black
   var color;
   if(side == 1){
     color = .1;
   }
   if(side == 2){
     color = .3;
   }
   if(side == 3){
     color = .5;
   }
   if(side == 4){
     color = .7;
   }

   for(i=0;i<x1.length;i++){

      buffer += 'newbuffer' + '\n';
      text += 'addvalue ' + finalCount + ' ' + x1[i] + ' ' + y1[i] + '\n';
      text += 'addvalue ' + finalCount + ' ' + x2[i] + ' ' + y2[i] + '\n';
      text += 'bcolor ' + color + ' ' + color + ' ' + .5 + ' ' + finalCount + '\n'

      finalCount++
   }
}



plot(4,obj.big.x4,obj.big.y4,obj.small.x4,obj.small.y4);
plot(3,obj.big.x3,obj.big.y3,obj.small.x3,obj.small.y3);
plot(2,obj.big.x2,obj.big.y2,obj.small.x2,obj.small.y2);
plot(1,obj.big.x1,obj.big.y1,obj.small.x1,obj.small.y1);



var end = buffer + text + extra
console.log(end)
