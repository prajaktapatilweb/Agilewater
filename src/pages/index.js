import React from 'react';
import AppPage from '../@crema/hoc/UserPage/index';
import asyncComponent from '../@crema/utility/asyncComponent';

const MainPage = asyncComponent(() => import('../modules/career-coaching'));
export default AppPage(() => <MainPage />);
