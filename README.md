# Interviewing

Successfully passing phone screens and whiteboard interviews requires four things:

1. Knowledge of Big-O notation
1. Familiarity with common data structures and their advantages/disadvantages
1. Practicing interview-style questions
1. Familiarity with programming techniques commonly used in interviews

## Contents

1. [Common Data Structures](#common-data-structures)
1. [Interview Questions](#interview-questions)
1. Common techniques (coming soon)

## Common Data Structures

Be able to quickly implement these data structures and their common operations in your language(s) of choice.

### Singly Linked Lists

Operations: append, prepend, insert, delete, find, traverse

### Doubly Linked Lists

Operations: append, prepend, insert, delete, find, traverse

### Binary Trees

Operations: insert, delete, find, traverse

### Binary Search Trees

Operations: insert, delete, find, traverse

### Stack

Operations: push, pop, peek

### Queues

Operations: enqueue, dequeue

### Priority Queues

Operations: enqueue (with priority), dequeue (with highest priority)

### Min and Max Heaps

Operations: find-max/min, insert, delete-max/min, delete-max/min, replace

### Trie

Not to be confused with a tree.  See https://en.wikipedia.org/wiki/Trie

Operations: insert, delete, find, exists

## Interview Questions

1. Implement a stack that supports "max" in O(1) time and O(n) space
1. Implement a queue using two stacks
1. Write a function that detects whether {},(),[] brackets are properly nested.  Here "properly" means that an inner pair of brackets must be closed before any outer brackets, a la HTML tags.
1. Write a function to reverse an array in place.
1. Write a function that takes in an amount of money and denominations and returns the number of ways to arrive at the amount with those denominations.
1. Given an array of stockPricesYesterday, indexed by minutes since market open, write an algorithm for finding the maximum profit from a single share (no shorting allowed).
1. Write a function that takes a string with parens and the position of an opening parens and returns the position of the specified opening parens' closing pair.
1. Given an (N+1)-element array in which every integer 1..N appears once except for ONE number which appears twice, return the number which appears twice.
1. Write a function that takes a string as input and checks whether _some_ permutation of the input string is a palindrome. O(n) time and space.
1. Write a function that checks whether a given Binary Tree is a valid Binary Search Tree.  O(n) time and space.
1. Given a list of unsorted scores and a highest possible scores, return a sorted list of scores in less than O(nlog(n)) time.
1. Given a function rand7() that returns a random integer from 1 to 7 with equal probability, write a function rand5() that returns a random integer from 1 to 5 with equal probability.
1. Given an array_of_ints, find the highest_product you can get from three of the integers in O(n) time and O(1) space.  Can you generalize highest product of 4?  Highest product of _k_ for arbitrary k?
1. Write a TemperatureTracker class that supports:

    - insert() — records a new temperature
    - get_max() — returns the highest temp we've seen so far
    - get_min() — returns the lowest temp we've seen so far
    - get_mean() — returns the mean of all temps we've seen so far
    - get_mode() — returns the mode of all temps we've seen so far

    Recorded temperatures are integers and degrees are celsius, always between 0 and 100.  Optimize for space and time, favoring the `get_` methods over the `insert` method.  If there is more than one mode return an array.  You can get O(1) time and space for all methods.
1. Given a linked list, detect whether it contains a cycle.  Can be done in O(n) time and O(1) space.
1. Given a list of ranges, return a condensed list of ranges, i.e., the smallest list of ranges that encompasses the same total range as the original list.  Can be done in O(nlog(n)) time.
1. Compress a collection of URLs
1. Write a function that shuffles an array in place.
1. Write a function that takes two rectangles as input and returns a new rectangle representing their intersection.  Rectangles are represented as maps containing (x,y,height,width) keys.
1. Write a function that detects whether a given binary tree is balanced or not — can be done in O(n) time and space.
1. Write a recursive function for generating all permutations of an input string, returning them as an array.
1. Given an array of n+1 integers in the range 1..n, write a function that returns a list of all the integers that appear more than once in the input array.  Optimize for space - can be done with O(1) space and O(nlog(n)) time without destroying input.
1. Write a function that reverses a linked list.  It should take as input the head of the list and return the new head and can run in O(1) space + O(n) time.
1. Given a deck of cards and two "half decks", determine whether the deck of cards could have been produced by a "rifle" of the two halves.  Assume the deck contains 52 unique cards, identified by the integers 1..52.  O(n) time, O(1) space.
1. Write a function to find the 2nd largest element in a binary search tree.
1. Write a "flight movie picker" function that detects whether there are two movies watchable on a single flight.  Function should take an integer flight time and an array of integer movie times (all minutes) and return true/false.  Can do in O(n) time and O(n) space.
1. Given a rotated array of alphabetically sorted strings, return the "rotation" point.  Can do in O(log(n)) time and O(1) space.
1. Given a sorted array of integers, write a function that checks whether a given integer is in that array.  Can be done in O(1) space and O(log(n)) time.
