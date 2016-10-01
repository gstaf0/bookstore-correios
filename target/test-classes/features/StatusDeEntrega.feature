Feature: Consultar status
	Como cliente eu gostaria de poder consultar o status do andamento da entrega de um pedido

Scenario: cliente acessando area de consulta status de Entrega
	Given codigo de rastreamento do pedido
		And o cliente realizou ao menos uma compra
		And o cliente esta logado no Sistema  
	When o cliente acionou opcao de consultar status de entrega
	Then o sistema exibe tela de consulta status de entrega do pedido

Scenario: buscar o status de entrega no sistema dos correios
	Given codigo de rastreamento do pedido
		And o cliente realizou ao menos uma compra
		And o cliente esta logado no sistema  
	When o cliente acionou opcao de consultar status de entrega
	Then o sistema recebe a situacao de entrega dos correios	

Scenario Outline: exibir os detalhes de entrega
	Given codigo de rastreamento do pedido <rastreamentoCodigo>
		And o cliente <clientID> realizou ao menos uma compra
		And o cliente esta logado no sistema  
	When o cliente acionou opcao de consultar status de entrega
		And o sistema dos correios retornou o status
	Then o sistema exibe os detalhes de entrega do pedido com o <rastreamentoCodigo>, <statusEntrega> e <prazoEntrega>
	
	Examples:
		| clientID | rastreamentoCodigo | 		statusEntrega		| 	prazoEntrega	|
		|	 01    |	  0014FA00001   |  Produto em separacao     |    14/10/2016		|
		|	 02	   |	  0014FA80002	|  Transporte em andamento  |    14/10/2016		|
		|	 03	   |	  0014FA81003   |  Produto entregue    		|    14/10/2016		|
