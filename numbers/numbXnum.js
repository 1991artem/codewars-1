
    function explode(s){
        var insert = [];
        var mass = [];
        insert = s.split ("");
        insert.map(function(element) {
        for (var i = 0; i<element; i++){
            mass.push (element);
        }      
        });
        return mass.join("");
    }
alert(explode("312"));
