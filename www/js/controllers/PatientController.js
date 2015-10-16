 app.controller('PatientController',function($scope, $stateParams, socket) {

  var self = this;

  self.name = $stateParams.name;

  console.log(self.name + ' - Patient');

  self.callNurses = function() {
  	socket.emit('call nurses', {name: self.name});
  }

  socket.on('connect',function(){
  //Add user called nickname
    console.log('socket connected');
    socket.emit('add user', {name: self.name, type: 'patient'});
  });

});