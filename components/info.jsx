import React from 'react'
import infostyles from '../styles/Info.module.css'
const Info = ({totalP,voters}) => {
 
  return (
    <div className={infostyles.info_container}>
<div>
  <h3>Created Proposals</h3>
  <p>{totalP && totalP}</p>
</div>
<div>
<h3>Eligible Voters</h3>
<p>{voters && voters.length}</p>
</div>
<div>
<h3>Ongoing Proposals</h3>
<p>counted-totalP</p>
</div>

    </div>
  )
}

export default Info