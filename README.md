# FA205_Workshop_1

Website link: https://mremily9.github.io/workshop-task-1/


# Overview
- I wanted to create a different type/shape of a star, looking into a 4 pointed star
- I created a new star shape - experimenting with a new 2D shape quad()
- Looking into creating a function star() - which drew the star
- Tested with arcs to help make the star shape
- Tested using the random() for the x and y locations of the star and the scale
- Experimented with using the for loop to make a sky full of stars
- Experimented with changing the cursor using cursor()
- Experimented with frameRate() 

  
# Notes
![image](https://github.com/user-attachments/assets/a03b6b6b-64d2-4129-8b47-ec40592f1ebd)

Comments while following the code on the workshop video. Mostly following some basic coding fundamentals. 




# Problem Solving/Code
**Creating the star**
I started with testing a new 2D primitive shape quad() to create a diamond shape as a base for the star

![image](https://github.com/user-attachments/assets/7452d6d2-5865-4ea0-bb91-aa48ee53cc93)

![image](https://github.com/user-attachments/assets/5b125eac-b776-4044-a470-3a0c7e70369c)

I then looked into creating the star shape by making the arcs/curves in the star with the use of the ellipse() that can cut out the sides. 

![image](https://github.com/user-attachments/assets/5f7a67c9-f321-4d03-9892-1c7a7e03d80e)

![image](https://github.com/user-attachments/assets/0e66e010-494c-4d68-a7ac-41520a42f7dd)

**Problem #1 - shape of star**
However, due to doing this, when I started to animate this to randomly place the stars around the canvas. The stars would overlap each over, cutting out parts of the other stars in a very clear manner. 

![image](https://github.com/user-attachments/assets/030b0a93-5ca2-43d8-aa82-10a1e56155ef)

![image](https://github.com/user-attachments/assets/a6d77012-818d-44dc-bce9-111beab2a51c)

In low amounts, this would work. However, once they become dense, it becomes clear that they overlap each other. 

![image](https://github.com/user-attachments/assets/26c3b12b-3cc4-4195-aac0-dea304ead16a)

This would be due to the ellipses taking up so much space, and so to reduce this look, I went into looking in uses arcs instead of full ellipses. 

![image](https://github.com/user-attachments/assets/45603f2a-d4cf-4f09-a496-728ea4706a42)

![image](https://github.com/user-attachments/assets/b975399e-8a6d-48be-94f5-2e0d75cfc012)

Using this graph to help me aid in the radians for the arcs for where it starts and end. 

![image](https://github.com/user-attachments/assets/7aaecaa8-146b-4d47-a9c6-71f326d32819)

![image](https://github.com/user-attachments/assets/13f6b740-5d5a-498e-be8c-9f9e376efda9)
![image](https://github.com/user-attachments/assets/cb50fa0e-7685-4002-a77b-8735a6c5bdeb)

**Animating the stars**

The stars got animated with a for loop that could call the function that makes a star, with random() at inputs to change the positions and scales of the stars. 

![image](https://github.com/user-attachments/assets/c0ed1210-2cb8-47e7-ada5-2acb30e451c7)
![image](https://github.com/user-attachments/assets/94e57e81-64bf-4781-b0ba-c5d2d149ce28)

And as such with small changes my final experiment was done. Looking into frameRate() and cursor() 

![image](https://github.com/user-attachments/assets/fa16be0b-3f70-4f84-9807-efe2f79eded1)
![image](https://github.com/user-attachments/assets/6cb6c93c-2c64-484c-b632-9ece33f41fbe)


**Final coding comments**
- I found this workshop heavily informative, loops are incredibly useful
- Again p5.js is heavily useful
- Coding went as planned for the animations and such

# Future development 
- Reflecting from the previous workshop, I liked the outcome of this workshop, as it was a concise piece
- For future development of this specific piece, could look into making the stars flash/going out overtime
- To make sure that the stars dont overfill the canvas

