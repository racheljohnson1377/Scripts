// Checks the expiry date of a movie/tv show against the current date and hides the row if it's expired
function onOpen(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Specifies the expiry date column to retrieve data for all rows in the sheet
  var startRow = 1;
  var lastRow = sheet.getLastRow() - 1;
  var column = 4;
  var numberOfColumns = 1;
  var dataRange = (sheet.getRange(startRow, column, lastRow, numberOfColumns)).getDisplayValues();

  // Declares the current date and sets the time to 00:00 so items are not hidden on the day they expire
  var currentDate = new Date().setHours(0, 0, 0, 0);

  for(var i = 0; i < lastRow; i++){
    // Formats the expiry date string so it can be passed to the Date object constructor
    var dateConversion = dataRange[i].toString().split("/");
    var newDate = dateConversion[2] + "/" + dateConversion[1] + "/" + dateConversion[0];
    var expiryDate = new Date(newDate);

    // Excludes all rows that do not include an expiry date and hides those which have been passed by the current date
    if((currentDate > expiryDate) & (expiryDate != 'Invalid Date')){
        sheet.hideRows(i + 1);
    }
  }
}