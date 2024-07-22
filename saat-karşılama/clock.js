window.onload = function () {
    
    var name = prompt("Adınız nedir?");
    
    document.getElementById("myName").textContent = name;
  
    
    function showTime() {
      var date = new Date();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
  
      var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
      var day = days[date.getDay()];
  
     
      hours = checkTime(hours);
      minutes = checkTime(minutes);
      seconds = checkTime(seconds);
  
      document.getElementById('myClock').innerHTML = hours + ":" + minutes + ":" + seconds + " " + day;
      var t = setTimeout(showTime, 500);
    }
  
    function checkTime(i) {
      if (i < 10) {i = "0" + i};  
      return i;
    }
  
    
    showTime();
  };
  