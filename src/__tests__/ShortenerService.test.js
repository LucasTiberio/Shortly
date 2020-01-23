import * as ShortenerService from "../Services/shortener.service";

describe("Shortener services", () => {
	it("should create a new shortened link", async () => {
		let bool = false;
		let response = await ShortenerService.createLink(
			"http://www.google.com"
		);
		bool = response.ans;

		expect(bool).toBe(true);
	});

	it("should be error if link doesnt exists", async () => {
		let bool = false;
		let response = await ShortenerService.createLink("www.google.com");
		bool = response.ans;

		expect(bool).toBe(false);
	});

	//kXaBrn
	it("should be equal to www.lucastiberio.com.br website", async () => {
		let response = await ShortenerService.getOrigin("kXaBrn");
		expect("http://www.lucastiberio.com.br").toBe(response.data.url);
	});

	it("should be error when hashId doesnt exists", async () => {
		let response = await ShortenerService.getOrigin("asdmasdjkasldjoiasd");
		expect(response.ans).toBe(false);
	});
});
