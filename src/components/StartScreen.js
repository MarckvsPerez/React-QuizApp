function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Respon correctament les {numQuestions} preguntes per guanyar un regal!</h2>
      <h3>No sempre et vaig donar les millors festes de Nadal, espero que aquestes les recordis diferents</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Començar
      </button>
    </div>
  );
}

export default StartScreen;
