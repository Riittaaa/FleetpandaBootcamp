class TodoApp
    def initialize
      @todo = []
    end
  
    def add_task
      print "Enter the task to be added: "
      task_to_add = gets.chomp
      if @todo.include?(task_to_add)
        puts "Task already exists!!!"
      else
        #@todo.push(task_to_add)
        @todo << task_to_add
        puts "Task added successfully!!!"
      end
    end
  
    #delete the task acc to task name
    # def delete_task
    #   print "Enter the task to be deleted: "
    #   task_to_delete = gets.chomp
    #   if @todo.include?(task_to_delete)
    #     @todo.delete(task_to_delete)
    #     puts "Task deleted successfully!!!"
    #   else
    #     puts "Task not found!!!"
    #   end   
    # end
  
    #delete the task acc to the serial number
    def delete_task
      if @todo.empty?
        puts "No task to delete !!!"
      else
        print "Enter the number of the task to be deleted: "
        index = gets.chomp.to_i
        if index.between?(1, @todo.length)
          removed_task = @todo.delete_at(index - 1)
          puts "Removed task : #{removed_task}"
          puts "Task deleted successfully!!!"
        else
          puts "Task not found!!!"
        end 
      end   
    end
    
    def display_tasks
      if @todo.empty?
        puts "Task list is empty!!!"
      else
        puts "\n\n-- Task lists --"
        @todo.each_with_index do |task, index| 
          puts "#{index + 1}. #{task}"
        end
      end
    end
  
    #delete the task acc to task name
    # def update_task
    #   print "Enter the task to be updated: "
    #   task_to_update = gets.chomp
    #   index = @todo.index(task_to_update)
    #   if index.nil?
    #     puts "Task not found!!!"
    #   else
    #     print "Enter the new task: "
    #     new_task = gets.chomp
    #     @todo[index] = new_task
    #     puts "Task updated successfully!!!"
    #   end
    # end
  
    #update the task acc to the serial number
    def update_task
      if @todo.empty?
        puts "No task to update !!!"
      else
        print "Enter the number of the task to be updated: "
        index = gets.chomp.to_i
        if index.between?(1, @todo.length)
          print "Enter the new task: "
          new_task = gets.chomp
          @todo[index - 1] = new_task
          puts "Task updated successfully!!!" 
        else
          puts "Task not found!!!"
        end
      end
    end
  end
  
  def main
    todo_obj = TodoApp.new
  
    loop do
      puts "\n\n----- TO DO APP -----"
      puts "1. Add a task"
      puts "2. Show all tasks"
      puts "3. Update a task"
      puts "4. Delete a task"
      puts "5. Exit"
  
      print "\nChoose an option: "
      choice = gets.chomp.to_i
  
      case choice
      when 1
        todo_obj.add_task
      
      when 2
        todo_obj.display_tasks
        
      when 3
        todo_obj.update_task
  
      when 4
        todo_obj.delete_task
  
  
      when 5
        puts "\nExiting the To Do App\n" 
        break
    
      else  
        puts "\nInvalid option!!!"
      end
    end
  end
  
  main