---
title: Check if it's a BST
date: 2018-03-12T23:51:03
keywords: Algorithms, C++
---


> Is This a Binary Search Tree?

This problem can be solved in [HackerRank](https://www.hackerrank.com/challenges/is-binary-search-tree/problem).

## Condition<a id="condition"></a>

No duplicate in the tree.

## Solution<a id="solution"></a>

First, we know the following conditions from the definitions of the BST.

-   a left child must be **less** than its parent
-   a right child must be **greater** than its parent

It sounds it can be simply checked using a recursion.

However, there are two other conditions that must be checked as well.

-   We need to ensure that the **right most node** of the **left child** node must be less than its parent.
-   Similarly, we need to check the **left most node** of the **right child** node must be greater than its parent.

First, look at the following image. ![img](./Binary_search_tree.svg)

Suppose the current node is the root node which is 8.

Let's look at the **right most node** of the **left child** (which is 7). If the value is greater than 8, it is clearly not a binary search tree.

Plus, checking the right most node is good enough because if the parent of the right most node were greater than the root, the right child must be always greater than the root.

Then the pseudocode can be written as follows:

```cpp
bool checkBST(Node* root) {
  if root is null, return true

  check left child is less than root
  check right child is greater than root

  check right most node of left child is less than root
  check left most node of right child is greater than root

  return checkBST(root->left) && checkBST(root->right)
}
```

So, I am going to define 3 functions `checkBST`, `findRightMost`, and `findLeftMost`.

### Here is checkBST function.<a id="sec-2-1"></a>

```cpp
bool checkBST(Node* root) {
  if (root == nullptr) return true;

  // check left is less than root
  if (root->left && root->left->data >= root->data) return false;
  // check right is greater than root
  if (root->right && root->right->data <= root->data) return false;

  // find right most of the left child
  auto leftMostRight = findRightMost(root->left);
  // check if the right most is less than root
  if (leftMostRight && leftMostRight->data >= root->data) return false;

  // find left most of the right child
  auto rightMostLeft = findLeftMost(root->right);
  // check if the left most is greater than root
  if (rightMostLeft && rightMostLeft->data <= root->data) return false;

  // recurse
  return checkBST(root->left) && checkBST(root->right);
}
```

### findRightMost function<a id="sec-2-2"></a>

```cpp
Node* findRightMost(Node* curr) {
  if (!curr) return curr;

  Node* curr = curr;
  while (curr->right) curr = curr->right;

  return curr;
}
```

### findLeftMost function<a id="sec-2-3"></a>

```cpp
Node* findLeftMost(Node* root) {
  if (!root) return root;

  Node* curr = root;
  while (curr->left) curr = curr->left;

  return curr;
}
```
