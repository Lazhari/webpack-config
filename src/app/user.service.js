const angular = require('angular');

(function () {
    angular.module('app')
        .factory('ContactStore', function ($http, $q) {
            const __HOST = 'https://mini-crm-api.herokuapp.com';
            const __URL = '/api/v1/contacts';
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