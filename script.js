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



function equalOut(arr1,arr2){

  var obj = {
    arr1: arr1.map(a => a),
    arr2: arr2.map(a => a)
  }

   var obj = {
    arr1: arr1.map(function(item, i) {
      return item
    }),
    arr2: arr2.map(function(item, i) {
      return item
    })
  }

  if(obj.arr1.length > obj.arr2.length){
    var length = obj.arr1.length;
    var toCopy = obj.arr2[obj.arr2.length-1];
    for(i=0;i<length;i++){
      if(obj.arr2[i] == undefined){
        obj.arr2.push(toCopy);
      }
    }
  } else{
    var length = obj.arr2.length;
    var toCopy = obj.arr1[obj.arr1.length-1];
    for(i=0;i<length;i++){
      if(obj.arr1[i] == undefined){
        obj.arr1.push(toCopy);
      }
    }
  }
  return obj
}


function zeros(d){
  var arr = [];
  for(i=0;i<d+1;i++){
    arr.push(0);
  }return arr
}

function baseY(L,LUse,numbers,minus){
  var arr = [];
  for(i=0;i<numbers.length;i++){
    arr.push((L-(LUse*numbers[i]))-minus);
  }return arr
}

function firstRight(x,y,sin,cos,put){
  var obj = {
    x: [],
    y: []
  }
  for(i=0;i<x.length;i++){
    obj.x.push((x[i]*cos)+(y[i]*sin));
    obj.y.push(((-x[i]*sin)+(y[i]*cos))-put);
  }return obj
}

