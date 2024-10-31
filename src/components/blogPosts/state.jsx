import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
Miden’s feature set required a radical new approach for capturing the network’s state, which blends the state models of account-based systems like Ethereum with UTXO-based systems like Bitcoin and Zcash. 

This post will cover the design and implementation of Miden’s state model and how the novel architecture handles the endemic blockchain problem of state bloat without sacrificing privacy or throughput. The vision is that millions of users will use applications on Miden simultaneously. So Miden was  designed as a rollup that can serve as a sustainable value layer. 

Miden continues progressing toward a public testnet, expected in Q4 of this year. The core goal is to extend the feature set of the EVM to create a forward-looking scaling solution that still inherits Ethereum’s security. 

# What Is State and Why Does it Bloat?

State is the description of everything that is the case. On a blockchain, state describes who owns what and the condition of all smart contracts at a certain point in time. This is true for Miden as it is with other rollups and smart contract blockchains. 

The state of a blockchain grows bigger the more it is used. This problem is known as state bloat. In Ethereum’s account-based state model, the number of accounts naturally grows as more people use the chain, and one can not delete those. 

State bloat has dangerous consequences: It slows down and centralizes the network because the requirements to deal with the ever-growing state also grow. Eventually, every public blockchain needs to address state bloat. For Miden, one central consideration was to have built-in state bloat minimization. In practical terms, the goal was that block production and verification should be possible without needing to store the entire state. 

For block verification, this was achieved with Zero-Knowledge (ZK) proofs. That’s the whole point of ZK: the ability to verify information without needing to see that information. For block creation, Miden introduces the concurrent state model. 

# State in Miden

As covered in previous blog posts, on Miden, there are accounts and notes. Notes are how accounts send and receive assets. Accounts consume and produce notes. In doing so, accounts change their state. Accounts and notes have individual states—i.e., their particular conditions at a point in time. The current state of the rollup is the state of all accounts and notes at a certain point in time. 

1. Account database: This describes the latest state of each account in a tiered sparse Merkle tree
2. Note database: This captures all notes in an append-only Merkle Mountain Range
3. Nullifier database: This captures whether a note was already consumed in a tiered sparse Merkle tree 

<--image-->

Why does Miden have two databases for notes? The note database is append-only and permanently stores all notes, while the nullifier database stores which notes cannot be consumed anymore. Separating note storage into these two databases gives Miden client-side proving and advanced privacy.

When users create proofs locally, they must prove that a note they want to consume is in the note database. The Merkle path to that note is used as witness data for the proof. In an append-only data structure like the Merkle Mountain Range, this witness data does not become stale when the data structure is updated. That means users can generate valid proofs even if they don’t have the latest state of this database, so there is no need to query the operator on a constantly changing state. This is not true, for example, for Merkle trees, as the root of the tree changes with every update.

The second reason to separate notes and nullifiers is privacy. In Miden, nullifiers break the linkability between created and consumed notes. When a note is consumed, its nullifier is set to 1 in the nullifier database. However, to know a note’s nullifier, one needs to know all details of the note. That means if a note is private and the operator stores only the note's hash, only those with the note details know if this note has been consumed already. Zcash first introduced this approach. 

But this privacy-enhancing solution contains the seed of another problem. If all notes are permanently stored, the storage required to maintain that data will grow very quickly. 

Before revealing how Miden further manages state bloat, let’s first describe how and who produces and validates blocks of the global state.

# Operators

On Miden, the global state is managed by operators. Operators run Miden Nodes and ensure the integrity of the three databases. To prevent double spending, operators are responsible for ensuring nullifiers created in a transaction are not yet present in the nullifier database. That is why operators store a complete nullifier database.

However, Miden also pushes some responsibilities regarding data storage onto the user. In Miden, users are incentivized to keep notes data locally and only store commitments publicly. This allows operators to aggressively prune the note database and store only commitments to the notes. 

Similarly, users are incentivized to take care of account state storage themselves instead of storing everything publicly with the operator. Again, the operator stores the commitment and ensures the correctness of any changes. However, there is always the option to store the account and note data publicly with the operator.

# How Miden Manages Bloat

Because operators don’t need to know the entire state to verify or produce a new block, no operator is required to store the entire state. So how is block verification and block production possible? 

At its core, the idea is simple: Instead of storing the full state data with the operators, the users store their data, and the rollup only keeps track of commitments to the data. At least for most accounts, some smart contracts need to be publicly visible. This minimizes state bloat—as the operator doesn’t need to store an ever-growing database—and provides privacy because all other users and the operator only see a hash of other users’ data.

Again, block verification works because of the beauty of ZK proofs. Operators can store a private account, which is a commitment to an individual state, meaning just a hash. This way, an operator doesn’t know how many assets are in a particular account or what a note says exactly,  but the operator can still verify a correct state change. The account and note databases can remain manageable, even at high usage for extended periods of time. 

Unlike Ethereum, the size of a private account on Miden is negligible. Each private account contributes only 40 bytes to the global state (8 bytes for the account ID and 32 for the account hash). This means that 1 billion private accounts require only 40 GB. And operators only need to know the hash to validate an individual state transition. 

As mentioned, operators must still store the full nullifier database for block verification. The nullifier database would grow linearly with the number of consumed transactions. That would be very bad for state bloat—at 1,000 TPS, the state would grow at about 1TB per year. 

So, in Miden, there are epochs, and a new nullifier database is created after every epoch. The operator stores the last two full trees and all historical nullifiers’ tree roots. That means older notes can still be spent; only there is a bit more work to be done by the user. By adding this epoch parameter to the nullifier database, the primary driver of state bloat becomes transactions per second.  

<--image-->

Block production with only part of the state is possible with Miden’s concurrent state model. A block contains the newly created notes and nullifiers. Notes are simply appended to the Notes Database. For nullifiers, the operator needs to update a Merkle Tree, which, as mentioned, requires knowledge of the full tree. 

But the operator does not need to know the contents of that account to update it—the same way Ethereum does not need to know exactly what is happening on a rollup to update the rollup’s state root in the respective smart contract. This means that, in Miden, every account can be considered a Layer 3. 

This architecture with these features results in a rollup that minimizes state growth as privacy is maximized. This creates a powerful feedback loop.

To return where this began, the state model Miden uses is quite unique, a combination of the account model (as on Ethereum), the UTXO-model (as on Bitcoin), and ZK-proofs. The result is an actor-based model with a concurrent off-chain state.
`;

const StatePost = () => {
  return (
    <div className="prose max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Miden is Ethereum, Extended</h1>
      <p className="text-gray-600">By Bob on March 28, 2024</p>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default StatePost;
