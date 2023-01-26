// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

// import "bootstrap-sprockets";
// import "bootstrap";

// import { Turbo } from "@hotwired/turbo-rails"
// Turbo.session.drive = false

// //= require jquery
// //= require jquery-ui

// //= require "bootstrap-sprockets";import "channels"

function scrollToBottom() {
  if ($("#messages").length > 0) {
    $("#messages").scrollTop($("#messages")[0].scrollHeight);
  }
}

$(document).ready(function () {
  scrollToBottom();
});

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