function firstLeft(x,y,sin,cos,put){
  var obj = {
    x: [],
    y: []
  }
  for(i=0;i<x.length;i++){
    obj.x.push((x[i]*-cos)+(y[i]*-sin));
    obj.y.push(((x[i]*-sin)-(y[i]*-cos))-put);
  }return obj
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

function makeTop(topLength,rightx,righty,leftx,lefty,middlex,middley){
  var obj = {
    left: {
      x: [],
      y: []
    },
    middle: {
      x: [],
      y: []
    },
    right: {
      x: [],
      y: []
    }
  }
  for(i=0;i<topLength;i++){
    obj.right.x.push(rightx[i]);
    obj.right.y.push(righty[i]);
    obj.left.x.push(leftx[i]);
    obj.left.y.push(lefty[i]);
    obj.middle.x.push(middlex[i]);
    obj.middle.y.push(middley[i]);
  }return obj
}

function makeBottom(gap,rightx,righty,leftx,lefty,middlex,middley){
  var obj = {
    left: {
      x: [],
      y: []
    },
    middle: {
      x: [],
      y: []
    },
    right: {
      x: [],
      y: []
    }
  }
  for(i=gap;i<middley.length;i++){
    obj.right.x.push(rightx[i]);
    obj.right.y.push(righty[i]);
    obj.left.x.push(leftx[i]);
    obj.left.y.push(lefty[i]);
    obj.middle.x.push(middlex[i]);
    obj.middle.y.push(middley[i]);
  }return obj
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
var finalCount = 0;
var extra = 'blinewidth .5 all' + '\n' + 'drawframe no' + '\n' + 'asetticks x no' + '\n' + 'asetticks y no' + '\n' + 'asetminticks x no' + '\n' + 'asetminticks y no' + '\n' +'framewidth 0' + '\n' + 'bstyle yes no no no no no no yes no no 0' + '\n' + 'margins 0 0 0 0' + '\n' + 'range x -1.2 1.2' + '\n' + 'range y -1.2 1.2';


var d = 300;
var L = 1;
var put = .5;
var firstT = radians(5);
var tPeak = radians(70);
var f = 1;
var topRatio = Math.round(d/6);
var topLength = topRatio;
var gap = topRatio+(topRatio/2);


var radUse = radians(90)/d;
var LUse = L/d;


var baseObj = {
  middle: {
    x: [],
    y: []
  },
  side: {
    x: [],
    y: []
  }
}

baseObj.middle.x = zeros(d);
baseObj.side.x = zeros(d);
baseObj.middle.y = baseY(L,LUse,numbers(0,d,1),0);
baseObj.side.y = baseY(L,LUse,numbers(0,d,1),0);


var firstObj = {
  left: {
    x: [],
    y: []
  },
  middle: {
    x: [],
    y: []
  },
  right: {
    x: [],
    y: []
  }
}

firstObj.middle.x = zeros(d);
firstObj.middle.y = baseY(L,LUse,numbers(0,d,1),put);
firstObj.right.x = firstRight(baseObj.side.x,baseObj.side.y,sin(firstT),cos(firstT),put).x;
firstObj.right.y = firstRight(baseObj.side.x,baseObj.side.y,sin(firstT),cos(firstT),put).y;
firstObj.left.x = firstLeft(baseObj.side.x,baseObj.side.y,sin(firstT),cos(firstT),put).x;
firstObj.left.y = firstLeft(baseObj.side.x,baseObj.side.y,sin(firstT),cos(firstT),put).y;


var secondObj = {
  left: {
    x: [],
    y: []
  },
  middle: {
    x: [],
    y: []
  },
  right: {
    x: [],
    y: []
  }
}

//putting in full lines
secondObj.middle.x = secondTwist(firstObj.middle.x,firstObj.middle.y,fancy(backNumbers (d, 0, radUse),f,tPeak)).x;
secondObj.middle.y = secondTwist(firstObj.middle.x,firstObj.middle.y,fancy(backNumbers (d, 0, radUse),f,tPeak)).y;
secondObj.left.x = secondTwist(firstObj.left.x,firstObj.left.y,fancy(backNumbers (d, 0, radUse),f,tPeak)).x;
secondObj.left.y = secondTwist(firstObj.left.x,firstObj.left.y,fancy(backNumbers (d, 0, radUse),f,tPeak)).y;
secondObj.right.x = secondTwist(firstObj.right.x,firstObj.right.y,fancy(backNumbers (d, 0, radUse),f,tPeak)).x;
secondObj.right.y = secondTwist(firstObj.right.x,firstObj.right.y,fancy(backNumbers (d, 0, radUse),f,tPeak)).y;


//striping away top ratio
secondObj.left.x = strip(topRatio,secondObj.left.x,secondObj.left.y).x;
secondObj.left.y = strip(topRatio,secondObj.left.x,secondObj.left.y).y;
secondObj.right.x = strip(topRatio,secondObj.right.x,secondObj.right.y).x;
secondObj.right.y = strip(topRatio,secondObj.right.x,secondObj.right.y).y;
//equaling out with middle length
secondObj.left.x = equalOut(secondObj.middle.x,secondObj.left.x).arr2;
secondObj.left.y = equalOut(secondObj.middle.y,secondObj.left.y).arr2;
secondObj.right.x = equalOut(secondObj.middle.x,secondObj.right.x).arr2;
secondObj.right.y = equalOut(secondObj.middle.y,secondObj.right.y).arr2;

//console.log(secondObj);


var lastObj = {
  topLeft: {
    x: [],
    y: []
  },
  topMiddle: {
    x: [],
    y: []
  },
  topRight: {
    x: [],
    y: []
  },
  bottomLeft: {
    x: [],
    y: []
  },
  bottomMiddle: {
    x: [],
    y: []
  },
  bottomRight: {
    x: [],
    y: []
  }
}

var toppedObj = makeTop(topLength,secondObj.right.x,secondObj.right.y,secondObj.left.x,secondObj.left.y,secondObj.middle.x,secondObj.middle.y);

lastObj.topLeft.x = toppedObj.left.x;
lastObj.topLeft.y = toppedObj.left.y;
lastObj.topRight.x = toppedObj.right.x;
lastObj.topRight.y = toppedObj.right.y;
lastObj.topMiddle.x = toppedObj.middle.x;
lastObj.topMiddle.y = toppedObj.middle.y;

var bottomObj = makeBottom(gap,secondObj.right.x,secondObj.right.y,secondObj.left.x,secondObj.left.y,secondObj.middle.x,secondObj.middle.y);

lastObj.bottomLeft.x = bottomObj.left.x;
lastObj.bottomLeft.y = bottomObj.left.y;
lastObj.bottomRight.x = bottomObj.right.x;
lastObj.bottomRight.y = bottomObj.right.y;
lastObj.bottomMiddle.x = bottomObj.middle.x;
lastObj.bottomMiddle.y = bottomObj.middle.y;




//console.log(lastObj)









var buffer = 'newbuffer' + '\n';
var text = '';
var putRight = .2;
var putLeft = .8;

  function plot(side,x1,y1,x2,y2){

     //1 = white
     //0 = black

     for(i=0;i<x1.length;i++){

        buffer += 'newbuffer' + '\n';
        text += 'addvalue ' + finalCount + ' ' + x1[i] + ' ' + y1[i] + '\n';
        text += 'addvalue ' + finalCount + ' ' + x2[i] + ' ' + y2[i] + '\n';
        if(side == 'r'){
          text += 'bcolor ' + putRight + ' ' + putRight + ' ' + putRight + ' ' + finalCount + '\n'
        }else{
          text += 'bcolor ' + putLeft + ' ' + putLeft + ' ' + putLeft + ' ' + finalCount + '\n'
        }


        finalCount++
     }
  }


// plot('r',secondObj.middle.x,secondObj.middle.y,secondObj.right.x,secondObj.right.y);
// plot('l',secondObj.middle.x,secondObj.middle.y,secondObj.left.x,secondObj.left.y);
plot('r',lastObj.topMiddle.x,lastObj.topMiddle.y,lastObj.topRight.x,lastObj.topRight.y);
plot('l',lastObj.topMiddle.x,lastObj.topMiddle.y,lastObj.topLeft.x,lastObj.topLeft.y);
plot('r',lastObj.bottomMiddle.x,lastObj.bottomMiddle.y,lastObj.bottomRight.x,lastObj.bottomRight.y);
plot('l',lastObj.bottomMiddle.x,lastObj.bottomMiddle.y,lastObj.bottomLeft.x,lastObj.bottomLeft.y);
var end = buffer + text + extra;
console.log(end)
