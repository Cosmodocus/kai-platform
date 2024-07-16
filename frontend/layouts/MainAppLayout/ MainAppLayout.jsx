import React, { useEffect } from 'react';

import { Grid, useMediaQuery } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import AppDisabled from '@/components/AppDisabled';
import Loader from '@/components/Loader';

import ROUTES from '@/constants/routes';

import SideMenu from './SideMenu';
import styles from './styles';

import ApplicationErrorPage from '@/pages/app-error';
import NetworkErrorPage from '@/pages/network-error';
import { setLoading } from '@/redux/slices/authSlice';

/**
 * Renders the main application layout.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {ReactNode} props.children - The child components to render.
 * @param {Object} props.extraContentProps - The additional properties for the extra content.
 * @param {boolean} props.isToolPage - Indicates if the layout is for a tool page.
 * @return {ReactNode} The rendered main application layout.
 */
const MainAppLayout = (props) => {
  const { children, extraContentProps, isToolPage } = props;
  const dispatch = useDispatch();
  const router = useRouter();

  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);

  const isTabletScreen = useMediaQuery((theme) =>
    theme.breakpoints.down('laptop')
  );

  const isLoading = auth.loading || !user.data || !auth.data;

  useEffect(() => {
    dispatch(setLoading(false));
  }, []);

  // Check for network error and redirect to NetworkErrorPage
  if (typeof window !== 'undefined' && !window.navigator.onLine) {
    return <NetworkErrorPage />;
  }

  // Check for application error and redirect to ApplicationErrorPage
  if (auth.error || user.error) {
    return <ApplicationErrorPage />;
  }

  if (isLoading) return <Loader />;

  const renderHead = () => {
    return (
      <Head>
        <title>Kai AI</title>
      </Head>
    );
  };

  const renderApp = () => {
    const isErrorPage =
      router.pathname === ROUTES.APP_ERROR ||
      router.pathname === ROUTES.NETWORK_ERROR ||
      router.pathname === '/404';

    return (
      <>
        {!isErrorPage && <SideMenu />} {/* Conditionally render the SideMenu */}
        <Grid {...styles.contentGridProps(extraContentProps, isToolPage)}>
          {children}
        </Grid>
      </>
    );
  };

  return (
    <Grid {...styles.mainGridProps}>
      {renderHead()}
      {isTabletScreen && <AppDisabled head={renderHead()} />}
      {!isTabletScreen && renderApp()}
    </Grid>
  );
};

export default MainAppLayout;
