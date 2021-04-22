import { getYoutubeVideoId } from '../index'
describe("Get video id function", () => {
    test("it should return youtube id", () => {
        const urls = [
            "https://www.youtube.com/watch?v=6XBpQvFEfTk",
            "https://youtu.be/6XBpQvFEfTk",
            "https://www.youtube.com/embed/6XBpQvFEfTk"
        ]
        for (let index = 0; index < urls.length; index++) {
            const url = urls[index];
            const expectedVideoId = "6XBpQvFEfTk"
            const actualVideoId = getYoutubeVideoId(url)
            expect(actualVideoId).toEqual(expectedVideoId) 
        } 
    });
});