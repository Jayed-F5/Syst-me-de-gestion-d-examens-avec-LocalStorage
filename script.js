// TODO : Ajouter un écouteur d'événement sur le formulaire
document.getElementById('form-examen').addEventListener('submit', function (e) {
  e.preventDefault();

  // Récupérer les valeurs du formulaire
  const nomsExamens = document.getElementById('nom').value.split('-').map(n => n.trim());
  const duree = parseInt(document.getElementById('duree').value);
  const description = document.getElementById('description').value;
  const proprietaire = document.getElementById('proprietaire').value.trim();
  const email = document.getElementById('email').value.trim().toLowerCase();

  // Clé unique pour le localStorage basée sur l'email
  const examsKey = 'examens_' + email;
  const exams = JSON.parse(localStorage.getItem(examsKey)) || [];

  // Créer un examen pour chaque nom
  nomsExamens.forEach(nom => {
    const examen = {
      nom,
      duree,
      description,
      proprietaire,
      email,
      questions: []
    };
    exams.push(examen);
  });

  // Sauvegarder dans le localStorage
  localStorage.setItem(examsKey, JSON.stringify(exams));

  alert(`${nomsExamens.length} examen(s) ajouté(s) avec succès !`);
  this.reset();
});
