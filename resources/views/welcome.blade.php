<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Palki</title>

          <!-- Vendor CSS Files -->


      <!-- Vendor JS Files -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" >
      <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,500;1,500&display=swap" rel="stylesheet">
      <link href="https://fonts.google.com/specimen/Young+Serif" rel="stylesheet">
      <link href="https://fonts.google.com/specimen/Playfair+Display" rel="stylesheet">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <style>
        .whatsapp {
    position: fixed;
    bottom: 10px;
    left: 10px;
    height: 80px;
    width: 80px;
    z-index: 9999;
}
.social-media-bg{
    position: fixed;
    bottom: 40%;
    right: 0;
    width: 35px;
    z-index: 999;
}
      </style>
    </head>
    <body style="">
    <a href="tel:+918860619770">
    <div class="phone-icon">
        <img src="images/phone-icon.png" alt="phone" width="90%" />
        <div class="phone-wave"></div>
    </div>
    </a>
    
    <div class="whatsapp">
        <a href="https://wa.me/+918860619770">
            <img src="whatsapp_icon.png" width="100%" alt="whatsapp" />
        </a>
    </div>
    <div class="social-media-bg">
        <div class="instagram">
            <img src="/images/insta.png" alt="instagram" width="100%" />
        </div>
        <div class="facebook">
            <img src="/images/facebook.png" alt="instagram" width="100%" />
        </div>
        <div class="twitter">
            <img src="/images/x.png" alt="instagram" width="100%" />
        </div>
        <div class="linkedin">
            <img src="/images/linkedin.png" alt="instagram" width="100%" />
        </div>
    </div>
    <div id="app"></div>
        @viteReactRefresh
        @vite(['resources/js/app.jsx'])
    </body>

</html>