# The DOM Challenge

If you open up index.html in the browser, you'll find a small application. It has a few features:

* A Counter that increases by 1 each second
* Plus and Minus buttons that increment or decrement the counter
* A 'like' button (❤️) that adds a 'like' for the number that is currently displayed by the timer
* A comment box that adds comments when submitted

First, take a few minutes to explore and test out the behavior of the page. Think about how each of the features must work. What must be happening underneath each of these features?

The challenge is to reverse engineer these features and build them yourself, using what you've learned about JavaScript and DOM Manipulation.

## Rewriting the functionality

To begin, comment out the script tag linking to `js/index.min.js` in the html file.

Write your code in `js/challenge.js` - it's already included in the HTML via a `<script>` tag, so when you add your code, it will run on the page.

Add the following features one by one, refreshing the page to see your functionality working as you build.

> Note: These deliverables are written in the form of _User Stories_. They describe the features from the perspective of a user when they visit the page.

1. As a user, I should see the timer increment every second once the page has loaded.

  should be SetInterval(somefunctionthataddsasecond, 1000ms)

2. As a user, I can manually increment and decrement the counter using the plus and minus buttons.
plus minus on each button

3. As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
  when like button is hit(heart) grab the number from the counter and... display likes somehow

4. As a user, I can pause the counter, which should 

  * pause the counter
    stop counter
  * disable all buttons except the pause button
    how do we disable buttons?
  * the pause button should then show the text "resume."
    if counters running show pause, else (must be paused) and show resume

  When 'resume' is clicked, it should restart the counter and re-enable the buttons.
5. As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

add comments to that list based on the input field

## Hint for the timer

If you're not sure how to create or pause a timer, look into:
[`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)
[`setInterval`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
[`clearinterval`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval)


<p class='util--hide'>View <a href='https://learn.co/lessons/jsdom-dom-challenge'>DOM Challenge</a> on Learn.co and start learning to code for free.</p>
