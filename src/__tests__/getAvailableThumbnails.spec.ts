import { getAllYoutubeThumbnailURLs, getAvailableThumbnails } from '../index'

describe("Thumbnail is available test", async () => {
    test("it should return available thumbnail", async () => {
        const videoId = "6XBpQvFEfTk"
        const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`
        const actual = await getAvailableThumbnails(youtubeUrl)
        const expected = getAllYoutubeThumbnailURLs(youtubeUrl)
        expect(actual).toEqual(expected)
    });

    test("it should contains unavailable thumbnail", async () => {
        const videoId = "bE8sO0TG9CE" //padi begitu indah doesnt have all resolution types
        const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`
        const actual = await getAvailableThumbnails(youtubeUrl)
        const expected = getAllYoutubeThumbnailURLs(youtubeUrl)
        const result = actual !== expected
        expect(result).toBeTruthy()
    });
});