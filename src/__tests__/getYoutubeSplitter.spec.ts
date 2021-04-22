import { getYoutubeSplitter } from '../index'

const normalSignature = "/watch?v="
const embedSignature = "/embed/"
const shortenedSignature = "youtu.be/"

describe("Get youtube string splitter", () => {
    test("it should returns short splitter", () => {
        const url = "https://youtu.be/Ek0SgwWmF9w"
        const expected = shortenedSignature
        const actual = getYoutubeSplitter(url)
        expect(actual).toEqual(expected)
    });

    test("it should returns normal  splitter", () => {
        const url = "https://www.youtube.com/watch?v=oOypKTeWDMI"
        const expected = normalSignature
        const actual = getYoutubeSplitter(url)
        expect(actual).toEqual(expected)
    });

    test("it should returns embed splitter", () => {
        const url = "https://www.youtube.com/embed/Ek0SgwWmF9w"
        const expected = embedSignature
        const actual = getYoutubeSplitter(url)
        expect(actual).toEqual(expected)
    });

    test("it should returns null", () => {
        const url = "https://www.cinta.com/embed/Ek0SgwWmF9w"
        const expected = null
        const actual = getYoutubeSplitter(url)
        expect(actual).toEqual(expected)
    });
});