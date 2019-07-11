Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :watches 
    end  
  end
end

# Prefix         Verb   URI Pattern                     Controller#Action
# api_v1_watches GET    /api/v1/watches(.:format)       api/v1/watches#index
#                POST   /api/v1/watches(.:format)       api/v1/watches#create
#   api_v1_watch GET    /api/v1/watches/:id(.:format)   api/v1/watches#show
#                PATCH  /api/v1/watches/:id(.:format)   api/v1/watches#update
#                PUT    /api/v1/watches/:id(.:format)   api/v1/watches#update
#                DELETE /api/v1/watches/:id(.:format)   api/v1/watches#destroy
