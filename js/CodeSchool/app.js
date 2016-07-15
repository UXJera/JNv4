(function() {
var app = angular.module('store',[]);
	app.controller('StoreController',function(){
		this.products = gems;
})
var gems = [

	{
		name:'Dodecahedron',
		price: 2.95,
		description: 'This is a lovely gem',
		canPurchase: false,
		soldOut:false,
	},
	
	{
		name:'Pentagonal Gem',
		price: 5.95,
		description: 'Five sides of glory',
		canPurchase: true,
		soldOut:false,
	},
	
	{
		name:'Magician Stone',
		price: 3.95,
		description: 'Anything is possible with this gem',
		canPurchase: true,
		soldOut:false,
	}
];
})();