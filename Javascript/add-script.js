// Sélectionner toutes les lignes `tr`
const rows = document.querySelectorAll('.tr');

// Ajouter des fonctionnalités à chaque ligne
rows.forEach((row) => {
    const addIcon = row.querySelector('.icon-add');
    const fileInput = row.querySelector('input[type="file"]');
    const pFileSelect = row.querySelector('.p-file-select');
    
    // Fonctionnalité pour l'icône d'ajout
    if (addIcon && fileInput && pFileSelect) {
        // addIcon.addEventListener('click', () => {
        //     fileInput.click(); 
        // });

        fileInput.addEventListener('change', (event) => {
            const fileName = event.target.files[0]?.name || 'Aucun fichier sélectionné';
            pFileSelect.textContent = fileName; // Affiche le nom du fichier sélectionné
        });
    }
});

// Boucler pour tous les éléments `.p-select-add` si nécessaire
const pSelectAddElements = document.querySelectorAll('.p-select-add');

pSelectAddElements.forEach((element) => {
    // Exemple de fonctionnalité : console log sur clic
    element.addEventListener('click', () => {
        console.log('P Select Add clicked!', element);
    });
});
