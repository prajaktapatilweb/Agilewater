import {useJWTAuthMethod} from '@crema/utility/AuthHooks';
import {Button} from '@mui/material';
import React from 'react';

export default function AdminPage() {
  const {logout} = useJWTAuthMethod();
  return (
    <div>
      Admin PageList
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}
