// Espera todo o DOM carregar antes de executar
document.addEventListener("DOMContentLoaded", function() {
    // Ativa o lightbox para cada imagem de produto
    document.querySelectorAll('.img-produto').forEach(function(img) {
        img.addEventListener('click', function() {
            var modal = document.getElementById('modal-visualizar');
            var modalImg = document.getElementById('img-modal');
            var captionText = document.getElementById('caption');
            var descText = document.getElementById('descricao-produto');
            modal.style.display = "flex";
            modalImg.src = this.src;
            captionText.textContent = this.getAttribute('data-nome') || this.alt;
            descText.textContent = this.getAttribute('data-descricao') || "";
        });
    });

    // Fecha o modal ao clicar no botão X
    var fecharBtn = document.querySelector('.modal .fechar');
    if(fecharBtn){
        fecharBtn.onclick = function() {
            document.getElementById('modal-visualizar').style.display = "none";
        };
    }

    // Fecha o modal ao clicar fora da modal-box
    var modalDiv = document.getElementById('modal-visualizar');
    if(modalDiv){
        modalDiv.onclick = function(event) {
            if(event.target === this){
                this.style.display = "none";
            }
        };
    }
});