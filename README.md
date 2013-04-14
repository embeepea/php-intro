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
   * parameters are passed by value by default
   * pass by reference via & prefix

* Variable Scope
   * global
     ```php
     <?php
     $x=5;
     ```
   * local
     ```php
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

   * global variales can be accessed anywhere by declaring them with the `global` keyword
     ```
     <?php
     $x=5; // global scope
     
     function myTest() {
       global $x;
       print $x; // global scope
     }
     
     myTest(); // ==> 5
     ```

* Conditionals

   * `if`

     ```php
     <?php
     $t=date("H");
     if ($t<"20") {
         print "Have a good day!";
     }
     ```

   * `if/else`

     ```php
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

     ```php
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

     ```php
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
     
   * colon syntax: if (...) : / endif;

   * ?: syntax: print ($a == $b) ? "yes" : "no";

* Loops

   * while

     ```php
     <?php
     $i=1;
     while ($i<=5) {
         print "The number is " . $i . "\n";
         $i = $i + 1;
     }
     ```

     ```
     The number is 1
     The number is 2
     The number is 3
     The number is 4
     The number is 5
     ```

   * do ... while
     ```php
     <?php
     $i=6;
     do {
         print "The number is " . $i . "\n";
         $i++; // (same as $i = $i + 1;)
     } while ($i<=5);
     ```

     ```
     The number is 6
     ```


   * for
     ```php
     <?php
     for ($i=1; $i<=5; $i++) {
         print "The number is " . $i . "<br>";
     }
     ```

     ```
     The number is 1
     The number is 2
     The number is 3
     The number is 4
     The number is 5
     ```

* Arrays

   * arrays are variables that store more than one value

     ```php
     <?php
     $foods = array('cake', 'carrots', 'coffee');
     print $foods[0]; // ==> cake
     print $foods[1]; // ==> carrots
     print $foods[2]; // ==> coffee
     ```
     
     ```php
     <?php
     $foods = array();
     $foods[0] = 'cake';
     $foods[1] = 'carrots';
     $foods[2] = 'coffee';
     print $foods[0]; // ==> cake
     print $foods[1]; // ==> carrots
     print $foods[2]; // ==> coffee
     ```

   * length of an array: `count()` function

     ```php
     <?php
     $foods = array('cake', 'carrots', 'coffee');
     print count($foods); // ==> 3
     ```

   * looping over the items in an array

     ```php
     <?php
     $foods = array('cake', 'carrots', 'coffee');
     for ($i=0; $i<count($foods); $i++) {
         print "Mark likes " . $foods[$i] . "\n";
     }
     ```

     ```
     Mark likes cake
     Mark likes carrots
     Mark likes coffee
     ```

   * the above are _indexed_ arrays
      * items within the array are indicated by their position, or index
      * index always starts with 0, then 1, 2, etc

   * _associative_ arrays

      * items are associated with an abitrary _key_ rather than an integer index

      ```php
      <?php
          $foods = array('dessert' => 'cake',  'vegetable' => 'carrots',  'drink' => 'coffee');
      ?>
      <table>
      <tr><td>Dessert</td><td><?php print $foods['dessert'];?></td></tr>
      <tr><td>Vegetable</td><td><?php print $foods['vegetable'];?></td></tr>
      <tr><td>Drink</td><td><?php print $foods['drink'];?></td></tr>
      </tr>
      </table>
      ```

      <table>
      <tr><td>Dessert</td><td>cake</td></tr>
      <tr><td>Vegetable</td><td>carrots</td></tr>
      <tr><td>Drink</td><td>coffee</td></tr>
      </tr>
      </table>

      * can also assign items individually

      ```php
      <?php
          $foods = array()
          $foods['dessert'] = 'cake';
          $foods['vegetable'] = 'carrots';
          $foods['drink'] = 'coffee';
          // same as: $foods = array('dessert' => 'cake',  'vegetable' => 'carrots',  'drink' => 'coffee');
      ```

   * _multidimensional_ arrays

      * an item in one array can be another array

      ```php
      <?php
          $foodprefs = array( 'Mark'      => array('dessert' => 'cake',         'vegetable' => 'carrots',  'drink' => 'coffee'),
                              'Caroline'  => array('dessert' => 'key lime pie', 'vegetable' => 'kale',     'drink' => 'kombucha'),
                              'Derek'     => array('dessert' => 'sherbet',      'vegetable' => 'spinach',  'drink' => 'sprite')    );

          function printFoods($name) {
              global $foodprefs;
              print "<b>" . $name . ":</b>\n";
              print "<table>\n";
              print "<tr><td>Dessert</td><td>" . $foodprefs[$name]['dessert'] . "</td></tr>\n";
              print "<tr><td>Vegetable</td><td>" . $foodprefs[$name]['vegetable'] . "</td></tr>\n";
              print "<tr><td>Drink</td><td>" . $foodprefs[$name]['drink'] . "</td></tr>\n";
              print "</table>\n";
          }
          printFoods('Mark');
          printFoods('Caroline');
          printFoods('Derek');
      ```

      <b>Mark:</b>
      <table>
      <tr><td>Dessert</td><td>cake</td></tr>
      <tr><td>Vegetable</td><td>carrots</td></tr>
      <tr><td>Drink</td><td>coffee</td></tr>
      </table>
      <b>Caroline:</b>
      <table>
      <tr><td>Dessert</td><td>key lime pie</td></tr>
      <tr><td>Vegetable</td><td>kale</td></tr>
      <tr><td>Drink</td><td>kombucha</td></tr>
      </table>
      <b>Derek:</b>
      <table>
      <tr><td>Dessert</td><td>sherbet</td></tr>
      <tr><td>Vegetable</td><td>spinach</td></tr>
      <tr><td>Drink</td><td>sprite</td></tr>
      </table>

