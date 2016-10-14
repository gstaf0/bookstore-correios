package br.unicamp.services;


// Classe que implementa alguns dos serviços prestados pelos correios para que o teste possa ser executado corretamente.
public class CorreiosServices {
	
	
	
	
	public static String calcFrete(Double peso, Double largura, Double altura, Double comprimento, String tipoEntrega, Long cepOrig, Long cepDest) {
		
		String retMessage = "Processamento com Sucesso";

		if(tipoEntrega=="" || tipoEntrega==null || cepOrig==null || cepDest==null) {
			 retMessage = "Alguns campos não foram preenchidos";
			 return retMessage;
		}
		
		if(cepOrig==929122200) {
			retMessage = "CEP Origem Invalido";
			return retMessage;
		}
		
		if(cepDest==13083999) {
			retMessage = "CEP Destino Invalido";
			return retMessage;
		}
		
		
		
		
		return retMessage;
	}
	
	
	public static void getMensagemRetorno() {
		
	}

}
