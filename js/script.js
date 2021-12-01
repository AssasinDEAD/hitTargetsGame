$(document).ready(function () {
   $("#startBtn").on("click", function () {
      $("#targetBtn").addClass("active")
      document.getElementById("endScore").innerHTML = ""
      count = 0
      var maxTicks = 5;
      var tickCount = 0;

      var tick = function () {
         if (tickCount >= maxTicks) {
            $("#targetBtn").removeClass("active")
            document.getElementById("timer").innerHTML = "Time is over"
            document.getElementById("endScore").innerHTML = "Your score" + " " + count
            document.getElementById("startBtn").innerHTML = "Again"
            clearInterval(myInterval);
            return;
         }

         /* The particular code you want to excute on each tick */
         document.getElementById("timer").innerHTML = (maxTicks - tickCount);

         tickCount++;
      };

      // Start calling tick function every 1 second.
      var myInterval = setInterval(tick, 1000);
   })
})


let count = 0;


$("#targetBtn").on("click", function () {
   count = count + 1
   document.getElementById("scoreText").innerHTML = count
   let randomtop = Math.floor(Math.random() * 200) + 100;
   let randomleft = Math.floor(Math.random() * 500) + 100;
   document.getElementById("targetBtn").style.top = randomtop + "px"
   document.getElementById("targetBtn").style.left = randomleft + "px"

});