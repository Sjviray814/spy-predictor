let currentClosing = 456.92;

let difference = currentClosing - collectedData[0].close;


function round(val){
    return Math.round(val*100)/100;
}

function getPredictions(){ // 1 day, 5 day, 10 day, 20 day, 30 day, 50 day
    let day1Open = round(collectedData[1].open + difference);
    let day1Close = round(collectedData[1].close + difference);
    let day1Percent = round(100*(day1Close - currentClosing)/currentClosing);

    let day5Open = round(collectedData[5].open + difference);
    let day5Close = round(collectedData[5].close + difference);
    let day5Percent = round(100*(day5Close - currentClosing)/currentClosing);

    let day10Open = round(collectedData[10].open + difference);
    let day10Close = round(collectedData[10].close + difference);
    let day10Percent = round(100*(day10Close - currentClosing)/currentClosing);

    let day20Open = round(collectedData[20].open + difference);
    let day20Close = round(collectedData[20].close + difference);
    let day20Percent = round(100*(day20Close - currentClosing)/currentClosing);

    let day30Open = round(collectedData[30].open + difference);
    let day30Close = round(collectedData[30].close + difference);
    let day30Percent = round(100*(day30Close - currentClosing)/currentClosing);

    let day50Open = round(collectedData[50].open + difference);
    let day50Close = round(collectedData[50].close + difference);
    let day50Percent = round(100*(day50Close - currentClosing)/currentClosing);




    return{
        "day1Open": day1Open,
        "day1Close": day1Close,
        "day1Percent": day1Percent,
        "day5Open": day5Open,
        "day5Close": day5Close,
        "day5Percent": day5Percent,
        "day10Open": day10Open,
        "day10Close": day10Close,
        "day10Percent": day10Percent,
        "day20Open": day20Open,
        "day20Close": day20Close,
        "day20Percent": day20Percent,
        "day30Open": day30Open,
        "day30Close": day30Close,
        "day30Percent": day30Percent,
        "day50Open": day50Open,
        "day50Close": day50Close,
        "day50Percent": day50Percent
    }
}

function displayPredictions(){
    let predictions = getPredictions();

    document.getElementById('day1OpenValue').innerHTML = "$" + predictions.day1Open.toString();
    document.getElementById('day1CloseValue').innerHTML = "$" + predictions.day1Close.toString();
    document.getElementById('day1PercentValue').innerHTML = "+" + predictions.day1Percent.toString() + "%";
    
    document.getElementById('day5OpenValue').innerHTML = "$" + predictions.day5Open.toString();
    document.getElementById('day5CloseValue').innerHTML = "$" + predictions.day5Close.toString();
    document.getElementById('day5PercentValue').innerHTML = "+" + predictions.day5Percent.toString() + "%";
    
    document.getElementById('day10OpenValue').innerHTML = "$" + predictions.day10Open.toString();
    document.getElementById('day10CloseValue').innerHTML = "$" + predictions.day10Close.toString();
    document.getElementById('day10PercentValue').innerHTML = "+" + predictions.day10Percent.toString() + "%";
    
    document.getElementById('day20OpenValue').innerHTML = "$" + predictions.day20Open.toString();
    document.getElementById('day20CloseValue').innerHTML = "$" + predictions.day20Close.toString();
    document.getElementById('day20PercentValue').innerHTML = "+" + predictions.day20Percent.toString() + "%";
    
    document.getElementById('day30OpenValue').innerHTML = "$" + predictions.day30Open.toString();
    document.getElementById('day30CloseValue').innerHTML = "$" + predictions.day30Close.toString();
    document.getElementById('day30PercentValue').innerHTML = "+" + predictions.day30Percent.toString() + "%";
    
    document.getElementById('day50OpenValue').innerHTML = "$" + predictions.day50Open.toString();
    document.getElementById('day50CloseValue').innerHTML = "$" + predictions.day50Close.toString();
    document.getElementById('day50PercentValue').innerHTML = "+" + predictions.day50Percent.toString() + "%";
}

displayPredictions();

// console.log(collectedData)
// console.log(getPredictions());