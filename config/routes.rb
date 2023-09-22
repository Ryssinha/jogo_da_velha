Rails.application.routes.draw do
  root 'games#show'
  resources :games, only: [:show, :create, :update]
end
