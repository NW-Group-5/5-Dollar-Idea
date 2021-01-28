
$(document).ready(function() {
    // Getting references to our form and inputs
    var loginForm = $(".signup");
    var usernameInput = $("#username");
    var passwordInput = $("#password");
    // When the form is submitted, we validate there's an username and password entered
    loginForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        username: usernameInput.val().trim(),
        password: passwordInput.val().trim()
      };
      if (!userData.username || !userData.password) {
        return;
      }
      // If we have an username and password we run the loginUser function and clear the form
      loginUser(userData.username, userData.password);
      usernameInput.val("");
      passwordInput.val("");
    });
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginUser(username, password) {
      $.post("/api/login", {
        username: username,
        password: password
      })
        .then(data => {
          window.location.replace(`/pantry/${data.id}`);
        })
        .catch(function(err) {
          console.log(err);
          $("#LoginMatch").html("Password & Username do not match").addClass("loginMatch");
        });
    }
  });




