class Message < ApplicationRecord
	def setMessageSubDate
		self.subdate = Time.now
		self.save	
	end
	def getMessageSubDate
		self.created_at		
	end
end
