(function(exports) {
	function retrieveObjectData(object) {
		console.log('function is called');
		if (localStorage.storedObject !== undefined) {
			var storedData = JSON.parse(localStorage.storedObject);
			for (var data in storedData) {
				object[data] = storedData[data];
			}
		}
	};

	function storeObjectData(object) {
		localStorage.storedObject = JSON.stringify(object);
	}

	exports.retrieveObjectData = retrieveObjectData;
	exports.storeObjectData = storeObjectData;

})(this);
