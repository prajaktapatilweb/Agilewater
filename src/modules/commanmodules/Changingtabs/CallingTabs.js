import React from 'react'
import LabTabs from '../LabTabs'

export default function CallingTabs() {
    return (
        <div>
            <LabTabs data={[
                { label: 'Dashboard', panelData: 'Item One' },
                { label: 'FAQ', panelData: 'Item two' },
                { label: 'EEE', panelData: 'Item ewe' }
            ]} />
        </div>
    )
}
