Leopold Bloom TwitterBot! @LeoTakesAWalk.

This file takes quotes from a MySQL database and tweets those quotes to the Twitter handle LeoTakesAWalk.

This is pretty much a homegrown app, using node.js modules "Twit" and MySQL. If you are interested, check out the APIs on either one, and also some extra packages that I didn't use but could be more efficient.

This bot pulls a random row from a MySQL table, making sure the row has not been used before, and then tweets the text from that table.  Prety basic.  You'll need a config.js file as well to hold the consumer and access tokens to from the twitter's development account.  I'd recommend looking at firstTwitterBot in my repositories, or go to Darius Kazemi's github account.  He is pretty much the inspiration for this particular twitter bot, and I appreciate all that he has shared with us.

Dan and I created a more sophisticated setInterval() function, that imitates random behavior.  With the bot running up on a server, at 1a.m. the bot resets leoHours and leoMinutes, and randomly selects a number between 0 and 4.  This will be the number of tweets that will be posted today.  The whenToday() function also sets the leoHours and leoMinutes of each tweet.  Every minute the setInterval() function looks to see if it is either the restart time (1am) or time to tweet.  If it is, the leoSpeaks function is returned.  Pretty simple!

License MIT
