# ytube-nm
A Javascript tool for getting the youtube thumbnail urls.


## How to Use
<br />

**Example 1**
```javascript
import { getYoutubeThumbnailURL, RESOLUTION_TYPE } from 'ytube-nm'

const youtubeUrl = "https://www.youtube.com/watch?v=6XBpQvFEfTk"
//the "default" argument is the resolution type
const thumbnail = getYoutubeThumbnailURL(youtubeUrl, "default") //https://img.youtube.com/vi/6XBpQvFEfTk/default.jpg
```

**Example 2**
```javascript
import { getYoutubeThumbnailURL, RESOLUTION_TYPE } from 'ytube-nm'

const youtubeUrl = "https://www.youtube.com/watch?v=6XBpQvFEfTk"
//the "hqdefault" argument is the resolution type
const thumbnail = getYoutubeThumbnailURL(youtubeUrl, "hqdefault") //https://img.youtube.com/vi/6XBpQvFEfTk/hqdefault.jpg
```

**The Res Type Definition**
```javascript
export type RESOLUTION_TYPE = "default" | "hqdefault" | "mqdefault" | "sddefault" | "maxresdefault"
```
