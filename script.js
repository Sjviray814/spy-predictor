let lowest = Math.min(data[0].Close, data[0].Open);
let highest = Math.max(data[0].Close, data[0].Open);
for(let day of data){
    if(day.Open > highest) highest = day.Open;
    if(day.Open < lowest) lowest = day.Open;
    if(day.Close > highest) highest = day.Close;
    if(day.Close < lowest) lowest = day.Close;
}



function scaleDown(step){ // Min value is 42
    return{
        Open: (step.Open-lowest)/(highest-lowest),
        Close: (step.Close-lowest)/(highest-lowest)
    }
}


function scaleUp(step){ // Min value is 42
    return{
        Open: step.Open*(highest-lowest) + lowest,
        Close: step.Close*(highest-lowest) + lowest,
    }
}

// function scaleDown(step){ // Min value is 42
//     return{
//         Open: step.Open/500,
//         Close: step.Close/500
//     }
// }


// function scaleUp(step){ // Min value is 42
//     return{
//         Open: step.Open*500,
//         Close: step.Close*500
//     }
// }

const scaledData = data.map(scaleDown);

let trainingData = []

let length = 3600;

let n = scaledData.length;
while(n > length){
    trainingData.push(scaledData.slice(n-1-length, n-1));
    n -= length;
}

// let n = 0;
// while(n < scaledData.length - length){
//     trainingData.push(scaledData.slice(n, n + length));
//     n += length;
// }

trainingData = trainingData.reverse()

const net = new brain.recurrent.LSTMTimeStep({
    inputSize: 2,
    hiddenLayers: [8,8],
    outputSize: 2
})

let reversed = trainingData.reverse();
// for(let i = 0; i < reversed.length; i++){
//     reversed[i] = reversed[i].reverse();
// }


net.train(reversed, {
    learningRate: 0.005, 
    errorThresh: 0.03,
    log: true
    // log: (stats) => console.log(stats)
})

let test = [];

for(let i = 0; i < data.length; i++){
    if(i >= data.length-5){
        day = data[i];
        test.push({
            "Open": day.Open,
            "Close": day.Close
        })
    }
}

let test2 = [ {
    "Open": 211.240005,
    "Close": 212.210007
  },
  {
    "Open": 212.440002,
    "Close": 212.440002
  },
  {
    "Open": 212.240005,
    "Close": 213.100006
  },]

console.table(net.forecast(test,
    104).map(scaleUp).reverse())


    // console.log(trainingData[trainingData.length-1])

// console.log(trainingData[0])
// console.log(net.forecast(trainingData[0],
//     50).map(scaleUp))