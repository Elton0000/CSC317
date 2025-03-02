Name: Elton Nhan
Student ID: 923660358
GitHub Username: Elton0000
Assignment Number: 3

Portfolio Styling Assignment: Human vs. AI CSS Challenge
Description:
The idea is to make a webpage resembling a portfolio using our knowledge of html accumulated over the course of the first 3-4 weeks of instruction.

Approach / What I Did:
First I started with the html tag, and then kept shoving things in between that until I got everything I wanted. I used many section,article, and anchor tags for the brunt of the assignment. For the layout, I just followed layout instructions as explained in class. 

<html>
	 <head>
		<meta tags>
		<link rel> Favicon
		<title>
	</head>

	<body>
		<section>
			<article>
		<footer>
			<form>
	</body>
</html>

This is the general structure I had followed. I'd imagine that there's nothing debatable about the top half of the structure, but as for the bottom half, here's my reasonings.
	Articles inside of Sections and not vice versa I thought of articles as referring to the text within a section of a paper. Sections are the surrounding space, articles are the text in said space.
 	For footers and forms, to be honest, it just looks like a header tag under a different name to me; my IDE, VisualStudios, insisted that it belonged to the bottom of the page, and worked like a section tag, so I just decided that, that would be the last grouping tag that I used in my file. 

Code Explanation:
One part of code I wanted to highlight was this:
            
	<section>
        <header style = "font-size: 25px" id = "Courses" ><h2>Courses</h2></header>
            <ol>
                <li style = "font-size: 20px"><a href ="https://bulletin.sfsu.edu/courses/csc/">CSC 101 Introduction to Computing</a></li>
                <li style = "font-size: 20px"><a href ="https://bulletin.sfsu.edu/courses/csc/">CSC 215 Intermediate Computer Programming</a></li>
                <li style = "font-size: 20px"><a href ="https://bulletin.sfsu.edu/courses/csc/">CSC 220 Data Structures</a></li>
                <li style = "font-size: 20px"><a href ="https://bulletin.sfsu.edu/courses/csc/">CSC 230 Discrete Mathematical Structures for Computer Science</a></li>
                <li style = "font-size: 20px"><a href ="https://bulletin.sfsu.edu/courses/csc/">CSC 300GW Ethics, Communication, and Tools for Software Development - GWAR</a></li>
                <li style = "font-size: 20px"><a href ="https://www.ccsf.edu/node/162671">Calculus 1</a></li>
                <li style = "font-size: 20px"><a href ="https://www.ccsf.edu/node/162676">Calculus 2</a></li>
                <li style = "font-size: 20px"><a href ="https://math.sfsu.edu/courses/425">MATH 425 Applied and Computational Linear Algebra</a></li>
             </ol>  
        </section>
 
Was a little upset that my hyperlink could not take me to a specific section of the inputted websites. I looked at the source code of specifically the first 5 list items where they directed you to a page of CSC pages, but each section had the same id, so it was basically impossible to work with.