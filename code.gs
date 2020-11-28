function onOpen(e) {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("DO IT").addItem("DOOOOO IIIITTTTT", 'sendEmails').addToUi();
}

function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var ui = SpreadsheetApp.getUi();
  ui.alert("Starting....");
  
  var howMany = parseInt(sheet.getRange(2, 7, 1).getValue());
  ui.alert("Doing it " + howMany + " times");
  
  var data = sheet.getRange(2, 1, 10).getValues();
  
  for (var j = 0; j < data.length; j++) {
    for (var i = 0; i < howMany; i++) {
      if (data[j].length != 0) {
        var row = data[j];
        var emailAddress = row;
        
        var message = Math.random() + " " + sheet.getRange(2, 4, 1).getValue() + " " + Math.random();
        
        var subject = ':D email ' + Math.random();
        try {
          MailApp.sendEmail(emailAddress, subject, message);
        } catch (e) {
          ui.alert("Email in row " + (j + 1) + " is invalid: " + data[j]);
          break;
        }
      }
    }
  }
  ui.alert("Finished!");
}
