window.SIDEBAR_ITEMS = {"mod":[["accumulator","This module implements an in-memory Merkle Accumulator that is similar to what we use in storage. This accumulator will only store a small portion of the tree – for any subtree that is full, we store only the root. Also we only store the frozen nodes, therefore this structure will always store up to `Log(n)` number of nodes, where `n` is the total number of leaves in the tree."],["definition","This module has definition of various proofs."],["position","This module provides an abstraction for positioning a node in a binary tree, A `Position` uniquely identifies the location of a node"]],"struct":[["MerkleTreeInternalNode",""],["SparseMerkleLeafNode",""],["SparseMerkleLeafNodeHasher","Cryptographic hasher for an BCS-serializable #item"]],"type":[["EventAccumulatorInternalNode",""],["SparseMerkleInternalNode",""],["TestAccumulatorInternalNode",""],["TransactionAccumulatorInternalNode",""]]};