var state = {
    items:[{"name":"apples", "toggle":false},
            {"name":"oranges", "toggle":false},
            {"name":"milk", "toggle":true},
            {"name":"bread", "toggle":false}]
};

var addItem = function(state, item){
    state.items.push({"name":item, "toggle":false});
};

var removeItem = function(state, item){
    for(var i = 0; i<=state.items.length; i++){
        var searchItem = state.items[i];
        if(searchItem.name === item){
            state.items.splice(i, 1);
            return;
        }
    }
};

var renderList = function(state, element){
	var itemsHTML = state.items.map(function(item){
		console.log(item.name + " : " + item.toggle);
		if(item.toggle){
			var itemClass = "shopping-item shopping-item__checked";
		}
		else
			var itemClass = "shopping-item"

		return '<li>\
        <span class="' + itemClass +'">'+item.name+'</span>\
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

var toggleItem = function(state, item){
    for(var searchItem of state.items){
        if(searchItem.name === item){
            if(searchItem.toggle === true)
                searchItem.toggle = false;
            else
                searchItem.toggle = true;
        }
    }
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

$('.shopping-list').on('click','.shopping-item-toggle',(function(event){
	console.log("Here");
	var itemToToggle = $(this).closest("li").find(".shopping-item").text();
	toggleItem(state, itemToToggle);
	renderList(state, $('.shopping-list'));
}));