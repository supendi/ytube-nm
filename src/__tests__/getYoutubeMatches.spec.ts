import { getYoutubeMatches } from '../index'

describe("getYoutubeMatches functions", () => {
    test("it should return matches", () => {
        const urls = [
            "https://www.youtube.com/watch?v=6XBpQvFEfTk",
            "https://youtu.be/Ek0SgwWmF9w",
            "https://www.youtube.com/embed/Ek0SgwWmF9w"
        ]

        for (let index = 0; index < urls.length; index++) {
            const url = urls[index];
            const actual = getYoutubeMatches(url)
            expect(actual !== null).toBeTruthy()
        }
    });

    test("it should return false url", () => {
        const urls = [
            "https://www.youtubes.com/watch?v=6XBpQvFEfTk",
            "https://youtu.beb/Ek0SgwWmF9w",
            "https://www.google.com/embed/Ek0SgwWmF9w",
            "https://www.youporn.com/embed/Ek0SgwWmF9w",
            "https://www.pornhub.com/embed/Ek0SgwWmF9w",
        ]

        for (let index = 0; index < urls.length; index++) {
            const url = urls[index];
            const actual = getYoutubeMatches(url)
            expect(actual === null).toBeTruthy()
        }
    });
});