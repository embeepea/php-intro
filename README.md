hello.php
---------
```php
Hello, world!
```

hello2.php
----------
```php
<?php
print "Hello, world!\n";
?>
```

hello3.php
----------
```php
<?php
print "Hello, world!\n";
?>

PHP is awesome!
```

hello4.php
----------
```php
<?php
print "Hello, world!\n";
?>

```    

hello5.php
----------
```php
<?php
print "Hello, world!\n";
```

hello6.php
----------
```php
Hello <?php print "world"?>!
```

running over the network
------------------------
on server: `./server 12345 hello6.php`
<br>on client: `telnet 127.0.0.1 12345`

on server: `./server 12345 hello3.php`
<br>on client: `telnet 127.0.0.1 12345`

browsers need metadata
----------------------
 * type of data (html,text,csv,pdf,etc), disposition (display or download), etc
 * HTTP standard:
   1. header (metadata)
   2. blank line
   3. body
 * Example:
```
    HTTP/1.1 200 OK
    X-Powered-By: PHP/5.3.3
    Content-type: text/html
    Date: Tue, 02 Apr 2013 17:26:17 GMT
    Connection: close
    
    Hello, world!
    
    PHP is awesome!
```

running an http server
----------------------
on server: `./server -h 12345`
<br>on client: 
```
telnet 127.0.0.1 12345
GET /hello.php

```
> [mbp@fog ~]$ telnet 127.0.0.1 12345
> <br>Trying 127.0.0.1...
> <br>Connected to localhost.
> <br>Escape character is '^]'.
> <br>GET /hello.php
> <br>
> <br>HTTP/1.1 200 OK
> <br>X-Powered-By: PHP/5.3.3
> <br>Content-type: text/html
> <br>Date: Tue, 02 Apr 2013 17:50:25 GMT
> <br>Connection: close
> <br>
> <br>Hello, world!
> <br>Connection closed by foreign host.

```
telnet 127.0.0.1 12345
GET /hello3.php

```
> [mbp@fog ~]$ telnet 127.0.0.1 12345
> <br>Trying 127.0.0.1...
> <br>Connected to localhost.
> <br>Escape character is '^]'.
> <br>GET /hello3.php
> <br>
> <br>HTTP/1.1 200 OK
> <br>X-Powered-By: PHP/5.3.3
> <br>Content-type: text/html
> <br>Date: Tue, 02 Apr 2013 17:52:27 GMT
> <br>Connection: close
> <br>
> <br>Hello, world!
> <br>
> <br>PHP is awesome!
> <br>Connection closed by foreign host.

viewing in a browser
--------------------
on server: `./server -h 12345`
<br>in browser: [http://127.0.0.1:12345/hello.php](http://127.0.0.1:12345/hello.php)
<br>in browser: [http://127.0.0.1:12345/hello3.php](http://127.0.0.1:12345/hello3.php)

hello7.php
----------
```php
Hello <?php print $_REQUEST['name']?>!
```
on server: `./server -h 12345`
<br>in browser: [http://127.0.0.1:12345/hello7.php?name=Mark](http://127.0.0.1:12345/hello7.php?name=Mark)


hello8.php
----------
```php
<?php $date = date("Y M d (D) H:i:s"); ?>
Hello <?php print $_REQUEST['name']?>, your favorite color is <?php print $_REQUEST['color']?>,
and the current time is <?php print $date ?>.
```
on server: `./server -h 12345`
<br>in browser: [http://127.0.0.1:12345/hello8.php?name=Mark&color=brown](http://127.0.0.1:12345/hello8.php?name=Mark&color=brown)

back to command-line
--------------------
on server: `./server -h 12345`
<br>on client: 
```
$ telnet 127.0.0.1 12345
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
GET /hello8.php?name=Mark&color=brown

HTTP/1.1 200 OK
X-Powered-By: PHP/5.3.3
Content-type: text/html
Date: Tue, 02 Apr 2013 20:06:03 GMT
Connection: close

Hello Mark, your favorite color is brown,
and the current time is 2013 Apr 02 (Tue) 16:06:03.
Connection closed by foreign host.
```
