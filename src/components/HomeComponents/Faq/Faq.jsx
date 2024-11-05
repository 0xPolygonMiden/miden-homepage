import React, { useState } from "react";
import { useCollapse } from "react-collapsed";
import { BsPlusLg } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import SubTitile from "../../common/SubTitle";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded: isOpen,
  });

  return (
    <div className="container">
      <div className="2xl:w-[1264px] mx-auto mt-[15px] rounded-[6px] bg-white border border-[#B3BAC5] px-[10px]">
        <button
          {...getToggleProps({
            onClick,
            style: {
              width: "100%",
              padding: "20px",
              backgroundColor: "#FFF",
              fontSize: "16px",
              fontWeight: "normal",
              cursor: "pointer",
              textAlign: "left",
              outline: "none",
              border: "1px solid transparent",
              borderRadius: "16px",
              transition: "background-color 0.3s ease",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            },
          })}
        >
          {question}

          {isOpen ? (
            <RxCrossCircled className="text-[20px]" />
          ) : (
            <BsPlusLg className="text-[20px]" />
          )}
        </button>

        <section {...getCollapseProps()}>
          <div className="p-[10px] w-full">
            <h4 className="text-[#747474] text-[16px] leading-6">{answer}</h4>
          </div>
        </section>
      </div>
    </div>
  );
};



const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
      {
        question: "What is Miden?",
        answer:
          "Miden is an Ethereum Layer-2 solutions that uses zero-knowledge (ZK) technology to achieve unbounded scalability, privacy by default, and safer smart contract development. It allows users to execute and prove transactions locally, pushing execution to the client side.",
      },
      {
        question: " Why is Miden scalable?",
        answer:
          "Miden uses client-side proving, enabling users to execute transactions locally. This eliminates the need for the network to re-execute transactions, drastically reducing the load and allowing the network to handle vast volumes of transactions",
      },
      {
        question: "How does Miden ensure privacy?",
        answer:
          "Miden uses client-side execution, meaning users maintain control over their data and transaction details. The network only needs to verify commitments to states, enabling private transactions without revealing the underlying data.",
      },
      {
        question: " What makes Miden different from other blockchains?",
        answer:
          "Unlike traditional blockchains that suffer from transparency, synchronicity, and scalability issues, Miden leverages ZK technology for scalable, private, and secure smart contract execution. Its architecture is designed from the ground up with privacy and scalability in mind.",
      },

      {
        question: "What is client-side proving?",
        answer:
          "Client-side proving is the process where users execute and prove their transactions locally on their devices. The network then verifies these proofs without needing to re-execute the transactions, which improves scalability and privacy.",
      },
      {
        question: "What programming language does Miden use for smart contracts?",
        answer:
          "Miden uses Rust as its primary smart contract development language. Rust is known for its safety and performance, making blockchain development more accessible and secure for developers",
      },

      {
        question: "How does Miden reduce risks for developers?",
        answer:
          "Miden provides a safer development environment by using Rust, account abstraction, and in-protocol safeguards like self-custodied state. This minimizes the risks of bugs and makes it harder for vulnerabilities to be exploited.",
      },

      {
        question: "What is Miden’s roadmap for launch?",
        answer:
          "Miden is set to launch on mainnet in 2025, initially operating in a centralized mode with up to 100 TPS. The network will gradually decentralize, scaling to 100,000 TPS and providing full privacy and post-quantum security over the next few years.",
      },
      {
        question: "How does Miden handle state storage?",
        answer:
          "Miden minimizes state bloat by allowing users to self-custody their state. The network only needs to store commitments to the state, drastically reducing the storage burden on nodes.",
      },
      {
        question: "What are the advantages of using ZK technology in Miden?",
        answer:
          "ZK technology enables Miden to achieve privacy, scalability, and safety. It allows for the verification of complex transactions without revealing data, ensuring that users maintain control over their information while scaling the network.",
      },
      {
        question: "How does Miden compare to other ZK-based blockchains?",
        answer:
          "Miden differentiates itself by not requiring developers to learn new domain-specific languages (DSLs). It combines high throughput and privacy without sacrificing programmability, offering a more accessible and scalable solution compared to other ZK chains",
      },
      {
        question: " What is the Actor Model in Miden?",
        answer:
          "The Actor Model is a design pattern used by Miden where independent entities (actors) communicate through asynchronous messages. This model, combined with ZK proofs, allows state transitions to be proven and transactions to be processed in parallel.",
      },
      {
        question: "Will Miden support decentralized applications (dApps)?",
        answer:
          "Yes, Miden is designed to support a wide range of dApps, including DeFi, payments, and play-to-earn games. Its privacy-preserving architecture and scalability make it ideal for building secure, high-throughput applications",
      },
      {
        question: "Can Miden achieve mass adoption of web3?",
        answer:
          "Miden’s ZK-centric design addresses the limitations of current blockchain infrastructure, enabling the scalability, privacy, and safety needed for mass adoption of web3. It aims to support critical infrastructure and millions of transactions per second.",
      },
      {
        question: "What is Miden’s long-term vision?",
        answer:
          "Miden’s vision is to be secure and performant enough to support the financial infrastructure of a medium-sized country within five years. The protocol will be fully decentralized, providing absolute privacy and post-quantum security.",
      },
    ];
  
    const handleClick = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <section className="pt-[40px] pb-[80px] sm:pt-[60px] sm:pb-[100px] md:pt-[80px] md:pb-[120px] mt-[40px] lg:mt-[20px] xl:mt-[40px] 2xl:mt-[100px]">
        <div className="container max-w-full mx-auto px-[10px] sm:px-[20px] md:px-[30px] lg:px-[50px]">
          <div className="flex flex-col gap-y-3 justify-center items-center mb-[30px] sm:mb-[40px] md:mb-[60px]">

            <h2 className="text-primaryBlack text-center text-[32px] leading-[40px] sm:text-[40px] sm:leading-[50px] xlg:text-[54px] md:leading-[64px] font-semibold">
              Frequently Asked Questions
            </h2>

            <SubTitile texts="Miden pushes state and execution to the edge - the user's client."/>
          </div>

          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </section>
    );
};

export default Faq
