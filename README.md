# Foodie


[Live!](http://foodienyc.herokuapp.com/#/)


* Foodie is single-page application inspired by Yelp.
It is full-stack application that uses
 Ruby on the rails as a backend to store data,
uses JQuery, React, Redux as a frontend framework to interact with user's  preference over Food.


Please feel free to take a look at my website!
![alt text](https://github.com/seoi99/foodie/blob/master/app/assets/images/main.png)

## Feature

### Search
* User can search restaurant by name
![alt text](https://github.com/seoi99/foodie/tree/master/app/assets/images/name.png)

* User can search restaurant by category
![alt text](https://github.com/seoi99/foodie/tree/master/app/assets/images/category.png)


### Google Map API
* User will be enable see marker on the map, and once user click's on marker it will navigate direction.
![alt text](https://github.com/seoi99/foodie/tree/master/app/assets/images/map.png)
![alt text](https://github.com/seoi99/foodie/tree/master/app/assets/images/navigation.png)

``` javascript
handleMarkerClick(business) {
  const url = `https://www.google.com/maps/place/${business.full_address}`;
  window.open(url);
}
```


### CRUD Functionality
``` javascript

```
###
