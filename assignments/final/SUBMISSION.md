Name: Elton Nhan
Student ID: 923660358
GitHub Username: Elton0000
Assignment Number: 4
Github Repository: https://github.com/Elton0000/CSC317
Github Pages: https://elton0000.github.io/CSC317/assignments/assignment-4/index

Assignment 4: The Exciting World of JavaScript
Description: The goal of this assignment was to make a near 1 to 1 copy of a phone app's calculator with the use of HTML, CSS, and Javascript. So that's exactly what I attempted. First I structured the calculator with a combination of divs and input tags(completely forgot about forms until I saw some code snippets in class), a bit sloppy but it was functional. Then I used CSS to put everything in their correct positions albeit not the cleanest looking calculator. With some more CSS, the calculator became more alive with some motion effects. Then finally, after a very long session of Javascript, the calculator is mostly functional with the exception of a few edge cases.
-Using the negate in succession does not look like how it should on IOS calculators, and also applies *-1 on repeat reather than taking away a *-1 and reapplying it
-I couldn't get % to work as a modulo operator
	x 5%5 returns 0 on IOS calculators while 5%5 on my calculator returns 0.25 because it treats the calculation as 5 / 100 x 5
-There's also a weird visual when inputing an integer -> operator -> %
	x Instead of replacing the operator with %, it removes itself
	x Doesn't seem to bug out the code though, just needs an extra step
-Unsure of how to correctly use flash button and the keymap stuff
-Tried to implement the Memory Functions, and they mostly work
	x the M- function was especially hard since I needed to flip the order of operations to make the program work like how it would on 		mobile calculators (I don't know how it works on IOS, only what I saw google explain)
Challenges: 
-I don't know how I'll ever get better at CSS, trying to get everything to be as perfect as possible grates my nerves. The validator was really helpful in letting me know which properties worked with what tags.
-One of the most annoying things I've had a chance of experiencing now that I've done my work in Javascript, is having no visible errors. In Java and C++, even if the compiler isn't the most helpful at times, they'll let you know when you've done something wrong. I didn't realize how scary logical errors were until I worked with this programming language. For example, in the middle of my code, ocassionally I'll right something like document.getElementById(value).innerHTML = "GUAVA"; just so I can check to see that my code works in that section; but then because I forgot the quotations by "value", nothing happens and I'm just scratching my head for 30+ minutes.
-My code is plagued with if and else statements(I'm sorry), and sometimes it get's kind of hard to track where in the program my code is heading towards.
Additional Features:
-The Memory Functions?
Acknowledgement
-W3Schools helped a lot
-Not my proudest moments, but I did have ChatGPT analyze some of my code when I was trying to debug it as the due date drew closer
-Some of the code posted on Canvas I just copy and pasted into mine
	xAlso marked in js file under "Borrowed Code" comment