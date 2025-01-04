import Options from "./Options";
import BackgroundMusic from "./BackgroundMusic";
function Question({ question, dispatch, answer }) {
  return (
    <div className="question_container">
      <BackgroundMusic audioSource="/music.mp3" />
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
