const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ];
  
  describe('The shopping list has beer on it', ()=>{
      it('Should return true, for the "beer" string on shoppingList', () =>{
        expect(shoppingList).toContain('beer');
      });
      expect(new Set(shoppingList)).toContain('beer');
  })