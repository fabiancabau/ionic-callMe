 app.controller('NurseController',function($scope, $stateParams, $ionicPopup, $timeout, socket) {

  var self = this;

  self.name = $stateParams.name;
  self.patients = [];
  self.need_help = null;

  console.log(self.name + ' - Nurse');

  self.showAlert = function(name) {
   var alertPopup = $ionicPopup.alert({
     title: 'Help!',
     template: name + ' needs help!'
   });
   alertPopup.then(function(res) {
     console.log('closing popup');
   });
  };

  socket.on('connect',function(){
    self.connected = true;
    //Add user called nickname
    console.log('socket connected');
    socket.emit('add user', {name: self.name, type: 'nurse'});
  });

  socket.on('new patient', function (data) {
    console.log('new patient');
    self.patients.push(data);

    console.log(self.patients);
  });

  socket.on('patients', function (data) {
    console.log(data);
    self.patients = data;
  });

  socket.on('need help', function (data){
    self.showAlert(data.name);
  });

});