Rails.application.routes.draw do


  get 'abouts/index' => 'abouts#index', as: :about

  root 'homes#index'

  get 'homes/index' => 'homes#index', as: :home

  get 'menus/breakfast' => 'menus#breakfast', as: :breakfast

  get 'menus/lunch' => 'menus#lunch', as: :lunch

  get 'locations/index' => 'locations#index', as: :locations

  get 'homes/test' => 'homes#test', as: :test

end
