'use strict';
$(document).ready(function() {

  var template = $('#task-items-container').html();
  var taskManager = new TaskManager();

  retrieveObjectData(taskManager);

  runRenderView();

  $('body').on('submit', '#task-form', function(event) {
    event.preventDefault();
    var text = $('#task-content').val();
    $('#task-content').val('');
    taskManager.addTask(text);
    storeObjectData(taskManager);
    runRenderView();
  })


  $('body').on('change', ':checkbox', function(event) {
    var eventID = event.currentTarget.name;
    taskManager.markAsComplete(taskManager.pendingTasks[eventID]);
    storeObjectData(taskManager);
    runRenderView();
  });

  function runRenderView() {
    renderView(taskManager, template, function(renderedContent) {
      $('#task-items-container').html(renderedContent);
    });
  };
});
