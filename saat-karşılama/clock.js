window.onload = function () {
    // Prompt for the user's name
    var name = prompt("Adınız nedir?");
    // Display the name
    document.getElementById("myName").textContent = name;
  
    // Function to display time
    function showTime() {
      var date = new Date();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
  
      var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
      var day = days[date.getDay()];
  
      // Add a zero in front of numbers<10
      hours = checkTime(hours);
      minutes = checkTime(minutes);
      seconds = checkTime(seconds);
  
      document.getElementById('myClock').innerHTML = hours + ":" + minutes + ":" + seconds + " " + day;
      var t = setTimeout(showTime, 500);
    }
  
    function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
    }
  
    // Initial call to showTime
    showTime();
  };
  