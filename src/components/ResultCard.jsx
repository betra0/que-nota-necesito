
function ResultCard({
  configGrade,
  result,
}) {

  let text1 = "Necesitas al menos un";
  let text2 = "para aprobar el ramo";

  const nota = Math.round(result.gradeMissing * 100) / 100;

  let notaTexto = Number.isInteger(nota)
    ? nota.toFixed(1)
    : nota.toString();

  let signoTexto = "";
  let color = "text-blue-400";

  if (result.gradeMissing > configGrade.gradeMax) {
    // La nota que necesita es mayor que el máximo
    text1 = "Lamentablemente necesitas una nota más alta que";
    
    notaTexto = Number.isInteger(configGrade.gradeMax)
      ? configGrade.gradeMax.toFixed(1)
      : configGrade.gradeMax.toString();

    signoTexto = ">";
    color = "text-red-400";

  } else if (result.gradeMissing <= configGrade.gradeMin) {
    // La nota mínima que necesita está por debajo del mínimo
    text1 = "¡Felicidades! Necesitas al menos un";

    notaTexto = Number.isInteger(configGrade.gradeMin)
      ? configGrade.gradeMin.toFixed(1)
      : configGrade.gradeMin.toString();

    color = "text-green-400";
  }

  return (
    <div className="mt-4 rounded-2xl border border-gray-700 bg-gray-900 p-6 text-center">
      <p className="text-gray-400">
        Resultado
      </p>

      <h3 className={`mt-4 text-5xl font-bold ${color}`}>
        {signoTexto + notaTexto}
      </h3>

      <p className="mt-3 text-gray-300">
        {text1} <strong>{notaTexto}</strong> {text2}
      </p>
    </div>
  );
}

export default ResultCard;

