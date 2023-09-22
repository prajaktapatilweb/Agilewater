import React from 'react';
import AppPage from '../../@crema/hoc/UserPage';
import asyncComponent from '../../@crema/utility/asyncComponent';

const Quiz = asyncComponent(() => import('../../modules/Quiz'));
export default AppPage(() => <Quiz />);
