import React from "react";
import Alert from '@material-ui/lab/Alert';
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import { createSurvey } from "../../redux/actions/surveyActions";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { Grid } from "@material-ui/core";

import "./style.css";
const alertStyle ={
    marginTop:'10px',
    marginBottom:'20px',
};

const SurveyForm = (props) => {
  const { formData: survey, handleField } = useForm();
    const dispatch = useDispatch();
    const _survey = useSelector(state => state.survey);

  const submit = (e) => {
    e.preventDefault();
    console.log(survey);
    dispatch(createSurvey(survey));
  };

  return (
    <div>
      <div className="survey-from-wrapper">
        <h1>New Survey</h1>
        <Grid item xs={12}>
          {_survey.isError && (
            <Grid item xs={12}>
              <Alert variant="filled" severity="error" style={alertStyle}>
                {_survey.errorText}
              </Alert>
            </Grid>
          )}
        </Grid>
        <form onSubmit={submit} className="survey-form">
          <TextField
            id="outlined-basic"
            name={"title"}
            label="Survey title *"
            variant="outlined"
            className="inputfield"            
            value={survey.title || ""}
            onChange={handleField}
            autoComplete="off"
          />

          <TextareaAutosize
            aria-label="minimum height"
            name={"description"}
            rowsMin={8}
            placeholder="Survey Discreption (optional)"
            className="inputfield"
            value={survey.description || ""}
            onChange={handleField}
            autoComplete="off"
          />

          <TextareaAutosize
            aria-label="minimum height"
            name={"purpose"}
            rowsMin={8}
            placeholder="Survey purpose (optional)"
            className="inputfield"
            value={survey.purpose || ""}
            onChange={handleField}
          />

          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: "#1769AA" }}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SurveyForm;
