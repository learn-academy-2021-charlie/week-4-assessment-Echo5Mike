# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.
# 
# # so I was having a very difficut time swicthing my mind from JS to ruby
def find_o (array)
    (array).select do |value|
        value.include?'o'
    end
end
# # I had to look up an example, for some reason I was thinging that it was going to be super easy to create the 
beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
# letter_o = 'o'
# Expected output: ['coffee', 'soda water']
p find_o (beverages_array)




def find_t (array)
    (array).select do |value|
        value.include?'t'
    end
end
letter_t = 't'
p find_t (beverages_array)
# # Expected output: ['tea', 'water', 'soda water']




# /////////////////////////////////////////////////////////////////////////////////////////


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete
# I will start by creating a def that will return album first.
# maybe use the .selct and bang out the vowels
# if I can't make any progress in 22 mintues, wacth video and google.
album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def aeiou (string)
    string.delete "aeiou" "AIEOU"# 'a' 'e' 'i' 'o' 'u' # I ended having to look up the website and I had to play around if I needed comma's, but then I looked up more examples on the site and found that you can just pass in a .delete string of vowels
end
# I removed .downcase and just added the vowles in upper case to make sure that I got the expected output.
p aeiou (album1)
p aeiou (album2)
p aeiou (album3)

#/////////////////////////////////////////////////////////////////////////////////
# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.
# I had to wacth the lecture since I missed that portion of the class.  
class Bike 
    def set_info model, wheels, current_speed
        @model = model
        @wheels = wheels
        @current_speed = current_speed
    end
    def get_info
        "The #{@model} bike has #{@wheels} wheels, and a speed of #{@current_speed} MPH"        
    end
end

bike1 = Bike.new 
bike1.set_info 'Trek', 2, 0
p bike1.get_info
#p bike1 # I don't know why I p gets me <Bike:0x00007faf210f3368 @model="HURTLEY", @wheels=2, @current_speed=0>
#puts bike1## and puts gets me <Bike:0x00007f930e89b478>


#, wheels, current_speed
    # def bike_info
    #     "Your bike is #{@model} it has #{@wheels} wheels, and a speed of #{@current_speed}."
    # end
# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

#this one is becoming difficult, 
class Bike 
    attr_accessor :model, :wheels, :current_speed
    def set_info model, wheels, current_speed
        @model = model
        @wheels = wheels
        @current_speed = current_speed
    end
    def get_info
        "The #{@model} bike has #{@wheels} wheels, and a speed of #{@current_speed} MPH"        
    end
    # def faster 
    #     @speed = @current_speed + 15
    # end    
    def pedal_faster 
        if @current_speed >= 0
            @current_speed += 10
        end    
    end    
    # def brake
    #     if @current_speed >=0
    #         @current_speed -= 15
    #     elsif @current_speed <= 0
    #         @current_speed = 0
    #     end
    # end
    def brake # I left the top portion of my because it was working, to slow the bike down, however it was going negative speeds. Then I decided to check first to make sure that the bike was first at or below zero if not then keep braking.
        if @current_speed <= 0
            @current_speed = 0
        elsif @current_speed >=0
            @current_speed -= 15
        end
    end
end
bike1 = Bike.new
bike1.set_info 'Trek', 2, 0
p bike1
p bike1.pedal_faster
p bike1
p bike1.pedal_faster
p bike1
p bike1.pedal_faster
p bike1
p bike1.brake
p bike1
p bike1.brake
p bike1
p bike1.brake
p bike1
# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
