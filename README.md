![Imgur](https://i.imgur.com/p9jeHwf.png)
# Vitae Inventory Management System
![Build Status](https://img.shields.io/badge/Build-In--Development-yellow.svg)

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
- Help will be a contact page that will expand for either a send message functionality of FAQs page or a chat feature depending on available resources.

### Technologies
- HMTL
- CSS
- JavaScript
- jQuery
- Grunt
- Webpack
- Bootstrap

### Deployment:
Not deployed at this stage, can be run locally using the following command `grunt serve`

### Future Iterations:
This is a visualization of what this program could look like. Actual production model will be rendered in React.js and Node.js (in back end). Log in functionality will be established. With an actual api call to place an order.


Attached to this repository is a kanban-style project board that will be constantly updated to display progress which can be located here: https://github.com/michael-rai/Vitae_Inventory_Mgmt_Sys/projects/1

This concept was developed by Michael Rai (Providence, RI)
