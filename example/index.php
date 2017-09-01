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

    <link rel="stylesheet" href="../plugin/css/curImageBox.css">

    <script type="text/javascript">

        $(function () {

            $("a[data-curImageBox]").curImageBox();

        });

    </script>

</head>

<style type="text/css">
    .cuContainer {
        background-color : #e6e6e6;
        color            : #1c1c1c;
        width            : 750px;
        border-left      : 1px solid grey;
        border-right     : 1px solid grey;
        font-family      : Arial, Helvetica, Verdana, sans-serif;
        padding          : 1rem;
        margin           : auto;
    }

    pre {
        padding          : 1rem;
        background-color : white;
        font-family      : "Courier New", monospace;
    }

    .cuImportant {
        color : red;
    }

</style>

<body>

<div class="cuContainer">
    <h1>curImageBox - jquery Plugin</h1>


    <p>This is a very small jQuery-Plugin to show your Images in a forground, when you click them.</p>
    <p>It is very easy to use - and I know - not much configurable. But for me it works fine - maybe for you to</p>

    <h2>Using:</h2>

    <p>Click on a picture - press ESC to leave the CurImageBox - use the arrow-keys (left-right) to </p>

    <h2>Basic Installation</h2>

    <ul>
        <li>You need jquery to be loaded already.</li>
        <li>Copy the Files form the &quot;plugin&quot; - Folder on your Webspace</li>
        <li>Include the plugin/css/curImageBoxViewer.css - File and the *.js - Scripts from the folder plugin/ to your
            Webpage.
        </li>
    </ul>

    <h2>Activate Plugin</h2>

    <h4>Example:</h4>

    <p>An image is implemented in HTML like this:</p>

    <pre>
        <code>
&lt;img src=&quot;/path/To/Your/Picture.jpg&quot;&gt;
        </code>
    </pre>


    <p>
        if you want to use the curImageBox-jquery - Plugin, you have to write the code from above like this:
    </p>

    <pre>
        <code>
&lt;a href=&quot;/path/To/Your/PictureBig.jpg&quot; <span class="cuImportant">data-curImageBox=&quot;galleryName&quot;</span>&gt;
    &lt;img src=&quot;/path/To/Your/Picture.jpg&quot;&gt;
&lt;/a&gt;
        </code>
    </pre>

    <p>You see, there is a data-curImageBox with a value galName. When this atribute is present, the curImageBox-Plugin
       will
       start watching. The href-value from the a-tag is the picture, wich is loaded into the photobox. If yu have many
       pictures, you can group them by the galleryName (choose your own gallery-name. Pictures with the same
       gallery-name will be in one &quot;group&quot;:</p>
    <p>If the curImageBox is shown, then you can go with the arrow-keys (left-right) through the group</p>

    <p>One Example with two grouped:</p>

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

    <h2>Customize</h2>

    <p>The layout can be changed by the css-file. I use compass - so there is a *.scss-File, too</p>
    <p>Also you can customize some options. So set an object as parameter. See the optionsDefault - object in the
       curImageBox.js (or .ts) - file for more information</p>

    <h2>Modul</h2>

    <p>I'm using typescript - so if you need an amd-module, you can easy compile with typescript.</p>

</div>

</body>
</html>