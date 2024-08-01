require "json"

class ExpenseTracker
  def initialize
    @expenses = load_expenses
  end

  def load_expenses
    if File.exist?("expenses.json")
      file = File.read("expenses.json")
      JSON.parse(file)
    else
      []
    end
  end

  def save_expenses
    File.write("expenses.json",JSON.pretty_generate(@expenses))   
  end

  def add_expense(description, amount)
    @description = description
    @amount = amount
    expense = {"description" => @description, "amount" => @amount}
    @expenses << expense
    save_expenses
    puts "\nExpense record added successfully!!"
  end

  def list_expenses
    @expenses.each_with_index do |expense, index|
      puts "#{index + 1}. #{expense["description"]}: #{expense['amount']}"
    end
  end

  def total_expenses
    total = @expenses.reduce(0) { |sum, expense| sum + expense['amount'] }
    puts "Total expenses: Rs. #{total}"
  end

  def main
    loop do 
      puts "\n\n---Expense Tracker---"
      puts "1. Add an expense"
      puts "2. List all expenses"
      puts "3. Total expenses"
      puts "4. Exit"

      print "\nChoose an option: "
      choice = gets.chomp.to_i

      case choice
      when 1
        print "Enter the expense description: "
        description = gets.chomp
        print "Enter the expense amount: "
        amount = gets.chomp.to_i
        add_expense(description, amount)
      when 2
        puts "\n--List of expenses--"
        list_expenses
      when 3
        total_expenses
      when 4
        break
      else
        puts "Invalid option!! Choose another option!!"
      end
    end
  end
end

tracker = ExpenseTracker.new
tracker.main