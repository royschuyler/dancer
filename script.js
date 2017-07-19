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
var extra = 'blinewidth 2 all' + '\n' + 'drawframe no' + '\n' + 'asetticks x no' + '\n' + 'asetticks y no' + '\n' + 'asetminticks x no' + '\n' + 'asetminticks y no' + '\n' +'framewidth 0' + '\n' + 'bstyle yes no no no no no no yes no no 0' + '\n' + 'margins 0 0 0 0' + '\n' + 'range x -1.2 1.2' + '\n' + 'range y -1.2 1.2';


var d = 1000;
var L = 1;
var put = .1;
var firstT = radians(10);
var tPeak = radians(30);
var f = 1;

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

//console.log(baseObj)

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
//console.log(firstObj)
// var look = backNumbers (d, 0, radUse);
// var tester = fancy (backNumbers (d, 0, radUse),f,tPeak);
//console.log(tester)

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

secondObj.middle.x = secondTwist(firstObj.middle.x,firstObj.middle.y,fancy(backNumbers (d, 0, radUse),f,tPeak)).x;
secondObj.middle.y = secondTwist(firstObj.middle.x,firstObj.middle.y,fancy(backNumbers (d, 0, radUse),f,tPeak)).y;
secondObj.left.x = secondTwist(firstObj.left.x,firstObj.left.y,fancy(backNumbers (d, 0, radUse),f,tPeak)).x;
secondObj.left.y = secondTwist(firstObj.left.x,firstObj.left.y,fancy(backNumbers (d, 0, radUse),f,tPeak)).y;
secondObj.right.x = secondTwist(firstObj.right.x,firstObj.right.y,fancy(backNumbers (d, 0, radUse),f,tPeak)).x;
secondObj.right.y = secondTwist(firstObj.right.x,firstObj.right.y,fancy(backNumbers (d, 0, radUse),f,tPeak)).y;
console.log(secondObj);


