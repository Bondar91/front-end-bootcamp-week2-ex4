function createData(obj) {
 
    var data = obj;

    return {
    	get: function(k) {
    		return data[k] || null;
    	},
    	set: function(k,v) {
    		if(k && v) {
    			data[k] = v;
    		}
    	}
    };
 
}
 
var data = createData({});
 
data.set("name", "Janek");
data.set("name", "Bolek");
 
console.log( data.get("name") );