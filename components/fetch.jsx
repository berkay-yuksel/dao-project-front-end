import {useState,useEffect} from 'react';
import { useMoralis, useMoralisWeb3Api, useWeb3ExecuteFunction} from "react-moralis";

const FetchComponent = () => {
    const { data, error, fetch, isFetching, isLoading } = useWeb3ExecuteFunction();
    
    const options = {
      abi:  [
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_description",
              "type": "string"
            },
            {
              "internalType": "address[]",
              "name": "_canVote",
              "type": "address[]"
            }
          ],
          "name": "createProposal",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
      contractAddress: "0x7D313ce46b24D71D2e76b927B0548D91e0B61DE0",
      functionName: "createProposal",
      params: {
        _description: "Test Proposal 2",
        _canVote: [0x816b691e069244b6470ace992ce9138a62a18163,0xc15947e34356073d5c067c738a1856819caaa3ac,0x1ceaf4f9952852bec0e46f1d0530b43f6479570f],
      },

    }
  
    return (<div>
      {error && <div>{error.message}</div>}
      <button onClick={() => fetch({ params: options })} disabled={isFetching}>Fetch data</button>
      {data && <pre>
        {JSON.stringify(data)}
      </pre>}
    </div>)
  }

  export default FetchComponent;