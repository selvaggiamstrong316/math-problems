const randomNode = () => {
  const nodes = ['+', '-', '*', '/'];
  return nodes[Math.floor(Math.random() * nodes.length)];
}
