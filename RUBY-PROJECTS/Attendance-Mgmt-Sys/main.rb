require_relative 'attendance_management_system'

system = AttendanceManagementSystem.new

loop do
  puts "Attendance Managemant System"
  puts "1. Add user"
  puts "2. Record attendance"
  puts "3. Display attendance records"
  puts "4. Exit"
  print "\nChoose an option: "
  choice = gets.chomp.to_i

  case choice
  when 1
      print "Enter user ID: " 
      id = gets.chomp.to_i
      print "Enter the user name: "
      name = gets.chomp
      print "Enter user email: "
      email = gets.chomp

      system.add_user(id, name, email)
      puts "User added successfully!!!"

  when 2 
    print "Enter user ID: "
    id = gets.chomp.to_i
    print "Enter date (YYYY-MM-DD): "
    date = gets.chomp
    print "Enter status (Present/Absent): "
    status = gets.chomp

    record = system.record_attendance(id, date, status)
    if record
      puts "Attendance recorded successfully!!!\n\n"
    else
      puts "User not found. Please add the user first.\n\n"
    end

  when 3
    print "Enter user ID to display attendance records: "
    id = gets.chomp.to_i

    records = system.show_records(id) 
    if records.empty?
      puts "No records found for the given user ID.\n\n"
    else
      puts "Attendance records of user ID #{id}:"
      records.each do |record|
        puts "Date: #{record.date}, Status: #{record.status}"
      end
    end

  when 4
    puts "Exiting..."
    break

  else
  puts "Invalid option. Please choose another option.\n\n"
  end
end
