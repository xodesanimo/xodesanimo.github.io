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

	progressRosa = 0;
	progressAzulClaro = 0;
	progressAzul = 0;
	progressBranco = 0;
	// PLAYER ATUAL
	atual = 1;
    ptsAtual = 1;
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
		addPontos : function(){
			this.pontos++;
		},

		set new_pos(num){
			this.posicao += num; 
		}
	};

	azul_claro = {
		id: 2, 
		cor: "Azul Claro",
		posicao: 0,
		pontos: 0,
		addPontos : function(){
			this.pontos++;
		},

		set new_pos(num){
			this.posicao += num; 
		}
	};

	azul = {
		id: 3, 
		cor: "Azul Escuro",
		posicao: 0,
		pontos: 0,
		addPontos : function(){
			this.pontos++;
		},

		set new_pos(num){
			this.posicao += num; 
		}
	};

	branco = {
		id: 4, 
		cor: "Branco",
		posicao: 0,
		pontos: 0,
		addPontos : function(){
			this.pontos++;
		},

		set new_pos(num){
			this.posicao += num; 
		}
	};

    quiz_lista = [
	    {
			id : 1,
			tipo: "quiz",
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
			tipo: "quiz",
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
			tipo: "desafio",
			enunciado : "Chegou o momento de olhar para si! Pense neste momento na sua última realização pessoal ou profissional da qual se sentiu orgulhoso(a)",
			a: "Realizar ação",
			b: "Não realizar ação"
		},

		{
			id: 4,
			tipo: "quiz",
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
			tipo: "desafio",
			enunciado: "Vamos fazer alguém feliz! Escolha um jogador.",
			a: "Realizar ação",
			b: "Não realizar ação"
		},

		{
			id: 6,
			tipo: "quiz",
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
			tipo: "desafio",
			enunciado: "Liste 3 coisas que você admira e/ou gosta em si mesmo e diga em voz alta.(pode ser característica física, ações, qualquer coisa vale)",
			a: "Realizar ação",
			b: "Não realizar ação"
		},
		{
			id: 8,
			tipo: "desafio",
			enunciado: "Qual foi a última vez que fez algo para si mesmo? Ex: Praticou alguma atividade prazerosa, assistiu um filme/leu um livro por diversão, riu de si mesmo...",
			a: "Realizar ação",
			b: "Não realizar ação"
		},
		{
			id: 9,
			tipo: "desafio",
			enunciado: "Hora de olhar para o próximo!! Escolha alguém importante para você, e tire um tempo para lhe dizer o quão esta pessoa é importante para você. Ex: um áudio, enviar uma foto juntos, dedicar uma música para ela/ele ou fazer uma ligação (Ação pode ser feita após o jogo).",
			a: "Realizar ação",
			b: "Não realizar ação"
		},
		{
			id: 10,
			tipo: "quiz",
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
			tipo: "desafio",
			enunciado: "Vamos levantar essa auto-estima! Liste 3 coisas que você fez durante a quarentena que te fez feliz,e compartilhe com os outros jogadores se você se sentir à vontade.",
			a: "Realizar ação",
			b: "Não realizar ação"
		},
		{
			id: 12,
			tipo: "desafio",
			enunciado: "Faça o bem! Pense em alguma ação que você pode fazer para um desconhecido (ajudar idoso a atravessar a rua, dar bom dia para um desconhecido). ",
			a: "Realizar ação",
			b: "Não realizar ação"
		},
		{
			id: 13,
			tipo: "quiz",
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
			tipo: "quiz",
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
			tipo: "desafio",
			enunciado: "Vamos dar um UP nesse amor próprio! Cite uma característica sua que você considere única/especial, que apenas você tem",
			a: "Realizar ação",
			b: "Não realizar ação"
		},
		{
			id: 16,
			tipo: "desafio",
			enunciado: "Vamos dar um UP nesse amor próprio! Declare o seu amor por si mesmo, assim como faria para alguém que você se importa muito. Ex: Recite um poema, diga algo muito legal, dedique uma música...",
			a: "Realizar ação",
			b: "Não realizar ação"
		},
		{
			id: 17,
			tipo: "desafio",
			enunciado: "Já pensou em comprar produtos que ajudam instituições? Existem hoje milhares de produtos nas prateleiras que são voltados a alguma instituição ou projeto social. Que tal escolher aqueles que podem fazer isso?",
			a: "Realizar ação",
			b: "Não realizar ação"
		},
		{
			id: 18,
			tipo: "quiz",
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
			tipo: "desafio",
			enunciado: "Promova a bondade! Tire um tempo e separa roupas e utensílios que você não utiliza mais e que pode ser útil para outras pessoas. Muitas ONG’s e instituições vivem através de bazares, se estiver em boa condição, você pode ajudar indiretamente alguém",
			a: "Realizar ação",
			b: "Não realizar ação"
		},
		{
			id: 20,
			tipo: "desafio",
			enunciado: "Pense em si! Tire um tempo para fazer algo para si que você vem adiando, que sempre diz que irá fazer mas no fim, nunca sobra tempo para fazer",
			a: "Realizar ação",
			b: "Não realizar ação"
		},
		{
			id: 21,
			tipo: "desafio",
			enunciado: " Peça desculpas! Sabe quando fazemos/falamos algo que não foi muito legal? Envie uma mensagem para uma pessoa que você falou/fez algo que não foi legal e peça desculpas. Pode ser algo que já passou anos ou aconteceu hoje cedo. Somos seres humanos, erramos, mas o importante é reconhecer os nossos erros.",
			a: "Realizar ação",
			b: "Não realizar ação"
		},
		{			
			id: 22,
			tipo: "quiz",
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
			tipo: "desafio",
			enunciado: "Aceite como você é! Você já aceitou os seus defeitos e erros? Somos seres humanos, não somos perfeitos e erramos, mas você já parou para pensar que é normal isso e não precisa se irritar com eles?",
			a: "Realizar ação",
			b: "Não realizar ação"
		},
		{
			id: 24,
			tipo: "desafio",
			enunciado: "Teve alguma atividade que você descobriu que gosta ou é muito bom durante a pandemia? Compartilhe com os outros jogadores se você se sentir à vontade",
			a: "Realizar ação",
			b: "Não realizar ação"
		},
		{
			id: 25,
			tipo: "desafio",
			enunciado: " Promova a bondade! Já pensou sobre doação de órgãos e de sangue? É muito importante e gratificante quando ajudamos alguém. Fale para sua família da sua vontade quando partir, e estando vivo doe sangue",
			a: "Realizar ação",
			b: "Não realizar ação"
		},
		{
			id: 26,
			tipo: "quiz",
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
			tipo: "quiz",
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
			tipo: "desafio",
			enunciado: "Qual o seu nível de tolerância quando as pessoas vem se desculpar com você? Lembre-se que desculpas não são nada se não vierem acompanhadas de boas ações",
			a: "Realizar ação",
			b: "Não realizar ação"
		},
		{
			id: 29,
			tipo: "desafio",
			enunciado: "Chame alguém que você goste e passe um momento com ele, pode ser em uma chamada de vídeo, uma mensagem ou tarde juntos / Dançe uma música antiga, por exemplo: Dança da mãozinha, olha a onda, bonde do tigrão. / Pule 10 vezes e depois beba água / Ligue para alguém que faz tempo que você não converse e pergunte como ela está. ",
			a: "Realizar ação",
			b: "Não realizar ação"		
		},
		{
			id: 30,
			tipo: "desafio",
			enunciado: " Promova a bondade! Quando foi a última vez que você lembrou de agradecer aos que estão mais próximos de você? Mesmo por ações rotineiras, reconhecimento é importante",
			a: "Realizar ação",
			b: "Não realizar ação"
		},
		{
			id: 31,
			tipo: "quiz",
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
			tipo: "desafio",
			enunciado: " Livre-se do que te faz mal! Você sabe quando cortar laços com pessoas que te fazem mal? Lembre-se que muitas pessoas apenas nos fazem mal, é importante saber cortar laços quando necessário",
			a: "Realizar ação",
			b: "Não realizar ação"
		},
		{
			id: 33,
			tipo: "desafio",
			enunciado: "Promova a bondade! Como você reage diante de alguém que está passando por uma situação difícil? Pense sobre isso, uma palavra amiga pode ser tudo que alguém precisa.",
			a: "Realizar ação",
			b: "Não realizar ação"
		}
    ];


    var movimentacao = function(player){
    	player.new_pos = num_dado;

    	if(player.posicao > 34) {
    		$(".final").show();
    		var posFinal = 1;

    		$(".first").append("<b style='color: #e600ff'>Rosa</b> acumulou: <b>"+rosa.pontos+"</b> moedas.");
		    if($("#rosa .progress").width() > 40){
		    	$(".first").append("<br> Parabéns!! Você está indo muito bem com a sua saúde mental, mas não se descuide, continue SEMPRE cuidando dela e da sua saúde física");
		   	}else{
		    	$(".first").append("<br> Tudo bem não se sentir bem, todo pequeno passo já é uma conquista. <br> Se lembre que estamos apenas passando por uma fase, e como toda fase ela passa, daqui um tempo vamos relembrar e ver como evoluímos até lá. <br> Cuide de você e da sua saúde mental, não precisa sentir vergonha na hora de pedir ajuda. <br> Vamos te ajudar na hora da batalha, porque amigo não é só na hora da diversão ;)");
		    }

    		$("#prox").click(function(){

    			if(posFinal == 4){
    				posFinal = 1;
    			}else{
    				posFinal++;
    			}  

    			if(posFinal == 1) {
	    			$(".first").empty();
	    			$(".second").empty();
	    			$(".third").empty();
	    			$(".fourth").empty();

	    			$(".first").append("<b style='color: #e600ff'>Rosa</b> acumulou: <b>"+rosa.pontos+"</b> moedas.");
		    		if($("#rosa .progress").width() > 40){
		    			$(".first").append("<br> Parabéns!! Você está indo muito bem com a sua saúde mental, mas não se descuide, continue SEMPRE cuidando dela e da sua saúde física");
		    		}else{
		    			$(".first").append("<br> Tudo bem não se sentir bem, todo pequeno passo já é uma conquista. <br> Se lembre que estamos apenas passando por uma fase, e como toda fase ela passa, daqui um tempo vamos relembrar e ver como evoluímos até lá. <br> Cuide de você e da sua saúde mental, não precisa sentir vergonha na hora de pedir ajuda. <br> Vamos te ajudar na hora da batalha, porque amigo não é só na hora da diversão ;)");
		    		}
	    		}

	    		if (posFinal == 2) {
	    			$(".first").empty();
	    			$(".third").empty();
	    			$(".fourth").empty();

		    		$(".second").append("<b style='color: #34e8eb'>Azul Claro</b> acumulou: <b>"+azul_claro.pontos+"</b> moedas.");
		    		if($("#rosa .progress").width() > 40){
		    			$(".second").append("<br> Parabéns!! Você está indo muito bem com a sua saúde mental, mas não se descuide, continue SEMPRE cuidando dela e da sua saúde física");
		    		}else{
		    			$(".second").append("<br> Tudo bem não se sentir bem, todo pequeno passo já é uma conquista. <br> Se lembre que estamos apenas passando por uma fase, e como toda fase ela passa, daqui um tempo vamos relembrar e ver como evoluímos até lá. <br> Cuide de você e da sua saúde mental, não precisa sentir vergonha na hora de pedir ajuda. <br> Vamos te ajudar na hora da batalha, porque amigo não é só na hora da diversão ;)");
		    		}
	    		}

	    		if (posFinal == 3) {
	    			$(".second").empty();
	    			$(".first").empty();
	    			$(".fourth").empty();
	    			
	    			$(".third").append("<b style='color: #1e00ff'>Azul</b> acumulou: <b>"+azul.pontos+"</b> moedas.");
	    			if($("#rosa .progress").width() > 40){
		    			$(".third").append("<br> Parabéns!! Você está indo muito bem com a sua saúde mental, mas não se descuide, continue SEMPRE cuidando dela e da sua saúde física");
		    		}else{
		    			$(".third").append("<br> Tudo bem não se sentir bem, todo pequeno passo já é uma conquista. <br> Se lembre que estamos apenas passando por uma fase, e como toda fase ela passa, daqui um tempo vamos relembrar e ver como evoluímos até lá. <br> Cuide de você e da sua saúde mental, não precisa sentir vergonha na hora de pedir ajuda. <br> Vamos te ajudar na hora da batalha, porque amigo não é só na hora da diversão ;)");
		    		}

	    		}

	    		if (posFinal == 4) {
	    			$(".second").empty();
	    			$(".third").empty();
	    			$(".first").empty();
	    			
	    			$(".fourth").append("<b style='color: #fff'>Branco</b> acumulou: <b>"+branco.pontos+"</b> moedas.");if($("#rosa .progress").width() > 40){
		    			$(".fourth").append("<br> Parabéns!! Você está indo muito bem com a sua saúde mental, mas não se descuide, continue SEMPRE cuidando dela e da sua saúde física");
		    		}else{
		    			$(".fourth").append("<br> Tudo bem não se sentir bem, todo pequeno passo já é uma conquista. <br> Se lembre que estamos apenas passando por uma fase, e como toda fase ela passa, daqui um tempo vamos relembrar e ver como evoluímos até lá. <br> Cuide de você e da sua saúde mental, não precisa sentir vergonha na hora de pedir ajuda. <br> Vamos te ajudar na hora da batalha, porque amigo não é só na hora da diversão ;)");
		    		}

	    		}


    		});

    		
    	}else{
	    	var cor = player.cor;
	    	var color = cor.toLowerCase();
	    	var color = color.replace(" ", "_");

			$(".texto p").empty();
			$(".texto p").append("<b class='"+color+"'>"+player.cor+"</b> ande para casa: "+player.posicao);	

			$("#enuncado").empty();
			$(".quiz").show();

	    	pergunta = quiz_lista[player.posicao-1];

	    	if (pergunta.enunciado){
				$("#enunciado").empty();
				$("#enunciado").append(pergunta.enunciado);

				$(".hidden").show();

				$("#a").empty();
				$("#b").empty();
				$("#c").empty();
				$("#d").empty();
				$("#e").empty();

				$(".hidden").removeClass("true");
				$(".hidden").removeClass("false");
				
				if(pergunta.tipo == "desafio"){

					$("#c").hide();
					$("#d").hide();
					$("#e").hide();

					$("#a").append("a) "+pergunta.a);
					$("#b").append("b) "+pergunta.b);

				}

				if(pergunta.tipo == "quiz"){

					$("#a").append("a) "+pergunta.a);
					$("#b").append("b) "+pergunta.b);
					$("#c").append("c) "+pergunta.c);
					$("#d").append("d) "+pergunta.d);
					$("#e").append("e) "+pergunta.e);

					

				}
			}
    	}    	
    }

    $(".quiz button").click(function(){

    	$(".hidden").attr('disabled', 'disabled');

    	if(pergunta.tipo == "desafio"){
	    	if(this.id == "a"){
				switch(ptsAtual){
					case 1:
						if (progressRosa < 80) {							
							progressRosa += 5;	
							$("#rosa .progress").width(progressRosa);
							ptsAtual++;
						}else{
							ptsAtual++;
						}
						break;
					case 2:				
						if (progressAzulClaro < 80) {
							progressAzulClaro += 5;	
							$("#azul_claro .progress").width(progressAzulClaro);							
							ptsAtual++;
						}else{
							ptsAtual++;
						}
						break;
					case 3:		
						if(progressAzul < 80) {
							progressAzul += 5;	
							$("#azul .progress").width(progressAzul);							
							ptsAtual++;
						}else{
							ptsAtual++;
						}
						break;
					case 4:				
						if(progressBranco < 80) {
							progressBranco += 5;	
							$("#branco .progress").width(progressBranco);							
							ptsAtual++;
						}else{
							ptsAtual++;
						}
						break;
				}	
			}else{
				ptsAtual++;
				if(ptsAtual = 4){
					ptsAtual = 1;
				}
			}
    	}else{
    		if(this.id == pergunta.resposta){
				$(this).addClass("true");

				switch(ptsAtual){
					case 1:						
						rosa.pontos += 1;
						ptsAtual++;
						break;
					case 2:										
						azul_claro.pontos += 1;
						ptsAtual++;
						break;
					case 3:										
						azul.pontos += 1;
						ptsAtual++;
						break;
					case 4:										
						branco.pontos += 1;
						ptsAtual = 1
						break;
				}
			}else{
				$(this).addClass("false");
				$("#"+pergunta.resposta).addClass("true");
				ptsAtual++;
				if(ptsAtual = 4){
					ptsAtual = 1;
				}
			}
    	}	

	});

	$(".dado").click(function(){		
		$(".dado").empty();		
		roll();		
		$(".hidden").removeAttr('disabled');

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