import React from 'react';
import Head from 'next/head';
import { ProfilePage } from '../../components/ProfilePage';

const MyProfile = (props) => {
  return (
    <div>
      <Head>
        <title>Привет, мир!</title>
      </Head>
      <ProfilePage />
    </div>
  );
};

export default MyProfile;