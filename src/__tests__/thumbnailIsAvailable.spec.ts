import { thumbnailIsAvailable, getAllYoutubeThumbnailURLs } from '../index'

describe("Thumbnail is available test", () => {
    test("it should return available thumbnail", async () => {
        const videoId = "6XBpQvFEfTk"
        const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`
        const urls = getAllYoutubeThumbnailURLs(youtubeUrl)
        const expected = true
        for (let index = 0; index < urls.length; index++) {
            const url = urls[index];
            const actual = await thumbnailIsAvailable(url)
            expect(actual).toEqual(expected)
        }

    });

    test("it should return null", () => {

    });
});