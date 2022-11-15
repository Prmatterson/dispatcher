
//  Modal Submit Buttons Functions
$(document).ready(function() {
  const tableToBeSorted = $("#time-table-dict").dataTable({"iDisplayLength": -1});
  // tableToBeSorted.fnSort( [ [0,'desc'] ] );

  AddRepairOrderOnClickEventSetup();

  $("#edit-repair-order-submit-button").click(function() {
    console.log("Submitting  #edit-repair-order-submit-button");
    editWorkOrder = $("#edit-work-order").val();
    $.ajax({
      type: "POST",
      url: "edit_repair_order",
      data: {
        editWorkOrder: editWorkOrder,
      },
      dataType: "json",
      success: function(data) {
        console.log("Success!: ", data);
        $("#edit-repair-order-modal").modal("hide");
      },
      error: function(xhr, status, error) {
        // There's been an error, do something with it!
        // Only use status and errorThrown.
        // Chances are request will not have anything in it.
        console.log("Error objects: ", xhr, status, error);
        const errorMessage = xhr.status + ": " + xhr.responseText;
        console.log(errorMessage);
        $("#edit-repair-order-modal-error").html(errorMessage);
      },
    });
  });

  $("#delete-repair-order-submit-button").click(function() {
    console.log("Submitting  #delete-repair-order-submit-button");
    deleteWorkOrder = $("#delete-work-order").val();
    $.ajax({
      type: "POST",
      url: "delete_repair_order",
      data: {
        deleteWorkOrder: deleteWorkOrder,
      },
      dataType: "json",
      success: function(data) {
        console.log("Success!: ", data);
        $("#delete-repair-order-modal").modal("hide");
      },
      error: function(xhr, status, error) {
        // There's been an error, do something with it!
        // Only use status and errorThrown.
        // Chances are request will not have anything in it.
        console.log("Error objects: ", xhr, status, error);
        const errorMessage = xhr.status + ": " + xhr.responseText;
        console.log(errorMessage);
        $("#delete-repair-order-modal-error").html(errorMessage);
      },
    });
  });

  $("#add-job-to-repair-order-submit-button").click(function() {
    console.log("Submitting  #add-job-repair-order-submit-button");
    addJobWorkOrder = $("#add-job-to-work-order").val();
    addJobDuration = $("#add-job-duration").val();
    addJobJobDescription = $("#add-job-job-description").val();
    $.ajax({
      type: "POST",
      url: "add_job_repair_order",
      data: {
        addJobWorkOrder: addJobWorkOrder,
        addJobDuration: addJobDuration,
        addJobJobDescription: addJobJobDescription,
      },
      dataType: "json",
      success: function(data) {
        console.log("Success!: ", data);
        $("#add-job-to-repair-order-modal").modal("hide");
      },
      error: function(xhr, status, error) {
        // There's been an error, do something with it!
        // Only use status and errorThrown.
        // Chances are request will not have anything in it.
        console.log("Error objects: ", xhr, status, error);
        const errorMessage = xhr.status + ": " + xhr.responseText;
        console.log(errorMessage);
        $("#add-job-to-repair-order-modal-error").html(errorMessage);
      },
    });
  });

  $("#add-time-to-repair-order-submit-button").click(function() {
    console.log("Submitting  #add-time-to-repair-order-submit-button");
    addTimeToWorkOrder = $("#add-time-to-work-order").val();
    addTimeDuration = $("#add-time-duration").val();
    addTimeRoNote = $("#add-time-ro-note").val();
    $.ajax({
      type: "POST",
      url: "add_time_repair_order",
      data: {
        addTimeToWorkOrder: addTimeToWorkOrder,
        addTimeDuration: addTimeDuration,
        addTimeRoNote: addTimeRoNote,
      },
      dataType: "json",
      success: function(data) {
        console.log("Success!: ", data);
        $("#add-time-to-repair-order-modal").modal("hide");
      },
      error: function(xhr, status, error) {
        // There's been an error, do something with it!
        // Only use status and errorThrown.
        // Chances are request will not have anything in it.
        console.log("Error objects: ", xhr, status, error);
        const errorMessage = xhr.status + ": " + xhr.responseText;
        console.log(errorMessage);
        $("#add-time-to-repair-order-modal-error").html(errorMessage);
      },
    });
  });

  $("#change-promise-time-of-repair-order-submit-button").click(function() {
    console.log("Submitting  #change-promise-time-of-repair-order-submit-button");
    changeTimeWorkOrder = $("#change-promise-work-order").val();
    changePromiseTime = $("#change-promise-time").val();
    $.ajax({
      type: "POST",
      url: "change_promise_time_repair_order",
      data: {
        changeTimeWorkOrder: changeTimeWorkOrder,
        changePromiseTime: changePromiseTime,
      },
      dataType: "json",
      success: function(data) {
        console.log("Success!: ", data);
        $("#change-promise-time-of-repair-order-modal").modal("hide");
      },
      error: function(xhr, status, error) {
        console.log("Error objects: ", xhr, status, error);
        const errorMessage = xhr.status + ": " + xhr.responseText;
        console.log(errorMessage);
        $("#change-promise-time-of-repair-order-modal-error").html(errorMessage);
      },
    });
  });

  $("#add-tech-submit-button").click(function() {
    console.log("Submitting  #add-tech-submit-button");
    addTech = $("#add-tech").val();
    $.ajax({
      type: "POST",
      url: "add-tech",
      data: {
        addTech: addTech,
      },
      dataType: "json",
      success: function(data) {
        console.log("Success!: ", data);
        techNumbers.push("test");
        timeTableDictHeader.push("test");
        $("#add-tech-modal").modal("hide");
      },
      error: function(xhr, status, error) {
        console.log("Error objects: ", xhr, status, error);
        const errorMessage = xhr.status + ": " + xhr.responseText;
        console.log(errorMessage);
        $("#add-tech-modal-error").html(errorMessage);
      },
    });
  });
});

