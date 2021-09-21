# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @enjoyyourfocal/lotide`

**Require it:**

`const _ = require('@enjoyyourfocal/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: return array[0]. 
Ex:   input : [1, 2]       =>   output : 1

* `function2(tail)`: return array.slice(1),
Ex:   input : [1, 2, 3, 4, 5]       =>   output : [3, 4, 5]

* `function3(middle)`: return middle of array element.
Ex ( Odd Array Length ):
         input : [1, 2, 3, 4, 5]       =>   output : [3]
Ex ( Even Array Length ):
       input : [1, 2, 3, 4, 5, 6]       =>   output : [3, 4]
       
* `function3(countLetters)`: count how many same letter in the sentence and return it as object.
Ex:   input : "Hello"       =>   output :{H : 1, e : 1, l : 2, o : 1}

* `function3(countOnly)`: count how many name in the array === the property name of an object with true value.
Ex:   input :      {Emy : true, Tom : false, Maro: true , Jake : true }     &&      [ Emy , Tom , Maro , Emy , Jake , Maro]         =>         output :{Emy : 2, Maro : 2, Jake : 1 }
  

* `function3(eqArrays)`:  Make sure that two arrays equal in length and values.
Ex:   input : [1, 2, 3, 4, 5]   &&  [1, 2, 3, 4, 5]      =>   output : true
Ex:   input : [3, 4, 5]            &&   [ 5, 6 , 2]           =>   output : false

* `function3(eqObjects)`: compairing two object have values of arrays 
Ex:   input : { c: "1", d: ["2", 3] }   &&   { d: ["2", 3], c: "1" }  =>   output : true

* `function3(findKey)`: found the key name of aspecific value (in this condition if the value of the stars =2  of an object
Ex:   input : {
"Blue Hill": { stars: 1 },
Akaleri: { stars: 3 },
noma: { stars: 2 }}                =>   output :  noma

* `function3(findKeyByValue)`: 
Ex:   input : ({
"sci_fi": "The Expanse",
comedy: "Brooklyn Nine-Nine",
drama: "The Wire",} , "The Wire")                =>   output : drama
                                    

* `function3(letterPositions)`: found the position for the letter 
Ex:   input : "Hello"    =>   output : { H : o, e : 1, l : [2, 3], o : 4}

* `function3(map)`:  it looping inside the array
Ex :   input : ["ground", "control", "to", "major", "tom"];     =>    outPut : ["g", "c", "t", "m", "t"]

* `function3(takeUntil)`: it is return the array from specific indix
Ex:   input : ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"]}   =>   output : ["I've", "been", "to", "Hollywood"]

* `function3(without)`: to remove an element
Ex:   input :( [1, 2, 3], [1])   =>   output : [2, 3]
