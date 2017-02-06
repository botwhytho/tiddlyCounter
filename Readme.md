![Sample Counter Screen Shot](https://github.com/botwhytho/tiddlyCounter/blob/master/sampleCounter.png)

The tiddlyCounter plugin is a general purpose Tally Counter built on top of [tiddlywiki](tiddlywiki.com)

It is a macro you can add to any tiddler that creates buttons that increment a counter when you click on them. Currently, the total count for something is stored, as well as the time stamp for each occurrence. The time stamps are stored so that in future versions some stats can be calculated off of them.

You can test it out and import it into your tiddlywiki at the [tiddlyspot](http://tiddlycounter.tiddlyspot.com/) page

### Why? (Some Use Cases)


I needed to count foot traffic at a mall to estimate potential sales for a business plan. I was able to easily count foot traffic for various stores at the same time from my browser on my cell phone. This would have been less flexible and bulky with a mechanical tally counter (can only count one event type), or with pen and paper.

### Planned Improvements

-Work is underway to calculate basic stats for events (like average rate) from the time stamp data that is being saved along with the overall tally.

-Exploring ways to integrate with D3.js and/or other graphing libraries to provide great insight through graphing and visualizing events.

Feedback, bug reports, suggestions and pull requests are encouraged.

### How to use

When you add the below macro to a tiddler and save it you will have three buttons. As you click on them, a number will increment to the right of the respective button and you'll be able to easily count/track anything you want.

```
<<newCounter "Item1|Item2|Item3">>

Space for other notes/content. You can add this macro anywhere in a tiddler.
```

If you create a counter named "Item1", 2 tiddlers will be created in the background that store the counter data: "Item1" & "Item1Data". Item1 will contain the current count and Item1Data will contain a JSON object with the time stamp of each occurrence of the counted event.

To add/remove counters on a tiddler, just edit the tiddler that contains the macro and add/remove the item to the list of counters in the macro.
