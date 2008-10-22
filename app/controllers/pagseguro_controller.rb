class PagseguroController < ApplicationController
  
  require File.dirname(__FILE__) + '/breshop/pagseguro'
  
  attr_reader :item_1, :item_2
  
  def initialize
    @item_1 = Item.new({:codigo=>"1",
                        :descricao=>"produto01",
                        :quantidade=>1,
                        :valor=>11.50,
                        :peso=>0.100})
                      
    @item_2 = Item.new({:codigo=>"2",
                        :descricao=>"producto02",
                        :quantidade=>2,
                        :valor=>22.30,
                        :peso=>0.200})                
  end

  # Tela inicial do carrinho demo
  def index    
    #insere itens no carrinho de compras caso nao exista um carrinho criado....
    session[:pedido] = nil
    
    @pedido = self.inicia_carrinho #(session[:pedido] == nil ? self.inicia_carrinho : session[:pedido])      
    session[:pedido] = @pedido
    
  end
  
  # Remove itens do carrinho de compras
  def remover
    
  end

  # Atualiza a quantidade de itens no carrinho de compras
  def atualizar
    
  end
  
  #Atualiza o valor do frete
  def valor_frete
    
    par = params[:value].split("+")

    pedido = session[:pedido]
    pedido.cep1 = par[0]
    pedido.cep2 = par[1]
    pedido.tipo_frete = (par[2] == "true" ? "SD" : "EN")    
    
    pagseguro = PsIntegracao.new
    preco = pagseguro.calcular_frete pedido
    
    pedido.frete = preco
    session[:pedido] = pedido
    
    render :text =>  "{\"pedido\": { \"frete\": \"#{preco}\", \"valor_total\": \"2.22\"}}"
    return
  end
  
  
  # Tela inicial do cadastro do cliente
  def cliente
    
  end
  
  # Finaliza o pedido, após o cadastro do cliente
  def finalizar
    
  end

  # reinicia o carrinho de compras
  def reiniciar
    session[:pedido] = nil
    redirect_to :action => 'index'
  end

  # Cria o carrinho de compras o carrinho de compras inicial
  def inicia_carrinho
    pedido = Pedido.new
    pedido << @item_1
    pedido << @item_2

    pedido
  end
  

  
  
end
