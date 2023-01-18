let nome_projeto = "FIGHTING THE RINGS OF FIRE";
let alunos = "Alexandre Azenha 3200707 \nDaniel Botica 3200752 \nDiogo Carias 3200690"
let descricao_projeto = "This project was made with the purpose to impact and sensitize the portuguese society, relative to the forest fires that occure in mainland Portugal and affect so much our environment and compare it with the criminal occurrences, all of this through out 20 years. \nThis way, we represented the demonstrated years in the visualization, through growth rings of a tree log.";
let background_image;

function preload ()
{
    background_image = loadImage("background image-1.jpeg")
}

function setup() 
{
    //Cria o Canvas
    createCanvas(windowWidth, windowHeight);

    // Cria um botão que dá link para a próxima página
    botao = createButton('Start');

    // Posiciona o botão na horizontal centrado e em baixo da página com 100 pixeis de margem inferior
    botao.position(windowWidth/2 - 50, windowHeight - 100);
    
    // Executa esta função quando o botão é pressionado, e redireciona o utilizador 
    botao.mousePressed(buttonPressed);

}

function draw()
{
    // Adiciona um background à primeira página
    background(background_image);

    // Título de projeto
    // Cria o texto numa variável. Define o texto para estar horizontalmente centrado
    // E adiciona uma margem do topo de 100 pixeis, depois define a largura do texto para 700 pixeis e a altura para 50
  
    let title = text(nome_projeto, (windowWidth * 0.5 -350), 100, 700, 50);
{strokeWeight(2.5);
stroke(50);}
    // Define o tamanho de letra do Título para 20
    title.textSize(20);

    // Cor do texto (branco)
    title.fill(255, 255, 255);

    // Nomes dos alunos
    // Cria o texto numa variável. Define o texto para estar horizontalmente centrado
    // E adiciona uma margem do topo de 100 pixeis, depois define a largura do texto para 700 pixeis e a altura para 50
    let students = text(alunos, (windowWidth * 0.5) -350, 180, 700, 100);
    
    // Define o tamanho de letra dos alunos para 20
    students.textSize(20);

    // Cor do texto (branco)
    students.fill(255, 255, 255);

    // Saves the description text in a variable
    // Cria o texto numa variável. Define o texto para estar horizontalmente centrado
    // E adiciona uma margem do topo de 100 pixeis, depois define a largura do texto para 700 pixeis e a altura para 50
    let description = text(descricao_projeto, (windowWidth * 0.5) -350, 300, 700, 300);

    
    // Define o tamanho de letra da Descrição para 20
    description.textSize(25);

    // Cor do texto (branco)
    description.fill(255, 0, 0);
  
}

// Esta é a função para dar resize ao Canvas para a largura e altura total do ecrã
function windowResized()
{
    resizeCanvas (windowWidth, windowHeight);
}

function buttonPressed() 
{
    // Quando este botão é pressionado, redireciona o utilizador para a página do vídeo
    window.location.assign("video.html"); 
}