(function () {
    'use strict';

    angular
        .module('modulapi')
        .controller('Controller', Controller);


    Controller.$inject = ['Service'];
    function Controller(Service) {
        var vm = this;
        vm.katt = katt;
        vm.getAll = getAll;
        vm.new = false;
        vm.save = save;
        vm.remove = remove;
        vm.update = update;
        vm.check = check;
        vm.aeq_check=aeq_check;
        vm.in = "Helytelen adat";
        vm.aeq= "Helytelen aeq";

        function getAll() {
            var response = Service.getAll();
            response.then(function (resp) {
                vm.list = resp.data;
            });
        }

        function katt() {
            var response = Service.get(vm.id);
            response.then(function (resp) {
                vm.modul = resp.data;
            });
        }

        function save() {
            Service.post(vm.data).then(function (resp) {
                vm.data = {};
                vm.new = false;
            });
        }
        function update() {
            Service.put(vm.edit).then(function (resp) {
                vm.edit = '';
            });
        }

        function remove(id, index) {
            Service.erase(id).then(function (resp) {
                vm.list.splice(index, 1);
            });

        }

        function check(input) {
            var res = input.charCodeAt(0);
            if ((input.length == 7 && isFinite(input)) && res == 51) {
                vm.in = "Helyes adat";
            }
            else {
                vm.in = "Helytelen adat";
            }
        }


        function aeq_check(input) {
            if (isFinite(input) && input.length>0) {
                vm.aeq = "Helyes aeq";
            }
            else {
                vm.aeq = "Helytelen aeq";
            }
        }
        activate();

        ////////////////

        function activate() { }
    }
})();