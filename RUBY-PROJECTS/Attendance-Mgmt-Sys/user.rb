class User
  attr_accessor :id, :name, :email
  
  def initialize(id, name, email)
    @id = id
    @name = name
    @email = email
    @attendance_records = []
  end

  def add_attendance(date, status)
    @attendance_records << Attendance.new(date, status)
  end

  def attendance_records
    @attendance_records
  end
end