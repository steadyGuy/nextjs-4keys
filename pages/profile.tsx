import React from 'react';
import Head from 'next/head';
import { ProfilePage } from '../components/ProfilePage';
import { UserApi } from '../api/UserApi';

const MyProfile = ({ user }) => {
  return (
    <div>
      <Head>
        <title>Привет, мир!</title>
      </Head>
      <ProfilePage user={user} />
    </div>
  );
};

export async function getServerSideProps(ctx) {

  const user = await UserApi().getMe(ctx);

  if (!user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { user }, // will be passed to the page component as props
  }
}

export default MyProfile;