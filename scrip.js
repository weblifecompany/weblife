
    const searchInput  = document.getElementById('searchInput');
    const tipoFilter = document.getElementById('tipoFilter');
    const especialidadFilter = document.getElementById('especialidadFilter');
    const cards = document.querySelectorAll('.card');
    const noResults = document.getElementById('noResults');

    function filtrar() {
      const texto = searchInput.value.toLowerCase();
      const tipo = tipoFilter.value;
      const especialidad = especialidadFilter.value;

      let visible = 0;

      cards.forEach(card => {
        const nombre = card.querySelector('.card-title').textContent.toLowerCase();
        const esp = card.dataset.especialidad;
        const tip = card.dataset.tipo;

        const coincideTexto = nombre.includes(texto) || esp.includes(texto);
        const coincideTipo = tipo === '' || tipo === tip;
        const coincideEspecialidad = especialidad === '' || especialidad === esp;

        if (coincideTexto && coincideTipo && coincideEspecialidad) {
          card.closest('.col-md-4').style.display = '';
          visible++;
        } else {
          card.closest('.col-md-4').style.display = 'none';
        }
      });

      noResults.classList.toggle('d-none', visible > 0);
    }

    searchInput.addEventListener('input', filtrar);
    tipoFilter.addEventListener('change', filtrar);
    especialidadFilter.addEventListener('change', filtrar);
