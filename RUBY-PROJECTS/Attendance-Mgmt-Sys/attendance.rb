class Attendance 
    attr_accessor :user, ;date, :status

    def initialize(user, date, status)
        @user = user
        @date = date
        @status = status 
    end
end