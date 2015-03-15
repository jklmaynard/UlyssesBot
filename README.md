Leopold Bloom TwitterBot! @LeoTakesAWalk.

This file takes quotes from a MySQL database and tweets those quotes to the Twitter handle LeoTakesAWalk. 

This is pretty much a homegrown app, using node.js modules "Twit" and MySQL. If you are interested, check out the APIs on either one, and also some extra packages that I didn't use but could be more efficient. 

This bot pulls a random row from a MySQL table, making sure the row has not been used before, and then tweets the text from that table.  Prety basic.  You'll need a config.js file as well to hold the consumer and access tokens to from the twitter's development account.  I'd recommend looking at firstTwitterBot in my repositories, or go to Darius Kazemi's github account.  He is pretty much the inspiration for this particular twitter bot, and I appreciate all that he has shared with us. 

License MIT