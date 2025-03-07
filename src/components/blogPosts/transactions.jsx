import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
# Miden: Transaction Model

Miden, a ZK-optimized rollup that extends Ethereum’s feature set, will complement existing zero-knowledge solutions aiming to become the internet's value layer. This post is the second in a series meant to introduce Miden, the motivations behind its design, and the one-of-a-kind features it offers.

Last month, Miden’s goals and core features were outlined. What follows will focus on the core concepts of Miden: Accounts, Notes, and Transactions.

In Miden, there are accounts and notes, both of which can hold assets. Transactions can be understood as facilitating account state changes. Basically, they take one single account and some notes as input and output the same account at a new state together with some other notes. This is quite different from what we see on Ethereum, and it allows Miden to extend Ethereum’s feature set.

## Accounts Store Assets and Code

In Miden, accounts hold assets and define rules of how these assets can be transferred. This is quite similar to how accounts work on Ethereum, but there are some important differences.

< Picture 2.1 >

First, in Miden, every account has code, whereas, on Ethereum, externally owned accounts (EOAs) do not. That means all accounts on Miden are smart contracts—the concept is called Account Abstraction. That leads to a better user experience and safer wallets—imagine the ability to rotate keys, rate limit, social recovery, among others.

Second, in Miden, assets are stored locally in the account. On Ethereum, only ETH balances are stored locally in the accounts. This means that the account’s data structure is the only place where information about the account’s ETH balance is stored. In contrast, in Miden, all assets are stored locally in the account. This provides privacy and scalability. If you recall, in Miden, users can keep the account data private. Information about what assets or code a certain account holds does not need to be visible to others.

How does this provide scalability? Storing assets locally allows any token transaction to touch only one account, which is needed for concurrency. In contrast, ERC20 tokens on Ethereum are smart contracts that store a list of accounts that own the contract’s token and the respective balance. The owner of an ERC20 token needs to change that contract to transfer the token. In Miden, tokens are not stored in a public list.

Third, Miden’s account IDs are just 8 bytes long, whereas Ethereum’s account addresses are 20 bytes long. It should be easier to remember fewer characters. This is possible because every account has code. There is no need to tie the public key to the account’s ID, where there are other methods to authenticate.

## Accounts Communicate Using Notes

This is similar to the Actor Model in distributed systems. As described in the overview of Miden, the Actor Model is an approach for achieving concurrent state changes in distributed systems. Actors play the role of little state machines, meaning each actor is responsible for their own state. Actors have inboxes to send and receive messages to communicate with other actors. Messages can be read asynchronously. After reading a message, an actor can change its state. Notes in Miden function like messages.

In Miden, accounts communicate with one another by producing and consuming notes. Notes are messages carrying assets that accounts can send to each other—a note stores assets and a script that defines how this note can be consumed. This script allows for more than just the transferring of assets.

The concept of notes is a key difference between Ethereum’s Account-based model and Miden, which uses a hybrid UTXO- and Account-based state-model.

Consider the following: On Ethereum, sending $5 from one account to another means taking $5 out of your wallet and putting it directly into the receiver's wallet. When you have the other person’s wallet in your hand, no one else can put something in there—there is a global lock. On Miden, there are bills, or notes. In this mental model, you take a $5 bill out of your wallet and put it into a lockbox. Regardless of what happens next, you are $5 poorer. For someone to retrieve the bill, she needs to know the lock's combination. And if she does, she can put the bill in her wallet. Your action (putting the bill into the lockbox) and her action (taking the bill from the box) are distinct.

## Transactions: Producing and Consuming Notes

When accounts consume or produce notes, we call that a transaction. A transaction is always executed against a single account, and it causes a state change in that single account.

< Picture 2.2 >

That means sending an asset from one account to another requires two transactions: one transaction to create the note and another transaction to consume that note by another account.

< Picture 2.3 >

Think of the above example: When you put the $5 bill in the lockbox, that’s your individual state transition and the first transaction. However, when this second person takes the $5 bill from the lockbox, her own individual state transition has occurred, plus $5. These are the two transactions for transferring one asset in Miden. This second person could even open several lockboxes simultaneously and “consume” all bills in one transaction.

Here are some compelling things that can be done with this transaction model:

Transactions can be executed and proven locally because they only involve one single account. This provides privacy and lowers the costs of complex computations because there is no re-execution by several network participants.

Furthermore, until another account has consumed a note, the creator of that note can update it. Updating a note can be done by revealing a hashed part of the note’s script. A note’s script could say, “Consume this 5 ETH AND send Bob 10 MATIC OR 0x213 …”. Then, if no one consumes this note, the creator could reveal “0x213 = Consume this 5 ETH AND send Bob 9 MATIC”. In our analogy, you can update the lock. Think of market makers updating an on-chain order book for free and in no time.

Another interesting wrinkle is that if a note is sent to the wrong address, the creator could recall it. Think of those many users who accidentally sent something to the wrong address on Ethereum or Bitcoin. On Miden, the creator of a given transaction can configure it such that a note can be recalled if it hasn’t yet been consumed.

## Transactions Involving Public Shared State

Ok, so Miden accounts can locally execute and prove their transactions because a transaction only changes its own state. But what if a public state is involved? Imagine there is a Uniswap-like contract—which is simply another account—that changes after it consumes and produces some notes. This change must be visible to all other users because it affects their exchange rate.

Basically, an account that needs its state to be public cannot execute and prove its transactions locally. Those network transactions must be executed and proven by the Miden operator. In this case, Miden works similarly to all other ZK Rollups, where specialized provers create the proofs of valid state transitions.

Let’s look at the architecture of how two accounts can swap tokens with a Uniswap-like contract. From left to right, we can break down this sequence into discrete phases.

< Picture 2.4 >

Token Swap Initiation

Acct1 and Acct2 want to trade on a Uniswap-like contract.
Tx1 creates Note1 and can be locally executed by Acct1.
Tx2 creates Note2 and can be locally executed by Acct2.
Uniswap Execution

In Tx3, Uniswap consumes Note1 and Note2 (and all the other notes that are in its inbox) and creates Note3 and Note4 in the same transaction.
Because Uniswap’s state must be publicly visible, this state change is performed by the Miden operator.
Token Swap Finalization

Acct1 and Acct2 now get their swapped tokens back.
Tx4 consumes Note3 and can again be locally executed by Acct1.
Tx5 consumes Note4 and can again be locally executed by Acct2.
`;

const TransactionsPost = () => {
  return (
    <div className="prose max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Miden is Ethereum, Extended</h1>
      <p className="text-gray-600">By Bob on March 28, 2024</p>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default TransactionsPost;
