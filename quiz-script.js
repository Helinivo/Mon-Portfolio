const questions = [
  {
    question: "Quel est le rôle principal des élytres chez les coléoptères ?",
    options: ["Faciliter la respiration", "Protéger les ailes membraneuses", "Servir de camouflage"],
    answer: 1,
    explanation: {
      correct: "Les élytres sont des ailes antérieures épaisse et durcies qui protègent les ailes postérieures membraneuses utilisées pour le vol.",
      wrong: ["Les respirations des insectes se fait par un système de trachées et non par les élytres.",
      "Bien que certaines espèces puissent utiliser les élytres pour le camouflage, leur fonction principale reste la protection des ailes."]}
  },
  {
    question: "Quelle hormone est responsable de la mue chez les insectes ?",
    options: ["La testostérone", "L’ecdysone", "La mélatonine"],
    answer: 1,
    explanation: {
    correct: "L’ecdysone est l’hormone clé responsable de la mue et du développement des insectes.",
    wrong: [ "La testostérone est une hormone animale spécifique des vertébrés.",
    "La mélatonine régule principalement le sommeil et n'a aucun lien avec la mue."]}
  },
  {
    question: "Quelle est la fonction principale des antennes chez les insectes ?",
    options: ["Capturer les proies", "Assurer l’équilibre", "Percevoir les stimuli environnementaux"],
    answer: 2,
    explanation: {
    correct: "Les antennes servent à détecter des informations comme les odeurs et les vibrations, aidant les insectes à percevoir leur environnement.",
    wrong: [
      "Les antennes ne sont pas des organes de capture de proies, contrairement aux pattes ou aux pièces buccales.",
      "L’équilibre chez les insectes est assuré principalement par les structures comme l'organe de Johnston, et non par les antennes."
    ]}
  },
  {
    question: "Quel est l’organe utilisé par les criquets pour produire des sons stridulatoires ?",
    options: ["Les pattes postérieures", "Les élytres", "L’abdomen"],
    answer: 1,
    explanation: {
      correct: "Les criquets frottent leurs élytres (ailes antérieures) l'un contre l'autre pour produire un son stridulatoire.",
      wrong: [
      "Les pattes postérieures sont utilisées pour le saut, pas pour produire des sons.",
      "L’abdomen n’est pas impliqué dans la production sonore chez les criquets."
    ]} 
  },
  {
    question: "Quel type de développement subissent les lépidoptères ?",
    options: ["Hémimétabole", "Holométabole", "A-métabole"],
    answer: 1,
    explanation: {
      correct: "Les lépidoptères passent par une métamorphose complète (holométabole) avec les stades œuf, larve, nymphe et adulte.",
      wrong: [
        "Le développement hémimétabole implique une métamorphose incomplète, sans stade nymphal.",
        "Le développement a-métabole est typique des insectes primitifs sans métamorphose, comme les poissons d'argent."
      ]}
  },
  {
    question: "Chez les abeilles, quel est le principal rôle des ouvrières ?",
    options: ["Pondre des œufs", "Protéger la ruche", "Collecter le nectar et le pollen"],
    answer: 2,
    explanation: {
      correct: "Les ouvrières vont chercher du nectar et du pollen pour nourrir la ruche et soutenir la reproduction de la reine.",
      wrong: [
        "Seule la reine a la capacité de pondre des oeufs",
        "Bien que les ouvrières puissent défendre la ruche, ce rôle est principalement assuré par les butineuses plus âgées."
      ]}
  },
  {
    question: "Quel ordre d’insectes regroupe les moustiques, les mouches et les taons ?",
    options: ["Hyménoptères", "Diptères", "Coléoptères"],
    answer: 1,
    explanation: {
      correct: "Les Diptères sont caractérisés par une seule paire d’ailes fonctionnelles, comme les mouches et les moustiques.",
      wrong: [
        "Les Hyménoptères regroupent les abeilles, les guêpes et les fourmis, qui possèdent deux paires d'ailes.",
        "Les Coléoptères ont des élytres  protecteurs et ne possèdent pas les caractériqtiques des Diptères."
      ]}
  },
  {
    question: "Quelle structure respiratoire est caractéristique des insectes ?",
    options: ["Les trachées", "Les branchies", "Les poumons"],
    answer: 0,
    explanation: {
      correct: "Les insectes respirent grâce à un système de trachées qui transporte directement l’oxygène aux cellules.",
      wrong: [
        "Les branchies sont des structures respiratoires aquatiques propres aux organismes comme les poissons et certains insectes aquatiques à l'état larvaire.",
        "Les poumons sont caractéristiques des vertébrés et n'existent pas chez les insectes."
      ]}
  },
  {
    question: "Quel phénomène comportemental est observé chez certains papillons pour éviter les prédateurs ?",
    options: ["La migration", "Le mimétisme batésien", "La stridulation"],
    answer: 1,
    explanation: {
      correct: "Le mimétisme batésien est une stratégie où des espèces inoffensives imitent l'apparence d'espèces toxiques pour dissuader les prédateurs.",
      wrong: [
        "Certains papillons, comme le monarque, migrent sur de longues distances, mais cela ne constitue pas un mécanisme d'évitement direct des prédateurs",
        "La stridulation: ce comportement sonore est plus courant chez les Orthoptères (criquets, grillons) et non chez les papillons."
      ]}
  },
  {
    question: "Pourquoi les termites sont-elles considérées comme des insectes eusociaux ?",
    options: ["Elles vivent dans des terriers souterrains.", "Elles présentent une division du travail reproductif.", "Elles se nourrissent exclusivement de bois."],
    answer: 1,
    explanation: {
      correct: "Les termites sont eusociales car ils vivent en colonies organisées avec une division de travail, incluant des castes reproductrices (reine et roi) et des ouvrières stériles.",
      wrong: ["Bien que certaines espèces de termites construisent des nids souterrains, cela n'est pas un critère déterminant de l'eusocialité.",
        "La consommation de bois est une particularité des termites, mais ce n'est pas ce qui définit leur comportement eusocial."
      ]}
  }
  ];

