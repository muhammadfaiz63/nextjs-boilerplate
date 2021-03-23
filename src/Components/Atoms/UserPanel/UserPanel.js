import React, { useMemo } from 'react';
import { useAuth } from '../../../Contexts/Auth';
import {
  AccountCircle
} from '@material-ui/icons';

export default function ({ menuMode }) {
  const { user, signOut } = useAuth();

  const menuItems = useMemo(() => ([
    {
      text: 'Profile',
      icon: 'user'
    },
    {
      text: 'Logout',
      icon: 'runner',
      onClick: signOut
    }
  ]), [signOut]);

  return (
    <div className={'user-panel'}>
      <div className={'user-info'}>
          <AccountCircle style={{fontSize:30,color:"#fff"}}/>
        {/* <div className={'user-name'}>{user.displayName}</div> */}
      </div>
    </div>
  );
}
