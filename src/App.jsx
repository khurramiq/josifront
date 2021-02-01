import React, { Fragment, Suspense, useEffect, lazy } from "react";
import Container from "@material-ui/core/Container";
import { getCurrentUser } from "./redux/actions/userActions";

import { connect } from "react-redux";

import SnackBar from "./components/alerts/successMessage";
import CircularProgress from "@material-ui/core/CircularProgress";
const Topnav = lazy(() => import("./components/topNav"));
const Public = lazy(() => import("./routes/public"));
const Private = lazy(() => import("./routes/private"));

const App = ({ Auth, getCurrentUser, isLoading, profile }) => {
  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return (
    <Suspense fallback={<Fragment />}>
      {!Auth && !isLoading ? (
        <Container fluid="true">
          <Public />
        </Container>
      ) : Auth && profile && !isLoading ? (
        <>
          <Topnav />
          <Private />
        </>
      ) : (
        <Container
          fluid="true"
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress color="primary" size="6rem" />
        </Container>
      )}
      <SnackBar />
    </Suspense>
  );
};

const mapStateToProps = (state) => {
  return {
    Auth: state.User.Auth,
    isLoading: state.User.isLoading,
    profile: state.User.profile,
  };
};

export default connect(mapStateToProps, { getCurrentUser })(App);
