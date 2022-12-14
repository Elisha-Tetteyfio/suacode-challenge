class Api::NotesController < ApplicationController
  before_action :set_note, only: %i[ show edit update destroy ]
  protect_from_forgery with: :null_session

  # GET /notes or /notes.json
  def index
    @notes = Note.all
    render json: @notes
  end

  # GET /notes/1 or /notes/1.json
  def show
    render json: @note
  end

  # GET /notes/new
  def new
    @note = Note.new
  end

  # GET /notes/1/edit
  

  # POST /notes or /notes.json
  def create
    @note = Note.new(note_params)

    if @note.save
      render json: @note, status: :created
    else
      render json: @note.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /notes/1 or /notes/1.json
  def update

    if @note.update(note_params)
      render json: @note
    else
      render json: @note.errors, status: :unprocessable_entity
    end
  end

  # DELETE /notes/1 or /notes/1.json
  def destroy
    @note.destroy

    respond_to do |format|
      format.html { redirect_to notes_url, notice: "Note was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_note
      @note = Note.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def note_params
      params.require(:note).permit(:title, :body)
    end
end
