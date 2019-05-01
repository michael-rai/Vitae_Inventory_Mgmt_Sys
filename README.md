![Imgur](https://i.imgur.com/p9jeHwf.png)
# Vitae Inventory Management System

This is a demo version of the Inventory Management System for Vitae Industries. This
single page web application allows for a user to keep track of their pharmacy inventory and when a product is at a threshold of 10% to depletion, it connects to an API system to reorder supplies.

More information on Vitae Industries and The AutoCompounder can be found at https://www.vitaeindustries.com/


### Planning:
![Imgur](https://i.imgur.com/Mjdbsq3m.jpg)

The concept is for a user to login and see all available items in stock. The system is actively monitoring quantity (set at 1000) and when supplies fall to the set threshold of 10% (100) an api call is made to another system to initate the reordering of supplies.

Each pill (supply) is highlighted in a card that gives information on it including:
- Item Name
- Description
- SKU #
- Current Quantity

The Navigation Bar has a link item to Reports and Help
- Reports will allow to see Current Invoice and Purchase History
- Help will be a contact page that will expand for either a send message functionality or a chat feature.

### Technologies
- HMTL
- CSS
- JavaScript
- jQuery

### Deployment:
This demo version of the app is hosted via Heroku.

### Future Iterations:
