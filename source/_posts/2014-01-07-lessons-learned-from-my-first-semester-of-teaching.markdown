---
layout: post
title: "Lessons learned from my first semester of teaching"
date: 2014-01-31
categories: [Web Development, Teaching]
---
About a year and a half ago I started researching the web development offerings at Notre Dame and found that there wasn't a basic web development course. There were courses covering web design, javascript, mobile application development, and others, but nothing that covered the basics of getting into semantic HTML, CSS, and RWD. Taking a bit of a chance, I reached out to several departments to see if any of them would be interested in a new course. I received a fairly quick response from the [Computer Applications Program](http://capp.nd.edu/) and we quickly put together a plan to offer a course titled "Introduction to Web Development".<!--more--> The class description was "The goal of this course is to provide working experience with the full range of front-end technology needed to produce a modern website. The course will cover Planning, Discovery, Information Architecture, Wireframing, Semantic HTML Markup, CSS Layout and javascript. Emphasis will be placed on building sites that can be viewed on any device using Progressive Enhancement and Responsive Web Design/Development". We ran the course in the Fall of 2013. I was left to my own devices as to the course material, what we covered, grades, tests, quizzes, etc. Below I'll cover those resources and material, as well as what worked, what didn't, and what I'd change if I do it again.

<img src="/images/2014/teaching-seeking-knowledge.jpg" alt="I have only come here seeking knowledge, things they would not teach me of in college - The Police" title="I have only come here seeking knowledge, things they would not teach me of in college - The Police">

## Basics

First and foremost, time is going to be an issue. I taught the class in addition to my full-time job, and it took place during business hours. Luckily I had the support of both my department, team, and boss. So in addition to class and preparation time, I also needed to make up for the time I missed in the office. Even though I knew from talking with other adjunct professors that it was going to take a lot of prep, I still wasn't prepared for how much time it actually took every week to prepare class outlines, quizzes, projects, code examples, etc. And that doesn't count grading projects afterward.

Whether we realize it or not, we use A LOT of jargon in our industry. Be careful that whenever you use an acronym or term that's new for the students, take some time to explain it. I would recommend keeping a list of terms and definitions somewhere easily accessible to the class of any term you explain. And then when a student asks about a missing term, add it to the list.

## Grading

The course took place over 28 classes. Grading was based on the following:

- 16 Quizzes 30%
- 22 Projects 40%
- Final Project 30%

The quizzes were used to make sure the students completed their reading assignments. Each one consisted of three multiple-choice questions based on the material we were to cover that class, and were based on the reading. Quizzes were administered at the beginning of class with a 4-minute time limit, and were open-book. So while it was certainly possible for a student to skip the reading and just try and look up the answers during the quiz, the time limit made it practically impossible to do so and get them all correct. I went with open book because it's simply not possible to memorize every technical issue in web development. If you're a developer, just stop and think how often you hit the search engines to look up some minutia of our craft that you can't quite remember. But if the student did the reading, and couldn't remember a technical issue exactly, they should be able to find it quickly enough to confirm their answer.

Projects were used to allow the students to practice what was covered in class in a practical way. This allowed the students to take what was just discussed and apply it in some way that could help them understand it in more depth.

In retrospect, I would probably drop to 20 projects, make quizzes worth 20% and projects worth 50%.

## Materials

[<img class="alignright" alt="Learning Web Design book cover" title="Learning Web Design book cover" src="/images/2014/teaching-learning-web-design.jpg">](http://amzn.to/16fVcJf)

The only required materials for the course was [Learning Web Design, 4th Edition](http://amzn.to/16fVcJf) by [Jennifer Robbins](https://twitter.com/jenville). This book covers most of the basics needed for the aspiring web developer. It has enough on each topic to provide a good intro on which we could expand in class. All other topics not covered were supplemented by articles freely available on the web.

## Tools

I allowed the students to pick their own text editor for the class, but I provided a list of recommendations. I required all students use Chrome for testing. With Chrome's aggressive auto-updates, I could be fairly certain we'd all be on the same version. So that way if the code worked for the student, it would work for me when grading projects. Chrome also has excellent support for modern HTML/CSS and (arguably) the best developer tools.

All students were also required to open [Codepen](http://codepen.io/) accounts and [GitHub](https://github.com/) accounts. Codepen for simple testing and tinkering, and GitHub for later the semester when we covered source control.

For projects, students hosted all files on their university provided "webfile" spaces or Codepen. I learned after the class ended that [GitHub offers students free private repos](https://github.com/edu). Next time I will definitely go that route. We didn't cover source control or GitHub until near the end of the semester, and in retrospect, this should be moved into the first or second week. Some students had a workflow of creating multiple copies of a file when trying new things. With Git they could simply create branches. Couple that with the private repos and we could end up with a nice workflow for assignments.

## Topics

Below are the topics that we actually ended up covering. I had to cut some from my original list due to others taking longer than I had planned.

- Introductor concepts
  - Mobile growth
  - Progressive Enhancement
  - RWD
- Markup/HTML (4 classes)
- CSS (6 classes)
- Chrome Developer Console
- Media Queries
- ARIA Landmark Roles
- Microformats
- Wireframing
- Style Prototypes
- CSS Transitions/3D Transforms
- Javascript/jQuery (6 classes)
- Analytics
- Git and GitHub Pages
- Markdown
- Flexbox
- Sass

Some of the topics were limited to a single class while some of the broader topics (HTML/CSS/Javascript) took weeks to cover adequatly.

## Final Project

I allowed the students to come up with a concept of their own choosing with the requirement that certain features/functionality be implemented.

- Project document (5 points): a README file that outlined the goal of their project and where custom functionality (CSS transforms/javascript interaction) was implemented
- Wireframes (10 points): Mobile, tablet and desktop wireframes for all major layouts
- HTML (15 points): Requirements included valid HTML, ARIA Landmark Roles, minimum of three pages, a valid hCard, etc.
- CSS (10 points): Requirements included mobile-first RWD, two CSS animations, at least two breakpoints, etc.
- Javascript (10 points): Requirements included the presenence of a number of user interactions, console logging, element info reporting, etc.

I found this approach had a couple of advantages. First, since the project was of their own choosing, it gave the students the opportunity to work on a topic that they enjoy. Some of the submissions included history and rules of various sports, a Harry Potter fan site, a Halo fan site (on which the student successfully Rick-rolled me), and an overview of a Humans vs. Zombies game that's played on campus. The second advantage was that this approach saved my sanity. Since I had twenty-eight students, grading this final took a lot of time. So the variety of sites was extremely welcome. It was also interesting to learn more about the interests of the students I'd spent so much time with.

## Wrapping up

I've had great discussions with other developers on campus that teach classes at Notre Dame. The concensus is that the first attempt is definitely the hardest. There's an incredible amount to learn about how to structure and conduct a technical class. And even after having numerous discussions with them prior to the start of class, there's still a lot I had to figure out on my own. But in the end, I'm very glad I took the risk and time to teach. It's amazing how the process of teaching your craft really makes you break down the what's, how's, and why's of our everyday.
