## 安装中间件
```bash
#一次性全部启动
docker compose -f ./docker-compose.yml up -d

#分开一步步启动
docker compose -f ./docker-compose.yml up -d etcd
docker compose -f ./docker-compose.yml up -d minio
docker compose -f ./docker-compose.yml up -d milvus
docker compose -f ./docker-compose.yml up -d attu
docker compose -f ./docker-compose.yml up -d postgres
docker compose -f ./docker-compose.yml up -d redis
docker compose -f ./docker-compose.yml up -d neo4j

#停掉全部
docker compose -f ./docker-compose.yml down
#单独停某一个
docker compose -f ./docker-compose.yml stop redis

```
