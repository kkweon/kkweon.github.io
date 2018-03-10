---
title: Reverse a Linked List
date: 2018-03-09T16:00:00
keywords: Algorithm, C++
---

If a Linked List is given as 1 → 2 → 3, it should reverse the list like 3 → 2 → 1.

You can solve through HackerRank. <https://www.hackerrank.com/challenges/reverse-a-linked-list>

## Solution<a id="sec-1-1"></a>

### First, we define a Node class to define a Linked List.

The boilerplate to define a linked list.

```cpp
#include <initializer_list>
#include <iostream>

using std::initializer_list;
using std::cout;

struct Node {
  int value;
  Node *next = nullptr;

  ~Node() { delete next; }
};

/**
 * Usage:
 *   createLinkedList({1, 2, 3}) generates the head of a new linked list
 */
Node *createLinkedList(initializer_list<int> xs) {
  Node *head = nullptr;
  Node *current = nullptr;

  for (auto x : xs) {
    Node *node = new Node{x};
    if (head == nullptr) {
      current = head = node;
    } else {
      current->next = node;
      current = current->next;
    }
  }

  return head;
}

/**
 * Print the linked list
 */
void printLinkedList(Node *head) {
  while (head && head->next) {
    cout << head->value << " -> ";
    head = head->next;
  }
  if (head)
    cout << head->value << '\n';
}
```

### Actual algorithm.

Suppose the following linked list (head) `1 → 2 → 3` is given.

So, the idea is simple. For each node, connect to its previous node. However, the first node does not have the previous node. Therefore, the first node should link to `null` instead.

After the current node connects to the previous node, there is no way to reach the next node. So, we need another temporary pointer to hold the next node.

In C++, it will look as below.

```cpp
Node* reverseLinkedList(Node* head) {
  Node* prev = nullptr;
  Node* curr = head;

  while (curr) {
    Node* next = curr->next;
    curr->next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
```
