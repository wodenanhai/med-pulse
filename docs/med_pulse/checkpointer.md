## LangChain记忆系统

LangChain使用LangGraph底层定义的记忆体系。LangGraph的记忆体系分两层

| 层级   | 组件           | 作用域               | 存储位置           |
|------|--------------|-------------------|----------------|
| 短期记忆 | checkpointer | 单个回话（thread）内对话历史 | Redis          |
| 长期记忆 | store        | 跨会话、跨用户的持久化知识     | Milvus（向量语义检索） |

+ checkpointer：保存LangGraph图的执行状态快照（消息列表、中间变量等），让同一个thread_id的对话可以续接。
+ store：保存任意键值数据，支持语义搜索，agent可以在工具中主动读写，实现跨会话记忆
