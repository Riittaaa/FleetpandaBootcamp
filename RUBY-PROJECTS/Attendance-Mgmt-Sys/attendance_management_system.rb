require_relative 'user'
require_relative 'attendance'

class AttendanceManagementSystem
  def initialize
    @users = []
  end

  def add_user(id, name, email)
    user = User.new(id, name, email)
    @users << user
    user
  end

  def find_by_user(id)
    @users.find {|user| user.id == id}
  end

  def record_attendance(id, date, status)
    user = find_by_user(id)

    if user
      user.add_attendance(date, status)
      true
    else
      false
    end
  end

  def show_records(id)
    user = find_by_user(id)
    user ? user.attendance_records : []
  end

end