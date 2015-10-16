app.factory('socket',function(socketFactory){
        //Create socket and connect to http://chat.socket.io 
         var myIoSocket = io.connect('http://104.131.60.142:3000');
         // var myIoSocket = io.connect('http://localhost:3000');

          mySocket = socketFactory({
            ioSocket: myIoSocket
          });

        return mySocket;
    })