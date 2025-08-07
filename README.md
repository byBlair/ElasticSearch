# 📰 Elastic News 검색 프로젝트

Elasticsearch를 활용한 뉴스 검색 웹 애플리케이션입니다.  
사용자는 키워드를 입력해 뉴스 콘텐츠를 빠르게 검색할 수 있으며,  
React 프론트엔드와 Node.js 백엔드, Elasticsearch를 활용해 구현되었습니다.

---

## 📁 폴더 구조
elastic-news/
├── backend/ # Node.js 서버 (Elasticsearch 연동)
├── frontend/ # React 클라이언트 (Tailwind 적용 UI)

## 🚀 주요 기술 스택

| 영역       | 기술                             |
|------------|----------------------------------|
| 검색 엔진  | **Elasticsearch 8.x**            |
| 백엔드     | Node.js, Express                 |
| 프론트엔드 | React 18, Tailwind CSS           |
| 데이터 처리| REST API (JSON 기반)             |
| 배포       | (작성 예정 or 로컬 테스트용)     |

---

## 🔧 설치 및 실행 방법

### 1. Elasticsearch 실행 (Docker)

```bash
docker run -d --name elasticsearch \
  -p 9200:9200 \
  -e "discovery.type=single-node" \
  -e "xpack.security.enabled=false" \
  docker.elastic.co/elasticsearch/elasticsearch:8.13.4


🔍 주요 기능
🔎 뉴스 키워드 검색 (Elasticsearch match 쿼리 기반)

📋 검색 결과를 카드 형태로 출력

✨ Tailwind 기반 UI 적용

⚙️ 프록시 설정을 통한 CORS 문제 해결

💡 향후 확장 예정
 날짜 및 카테고리 필터

 인기 검색어 집계 (Aggregation)

 자동완성 기능 (completion suggester)

 Kibana 연동한 시각화

 실시간 로그 데이터 연동
