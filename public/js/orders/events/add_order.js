function AddRepairOrderOnClickEventSetup(params) {
    $("#add-repair-order-submit-button").click(function () {
        console.log("Submitting  #add-repair-order-submit-button");
        workOrder = $("#work-order").val();
        tech = $("#tech").val();
        promiseTime = $("#promise-time").val();
        duration = $("#duration").val();
        jobDescription = $("#job-description").val();
        roNote = $("#ro-note").val();
        $.ajax({
            type: "POST",
            url: "add_repair_order",
            data: {
                workOrder: workOrder,
                tech: tech,
                promiseTime: promiseTime,
                duration: duration,
                jobDescription: jobDescription,
                roNote: roNote,
            },
            dataType: "json",
            success: function (data) {
                console.log("Success!: ", data);
                // $('#add-repair-order-modal').modal('hide');
                location.reload();
            },
            error: function (xhr, status, error) {
                // There's been an error, do something with it!
                // Only use status and errorThrown.
                // Chances are request will not have anything in it.
                console.log("Error objects: ", xhr, status, error);
                const errorMessage = xhr.status + ": " + xhr.responseText;
                console.log(errorMessage);
                $("#add-repair-order-modal-error").html(errorMessage);
            },
        });
    });
}
