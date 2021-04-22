import { isYtNormalURL } from '../index'
describe("Is normal youtube url", () => {
    test("it should return true normal youtube url", () => {
        const urls = [
            "https://www.youtube.com/watch?v=6XBpQvFEfTk",
            "https://www.youtube.com/watch?v=Pgum6OT_VH8",
            "https://www.youtube.com/watch?v=qhduQhDqtb4"
        ]

        for (let index = 0; index < urls.length; index++) {
            const url = urls[index];
            const expected = true
            const actual = isYtNormalURL(url)
            expect(actual).toEqual(expected)
        }
    });

    test("it should return false normal youtube url", () => {
        const urls = [
            "https://youtu.be/Ek0SgwWmF9w",
            "https://www.youtube.com/embed/Ek0SgwWmF9w",
            "https://www.youtybe.com/embed/Ek0SgwWmF9w",
        ]

        for (let index = 0; index < urls.length; index++) {
            const url = urls[index];
            const expected = false
            const actual = isYtNormalURL(url)
            expect(actual).toEqual(expected)
        }
    });

});