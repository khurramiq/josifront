import React, { useState } from "react";
import ToolBox from "../../components/ToolBox";
import PropertiesBox from "../../components/PropertiesBox";
import QuestionPreviewBox from "../../components/QuestionPreviewBox";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { initialState } from './actions';

const MyTests = () => {    
  const [open, setOpen] = useState(true);
  const [openPropertiesBox, setOpenPropertiesBox] = useState(true);
  const [question, setQuestion] = useState(initialState);

  const handleToolDrawerChange = () => {
    setOpen((prevState)=>!prevState);
  };
  
  const handlePropertiesDrawerChange = () => {
    setOpenPropertiesBox((prevState)=>!prevState);
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
      <QuestionPreviewBox/>
    </div>
  );
};

export default MyTests;
