
exports.seed = function(knex) {
  return knex('video_tags').del()
    .then(() => knex('videos').del())
    .then(() => knex('tags').del())

    .then(() => {
      return Promise.all([
        knex('videos').insert([
          {
            id: 1,
            title: 'Accomplish Everything With Mini Habits',
            description: 'Want to learn more about this topic? Get the book "Mini Habits" by Stephen Guise.',
            thumbnail: 'https://i.ytimg.com/vi/aHDvEfiSipo/sddefault.jpg',
            youtube_id: 'aHDvEfiSipo',
            type: 'teaching'
          },
          {
            id: 2,
            title: '5-Minute Meditation You Can Do Anywhere',
            description: 'In just 5 minutes you can reset your day in a positive way.',
            thumbnail: 'https://i.ytimg.com/vi/inpok4MKVLM/sddefault.jpg',
            youtube_id: 'inpok4MKVLM',
            type: 'practice'
          }
        ], 'id')

        .then(videos => {
          return knex('tags').insert([
            { id: 1, name: 'habits',        color: 'd87dd6' },
            { id: 2, name: 'stress relief', color: '197776' },
            { id: 3, name: 'meditation',    color: '6fd7cb' },
            { id: 4, name: 'guided',        color: '7c97a5' }
          ], [videos, 'id'])
        })

        .then(ids => {
          return knex('video_tags').insert([
            { id: 1, video_id: ids[0]['0'], tag_id: ids[0].id },
            { id: 2, video_id: ids[0]['0'], tag_id: ids[1].id },
            { id: 3, video_id: ids[0]['1'], tag_id: ids[1].id },
            { id: 4, video_id: ids[0]['1'], tag_id: ids[2].id },
            { id: 5, video_id: ids[0]['1'], tag_id: ids[3].id }
          ])
        })

        .then(() => console.log('Video and tag seeding complete!'))
        .catch((error) => console.log(`Error seeding video/tag data: ${error}`))
      ])
    })
    .catch((error) => console.log(`Error seeding video/tag data: ${error}`));
};
