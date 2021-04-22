import { getAllYoutubeThumbnailURLs } from '../index'

describe("Thumbnail urls test", () => {
    test("it should return thumbnails urls", () => {
        const videoId = "6XBpQvFEfTk"
        const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`
        const actual = getAllYoutubeThumbnailURLs(youtubeUrl)
        const imageTypes = [
            "hqdefault.jpg",
            "mqdefault.jpg",
            "sddefault.jpg",
            "maxresdefault.jpg",
            "mqdefault.jpg"
        ]
        const expected = []
        for (let index = 0; index < imageTypes.length; index++) {
            const imageType = imageTypes[index];
            expected.push(`https://img.youtube.com/vi/${videoId}/${imageType}`)
        }
        expect(actual).toEqual(expected)
    });

    test("it should return thumbnails urls", () => {
        const videoId = "6XBpQvFEfTk"
        const youtubeUrl = `https://www.youtubesss.com/watch?v=${videoId}`
        const actual = getAllYoutubeThumbnailURLs(youtubeUrl)
        const expected = null
        expect(actual).toEqual(expected)
    });
});