const net = new brain.recurrent.LSTM();

let trainingSet = [];

for(let day of data){
    trainingSet.push(day.Close);
}

const trainingData = []

let n = trainingSet.length;
while(n > 10){
    trainingData.push(trainingSet.slice(n-11, n-1));
    n -= 10;
}

net.train(trainingData, {log: true});

console.log(net.run(456.92))

