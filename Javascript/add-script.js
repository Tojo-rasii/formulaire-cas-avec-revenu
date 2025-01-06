// Sélectionner toutes les lignes `tr`
const rows = document.querySelectorAll('.tr');

// Ajouter des fonctionnalités à chaque ligne
rows.forEach((row) => {
    const addIcon = row.querySelector('.icon-add');
    const fileInput = row.querySelector('input[type="file"]');
    const pFileSelect = row.querySelector('.p-file-select');
    const deleteButton = row.querySelectorAll('.delete-file');
    // Fonctionnalité pour l'icône d'ajout
    if (addIcon && fileInput && pFileSelect) {
        // addIcon.addEventListener('click', () => {
        //     fileInput.click(); 
        // });

        fileInput.addEventListener('change', (event) => {
            const fileName = event.target.files[0]?.name || 'Aucun fichier sélectionné';
            pFileSelect.textContent = fileName; // Affiche le nom du fichier sélectionné

            // Enlever la classe `.i-disabled` après sélection d'un fichier
            row.querySelectorAll('.i-disabled').forEach(icon => {
                icon.classList.remove('i-disabled');
            });
        });
    }

    deleteButton.forEach((deleteButton) => {
        deleteButton.addEventListener('click', (event) => {
            event.preventDefault();

            fileInput.value = '';
            pFileSelect.textContent = '';
            // Ajouter la classe `.i-disabled` aux icônes pertinentes
            row.querySelectorAll('.icon-delete').forEach(icon => {
                icon.classList.add('i-disabled');
            });
            row.querySelectorAll('.icon-edit').forEach(icon => {
                icon.classList.add('i-disabled');
            });
            row.querySelectorAll('.icon-see').forEach(icon => {
                icon.classList.add('i-disabled');
            });

        });
    });
});

document.querySelectorAll('input[type="file"]').forEach(input => {
    input.addEventListener('change', function () {
        if (this.files.length > 0) {
            const container = this.closest('.tr');
            if (container) {
                // Enlever la classe .i-disabled sur les icônes pertinentes
                container.querySelectorAll('.i-disabled').forEach(icon => {
                    icon.classList.remove('i-disabled');
                });
            }
        }
    });
});




// Boucler pour tous les éléments `.p-select-add` si nécessaire
const pSelectAddElements = document.querySelectorAll('.p-select-add');

pSelectAddElements.forEach((element) => {
    // Exemple de fonctionnalité : console log sur clic
    element.addEventListener('click', () => {
        console.log('P Select Add clicked!', element);
    });
});
