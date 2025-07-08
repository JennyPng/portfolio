---
title: "AR RC Car Racing"
date: "2025-07-08"
coverImage: "/images/arc-gif.gif"
excerpt: "Learnings from developing my first serious AR application over 8 weeks in a team of 4"
---

> Learnings from developing my first serious AR application over 8 weeks in a team of 4

## Project description
Multiplayer, co-located AR racing game allowing players in the same room to compete on custom, environment-aware, procedurally-generated racetracks.

Players can place checkpoints around the real world, and the game will generate a racetrack that passes through all the designated checkpoints, while avoiding real-world obstacles such as tables, chairs, and more (anything recognizable by the Meta Scene API).

We allow unlimited randomized track creation with environmental context, without the tedium of having to manually place every piece of the track. The advantage of this being AR is that players can create racetracks not possible in reality.

Built in a team of 4 over 8 weeks, for Meta Quest 3, @ [CSE481v: VR Capstone](https://courses.cs.washington.edu/courses/cse481v/25sp/)


## challenges

- It was *really* difficult to think of a suitable capstone project idea actually... 
- The professors expected something novel and technically complex in some way
    - it was a bit difficult to be original in the ar/vr space - many of our ideas (AR time machine, escape room, wizard dueling, angry birds) had been done
    - our scope was also constrained by the feasibility of implementing the MVP in 8 weeks...
- Remote control car racing was pitched by one member of our team, since he has particular interest in RC cars. While the rest of us didn't have as much interest in the racing element itself, the technical challenges of the concept were intriguing. Also, we did not manage to think of anything more compelling xd
    - The procedural generation of the racetrack was the novel and complex element of our project concept
    - After deciding on the idea, there were still so many unknowns as none of us had experience with procedural generation 
- There was ambiguity in how to approach implementation; while AR RC racing games actually existed already, with some even allowing track customization, we 
didn't see anything using procedural generation for track customization

To summarize the core challenges:
- track generation: how do we pathfind and generate a 3D, drivable racetrack that avoids real-world obstacles? this is really split into two unknowns:
    - how do we 3D pathfind around real-world obstacles? 
    - how do we generate a racetrack mesh from a given 3D path?
- multiplayer/co-location: what data do we sync across multiple headsets while ensuring low latency? the position of other players' cars, and collisions, ideally don't have significant networking related delay

Another challenging aspect of this experience was that the course staff expected us to make consistent progress every week, and meet our self-defined action items for that week. This was different from typical classes where we could slack off for a period of time and cram everything closer to the deadline...


## Research and Planning

- Compiled a doc of seemingly relevant videos and tutorials
    - Found lots of videos specifically on procedurally generated roads, but most didn't fit our use case - they weren't AR/VR/3D, or they didn't consider pathfinding, etc...
    - Things we looked into include: dijkstra's, A*, rapidly exploring random tree, voronoi diagrams, union-find in generating dungeons, L-systems, voxel grids
- A key consideration was that the Meta Quest headset has limited computational power and memory, so we needed an optimized solution
- We were fortunate to find a handful of tutorials that, combined, came very close to what we needed
    - [Create more with splines | Unity 2022 splines](https://www.youtube.com/watch?v=n-o2e4KxbW4)
        - This affirmed that splines was something we should use in our implementation. The new unknown stemming from this was how to implement procedural mesh extrusion from a spline?
    - [How To Build Roads Procedurally In Unity with the Splines Package](https://www.youtube.com/watch?v=ZiHH_BvjoGk)
        - This informed how splines could be used for procedural road generation, although this wasn't fully for 3D
    - [Using Octrees and A* for Efficient Pathfinding](https://www.youtube.com/watch?v=gNmPmWR2vV4)
        - This tutorial was a goldmine and is much of the foundation of our pathfinding. 
        - Its usecase is for flying characters pathfinding around obstacles in 3D games
        - However, it was a great example of how optimized 3D pathfinding could be implemented, particularly its use of octrees to construct a sparser graph (using a voxel grid seemed risky due to the memory required to construct a graph of a real 3D room on the VR headsets...) and how to incorporate the bounds of GameObjects into the octree in order to avoid constructing graph edges that intersected obstacles
- LLMs are very useful for gaining a broad overview of potential approaches

The course required us to write out a PRD (product requirements doc) and milestones for each week of the quarter, as well as acceptance criteria for an MVP on week 6 of the quarter. This was a useful guideline/anchor throughout the quarter, although as expected, we overestimated the progress we would be able to make on certain weeks.

## Development
- Set up Unity XR project with Meta scene SDKs
- Another member handled the car driving and physics, and another set up the basic co-location assets.

My main role was in researching and implementing the 3D pathfinding aspect of the racetrack generation.

We got stuck on the track generation for 2+ weeks...

debugging

todo

## Learnings
- In the research phase, I got a brief introduction to how procedural generation is used in many interesting ways
- 

- the importance of optimization was really felt here
## Key Takeaways
todo