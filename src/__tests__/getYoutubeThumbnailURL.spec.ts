import { getYoutubeThumbnailURL, RES_TYPE } from '../index'
 
const resTypes = [
    "default",
    "hqdefault",
    "mqdefault",
    "sddefault",
    "maxresdefault"
]

describe("Get single thumbnail by resolution type test", () => {
    test("it should return hqdefault thumbnail", () => {
        const videoId = "6XBpQvFEfTk"
        const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`

        for (let index = 0; index < resTypes.length; index++) {
            const resType = resTypes[index] as RES_TYPE;
            const actual = getYoutubeThumbnailURL(youtubeUrl, resType)
            const expected = `https://img.youtube.com/vi/${videoId}/${resType.toString() + ".jpg"}`
            expect(actual).toEqual(expected)
        }

    });
});