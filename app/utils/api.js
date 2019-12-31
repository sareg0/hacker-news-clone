// "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
// "https://hacker-news.firebaseio.com/v0/item/21805633.json?print=pretty"
export function getStory (itemId) {
  const storyEndpoint = window.encodeURI(`https://hacker-news.firebaseio.com/v0/item/${itemId}.json`)
  return fetch(storyEndpoint)
    .then(response => response.json())
    .then(data => data)
}

export function getUser (id) {
  const userEndpoint = window.encodeURI(`https://hacker-news.firebaseio.com/v0/user/${id}.json?print=pretty`)
  return fetch(userEndpoint)
    .then(response => response.json())
    .then(data => data)
}

export function getUserPosts (postIds) {
  return Promise.all(postIds.map(getStory))
}

export function fetchStories (type) {
  const endpoint = window.encodeURI(`https://hacker-news.firebaseio.com/v0/${type}stories.json?print=pretty`)
  // get all the stories => comes back as an array
  return fetch(endpoint)
    .then(response => response.json())
    .then(data => data.slice(0, 50))
    .then(storyIds => Promise.all(storyIds.map(getStory)))
    .then(data => data)
}