Rails.application.routes.draw do
namespace :api do
  resources :users do
      resources :items
    end
    resources :people
  end
end