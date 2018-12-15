Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
<<<<<<< HEAD
root to: 'static_pages#root'
namespace :api, defaults: {format: 'json'} do
  get 'businesses/search', to: 'businesses#search'
  resources :users, only: [:create]
  resources :user_pictures, only: [:create, :show, :index, :destroy]
  resources :businesses, only: [:index, :show]
  resources :reviews
  resource :session, only: [:create, :destroy, :show]
end
=======
  root to: 'static_pages#root'
  namespace :api, defaults: {format: 'json'} do
    get 'businesses/search', to: 'businesses#search'
    resources :users, only: [:create]
    resources :user_pictures, only: [:create, :show, :index, :destroy]
    resources :businesses, only: [:index, :show]
    resources :reviews
    resource :session, only: [:create, :destroy, :show]
  end
>>>>>>> ffc86eff251a60724b78e84e4a788c0d044846df
end
