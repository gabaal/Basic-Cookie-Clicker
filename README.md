# Cookie Clicker

## User Stories
- [x] As a user, I want to be able to click the cookie and increment the counter
- [x] As a user, I want to see the counter automatically increment using an interval timer
- [x] As a user, I want to purchase items i can afford in the shop and increase the number of cookies every time the interval passes

## Requirements
- [x] Create state variables to store the current number of cookies and the cookies PerSecond value (useState)

- [x] Set up a timer to increment the number of cookies by the cookiesPerSecond value (useEffect). Be sure to handle clearing the timer using the useEffect return value.

- [x] Set up an array of objects containing the items available for purchase in the store, their cost and their increment increase value. Map through these and create buttons for each.

- [x] Create a function to handle the purchase of an item. This should check if the user has enough cookies to purchase the item, and if so, subtract the cost of the item from the number of cookies and add the increment value to the cookiesPerSecond value.

## Stretch Goals
- [x] Store the cookies and cookiesPerSecond values in localStorage so they persist between page refreshes
- [ ] 
![cookie_clicker_wireframe](https://github.com/gabaal/Cookie-Clicker/assets/36296159/7d3406a8-98fa-4ded-bcd8-d93013efb52c)

![cookie_clicker](https://github.com/gabaal/Basic-Cookie-Clicker/assets/36296159/4a3f083a-23dd-4527-a0e6-00c693c6ffcb)


## Steps
1.  - [x] Create basic game; counter +1 cookie per second and a button to increase cookies by 1
2.  - [x] Seperate the App.jsx into seperate files each component (counter, timer)
3.  - [x] Add a reset button
4.  - [x] add upgrades / shop
5.  - [x] fix the bug that stops the CPS working while clicking the cookie
5.  - [x] save and retrieve game state from local storage
6.  - [x] Reset button needs to clear the local storage not just reset it to original game state
7.  - [x] Test live site via Render and Vite
8.  - [x] add on hover CSS for the buttons
9.  - [ ] animate the cookie
10. - [ ] Apply some decent CSS
11. - [x] Move the upgrades array to a seperate file?
12. - [ ] Try and move as much as possible from the App.jsx file to seperate component files.

## Issues
Missed that i had to import images into the component files that use them, took ages to sort out!
Ran out of time but I wanted to move as much as possible from the App.jsx file into the seperate component files.
I need to practise this a lot more, it is surprising how quickly the code base can grow and how difficult it is to remember which variables are used where!
