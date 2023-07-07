import React from 'react'
import AgileHeader from './AgileHeader'
import Agiledetails from './Agiledetails'
import CoachProfile from 'modules/commanmodules/CoachProfile'
import { usersList } from 'modules/Constant/Coachdata'

export default function index() {
    return (
        <div>
            <AgileHeader />
            <Agiledetails />
            <CoachProfile data={usersList} />


        </div>
    )
}
