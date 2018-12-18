const BST = require('./bst');

function heightOf(node) {
  if (node == null) {
    return -1;
  }
  else {
    return 1 + Math.max(heightOf(node.left), heightOf(node.right));
  }
}

function main() {
  let searchTree = new BST();
  searchTree.insert(3);
  searchTree.insert(1);
  searchTree.insert(4);
  searchTree.insert(6);
  searchTree.insert(9);
  searchTree.insert(2);
  searchTree.insert(5);
  searchTree.insert(7);
  console.log(searchTree);

  console.log(heightOf(searchTree))
}

// 3,1,4,6,9,2,5,
//SearchTree:
//       3
//     /   \
//     1    4
//     \    \
//      2    6
//          / \
//          5  9

//input st
//if null return -1
//have count
//else return 1+ Math.Max(heightofBSTfunction(node.left, node.right));
//go down one side and save variable for count on left
//go down the right side and save variable for count on right
//height is left count or right count dependant on which is larger


main();