const express = require('express');
const { Client } = require('@elastic/elasticsearch');

const app = express();
const port = 3000;

const cors = require('cors');
app.use((cors()))

// Elasticsearch 클라이언트 설정
const client = new Client({
    node: 'http://localhost:9200'
  });

// GET /search?keyword=반도체 요청 처리
app.get('/search', async (req, res) => {
  const keyword = req.query.keyword;

  try {
    const result = await client.search({
      index: 'news',
      query: {
        multi_match: {
          query: keyword,
          fields: ['title', 'content'],
        },
      },
    });

    const hits = result.hits.hits.map((hit) => hit._source);
    res.json(hits);
  } catch (err) {
    console.error(err);
    res.status(500).send('검색 실패');
  }
});

app.listen(port, () => {
  console.log(`서버 실행 중: http://localhost:${port}`);
});
