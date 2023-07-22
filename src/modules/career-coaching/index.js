import React from 'react'
import CareerHeader from './CareerHeader'
import Careerdetails from './Careerdetails'
import { usersList2 } from 'modules/Constant/Coachdata'
import CoachProfile from 'modules/commanmodules/CoachProfile'

export default function index() {
    return (
        <div>
            <CareerHeader />
            <Careerdetails />
            <CoachProfile data={usersList2} />
            {/* <CareerCoach /> */}

        </div>
    )
}
