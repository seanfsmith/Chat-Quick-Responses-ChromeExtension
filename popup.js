// Responses
// COPY TO CLIPBOARD FROM FIELDS "copyButton" is button id tag
document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('introButton');
    checkPageButton.addEventListener('click', function() {
	// Copy Function "toCopy" is what will be copied
        var intro1 = document.getElementById("intros");
        var i = intro1.value;
            if (i == 1) {
                var introResponse1 = "Hello, thank you for contacting the Maryland Division of Unemployment Insurance, how may I assist you today?";
                navigator.clipboard.writeText(introResponse1).then(() => {}).catch(err => {console.log('Something went wrong', err);});
            } else if (i == 2) {
                var introResponse2 = "Hello, thank you for contacting the Maryland Division of Unemployment Insurance, would you please provide your full name, claimant id, date of birth, and last 4 SSN?";
                navigator.clipboard.writeText(introResponse2).then(() => {}).catch(err => {console.log('Something went wrong', err);});
            } else {
                alert("If statement not selected?  How did you get here?");
            }
	// End of copy function
    }, false);
  }, false);

// COPY TO CLIPBOARD FROM FIELDS "outroButton" is button id tag
document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('outroButton');
    checkPageButton.addEventListener('click', function() {
        // Copy Function "toCopy" is what will be copied
        var outro1 = document.getElementById("farewells");
        var o = outro1.value;
        if (o == 1) {
            var outroResponse1 = "Is there anything additional that I can assist you with today?";
            navigator.clipboard.writeText(outroResponse1).then(() => {}).catch(err => {console.log('Something went wrong', err);});
        } else if (o == 2) {
            var outroResponse2 = "Please Call 1-667-207-6520 to speak with a live agent. Live agents are available from 7:00 a.m. to 6:00 p.m., Monday through Friday; from 8:00 a.m. to 12:00 p.m. on Saturday; and from 12:00 p.m. to 4:00 p.m. Sunday.";
            navigator.clipboard.writeText(outroResponse2).then(() => {}).catch(err => {console.log('Something went wrong', err);});
        }
        else if (o == 3) {
            var outroResponse3 = "Thank you for using the virtual chat feature. Enjoy the rest of your day! I will now close our chat.";
            navigator.clipboard.writeText(outroResponse3).then(() => {}).catch(err => {console.log('Something went wrong', err);});
        } else {
            alert("If statement not selected?  How did you get here?");
        }
        // End of copy function
    }, false);
}, false);

// COPY TO CLIPBOARD FROM FIELDS "timelines" is button id tag
document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('outofscopeButton');
    checkPageButton.addEventListener('click', function() {
        // Copy Function "toCopy" is what will be copied
        var oos1 = document.getElementById("outofscope");
        var oos = oos1.value;
        if (oos == 1) {
            var oosResponse1 = "Unfortunately, the issue on your account cannot be solved via Chat. Please continue to check your Beacon account and wait for further communication from the state. If you do not have any other questions, I will now close our chat.";
            navigator.clipboard.writeText(oosResponse1).then(() => {}).catch(err => {console.log('Something went wrong', err);});
        } else {
            alert("If statement not selected?  How did you get here?");
        }
        // End of copy function
    }, false);
}, false);

// COPY TO CLIPBOARD FROM FIELDS "timelines" is button id tag
document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('timeframeButton');
    checkPageButton.addEventListener('click', function() {
        // Copy Function "toCopy" is what will be copied
        var timeline1 = document.getElementById("timeframe");
        var timeline = timeline1.value;
        if (timeline == 1) {
            var timelineResponse1 = "Unfortunately, I do not have a timeline for you on this. Please continue to check your Beacon for any updates to your account.";
            navigator.clipboard.writeText(timelineResponse1).then(() => {}).catch(err => {console.log('Something went wrong', err);});
        } else {
            alert("If statement not selected?  How did you get here?");
        }
        // End of copy function
    }, false);
}, false);

// COPY TO CLIPBOARD FROM FIELDS "copyButton" is button id tag
document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('noresponseButton');
    checkPageButton.addEventListener('click', function() {
        // Copy Function "toCopy" is what will be copied
        var nr1 = document.getElementById("noresponse");
        var nr = nr1.value;
        if (nr == 1) {
            var noResponse1 = "Hello, are you still there?";
            navigator.clipboard.writeText(noResponse1).then(() => {}).catch(err => {console.log('Something went wrong', err);});
        } else if (nr == 2) {
            var noResponse2 = "Hello, since I have not heard a response from you in over 5 minutes. I will now end our chat. Thank you!";
            navigator.clipboard.writeText(noResponse2).then(() => {}).catch(err => {console.log('Something went wrong', err);});
        } else {
            alert("If statement not selected?  How did you get here?");
        }
        // End of copy function
    }, false);
}, false);