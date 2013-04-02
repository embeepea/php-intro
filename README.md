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
        HTTP/1.1 200 OK
        X-Powered-By: PHP/5.3.3
        Content-type: text/html
        Date: Tue, 02 Apr 2013 17:26:17 GMT
        Connection: close
        
        Hello, world!
        
        PHP is awesome!
