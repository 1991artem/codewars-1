
    function numberOfPairs(gloves){
    var pairs = 0;
    var clone = gloves.slice (0);
    clone.forEach((element, index, array) => {
        if (clone.indexOf(element, index+1) != -1){
            clone.splice(clone.indexOf(element, index+1), 1);
            pairs ++;
        }       
    });
    return pairs;
    }

    alert ( numberOfPairs (["Red","Aqua","Fuchsia","Lime","Olive","Red","Maroon","Gray","Yellow","Yellow","Yellow","Blue","Blue","Green","Navy"]) );