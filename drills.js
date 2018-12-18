const BST = require('./bst');

function heightOf(node) {
  if (node == null) {
    return -1;
  } else {
    return 1 + Math.max(heightOf(node.left), heightOf(node.right));
  }
}
const counter = {n:3};
function thirdLargest(node, counter) {
  if (node.right) {
    thirdLargest(node.right, counter);
    if (counter.value) {
      return counter;
    }
  }


  if (!--counter.n) {
    counter.value = node.key;
    return;
  }
  if (node.left) {
    thirdLargest(node.left, counter);
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
  // console.log(searchTree);

  // console.log('The height of the searchTree is ' + heightOf(searchTree))
  console.log('The search tree you entered is a BST: ' + isItBST(searchTree));
  console.log(thirdLargest(searchTree, counter));
  console.log(counter);
}

// 3,1,4,6,9,2,5,7
//SearchTree:
//       3
//     /   \
//     1    4
//     \    \
//      2    6
//          / \
//          5  9
//            /
//           7

//store first = 3
//store second = 1
//store third = 2
function isItBST(node) {
  if (node == null) {
    return true;
  }
  console.log('isItBST 2 -> ' + node.value + ' ' + node.key);
  if (node.left && node.left.value > node.value) return false;
  if (node.right && node.right.value < node.value) return false;
  return isItBST(node.left) || isItBST(node.right);
}

main();

//largest -1 second
// counter >=3
// find 3
// node.right first then left
//each recursion decrements by 1
//
//write a function that takes node as an argument
//and stores the value depending on a > equation
//changes the stored value to the highest value
//   3
//  /\
// 1  4
