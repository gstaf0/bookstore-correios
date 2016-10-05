Feature: Buscar endereco
	No que o cliente digita um CEP, o sistema retorna um endereco por ele representado 

Scenario Outline: cliente fornece um CEP valido 
	Given o sistema está com acesso aos correios  
	When o cliente preencheu o CEP do endereco de entrega <CEPdestino>
	Then o sistema recebe o endereco fornecido pelos correios <enderecoDestino>
	
	Examples:
		| CEPdestino |                  enderecoDestino                      |
		|  13083000  | Avenida Doutor Luis de Tella, Barão Geraldo, Campinas |
		|  13041445  |          Rua da Abolicao, Ponte Preta, Campinas       | 
		
Scenario: sistema dos correios desconectado 
	Given o sistema não está com acesso aos correios  
	When o cliente preencheu o CEP do endereco de entrega
	Then o sistema informa um erro de falha de acesso
	