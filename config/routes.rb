Rails.application.routes.draw do
  resources :products
  namespace :api do
  	post 'sessions/signin' => 'sessions#sign_in'
  	post 'sessions/signup' => 'sessions#sign_up'
    delete 'sessions/signout/:id' => 'sessions#sign_out'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
