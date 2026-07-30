
function ResultCard({
  configGrade,
  result,
}) {

  let text1 = "Necesitas al menos un";
  let text2 = "para aprobar el ramo";

  const gradeMin = parseFloat(configGrade.gradeMin);
  const gradeMax = parseFloat(configGrade.gradeMax);

  const nota = Math.round(result.gradeMissing * 100) / 100;

  let notaTexto = Number.isInteger(nota)
    ? nota.toFixed(1)
    : nota.toString();

  let signoTexto = "";
  let color = "text-blue-400";

  if (result.gradeMissing > gradeMax) {
    // La nota que necesita es mayor que el máximo
    text1 = "Lamentablemente necesitas una nota más alta que";
    notaTexto = gradeMax.toFixed(1);

    signoTexto = ">";
    color = "text-red-400";

  } else if (result.gradeMissing <= gradeMin) {
    // La nota mínima que necesita está por debajo del mínimo
    text1 = "¡Felicidades! Necesitas al menos un";

    notaTexto = gradeMin.toFixed(1);

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

