class Message < ApplicationRecord
  belongs_to :chef
  validates :content, presence: true
  validates :chef_id, presence: true

  def self.most_recent
    #order(:created_at).last(2) # only show 2 messages
    order(:created_at).last(20)
  end
end