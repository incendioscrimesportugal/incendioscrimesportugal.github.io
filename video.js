let nome_projeto = "__Fighting__The__Rings__Of__Fire__";
let vid;
function setup() {
    noCanvas();

    // Carrega o vídeo 
    vid = createVideo("tronco.mov");

    // Define o tamanho do vídeo
    vid.size(windowWidth, windowHeight -180);

    // O vídeo começa automaticamente, após o a página carregar
    vid.autoplay();

    // Mute
    vid.volume(0);

    // Executa a função para redirecionar o utilizador para o "dashboard" quando o vídeo termina
    vid.onended(redirectOnEnd);
}

function redirectOnEnd() 
{
    // Link para a página "dashboard"
    window.location.assign("dashboard.html"); 
}