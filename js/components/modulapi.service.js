(function() {
'use strict';

    angular
        .module('modulapi')
        .factory('Service', Service);

    Service.$inject = ['$http'];
    function Service($http) {
        var service = {
            get:get,
            getAll:All,
            post:post,
            put:put,
            erase:erase
        };
        
        return service;

        ////////////////
        function get(id) { 
            var request={
                method:"GET",
                url:"http://3.228.180.15/modulapi/modul/"+id
            };
            return $http(request);

        }

        function All()
        {
            var request={
                method:"GET",
                url:"http://3.228.180.15/modulapi/mods"
            };
            return $http(request);
        }

        function post(data) {
            var request={
                method:"POST",
                url:"http://3.228.180.15/modulapi/modul/"+data.id,
                data:data,
                headers: {'Content-Type':'application/json'}
            };
            return $http(request);
         }

        function put(data) {
              var request={
                method:"PUT",
                url:"http://3.228.180.15/modulapi/modul/"+data.id,
                data:data,
                headers: {'Content-Type':'application/json'}
            };
            return $http(request);
         }
        function erase(id) {
              var request={
                method:"DELETE",
                url:"http://3.228.180.15/modulapi/modul/"+id
            };
            return $http(request);
         }
    }
})();