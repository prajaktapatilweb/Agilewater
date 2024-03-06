import React from 'react';
import Countup from './Countup';
import CoachCoursecard from './CoachCoursecard';
import Registerform from './Registerform';
import Testimonial from './Testimonial';
import Certcourse from './Certcourse';
import Indexclient from './Indexclient';
import Paralloxsec from './Paralloxsec';
import Herohome from './Herohome';

export default function indexfile2() {
  return (
    <div>
      <Herohome></Herohome>
      <Countup />
      <Certcourse></Certcourse>
      <Registerform></Registerform>
      <CoachCoursecard />
      <Testimonial></Testimonial>
      <Paralloxsec></Paralloxsec>
      <Indexclient></Indexclient>
    </div>
  );
}
