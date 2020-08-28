## Smarkets Takehome
Hi! Thank you for inviting me to do this project. I had a lot of fun! I wanted to write down some notes on what I did and was thinking about, so that you have some context for my work.

### What I Did
As the prompt suggested, I made a simplified version of this page: https://smarkets.com/sport/football. The page basically gets all of the most popular events for a particular sport (in my case, tennis), and renders a list of the events. Upon clicking on one of the events, the user is taken to another page that has details about that event. There is one event that is this "main event," and this event has a bigger cell in the grid, as well as a picture. The user could also easily navigate from the details page back to the main page. As the prompt suggested, focused mostly on styling, best-practices, and overall UI.

### What I did well
I think the app looks great, and resembles a simplified Smarkets design. I also think I set up a scalable state management solution by using Redux (I know Smarkets does this too). For an app this small, I could have gotten away with Context or just regular old React, but I wanted to write something that would be a little more durable in the (hypothetical) long-term. I also think I have a good file-structure. I like to follow a structure where the Redux files are separated according to modules, each with their own action, actionsCreator, and reducer file. In theory, the "modules" directory, which right now only has one sub-directory, would contain the redux functionality of information (authentication, money info, etc.). Again, I wanted to set up something scalable.
I also think I wrote overall clean code, trying to follow best-practices when it came to working with React and managing state. I also think I wrote very readable and nicely organized CSS. Each major container basically has its own css file, which is then imported into a root css file that also has root stylings. I considered using styled-components or css modules, but this seemed like a small enough project that it would be ok for me use stylesheets.

### What I could have done better
Even though I think I wrote good CSS, if I were to do this again, I probably would have used styled-components. That would have saved me some time when it came to selecting elements, and probably would have made my code a little cleaner.
I also wish I had some time to write a few more tests. I was using redux, which makes react-testing-library a little more complicated--the way I like to do it, I use a utility functions that takes in another components as an argument, and then renders that components, wrapped in a Provider that has been passed a dummy store. That then enables me to test how data is flowing between components. It would not have been terribly complicated, but I did not want to keep you all waiting too long for a product.
If I were to refactor this, I would definitely do another pass on the JSX for accessilbity. I tried to use as semantic HTML as possible, but that's the kind of thing you could always do more of. I might have also run my code through a screen reader, just to double check that the page still makes sense.

### Additional Thoughts
I made the decision to implement some date functions in order to save myself the trouble of importing the enormous moment.js library. I only needed a little date functionality, so it was worth the extra coding on my part. They probably do not account for all edge cases (I would almost certainly use a library for a larger application), but they serve the needs of this app just fine. With a little more time withe API, I probably could have figued out way to have the events display also tell you when an event is actually live (right now any event that whose start time is earlier than the present time just say "HAPPENING NOW"), and some of the other timing related functionality on the Smarkets site. As I said, though, I think what I came up with is a good solution, given the scope of the application.

To start: npm start (I built it with create-react-app)

Anyway, like I said, I really enjoyed this project. Please let me know if you have any questions! I look forward to hearing from you.

All the best, 
Nick
