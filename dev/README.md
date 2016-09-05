# Read Me
This is a summary. The full project can be found at: http://dumkydewilde.nl/ud-ps6

## Summary
This project is a dive into the characteristics of people taking out a loan based on the Prosper loan data set, one of the data sets recommended for the Udacity Problem Set 6 assignment.
My focus has been to not just show the numbers, interest rates and credit ratings, but to see if I could add a human side to the data. I've used interactivity and playfulness and
sometimes sacrificed general trends for details to show the characteristics of the people behind the loans.

## Design
I started out wanting to plot every individual, but quickly realised that was going to be confusing and messy. I then focussed on the jobs people had, but missed some interactivity and
basically just got a long list. I then decided to focus on allowing people to kind of play with the different characteristics and see for themselves the diversity and variety in the data set.
I deliberately let out large parts from the data set consisting of general terms like 'Other' or 'Professional'.

## Feedback
### Feedback: Joanne (27)
  I asked Joanne a couple of questions on both the concept version and version 1. Questions like: 'What do you notice?', 'What is the takeaway?' 'Are things unclear, or is their anything you don't understand?'
  Joanne's response on the concept was that it was quite unclear. She didn't really took away anything other than that it was just a lot of different points mashed together. When I explained the concept of
  using individuals as points and thereby showing the individual behind a loan she liked that concept, but thought it didn't come through in the visualisation. She liked the version 1 better, although her commentary
  was that it was too much of a list and still missed some interaction or understanding of who these people are and what they do. I decided to shorten the list a bit by leaving out the elements with an n < 20.

### Feedback: Hans (70)

  I asked Hans similar questions as Joanne, and he had a look at version 1. His response was that it was interesting to see the differences between which jobs took out the most loans, but he noticed that
  the graph lacked a kind of exploratory part. There wasn't really much to interact with. Althought the jobs part was somewhat interesting, he didn't really get the concept of the people and their characteristics
  behind the loans.

### Feedback: Sophie (27)

  Sophie had similar responses to Joanne and Hans, but there was one thing she noticed that I thought was interesting. When we talked about the data set she mentioned that she thought it interesting that you could
  find out what people had used their loan for. She thought it was interesting to dive in even deeper and see things like: 'How many people with this kind of job took out a loan for a wedding ring?' Her comments
  inspired me to also look more into the purpose of the loan as it showed the 'human' side of the data set. I decided to use a pie (ring) chart to show how different purposes relate to each other and allow users
  to play around with that so they can see how many more loans for wedding rings than loans for home improvement are taken out for example.


## RESOURCES
- The selection from the legend was inspired by this jsfiddle: http://jsfiddle.net/farrukhsubhani/S6FLv/7/
- I've used the Dimple.js example as a basis for the horizontal stacked bars: http://dimplejs.org/examples_viewer.html?id=bars_horizontal_stacked
- and their ring chart example for the ring chart: http://dimplejs.org/examples_viewer.html?id=ring_standard
