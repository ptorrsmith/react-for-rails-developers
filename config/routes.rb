Rails.application.routes.draw do
  # get 'pages/index' # this will get index.html.erb from templates
  # # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'pages#index' # this will enact the pages controller index action
end
