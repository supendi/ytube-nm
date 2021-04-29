export declare type RESOLUTION_TYPE = "default" | "hqdefault" | "mqdefault" | "sddefault" | "maxresdefault";
/**
 * Returns the youtube regex matches
 * @param youtubeURL the youtube urls
 * @returns
 */
declare const getYoutubeMatches: (youtubeURL: string) => RegExpMatchArray;
/**
 * Determines url is a valid youtube url
 * @param youtubeURL the youtube urls
 * @returns
 */
declare const isYoutubeURL: (youtubeURL: string) => boolean;
/**
 * Determines if url is a normal youtube url
 * @param youtubeURL the youtube urls
 * @returns
 */
declare const isYtNormalURL: (youtubeURL: string) => boolean;
/**
 * Determines if url is an embed youtube url
 * @param youtubeURL the youtube urls
 * @returns
 */
declare const isYtEmbedURL: (youtubeURL: string) => boolean;
/**
 * Determines if url is an shortened youtube url
 * @param youtubeURL the youtube urls
 * @returns
 */
declare const isYtShortenedURL: (youtubeURL: string) => boolean;
/**
 * Returns the string splitter for of youtube url. it will be used by the youtube id getter
 * @param youtubeURL the youtube url
 * @returns
 */
declare const getYoutubeSplitter: (youtubeURL: string) => string;
/**
 * Gets the video id from youtube URL
 * @param youtubeURL the youtube url
 * @returns
 */
declare const getYoutubeVideoId: (youtubeURL: string) => string;
/**
 * Returns the urls of youtube thumbnail
 * @param youtubeURL the youtube url
 * @param thumbnailType the resolution options
 * @returns
 */
declare const getAllYoutubeThumbnailURLs: (youtubeURL: string) => string[];
/**
 * Returns the url of youtube thumbnail by specified resolution type
 * @param youtubeURL the youtube url
 * @param resolutionType the resolution options
 * @returns
 */
declare const getYoutubeThumbnailURL: (youtubeURL: string, resolutionType?: RESOLUTION_TYPE) => string;
declare const thumbnailIsAvailable: (thumbailURL: string) => Promise<boolean>;
declare const getAvailableThumbnails: (youtubeURL: string) => Promise<string[]>;
export { getYoutubeVideoId, getYoutubeThumbnailURL, thumbnailIsAvailable, isYoutubeURL, getYoutubeMatches, isYtNormalURL, isYtEmbedURL, isYtShortenedURL, getYoutubeSplitter, getAllYoutubeThumbnailURLs, getAvailableThumbnails };
