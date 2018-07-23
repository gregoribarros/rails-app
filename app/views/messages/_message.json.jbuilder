json.extract! message, :id, :message, :subdate, :created_at, :updated_at
json.url message_url(message, format: :json)
