const normalSignature = "/watch?v="
const embedSignature = "/embed/"
const shortenedSignature = "youtu.be/"
export type RESOLUTION_TYPE = "default" | "hqdefault" | "mqdefault" | "sddefault" | "maxresdefault"

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
 * Returns the urls of youtube thumbnail
 * @param youtubeURL the youtube url
 * @param thumbnailType the resolution options
 * @returns 
 */
const getAllYoutubeThumbnailURLs = (youtubeURL: string): string[] => {
    const urls: string[] = []
    const videoId = getYoutubeVideoId(youtubeURL)
    if (!videoId) {
        return null
    }

    const imageTypes = [
        "default.jpg",
        "hqdefault.jpg",
        "mqdefault.jpg",
        "sddefault.jpg",
        "maxresdefault.jpg"
    ]

    let urlTemplate = `https://img.youtube.com/vi/${videoId}/`

    for (let index = 0; index < imageTypes.length; index++) {
        const imageType = imageTypes[index];
        urls.push(urlTemplate + imageType)
    }
    return urls;
}

/**
 * Returns the url of youtube thumbnail by specified resolution type
 * @param youtubeURL the youtube url
 * @param resolutionType the resolution options
 * @returns 
 */
const getYoutubeThumbnailURL = (youtubeURL: string, resolutionType: RESOLUTION_TYPE = "default"): string => {
    const videoId = getYoutubeVideoId(youtubeURL)
    if (!videoId) {
        return null
    }

    let urlTemplate = `https://img.youtube.com/vi/${videoId}/`
    if (resolutionType === "default") {
        return urlTemplate + "default.jpg"
    }
    let imageType = ""
    switch (resolutionType) {
        case "hqdefault":
            imageType = "hqdefault.jpg"
            break;
        case "mqdefault":
            imageType = "mqdefault.jpg"
            break;
        case "sddefault":
            imageType = "sddefault.jpg"
            break;
        case "maxresdefault":
            imageType = "maxresdefault.jpg"
            break;
        default:
            imageType = "default.jpg"
            break;
    }

    return urlTemplate + imageType
}

const thumbnailIsAvailable = async (thumbailURL: string): Promise<boolean> => {
    return (await fetch(thumbailURL)).status === 200
}

const getAvailableThumbnails = async (youtubeURL: string): Promise<string[]> => {
    const thumbailURLs = getAllYoutubeThumbnailURLs(youtubeURL)
    if (!thumbailURLs) {
        return null
    }

    const availableThumbnails: string[] = []
    for (let index = 0; index < thumbailURLs.length; index++) {
        const thumbailURL = thumbailURLs[index];
        const isAvailable = await thumbnailIsAvailable(thumbailURL)
        if (isAvailable) {
            availableThumbnails.push(thumbailURL)
        }
    }
    return availableThumbnails
}

export {
    getYoutubeVideoId,
    getYoutubeThumbnailURL,
    thumbnailIsAvailable,
    isYoutubeURL,
    getYoutubeMatches,
    isYtNormalURL,
    isYtEmbedURL,
    isYtShortenedURL,
    getYoutubeSplitter,
    getAllYoutubeThumbnailURLs,
    getAvailableThumbnails
}