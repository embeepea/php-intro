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

> [mbp@fog ~]$ telnet localhost 12345
> Trying ::1...
> telnet: connect to address ::1: Connection refused
> Trying 127.0.0.1...
> Connected to localhost.
> Escape character is '^]'.
> GET /hello.php
> 
> HTTP/1.1 200 OK
> X-Powered-By: PHP/5.3.3
> Content-type: text/html
> Date: Tue, 02 Apr 2013 17:50:25 GMT
> Connection: close
> 
> Hello, world!
> Connection closed by foreign host.

```
telnet 127.0.0.1 12345
GET /hello3.php

```

viewing in a browser
--------------------
on server: `./server -h 12345`
<br>in browser: [http://127.0.0.1:12345/hello.php](http://127.0.0.1:12345/hello.php)
<br>in browser: [http://127.0.0.1:12345/hello3.php](http://127.0.0.1:12345/hello3.php)
