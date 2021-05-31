import React from 'react';
import Head from 'next/head';
import { ProfilePage } from '../components/ProfilePage';
import { UserApi } from '../api/UserApi';

const MyProfile = ({ user, orders }) => {
  return (
    <div>
      <Head>
        <title>Привет, мир!</title>
      </Head>
      <ProfilePage user={user} orders={orders} />
    </div>
  );
};

export async function getServerSideProps(ctx) {

  const user = await UserApi().getMe(ctx);
  const orders = await UserApi().orders(ctx);
  if (!user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  if (!orders) {
    return {
      props: { user, orders: [] },
    }
  }

  return {
    props: { user, orders }, // will be passed to the page component as props
  }
}

export default MyProfile;