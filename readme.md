
# curImageBox - jquery Plugin [create an anchor](#start_readme)

This is a very small jQuery-Plugin to show your Images in a forground, when you click them.

It is very easy to use.

## Using:

Click on a picture - press ESC to leave the CurImageBox - use the arrow-keys (left-right) to

## Basic Installation

You need jquery to be loaded already.
Copy the Files form the "plugin" - Folder on your Webspace
Include the plugin/css/curImageBoxViewer.css - File and the *.js - Scripts from the folder plugin/ to your Webpage.
Activate Plugin

### Example:

An image is implemented in HTML like this:

        
    <img src="/path/To/Your/Picture.jpg">
        
    
if you want to use the curImageBox-jquery - Plugin, you have to write the code from above like this:

        
    <a href="/path/To/Your/PictureBig.jpg" data-curImageBox="galleryName">
        <img src="/path/To/Your/Picture.jpg">
    </a>
        
    
You see, there is a data-curImageBox with a value galName. When this atribute is present, the curImageBox-Plugin will start watching. The href-value from the a-tag is the picture, wich is loaded into the photobox. If yu have many pictures, you can group them by the galleryName (choose your own gallery-name. Pictures with the same gallery-name will be in one "group":

If the curImageBox is shown, then you can go with the arrow-keys (left-right) through the group

One Example with two grouped:

             
## Customize

The layout can be changed by the css-file. I use compass - so there is a *.scss-File, too

Also you can customize some options. So set an object as parameter. See the optionsDefault - object in the curImageBox.js (or .ts) - file for more information

## Module

I'm using typescript - so if you need an amd-module, you can easy compile with typescript.