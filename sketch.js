let tabela_01, seccoes_tronco, troncos_selecionados, os_meus_elementos;
let escala_tronco, num_selcionados;
let primeira_area, primeira_crimes;
let botao_reset;

let background_image = [];
let background_timer = 0;
let current_image = 0;

function preload ()
{
    // dá pre-load à tabela com os dados
    tabela_01 = loadTable("tabela final - lab proj - Folha1.csv", "csv", "header");

    // Dá load e guarda as imagens em "array"
    seccoes_tronco = [];

    seccoes_tronco[0] = loadImage ("tronco_1.png");
    seccoes_tronco[1] = loadImage ("tronco_2.png");
    seccoes_tronco[2] = loadImage ("tronco_3.png");
    seccoes_tronco[3] = loadImage ("tronco_4.png");
    seccoes_tronco[4] = loadImage ("tronco_5.png");
    seccoes_tronco[5] = loadImage ("tronco_6.png");
    seccoes_tronco[6] = loadImage ("tronco_7.png");
    seccoes_tronco[7] = loadImage ("tronco_8.png");

}

function setup() {

    // Cria o canvas com a largura total do ecrã e a altura total menos 240px, para alinhar com o vídeo
    createCanvas(windowWidth, windowHeight -240);

    // Cria o botão do "reset"
    botao_reset = createButton('Reset');

    // Define a posição do botão para o inferior da página, centrado
    // O estilo deste botão está definido no style.css
    botao_reset.position(windowWidth/2 - 50, windowHeight - 100);
    
    // Executa esta função quando o botão é pressionado para dar reset à seleção dos elementos
    botao_reset.mousePressed(resetElements);


    // escala_tronco = 1.5;
    escala_tronco = 1.2;
    num_selcionados = 0;

    troncos_selecionados = new Array (seccoes_tronco.length-1);
    for (let i=0; i<troncos_selecionados.length; i++)
    {
        troncos_selecionados[i] = false;
    }

    importData();
}


function draw()
{
    background(255)

    drawData();

    const espacamento_vertical = height/(seccoes_tronco.length+1);
    const x = width/2;
    const y = espacamento_vertical*(seccoes_tronco.length) + espacamento_vertical/2;
    imageMode (CENTER);
    image (seccoes_tronco[seccoes_tronco.length-1], x, y, espacamento_vertical*escala_tronco, espacamento_vertical*escala_tronco);
}


function importData()
{
    os_meus_elementos = [];

    for (let r=0; r<tabela_01.getRowCount(); r++)
    {
        //console.log (tabela_01.getRow(r) );

        const year = tabela_01.getString (r,"ano" );
        const area = tabela_01.getNum (r,"area_portugal continental" );
        const crimes = tabela_01.getNum (r,"numero de crimes florestais" );

        //console.log(year)
        //console.log(area)
        //console.log(crimes)

        os_meus_elementos[r] = new DataElement (year, area, crimes);
    }
}


function drawData()
{
    let contador = 0;

    for (let i=0; i<os_meus_elementos.length; i++)
    {
        os_meus_elementos[i].drawDataElement(i, troncos_selecionados[i]);

        if (troncos_selecionados[i] === true)
        {
            contador++;

            if (contador === 1)
            {
                primeira_area = os_meus_elementos[i].area;
                primeira_crimes = os_meus_elementos[i].crimes;
            }
            else
            if (contador === 2)
            {
                segunda_area = os_meus_elementos[i].area;
                segunda_crimes = os_meus_elementos[i].crimes;
            }

            if (contador === 2)
            {
                resultado_area = segunda_area - primeira_area;
                resultado_crimes = segunda_crimes - primeira_crimes;

                text (Number((resultado_area).toFixed(3))+" ha", 50, height-30);

                text (Number((resultado_crimes).toFixed(3)), width-150, height-10);
            }
        }


    }
}



function mousePressed()
{
    for (let i=0; i<os_meus_elementos.length; i++)
    {
        if (num_selcionados<2)
        {

            if (os_meus_elementos[i].interactElement() === true)
            {
                if (troncos_selecionados[i] === false)
                {
                    troncos_selecionados[i] = true;
                    num_selcionados++;
                }
                else
                {
                    troncos_selecionados[i] = false;
                }
            }

        }
    }
}


function keyPressed()
{
    if (key === "r")
    {
        num_selcionados = 0;
        for (let i=0; i<troncos_selecionados.length; i++)
        {
            troncos_selecionados[i] = false;
        }
    }
}

function resetElements()
{
    num_selcionados = 0;
    for (let i=0; i<troncos_selecionados.length; i++)
    {
        troncos_selecionados[i] = false;
    }
}


class DataElement
{
    constructor (anos, area_texto, crimes_texto)
    {
        this.year = anos;
        this.area = area_texto;
        this.crimes = crimes_texto;
    }

    drawDataElement(i, selected)
    {
        //console.log (i);
        this.espacamento_vertical = height/seccoes_tronco.length;
      //this.espacamento_vertical = 50;
        //console.log(this.espacamento_vertical);

        this.x = width/2;
        this.y = i*this.espacamento_vertical + this.espacamento_vertical/2;

        if (selected === true)
        {
            fill(255, 2550, 0, 50);
            noStroke();
            rect (0, this.y-this.espacamento_vertical/2, width, this.espacamento_vertical);
        }

        imageMode (CENTER);
        image (seccoes_tronco[i], this.x, this.y, this.espacamento_vertical*escala_tronco, this.espacamento_vertical*escala_tronco);

        fill(0);
        //Labels
        text (this.crimes, this.x+100, this.y);
        text (this.area+" ha", this.x-200, this.y);

        // A largura da legenda do "years" é mais ou menos 26pixeis- menos 13 pixeis para a largura do centro do texto
        // Subtrai 20 pixeis da altura, para colocar a legenda do ano, ligeiramente acima da porção do tronco
        text (this.year, this.x - 13, this.y - 20);

        //Títulos
        // texto ("NUMBER OF FOREST CRIMES", this.x+90, this.espacamento_vertical/14);
        text ("NUMBER OF FOREST CRIMES", this.x+90, 10);
        text ("BURNT AREA OF PORTUGAL", this.x-260, 10);

        //console.log(espacamento_vertical);
    }

    interactElement()
    {
        this.selected = false;
        if (mouseX >= 0 &&
            mouseX <= width &&
            mouseY >= this.y-this.espacamento_vertical/2 &&
            mouseY <= this.y+this.espacamento_vertical/2 &&
            mouseIsPressed === true)
        {
            return (true);
        }
        else
        {
            return (false);
        }
    }
}

// função responsiva para dar resize ao canvas
function windowResized()
{
   resizeCanvas (windowWidth, windowHeight -240, true);
}
