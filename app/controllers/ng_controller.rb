class NgController < ApplicationController
  before_action :authenticate
  layout :which_layout

  def angular
  end

  private

  def which_layout
    'angular'
  end
end
