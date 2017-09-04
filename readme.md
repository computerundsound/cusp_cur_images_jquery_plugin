
# curImageBox - jquery Plugin [create an anchor](#start_readme)

This is a very small jQuery-Plugin to show your Images in a forground, when you click them.

It is very easy to use.

The advantage is, that not only it is very light, fast and easy - it also works with jquery v3.x

## Using:

Click on a picture - press ESC to leave the CurImageBox - use the arrow-keys (left-right) to

## Basic Installation

The easiest way is to get the Files is using Bower I think:

Add

    "cusp_cur_images_jquery_plugin": "~1.1.0"

to your dependencies and run

    bower update

If you don't use Bower, unzip the downloaded zip-File and copy it to your project.

After that you add the .css and .js file in your head-section of your .html (or .php) - File.

Make shure, that jquery is loaded **before** curImageBox.js

Your head section could be like this (only a part):

    <script src="yourScripts/jquery.js"></script>
    <script src="yourScripts/curImageBox.js"></script>
    <link rel="stylesheet" href="yourScripts/curImageBox.css">

## Activate Plugin

To run the curImageBox-Jquery-plugin, you must insert this javascript-code line:

    $("a[data-curImageBox]").curImageBox();

This meas, all a-html-elements with the attribute
**data-curImageBox** will trigger the cuImageBox

### HTML-Markup:

An image is implemented in HTML like this:
        
    <img src="/path/To/Your/Picture.jpg">
        
    
if you want to use the curImageBox-jquery - Plugin, you have to write the code from above like this:

        
    <a href="/path/To/Your/PictureBig.jpg" data-curImageBox="galleryName">
        <img src="/path/To/Your/Picture.jpg">
    </a>


    
You see, there is a data-curImageBox with a value galName. When this attribute is present (as you defined in the .js - Script), the curImageBox-Plugin will start watching. The href-value from the a-tag is the picture, witch is loaded into the photobox. If you have many pictures, you can group them by the galleryName (choose your own gallery-name. Pictures with the same gallery-name will be in one "group":

If the curImageBox is shown, then you can go with the arrow-keys (left-right) through the group

## Customize

The layout can be changed by the css-file. I use compass - so there is a *.scss-File, too

Also you can customize some options. So set an object as parameter. See the optionsDefault - object in the curImageBox.js (or .ts) - file for more information

## Module

I'm using typescript - so if you need an amd-module, you can easy compile with typescript.