Rails.application.routes.draw do
namespace :api do
  resources :users do
    resources :items do
      resources :people do
      end
    end
  end
end