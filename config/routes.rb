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

  # TODO: quick workaround for frontend routing. Fix it by perhaps using a public/index.html
  root 'homepage#index'
  get 'login', to: 'homepage#index', as: :login
  get 'signup', to: 'homepage#index', as: :signup
  get 'upload', to: 'homepage#index', as: :upload
  get 'library', to: 'homepage#index', as: :library
  get 'tracks/:id', to: 'homepage#index', as: :track
end
