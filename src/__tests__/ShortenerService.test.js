import * as ShortenerService from '../Services/shortener.service';

it("should create a new shortened link", () => {
    let bool = false;
    ShortenerService.createLink('www.lucastiberio.com.br', (succ => {
        bool = true;
    }), 
    (err) => {
        bool = false;
    })

    expect(bool).toBe(true);
})