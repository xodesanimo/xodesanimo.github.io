$(document).ready(function(){
	
	// if(screen.height > screen.width){
	// 	console.log("a");
	// 	$(".tabuleiro").attr("src", "img/mapa90.png");
	// }
	
	// VARIAVEL DO RESULTADO ATUAL DO DADO
	num_dado = "";
	$(".quiz").hide();
	$(".hidden").hide();
	$(".final").hide();

	// PLAYER ATUAL
	atual = 1;

    // FUNÇÃO QUE ROLA O DADO
	var roll = function(){
		var num = Math.floor(Math.random() * 6)+1;
		$(".dado").append($('<img>',{id:'theImg',src:'img/dados/'+num+'.png'}));
		num_dado = num;	
	}


	// FUNÇÃO PARA PEÕES ANDAREM 
	$(function() {
		$( ".draggable" ).draggable();
		} 
	);


	// OBJETOS DOS PLAYERS
	rosa = {
		id: 1, 
		cor: "Rosa",
		posicao: 0,
		pontos: 0,

		set new_pos(num){
			this.posicao += num; 
		},

		set new_pts(num){
			this.pontos += num;
		}
	};

	azul_claro = {
		id: 2, 
		cor: "Azul Claro",
		posicao: 0,
		pontos: 0,

		set new_pos(num){
			this.posicao += num; 
		},

		set new_pts(num){
			this.pontos += num;
		}
	};

	azul = {
		id: 3, 
		cor: "Azul Escuro",
		posicao: 0,
		pontos: 0,

		set new_pos(num){
			this.posicao += num; 
		},

		set new_pts(num){
			this.pontos += num;
		}
	};

	branco = {
		id: 4, 
		cor: "Branco",
		posicao: 0,
		pontos: 0,

		set new_pos(num){
			this.posicao += num; 
		},

		set new_pts(num){
			this.pontos += num;
		}
	};

    quiz_lista = [
	    {
			id : 1,
			enunciado: "De quem é a famosa frase: Penso, logo existo?",
			a: "Platão", 
			b: "Galileu Galilei",
			c: "Descartes",
			d: "Sócrates",
			e: "Francis Bacon",
			resposta: "c"
		},

		{
			id: 2,
			enunciado: "Quais o menor e o maior país do mundo?",
			a: "Vaticano e Rússia", 
			b: "Nauru e China",
			c: "Mônaco e Canadá",
			d: "Malta e Estados Unidos",
			e: "São Marino e Índia",
			resposta: "a"
		},

		{
			id: 3,
			enunciado : "Chegou o momento de olhar para si! Pense neste momento na sua última realização pessoal ou profissional da qual se sentiu orgulhoso(a)",
		},

		{
			id: 4,
			enunciado: "Qual o nome do presidente do Brasil que ficou conhecido como Jango?",
			a: "Jânio Quadros", 
			b: "Jacinto Anjos",
			c: "Getúlio Vargas",
			d: "João Figueiredo",
			e: "João Goulart",
			resposta: "e"
		},

		{
			id: 5,
			enunciado: "Vamos fazer alguém feliz! Escolha um jogador."
		},

		{
			id: 6,
			enunciado: "O que a palavra legend significa em português?",
			a: "Legenda", 
			b: "Conto",
			c: "História",
			d: "Lenda",
			e: "Legendário",
			resposta: "d"
		},
		{
			id: 7,
			enunciado: " - ",
			a: " ", 
			b: " ",
			c: " ",
			d: " ",
			e: " ",
			resposta: "a"
		},
		{
			id: 8,
			enunciado: " - ",
			a: " ", 
			b: " ",
			c: " ",
			d: " ",
			e: " ",
			resposta: "a"
		},
		{
			id: 9,
			enunciado: " - ",
			a: " ", 
			b: " ",
			c: " ",
			d: " ",
			e: " ",
			resposta: "a"
		},
		{
			id: 10,
			enunciado: "Qual personagem folclórico costuma ser agradado pelos caçadores com a oferta de fumo?",
			a: "Caipora", 
			b: "Saci",
			c: "Lobisomem",
			d: "Boitatá",
			e: "Negrinho do Pastoreio",
			resposta: "a"
		},
		{
			id: 11,
			enunciado: " - ",
			a: " ", 
			b: " ",
			c: " ",
			d: " ",
			e: " ",
			resposta: "a"
		},
		{
			id: 12,
			enunciado: " - ",
			a: " ", 
			b: " ",
			c: " ",
			d: " ",
			e: " ",
			resposta: "a"
		},
		{
			id: 13,
			enunciado: "Qual foi o recurso utilizado inicialmente pelo homem para explicar a origem das coisas?",
			a: "A Filosofia", 
			b: "A Biologia",
			c: "A Matemática",
			d :"A Astronomia",
			e: "A Mitologia",
			resposta: "e"
		},
		{
			id: 14,
			enunciado: "Quais os planetas do sistema solar?",
			a: "Terra, Vênus, Saturno, Urano, Júpiter, Marte, Netuno, Mercúrio", 
			b: "Júpiter, Marte, Mercúrio, Netuno, Plutão, Saturno, Terra, Urano, Vênus",
			c: "Vênus, Saturno, Urano, Júpiter, Marte, Netuno, Mercúrio",
			d: "Júpiter, Marte, Mercúrio, Netuno, Plutão, Saturno, Sol, Terra, Urano, Vênus",
			e: "Terra, Vênus, Saturno, Júpiter, Marte, Netuno, Mercúrio",
			resposta: "a"
		},
		{
			id: 15,
			enunciado: " - ",
			a: " ", 
			b: " ",
			c: " ",
			d: " ",
			e: " ",
			resposta: "a"
		},
		{
			id: 16,
			enunciado: " - ",
			a: " ", 
			b: " ",
			c: " ",
			d: " ",
			e: " ",
			resposta: "a"
		},
		{
			id: 17,
			enunciado: " - ",
			a: " ", 
			b: " ",
			c: " ",
			d: " ",
			e: " ",
			resposta: "a"
		},
		{
			id: 18,
			enunciado: "Qual o tema do famoso discurso Eu Tenho um Sonho, de Martin Luther King?",
			a: "Igualdade das raças", 
			b: "Justiça para os menos favorecidos",
			c: "Intolerância religiosa",
			d: "Prêmio Nobel da Paz",
			e: "Luta contra o Apartheid",
			resposta: "a"			
		},
		{
			id: 19,
			enunciado: " - ",
			a: " ", 
			b: " ",
			c: " ",
			d: " ",
			e: " ",
			resposta: "a"
		},
		{
			id: 20,
			enunciado: " - ",
			a: " ", 
			b: " ",
			c: " ",
			d: " ",
			e: " ",
			resposta: "a"
		},
		{
			id: 21,
			enunciado: "Quais são os cromossomos que determinam o sexo masculino?",
			a: "Os V", 
			b: "Os X",
			c: "Os Y",
			d: "Os W",
			e: "Os Z",
			resposta: "c"
		},
		{			
			id: 22,
			enunciado: "Que substância é absorvida pelas plantas e expirada por todos os seres vivos?",
			a: "O oxigênio", 
			b: "O nitrogênio",
			c: "O nitrato de sódio",
			d: "O dióxido de ferro",
			e: "O dióxido de carbono",
			resposta: "e"
		},
		{
			id: 23,
			enunciado: " - ",
			a: " ", 
			b: " ",
			c: " ",
			d: " ",
			e: " ",
			resposta: "a"
		},
		{
			id: 24,
			enunciado: " - ",
			a: " ", 
			b: " ",
			c: " ",
			d: " ",
			e: " ",
			resposta: "a"
		},
		{
			id: 25,
			enunciado: " - ",
			a: " ", 
			b: " ",
			c: " ",
			d: " ",
			e: " ",
			resposta: "a"
		},
		{
			id: 26,
			enunciado: "Qual o metal cujo símbolo químico é o Au?",
			a: "Cobre", 
			b: "Prata",
			c: "Mercúrio",
			d: "Ouro",
			e: "Manganês",
			resposta: "d"			
		},
		{
			id: 27,
			enunciado: "Quem pintou o teto da capela sistina?",
			a: "Michelangelo", 
			b: "Leonardo da Vinci",
			c: "Rafael",
			d: "Sandro Botticelli",
			e: "Donatello",
			resposta: "a"
		},
		{
			id: 28,
			enunciado: " - ",
			a: " ", 
			b: " ",
			c: " ",
			d: " ",
			e: " ",
			resposta: "a"
		},
		{
			id: 29,
			enunciado: "Chame alguém que você goste e passe um momento com ele, pode ser em uma chamada de vídeo, uma mensagem ou tarde juntos / Dançe uma música antiga, por exemplo: Dança da mãozinha, olha a onda, bonde do tigrão. / Pule 10 vezes e depois beba água / Ligue para alguém que faz tempo que você não converse e pergunte como ela está. "
		},
		{
			id: 30,
			enunciado: " - ",
			a: " ", 
			b: " ",
			c: " ",
			d: " ",
			e: " ",
			resposta: "a"
		},
		{
			id: 31,
			enunciado: "Quantos braços tem um polvo?",
			a: "Seis", 
			b: "Oito",
			c: "Dez",
			d: "Sete",
			e: "Três",
			resposta: "b"
		},
		{
			id: 32,
			enunciado: " - ",
			a: " ", 
			b: " ",
			c: " ",
			d: " ",
			e: " ",
			resposta: "a"
		},
		{
			id: 33,
			enunciado: " - ",
			a: " ", 
			b: " ",
			c: " ",
			d: " ",
			e: " ",
			resposta: "a"
		}
    ];

    mecanica_jogo = function(player){

		$("#enuncado").empty();
		$(".quiz").show();

    	pergunta = quiz_lista[player.posicao-1];

		if (pergunta.enunciado){
			$("#enunciado").empty();
			$("#enunciado").append(pergunta.enunciado);
			if(pergunta.e){
				$(".hidden").show();

				$("#a").empty();
				$("#b").empty();
				$("#c").empty();
				$("#d").empty();
				$("#e").empty();

				$(".hidden").removeClass("true");
				$(".hidden").removeClass("false");

				$("#a").append("a) "+pergunta.a);
				$("#b").append("b) "+pergunta.b);
				$("#c").append("c) "+pergunta.c);
				$("#d").append("d) "+pergunta.d);
				$("#e").append("e) "+pergunta.e);

				$(".quiz button").click(function(){

					if(this.id == pergunta.resposta){
						$(this).addClass("true");
						player.new_pts = 1;
					}else{
						$(this).addClass("false");
						$("#"+pergunta.resposta).addClass("true");
					}

				});

			}else{
				$(".hidden").hide();
			}
		}

    }

    var movimentacao = function(player){
    	player.new_pos = num_dado;

    	if(player.posicao >= 33) {
    		$(".final").show()

    		$(".first").append("<b style='color: #e600ff'>Rosa</b> acumulou: <b>"+rosa.pontos+"</b> pontos.");
    		$(".second").append("<b style='color: #34e8eb'>Azul Claro</b> acumulou: <b>"+azul_claro.pontos+"</b> pontos.");
    		$(".third").append("<b style='color: #1e00ff'>Azul</b> acumulou: <b>"+azul.pontos+"</b> pontos.");
    		$(".fourth").append("<b style='color: #fff'>Branco</b> acumulou: <b>"+branco.pontos+"</b> pontos.");
    	}else{
	    	var cor = player.cor;
	    	var color = cor.toLowerCase();
	    	var color = color.replace(" ", "_");

			$(".texto p").empty();
			$(".texto p").append("<b class='"+color+"'>"+player.cor+"</b> ande para casa: "+player.posicao);	

			mecanica_jogo(player);
    	}    	
    }

	$(".dado").click(function(){		
		$(".dado").empty();		
		roll();		

		switch(atual){
			case 1:
				
				movimentacao(rosa);					
				
				atual++;

				break;
			case 2:				
				
				movimentacao(azul_claro);	

				atual++;

				break;
			case 3:				
				
				movimentacao(azul);

				atual++;

				break;
			case 4:				
				
				movimentacao(branco);	

				atual = 1;

				break;
		}	

	});


});