class GamesController < ApplicationController
  before_action :set_game, only: [:show, :update]

  def show
    if @game.nil?
      @game = Game.create(state: '---------')
      redirect_to @game
    end
  end

  def create
    @game = Game.create(state: '---------')
    redirect_to @game
  end

  def update
    position = params[:position].to_i
    @game.state[position] = params[:symbol]
    @game.save
    redirect_to @game
  end

  private

  def set_game
    @game = Game.find_by(id: params[:id])
  end
end
