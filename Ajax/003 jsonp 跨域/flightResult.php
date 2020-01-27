<?php
if (isset($_GET['code'])) {
         if ($_GET['code'] == "CA1998") {
             $flightId = $_GET['code'];
              $price = 1000;
         }
          else if ($_GET['code'] == "CA1997") {
              $flightId = $_GET['code'];
              $price = 2000;
         }
         else{
             $flightId = 0;
             $price = 0;
         }
         $flightHandler = array('flightId'=>$flightId,'price'=>$price); 
         $flightHandler = json_encode($flightHandler);
         $flightHandler = $_GET['callback']."(".$flightHandler .");";// 将数据进行了包装，包装成了一个调用的函数，这一步很重要。
         echo $flightHandler;
     }