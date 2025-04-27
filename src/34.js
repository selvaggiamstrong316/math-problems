// Node.js code to implement the Floyd's Cycle Detection Algorithm

function detectCycle(graph) {
    let visited = new Set();
    let seen = new Set();

    function dfs(node) {
        if (visited.has(node)) {
            return true;
        }
        visited.add(node);

        for (let neighbor of graph[node]) {
            if (!seen.has(neighbor)) {
                seen.add(neighbor);
                if (dfs(neighbor)) {
                    return true;
                }
            } else {
                seen.delete(neighbor);
            }
        }

        return false;
    }

    let nodes = [...graph.keys()];
    for (let node of nodes) {
        if (!seen.has(node)) {
            seen.add(node);
            if (dfs(node)) {
                return true;
            }
        }
    }

    console.log("No cycle detected.");
}

// Example usage
const graph = {
    1: [2, 3],
    2: [4, 5, 6],
    3: [7, 8],
    4: [],
    5: [9, 10],
    6: [11, 12],
    7: [],
    8: [13],
    9: [],
    10: [],
    11: [],
    12: [],
    13: []
};

detectCycle(graph);
