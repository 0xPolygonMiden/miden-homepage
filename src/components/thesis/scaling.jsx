import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
# Scaling

Miden is the next-generation blockchain protocol designed from the ground up to take full advantage of the capabilities unlocked by ZK technology. It takes the core concept of ZK rollups to its logical conclusion and pushes both state and execution to the edge (i.e., the client side). This allows Miden to simultaneously address the problems plaguing transparent and synchronous blockchains in scalability, privacy, and safety.

At the core of the Miden design is the [Actor Model](https://en.wikipedia.org/wiki/Actor_model): a well-established pattern used for scaling concurrent and distributed systems. In the Actor Model, independent entities ("actors") communicate with each other by exchanging asynchronous messages. Actors maintain their own state. When an actor receives a message, it may change its state and, in response, produce messages that can trigger state changes in other actors. One of the main innovations of the Miden design is to combine the Actor Model with ZK proofs to make state transitions of all actors provable.

In the context of Miden, actors are accounts, and messages are UTXO-based notes.

![Miden Architecture Core Concepts](https://raw.githubusercontent.com/0xPolygonMiden/miden-base/main/docs/img/architecture/miden-architecture-core-concepts.gif)

A transaction can update the state only of a single account, but can produce and consume multiple notes. This means that transactions can be executed and proven independently of each other. Thus, users can execute smart contracts locally on their devices for anything that doesn't touch the public state and then send ZK proofs to the network. The network can then verify these proofs and update the state accordingly. We call this client-side proving, and the benefits of this model are massive. 

## Unbounded scalability
The most immediate effect of client-side proving is the elimination of execution bloat. Transactions executed and proven by the users do not need to be re-executed by the network. In fact, on Miden, every transaction is executed exactly once. Transaction-level proofs are then recursively aggregated into block proofs, and the nodes only need to verify short ZK proofs that can attest to the validity of thousands (or even millions) of transactions. This means that from the computation standpoint, even a smartphone can verify a practically unlimited number of transactions in real-time.

![Miden Architecture Core Concepts](https://file.notion.so/f/f/f4bb0fff-fdeb-4a0e-93dd-25e3c9b6f6d8/0d094a58-3ae7-4eac-ac0c-0357318628f7/Screenshot_2024-10-01_at_12.13.38.png?table=block&id=128f341e-5d62-8114-86ee-e39480577437&spaceId=f4bb0fff-fdeb-4a0e-93dd-25e3c9b6f6d8&expirationTimestamp=1730469600000&signature=ZWIE2pfiA9QYbwSk4NDI8RE_xNNNW54Lug0i-5Kxx0g&downloadName=Screenshot+2024-10-01+at+12.13.38.png)


The above is a direct consequence of the Actor Model in which most transactions do not need to touch the public state and can be processed in parallel by independent actors. On Miden, token transfers, NFT swaps, and many others can happen asynchronously directly between users. This implies that contract execution can be scaled independently to meet demand, or conversely, heavy usage of one smart contract does not slow down all the rest.

Perhaps more importantly, though, client-side proofs remove the bounds of how complex a smart contract can be. ZK proofs are exponentially faster to verify than the computation they prove. Thus, from the standpoint of the network, there is virtually no difference between a proof of a simple transfer and a proof of an ML model inference that took a data center to run. On Miden, the computational complexity of smart contracts is limited only by the hardware available to the user, not by gas or other limits imposed by the network.

Last but not least, client-side proving **minimizes state bloat** by allowing users to self-custody their state. Since account state transitions can be proven on the client, the network only needs to know short commitments (e.g., 32 bytes) to account states to verify the validity of their transitions. The full account states can be stored on user devices, in centralized clouds, in decentralized DAs, or wherever the users wish to store them. 

This drastically reduces node storage requirements and makes it possible for block producers to build new blocks without knowing the entire state. It also removes bounds on the size of the state a contract can have and how expensive this state would be to the user.
`;

const Scaling = () => {
  return (
    <div className="prose max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Scaling</h1>
        <p className="text-gray-600">By Bob on March 28, 2024</p>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default Scaling;