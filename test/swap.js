
describe('Swap', function(){
	describe ('#detectOS', function() {
		it('should return 32 if OS is not Win64-bit', function(){
			var x = Swap.detectOS();
			assert(x == "32");
		})

	})

	describe ('setValue', function() {
		it('should return "value64" if os === 64', function(){
			Swap.os = "64";
			Swap.setValue("value32", "value64" );
		})
	})

	describe ('swapValue', function() {
		it('should overwrite the default value with an appropriate new value', function() {
			Swap.swapValue ('target', 'href', 'link');
			var x = document.getElementById('target').getAttribute('href');
			assert(x == 'link')
		})

	})
})