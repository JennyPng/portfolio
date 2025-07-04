---
title: "Portfolio Dev Log (wip)"
year: 2025
month: 7
day: 4
excerpt: "Documenting the thought process and learnings behind creating my current portfolio website, aka what you're looking at right now"
---

> Documenting the thought process and learnings behind creating my current portfolio website, aka what you're looking at right now

The raw, unrevised dev log can be found [in my garden](https://jennypng.netlify.app/software-projects/portfolio-revamp)

## goals
I made my first portfolio website over winter break of freshman year (undergrad) to buff up my barren resume for an application to a robotics club.

![image](https://jennypng.netlify.app/images/Pasted-image-20250408210613.png)

I mocked it up in Figma, watched 3-4 Youtube tutorials on making a portfolio with just html/css, did some hacky CSS styling, and very minimal javascript. I like certain visual elements, but it’s a little plain, and not as responsive as it could be.

- I wanted to make a new portfolio website that better showcases my experience, taste, and personality
- I've been interested in fun digital expriences lately (see [websites I like](https://jennypng.netlify.app/cs-concepts/websites-i-really-like)) and I figured redoing my portfolio would be a casual but interesting way to learn how to add dynamic or animated elements to websites.
- I also really wanted to add a blog section because I love documenting thought processes behind projects, and this would be the ideal location


I got the most frontend experience from working on a recent project, Jam Journal. Before this, I had some React and HTML/CSS experience
but not enough to comfortably describe my skill level as intermediate. That project was a bit rushed because I was working on it in a 
6 week build space - I wanted to use this portfolio revamp, something with no real deadline, as a chance to go slowly and really strengthen
my foundational knowledge.

## challenges
- **Project gallery**: 
    - I struggled a little with how to layout the project cards. I discovered that what I needed was a masonry layout. I attempted to use CSS grid,
as I read this was good for 2D layouts over flex, but it was a bit rigid - cards in the same row were forced to be the same height. 
    - I found a work-around by changing grid to a column layout, but this meant the project content order was in the column direction rather than row (i.e. most recent projects are in the first column and not the first row). Settled with this for now, will probably look into external libraries later.
- **Animations**: I really wanted to add some fun, animated visual elements. 
    - I knew of anime js, motion js, and gsap - I chose to try anime js because their website is awesome
    - v0 and cursor were useful for starting out, to see how the specific things i need can be done
    - in AI use, really trying to balance knowing when it's worth trudging through manual searches and when it really just makes more sense to save time and get the LLM synthesis 
- **Playful design**: how to balance play and work - a formal portfolio with room for whimsy?

## learnings
- anything with repeated styling should have data stored in some structure and map to a generic component (i did this for projects and blog posts, but didn't think initially to do it for nav bar links too - needed to refactor this to apply a fancier svg animation to all nav links)


### css

### animation

### blog section



## resources
- 