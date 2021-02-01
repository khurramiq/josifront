import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Home = (props) => {
  let history = useHistory();  

  const goToSurveyForm = () => {
    history.push("/survey");
  };

  return (
    <div>      
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            fontWeight: "300",
            marginTop: "20vh",
          }}
        >
          There will be home page text and layout that we will design later,
          <br /> may be in phase 2.
        </h1>
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: "#1769AA" }}
          onClick={() => goToSurveyForm()}
        >
          Create Survey
        </Button>
      </div>
    </div>
  );
};

export default Home;
