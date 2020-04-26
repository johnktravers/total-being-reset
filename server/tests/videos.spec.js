const request = require('supertest');
const app = require('../app');

const environment = process.env.NODE_ENV || 'test';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);

describe('Videos endpoints', () => {

  beforeEach(async () => {
    await database.raw('TRUNCATE TABLE videos RESTART IDENTITY CASCADE');
  });

  afterEach(async () => {
    await database.raw('TRUNCATE TABLE videos RESTART IDENTITY CASCADE');
  });

  describe('GET videos endpoint', () => {
    test('It can retrieve a list of all videos', async () => {
      let video1 = {
        title: 'Meditation',
        description: 'Clear your mind.',
        thumbnail: 'meditation.jpg',
        youtube_id: 'aHDvEfiSipo',
        type: 'practice'
      };

      let video2 = {
        title: 'Brain Health',
        description: 'Positive practice helps the brain.',
        thumbnail: 'brain.jpg',
        youtube_id: 'inpok4MKVLM',
        type: 'teaching'
      };

      let videoIDs = await database('videos').insert([video1, video2], 'id')

      const res = await request(app).get('/api/v1/videos');

      expect(res.statusCode).toBe(200)

      expect(res.body.length).toBe(2);

      expect(res.body[0]).toHaveProperty('id');
      expect(res.body[0]).toHaveProperty('title');
      expect(res.body[0]).toHaveProperty('description');
      expect(res.body[0]).toHaveProperty('thumbnail');
      expect(res.body[0]).toHaveProperty('youtube_id');
      expect(res.body[0]).toHaveProperty('type');

      // expect(res.body[0]).not.toHaveProperty('created_at');
      // expect(res.body[0]).not.toHaveProperty('updated_at');

      expect(res.body[0].id).toEqual(videoIDs[0]);
      expect(res.body[0].title).toEqual('Meditation');
      expect(res.body[0].description).toEqual('Clear your mind.');
      expect(res.body[0].thumbnail).toEqual('meditation.jpg');
      expect(res.body[0].youtube_id).toEqual('aHDvEfiSipo');
      expect(res.body[0].type).toEqual('practice');

      expect(res.body[1].id).toEqual(videoIDs[1]);
      expect(res.body[1].title).toEqual('Brain Health');
      expect(res.body[1].description).toEqual('Positive practice helps the brain.');
      expect(res.body[1].thumbnail).toEqual('brain.jpg');
      expect(res.body[1].youtube_id).toEqual('inpok4MKVLM');
      expect(res.body[1].type).toEqual('teaching');
    });
  })
})
