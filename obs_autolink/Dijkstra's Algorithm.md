---
title: Dijkstra's Algorithm
layout: meth
---
# Dijkstra's Algorithm
![](https://i.imgur.com/vlpyyvk.jpg)

1. initialize the starting node to 0, every other node to $\infty$
2. color first node to red
3. calculate all red's next nodes and find the one with the least cost, color it to red, repeat this step
4. all nodes have been colored to red, now go from the destination node, following how it got its cost, back to the starting node, there goes the least cost path

[[Data Structure#Dijkstra's Algorithm]]