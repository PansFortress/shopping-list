var state = {
	items:["apples", "oranges", "milk", "bread"]
};

var addItem = function(state, item){
    state.items.push(item);
};

var removeItem = function(state, item){
	var index = state.items.indexOf(item);
	console.log(item + " : index: " + index);
	if(index >-1){
		state.items.splice(index, 1);
	};
};

var renderList = function(state, element){
	var itemsHTML = state.items.map(function(item){
		return '<li>\
        <span class="shopping-item">'+item+'</span>\
        <div class="shopping-item-controls">\
          <button class="shopping-item-toggle">\
            <span class="button-label">check</span>\
          </button>\
          <button class="shopping-item-delete">\
            <span class="button-label">delete</span>\
          </button>\
        </div>\
      </li>'
	});
	element.html(itemsHTML);	
};

$('#js-shopping-list-form').submit(function(event){
	event.preventDefault();
	var userInput = $('#shopping-list-entry').val();
	console.log(userInput);
	addItem(state, userInput);
	renderList(state, $('.shopping-list'));
});

$('.shopping-list').on('click','.shopping-item-delete',(function(event){
	//This will return a collection of items and will return
    //all of the .shopping-item spans
    var shoppingItem = $(this).closest("li").find(".shopping-item").text();
    removeItem(state, shoppingItem);
	renderList(state, $('.shopping-list'));
}));

$('.shopping-list').on('click','shopping-item-toggle',(function(event){

}));