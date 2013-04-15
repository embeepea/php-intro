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
     * `print_r` is a very useful debugging function
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
       $x = 2;
       print $x; // local scope
     }
     
     myTest(); // ==> prints 2
     print $x; // ==> prints 5
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

   * `array_keys` built-in function lists the keys of an associative array; very useful for debugging or
     reverse engineeing

      ```php
      <?php
      $foods = array('dessert' => 'cake',  'vegetable' => 'carrots',  'drink' => 'coffee');
      print_r( array_keys($foods));
      ```

      > ```
      > Array
      > (
      >   [0] => dessert
      >   [1] => vegetable
      >   [2] => drink
      > )
      > ```

   * `join` built-in function takes a string separator, and an indexed array, and returns a string obtained by
     concatenating all the elements of the array, with the separator between them

      ```php
      <?php
      $items = array('chair', 'couch', 'table');
      print join(", ", $items);
      ```

      > ```
      > chair, couch, table
      > ```

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

#Exercises

The file `weather.php` contains some station and weather
observation data for a collection of weather stations in NC.  It
defines two global variables: `$stations`, and `$data`.

The `$stations` variable is an (indexed) array containing
information about the weather stations; each entry in the array is
an (associative) array with the following keys: `state`, `id`,
`lat`, `lon`, `elev`, and `name`.

The `$data1` variable is an associative array giving some (fictitious) temperature
and precipiation records for each station.  The keys in this array are station
ids.

<!-- ***************************************** -->
##*ex1.php*

Download a copy of 'weather.php' and type the following code into a file named *ex1.php*.
This program loads `weather.php` and prints out the details for the 3rd station in the list:

```php
<?php
include('weather.php');

print_r($stations[2]);
```

Run ex1.php both from the command line, and from a browser.

<!-- ***************************************** -->
##*ex2.php*

Make a copy of ex1.php called ex2.php, and modify it to
format the results in an HTML table so that it looks something like
the following:

<table>
<tr>
<td>id</td>
<td>state</td>
<td>lat</td>
<td>lon</td>
<td>elev</td>
<td>name</td>
</tr>
<tr>
<td>USW00003812</td>
<td>NC</td>
<td>35.4319</td>
<td>-82.5375</td>
<td>645.3</td>
<td>ASHEVILLE RGNL AP</td>
</tr>
</table>

<!-- ***************************************** -->
##*ex3.php*

Make a copy of ex2.php called ex3.php, and modify it so that it accepts
a parameter called `i` which is the index of a station in the list, and prints the details
for the i-th station in the list.  So, for example, you should be able to see the details
for the _ASHEVILLE RGNL AP_ station by going to a URl of the form

http://dev.nemac.org/~username/ex2.php?i=2

<!-- ***************************************** -->
##*ex4.php*

Create ex4.php from ex3.php by changing it so that instead of taking a parameter `i`
which is the index in the list, it takes a paramter `id` which is the id of the station.  You should
now be able to see the details for the _ASHEVILLE RGNL AP_ station by going to a URl of the form

http://dev.nemac.org/~username/ex2.php?id=USW00003812

<!-- ***************************************** -->
##*ex5.php*

Write a program that creates an itemized (HTML `ul`) list of all the station names in the list.
The output of your program should start out looking something like this:

* DURHAM 11 W
* HICKORY FAA AP
* ASHEVILLE RGNL AP

but it will have many more entries in the list --- one entry for each station in `weather.php`.


<!-- ***************************************** -->
##*ex6.php*

Modify your ex5.php so that each station in the list is a link to the details page for that station
as generated by your _ex4.php_.

<!-- ***************************************** -->
##*ex7.php*

The `$data` variable defined in _weather.php_ is a multidimensional array which is accessed as follows:

```
$data[ID][ELEMENT][YEAR][MONTH][DAY]
```

where

* *ID* is a station id
* *ELEMENT* is either 'TEMP', or 'PRCP'
* *YEAR* is a 4-digit year
* *MONTH* is a 0-based month number (0 corresponds to January, ...)
* *DAY* is a 0-based day number

Write _ex7.php_ by modifying _ex6.php_ so that it prints a list of the
years for which temperature ('TEMP') data is available for each
station along with each station name.  Hint: use the array_keys() and
join() functions.

<!-- ***************************************** -->
##*ex8.php*

Make a copy of your _ex4.php_ called _ex8.php_, and modify it so that along with the station details, it prints
the temperature at the station for April 15, 2010.    Your program's output should look something like this:

> <table>
> <tr>
> <td>id</td>
> <td>state</td>
> <td>lat</td>
> <td>lon</td>
> <td>elev</td>
> <td>name</td>
> </tr>
> <tr>
> <td>USW00003812</td>
> <td>NC</td>
> <td>35.4319</td>
> <td>-82.5375</td>
> <td>645.3</td>
> <td>ASHEVILLE RGNL AP</td>
> </tr>
> </table>
> 
> Temperature on April 15, 2010: 49.5

<!-- ***************************************** -->
##*ex9.php*

Write _ex9.php_ by modifying _ex8.php_ so that in addition to taking
an `id` parameter, it takes the three additional parameters `year`,
`month`, and `day`, and it prints the temperature for the given
station for the given year, montha, and day.  The month and day
parameters should be 1-based month and day numbers.

<!-- ***************************************** -->
##*ex10.php*

Add precipitation results to _ex9.php_.  Also enhance your program so that if the year, month, or day numbers are not valid or
data is not available for the requested day, it prints an error message.

<!-- ***************************************** -->
##*ex11.php*

Enhance your _ex10.php_ so that in addition to printing the temp and precip values for the requested station and day, it also
prints the average temperature for the month (whichever month the requested day is in), and the total precipitation amount for
that same month.

