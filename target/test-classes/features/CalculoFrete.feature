Feature: Calcular Frete
	O sistema recebe o valor do frete e o tempo de entrega.

Scenario: sistema solicita o calculo do frete e o tempo de entrega
	Given o cliente adicionou ao menos um produto ao carrinho de compras
	When o cliente preenche o CEP do endereco de entrega 
	Then o sistema se conecta ao servico dos Correios
	  And verifica se a API esta online

Scenario Outline: envio de dados do produto
	Given existe ao menos um pedido no carrinho
		And servico dos correios esta operacional
		And peso: <peso>, 
	    And largura: <largura>, 
	    And altura: <altura>, 
	    And comprimento: <comprimento>,
		And tipo de entrega: <tipoEntrega>,
		And CEP de origem <CEPorigem>
		And CEP de destino <CEPdestino>
	When sistema solicita o calculo do frete
		And tempo de entrega
	Then sistema verifica a validade dos dados
		And retorna valor do frete: <valorFrete>,
		And prazo de entrega: <prazoEntrega> 
		And eventual mensagem de erro: <mensagemRetorno>	
		
	# TODO: Completar essa tabela com mais casos de uso.
	Examples:
		| peso | largura | altura | comprimento | tipoEntrega  | CEPorigem | CEPdestino | valorFrete      | prazoEntrega |       mensagemRetorno                  |
		| 100  |   100   |   80   |     100	    |     "PAC"    | 129122200 |  13083000  |   "4.10"        |      07      | "Processamento com Sucesso"            |
		| 2500 |    15   |   20   |     120	    |    "SEDEX"   | 129122200 |  13000000  |   "15.40"       |      03      | "Processamento com Sucesso"            |
		|  80  |    88   |    3   |      50	    |   "SEDEX10"  | 129122200 |  12900001  |   "33.33"       |      01      | "Processamento com Sucesso"            |
		|  80  |    90   |   15   |      80	    |    "SEDEX"   | 129122200 |  13083000  |   "13.87"       |      03      | "Processamento com Sucesso"            |
		| 130  |    33   |    8   |     120	    |    "SEDEX"   | 129122200 |  13083000  |   "14.55"       |      07      | "Processamento com Sucesso"            |
		| 4000 |    90   |   15   |      80	    |    "SEDEX"   | 129122200 |  13083000  |   "13.87"       |      03      | "Peso excedido"                        |
		|  80  |   106   |   15   |      80	    |    "SEDEX"   | 129122200 |  13083000  |   "13.87"       |      03      | "Largura Invalida"                     |
		|  80  |    90   |  106   |      80	    |    "SEDEX"   | 129122200 |  13083000  |   "13.87"       |      03      | "Altura Invalida"                      |
		|  80  |    90   |   15   |      15	    |    "SEDEX"   | 129122200 |  13083000  |   "13.87"       |      03      | "Comprimento Invalida"                 |
		|  80  |    90   |   15   |      80	    |    "SEDEX"   | 929122200 |  13083000  |   "13.87"       |      03      | "CEP Origem Invalido"                  |
		|  80  |    90   |   15   |      80	    |    "SEDEX"   | 129122200 |  13083999  |   "13.87"       |      03      | "CEP Destino Invalido"                 |
		| 110  |    20   |   12   |      40	    |       ""     |           |            |   ""            |              | "Alguns campos não foram preenchidos"  |

Scenario: Armazena dados de entrega no sistema
	Given Sistema tem acesso aos Correios
	When Correios retorna prazo de entrega
		And valor do frete
	Then valores sao armazenados no sistema
		