//Road Navigation
//Write a function that takes as arguments:A graph of the road system,The starting intersection (node),The ending intersection (node),And returns an object containing information about the shortest path.


function roadNavigation(graph, start, end) {
  let queue = [start];
  let visited = {};
  let path = {};
  let current;
  let shortestPath = Infinity;
  let shortestPathNode;
  while (queue.length) {
    current = queue.shift();
    if (current === end) {
      break;
    }
    let neighbors = graph[current];
    for (let neighbor in neighbors) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        path[neighbor] = current;
        queue.push(neighbor);
      }
    }
  }
  while (current !== start) {
    if (path[current] < shortestPath) {
      shortestPath = path[current];
      shortestPathNode = current;
    }
    current = path[current];
  }
  return {
    distance: shortestPath,
    path: shortestPathNode
  };
}