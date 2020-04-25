# Total Being Reset - Backend

## Description

The backend for this application is a RESTful API built in Node.js and Express. Testing was done using Jest.

## Testing

All tests can be run using the `npm run test` command from the server directory.

## Endpoints

### Videos Endpoints

##### 1) GET `/api/v1/videos`

This returns all videos currently saved in the database.

Example response body format:
```
[
  {
    "id": 1,
    "title": "Accomplish Everything With Mini Habits",
    "description": "Want to learn more about this topic? Get the book \"Mini Habits\" by Stephen Guise.",
    "thumbnail": "https://i.ytimg.com/vi/aHDvEfiSipo/sddefault.jpg",
    "youtube_id": "aHDvEfiSipo",
    "type": "teaching"
  },
  {
    "id": 2,
    "title": "5-Minute Meditation You Can Do Anywhere",
    "description": "In just 5 minutes you can reset your day in a positive way.",
    "thumbnail": "https://i.ytimg.com/vi/inpok4MKVLM/sddefault.jpg",
    "youtube_id": "inpok4MKVLM",
    "type": "practice"
  },
  ...
]
```
