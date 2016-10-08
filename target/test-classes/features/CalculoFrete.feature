Feature: Calcular Frete
	O sistema recebe o valor do frete e o tempo de entrega.

Scenario: sistema solicita o calculo do frete e o tempo de entrega
	Given o cliente adicionou ao menos um produto ao carrinho de compras
	When o cliente preenche o CEP do endereco de entrega 
	Then o sistema solicita o acesso ao sistema do correios

Scenario Outline: envio de dados do produto
	Given o numero de produtos: <numProduto>
	    And os dados de cada produto: <peso>, <largura>, <altura> e <comprimento>
		And o <tipoEntrega>
		And o endereco de origem <CEPorigem>
	When o cliente preenche o CEP do endereco de entrega <CEPdestino>
		And o sistema esta com acesso aos correios
	Then o sistema verifica a validade dos dados
		And retorna <valorFrete>, <prazoEntrega> e eventual <mensagemErro>	
		
	# TODO: Completar essa tabela com mais casos de uso.
	Examples:
		| numProduto | peso | largura | altura | comprimento | tipoEntrega | CEPorigem | CEPdestino | valorFrete | prazoEntrega |          mensagemErro        |
		|    01      | 100  |   100   |   80   |     100	 |     PAC     | 129122200 |  13083000  |    4,10    |      07      | 0: Processamento com Sucesso |
		|    01      | 2500 |    15   |   20   |     120	 |    SEDEX    | 129122200 |  13000000  |   15,20    |      03      | 0: Processamento com Sucesso |
		|    01      |  80  |    88   |    3   |      50	 |   SEDEX10   | 129122200 |  12900001  |   33,00    |      01      | 0: Processamento com Sucesso |
		|    01      |  80  |    90   |   15   |      80	 |    SEDEX    | 129122200 |  13083000  |   13,80    |      03      | 0: Processamento com Sucesso |
		|    01      | 4000 |    90   |   15   |      80	 |    SEDEX    | 129122200 |  13083000  |   13,80    |      03      | -4: Peso excedido            |
		|    01      |  80  |   106   |   15   |      80	 |    SEDEX    | 129122200 |  13083000  |   13,80    |      03      | -13: Largura Invalida        |
		|    01      |  80  |    90   |  106   |      80	 |    SEDEX    | 129122200 |  13083000  |   13,80    |      03      | -14: Altura Invalida         |
		|    01      |  80  |    90   |   15   |      15	 |    SEDEX    | 129122200 |  13083000  |   13,80    |      03      | -12: Comprimento Invalida    |
		|    01      |  80  |    90   |   15   |      80	 |    SEDEX    | 929122200 |  13083000  |   13,80    |      03      | -2: CEP Origem Invalido      |
		|    01      |  80  |    90   |   15   |      80	 |    SEDEX    | 129122200 |  13083999  |   13,80    |      03      | -3: CEP Destino Invalido     |
		|    02      | 110  |    20   |   12   |      40	 |      --     |     --    |     --     |     --     |      --      |             --               |
		|    --      | 130  |    33   |    8   |     120	 |    SEDEX    | 129122200 |  13083000  |   14,10    |      07      | 0: Processamento com Sucesso |

Scenario: Armazena dados de entrega no sistema
	Given Sistema tem acesso aos Correios
	When Correios retorna prazo de entrega
		And valor do frete
	Then valores sao armazenados no sistema
		