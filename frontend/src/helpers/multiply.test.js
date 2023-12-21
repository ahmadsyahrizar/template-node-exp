import multiply from './multiplication';


describe('Multiplication Helpers', ()=> {
	test('should return correct results', ()=> {
		const result = multiply(5, 10);
    
		expect(result).toBe(50);
	});
    
    
	test('should be larger than first parameters', () => {
		const result = multiply(2, 5);
    
		expect(result).toBeGreaterThan(2);
	});
});

