// "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
// "https://hacker-news.firebaseio.com/v0/item/21805633.json?print=pretty"

function getTopStories () {
  const endpoint = window.encodeURI(`https://hacker-news.firebaseio.com/v0/topstories.json`)
  return fetch(endpoint)
    .then(response => response.json())
    .then(ids => ids.slice(0,5))
}

function getStoryInfo (itemId) {
  const storyEndpoint = window.encodeURI(`https://hacker-news.firebaseio.com/v0/item/${itemId}.json`)
  return fetch(storyEndpoint)
    .then(response => response.json())
    .then(data => data)
}



export function fetchStories () {
  // get all the stories => comes back as an array
  return getTopStories()
    .then(storyIds => Promise.all(storyIds.map(getStoryInfo)))
    .then(data => data)
}