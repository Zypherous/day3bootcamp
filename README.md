#Day 3 Boot Camp#

##Rest and Spread Operators##

    Rest (...)
    spread (...)

   ###Rest Operators###

    rest --> Can take multiple arguments in parameter eg:  function test (...args){}

    if you make a function like this: function test(parameter, parameter2, ...args){}

    test(2,4) --> 2 goes to parameter, 4 goes to parameter2

   ###Spread Operators###

   breaks down an array and takes the arguments look at index.js

   ###Arrays###

   Array.isArray(arrayName) --> returns boolean whether array or not is

##DOM DOCUMENT OBJECT MODEL##

    ###HTML VS DOM##

        converts html into a tree structure:


    ###Changing the DOM###

        ###Changing CSS Classes###
            className attribute is a string of all of a Node's classes.
            classList 
            
        ###Creating an Element###
            Create an Element
                - document.createElement(tagName)
            Duplicate an existing Node
                -  node.cloneNode();