function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <div className="result_container">
      <p className="result">
        <span>{emoji}</span> Has aconseguit <strong>{points}</strong> punts de{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      {percentage === 100 && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p className="highscore">Has guanyat! Aquí tens el teu regal:</p>
          <a
            href="https://drive.google.com/file/d/1-ljxv5lszNmFvjDHo2Jh4UZmD91OrUN8/view?usp=drive_link"
            className="btn btn-ui"
            style={{ marginBottom: "2rem", textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Descarregar Regal
          </a>
        </div>
      )}
      <p className="highscore">(Record: {highscore} punts)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Tornar a jugar
      </button>
    </div>
  );
}

export default FinishScreen;
