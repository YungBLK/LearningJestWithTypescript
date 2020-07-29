let bestFlavor = (productName:string) =>{
    if(productName == 'Monster')
        return 'Manga';
    return '';
}


test('The best flavor is Manga', () => {
    expect(bestFlavor('Monster')).toBe('Manga');
})

