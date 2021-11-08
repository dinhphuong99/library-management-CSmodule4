var position = {};
const apiUrl = "http://localhost:8080/api/positions"

position.showListRolesId = function (id) {
    $.ajax({
        url: apiUrl,
        dataType: "JSON",
        method: "GET",
        success: function (data) {
            data = data.sort(function (position1, position2) {
                return position2.id - position1.id;
            });
            $('#tbRole>tbody').empty();
            $.each(data, function (index, position) {
                let str = ``;
                if(id == position.id){
                    str = `<option value="${position.id}">${position.description}</option>`;
                }
                $('#tbRole>tbody').append(`
                    ${str}
                `);
            })

            $.each(data, function (index, position) {
                let str = `<option value="${position.id}">${position.description}</option>`;
                if(id == position.id){
                    str = ``;
                }
                $('#tbRole>tbody').append(`
                    ${str}
                `);
            })
        }
    });
}

position.showListRoles = function () {
    $.ajax({
        url: apiUrl,
        dataType: "JSON",
        method: "GET",
        success: function (data) {
            data = data.sort(function (position1, position2) {
                return position2.id - position1.id;
            });
            $('#tbRole>tbody').empty();

            $.each(data, function (index, position) {
                $('#tbRole>tbody').append(`
                    <option value="${position.id}">${position.description}</option>
                `);
            })
        }
    });
}

position.getDescription = function(id){
    $.ajax({
        url: `${apiUrl}/${id}`,
        dataType: "JSON",
        method: "GET",
        success: function (position) {
            $.each(data, function (index, position) {
                return position.description;
            })
        }
    });
}

position.init = function () {
    position.showRoles();
}
$(document).ready(function () {
    position.init();
});