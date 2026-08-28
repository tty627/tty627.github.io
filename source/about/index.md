---
title: About / 关于
date: 2026-08-14 12:00:00
updated: 2026-08-28 12:00:00
layout: about
comments: false
description: 谭天晔，上海科技大学 2025 级计算机科学与技术本科生，关注 LLM Agent 评测、研究工具与系统工程。
---

# 关于我

你好，我是 **谭天晔（Tianye Tan / tty627）**，上海科技大学信息科学与技术学院 2025 级计算机科学与技术本科生，预计 2029 年毕业。

我目前主要关注 **LLM Agent 评测、研究工具与系统工程**。我喜欢把模糊想法变成能够运行、测试和复现的项目，也会记录其中的假设、失败与取舍。量化研究是我的另一条长期探索线，但我更关注回测是否可信，而不是只展示漂亮的收益曲线。

> I build systems that make evidence easier to verify.

## 我在意的工程原则

- **Evidence over claims**：结论应能追溯到原始证据、测试或实验记录。
- **Fail closed**：证据不足时明确返回“不可验证”，而不是制造确定性。
- **Local first when practical**：在不牺牲使用体验的前提下，尽量让数据和控制权留在本地。
- **Boundaries are part of the product**：公开项目状态、适用范围和已知限制。

## Selected Work

- [**Octopus**](https://github.com/tty627/octopus) — 面向学习与研究的 Windows 本地资料工作台。支持检索 PDF、Office、图片、文本与 ZIP，并把结果定位到可核验的页面、段落、表格或单元格；当前为 `2.1.0.dev1` 开发预览版。
- [**Relay Model Auditor**](https://github.com/tty627/llm-relay-auditor) — 面向 LLM 中转站与 API 采购场景的黑盒证据审计 MVP。保存原始证据与哈希，并在缺乏有效真值或阈值时将结论收敛为 `unverifiable`。
- [**CS100 Tank**](https://github.com/tty627/CS100-Tank) — 基于 C 与 ANSI 终端渲染的课程作品，实现碰撞、可破坏地图、敌方 AI、核心热量和差分渲染，并通过 GCC/Clang CI 编译检查。

更多实验和课程项目可以在 [GitHub](https://github.com/tty627) 查看。团队项目会明确标注个人贡献；课程仓库的公开与使用应遵守相应课程的学术诚信和素材许可要求。

## Current Focus

- Agent benchmark 的有效性、可复现性与失败分类；
- 可核验的本地研究工作流与证据组织；
- 用测试、CI 和明确边界提高 AI 协作开发的可信度。

涉及实习与合作的内容只会在允许公开的范围内讨论，不展示内部数据、未发布任务或受限评测结果。

## Contact

- GitHub：<https://github.com/tty627>
- Email：[tanty2025@shanghaitech.edu.cn](mailto:tanty2025@shanghaitech.edu.cn)
