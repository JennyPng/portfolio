---
title: "Portfolio Dev Log"
date: "2025-07-4"
excerpt: "Documenting the thought process and learnings behind creating my current portfolio website"
---

> Documenting the thought process and learnings behind creating my current portfolio website, aka what you're looking at right now

## goals
I made my first portfolio website over winter break of freshman year (undergrad) to buff up my barren resume for an application to a robotics club.

![image](https://jennypng.netlify.app/images/Pasted-image-20250408210613.png)

I mocked it up in Figma, watched 3-4 Youtube tutorials on making a portfolio with just html/css, did some hacky CSS styling, and very minimal javascript. I like certain visual elements, but it’s a little plain, and not as responsive as it could be.

- I wanted to make a new portfolio website that better showcases my experience, taste, and personality
- I've been interested in fun digital expriences lately (see [websites I like](https://jennypng.netlify.app/cs-concepts/websites-i-really-like)) and I figured redoing my portfolio would be a casual but interesting way to learn how to implement fun visuals and interactions
- I also really wanted to add a blog section because I love documenting thought processes behind projects, and this would be the ideal location


I got the most frontend experience from working on a recent project, Jam Journal. Before this, I had some React and HTML/CSS experience
but not enough to comfortably describe my skill level as intermediate. That project was a bit rushed because I was working on it in a 
6 week build space - I wanted to use this portfolio revamp, something with no real deadline, as a chance to go slowly, code cleanly, and really strengthen
my foundational knowledge.

Exploring what really feels like *me.*

## process
- I made a Figma mockup as a rough sketch of what I wanted
- I started coding at the Osaka airport lol, and coded a bit on the high-speed rail in China
- I started with setting up the css theme and the card component, which was straightforward as it was similar styling to my old website
- The project gallery was a more revised section, and I tackled this next
- I filled in my project details, refined the css on the home page
- I then added blog functionality, referencing friends' repos and random medium articles - I wanted something simple and lightweight
- After the basic blog functionality existed, I decided to switch to adding playful visual elements, which I soon discovered would be the hardest part of this whole revamp as I had little experience


## challenges
- **Project gallery**: 
    - I struggled a little with how to layout the project cards. I discovered that what I needed was a masonry layout. I attempted to use CSS grid,
as I read this was good for 2D layouts over flex, but it was a bit rigid - cards in the same row were forced to be the same height. 
    - I found a work-around by changing grid to a column layout, but this meant the project content order was in the column direction rather than row (i.e. most recent projects are in the first column and not the first row). Settled with this for now, will probably look into external libraries later.
- **Animations**: I really wanted to add some fun, animated visual elements. 
    - I knew of anime js, motion js, and gsap - I chose to try anime js because their website is awesome
    - v0 and cursor were useful for starting out, to see how the specific things i need can be done; but when it comes to visually creative and artistic designs, it struggles severely
- **Playful design**: how to balance play and work - a formal portfolio with room for whimsy?

## learnings
(literally anything new i learned that i think is worth remembering)

- anything with repeated styling should have data stored in some structure and map to a generic component (i did this for projects and blog posts, but didn't think initially to do it for nav bar links too - needed to refactor this to apply a fancier svg animation to all nav links)
- 
- useful css properties used: 
    - inset-0
    - col
- flex for 1D, grid for 2D

- taking good notes come in handy!! found several nice fonts easily with [fontjoy](https://fontjoy.com/), which I remembered a product designer guest speaker mentioned in a software entrepreneurship course I took two years ago, and luckily noted down in my notion.

### css

### animation

### blog section



## resources
- 