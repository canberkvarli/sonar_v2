module Api
  class Comments < ApplicationController
    def index
      @comments = Comment.all
    end

    def create
      @comment = Comment.new(comment_params)

      if @comment.save!
        @track = Track.find(@comment.track_id)
        render 'api/tracks/show'
      else
        render json: @comment.errors.full_message, status: 422
      end
    end

    def destroy
      @comment = Comment.find(params[:id])

      if @comment.destroy
        render json: @comment
      else
        render json: @comment.errors.full_message, status: 422
      end
    end

    private

    def comment_params
      params.require(:comment).permit(:body, :commenter_id, :track_id)
    end
  end
end
