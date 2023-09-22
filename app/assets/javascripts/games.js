$(document).ready(function () {
  let currentPlayer = 'X'; // Inicia com 'X'
  let gameEnded = false;
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
    [0, 4, 8], [2, 4, 6] // Diagonais
  ];

  // Evento de clique nas células da tabela
  $('.cell').click(function () {
    if (gameEnded) return;

    if (!$(this).hasClass('selected')) {
      const cell = $(this);
      cell.text(currentPlayer);
      cell.addClass('selected');

      if (checkWinner(currentPlayer)) {
        gameEnded = true;
        $('#end-message').text(`Fim de jogo! O vencedor é: ${currentPlayer}`);
        $('#end-popup').fadeIn();
      } else if ($('.cell.selected').length === 9) {
        // Se todas as células estiverem preenchidas e não houver um vencedor
        gameEnded = true;
        $('#velha-popup').fadeIn();
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    } else {
      alert('Esta célula já foi escolhida. Por favor, escolha outra.');
    }
  });

  // Evento de clique no botão "Reiniciar Jogo"
  $('#restart-button').click(function () {
    window.location.reload();
  });

  // Exibe o pop-up de boas-vindas
  $('#welcome-popup').fadeIn();

  // Aguarda 5 segundos e, em seguida, oculta o pop-up
  setTimeout(function () {
    $('#welcome-popup').fadeOut();
  }, 3000); // 3000 milissegundos (5 segundos)

  // Evento de clique no botão de fechar pop-up de fim de jogo
  $('#close-end-popup').click(function () {
    $('#end-popup').fadeOut();
  });

  // Evento de clique no botão de fechar pop-up de velha
  $('#close-velha-popup').click(function () {
    $('#velha-popup').fadeOut();
  });

  // Função para verificar se há um vencedor
  function checkWinner(symbol) {
    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (
        $('.cell').eq(a).text() === symbol &&
        $('.cell').eq(b).text() === symbol &&
        $('.cell').eq(c).text() === symbol
      ) {
        return symbol;
      }
    }

    return null;
  }
});
