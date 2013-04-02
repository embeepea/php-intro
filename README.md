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

on client: `telnet 127.0.0.1 12345`


on server: `./server 12345 hello3.php`

on client: `telnet 127.0.0.1 12345`
