import { useState } from "react";
import proposalsstyles from "../styles/Proposals.module.css";
import { useWeb3ExecuteFunction } from "react-moralis";

const Proposals = ({ proposals, voters }) => {
  const contractProcessor = useWeb3ExecuteFunction();
  const [sub, setSub] = useState();

  const [proposalContent, setproposalContent] = useState("Default Proposal");

  async function createProposal() {
    let options = {
      contractAdress: "0x7D313ce46b24D71D2e76b927B0548D91e0B61DE0",
      functionName: "createProposal",
      abi: [
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
      params: {
        _description: "Test Proposal 2",
        _canVote: [0x816b691e069244b6470ace992ce9138a62a18163,0xc15947e34356073d5c067c738a1856819caaa3ac,0x1ceaf4f9952852bec0e46f1d0530b43f6479570f],
      },
    };
    
    
    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        console.log("proposal successful");
        setSub(false);
      },
      onError: (error) => {
        console.log(error);
        alert(error);
        setSub(false);
      },
      
    });
    

  }

  return (
    <div className={proposalsstyles.proposals_container}>
      <div>
        <h3>Proposals</h3>
        <table>
          <tbody>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Status</th>
              <th>Voted</th>
            </tr>
            {proposals &&
              proposals.map((proposal, index) => (
                <tr key={index}>
                  <td>{proposal[0]}</td>
                  <td>{proposal[1]}</td>
                  <td>{proposal[2] ? "Passed" : "Rejected"}</td>
                  <td>go to proposal page</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className={proposalsstyles.create_proposal_container}>
        <h4>223 of 300 proposals has been passed until this day.</h4>
        <form
         

        >
          <input
            type="textarea"

            onChange={(e) => {
              setproposalContent(e.target.value);
            
            }}
          />
          <br />
          <button type="submit" value="Submit" onClick={createProposal}>
            Send your proposal
          </button>
        </form>
      </div>
    </div>
  );
};

export default Proposals;
