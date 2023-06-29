import React from 'react';
import Gridcheck from '../Gridcheck';
import Imagepara from './Imagepara';
import Videodemo from './Videodemo';
import Sectiondemo from '../Sectiondemo';
import Herosection from 'modules/commanmodules/Herosection';
import EnhancedTable from '../../commanmodules/EnhancedTable';
import CourseTable from './CourseTable';


export default function SafeAgileCert() {
    return (
        <>

            {/* <Herosection /> */}
            <Imagepara />
            <Videodemo videoPromo={'sd'} />

            <Sectiondemo />




            <CourseTable />

            {/* <EnhancedTable /> */}
            {/* <Gridcheck /> */}



        </>
    );
}
