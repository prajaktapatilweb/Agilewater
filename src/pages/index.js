import React from 'react';
import AppPage from '../@crema/hoc/UserPage/index';
import asyncComponent from '../@crema/utility/asyncComponent';

const MainPage = asyncComponent(() => import('../modules/Indexfile2'));
export default AppPage(() => <MainPage />);
