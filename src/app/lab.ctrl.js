const angular = require('angular');
require('./user.service');
const {
    THEME
} = require('./config');
angular.module('app')
    .controller('LabCtrl', function (ContactStore) {
        const vm = this;
        vm.contacts = [];
        const {
            BG_COLOR,
            COLOR
        } = THEME;
        vm.bgColor = BG_COLOR;
        vm.color = COLOR;

        ContactStore.getContacts()
            .then((resp) => {
                vm.contacts = resp.data.contacts;
            })
            .catch((err) => {
                console.error(err);
            });
    });