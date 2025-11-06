    const searchInput = document.getElementById('searchInput');
    const especialidadFilter = document.getElementById('especialidadFilter');
    const cards = document.querySelectorAll('.card');
    const noResults = document.getElementById('noResults');

    function filtrar() {
      const texto = searchInput.value.toLowerCase();
      const especialidad = especialidadFilter.value;
      let visible = 0;

      cards.forEach(card => {
        const nombre = card.querySelector('.card-title').textContent.toLowerCase();
        const esp = card.dataset.especialidad;
        const coincideTexto = nombre.includes(texto) || esp.includes(texto);
        const coincideEspecialidad = especialidad === '' || especialidad === esp;

        if (coincideTexto && coincideEspecialidad) {
          card.closest('.col-md-4').style.display = '';
          visible++;
        } else {
          card.closest('.col-md-4').style.display = 'none';
        }
      });

      noResults.classList.toggle('d-none', visible > 0);
    }

    searchInput.addEventListener('input', filtrar);
    especialidadFilter.addEventListener('change', filtrar);