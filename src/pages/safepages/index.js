// import React from 'react';
// import AppPage from '../../@crema/hoc/UserPage';
// import asyncComponent from '../../@crema/utility/asyncComponent';

// const Crypto = asyncComponent(() => import('../../modules/safepages'));
// export default AppPage(() => <Crypto />);
import React from 'react';

const Crypto = asyncComponent(() => import('../../modules/safepages/SafeAgileCert'));
export default AppPage(() => <Crypto />);
