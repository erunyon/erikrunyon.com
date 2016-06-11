---
layout: post
title: "Using GitHub Education to Teach Web Development"
date: 2015-07-26
categories: [Web Development, Teaching]
published: true
---
This past Spring I once again taught an [Into to Web Development class](/2014/01/lessons-learned-from-my-first-semester-of-teaching/) at the [University of Notre Dame](https://www.nd.edu/). While the class structure didn't change too much other than updating for the various changes in web development that occured over the past 1.5 years, the way I had students turn in assignments changed quite a bit.<!-- more -->

Last time I taught the class, each student uploaded projects to their university assigned webfile space (a web accessible directory where code can be stored and viewed). While this worked ok, I really wanted to get the students into source control much sooner than last time, which was near the end of the semester.

## GitHub Education

[GitHub Education](https://education.github.com/) is a collection of resources for both instructors and students. The basic requirements for software, book, and services for the class were as follows:

- [Learning Web Design](http://amzn.to/1MuJEcA) by [Jennifer Niederst Robbins](https://twitter.com/jenville) (O'Reilly)
- Google Chrome
- [GitHub student account](https://education.github.com/pack)
- GitHub app for [Mac](https://mac.github.com/) or [Windows](https://windows.github.com/)
- GitHub's [Atom text editor](https://atom.io/) (unless the student already had a preferred text editor)

### For the instructor

An instructor can apply for an account that can be used to host course material. I signed up for an organization account which allows for a few private repos, and started by setting up two repositories for the class, one was public and contained the [basic materials](https://github.com/CAPP30370-SP15/materials) for the course. The second is a private repository containing all of the assignments, code samples, and project files. Each student cloned these repositories to their machines, so whenever I assigned a new project, especially if the project had starter code, they simply had to sync the repo and they'd be up and running.

### For the student

Students can apply for a [Student Developer Pack](https://education.github.com/pack) which includes a number of useful tools, but most important in this case, five private repos. I contacted my class prior to the start of the semester and had them go through the sign-up process since it can take some time to get approved. Once each student had their GitHub account set up, I had each set up a private repository for the course with a README and a "projects" folder. I also had them add me as a collaborator on the repo. Inside the projects folder is where they would place each of the twenty-two coding projects and the final project they were required to complete over the course of the semester. This setup provided them a way to get used to the concept and workflow of using source control, a private place to store their code, and an easy way for me to download and test their projects.

## Syncing student code

When you're dealing with around twenty private student repositories, finding a way to pull the code quickly and easily was very important. To do this, I used the following Bash command (assigned to an alias) that would loop through each of my students repositories. I cloned all student repos to a single directory, so the script simply has to loop through them.

<pre><code>for dir in ~/capp30370/student-projects/*; do (cd "$dir" && echo $(basename $dir): && git pull); done</code></pre>

I have the script echo the directory name so if there happened to be a conflict of some sort, I would know which student and could address on a case-by-case basis.

I found this workflow to work quite well. Most of the students have since made their class repositories public, some because they want to use the projects as part of a portfolio. I've also noticed that several students have created additional repositories for projects in their other classes. I believe that getting the students into source control first thing proved to be quite an advantage for both the students and myself. And for the student who's hard-drive died half-way through the course, being able to simply clone all of his projects down to his new computer served to highlight the value of distributed source control.