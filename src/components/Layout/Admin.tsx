import LogoutButton from 'features/auth/pages/LogoutBtn';
import * as React from 'react';

export interface AdminProps {
}

export function Admin (props: AdminProps) {
  return (
    <div>
      Admin
      <LogoutButton/>   
    </div>
  );
}
