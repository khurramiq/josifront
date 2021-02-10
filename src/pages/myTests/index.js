import React, { useState, useEffect, lazy } from "react";
import ToolBox from "../../components/ToolBox";
import QuestionPreviewBox from "../../components/QuestionPreviewBox";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { initialState } from "./actions";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllSurveyQuestions, recentQuestion } from "../../redux/actions/questionActions";
const PropertiesBox = lazy(() => import("../../components/PropertiesBox"));

const MyTests = () => {
  let history = useHistory();
  const _survey = useSelector((state) => state.survey);
  const _question = useSelector((state) => state.question);
  const [open, setOpen] = useState(true);
  const [openPropertiesBox, setOpenPropertiesBox] = useState(true);
  const [question, setQuestion] = useState(initialState);
  const [questionForUpdate, setQuestionForUpdate] = useState(initialState); 
  const dispatch = useDispatch();

  useEffect(() => {    
    if (_survey.recentSurvey!=='') {      
      dispatch(getAllSurveyQuestions({surveyId:_survey.recentSurvey}));
      dispatch(recentQuestion({surveyId:_survey.recentSurvey}));
    }
  }, [_survey.recentSurvey])

  useEffect(() => {    
    if (_question.data.length>0) {      
      for (let i = 0; i < _question.data.length; i++){
        if (_question.data[i]._id === _question.recentQuestion) {
          setQuestionForUpdate(_question.data[i]);      
        }
      }
    }
  }, [_question.data, _question.recentQuestion])

  if (_survey.data.length === 0 && !_survey.loading) {
    history.push("/");
  }

  const handleToolDrawerChange = () => {
    setOpen((prevState) => !prevState);
  };

  const handlePropertiesDrawerChange = () => {
    setOpenPropertiesBox((prevState) => !prevState);
  };

  return (
    <div style={{ marginTop: "70px" }}>
      <ToolBox
        open={open}
        handleToolDrawerChange={handleToolDrawerChange}
        setQuestion={setQuestion}
        question={question}
      />

      {/* properties box */}
      <PropertiesBox
        open={openPropertiesBox}
        handleDrawerClose={handlePropertiesDrawerChange}
        question={question}
        setQuestion={setQuestion}
        questionForUpdate={questionForUpdate}
        setQuestionForUpdate={setQuestionForUpdate}
        surveyList={_survey.data}
        recentSurvey={_survey.recentSurvey}
      />
      {/* tool box open */}
      <IconButton
        style={open ? { display: "none" } : null}
        onClick={handleToolDrawerChange}
      >
        <ChevronRightIcon />
      </IconButton>
      {/* properties box open */}
      <IconButton
        style={openPropertiesBox ? { display: "none" } : { marginLeft: "25%" }}
        onClick={handlePropertiesDrawerChange}
      >
        <ChevronRightIcon />
      </IconButton>

      {/* question pre veiw box */}
      <QuestionPreviewBox />
    </div>
  );
};

export default MyTests;
