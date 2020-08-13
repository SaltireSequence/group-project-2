#Dependencies
from bs4 import BeautifulSoup
import requests
from splinter import Browser
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import selenium
import time
import csv

#Start the webdriver and maximize the window 
# (important to avoid ads in clickspace)
#IMPORTANT: if you are using a mac, this section will not work. Find code that 
#does BOTH of these things.
driver=webdriver.Chrome('chromedriver.exe')
url = "https://www.simplyrecipes.com/index/"
driver.get(url) 
driver.maximize_window()

#Set up BeautifulSoup to retrieve info for scraping
response=requests.get(url)
soup=BeautifulSoup(response.text,'html.parser')

#Use soup to get list of strings corresponding to the links we will visit
#while scraping

linklist=[]
links=soup.find_all('a')
for link in links:
    linklist.append(link)
linklist_text=[]
for i in range(164,1068): #These are the only strings we need
    linklist_text.append(linklist[i].text)

#####################
#SCRAPING STARTS HERE
#####################

#Start a temp list to log all recipes
recipe_list=[]

#systematically visit the links corresponding every item in our list
#IMPORTANT: change first line to read 
# "for link in linklist_text[start_index, stop_index]" to start scraping somewhere
#in the middle of the link list.

#To split the work among two people evenly (me and you), change this line to say:
# "for link in linklist_text[616 :]: "
# and I will complete the remainder

#To split the work among three people evenly (me and two others) 
# change this line to say:
# "for link in linklist_text[411 822]: " (other person 1)
# and:
#"for link in linklist_text[822 :]: " (other person 2)
#and I will complete the remainder

for link in linklist_text[924 :]: # <- this is the line you could change
    time.sleep(0.3)
    target=driver.find_element_by_partial_link_text(link)
    target.click()
    time.sleep(0.1)
    cards = driver.find_elements_by_class_name("grd-title-link")
#Try to loop through every recipie on the first page of results and collect data
    for i in range(0,len(cards)):
        try:
            newcards = driver.find_elements_by_class_name("grd-title-link")
            time.sleep(0.3)
            newcards[i].click()
            time.sleep(0.3)
            recipe=driver.find_element_by_id("sr-recipe-callout")
            recipe_list.append(recipe.text)
            driver.back()
            time.sleep(0.3)
        except:
            continue
#If there is a "next" button, try to click it
    nxt=driver.find_elements_by_class_name("rpg-next")
    if len(nxt) > 0:
        pages=driver.find_elements_by_class_name("rpg-page-numbers")
        textpages=pages[-2].text
        lastpage=int(textpages)
        for i in range(1,lastpage):
            nxt2=driver.find_elements_by_class_name("rpg-next")
            time.sleep(0.3)
            try:
                nxt2[0].click()
                cards2 = driver.find_elements_by_class_name("grd-title-link")
#Try to repeat the process of collecting every recipe on the new page
                for i in range(0,len(cards2)):
                    try:
                        newcards2 = driver.find_elements_by_class_name("grd-title-link")
                        time.sleep(0.3)
                        newcards2[i].click()
                        time.sleep(0.3)
                        recipe=driver.find_element_by_id("sr-recipe-callout")
                        recipe_list.append(recipe.text)
                        driver.back()
                        time.sleep(0.3)
                    except:
                        continue
            except:
                continue
#Append the temporary recipe list to an external file, then clear the temp list
#for the next loop
    with open ("heesung_recipe_list.txt", "a") as fout:
        for recipe_text in recipe_list:
            fout.write("%s\n" % recipe_text.encode("utf-8"))
    recipe_list=[]
            
#return to the original page to prepare for the next cycle
    driver.get(url)