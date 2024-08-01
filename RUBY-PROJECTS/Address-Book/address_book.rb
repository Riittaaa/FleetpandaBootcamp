require 'json'

class Contact
  attr_accessor :name, :phone, :address, :email

  def initialize(name, phone, address, email)
    @name = name
    @phone = phone
    @address = address
    @email = email
  end

  def to_hash
    {"name" => @name, "phone" => @phone, "address" => @address, "email" => @email}
  end

  def self.from_hash(hash)
    new(hash["name"], hash["phone"], hash["address"], hash["email"])
  end

  def display
    puts "Name: #{@name}, Phone Number: #{@phone}, Address: #{@address}, Email: #{@email}"
  end
end

class AddressBook
  FILE_PATH = 'address_book.json'

  def initialize
    @contacts = load_contacts
  end

  def add_contact(contact)
    @contacts << contact
    save_contacts

    puts "Contact added successfully!!!\n"
  end

  def remove_contact(name)
    @contacts.delete_if { |contact| contact.name == name }
    save_contacts

    puts "Contact removed successfully!!!\n"

  end

  def update_contact(name, updated_contact)
    contact = @contacts.find { |c| c.name == name }
    if contact
      contact.name = updated_contact.name unless updated_contact.name.nil?
      contact.phone = updated_contact.phone unless updated_contact.phone.nil?
      contact.email = updated_contact.email unless updated_contact.email.nil?
      contact.address = updated_contact.address unless updated_contact.address.nil?
      save_contacts

    puts "Contact updated successfully!!!\n"

    end
  end

  def display_contacts
    @contacts.each(&:display)
  end

  def search_contacts(name)
    contact = @contacts.find { |c| c.name.downcase == name.downcase }
    contact.display if contact
  end

  private

  def save_contacts
    File.open(FILE_PATH, 'w') do |file|
      file.write(JSON.pretty_generate(@contacts.map(&:to_hash)))   # &:to_hash ->|contact| contact.to_hash }
    end
  end

  def load_contacts
    if File.exist?(FILE_PATH)
      JSON.parse(File.read(FILE_PATH)).map { |contact| Contact.from_hash(contact) }
    else
      []
    end
  end
end

def main
  address_book = AddressBook.new

  loop do
    puts "\nAddress Book"
    puts "1. Add a contact"
    puts "2. Delete a contact"
    puts "3. Display all contacts"
    puts "4. Update a contact"
    puts "5. Search a contact"
    puts "6. Exit"
    print "\nEnter your choice: "

    choice = gets.chomp.to_i

    case choice
    when 1
      print "Enter the name: "
      name = gets.chomp
      print "Enter phone number: "
      phone = gets.chomp
      print "Enter the address: "
      address = gets.chomp
      print "Enter the email: "
      email = gets.chomp

      contact = Contact.new(name, phone, address, email)
      address_book.add_contact(contact)
    when 2
      print "Enter the name of the contact to be removed: "
      name = gets.chomp

      address_book.remove_contact(name)
    when 3
      address_book.display_contacts
    when 4
      print "Enter the name of the contact to be updated: "
      name = gets.chomp
      print "Enter new phone (leave blank to keep current): "
      phone = gets.chomp
      print "Enter new address (leave blank to keep current): "
      address = gets.chomp
      print "Enter new email (leave blank to keep current): "
      email = gets.chomp

      updated_contact = Contact.new(name, phone.empty? ? nil : phone, address.empty? ? nil : address, email.empty? ? nil : email)
      address_book.update_contact(name, updated_contact)
    when 5
      print "Enter the name to search: "
      name = gets.chomp

      address_book.search_contacts(name)
    when 6
      break
    else
      puts "Invalid option! Try again!!"
    end
  end
end

main