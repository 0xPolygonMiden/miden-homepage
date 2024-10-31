import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
# Goal: Extend Ethereum’s feature set  

Ethereum is designed to be a base layer that evolves slowly and provides stability. Rollups allow the creation of new design spaces while retaining the security of Ethereum. This makes a rollup the perfect place to innovate and enable new functionality. 
For Miden, the aim is to extend Ethereum's feature set.

Unlike many other rollups, Miden prioritizes ZK-friendliness over EVM compatibility. It also uses a novel state model to exploit the full power of a ZK-centric design. These design decisions allow developers to create applications that are currently difficult or impractical to build on account-based systems. 

With that in place, Miden extends Ethereum on three core dimensions to attract billions of users: scalability, safety, and privacy.

## Scalability

To achieve ultimate scalability, Miden radically changes how blockchains are designed and the paradigm that everything in a blockchain must be transparent to be verifiable. 
Blockchains verify by re-executing. Re-executing requires transparency and processing power. Verification by re-execution slows blockchains down. Zero-knowledge proofs offer the possibility to verify without re-execution. Zero-knowledge verification doesn’t need transparency or processing power. In Miden, users can generate their own proofs, and the network verifies them.

This is the most important change in Miden. Users can execute smart contracts locally. Specifically, for anything that doesn’t touch the public state, users can execute smart contracts on their devices and then send ZK proofs to the network. The operators can then verify these ZK proofs exponentially faster than executing the original transactions and update the state accordingly. 

Not only does this reduce the computational burden on the operators, but it also makes such transactions inherently parallelizable. Even more exciting is that it lifts the limits on what can go into a smart contract. For example, anything that a user can execute and prove locally - no matter how complex - can be processed by the network with minimal costs. On Miden, it will be cheap to run even complex computations.

Another important change in Miden is ensuring that most transactions do not need to touch the public state. We achieve this by making all interactions between smart contracts asynchronous. With Miden, token transfers, NFT swaps, and many others do not need to touch the public state. For actions that change the public state,Miden does allow regular network execution of transactions (same as most other blockchains). Still, because of the asynchronous execution model, interactions between locally executed transactions and network transactions are done seamlessly.

## Safety

Assets need to be safe and easy to handle. No one should lose their tokens when losing a key or sending them to the wrong address. Miden’s approach aims to reduce the risks of using crypto on multiple fronts.

First, every account on Miden is a smart contract. This is frequently referred to as account abstraction. This enables developers building on Miden to create safer user wallets with features like social recovery of keys, rate-limiting spending tokens, transaction risk analysis, etc.

Next, because of Miden’s asynchronous execution model, it is possible to create recallable transactions, which mitigate the risk of sending funds to a non-existent address. This provides a safer environment for users.

Another change that increases safety is that in Miden, fungible and non-fungible assets are stored locally in accounts (rather than in global token contracts). This makes exploiting potential bugs more difficult, as every account needs to be attacked individually.

Speaking of bugs, to make smart contract development safer, Polygon Miden aims to support modern smart contract languages such as Rust which is designed with an emphasis on safety and correctness.

## Privacy

Lastly, absolute transparency is one of the main drawbacks of blockchains. The ability to transact in private is a fundamental right and a practical necessity. And thus, we put privacy at the core of Miden’s design. 

But we go beyond simple private transactions: Miden’s architecture enables expressive private smart contracts. These are almost exactly the same as regular smart contracts but are executed locally so that the user does not reveal its code, state, and interaction graph to the network. And the coolest part is that private smart contracts can interact seamlessly with public smart contracts. So, for example, private rate-limited wallets can make calls to public DEXs. Businesses and financial institutions can build and execute their business logic on Miden. They would keep information hidden from competitors but visible to auditors.

Another important point regarding privacy is that users should not have to pay extra for it. In Miden’s design, private smart contracts impose minimal burden on the network (much smaller than public smart contracts), so on Miden, it is cheaper to remain private.

We understand that privacy is a complex area in the public domain. Privacy is a complex subject requiring careful study and consideration. We plan to enable privacy on Miden in stages. Initially, users can maintain privacy from other users but not from the operators (similar to Web2 privacy). This will give us time to figure out how to enable stronger levels of privacy without opening floodgates to potential abuses.

# Architecture: Actor-based model with concurrent off-chain state

Miden’s architecture departs considerably from typical blockchain designs to support the above mentioned features. In future blog posts, we will cover this in much more detail, but two foundational aspects are worth covering even now.

## Actor-based execution model

The actor model inspires Miden’s execution model. This is a well-known design paradigm in concurrent systems. In the actor model, actors are state machines responsible for maintaining their own state. In the context of Miden, each account is an actor. Actors communicate with each other by exchanging messages asynchronously. One actor can send a message to another, but it is up to the recipient to apply the requested change to their state. 

Miden’s architecture takes the actor model further and combines it with zero-knowledge proofs. Now, actors not only maintain and update their own state, but they can also prove the validity of their own state transitions to the rest of the network. This ability to independently prove state transitions enables local smart contract execution, private smart contracts, and much more. And it is quite unique in the rollup space. Normally only centralized entities - sequencer or prover - create zero-knowledge proofs, not the users. 

## Hybrid state model

The actor-based execution model requires a radically different approach to recording the system's state. Actors and the messages they exchange must be treated as first-class citizens. Miden addresses this by combining the state models of account-based systems like Ethereum and UTXO-based systems like Bitcoin and Zcash.

Additionally, Miden accounts can live either on-chain or off-chain. For on-chain accounts, the full account state is always recorded on-chain (meaning on Miden). For off-chain accounts, only the commitment to the account state (i.e., state hash) is recorded on-chain. This is possible because, as described before, in the actor-based model, users can apply updates to their accounts locally and then send a zero-knowledge proof to the network attesting that the commitment to the account state was updated correctly. The network can verify the correctness of the transition without knowing the details of an off-chain account’s state. 

Having on-chain and off-chain account data combined with the ability to prove state changes locally or by the network leaves us with flexible transaction modes. 

At DevCon 6, in Bogotá, Colombia, Miden co-founder Bobbin Threadbare spoke about flexible transaction modes and how our state model is designed to build a decentralized scalable rollup.
`;

const InitialPost = () => {
  return (
    <div className="prose max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Miden is Ethereum, Extended</h1>
      <p className="text-gray-600">By Bob on March 28, 2024</p>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default InitialPost;
