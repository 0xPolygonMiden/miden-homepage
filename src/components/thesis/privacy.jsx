import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
# Privacy by default

A natural consequence of client-side proving is privacy. If the users themselves can execute contract code, there is no need to share this code with the network - only the commitment to the code needs to be made public. Similarly, if users and apps self-custody their state, the network only knows commitments to this state, not the contents of the underlying account balances and storage. Client-side proving and self-custodied state is perhaps the only way to achieve real privacy and private transactions.

However, Miden architecture goes beyond local execution and private state to support the full spectrum of capabilities we have come to expect from blockchains. Specifically, accounts and notes on Miden can be either private, encrypted, or public. In the case of a public state, the data is stored on a chain in plaintext, similar to how it works in transparent blockchains. When it is desirable to store the data on-chain but not make it public, encrypted state can be used. And finally, as mentioned before, if users self-custody their state, only the commitments go on-chain.

Similarly, while Miden’s core value proposition is client-side execution, public smart contracts can be executed by the network in the same manner as in most other blockchains. However, on Miden, private smart contracts can seamlessly interact with public smart contracts. For example, private rate-limited wallets can make calls to public DEXs, private asset swaps can use public oracles, etc.

This design results in unprecedented flexibility. Developers can mix and match public and private accounts with local and network execution to address use cases currently infeasible on any other blockchain.

But perhaps the most distinguishing aspect of the Miden design is that being private on Miden is cheaper than being public. This is because local execution and self-custodied state impose minimal burden on the network, so fees for private transactions are necessarily lower than fees for public transactions. The importance of this property cannot be overstated as we believe that designs, where privacy costs extra, are simply non-viable.

`;

const Privacy = () => {
  return (
    <div className="prose max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Privacy</h1>
        <p className="text-gray-600">By Bob on March 28, 2024</p>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default Privacy;