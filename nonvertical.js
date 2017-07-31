function radians(degrees) {
  return degrees * Math.PI / 180;
};

function abs(n){
  return Math.abs(n)
}

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

function points(objIn,d,start,tPeak){

  var t = fancy(backNumbers (d, 0, rad90Use),1,tPeak);
  //console.log(t)
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

  for(j=0;j<arr.length;j++){
   var x = objIn.x[0] + (objIn.use[0]*arr[j]);
   var y = objIn.b[0] + (objIn.m[0]*x);
   obj.x1.push( (x*cos(t[j])) + (y*sin(t[j])) );
   obj.y1.push( (-x*sin(t[j])) + (y*cos(t[j])) );
  }
  for(j=0;j<arr.length;j++){
   var x = objIn.x[1] + (objIn.use[1]*arr[j]);
   var y = objIn.b[1] + (objIn.m[1]*x);
   obj.x2.push( (x*cos(t[j])) + (y*sin(t[j])) );
   obj.y2.push( (-x*sin(t[j])) + (y*cos(t[j])) );
  }
  for(j=0;j<arr.length;j++){
   var x = objIn.x[2] + (objIn.use[2]*arr[j]);
   var y = objIn.b[2] + (objIn.m[2]*x);
   obj.x3.push( (x*cos(t[j])) + (y*sin(t[j])) );
   obj.y3.push( (-x*sin(t[j])) + (y*cos(t[j])) );
  }
  for(j=0;j<arr.length;j++){
   var x = objIn.x[3] + (objIn.use[3]*arr[j]);
   var y = objIn.b[3] + (objIn.m[3]*x);
   obj.x4.push( (x*cos(t[j])) + (y*sin(t[j])) );
   obj.y4.push( (-x*sin(t[j])) + (y*cos(t[j])) );
  }

  // obj.x2.reverse();
  // obj.y2.reverse();
  // obj.x4.reverse();
  // obj.y4.reverse();
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
var start = 1;
var start2 = 340;
var tPeak = radians(0);
var rad90Use = radians(90)/d;

var t1 = radians(12);
var t2 = radians(9);
var t3 = radians(8.5);
var t4 = radians(-8);
var f = 25;
var v = -10;


var f1 = f;
var v1 = v;
var vm1 = cot(radians(v1));
var fm1 = cot(radians(90)-t1);
var fb1 = tan(t1)*abs(f1);
var ix1 = (fb1-v1)/(vm1-fm1);
var iy1 = vm1*((fb1-v1)/(vm1-fm1))+ v1;
var y1 = (tan(t1)*f1)-iy1;
var a1;
if(t1>0){
  a1 = abs(ix1/y1);
}else{
  a1 = abs(ix1/y1) * -1;
}
var s1 = abs(ix1);
var cy1 = iy1;

var f2 = f;
var v2 = v;
var vm2 = cot(radians(v2));
var fm2 = cot(radians(90)-t2);
var fb2 = tan(t2)*abs(f2);
var ix2 = (fb2-v2)/(vm2-fm2);
var iy2 = vm2*((fb2-v2)/(vm2-fm2))+ v2;
var y2 = (tan(t2)*f2)-iy2;
var a2;
if(t2>0){
  a2 = abs(ix2/y2);
}else{
  a2 = abs(ix2/y2) * -1;
}
var s2 = abs(ix2);
var cy2 = iy2;

var f3 = f;
var v3 = v;
var vm3 = cot(radians(v3));
var fm3 = cot(radians(90)-t3);
var fb3 = tan(t3)*abs(f3);
var ix3 = (fb3-v3)/(vm3-fm3);
var iy3 = vm3*((fb3-v3)/(vm3-fm3))+ v3;
var y3 = (tan(t3)*f3)-iy3;
var a3;
if(t3>0){
  a3 = abs(ix3/y3);
}else{
  a3 = abs(ix3/y3) * -1;
}
var s3 = abs(ix3);
var cy3 = iy3;

var f4 = f;
var v4 = v;
var vm4 = cot(radians(v4));
var fm4 = cot(radians(90)-t4);
var fb4 = tan(t4)*abs(f4);
var ix4 = (fb4-v4)/(vm4-fm4);
var iy4 = vm4*((fb4-v4)/(vm4-fm4))+ v4;
var y4 = (tan(t4)*f4)-iy4;
var a4;
if(t4>0){
  a4 = abs(ix4/y4);
}else{
  a4 = abs(ix4/y4) * -1;
}
var s4 = abs(ix4);
var cy4 = iy4;



var radUse = radians(360)/d;
var realUse = radUse/4;
var e2 = 1/a2;
var e1 = 1/a1;
var e3 = 1/a3;
var e4 = 1/a4;

var num = numbers (0, d, 1)
var obj1 = basePoints(d,start,a1,s1,cy1);
var obj2 = basePoints(d,start,a2,s2,cy2);
var objv = basePointsV(d,obj1,obj2);

var obj3 = basePoints(d,start2,a3,s3,cy3);
var obj4 = basePoints(d,start2,a4,s4,cy4);
var objv2 = basePointsV(d,obj3,obj4);

var obj = {
  big: points(obj1,d,start,tPeak),
  small: points(obj2,d,start,tPeak),
  vertical: points(objv,d,start,tPeak)
}
console.log(obj)
var obj2 = {
  big: points(obj3,d,start2,tPeak),
  small: points(obj4,d,start2,tPeak),
  vertical: points(objv2,d,start2,tPeak)
}

//console.log(fancy(backNumbers (d, 0, rad90Use),1,tPeak))


var finalCount = 0;
var extra = 'blinewidth 2 all' + '\n' + 'drawframe no' + '\n' + 'asetticks x no' + '\n' + 'asetticks y no' + '\n' + 'asetminticks x no' + '\n' + 'asetminticks y no' + '\n' +'framewidth 0' + '\n' + 'bstyle yes no no no no no no yes no no 0' + '\n' + 'margins 0 0 0 0' + '\n' + 'range x -20 20' + '\n' + 'range y -20 20';
var buffer = 'newbuffer' + '\n';
var text = '';

function plot(side,x1,y1,x2,y2){

   //1 = white
   //0 = black
   var color;
   if(side == 1){
     color = .2;
   }
   if(side == 2){
     color = .4;
   }
   if(side == 3){
     color = .6;
   }
   if(side == 4){
     color = .8;
   }
   if(side == 5){
     color = 0;
   }

   for(i=0;i<x1.length;i++){

      buffer += 'newbuffer' + '\n';
      text += 'addvalue ' + finalCount + ' ' + x1[i] + ' ' + y1[i] + '\n';
      text += 'addvalue ' + finalCount + ' ' + x2[i] + ' ' + y2[i] + '\n';
      text += 'bcolor ' + color + ' ' + color + ' ' + .5 + ' ' + finalCount + '\n'

      finalCount++
   }
}

if(t1>=0 && t2>=0){
  if(start>=315 || start<45){
    plot(1,obj.big.x1,obj.big.y1,obj.small.x1,obj.small.y1);
    plot(2,obj.big.x2,obj.big.y2,obj.small.x2,obj.small.y2);
    plot(3,obj.big.x3,obj.big.y3,obj.small.x3,obj.small.y3);
    plot(4,obj.big.x4,obj.big.y4,obj.small.x4,obj.small.y4);
    // plot(5,obj.small.x3,obj.small.y3,obj.small.x1,obj.small.y1);
    // plot(5,obj.small.x2,obj.small.y2,obj.small.x4,obj.small.y4);
  }
  if(start>=45 && start<135){
    plot(4,obj.big.x4,obj.big.y4,obj.small.x4,obj.small.y4);
    plot(1,obj.big.x1,obj.big.y1,obj.small.x1,obj.small.y1);
    plot(2,obj.big.x2,obj.big.y2,obj.small.x2,obj.small.y2);
    plot(3,obj.big.x3,obj.big.y3,obj.small.x3,obj.small.y3);
    plot(5,obj.small.x3,obj.small.y3,obj.small.x1,obj.small.y1);
    plot(5,obj.small.x2,obj.small.y2,obj.small.x4,obj.small.y4);
  }
  if(start>=135 && start<225){
    plot(3,obj.big.x3,obj.big.y3,obj.small.x3,obj.small.y3);
    plot(4,obj.big.x4,obj.big.y4,obj.small.x4,obj.small.y4);
    plot(1,obj.big.x1,obj.big.y1,obj.small.x1,obj.small.y1);
    plot(2,obj.big.x2,obj.big.y2,obj.small.x2,obj.small.y2);
    plot(5,obj.small.x3,obj.small.y3,obj.small.x1,obj.small.y1);
    plot(5,obj.small.x2,obj.small.y2,obj.small.x4,obj.small.y4);
  }
  if(start>=225 && start<315){
    plot(2,obj.big.x2,obj.big.y2,obj.small.x2,obj.small.y2);
    plot(3,obj.big.x3,obj.big.y3,obj.small.x3,obj.small.y3);
    plot(4,obj.big.x4,obj.big.y4,obj.small.x4,obj.small.y4);
    plot(1,obj.big.x1,obj.big.y1,obj.small.x1,obj.small.y1);
    plot(5,obj.small.x3,obj.small.y3,obj.small.x1,obj.small.y1);
    plot(5,obj.small.x2,obj.small.y2,obj.small.x4,obj.small.y4);
  }
}

if(t1<=0 && t2<=0){
  if(start>=315 || start<45){
    plot(1,obj.big.x1,obj.big.y1,obj.small.x1,obj.small.y1);
    plot(2,obj.big.x2,obj.big.y2,obj.small.x2,obj.small.y2);
    plot(3,obj.big.x3,obj.big.y3,obj.small.x3,obj.small.y3);
    plot(4,obj.big.x4,obj.big.y4,obj.small.x4,obj.small.y4);
    plot(5,obj.big.x3,obj.big.y3,obj.big.x1,obj.big.y1);
    plot(5,obj.big.x2,obj.big.y2,obj.big.x4,obj.big.y4);
  }
  if(start>=45 && start<135){
    plot(4,obj.big.x4,obj.big.y4,obj.small.x4,obj.small.y4);
    plot(1,obj.big.x1,obj.big.y1,obj.small.x1,obj.small.y1);
    plot(2,obj.big.x2,obj.big.y2,obj.small.x2,obj.small.y2);
    plot(3,obj.big.x3,obj.big.y3,obj.small.x3,obj.small.y3);
    plot(5,obj.big.x3,obj.big.y3,obj.big.x1,obj.big.y1);
    plot(5,obj.big.x2,obj.big.y2,obj.big.x4,obj.big.y4);
  }
  if(start>=135 && start<225){
    plot(3,obj.big.x3,obj.big.y3,obj.small.x3,obj.small.y3);
    plot(4,obj.big.x4,obj.big.y4,obj.small.x4,obj.small.y4);
    plot(1,obj.big.x1,obj.big.y1,obj.small.x1,obj.small.y1);
    plot(2,obj.big.x2,obj.big.y2,obj.small.x2,obj.small.y2);
    plot(5,obj.big.x3,obj.big.y3,obj.big.x1,obj.big.y1);
    plot(5,obj.big.x2,obj.big.y2,obj.big.x4,obj.big.y4);
  }
  if(start>=225 && start<315){
    plot(2,obj.big.x2,obj.big.y2,obj.small.x2,obj.small.y2);
    plot(3,obj.big.x3,obj.big.y3,obj.small.x3,obj.small.y3);
    plot(4,obj.big.x4,obj.big.y4,obj.small.x4,obj.small.y4);
    plot(1,obj.big.x1,obj.big.y1,obj.small.x1,obj.small.y1);
    plot(5,obj.big.x3,obj.big.y3,obj.big.x1,obj.big.y1);
    plot(5,obj.big.x2,obj.big.y2,obj.big.x4,obj.big.y4);
  }
}

if(t1>=0 && t2<=0){
  if(start>=315 || start<45){
    plot(1,obj.big.x1,obj.big.y1,obj.small.x1,obj.small.y1);
    plot(2,obj.big.x2,obj.big.y2,obj.small.x2,obj.small.y2);
    plot(3,obj.big.x3,obj.big.y3,obj.small.x3,obj.small.y3);
    plot(4,obj.big.x4,obj.big.y4,obj.small.x4,obj.small.y4);
  }
  if(start>=45 && start<135){
    plot(4,obj.big.x4,obj.big.y4,obj.small.x4,obj.small.y4);
    plot(1,obj.big.x1,obj.big.y1,obj.small.x1,obj.small.y1);
    plot(2,obj.big.x2,obj.big.y2,obj.small.x2,obj.small.y2);
    plot(3,obj.big.x3,obj.big.y3,obj.small.x3,obj.small.y3);
  }
  if(start>=135 && start<225){
    plot(3,obj.big.x3,obj.big.y3,obj.small.x3,obj.small.y3);
    plot(4,obj.big.x4,obj.big.y4,obj.small.x4,obj.small.y4);
    plot(1,obj.big.x1,obj.big.y1,obj.small.x1,obj.small.y1);
    plot(2,obj.big.x2,obj.big.y2,obj.small.x2,obj.small.y2);
  }
  if(start>=225 && start<315){
    plot(2,obj.big.x2,obj.big.y2,obj.small.x2,obj.small.y2);
    plot(3,obj.big.x3,obj.big.y3,obj.small.x3,obj.small.y3);
    plot(4,obj.big.x4,obj.big.y4,obj.small.x4,obj.small.y4);
    plot(1,obj.big.x1,obj.big.y1,obj.small.x1,obj.small.y1);
  }
}


// if(t3>=0 && t4>=0){
//   if(start22>=315 || start22<45){
//     plot(1,obj2.big.x1,obj2.big.y1,obj2.small.x1,obj2.small.y1);
//     plot(2,obj2.big.x2,obj2.big.y2,obj2.small.x2,obj2.small.y2);
//     plot(3,obj2.big.x3,obj2.big.y3,obj2.small.x3,obj2.small.y3);
//     plot(4,obj2.big.x4,obj2.big.y4,obj2.small.x4,obj2.small.y4);
//     plot(5,obj2.small.x3,obj2.small.y3,obj2.small.x1,obj2.small.y1);
//     plot(5,obj2.small.x2,obj2.small.y2,obj2.small.x4,obj2.small.y4);
//   }
//   if(start22>=45 && start22<135){
//     plot(4,obj2.big.x4,obj2.big.y4,obj2.small.x4,obj2.small.y4);
//     plot(1,obj2.big.x1,obj2.big.y1,obj2.small.x1,obj2.small.y1);
//     plot(2,obj2.big.x2,obj2.big.y2,obj2.small.x2,obj2.small.y2);
//     plot(3,obj2.big.x3,obj2.big.y3,obj2.small.x3,obj2.small.y3);
//     plot(5,obj2.small.x3,obj2.small.y3,obj2.small.x1,obj2.small.y1);
//     plot(5,obj2.small.x2,obj2.small.y2,obj2.small.x4,obj2.small.y4);
//   }
//   if(start22>=135 && start22<225){
//     plot(3,obj2.big.x3,obj2.big.y3,obj2.small.x3,obj2.small.y3);
//     plot(4,obj2.big.x4,obj2.big.y4,obj2.small.x4,obj2.small.y4);
//     plot(1,obj2.big.x1,obj2.big.y1,obj2.small.x1,obj2.small.y1);
//     plot(2,obj2.big.x2,obj2.big.y2,obj2.small.x2,obj2.small.y2);
//     plot(5,obj2.small.x3,obj2.small.y3,obj2.small.x1,obj2.small.y1);
//     plot(5,obj2.small.x2,obj2.small.y2,obj2.small.x4,obj2.small.y4);
//   }
//   if(start2>=225 && start2<315){
//     plot(2,obj2.big.x2,obj2.big.y2,obj2.small.x2,obj2.small.y2);
//     plot(3,obj2.big.x3,obj2.big.y3,obj2.small.x3,obj2.small.y3);
//     plot(4,obj2.big.x4,obj2.big.y4,obj2.small.x4,obj2.small.y4);
//     plot(1,obj2.big.x1,obj2.big.y1,obj2.small.x1,obj2.small.y1);
//     plot(5,obj2.small.x3,obj2.small.y3,obj2.small.x1,obj2.small.y1);
//     plot(5,obj2.small.x2,obj2.small.y2,obj2.small.x4,obj2.small.y4);
//   }
// }

// if(t3<=0 && t4<=0){
//   if(start2>=315 || start2<45){
//     plot(1,obj2.big.x1,obj2.big.y1,obj2.small.x1,obj2.small.y1);
//     plot(2,obj2.big.x2,obj2.big.y2,obj2.small.x2,obj2.small.y2);
//     plot(3,obj2.big.x3,obj2.big.y3,obj2.small.x3,obj2.small.y3);
//     plot(4,obj2.big.x4,obj2.big.y4,obj2.small.x4,obj2.small.y4);
//     plot(5,obj2.big.x3,obj2.big.y3,obj2.big.x1,obj2.big.y1);
//     plot(5,obj2.big.x2,obj2.big.y2,obj2.big.x4,obj2.big.y4);
//   }
//   if(start2>=45 && start2<135){
//     plot(4,obj2.big.x4,obj2.big.y4,obj2.small.x4,obj2.small.y4);
//     plot(1,obj2.big.x1,obj2.big.y1,obj2.small.x1,obj2.small.y1);
//     plot(2,obj2.big.x2,obj2.big.y2,obj2.small.x2,obj2.small.y2);
//     plot(3,obj2.big.x3,obj2.big.y3,obj2.small.x3,obj2.small.y3);
//     plot(5,obj2.big.x3,obj2.big.y3,obj2.big.x1,obj2.big.y1);
//     plot(5,obj2.big.x2,obj2.big.y2,obj2.big.x4,obj2.big.y4);
//   }
//   if(start2>=135 && start2<225){
//     plot(3,obj2.big.x3,obj2.big.y3,obj2.small.x3,obj2.small.y3);
//     plot(4,obj2.big.x4,obj2.big.y4,obj2.small.x4,obj2.small.y4);
//     plot(1,obj2.big.x1,obj2.big.y1,obj2.small.x1,obj2.small.y1);
//     plot(2,obj2.big.x2,obj2.big.y2,obj2.small.x2,obj2.small.y2);
//     plot(5,obj2.big.x3,obj2.big.y3,obj2.big.x1,obj2.big.y1);
//     plot(5,obj2.big.x2,obj2.big.y2,obj2.big.x4,obj2.big.y4);
//   }
//   if(start2>=225 && start2<315){
//     plot(2,obj2.big.x2,obj2.big.y2,obj2.small.x2,obj2.small.y2);
//     plot(3,obj2.big.x3,obj2.big.y3,obj2.small.x3,obj2.small.y3);
//     plot(4,obj2.big.x4,obj2.big.y4,obj2.small.x4,obj2.small.y4);
//     plot(1,obj2.big.x1,obj2.big.y1,obj2.small.x1,obj2.small.y1);
//     plot(5,obj2.big.x3,obj2.big.y3,obj2.big.x1,obj2.big.y1);
//     plot(5,obj2.big.x2,obj2.big.y2,obj2.big.x4,obj2.big.y4);
//   }
// }

// if(t3>=0 && t4<=0){
//   if(start2>=315 || start2<45){
//     plot(1,obj2.big.x1,obj2.big.y1,obj2.small.x1,obj2.small.y1);
//     plot(2,obj2.big.x2,obj2.big.y2,obj2.small.x2,obj2.small.y2);
//     plot(3,obj2.big.x3,obj2.big.y3,obj2.small.x3,obj2.small.y3);
//     plot(4,obj2.big.x4,obj2.big.y4,obj2.small.x4,obj2.small.y4);
//   }
//   if(start2>=45 && start2<135){
//     plot(4,obj2.big.x4,obj2.big.y4,obj2.small.x4,obj2.small.y4);
//     plot(1,obj2.big.x1,obj2.big.y1,obj2.small.x1,obj2.small.y1);
//     plot(2,obj2.big.x2,obj2.big.y2,obj2.small.x2,obj2.small.y2);
//     plot(3,obj2.big.x3,obj2.big.y3,obj2.small.x3,obj2.small.y3);
//   }
//   if(start2>=135 && start2<225){
//     plot(3,obj2.big.x3,obj2.big.y3,obj2.small.x3,obj2.small.y3);
//     plot(4,obj2.big.x4,obj2.big.y4,obj2.small.x4,obj2.small.y4);
//     plot(1,obj2.big.x1,obj2.big.y1,obj2.small.x1,obj2.small.y1);
//     plot(2,obj2.big.x2,obj2.big.y2,obj2.small.x2,obj2.small.y2);
//   }
//   if(start2>=225 && start2<315){
//     plot(2,obj2.big.x2,obj2.big.y2,obj2.small.x2,obj2.small.y2);
//     plot(3,obj2.big.x3,obj2.big.y3,obj2.small.x3,obj2.small.y3);
//     plot(4,obj2.big.x4,obj2.big.y4,obj2.small.x4,obj2.small.y4);
//     plot(1,obj2.big.x1,obj2.big.y1,obj2.small.x1,obj2.small.y1);
//   }
// }



var end = buffer + text + extra
//console.log(end)
