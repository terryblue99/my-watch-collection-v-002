# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#

Watch.delete_all

@watch = Watch.create(watch_name: "Zeus Magnum", 
                      watch_maker: "Invicta", 
                      movement: "Swiss Ronda 7003.L Quartz", 
                      band: "Stainless Steel", 
                      model_number: "M-5678", 
                      case_measurement: "50mm", 
                      water_resistance: "200 meters", 
                      complications: "Pointer date, GMT, Stopwatch",
                      date_bought: "2016-10-03", 
                      cost: "199.99", 
                      user_id: 1
                    )
@watch.save
@watch = Watch.create(watch_name: "Aztica", 
                      watch_maker: "Aragon", 
                      movement: "Japanese Miyota Quartz", 
                      band: "Leather Strap", 
                      model_number: "AK7271", 
                      case_measurement: "49mm", 
                      water_resistance: "50 meters", 
                      complications: "Date, Day retrograde, Tachymeter",
                      date_bought: "2017-10-10", 
                      cost: "109.90", 
                      user_id: 2
                    )
@watch.save

@watch = Watch.create(watch_name: "Juggernaut", 
                      watch_maker: "Deep Blue", 
                      movement: "Swiss Ronda 715 Quartz", 
                      band: "Rubber Strap", 
                      model_number: "JGDVRBLK", 
                      case_measurement: "46mm", 
                      water_resistance: "1000 meters", 
                      complications: "Date, Dual time zone, Power reserve",
                      date_bought: "2011-08-04", 
                      cost: "199.26", 
                      user_id: 3
                    )
@watch.save

# Complication.delete_all

# complications = [{complication_name: "Date - Date Window", complication_description: "The window is also referred to as an aperture"},
#          {complication_name: "Date - Big Date", complication_description: "Allows a much larger view of the date"},
#          {complication_name: "Date - Pointer Date", complication_description: "A center hand points to the date along the outside periphery"},
#          {complication_name: "Date - Day-Date", complication_description: "Adds the day of the week to the date"},
#          {complication_name: "Date - Triple Calendar", complication_description: "Date, Day & Month"},
#          {complication_name: "Date - Perpetual Calendar", complication_description: "Date, Day, Month, Year, and Leap Year"},
#          {complication_name: "Chronograph - One Button", complication_description: "Cannot measure interrupted time spans"},
#          {complication_name: "Chronograph - Flyback", complication_description: "When 2nd button pushed while running, counters reset & start from zero"},
#          {complication_name: "Chronograph - Split-Seconds", complication_description: "Has three pushers and two second hands"},
#          {complication_name: "Chronograph - Tachymeter", complication_description: "Measures units per hour, generally miles or kilometers"},
#          {complication_name: "Sub-Dial - 30-Minute Dial", complication_description: "A separate dial measuring up to 30 minutes"},
#          {complication_name: "Sub-Dial - 10 Hour Dial", complication_description: "A separate dial measuring up to 10 hours"},
#          {complication_name: "Sub-Dial - Day of the Week Dial", complication_description: "A separate dial for days of the week"},
#          {complication_name: "Sub-Dial - Perpetual Seconds", complication_description: "A separate dial for the watch's second hand"},
#          {complication_name: "Dual Time Zone - Subsidiary Dial", complication_description: "Around the World"},
#          {complication_name: "Dual Time Zone - Dual Movement", complication_description: "Two separate movements with their own power source"},
#          {complication_name: "Dual Time Zone - Dual Time", complication_description: "Both displays are powered by the same movement"},
#          {complication_name: "Dual Time Zone - GMT", complication_description: "Greenwich Mean Time that displays two or more time zones"},
#          {complication_name: "Dual Time Zone - GMT with Independent Hour Hand", complication_description: "The regular hour hand is set independently of the 24-hour hand"},
#          {complication_name: "Dual Time Zone - GMT with Fixed Hour Hand", complication_description: "Its unique additional hour hand makes one revolution per day"},
#          {complication_name: "Dual Time Zone - World Time Zone", complication_description: "Has a rotating inner bezel with 24-hour display and an outer bezel, listing the major cities in each of the 24 time zones"},
#          {complication_name: "Misc - Day Retrograde", complication_description: "Days displayed in an arc and a hand travels from Sun to Sat, then jumps back to Sun"},
#          {complication_name: "Misc - Retrograde", complication_description: "The hand travels along an arc, and when it gets to the end, it jumps back to the beginning"},
#          {complication_name: "Misc - Retrograde Counter 30 Seconds", complication_description: "The hand travels along a 30 seconds arc, and when it gets to the end, it jumps back to the beginning and restarts"},
#          {complication_name: "Misc - Retrograde Counter 5 Minutes", complication_description: "The hand travels along a 5 Minutes arc, and when it gets to the end, it jumps back to the beginning and restarts"},
#          {complication_name: "Misc - Retrograde Counter 60 Minutes", complication_description: "The hand travels along a 60 Minutes arc"},
#          {complication_name: "Misc - Moon Phase", complication_description: "Shows if it is a full, half, quarter, or new moon"},
#          {complication_name: "Misc - Power Reserve", complication_description: "Measures the amount of power remaining in the watch"},
#          {complication_name: "Misc - Sun & Moon", complication_description: "The sun is shown in daytime hours and the moon in the night time"},
#          {complication_name: "Misc - Stopwatch", complication_description: "Stopwatch"},
#          {complication_name: "Misc - Alarm", complication_description: "The alarm time is set independently of the main time"},
#          {complication_name: "Misc - Tourbillon", complication_description: "Improves the balance of the watch, eliminating timekeeping errors caused by gravity and changing watch positions"},
#          {complication_name: "Misc - Digital", complication_description: "The hours, minutes, and sometimes seconds are indicated by digits, rather than by hands on a dial"},
#          {complication_name: "Multi Function - Day-Date-24HR", complication_description: "Day, Date & 24 Hour Sub-Dials"}]

# complications.each do |complication|
#   Complication.create(complication)
# end

# ComplicationsWatch.delete_all

# @cw1 = ComplicationsWatch.create(watch_id: 1, complication_id: 1, complication_description: "Has three pushers and two second hands")
# @cw2 = ComplicationsWatch.create(watch_id: 2, complication_id: 2, complication_description: "The window is also referred to as an aperture")
# @cw3 = ComplicationsWatch.create(watch_id: 3, complication_id: 3, complication_description: "Greenwich Mean Time that displays two or more time zones")
