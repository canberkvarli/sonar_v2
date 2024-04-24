Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users do
      resources :likes, only: [:index]
      reosurces :comments, only: [:index]
    end

    resources :tracks, only: %i[index create show destroy] do
      resources :likes, only: %i[create destroy]
      resources :comments, only: %i[index create destroy]
    end

    resource :session, only: %i[create destroy]
  end

  # TODO: quick workaround for frontend routing. Fix it by perhaps using a public/index.html
  root 'homepage#index'
end
