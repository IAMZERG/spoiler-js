##Note: script currently requires jQuery.##
==========

javascript tool for adding spoilers to a website... simply add the "spoiler" class to anything you want to add a spoiler to.  Example included inside.

==========

This tool is free to use forever.  The javascript, css, html, and other content is free for use, and can be added to or included in other projects.  I only ask that you show me the courtesy of a mention.

===========

###The tool can also be customized:###

Here's how this works: You will add an addSpoiler function call below the closing body tag Something like this: 

```javascript
<script>addSpoiler(".custom-spoiler", "special-button", "My Spoiler");</script>
```

*The first argument* is a custom selector. This is the class name you will use on all elements you want the custom spoiler to be used on (note: addSpoiler is called as part of loading the script, so adding a function call is not necessary for normal function of spoiler.js, and was added for people using Bootstrap and doing special things).

*The second argument* is a space-separated string of classes to be added to the button. If you're using Bootstrap, it will be necessary to add Bootstrap classes on this second argument, in addition to any others you'd like to add.

*The third argument* is the text that goes in the button. Figured you might find a use for this script other than as a spoiler. You're welcome.

================

##To Do:##

Remove jQuery requirement... No need for this, and that's a lot of added bulk if you aren't already including jQuery.

