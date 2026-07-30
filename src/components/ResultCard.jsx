
function ResultCard({
  configGrade,
  result,
}) {

  let text1 = "Necesitas al menos un";
  let text2 = "en la evaluación que te falta para alcanzar tu nota objetivo.";

  const gradeMin = parseFloat(configGrade.gradeMin);
  const gradeMax = parseFloat(configGrade.gradeMax);

  const nota = Math.round(result.gradeMissing * 100) / 100;

  // Formatea según la región/idioma configurado en el navegador
  const formatter = new Intl.NumberFormat(navigator.language, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 2,
  });
  let notaTexto = formatter.format(nota);

  let signoTexto = "";
  let color = "text-blue-400";

  if (result.gradeMissing > gradeMax) {
    // La nota que necesita es mayor que el máximo
    text1 = "Lamentablemente, necesitas una nota superior a";
    notaTexto = formatter.format(gradeMax);

    signoTexto = ">";
    color = "text-red-400";

  } else if (result.gradeMissing <= gradeMin) {
    // La nota mínima que necesita está por debajo del mínimo
    text1 = "¡Felicidades! Solo necesitas un";

    notaTexto = formatter.format(gradeMin);

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

