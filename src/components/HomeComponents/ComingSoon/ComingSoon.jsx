import React from 'react';

const MidenInfo = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="max-w-screen-md p-4 text-left">
      <h1 className="text-4xl font-bold mb-2 text-center">Miden</h1>
      {/* <h2 className="text-2xl font-semibold mb-4 text-center">Privacy Scales Better</h2> */}
      <p className="text-base leading-relaxed">
        Miden is the next-generation blockchain protocol designed from the ground up to take full 
        advantage of the capabilities unlocked by ZK technology. It takes the core concept of ZK 
        rollups to its logical conclusion and pushes both state and execution to the edge (i.e., 
        the client side). This allows Miden to simultaneously address the problems plaguing 
        transparent and synchronous blockchains in scalability, privacy, and safety.
      </p>
      <p className="text-center font-semibold mt-8">+++ Coming soon +++</p>
    </div>
  </div>
);

export default MidenInfo;
