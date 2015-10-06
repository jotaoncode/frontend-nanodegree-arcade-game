## Synopsis

This is game similar to frogger built with javascript / html5 / css3.

## Motivation

I am motivated by the course to encourage this challenge. This way I can learn which are some of the key values to of the project 3 and actually review some knowledge.

## Installation

All you need to play the game is have the correct ambient to publish everything requested from the file index.html.

To serve files there are several options, nodejs / python / IIS or Apache...  and many others.

This is an Apache configuration to serve the game.

#### Example for Apache installation in Linux Ubuntu:
You can setup your Apache server like this example to serve the game.

Values between [] are values you have to complete.

First install apache from www.apache.org
Then modify the file 000-default.conf to serve your projects. Like the following.
```xml
<VirtualHost *:80>
        DocumentRoot /home/[Your User]/[The folder of your projects]
        <Directory />
            Options FollowSymLinks
            AllowOverride None
        </Directory>

        <Directory /home/[Your User]/[The folder of your projects]/>
            Options Indexes FollowSymLinks MultiViews
            AllowOverride All
            Order allow,deny
            allow from all
            Require all granted
        </Directory>
</VirtualHost>
```

Other option is just serving from www folder.

Finally if you changed some configuration, then run restart to apache.


### Run the game

Instructions to run the game:

1- Open the browser.

2- Access to the game through navigating to index.html, this depends on the way you installed the game.

###### Example for Apache
  http://localhost/[The folder of your projects]/[The game folder]/index.html

## Game Instructions

1- You can move the player with cursors ‘up’ ‘down’ ‘left’ ‘right’

2- To score you need to reach with your player, to the water field, without being catch by the bug.

## API

There is no service to be attended for now. It is all locally defined

## Tests

TODO I will add some unit testing after finishing the course.

## Contributors

Juan José García


## License

The MIT License (MIT)

Copyright (c) 2015 Juan José García

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

Copyright (c) 2015
