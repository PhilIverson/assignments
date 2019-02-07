import React from 'react'

import BountyDetail from './BountyDetail'
import { withBountyContext } from '.BountyProvider'

function BountyList({ bounties }) {

    const bountyComponents = bounties.map(bounty => <BountyDetail key=
    {bounty._id} {...bounty}/>)
    return (
        <div>
            {bountyComponents}
        </div>
    )
}

export default withBountyContext(BountyList);