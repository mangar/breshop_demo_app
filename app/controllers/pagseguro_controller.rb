class PagseguroController < ApplicationController
  
  require 'breshop'
  
  attr_reader :item_1, :item_2
  
  def initialize
    @item_1 = Item.new({:code=>"1",
                        :description=>"produto01",
                        :quantity=>1,
                        :price=>11.50,
                        :weight=>0.100})
                      
    @item_2 = Item.new({:code=>"2",
                        :description=>"producto02",
                        :quantity=>2,
                        :price=>22.30,
                        :weight=>0.200})                
  end

  #
  # Tela inicial do carrinho demo
  #
  def index    
    #insere itens no carrinho de compras caso nao exista um carrinho criado....
    # session[:sale] = nil
    
    
    @sale = (session[:sale].nil? ? self.inicia_carrinho : session[:sale])
    #(session[:sale] == nil ? self.inicia_carrinho : session[:sale])      
    session[:sale] = @sale
    
  end
   
  #   
  # Atualiza o price do frete
  #
  def price_frete
    
    par = params[:value].split("+")
  
    sale = session[:sale]
    sale.zip1 = par[0]
    sale.zip2 = par[1]
    sale.shipment_type = (par[2] == "true" ? "SD" : "EN")    

    correios = Correios.new
    preco = correios.freight sale.zip1+"-"+sale.zip2, sale.weight.to_s, sale.price.to_s
    preco = preco.to_f
    
    sale.shipment = preco
    session[:sale] = sale
    
    render :text =>  "{\"pedido\": { \"frete\": \"#{preco.to_f}\", \"valor_total\": \"#{sale.price.to_f}\"}}"
    return
  end
  
    
  # Finaliza o sale, após o cadastro do cliente
  def finalizar
    
    
  end
  
  
  
  
  #
  # Reinicia o carrinho de compras
  #
  def reiniciar
    session[:sale] = nil
    redirect_to :action => 'index'
  end
  
  #
  # Cria o carrinho de compras o carrinho de compras inicial
  #
  def inicia_carrinho
    sale = Sale.new
    sale << @item_1
    sale << @item_2
    sale
  end
  

  
  
end
