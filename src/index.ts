const normalSignature = "/watch?v="
const embedSignature = "/embed/"
const shortenedSignature = "youtu.be/"

/**
 * Returns the youtube regex matches
 * @param youtubeURL the youtube urls
 * @returns 
 */
const getYoutubeMatches = (youtubeURL: string): RegExpMatchArray => {
    const matches = youtubeURL.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/)
    return matches
}

/**
 * Determines url is a valid youtube url
 * @param youtubeURL the youtube urls
 * @returns 
 */
const isYoutubeURL = (youtubeURL: string): boolean => {
    const matches = getYoutubeMatches(youtubeURL)
    if (!matches) {
        return false
    }
    return true
}

/**
 * Determines if url is a normal youtube url
 * @param youtubeURL the youtube urls
 * @returns 
 */
const isYtNormalURL = (youtubeURL: string): boolean => {
    const isYoutube = isYoutubeURL(youtubeURL)
    if (!isYoutube) {
        return false
    }
    return getYoutubeMatches(youtubeURL).includes(normalSignature)
}

/**
 * Determines if url is an embed youtube url
 * @param youtubeURL the youtube urls
 * @returns 
 */
const isYtEmbedURL = (youtubeURL: string): boolean => {
    const isYoutube = isYoutubeURL(youtubeURL)
    if (!isYoutube) {
        return false
    }
    return getYoutubeMatches(youtubeURL).includes(embedSignature)
}

/**
 * Determines if url is an shortened youtube url
 * @param youtubeURL the youtube urls
 * @returns 
 */
const isYtShortenedURL = (youtubeURL: string): boolean => {
    const isYoutube = isYoutubeURL(youtubeURL)
    if (!isYoutube) {
        return false
    }
    return getYoutubeMatches(youtubeURL).includes("youtu.be")
}

/**
 * Returns the string splitter for of youtube url. it will be used by the youtube id getter
 * @param youtubeURL the youtube url
 * @returns 
 */
const getYoutubeSplitter = (youtubeURL: string): string | null => {
    if (isYtNormalURL(youtubeURL))
        return normalSignature
    if (isYtEmbedURL(youtubeURL))
        return embedSignature
    if (isYtShortenedURL(youtubeURL))
        return shortenedSignature
    return null
}

/**
 * Gets the video id from youtube URL
 * @param youtubeURL the youtube url
 * @returns 
 */
const getYoutubeVideoId = (youtubeURL: string): string | null => {
    const isYoutube = isYoutubeURL(youtubeURL)
    if (!isYoutube) {
        return null
    }

    let splitter = getYoutubeSplitter(youtubeURL)
    if (!splitter) {
        return null
    }

    const splittedStr = youtubeURL.split(splitter)
    if (splittedStr && splittedStr.length > 1) {
        const videoId = splittedStr[1]
        return videoId
    }
    console.error("Youtube video id is not found.")
    return null
}

/**
 * Returns the url of youtube thumbnail
 * @param youtubeURL the youtube url
 * @param thumbnailType the resolution options
 * @returns 
 */
const getYoutubeThumbnailURL = (youtubeURL: string, thumbnailType: "default" | "hq" | "mq" | "sd" | "max" = "default"): string => {
    const arr = youtubeURL.split("=")
    if (arr && arr.length > 1) {
        const videoId = arr[1]
        let urlTemplate = `https://img.youtube.com/vi/${videoId}/`
        if (thumbnailType === "default") {
            return urlTemplate + "default.jpg"
        }
        let imageType = ""
        switch (thumbnailType) {
            case "hq":
                imageType = "hqdefault.jpg"
                break;
            case "mq":
                imageType = "mqdefault.jpg"
                break;
            case "sd":
                imageType = "sddefault.jpg"
                break;
            case "max":
                imageType = "maxresdefault.jpg"
                break;
            default:
                imageType = "mqdefault.jpg"
                break;
        }

        return urlTemplate + imageType
    }
    return ""
}

const thumbnailIsNotFound = async (thumbailURL: string) => {
    return !(await fetch(thumbailURL)).ok
}

export {
    getYoutubeVideoId,
    getYoutubeThumbnailURL,
    thumbnailIsNotFound,
    isYoutubeURL,
    getYoutubeMatches,
    isYtNormalURL,
    isYtEmbedURL,
    isYtShortenedURL,
    getYoutubeSplitter
}