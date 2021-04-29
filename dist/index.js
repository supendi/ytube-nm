"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const normalSignature = "/watch?v=";
const embedSignature = "/embed/";
const shortenedSignature = "youtu.be/";
/**
 * Returns the youtube regex matches
 * @param youtubeURL the youtube urls
 * @returns
 */
const getYoutubeMatches = (youtubeURL) => {
    const matches = youtubeURL.match(/^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/);
    return matches;
};
exports.getYoutubeMatches = getYoutubeMatches;
/**
 * Determines url is a valid youtube url
 * @param youtubeURL the youtube urls
 * @returns
 */
const isYoutubeURL = (youtubeURL) => {
    const matches = getYoutubeMatches(youtubeURL);
    if (!matches) {
        return false;
    }
    return true;
};
exports.isYoutubeURL = isYoutubeURL;
/**
 * Determines if url is a normal youtube url
 * @param youtubeURL the youtube urls
 * @returns
 */
const isYtNormalURL = (youtubeURL) => {
    const isYoutube = isYoutubeURL(youtubeURL);
    if (!isYoutube) {
        return false;
    }
    return getYoutubeMatches(youtubeURL).includes(normalSignature);
};
exports.isYtNormalURL = isYtNormalURL;
/**
 * Determines if url is an embed youtube url
 * @param youtubeURL the youtube urls
 * @returns
 */
const isYtEmbedURL = (youtubeURL) => {
    const isYoutube = isYoutubeURL(youtubeURL);
    if (!isYoutube) {
        return false;
    }
    return getYoutubeMatches(youtubeURL).includes(embedSignature);
};
exports.isYtEmbedURL = isYtEmbedURL;
/**
 * Determines if url is an shortened youtube url
 * @param youtubeURL the youtube urls
 * @returns
 */
const isYtShortenedURL = (youtubeURL) => {
    const isYoutube = isYoutubeURL(youtubeURL);
    if (!isYoutube) {
        return false;
    }
    return getYoutubeMatches(youtubeURL).includes("youtu.be");
};
exports.isYtShortenedURL = isYtShortenedURL;
/**
 * Returns the string splitter for of youtube url. it will be used by the youtube id getter
 * @param youtubeURL the youtube url
 * @returns
 */
const getYoutubeSplitter = (youtubeURL) => {
    if (isYtNormalURL(youtubeURL))
        return normalSignature;
    if (isYtEmbedURL(youtubeURL))
        return embedSignature;
    if (isYtShortenedURL(youtubeURL))
        return shortenedSignature;
    return null;
};
exports.getYoutubeSplitter = getYoutubeSplitter;
/**
 * Gets the video id from youtube URL
 * @param youtubeURL the youtube url
 * @returns
 */
const getYoutubeVideoId = (youtubeURL) => {
    const isYoutube = isYoutubeURL(youtubeURL);
    if (!isYoutube) {
        return null;
    }
    let splitter = getYoutubeSplitter(youtubeURL);
    if (!splitter) {
        return null;
    }
    const splittedStr = youtubeURL.split(splitter);
    if (splittedStr && splittedStr.length > 1) {
        const videoId = splittedStr[1];
        return videoId;
    }
    console.error("Youtube video id is not found.");
    return null;
};
exports.getYoutubeVideoId = getYoutubeVideoId;
/**
 * Returns the urls of youtube thumbnail
 * @param youtubeURL the youtube url
 * @param thumbnailType the resolution options
 * @returns
 */
const getAllYoutubeThumbnailURLs = (youtubeURL) => {
    const urls = [];
    const videoId = getYoutubeVideoId(youtubeURL);
    if (!videoId) {
        return null;
    }
    const imageTypes = [
        "default.jpg",
        "hqdefault.jpg",
        "mqdefault.jpg",
        "sddefault.jpg",
        "maxresdefault.jpg"
    ];
    let urlTemplate = `https://img.youtube.com/vi/${videoId}/`;
    for (let index = 0; index < imageTypes.length; index++) {
        const imageType = imageTypes[index];
        urls.push(urlTemplate + imageType);
    }
    return urls;
};
exports.getAllYoutubeThumbnailURLs = getAllYoutubeThumbnailURLs;
/**
 * Returns the url of youtube thumbnail by specified resolution type
 * @param youtubeURL the youtube url
 * @param resolutionType the resolution options
 * @returns
 */
const getYoutubeThumbnailURL = (youtubeURL, resolutionType = "default") => {
    const videoId = getYoutubeVideoId(youtubeURL);
    if (!videoId) {
        return null;
    }
    let urlTemplate = `https://img.youtube.com/vi/${videoId}/`;
    if (resolutionType === "default") {
        return urlTemplate + "default.jpg";
    }
    let imageType = "";
    switch (resolutionType) {
        case "hqdefault":
            imageType = "hqdefault.jpg";
            break;
        case "mqdefault":
            imageType = "mqdefault.jpg";
            break;
        case "sddefault":
            imageType = "sddefault.jpg";
            break;
        case "maxresdefault":
            imageType = "maxresdefault.jpg";
            break;
        default:
            imageType = "default.jpg";
            break;
    }
    return urlTemplate + imageType;
};
exports.getYoutubeThumbnailURL = getYoutubeThumbnailURL;
const thumbnailIsAvailable = (thumbailURL) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield fetch(thumbailURL)).status === 200;
});
exports.thumbnailIsAvailable = thumbnailIsAvailable;
const getAvailableThumbnails = (youtubeURL) => __awaiter(void 0, void 0, void 0, function* () {
    const thumbailURLs = getAllYoutubeThumbnailURLs(youtubeURL);
    if (!thumbailURLs) {
        return null;
    }
    const availableThumbnails = [];
    for (let index = 0; index < thumbailURLs.length; index++) {
        const thumbailURL = thumbailURLs[index];
        const isAvailable = yield thumbnailIsAvailable(thumbailURL);
        if (isAvailable) {
            availableThumbnails.push(thumbailURL);
        }
    }
    return availableThumbnails;
});
exports.getAvailableThumbnails = getAvailableThumbnails;
