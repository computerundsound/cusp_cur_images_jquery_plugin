<?php
/*
 * Copyright by Jörg Wrase - www.Computer-Und-Sound.de
 * Date: 24.07.2017
 * Time: 19:51
 * 
 * Created by PhpStorm
 *
 */
?><!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>curImageBox - Example</title>

    <script src="../bower_components/jquery/dist/jquery.js"></script>
    <script src="../plugin/curImageBox.js"></script>

    <link rel="stylesheet" href="css/example.css">

    <link rel="stylesheet" href="../plugin/css/curImageBox.css">

    <script type="text/javascript">

        $(function () {

            /* The options are optional */
            $("a[data-curImageBox]").curImageBox({
                                                     fadeInTimeMS   : 500,
                                                     backgroundColor: "rgba(0,0,50,0.6)"
                                                 });

        });

    </script>

</head>
<body>

<div class="cuContainer">

    <!--    --><?php //include_once __DIR__ . '/'; ?>

    <div class="head">
        <div class="left">Jörg Wrase - <a href="mailto:hireme@cusp.de">hireme@cusp.de</a></div>
        <div class="right"><a href="mailto:hireme@cusp.de">cusp.de</a></div>
    </div>

    <h1>curImageBox - jquery Plugin</h1>

    <p class="lead">You will find installation instructions and further information in the
        <a href="https://github.com/computerundsound/cusp_cur_images_jquery_plugin#curimagebox---jquery-plugin"
           target="_blank">readme.md-File</a>
    </p>


    <h2>Short Example:</h2>

    <p>One Example with two groups: (you can use left-arrow and right-arrow to step through the gallery.</p>

    <div class="curPicContainer">

        <a href="pics/one.jpg" data-curImageBox="gal_1">
            <img src="pics/one_preview.jpg">
        </a>

        <a href="pics/two.jpg" data-curImageBox="gal_1">
            <img src="pics/two_preview.jpg">
        </a>

        <a href="pics/three.jpg" data-curImageBox="gal_1">
            <img src="pics/three_preview.jpg">
        </a>

        <a href="pics/four.jpg" data-curImageBox="gal_2">
            <img src="pics/four_preview.jpg">
        </a>

        <a href="pics/five.jpg" data-curImageBox="gal_1">
            <img src="pics/five_preview.jpg">
        </a>

        <a href="pics/six.jpg" data-curImageBox="gal_2">
            <img src="pics/six_preview.jpg">
        </a>

        <a href="pics/seven.jpg" data-curImageBox="gal_1">
            <img src="pics/seven_preview.jpg">
        </a>

    </div>


</div>

</body>
</html>