// Récupération des éléments HTML
const quizForm = document.getElementById('quiz-form');
const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const restartBtn = document.getElementById('restart-btn');

if (quizForm) {
  questions.forEach((q, index) => {
    const container = document.createElement('div');
    container.classList.add('question-container');

    container.innerHTML = `
      <p><strong>Question ${index + 1} :</strong> ${q.question}</p>
      ${q.options
        .map(
          (option, i) => `
        <label>
          <input type="radio" name="question${index}" value="${i}" />
          ${option}
        </label><br>
      `
        )
        .join('')}
    `;

    const explanationContainer = document.createElement('div');
    explanationContainer.id = `explanation${index}`;
    explanationContainer.classList.add('explanation');
    explanationContainer.style.display = "none";
    container.appendChild(explanationContainer);

    quizForm.appendChild(container);
  });
}


if (submitBtn) {
  submitBtn.addEventListener('click', () => {
    let score = 0;

    questions.forEach((q, index) => {
      const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
      const explanationElement = document.getElementById(`explanation${index}`);

      if (explanationElement) {
        if (selectedOption) {
          if (parseInt(selectedOption.value) === q.answer) {
            score++;
            explanationElement.innerHTML = `<span class="correct">✅ Bonne réponse !</span> ${q.explanation.correct}`;
          } else {
            explanationElement.innerHTML = `<span class="incorrect">❌ Mauvaise réponse.</span> ${q.explanation.wrong[selectedOption.value]}`;
          }
        } else {
          explanationElement.innerHTML = `<span class="incorrect">❌ Aucune réponse sélectionnée.</span> ${q.explanation.correct}`;
        }
        explanationElement.style.display = "block";
      }
    });

    
    if (scoreElement) {
      scoreElement.textContent = `Votre score : ${score}/${questions.length}`;
    } else {
      console.error("Impossible de mettre à jour le score, l'élément #score est introuvable.");
    }

    // Rendre visible la section des résultats
    if (resultContainer) {
      resultContainer.classList.remove('hidden');
    } else {
      console.error("L'élément #result-container est introuvable.");
    }
  });
}

if (restartBtn) {
  restartBtn.addEventListener('click', () => {
    // Cacher les explications
    document.querySelectorAll('.explanation').forEach(el => {
      el.style.display = "none";
    });

    // Réinitialiser les sélections
    document.querySelectorAll('input[type="radio"]').forEach(input => {
      input.checked = false;
    });

    // Cacher les résultats
    if (resultContainer) {
      resultContainer.classList.add('hidden');
    }
  });
}