const angular = require('angular');
const {
    __HOST,
    __URL
} = require('./config');
(function () {
    angular.module('app')
        .factory('ContactStore', function ($http) {
            return {
                getContacts,
                getContact,
                editContact,
                deleteContact
            };

            function getContacts() {
                return $http.get(`${__HOST}${__URL}`);
            }

            function getContact(id) {
                return $http.get(`${__HOST}${__URL}/${id}`);
            }

            function editContact(id, contact) {
                return $http.put(`${__HOST}${__URL}/${id}`, contact);
            }

            function deleteContact(id) {
                return $http.delete(`${__HOST}${__URL}/${id}`);
            }
        });
})();