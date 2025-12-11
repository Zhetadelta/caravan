Caravan, a fork of Bingosync.com
===

This is the repository powering [caravan](https://caravan.kobold60.com/),
a web application that lets people collaboratively work on 6x6 "bingo boards".

If you're not here from the silksong bingo community, hi! The generators should still work.

I think.

Custom boards expect a 36-long list now to accomodate the bigger board.

#### Not so Fun Implementation Details! :D

Caravan, as a fork of bingosync, is implemented using a combination of the [django](https://www.djangoproject.com/)
and [tornado](http://www.tornadoweb.org/) web servers written by the original author [kbuzsaki](https://github.com/kbuzsaki/). The django web server
(bingosync-app) hosts the main website content, serves most of the pages,
and talks to the database. The tornado web server (bingosync-websocket)
maintains all websocket connections to the site and passes messages along
to the clients in a "publish and subscribe" kind of model.

The actual site is hosted on a DigitalOcean droplet. It's running behind 
an apache virtualhost. I use [postgres](http://www.postgresql.org/)
for the database. This machine also hosts [bingyflea](https://github.com/Zhetadelta/Silksong.BingoGenerator),
which is the primary way we currently interact with caravan.
