var user = {};
const apiUrl = "http://localhost:8080/api/users"
const apiUrlRole = "http://localhost:8080/api/roles"
const apiUrlPosition = "http://localhost:8080/api/positions"
const apiUrlStates = "http://localhost:8080/api/states"

user.showUser = function () {
    $.ajax({
        url: apiUrl,
        dataType: "JSON",
        method: "GET",
        success: function (data) {
            data = data.sort(function (user1, user2) {
                return user2.id - user1.id;
            });
            // id, cardIssueDate, dob, expirationDate,
            //     fullName, password, phone, position,
            //     role, status, userCode, userName
            $('#tbUser>tbody').empty();
            $.each(data, function (index, user) {
                $('#tbUser>tbody').append(`
                    <tr>
                        <td style = "display: none">${user.id}</td>
                        <td>${user.userCode}</td>
                        <td>${user.fullName}</td>
                        <td>${moment(user.dob).format("YYYY-MM-DD")}</td>
                        <td>${moment(user.cardIssueDate).format("YYYY-MM-DD")}</td>
                        <td>${moment(user.expirationDate).format("YYYY-MM-DD")}</td>
                        <td>${user.phone}</td>
                        <td>${user.username}</td>
                        <td>${user.position}</td>
                        <td>${user.role}</td>
                        <td>${user.status}</td>
                        <td>
                          <button type="button" data-toggle="modal" data-target="#updateModal" class="btn btn-outline-primary edit"
                          data-id="${item.id}">
                              Edit
                          </button>
                        </td>
                        <td>
                          <button type="button" data-toggle="modal" class="btn btn-outline-danger"
                          data-id="${item.id}">
                              Delete
                          </button>
                        </td>
                    </tr>
                `);
            })
            $('#tbUser').DataTable();
        }
    });
}

user.openModal = function () {
    $('#addEditModal').modal('show');
    user.resetForm();
}

user.save = function () {
    if ($('#addEditForm').valid()) {
        let id = Number($('#userId').val());
        if(id == 0){
            user.createUser();
        }
        else{
            user.modifyUser(id);
        }
    }
}

user.createUser = function(){
    let createObj = {
        "fullname": $('#fullname').val(),
        "dob": $('#dob').val(),
        "email": $('#email').val(),
        "department": $('#department').val(),
        "status": $('#status').is(":checked"),
        "avatar": "https://cdn.fakercloud.com/avatars/alan_zhang__128.jpg",//$('#avatar').val(),
        "salary": Number($('#salary').val())
    };
    $.ajax({
        url: apiUrl,
        method: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(createObj),
        success: function (result) {
            if (result) {
                employee.showEmployee();
                $('#addEditModal').modal('hide');
                $.notify("Employee has been created successfully!", "success");
            }
        }
    })
}

user.modifyEmployee = function(id){
    let modifyObj = {
        "id": id,
        "fullname": $('#fullname').val(),
        "dob": $('#dob').val(),
        "email": $('#email').val(),
        "department": $('#department').val(),
        "status": $('#status').is(":checked"),
        "avatar": $('#avatar').val(),
        "salary": Number($('#salary').val())
    };
    $.ajax({
        url: `${apiUrl}/${id}`,
        method: "PUT",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify(modifyObj),
        success: function (result) {
            if (result) {
                employee.showEmployee();
                $('#addEditModal').modal('hide');
                $.notify("Employee has been modified successfully!", "success");
            }
        }
    })
}

user.resetForm = function () {
    $('#addEditForm').validate().resetForm();
    $('#fullname').val('');
    $('#dob').val('');
    $('#email').val('');
    $('#department').val('');
    $('#salary').val('');
    $('#avatar').val('');
    $('#status').prop('checked', false);
    $('#addEditModal').find('.modal-title').text('Create new employee');
}

user.remove = function (id) {
    bootbox.confirm({
        title: "Remove employee?",
        message: "Do you want to remove the employee now? This cannot be undone.",
        buttons: {
            cancel: {
                label: '<i class="fa fa-times"></i> Cancel'
            },
            confirm: {
                label: '<i class="fa fa-check"></i> Confirm'
            }
        },
        callback: function (confirmed) {
            if (confirmed) {
                $.ajax({
                    url: `${apiUrl}/${id}`,
                    method: "DELETE",
                    success: function (result) {
                        if (result) {
                            employee.showEmployee();
                            $.notify("Employee has been removed successfully", "success");
                        }
                        else {
                            $.notify("Something went wrong, please contact administrator", "error");
                        }
                    }
                })
            }
        }
    });
}

user.get = function (id) {
    $.ajax({
        url: `${apiUrl}/${id}`,
        dataType: "JSON",
        method: "GET",
        success: function (emp) {
            $('#addEditModal').modal('show');
            $('#addEditModal').find('.modal-title').text('Edit employee');
            $('#fullname').val(emp.fullname);
            $('#dob').val(emp.dob);
            $('#email').val(emp.email);
            $('#department').val(emp.department);
            $('#salary').val(emp.salary);
            $('#avatar').val(emp.avatar);
            $('#img-avatar').prop('src', emp.avatar);
            $('#status').prop('checked', emp.status);
            $('#employeeId').val(emp.id);
        }
    });
}

user.init = function () {
    user.showEmployee();
}
$(document).ready(function () {
    user.init();
});