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

See the [video demo](https://www.youtube.com/watch?v=j0EMnODYyE0)

![ar rc car racing gif](https://jennypng.vercel.app/_next/image?url=%2Fimages%2Farc-gif.gif&w=256&q=75)

## challenges

- It was *really* difficult to think of a suitable capstone project idea actually... 
- The professors expected something novel and technically complex in some way
    - it was a bit difficult to be original in the ar/vr space - many of our ideas (AR time machine, escape room, wizard dueling, angry birds) had been done
    - our scope was also constrained by the feasibility of implementing the MVP in 8 weeks...
- Remote control car racing was pitched by one member of our team, since he has particular interest in RC cars. While the rest of us didn't have as much interest in the racing element itself, the technical challenges of the concept were intriguing. 
    - The procedural generation of the racetrack was the novel and complex element of our project concept
    - After deciding on the idea, there were still so many unknowns as none of us had experience with procedural generation 
- There was ambiguity in how to approach implementation; while AR RC racing games actually existed already, with some even allowing track customization, we 
didn't see anything using procedural generation for track customization

To summarize the core challenges:
- track generation: how do we pathfind and generate a 3D, drivable racetrack that avoids real-world obstacles? this is really split into two unknowns:
    - how do we 3D pathfind around real-world obstacles? 
    - how do we generate a racetrack mesh from a given 3D path?
- multiplayer/co-location: what data do we sync across multiple headsets while ensuring low latency? the position of other players' cars, and collisions, ideally don't have significant networking related delay

Other challenges faced throughout the process:
- the course staff expected us to make consistent progress every week, and meet our self-defined action items for that week. This was different from typical classes where we could slack off for a period of time and cram everything closer to the deadline...
- actually my first time working very closely in a group on similar portions of code - reviewing each others' pull requests, dealing with merge conflicts, etc.
    - while I used git in my internships, my work tended to be more isolated from what other people were actively working on, and I didn't have as many intertwined merge conflicts
- was very difficult debugging unity, co-location, and pathfinding issues...
- planning networked elements - who is responsible for the source of truth, which logic belongs locally vs. RPC 

also...ar/vr development is such a pain because it takes so long to build to the headset unless you have a very powerful computer...

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
        - However, it was a great example of how optimized 3D pathfinding could be implemented, particularly its use of [octrees](https://en.wikipedia.org/wiki/Octree) to construct a sparser graph (using a voxel grid seemed risky due to the memory required to construct a graph of a real 3D room on the VR headsets...) and how to incorporate the bounds of GameObjects into the octree in order to avoid constructing graph edges that intersected obstacles
- LLMs are very useful for gaining a broad overview of potential approaches

The course required us to write out a PRD (product requirements doc) and milestones for each week of the quarter, as well as acceptance criteria for an MVP on week 6 of the quarter. This was a useful guideline/anchor throughout the quarter, although as expected, we overestimated the progress we would be able to make on certain weeks.

After our research, our high-level approach to track generation was to:
- 3D pathfind from each checkpoint to the next
- Use the 3D points in the found path as spline knots
- Procedurally extrude a mesh from the spline to create the racetrack

## Development
Basics:
- Set up Unity XR project with Meta scene SDKs
- Another member handled the car driving and physics, and another set up the basic co-location assets.

My main role was in researching and implementing the 3D pathfinding aspect of the racetrack generation.

- With the help of GPT, I implemented a basic script that, when given a preset spline, could extrude a basic 3D mesh with customizable thickness and width. I started with this since it was a key element that the rest of the project required. This was buggy tho, as in certain spline knot configurations caused very warped and undriveable meshes - I handed this off to another team member to improve upon
    - Later on, improvements to the mesh creation were done but we also added UI feature to inform the player if checkpoint placements were too close and likely to cause mesh warping
- Another member and I implemented the octree/A* tutorial in a scratch 3D Unity scene, to learn how it worked. We created a cube, that given a start and end xyz point, could navigate a path that avoided other gameobjects. 
    - Using the bounds of the obstacle GameObjects, we constructed an octree that recursively subdivided only in regions where obstacles were present. This created a sparse tree in empty areas and denser subdivisions near obstacles, efficiently representing navigable space.
    - From this octree, we built a graph: each empty leaf node (a region not intersecting any obstacle bounds and smaller than a minimum size threshold) became a graph node. We added edges between neighboring leaf nodes — either siblings or ones with intersecting bounds — resulting in a graph that represented all the valid paths through 3D space, avoiding collisions.
![screenshot of octree and graph](https://i.imgur.com/sZw8wFS.jpeg)

- Now that we had a working base template of pathfinding code, we had to make it work in AR and interact with the real world, and also constrain the path to go through custom checkpoints
    - We decided to run A* between each consecutive checkpoint, with euclidian distance as our heuristic
- The Meta Scene API uses a prescan of the room and provides information about tables, walls, floors, chairs, etc. via anchors, which have a Bound.
    - I integrated the scene anchors into the graph construction to use real world objects as obstacles in the pathfinding

![unity screenshot showing scene mesh](https://i.imgur.com/XiJt9pF.jpeg)

We got stuck on the track generation for 2+ weeks...resulting in a lot of frustrations. Around the time our MVP was due, we spent two days in a row staying in the capstone lab until past midnight trying to make things work. 

There was super high latency - depending on the number of checkpoints placed, it could take 20-40 seconds for the track to generate, and the entire headset would freeze during this process. Sometimes, it wasn't able to find a path at all and would infinite loop, despite simple checkpoint placements that should have been pathable. We had conflicting opinions on the viability of our approach - some believed our entire pathfinding approach was overkill, others believed we just needed to find the bug and optimize.

Fortunately for us....it seemed our issue lied in some bug with the implementation from the tutorial. We were querying GPT for optimization suggestions, and one of them was to replace our current SortedSet used in A* search with a custom priority queue, because "it's implemented as a binary search tree and does not handle priority changes efficiently."

It seemed legit, and when we implemented it, the latency of generation went down to like 2 seconds....there was some issue with the way nodes were compared and retrieved from the SortedSet. Still thankful that there was an end to our headaches that didn't involve us starting from scratch LOL

We also had an issue where the first generated track was as expected, but then subsequent generations on the exact same checkpoint configuration led to increasingly warped tracks. This is where I learned that Unity only garbage collects when an object has zero references lol, and we were definitely not cleaning up our previous graphs... 

For our MVP, we disregarded co-location entirely. This became our focus after week 6. For co-location, all players need to be able to accurately see a shared racetrack, positions of each others' cars, etc.  

We wanted any player to be able to click a "generate" button to create the networked racetrack for everyone. To do so: 
- We had a local onGenerateClick function that called an RPC (remote procedure call), which runs on both the sender and recipients, to construct the track. The player clicking the button runs the pathfinding logic, and broadcasts the 3D path points via the RPC to everyone. Each player then locally creates the mesh.

### things to do differently..
Perhaps we should have started with a simpler pathfinding approach and built off of that? There were some limitations of our approach:
- Unity Bounds have limited axes of rotation - can't always accurately represent an object's boundaries.
- The complexity made it difficult to debug lol, especially for team members that didn't contribute to implementing it

Other things we could have explored first...though these each have their own potential problems too:
- Just voxel grid representation to see if memory would have actually been an issue before prematurely optimizing for it
- Randomly exploring tree, with raycasting to check for obstacles...
- Leverage Unity's built in Navmesh system for pathfinding

The stagnating pathfinding blocked our overall progress for a bit. Better parallelizing our tasks would have improved our efficiency. 

## Learnings
- In the research phase, I got a brief introduction to how procedural generation is used in many interesting ways
- Manage game state in one place. Early on, we had a messy chain of function calls scattered across different classes, which was confusing. We refactored these into a global GameManager.
- The importance of optimization was really felt here. Changing a minheap to a priorityqueue, and a list to a hashset, all caused noticeable speedups in pathfinding.
- It was just cool to apply graphs and pathfinding, something I only had experience with from data structures courses, to a real application

