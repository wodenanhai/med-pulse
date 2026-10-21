## 初始化
```bash
alembic init alembic
```
生成内容如下：
+ alembic/
+ alembic/env.py
+ alembic/script.py.mako
+ alembic/versions/

##### 关于alembic/env.py内容

- config.set_main_option("sqlalchemy.url", settings.DATABASE_URL)会读取项目.env
- target_metadata = Base.metadata对应项目基类src/core/base_model.py
- 自动生成迁移前，必须确保所有ORM模型已被import

## 生成首个迁移并初始化数据库
如果有业务模型（例如User、Role），保证它们被导入Alembic进程中，在alembic/env.py顶部显式导入模型模块

## 生成迁移脚本
```bash
alembic revision --autogenerate -m "init schema"
```
会在alembic/versions/下有一个文件

## 检查迁移脚本
+ 是否包含预期的op.create_table(...)
+ 字段类型、默认值、索引是否正确
+ downgrade()是否可逆

## 执行迁移
```
alembic upgrade head
```
## 后续日常迁移流程
每次修改模型后执行：
+ 给alembic/env.py导入schema
+ 生成迁移：alembic revision --autogenerate -m "add xxx"
+ 人工检查迁移脚本（不盲信autogenerate）
+ 执行迁移：alembic upgrade head

## 常用命令
```bash
#查看当前版本
alembic current
#查看迁移历史
alembic history
#升级到最新
alembic upgrade head
#回退一个版本
alembic downgrade -1
#回退到指定版本
alembic downgrade <revision_id>
```