* `foreach` - special kind of loop for dealing with arrays

   * `foreach` with indexed array

      ```php
      <?php
      $foods = array('bananna', 'beet', 'beer');
      foreach ($foods as $x) {
          print $x . "\n";
      }
      ```
      
      ```
      bananna
      beet
      beer
      ```

   * `foreach` with associative array

     ```php
     <?php
     $foods = array('dessert' => 'cake',  'vegetable' => 'carrots',  'drink' => 'coffee');
     foreach ($foods as $key => $value) {
         print $key . ' : ' . $value . "\n";
     }
     ```
     
     ```
     dessert : cake
     vegetable : carrots
     drink : coffee
     ```

   * `foreach` with multidimensional array

          ```php
          <?php
          $foodprefs = array( 'Mark'      => array('dessert' => 'cake',         'vegetable' => 'carrots',  'drink' => 'coffee'),
                              'Caroline'  => array('dessert' => 'key lime pie', 'vegetable' => 'kale',     'drink' => 'kombucha'),
                              'Derek'     => array('dessert' => 'sherbet',      'vegetable' => 'spinach',  'drink' => 'sprite')    );

          foreach ($foodprefs as $name => $foods) {
              print "<b>" . $name . ":</b>\n";
              print "<table>\n";
              foreach ($foods as $category => $food) {
                  print "<tr><td>" . $category . "</td><td>" . $food . "</td></tr>\n";
              }
              print "</table>\n";
          }
          ```

          <b>Mark:</b>
          <table>
          <tr><td>dessert</td><td>cake</td></tr>
          <tr><td>vegetable</td><td>carrots</td></tr>
          <tr><td>drink</td><td>coffee</td></tr>
          </table>
          <b>Caroline:</b>
          <table>
          <tr><td>dessert</td><td>key lime pie</td></tr>
          <tr><td>vegetable</td><td>kale</td></tr>
          <tr><td>drink</td><td>kombucha</td></tr>
          </table>
          <b>Derek:</b>
          <table>
          <tr><td>dessert</td><td>sherbet</td></tr>
          <tr><td>vegetable</td><td>spinach</td></tr>
          <tr><td>drink</td><td>sprite</td></tr>
          </table>
