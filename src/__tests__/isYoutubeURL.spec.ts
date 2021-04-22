import { isYoutubeURL } from '../index'
describe("Is youtube url", () => {
    //https://youtu.be/Ek0SgwWmF9w
    test("it should return true youtube url", () => {
        const urls = [
            "https://www.youtube.com/watch?v=6XBpQvFEfTk",
            "https://youtu.be/Ek0SgwWmF9w",
            "https://www.youtube.com/embed/Ek0SgwWmF9w"
        ]

        for (let index = 0; index < urls.length; index++) {
            const url = urls[index];
            const expected = true
            const actual = isYoutubeURL(url)
            expect(actual).toEqual(expected)
        }
    });

    test("it should return false youtube url", () => {
        const urls = [
            "https://www.google.com/watch?v=6XBpQvFEfTk",
            "https://porntube.be/Ek0SgwWmF9w",
            "https://www.youporn.com/embed/Ek0SgwWmF9w",
            "https://www.youtybe.com/embed/Ek0SgwWmF9w",
        ]

        for (let index = 0; index < urls.length; index++) {
            const url = urls[index];
            const expected = false
            const actual = isYoutubeURL(url)
            expect(actual).toEqual(expected)
        }
    });

});