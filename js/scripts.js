function showWhatsApp() {
    let number = "5511973248818"; // Seu número de WhatsApp
    let message = "Olá! Vi seu cartão de visita digital e gostaria de entrar em contato.";
    window.open(`https://web.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`, '_blank');
}
