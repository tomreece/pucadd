# PucAdd

A small Javascript utility that allows you to add cards to your Haves list more easily from the PucaTrade.com Search page.

### Setup
1. Create a new bookmark named "PucAdd"
1. Paste this into the bookmark URL:
```
javascript:(function () { $('<script>').attr('src', 'https://tomreece.github.io/pucadd/pucadd.js?'+(new Date()).getTime()).appendTo('head'); })();
```
1. Save the bookmark to your bookmark bar

### Usage
1. Go to https://pucatrade.com/search
1. On the left, filter as you wish and click Search...
1. For example, if you're about to enter all of your Black Theros cards then make sure only Black is selected and Theros is entered as the expansion.
1. Click the "PucAdd" bookmark you created earlier.
1. You should see _"You are using PucAdd 1.0 Now you can simply click a card to add it to your Haves list."_ appear at the top of the page and the page layout modify itself.

### Help
Contact me on Twitter @tomreece if you have any problems.
