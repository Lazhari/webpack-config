const angular = require('angular');
const axios = require('axios');
require('./user.service');
angular.module('app')
    .controller('LabCtrl', function (ContactStore) {
        const vm = this;
        vm.contacts = [];

        ContactStore.getContacts()
            .then((resp) => {
                vm.contacts = resp.data.contacts;
            })
            .catch((err) => {
                console.log(err);
            });
    });