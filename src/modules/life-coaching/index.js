import React from 'react'
import LifeHeader from './LifeHeader'
import Lifedetails from './Lifedetails'
import CoachProfile from 'modules/commanmodules/CoachProfile'
import { usersList1 } from 'modules/Constant/Coachdata'

export default function LifeCoching() {
    console.log('dddd', usersList1)

    return (
        <div>
            <LifeHeader />
            <Lifedetails />
            <CoachProfile data={usersList1} />

        </div>
    )
}