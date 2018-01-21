;((global,factory) => {

	typeof exports == 'object' ? module.exports = factory : window.is = factory();
	
})(window != 'undefined' ? window : this, () => {
	let availableTypes = "Number Array Object String Null Undefined Function".split(' '),
		is = {},
		type = function() {
			return Object.prototype.toString.call(this).slice(8,-1);
		};

		is['it'] = (function(){
			return function(element) {
				return type.call(element);
			}
		})();

	availableTypes.map((item,index)=> {
		is[`it${availableTypes[index]}`] = (function(self){
			return function(element) {
				return (type.call(element) === self);
			}
		})(availableTypes[index]);
	});

	return is;
});