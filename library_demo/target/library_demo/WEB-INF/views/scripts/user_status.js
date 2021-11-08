var user_status = {};
const apiUrl = "http://localhost:8080/api/states"

user_status.showListRolesId = function (id) {
    $.ajax({
        url: apiUrl,
        dataType: "JSON",
        method: "GET",
        success: function (data) {
            data = data.sort(function (user_status1, user_status2) {
                return user_status2.id - user_status1.id;
            });
            $('#tbRole>tbody').empty();
            $.each(data, function (index, user_status) {
                let str = ``;
                if(id == user_status.id){
                    str = `<option value="${user_status.id}">${user_status.description}</option>`;
                }
                $('#tbRole>tbody').append(`
                    ${str}
                `);
            })

            $.each(data, function (index, user_status) {
                let str = `<option value="${user_status.id}">${user_status.description}</option>`;
                if(id == user_status.id){
                    str = ``;
                }
                $('#tbRole>tbody').append(`
                    ${str}
                `);
            })
        }
    });
}

user_status.showListRoles = function () {
    $.ajax({
        url: apiUrl,
        dataType: "JSON",
        method: "GET",
        success: function (data) {
            data = data.sort(function (user_status1, user_status2) {
                return user_status2.id - user_status1.id;
            });
            $('#tbRole>tbody').empty();

            $.each(data, function (index, user_status) {
                $('#tbRole>tbody').append(`
                    <option value="${user_status.id}">${user_status.description}</option>
                `);
            })
        }
    });
}

user_status.getDescription = function(id){
    $.ajax({
        url: `${apiUrl}/${id}`,
        dataType: "JSON",
        method: "GET",
        success: function (user_status) {
            $.each(data, function (index, user_status) {
                return user_status.description;
            })
        }
    });
}

user_status.init = function () {
    user_status.showRoles();
}
$(document).ready(function () {
    user_status.init();
});