# Cookie Clicker

## User Stories
🐿️ As a user, I want to be able to click the cookie and increment the counter
🐿️ As a user, I want to see the counter automatically increment using an interval timer
🐿️ As a user, I want to purchase items i can afford in the shop and increase the number of cookies every time the interval passes

## Requirements
🎯 Create state variables to store the current number of cookies and the cookies PerSecond value (useState)

🎯 Set up a timer to increment the number of cookies by the cookiesPerSecond value (useEffect). Be sure to handle clearing the timer using the useEffect return value.

🎯 Set up an array of objects containing the items available for purchase in the store, their cost and their increment increase value. Map through these and create buttons for each.

🎯 Create a function to handle the purchase of an item. This should check if the user has enough cookies to purchase the item, and if so, subtract the cost of the item from the number of cookies and add the increment value to the cookiesPerSecond value.

## Stretch Goals
🏹 Store the cookies and cookiesPerSecond values in localStorage so they persist between page refreshes

![cookie_clicker](https://github.com/gabaal/Basic-Cookie-Clicker/assets/36296159/4a3f083a-23dd-4527-a0e6-00c693c6ffcb)


## Steps to follow
1.  Create basic game with counter +1 cookie per second and a click me button to increase cookies by 1
2.  Add a reset button
3.  add upgrades /shop
4.  save and retrieve game state from local storage
