var role = {};
const apiUrl = "http://localhost:8080/api/roles"

role.showListRolesId = function (id) {
    $.ajax({
        url: apiUrl,
        dataType: "JSON",
        method: "GET",
        success: function (data) {
            data = data.sort(function (role1, role2) {
                return role2.id - role1.id;
            });
            $('#tbRole>tbody').empty();
            $.each(data, function (index, role) {
                let str = ``;
                if(id == role.id){
                    str = `<option value="${role.id}">${role.description}</option>`;
                }
                $('#tbRole>tbody').append(`
                    ${str}
                `);
            })

            $.each(data, function (index, role) {
                let str = `<option value="${role.id}">${role.description}</option>`;
                if(id == role.id){
                     str = ``;
                }
                $('#tbRole>tbody').append(`
                    ${str}
                `);
            })
        }
    });
}

role.showListRoles = function () {
    $.ajax({
        url: apiUrl,
        dataType: "JSON",
        method: "GET",
        success: function (data) {
            data = data.sort(function (role1, role2) {
                return role2.id - role1.id;
            });
            $('#tbRole>tbody').empty();

            $.each(data, function (index, role) {
                $('#tbRole>tbody').append(`
                    <option value="${role.id}">${role.description}</option>
                `);
            })
        }
    });
}

role.getDescription = function(id){
    $.ajax({
        url: `${apiUrl}/${id}`,
        dataType: "JSON",
        method: "GET",
        success: function (role) {
            $.each(data, function (index, role) {
                return role.description;
            })
        }
    });
}

role.init = function () {
    role.showRoles();
}
$(document).ready(function () {
    role.init();
});