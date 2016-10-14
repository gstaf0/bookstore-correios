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
	Then sistema retorna valor do frete: <valorFrete>,
		And prazo de entrega: <prazoEntrega> 
		And eventual mensagem de erro: <mensagemRetorno>	
		
	# TODO: Completar essa tabela com mais casos de uso.
	Examples:
		| peso | largura | altura | comprimento | tipoEntrega  | CEPorigem | CEPdestino | valorFrete      | prazoEntrega  |       mensagemRetorno                       |
		| 100  |   100   |   80   |     100	    |     "PAC"    | 129122200 |  13083000  |   "4.10"        |      "7"      | "Processamento com Sucesso"                 |
		| 500  |    15   |   20   |     120	    |    "SEDEX"   | 129122200 |  13000000  |   "15.40"       |      "3"      | "Processamento com Sucesso"                 |
		|  80  |    88   |    3   |      50	    |   "SEDEX10"  | 129122200 |  12900001  |   "33.33"       |      "1"      | "Processamento com Sucesso"                 |
		|  80  |    90   |   15   |      80	    |    "SEDEX"   | 129122200 |  13083000  |   "15.40"       |      "3"      | "Processamento com Sucesso"                 |
		| 130  |    33   |    8   |     120	    |    "SEDEX"   | 129122200 |  13083000  |   "15.40"       |      "3"      | "Processamento com Sucesso"                 |
		| 4000 |    90   |   15   |      80	    |    "SEDEX"   | 129122200 |  13083000  |   "-1"          |      "-1"     | "Peso excedido"                             |
		|  80  |   106   |   15   |      80	    |    "SEDEX"   | 129122200 |  13083000  |   "-1"          |      "-1"     | "Largura Invalida"                          |
		|  80  |    90   |  106   |      80	    |    "SEDEX"   | 129122200 |  13083000  |   "-1"          |      "-1"     | "Altura Invalida"                           |
		|  80  |    90   |   15   |      130	|    "SEDEX"   | 129122200 |  13083000  |   "-1"          |      "-1"     | "Comprimento Invalido"                      |
		|  80  |    90   |   15   |      80	    |    "SEDEX"   | 929122200 |  13083000  |   "-1"          |      "-1"     | "CEP Origem Invalido"                       |
		|  80  |    90   |   15   |      80	    |    "SEDEX"   | 129122200 |  13083999  |   "-1"          |      "-1"     | "CEP Destino Invalido"                      |
		| 110  |    20   |   12   |      40	    |    ""        | 129122200 |  13000000  |   "-1"          |      "-1"     | "Campo Tipo de Entrega não foi preenchido"  |
		| 110  |    20   |   12   |      40	    |    "PAC"     |           |  13000000  |   "-1"          |      "-1"     | "Campo CEP Origem não foi preenchido"       |
		| 110  |    20   |   12   |      40	    |    "SEDEX"   | 129122200 |            |   "-1"          |      "-1"     | "Campo CEP Destino não foi preenchido"      |
        |      |   100   |   80   |     100	    |     "PAC"    | 129122200 |  13083000  |   "-1  "        |      "-1"     | "Campo Peso não foi preenchido"             |


Scenario: Armazena dados de entrega no sistema
	Given Sistema tem acesso aos Correios
	When Correios retorna valor do frete $"4.10"
		And prazo de entrega 3
	Then valores sao armazenados no sistema
		