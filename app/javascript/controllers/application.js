import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }



function scrollToBottom() {
  if ($("#messages").length > 0) {
    $("#messages").scrollTop($("#messages")[0].scrollHeight);
  }
}

$(document).ready(function () {
  $("#new_message").on("ajax:complete", function(e, data, status) {
    $('#message_content').val('');
  })
  scrollToBottom();
});

$(document).on('click', '[data-send~=message]', function(event) {
  submitMessage(event);
});

function submitMessage(event){
  event.preventDefault();
  $('#new_message').submit();
}

$(document).on('keypress', '[data-behavior~=room_speaker]', function(event) {
  if (event.keyCode === 13) {
    submitMessage(event);
  }
});