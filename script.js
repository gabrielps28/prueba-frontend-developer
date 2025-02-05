$(document).ready(function () {

  $('[data-bs-toggle="tooltip"]').tooltip();
  
  // Datos de los influencers
  const influencers = [
    {
      username: "@salud_ays",
      avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp",
      redes: ["tiktok", "facebook", "instagram"],
      servicios: "3 Servicios",
      valor: "50 CRTS",
    },
    {
      username: "@salud_ays",
      avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
      redes: ["tiktok", "facebook", "instagram"],
      servicios: "6 Servicios",
      valor: "90 CRTS",
    },
    {
      username: "@salud_ays",
      avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/3.webp",
      redes: ["tiktok", "instagram"],
      servicios: "2 Servicios",
      valor: "40 CRTS",
    },
    {
        username: "@salud_ays",
        avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/4.webp",
        redes: ["facebook", "instagram"],
        servicios: "4 Servicios",
        valor: "35 CRTS",
    },
    {
        username: "@salud_ays",
        avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/5.webp",
        redes: ["facebook", "instagram"],
        servicios: "2 Servicios",
        valor: "80 CRTS",
    },
    {
        username: "@salud_ays",
        avatar: "https://mdbcdn.b-cdn.net/img/new/avatars/6.webp",
        redes: ["instagram"],
        servicios: "1 Servicios",
        valor: "10 CRTS",
    },
  ];

  const tableBody = $("#influencerTable tbody");

  influencers.forEach((influencer) => {
    const redesIcons = influencer.redes.map((red) => {
        const colors = {
          facebook: "text-primary",
          instagram: "text-danger",
          tiktok: "text-dark",
        };
        return `<i class="bi bi-${red} ${colors[red]} me-2"></i>`;
      }).join("");

    const row = `
                <tr>
                    <td>
                        <div class="d-flex align-items-center">
                            <img src="${influencer.avatar}" height="38" alt="Avatar" class="rounded-circle me-2">
                            <span>${influencer.username}</span>
                        </div>
                    </td>
                    <td>${redesIcons}</td>
                    <td class="text-center">${influencer.servicios}</td>
                    <td class="text-center">${influencer.valor}</td>
                    <td class="text-center">
                        <button class="btn btn-light bg-body-secondary btn-sm">
                            <i class="bi bi-arrow-repeat"></i>
                        </button>
                    </td>
                    <td class="text-center">
                        <button class="btn btn-light bg-body-secondary btn-sm">
                            <i class="bi bi-trash3"></i>
                        </button>
                    </td>
                    <td class="text-center">
                        <button class="btn px-3 bg-body-secondary btn-sm border border-secondary">Revisar</button>
                    </td>
                </tr>
            `;
    tableBody.append(row);
  });
  
  //   boton toggle icon list y grid
  $(".btn-toggle").on('click', function () {
    $(this).find(".btn").toggleClass("active");

    if ($(this).find(".btn-secondary").length > 0) {
      $(this).find(".btn").toggleClass("btn-secondary");
    }
  });

  // mostrar y ocultar modal
  $('#openModal').on('click', function() {
    $('#dynamicModal').modal('show');
  });

  $('.close-modal').on('click', function() {
      $('#dynamicModal').modal('hide');
  });

});
