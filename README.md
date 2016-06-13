# selectsave

This package is to make dropdown with a feature.
Select a value from dropdown and it shows up below the drop down as selected item with a close button. and avoid duplicate select and this selected values can be accessed separately.

Below Example show's How to use the package

##Installation

<b>bower install selectsave</b>

Command to save it in bower package.<br/>
<b>Bower install selectsave --save</b>

##Usage
```html
<script type="text/javascript" src="/javascripts/selectsave.js"></script>
```
##Example
####HTML
```html
 <select id="chooseSelect" name="chooseSelect[]">
    <option value=""></option>
 </select>
```
####JS
 
$("#chooseSelect").addNext();
 
 
