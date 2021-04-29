# ytube-nm
A Javascript tool for getting the youtube thumbnail urls.


## How to Use
<br />

**The Resolution Type Definition:**
```javascript
export type RESOLUTION_TYPE = "default" | "hqdefault" | "mqdefault" | "sddefault" | "maxresdefault"
```

**Example 1 : Get a single url**
```javascript
import { getYoutubeThumbnailURL, RESOLUTION_TYPE } from 'ytube-nm'

const youtubeUrl = "https://www.youtube.com/watch?v=6XBpQvFEfTk"
//the "default" argument is the resolution type
const thumbnail = getYoutubeThumbnailURL(youtubeUrl, "default") //https://img.youtube.com/vi/6XBpQvFEfTk/default.jpg
```

**Example 2: Get a single url**
```javascript
import { getYoutubeThumbnailURL, RESOLUTION_TYPE } from 'ytube-nm'

const youtubeUrl = "https://www.youtube.com/watch?v=6XBpQvFEfTk"
//the "hqdefault" argument is the resolution type
const thumbnail = getYoutubeThumbnailURL(youtubeUrl, "hqdefault") //https://img.youtube.com/vi/6XBpQvFEfTk/hqdefault.jpg
```

**Example 3: Get all thumbnail urls of a youtube url**
```javascript
import { getAllYoutubeThumbnailURLs } from 'ytube-nm'

const youtubeUrl = "https://www.youtube.com/watch?v=6XBpQvFEfTk" 
const thumbnails = getAllYoutubeThumbnailURLs(youtubeUrl)
//thumbnails result
//[
//	'https://img.youtube.com/vi/6XBpQvFEfTk/default.jpg',
//	'https://img.youtube.com/vi/6XBpQvFEfTk/hqdefault.jpg',
//	'https://img.youtube.com/vi/6XBpQvFEfTk/mqdefault.jpg',
//	'https://img.youtube.com/vi/6XBpQvFEfTk/sddefault.jpg',
//	'https://img.youtube.com/vi/6XBpQvFEfTk/maxresdefault.jpg'
//]
```

**Example 4: Check if a thumbnail url is available**

Because some youtube videos don't have all the tumbnail types
```javascript
import { thumbnailIsAvailable } from 'ytube-nm'

const youtubeUrl = "https://img.youtube.com/vi/6XBpQvFEfTk/default.jpg" 
const isAvailable = thumbnailIsAvailable(url) //return a promise of boolean
```

**Example 5: Or get only the available ones**
```javascript
import { getAvailableThumbnails } from 'ytube-nm'

const youtubeUrl = "https://www.youtube.com/watch?v=6XBpQvFEfTk" 
const thumbnails = getAvailableThumbnails(url) //return an array of thumbnail url(s)
```
