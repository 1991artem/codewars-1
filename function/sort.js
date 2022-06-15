
function recycle(array) {
    let glass = [];
    let organic = [];
    let paper = [];
    let plastic = [];
    let arraySort = [paper, glass, organic,  plastic];
    array.forEach(element => {
        switch(element.material){
        case "glass": {glass.push (element.type);
                break;
        }
        case "organic": {organic.push (element.type);
                break;
        }
        case "paper": {paper.push (element.type);
                break;
        }
        case "plastic": {plastic.push (element.type);
                break;
        }
    }
        switch(element.secondMaterial){
            case "glass": {glass.push (element.type);
                break;
        }
        case "organic": {organic.push (element.type);
                break;
        }
        case "paper": {paper.push (element.type);
                break;
        }
        case "plastic": {plastic.push (element.type);
                break;
        }
        }
    });
  
    return arraySort;
}

console.log (recycle([
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]));