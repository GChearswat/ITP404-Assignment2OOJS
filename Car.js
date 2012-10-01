// application namespace
var Car = {};

Car = function (options) {
	this.make = options.make;
	this.model = options.model;
	this.year = options.year;
	this.$el = $(options.el);
	this.init();
};

Car.prototype = {
	init: function() {
		var that = this;

		this.$el.on('click', '.favorite', function(e) {
			// in this callback function, this refers to the a.favorite element that was clicked
			that.favorite();
			e.preventDefault();
		});

		this.$el.on('click', '.DisplayName', function(e) {
			// in this callback function, this refers to the a.favorite element that was clicked
			that.DisplayName();
			e.preventDefault();
		});
		this.$el.on('click', '.LogYear', function(e) {
			// in this callback function, this refers to the a.favorite element that was clicked
			that.LogYear();
			e.preventDefault();
		});
	},

	DisplayName: function(){
		alert('My name is ' + this.model);
	},

	LogYear: function(){
		console.log('My year is ' + this.year);
	},

	favorite: function() {
		this.$el.find('.favorite').replaceWith('<span>Favorited!</span>');
		console.log(this.model + ' favorited');
	}

}
