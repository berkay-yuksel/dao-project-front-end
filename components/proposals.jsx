
import proposalsstyles from '../styles/Proposals.module.css'




const Proposals = ({proposals}) => {

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
{ 
proposals &&   proposals.map((proposal,index)=>(
  <tr key={index}>
  <td>{proposal[0]}</td>
  <td>{proposal[1]}</td>
  <td>{proposal[2] ? "Passed": "Rejected" }</td>
  <td>go to proposal page</td>
</tr>
))
}
</tbody>
</table>
</div>
<div>2</div>

    </div>
  )
}

export default Proposals