``` python
InquiryState {
    round: int                      # 当前轮次 (1~10)
    confirmed_symptoms: list[str]   # 已确认症状
    denied_symptoms: list[str]      # 已否认症状
    candidate_diseases: list[{      # 候选疾病列表（按置信度排序）
        name: str,
        confidence: float,          # 置信度: 命中症状数 / 该疾病总症状数
        matched_symptoms: list[str],
        all_symptoms: list[str],
        department: str,
        checks: list[str],
        complications: list[str]    # ACOMPANY_WITH 关系
    }]
    unmatched_symptoms: list[str]   # 用户提到但图谱中找不到的症状
    phase: enum                     # 当前阶段 (见下方)
}
```

| 阶段                  | 	触发条件	             | 问诊 Agent 行为       |
|---------------------|--------------------|-------------------|
| CLARIFY             | 	用户描述模糊，无明确症状	     | 追问部位 / 性质 / 时间    |
| GRAPH_QUERY         | 	有 ≥1 个明确症状        | 	查 Neo4j，生成候选疾病   |
| SYMPTOM_CONFIRM	    | 有候选疾病，有待确认症状       | 	每轮追问 ≤3 个症状      |
| COMPLICATION_CHECK	 | 剩余症状属于并发症范围	       | 追问并发症相关症状         |
| CONCLUDE            | 	置信度 ≥70% 或达到 10 轮 | 	输出结论，询问挂号        |
| HANDOFF	            | 用户同意挂号             | 	移交 Inquiry Agent |

## 
