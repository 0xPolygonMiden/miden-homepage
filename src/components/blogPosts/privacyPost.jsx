import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
# Privacy simply scales better 
The journey to launching  Miden's public testnet, planned for Q4 2023, is moving forward steadily. This blog post is the next in a series covering Miden’s novel architecture, designed to enable developers to build high-throughput, private applications. 

 Miden achieves these features by using the full power of zero-knowledge (ZK) proofs. For this blog post, the topic is privacy, how privacy and scalability go hand in hand, and how true scalability requires privacy in a decentralized context. We will also explain how  Miden users can execute Turing-complete privacy-preserving smart contracts, which is rare in the L2 landscape.

“Privacy” and “privacy-enhancing” are frequently used when describing blockchain technology. These terms have also appeared throughout this series of blog posts about  Miden. It’s helpful, therefore, to set out a framework for understanding degrees of privacy and how  Miden’s design aims to achieve strong privacy. 

Privacy, however, also overlaps with several sensitive issues, particularly around assets and financial transactions, including the need to balance an individual’s right to keep certain information private and the need to protect the public. 

## Four Levels of Privacy 
In the context of blockchains, privacy can be understood as existing on a continuum, with each level offering an increasing amount of privacy:

No Privacy: Complete transparency where everyone has access to all information.
Web2-like Privacy: Only transaction participants and operators have full visibility.
Strong Privacy: Only the transaction participants have full visibility.
Absolute Privacy: No party has visibility into all transaction data.

Most public blockchains fall into the first category because they cannot provide any meaningful level of privacy. In this context, privacy is more like anonymity. Very early researchers and users coined the term “pseudonymity” to emphasize the fragile nature of the type of privacy—protection of a user’s identity—that Bitcoin and Ethereum provide. 

Credit cards or systems like PayPal provide what we call Web2 privacy. The companies behind those systems have full visibility of every transaction, but external observers or users don’t. Strong privacy is typical of cash transactions, with no one other than the transaction participants knowing the details normally. Absolute privacy is given if not even the receiver knows the sender. 
Blockchain, Privacy, and Scalability
Traditionally, there is no privacy on a blockchain. With its immutable and transparent data structure, blockchain technology has always been incompatible with privacy. Because blockchains verify by recomputation, everyone needs to know everything, and it is hard to withhold information to stay private. 

But ensuring computational integrity by absolute transparency and recomputation has a tradeoff: It limits the scale of blockchains. If everyone needs to know everything to be sure everything is correct, it simply doesn’t scale. 

 Miden aims to provide strong privacy rather than pseudonymity. Theoretically, it can provide absolute privacy. It uses client-side proofs and off-chain data storage. This means that  Miden users can store their data locally and prove their own individual state transitions, as explained in the overview of  Miden’s transaction model. In doing so, users don’t disclose their transaction details or state to the network, thus remaining private. 

It’s also more computationally efficient to verify a proof than to recompute. This is why ZK rollups can scale Ethereum in the first place. That efficiency advantage of ZK rollups actually grows as network activity increases. Verifying batches of user-generated proofs is even cheaper than recomputing batches of individual state transitions. 

In  Miden, privacy is the cheaper option. We could execute and track every transfer in the network, but it’s cheaper and faster if we don’t. Therefore, the more users generate their own proofs and maintain privacy, the more scalable  Miden becomes. 

Privacy is not a secondary effect of the overall design of  Miden. Privacy is its core feature. Real privacy is a benefit for applications and their users and is likely one of the missing pieces for the broad adoption of blockchain technology.
Turing-complete private smart contracts
Beyond simple private transactions,  Miden’s architecture enables expressive private smart contracts. Turing-complete privacy-preserving smart contracts are something very few projects in this space aim to achieve. These contracts are almost exactly like regular smart contracts but are executed locally so that the user does not reveal its code, state, and interaction graph to the network. 

Private smart contracts can interact seamlessly with public smart contracts. For example, private rate-limited wallets can make calls to public DEXs. This means businesses and financial institutions can build and execute their business logic on  Miden, keeping their information hidden from competitors but visible to auditors.

In DeFi, it makes more sense not to reveal a trading strategy or disclose your full portfolio to everyone. This also solves a “centralization” issue—on-chain order book exchanges in DeFi can only compete with exchanges with centralized order books when they provide at least the same level of privacy and throughput. 

For wallets, holding assets off-chain makes even more sense if the balance can be hidden from hackers and competitors. Mass adoption seems far away if everyone can see everything a user buys online with crypto. No one would use credit cards if anyone could go online and see what their neighbor bought. 

And finally, for gaming, privacy can mean that not all players see each other's moves or cards. This is crucial for large, open-world multiplayer games and poker.

## Enabling Privacy Through Off-chain Data and Local Proofs

As described in the overview of  Miden’s state model, users have the option to store their account and note data in three ways: 
Publicly 
Encrypted 
Off-chain 

Public storage implies no privacy, as all data is stored on-chain and visible to everyone. Encrypted data storage also means all data is on-chain, but it only provides visibility to those with the decryption key without offering scalability gains. Off-chain storage ensures the network only knows a commitment to the real data, with users storing the data elsewhere. This approach—combined with client-side proofs—significantly boosts privacy and scalability, as the network has fewer storage and computation requirements. 

Users can modify the stored data (public, encrypted, or off-chain) through transactions. By executing and proving transactions locally,  Miden ensures user privacy. With private data storage (encrypted or off-chain) and local transaction execution, transaction data is visible only to the direct participants. 

Using relay accounts, for example, could even obscure the sender of an asset from the receiver. This makes absolute privacy possible on  Miden.

< Picture 4.1 >

## Remaining Privacy Challenges
This claim of absolute privacy raises a question: Can an experienced observer gain some information by monitoring the network's state and its changes? 

As noted, in  Miden, there are accounts and notes. The data of which can be stored off-chain, and the observer only sees a commitment. However, every note in  Miden has a unique nullifier that points to either 0 or 1, depending on whether the note is already consumed. Now, the observer could watch the nullifier database and observe with which transaction a certain nullifier changes.

For public notes, it is possible to watch the nullifier database and gain information about who consumes a note. In this case, the note data is publicly visible, and the network knows the sender, the recipient, and the assets involved. However, for notes that are stored off-chain, the network only knows the sender and the note hash, with even the sender being mask-able. Outsiders cannot compute and know the nullifier with this information.

< Picture 4.2 >

There remain aspects of the network that could inhibit absolute privacy, such as operators gaining knowledge from user requests. Addressing this issue is an active area of design for the researchers working on  Miden, with potential solutions including having users request more notes than needed and applying local filters.

Another challenge for  Miden and its users is management of the off-chain state. 

## The Road to Enhanced Privacy
As  Miden continues to evolve, so does its privacy approach. In the testnet and initial mainnet of  Miden, clients will be required to send all transaction data, along with the transaction proof, to the operator. This interim measure, which we refer to internally as "privacy training wheels," already offers Web2-like privacy. In time, the researchers working on  Miden anticipate providing stronger privacy guarantees.

The novel architecture of  Miden offers a compelling approach for both privacy and scalability. As we continue refining design, we remain committed to enhancing privacy provisions and pushing the boundaries of what is possible within blockchain technologies.

`;

const PrivacyPost = () => {
  return (
    <div className="prose max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Miden is Ethereum, Extended</h1>
      <p className="text-gray-600">By Bob on March 28, 2024</p>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default PrivacyPost;
