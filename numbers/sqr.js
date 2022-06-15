
    function getParticipants(handshakes){
        if (handshakes == 1){
            return 2;
        } 
        else if (handshakes == 0){
            return 1;
        }
        else {
        return Math.ceil( (1+Math.sqrt(1+8*handshakes))/2 );
        }   
  }
alert( getParticipants (3) );