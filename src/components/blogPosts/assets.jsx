import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
# Goal: ASSETS  


`;

const AssetPost = () => {
  return (
    <div className="prose max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Miden is Ethereum, Extended</h1>
      <p className="text-gray-600">By Bob on March 28, 2024</p>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default AssetPost;
