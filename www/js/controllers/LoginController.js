 app.controller('LoginController',function($state, $sanitize) {

    var self = this;
    self.join=function(type)
    {
        //sanitize the nickname
        var name = $sanitize(self.name)
        if(name)
        {
            $state.go(type, {name: name, type: type});
        }
    }

});