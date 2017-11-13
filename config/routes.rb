Rails.application.routes.draw do
namespace :api do
  resources :users do
    resources :people do
      resources :items
      end
    end
  end
end