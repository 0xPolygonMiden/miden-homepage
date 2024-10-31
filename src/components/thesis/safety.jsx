import React from 'react';
import ReactMarkdown from 'react-markdown';
import AccountsImage from '../../assets/Image/Accounts.png';
import LanguagesImage from '../../assets/Image/Languages.png';

const markdown = `
# Safe development for the masses

Miden incorporates years of learning and best practices of modern blockchain protocols to make smart contract development safer and easier. Client-side proving makes exploiting bugs categorically more difficult. Using Rust as the primary contract development language makes Miden accessible to crypto-native and non-crypto developers alike.

### In-protocol safeguards

First, every account on Miden is a smart contract (this is frequently called account abstraction). This enables developers to build safer user wallets with features like social key recovery, rate-limited withdrawals, recallable transactions, and more. These features naturally lead to a more fault-tolerant user experience and make blockchains safer to use.

![Accounts](${AccountsImage})

Second, Miden treats all assets, both fungible and non-fungible, as first-class citizens. That is, there is no difference between native and user-defined assets — all invariants that usually apply to native assets also apply to user-defined assets. One consequence of this is that assets are stored locally in accounts and notes (rather than in global token contracts). This helps eliminate giant honeypot contracts, where a single exploit may lead to the immediate loss of millions of dollars.

The above is a direct consequence of using the Actor Model, where each actor's state and resources are stored locally. However, actor-centric development has other benefits as well. For example, it forces developers to think explicitly through account state transitions, eliminating a large category of potential bugs related to the complexities of reasoning about a global shared state.

Client-side proving and private accounts make smart contract bugs much more difficult to exploit. Even if an attacker identifies a bug in a contract, they will have difficulty determining which accounts deploy this contract. Once they've identified such accounts, they will need to obtain the latest states of these accounts to exploit the bug. More importantly, perhaps, this greatly narrows the set of potential attackers, making them more easily identifiable and thus making contract exploits a much more risky business.

### Rust as a smart contract development language

At the core of the Miden execution environment is the Miden VM, a virtual machine designed specifically to be efficiently provable using ZK technology and to support private program execution required for client-side proving. However, to make the development on Miden as easy as possible, we've decided against developing a bespoke language for the Miden VM. Instead, the VM can execute programs written in any language that can be compiled into WebAssembly.

![Languages](${LanguagesImage})

One such language is Rust, which will be the primary smart contract development language on Miden. Besides being a safe and mature programming language, Rust is familiar to most developers in the crypto industry and to many more developers beyond, and thus, it should cause minimal friction for new developers wanting to build on Miden.
`;

const Safety = () => {
  return (
    <div className="prose max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Safety</h1>
        <p className="text-gray-600">By Bob on March 28, 2024</p>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default Safety;