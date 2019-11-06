/*Manpreet kaur Sidhu 8622571*/

var foodArray = [
    { name: "Oatmeal", type: "Breakfast"},
    { name: "Rice", type: "Lunch"},
    { name: "Chapati", type: "Dinner"}
];
const myFavFood = "Pizza";


const foodlist = function(req, res) {
    res.render('foodlist', {foods: foodArray, title: "Food List"});
};


const favouriteFood = function(req, res) {
    res.render('favourite-food', {foods: myFavFood, title: "My Favorite Food"});
};



module.exports = {foodlist,
                  favouriteFood};