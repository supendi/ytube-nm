import { isYtEmbedURL } from '../index'

describe("Is embed youtube url", () => {
    test("it should return true embed youtube url", () => {
        const urls = [
            "https://www.youtube.com/embed/Ek0SgwWmF9w",
            "https://www.youtube.com/embed/Pgum6OT_VH8",
            "https://www.youtube.com/embed/qhduQhDqtb4",
        ]

        for (let index = 0; index < urls.length; index++) {
            const url = urls[index];
            const expected = true
            const actual = isYtEmbedURL(url)
            expect(actual).toEqual(expected)
        }
    });

    test("it should return false embed youtube url", () => {
        const urls = [
            "https://youtu.be/Ek0SgwWmF9w",
            "https://www.youtube.com/watch?v=qhduQhDqtb4",
            "https://www.youtube.com/watch?v=Ek0SgwWmF9w"
        ]

        for (let index = 0; index < urls.length; index++) {
            const url = urls[index];
            const expected = false
            const actual = isYtEmbedURL(url)
            expect(actual).toEqual(expected)
        }
    });

});