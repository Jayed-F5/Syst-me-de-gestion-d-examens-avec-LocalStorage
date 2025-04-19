const propositionsDiv = document.getElementById('propositions');

document.getElementById('ajouterProposition').addEventListener('click', () => {
  const div = document.createElement('div');
  div.innerHTML = `
    <input type="text" placeholder="Texte de la proposition" class="texte-prop">
    <label><input type="checkbox" class="correcte-prop"> Correcte</label>
  `;
  propositionsDiv.appendChild(div);
});

document.getElementById('ajouterQuestion').addEventListener('click', () => {
  const enonce = document.getElementById('enonce').value;
  const duree = document.getElementById('duree').value;
  const points = document.getElementById('points').value;
  const proprietaire = document.getElementById('proprietaire').value;
  const nomExam = document.getElementById('nomExam').value;

  const propositions = [];
  document.querySelectorAll('#propositions div').forEach(div => {
    const texte = div.querySelector('.texte-prop').value;
    const correcte = div.querySelector('.correcte-prop').checked;
    propositions.push({ texte, correcte });
  });

  const nouvelleQuestion = {
    enonce,
    duree,
    points,
    propositions
  };

  const key = 'examens_' + proprietaire;
  const examens = JSON.parse(localStorage.getItem(key)) || [];

  const exam = examens.find(e => e.nom === nomExam);
  if (!exam) {
    alert('Examen non trouvé !');
    return;
  }

  if (!exam.questions) exam.questions = [];
  exam.questions.push(nouvelleQuestion);

  localStorage.setItem(key, JSON.stringify(examens));

  alert('Question ajoutée avec succès !');
});
