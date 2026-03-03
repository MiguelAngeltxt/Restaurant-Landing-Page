
  const infoModal = document.getElementById('infoModal');

  infoModal.addEventListener('show.bs.modal', (event) => {
    const trigger = event.relatedTarget; // el <a> que lo abrió

    const title = trigger.getAttribute('data-title');
    const body = trigger.getAttribute('data-body');

    infoModal.querySelector('#infoModalLabel').textContent = title;
    infoModal.querySelector('#infoModalBody').innerHTML = body; // innerHTML para que acepte <br>
  });