import { getYoutubeThumbnailURL } from '../index'

const imageTypes = [
    "default.jpg",
    "hqdefault.jpg",
    "mqdefault.jpg",
    "sddefault.jpg",
    "maxresdefault.jpg",
    "mqdefault.jpg"
]

describe("Get single thumbnail by resolution type test", () => {
    test("it should return hqdefault thumbnail", () => {
        const videoId = "6XBpQvFEfTk"
        const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`
        const actual = getYoutubeThumbnailURL(youtubeUrl)

        const expected = `https://img.youtube.com/vi/${videoId}/default.jpg`

        expect(actual).toEqual(expected)
    });
});