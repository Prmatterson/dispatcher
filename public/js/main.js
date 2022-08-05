// Functions to Clear Modal Form Fields on Modal Exit
$('#add-repair-order-modal').on('hidden.bs.modal', function (e) {
    $(this).find('#add-ro')[0].reset();
});

$('#edit-repair-order-modal').on('hidden.bs.modal', function (e) {
    $(this).find('#edit-ro')[0].reset();
    $("#edit-repair-order-modal-error").html('');
});

$('#delete-repair-order-modal').on('hidden.bs.modal', function (e) {
    $(this).find('#delete-ro')[0].reset();
});

$('#add-job-to-repair-order-modal').on('hidden.bs.modal', function (e) {
    $(this).find('#add-job')[0].reset();
});

$('#add-time-to-repair-order-modal').on('hidden.bs.modal', function (e) {
    $(this).find('#add-time')[0].reset();
});

$('#change-promise-time-of-repair-order-modal').on('hidden.bs.modal', function (e) {
    $(this).find('#change-time')[0].reset();
});

//  Modal Submit Buttons Functions
$(document).ready(function () {
    $("#add-repair-order-submit-button").click(function () {
        console.log("Submitting  #add-repair-order-submit-button");
        workOrder = $("#work-order").val();
        tech = $("#tech").val();
        promiseTime = $("#promise-time").val();
        duration = $("#duration").val();
        jobDescription = $("#job-description").val();
        roNote = $("#ro-note").val();
        $.ajax({
            type: 'POST',
            url: '/add_repair_order',
            data: {
                workOrder: workOrder,
                tech: tech,
                promiseTime: promiseTime,
                duration: duration,
                jobDescription: jobDescription,
                roNote: roNote,
            },
            dataType: 'json',
            success: function (data) {
                console.log("Success!: ", data);
                $('#add-repair-order-modal').modal('hide');
            },
            error: function (xhr, status, error) {
                // There's been an error, do something with it!
                // Only use status and errorThrown.
                // Chances are request will not have anything in it.
                console.log("Error objects: ", xhr, status, error);
                let errorMessage = xhr.status + ': ' + xhr.responseText
                console.log(errorMessage);
                $("#add-repair-order-modal-error").html(errorMessage);
            }
        });
    });
});

$(document).ready(function () {
    $("#edit-repair-order-submit-button").click(function () {
        console.log("Submitting  #edit-repair-order-submit-button");
        editWorkOrder = $("#edit-work-order").val();
        $.ajax({
            type: 'POST',
            url: '/edit_repair_order',
            data: {
                editWorkOrder: editWorkOrder,
            },
            dataType: 'json',
            success: function (data) {
                console.log("Success!: ", data);
                $('#edit-repair-order-modal').modal('hide');
            },
            error: function (xhr, status, error) {
                // There's been an error, do something with it!
                // Only use status and errorThrown.
                // Chances are request will not have anything in it.
                console.log("Error objects: ", xhr, status, error);
                let errorMessage = xhr.status + ': ' + xhr.responseText
                console.log(errorMessage);
                $("#edit-repair-order-modal-error").html(errorMessage);
            }
        });
    });
});

$(document).ready(function () {
    $("#delete-repair-order-submit-button").click(function () {
        console.log("Submitting  #delete-repair-order-submit-button");
        deleteWorkOrder = $("#delete-work-order").val();
        $.ajax({
            type: 'POST',
            url: '/delete_repair_order',
            data: {
                deleteWorkOrder: deleteWorkOrder,
            },
            dataType: 'json',
            success: function (data) {
                console.log("Success!: ", data);
                $('#delete-repair-order-modal').modal('hide');
            },
            error: function (xhr, status, error) {
                // There's been an error, do something with it!
                // Only use status and errorThrown.
                // Chances are request will not have anything in it.
                console.log("Error objects: ", xhr, status, error);
                let errorMessage = xhr.status + ': ' + xhr.responseText
                console.log(errorMessage);
                $("#delete-repair-order-modal-error").html(errorMessage);
            }
        });
    });
});

$(document).ready(function () {
    $("#add-job-to-repair-order-submit-button").click(function () {
        console.log("Submitting  #add-job-repair-order-submit-button");
        addJobWorkOrder = $("#add-job-to-work-order").val();
        addJobDuration = $("#add-job-duration").val();
        addJobJobDescription = $("#add-job-job-description").val();
        $.ajax({
            type: 'POST',
            url: '/add_job_repair_order',
            data: {
                addJobWorkOrder: addJobWorkOrder,
                addJobDuration: addJobDuration,
                addJobJobDescription: addJobJobDescription,
            },
            dataType: 'json',
            success: function (data) {
                console.log("Success!: ", data);
                $('#add-job-to-repair-order-modal').modal('hide');
            },
            error: function (xhr, status, error) {
                // There's been an error, do something with it!
                // Only use status and errorThrown.
                // Chances are request will not have anything in it.
                console.log("Error objects: ", xhr, status, error);
                let errorMessage = xhr.status + ': ' + xhr.responseText
                console.log(errorMessage);
                $("#add-job-to-repair-order-modal-error").html(errorMessage);
            }
        });
    });
});

$(document).ready(function () {
    $("#add-time-to-repair-order-submit-button").click(function () {
        console.log("Submitting  #add-time-to-repair-order-submit-button");
        addTimeToWorkOrder = $("#add-time-to-work-order").val();
        addTimeDuration = $("#add-time-duration").val();
        addTimeRoNote = $("#add-time-ro-note").val();
        $.ajax({
            type: 'POST',
            url: '/add_time_repair_order',
            data: {
                addTimeToWorkOrder: addTimeToWorkOrder,
                addTimeDuration: addTimeDuration,
                addTimeRoNote: addTimeRoNote,
            },
            dataType: 'json',
            success: function (data) {
                console.log("Success!: ", data);
                $('#add-time-to-repair-order-modal').modal('hide');
            },
            error: function (xhr, status, error) {
                // There's been an error, do something with it!
                // Only use status and errorThrown.
                // Chances are request will not have anything in it.
                console.log("Error objects: ", xhr, status, error);
                let errorMessage = xhr.status + ': ' + xhr.responseText
                console.log(errorMessage);
                $("#add-time-to-repair-order-modal-error").html(errorMessage);
            }
        });
    });
});

$(document).ready(function () {
    $("#change-promise-time-of-repair-order-submit-button").click(function () {
        console.log("Submitting  #change-promise-time-of-repair-order-submit-button");
        changeTimeWorkOrder = $("#change-promise-work-order").val();
        changePromiseTime = $("#change-promise-time").val();
        $.ajax({
            type: 'POST',
            url: '/change_promise_time_repair_order',
            data: {
                changeTimeWorkOrder: changeTimeWorkOrder,
                changePromiseTime: changePromiseTime,
            },
            dataType: 'json',
            success: function (data) {
                console.log("Success!: ", data);
                $('#change-promise-time-of-repair-order-modal').modal('hide');
            },
            error: function (xhr, status, error) {
                // There's been an error, do something with it!
                // Only use status and errorThrown.
                // Chances are request will not have anything in it.
                console.log("Error objects: ", xhr, status, error);
                let errorMessage = xhr.status + ': ' + xhr.responseText
                console.log(errorMessage);
                $("#change-promise-time-of-repair-order-modal-error").html(errorMessage);
            }
        });
    });
});