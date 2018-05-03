# yahoo-fantasy-data-dashboard

## Description

My friends and I played fantasy sports using [Yahoo Fantasy Basketball](https://basketball.fantasysports.yahoo.com/). If you aren't familiar with how it is played, you draft a team from NBA's roster and while there are different formats to playing the game, we chose a 9 category head to head format. This means for a whole week your team completes with one other team for an entire week. Your goal for the week is to win as many as the 9 categories as possible namely:

1. Points 
2. Rebounds
3. Field Goal %
4. Free Throw %
5. Steals
6. Turnovers
7. Three Pointers Made
8. Assists
9. Blocks


Whoever wins the most categories by the end of Sunday night attains a win for that week. Ties are possible and has happened.

## Problem 

In order to get the edge over all of your opponents, it would be great to know how your stats for the 9 categories fares against everyone else's stats to be wary of future match ups. Yahoo has a feature that does just that, however it falls short. That feature gives you the grand total of all of your stats and all of your weeks combined. What if you only wanted to know how your stats fared against another opponent for a certain week? Say on weeks 9-12 you did great in rebounds and blocks but you sacrificed Free Throw %, Points, and Three Pointers Made? Let's also say that in week 13 you will be facing an opponent that is not only extremely strong in the stat categories where you are weak in but is also strong in the stat categories you are neutral in? That would mean you suffer a high probability of losing week 13. 

So, achieving that granularity of getting stat information on a week by week basis would help facilitate asking the right questions so one can plan in advance to change up their roster. And displaying such information with data visualizations is what this dashboard aims to do.

