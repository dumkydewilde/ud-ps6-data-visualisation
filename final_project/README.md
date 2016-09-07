# Read Me
This is a summary. The full project can be found at: http://dumkydewilde.nl/ud-ps6

## Summary
This project is a dive into the characteristics of people taking out a loan based on the Prosper loan data set, one of the data sets recommended for the Udacity Problem Set 6 assignment.
My focus has been to not just show the numbers, interest rates and credit ratings, but to see if I could add a human side to the data. I've used interactivity and playfulness and
sometimes sacrificed general trends for details to show the characteristics of the people behind the loans.

## Design
I first wanted to make a scatter plot with dots representing all the individuals so you could clearly see that these are all unique people with different jobs, different types of loans,
and different ratings. I quickly realized that although the idea was interesting, plotting 80.000 dots was not going to make a lot of sense. My next step was to focus on the jobs people
have. A job is something people can relate to and understand the differences between people and groups of people. I decided on a bar chart because it well suited to displaying categorical
data. My preference, especially when the user has to read a label, is for horizontal bar charts. This is what I used to make my first version. The interactivity here consisted just of a tooltip
to read out the exact numbers from the data.

After getting the feedback I changed a couple of important things in terms of design.
* I added some more features from the data set to create a stacked bar chart, thereby adding an extra dimension to the chart. I used different colors for the stacking to visualize the different categories.
* I choose to sort the bar chart by number of loans so people could also see in which jobs people take out the most loans.
* I also added some interactivity by allowing the user to choose the type of stacking for the bar chart by selecting a radio button. By selecting a different option, the legend would change and a change in the stacking (and redrawing of the chart) would be animated.
* Finally, because of a suggestion from the feedback I decided to add a second graph to show the relation between the different purposes
  of getting a loan. I know pie charts get a bad rep, especially when showing a lot of different (small) parts. But I do feel that with
  some adjustments they can be justified. In this case I felt that with added interactivity of being able to select what is shown,
  a pie chart would work well because it allows a very direct comparison between the elements of a category. I also decided to turn
  it into a ring chart so it would work better when animating the effect of changing the selection.
* For the ring chart I also chose to 'unselect' the two largest options from the interactive legend. This puts the focus more on the
  things that people can relate to and understand, like 'home improvement', instead of a more vague term like 'debt consolidation' and 'other'.
  People however still have the option to select these elements and see how they relate to the other elements (they are by far the largest).

## Feedback
### Feedback: Joanne (27)
  I asked Joanne a couple of questions on both the concept version and version 1. Questions like: 'What do you notice?', 'What is the takeaway?' 'Are things unclear, or is their anything you don't understand?'
  Joanne's response on the concept was that it was quite unclear. She didn't really took away anything other than that it was just a lot of different points mashed together. When I explained the concept of
  using individuals as points and thereby showing the individual behind a loan she liked that concept, but thought it didn't come through in the visualization. She liked the version 1 better, although her commentary
  was that it was too much of a list and still missed some interaction or understanding of who these people are and what they do. I decided to shorten the list a bit by leaving out the elements with an n < 20.

### Feedback: Hans (70)

  I asked Hans similar questions as Joanne, and he had a look at version 1. His response was that it was interesting to see the differences between which jobs took out the most loans, but he noticed that
  the graph lacked a kind of exploratory part. There wasn't really much to interact with. Although the jobs part was somewhat interesting, he didn't really get the concept of the people and their characteristics
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
