#Introduction (Basic Execution, Server/Client Execution, HTTP)

##hello.php
```php
Hello, world!
```

###`$ php hello.php`:
> ```
> Hello, world!'
> ```

<!-- ***************************************** -->

##hello2.php
```php
<?php
print "Hello, world!\n";
?>
```

###`$ php hello2.php`:
> ```
> Hello, world!'
> ```

<!-- ***************************************** -->

##hello3.php
```php
<?php
print "Hello, world!\n";
?>

PHP is awesome!
```

###`$ php hello3.php`:
> ```
> Hello, world!'
> 
> PHP is awesome!
> ```

<!-- ***************************************** -->

##hello4.php
```php
<?php
print "Hello, world!\n";
?>

```    

###`$ php hello4.php`:
> ```
> Hello, world!'
> 
> ```

<!-- ***************************************** -->

##hello5.php
```php
<?php
print "Hello, world!\n";
```

###`$ php hello5.php`:
> ```
> Hello, world!'
> ```

<!-- ***************************************** -->

##hello6.php
```php
Hello <?php print "world"?>!
```

###`$ php hello6.php`:
> ```
> Hello, world!'
> ```

<!-- ***************************************** -->

running over the network
------------------------
on server: `./server 12345 hello6.php`
<br>on client:
```
$ telnet 127.0.0.1 12345
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
Hello world!
Connection closed by foreign host.
```

on server: `./server 12345 hello3.php`
<br>on client: 
```
birch:~ mbp$ telnet 127.0.0.1 12345
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
Hello, world!

PHP is awesome!
Connection closed by foreign host.
```

<!-- ***************************************** -->

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

<!-- ***************************************** -->

running an http server
----------------------
on server: `./server -h 12345`
<br>on client: 
```
$ telnet 127.0.0.1 12345
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
GET /hello.php

HTTP/1.1 200 OK
X-Powered-By: PHP/5.3.3
Content-type: text/html
Date: Tue, 02 Apr 2013 17:50:25 GMT
Connection: close

Hello, world!
Connection closed by foreign host.
```

```
$ telnet 127.0.0.1 12345
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
GET /hello3.php

HTTP/1.1 200 OK
X-Powered-By: PHP/5.3.3
Content-type: text/html
Date: Tue, 02 Apr 2013 17:52:27 GMT
Connection: close

Hello, world!

PHP is awesome!
Connection closed by foreign host.
```

<!-- ***************************************** -->

viewing in a browser
--------------------
on server: `./server -h 12345`
<br>in browser: [http://127.0.0.1:12345/hello.php](http://127.0.0.1:12345/hello.php)
<br>in browser: [http://127.0.0.1:12345/hello3.php](http://127.0.0.1:12345/hello3.php)

<!-- ***************************************** -->

##hello7.php
```php
Hello <?php print $_REQUEST['name']?>!
```
on server: `./server -h 12345`
<br>in browser: [http://127.0.0.1:12345/hello7.php?name=Mark](http://127.0.0.1:12345/hello7.php?name=Mark)


<!-- ***************************************** -->

##hello8.php
```php
<?php $date = date("Y M d (D) H:i:s"); ?>
Hello <?php print $_REQUEST['name']?>, your favorite color is <?php print $_REQUEST['color']?>,
and the current time is <?php print $date ?>.
```
on server: `./server -h 12345`
<br>in browser: [http://127.0.0.1:12345/hello8.php?name=Mark&color=brown](http://127.0.0.1:12345/hello8.php?name=Mark&color=brown)

<!-- ***************************************** -->

##hello8.php with parameters via telnet
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

<!-- ***************************************** -->

##using apache instead of our own 'server' program
in browser: http://dev.nemac.org/~mbp/php-intro/hello8.php?name=Mark&color=brown

<!-- ***************************************** -->

#Langauge Fundamentals

*  Resources
   * www.w3schools.com introduction: http://www.w3schools.com/php/php_intro.asp
   * (Free) Drupalize.me video: http://drupalize.me/videos/php-themers
   * Online PHP reference manual: http://php.net/manual/en
   * Exercises: http://phpexercises.com


*  Basic PHP syntax
   * intermixed with HTML, use `<?php` and `?>` to enter and leave PHP mode
   * commands in PHP mode end with semicolon `;`


*  Comments
   * `//` to end of line
   * block comments deliminted by `/*` and `*/`; block comments may NOT be nested


*  Variables
   * store values
   * variable names
      * start with the $ sign, followed by the name of the variable
      * must begin with a letter or the underscore character
      * can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )
      * may not contain spaces
      * are case sensitive ($y and $Y are two different variables)
     <br>valid names: $x, $X, $firstName, $name1, $first_name
     <br>invalid names: $2ndName, $first name, $%
   * no need to declare variables before using them
   * 'loosely typed'; basic types are:
      * integers
        <br>$x = 2;
      * floating point numbers
        <br>$x = 3.14159;
      * strings
        <br>$name = "Mark"
      * arrays
        <br>more on arrays later

* Operators
   * the usual arithmetic operators: +, -, *, /
     ```php
     <?php
     $x = 2;
     $y = 4;
     $z = $x + $y;
     print $z; // ==> 6
     ```
   * string concatenation: .
     ```php
     <?php
     $first_name = "Fred";
     $last_name = "Flintstone";
     $full_name = $first_name . " " . $last_name;
     print $full_name; // ==> 'Fred Flintstone' (without the quotes)
     ```


* Functions
   * encapsulate snippets of code to be executed
   * you can write your own functions
     ```php
     <?php
     function printEmailHeader($to,$from) {
       print("From: " . $from . "\n");
       print("Date: " . date("Y-m-d H:i:s") . "\n");
       print("To: " . $to . "\n");
     }
     printEmailHeader("mickey@disney.com", "bugs@disney.com");
     ```
     > ```
     > From: bugs@disney.com
     > Date: 2013-04-03 12:02:22
     > To: mickey@disney.com
     > ```
   * there are hundreds of built-in functions; see http://php.net/manual/en/funcref.php for reference.

* Variable Scope
   * global
     ```
     <?php
     $x=5;
     ```
   * local
     ```
     <?php
     $x=5; // global scope
     
     function myTest() {
       print $x; // local scope
     }
     
     myTest(); // ==> no output!
     ```
   * static
     <br>(rarely used)
   * parameter - like local but value passed to function
     ```
     <?php
     $x=5; // global scope
     
     function myTest($x) {
       print $x; // parameter scope
     }
     
     myTest(12); // ==> 12
     ```

* Control Structures

   * `if`
```php
<?php
$t=date("H");
if ($t<"20") {
  print "Have a good day!";
}
```

   * `if/else`
```
<?php
$t=date("H");
if ($t<"20") {
  print "Have a good day!";
}
else {
  print "Have a good night!";
}
```
   * `if/else if/else`
```
<?php
$t=date("H");
if ($t<"10") {
  print "Have a good morning!";
} else if ($t<"20") {
  print "Have a good day!";
} else {
  print "Have a good night!";
}
?>
```
   * `switch`
```
<?php
$favcolor="red";
switch ($favcolor) {
case "red":
  print "Your favorite color is red!";
  break;
case "blue":
  print "Your favorite color is blue!";
  break;
case "green":
  print "Your favorite color is green!";
  break;
default:
  print "Your favorite color is neither red, blue, or green!";
}
```

