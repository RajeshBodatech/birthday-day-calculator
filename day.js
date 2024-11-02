function calculateBirthday() {
    let date = parseInt(document.getElementById('date').value);
    let month = parseInt(document.getElementById('month').value);
    let year = parseInt(document.getElementById('year').value);

    if (isNaN(date) || isNaN(month) || isNaN(year)) {
        document.getElementById('result').innerHTML = "Please enter valid values.";
        document.getElementById('result').classList.add('active');
        return;
    }
   else if(date < 1 || date > 31)
   {
            document.getElementById('result').innerHTML = "Please enter the date(01-31) correctly.";
            document.getElementById('result').classList.add('active');
            return;
      }
      else if(month < 1 || month > 12)
      {
        document.getElementById('result').innerHTML = "Please enter the month(01-12) correctly.";
        document.getElementById('result').classList.add('active');
        return;
      }
    let yearCode = 0;
    let monthCode = 0;
    // if (date < 1 || date > 31) {
    //     alert("Enter The Correct Date (01-31)");
    // }
    
    // Calculate year code
    if ((year >= 1600 && year < 1700) || (year >= 2000 && year < 2100)) {
        yearCode = 6;
    } else if ((year >= 1700 && year < 1800) || (year >= 2100 && year < 2200)) {
        yearCode = 4;
    } else if ((year >= 1800 && year < 1900) || (year >= 2200 && year < 2300)) {
        yearCode = 2;
    }

    // Leap year check
    if (year % 4 === 0) {
        switch (month) {
            case 1: monthCode = 6; break;
            case 2: monthCode = 2; break;
            case 3: monthCode = 3; break;
            case 4: monthCode = 6; break;
            case 5: monthCode = 1; break;
            case 6: monthCode = 4; break;
            case 7: monthCode = 6; break;
            case 8: monthCode = 2; break;
            case 9: monthCode = 5; break;
            case 10: monthCode = 0; break;
            case 11: monthCode = 3; break;
            case 12: monthCode = 5; break;
            }
        }
     else {
        switch (month) {
            case 1: monthCode = 0; break;
            case 2: monthCode = 3; break;
            case 3: monthCode = 3; break;
            case 4: monthCode = 6; break;
            case 5: monthCode = 1; break;
            case 6: monthCode = 4; break;
            case 7: monthCode = 6; break;
            case 8: monthCode = 2; break;
            case 9: monthCode = 5; break;
            case 10: monthCode = 0; break;
            case 11: monthCode = 3; break;
            case 12: monthCode = 5; break;
            }
        }


    let leap = year % 100;
    let leapYear = Math.floor(leap / 4);
    let dayOfWeek = (date + monthCode + leap + leapYear + yearCode) % 7;

    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let result = "Dear User😇️\n     Advance Happy Birthday🎂️\n        Your next birthday is on " + dayNames[dayOfWeek] + "☺️🤩️";
    
    // Display result with animation
    document.getElementById('result').innerHTML = result;
    document.getElementById('result').classList.add('active');
}

