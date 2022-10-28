import React, { useState } from "react";
import "./App.css";
import { Quizzer } from "./quizzer/Quizzer";
import { Button } from "react-bootstrap";
//import { ShowHideTasks } from "./tasks/ShowHideTasks";
import QuizzerViewSketch from "./assets/quizzer_view_sketch.jpg";
import QuizzerEditorSketch from "./assets/quizzer_editor_sketch.jpg";

function App(): JSX.Element {
    const [quizzer, setQuizzer] = useState<boolean>(true);

    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <Button
                    onClick={() => {
                        setQuizzer(!quizzer);
                    }}
                >
                    {quizzer ? "Quizzer" : "Tasks"}
                </Button>
            </header>
            <div style={{ display: quizzer ? "block" : "none" }}>
                <Quizzer></Quizzer>
            </div>
            <div>
                <img src={QuizzerViewSketch} alt="Quizzer View Sketch" />
                <img src={QuizzerEditorSketch} alt="Quizzer Editor Sketch" />
            </div>
        </div>
    );
}

export default App;
