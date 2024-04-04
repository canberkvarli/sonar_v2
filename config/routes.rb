Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users do
      resources :likes, only: [:index]
    end

    resources :tracks, only: %i[index create show destroy] do
      resources :likes, only: %i[create destroy]
    end

    resource :session, only: %i[create destroy]
  end

  root 'homepage#index'
end
