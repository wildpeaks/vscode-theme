<?php

class BaseClass {
	var $myproperty;
	function __construct($color = "green"){
		$this->myproperty = $color;
	}
	function mymethod(){
		return $this->myproperty;
	}
}
class ExtendedClass extends BaseClass {
 	var $cooked = false;
 	function __construct(){
		parent::__construct("blue");
	}
}

define('MY_CONSTANT', 'abc');
$var1 = MY_CONSTANT . "hello \n world";
$var2 = myfunction($va1, 123, null, true);
$var3 = array_diff_key($arr1, $arr2);
MyClass::mymethod();
$var4 = $string1 . $string2;
$var5["somet\nhing"];

if ($var6) {
	echo "Hello $var1";
} elseif ($var7) {
	$var8->mymethod();
	$var9->myproperty->mysubproperty = 123;
	# Single line comment shell-style
	// Single line comment c++ style
} else {
	/* Multiline */
}
?>

<div class="example">Hello world</div>
