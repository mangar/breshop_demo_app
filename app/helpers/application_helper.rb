# Methods added to this helper will be available to all templates in the application.
module ApplicationHelper
  
  # Formata o numero em formato de peso
  #Ex: format_weight(1000) => 1,000
  def format_weight(num)
    number_to_currency(num, {:unit => '', :separator => ',', :delimiter => '.', :precision => 3})
  end
  
end
