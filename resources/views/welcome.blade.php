<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Palki</title>

          <!-- Vendor CSS Files -->


      <!-- Vendor JS Files -->
      <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,500;1,500&display=swap" rel="stylesheet">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    </head>
    <body style="">
    <div id="app"></div>
        @viteReactRefresh
        @vite(['resources/js/main.js'])
        @vite(['resources/js/app.jsx'])
    </body>

</html>