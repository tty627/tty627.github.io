---
title: 关于
date: 2026-08-14 12:00:00
updated: 2026-10-09 12:00:00
layout: about
comments: false
description: 谭天晔，上海科技大学计算机科学与技术专业大二学生，关注人工智能和计算机系统，通过课程、实习和个人项目积累经验。
---

<h1 class="fluid-sr-only">关于</h1>

你好，我是 **谭天晔（Tianye Tan / tty627）**，目前是上海科技大学计算机科学与技术专业大二学生，预计 2029 年毕业。

我关注人工智能和计算机系统，通过课程、实习和个人项目积累经验。最近的实习工作集中在大模型 Agent 的指令遵循评测和 rubric（评分标准）生成流程；课外项目涉及本地研究资料检索与 Agent 上下文处理，也在操作系统课程中参与了 Pintos 的开发。

## 实习经历

### 浦江实验室｜大模型评测实习生

`2026.08—2026.09`

这段实习中，我先后参与了以下两个项目。

#### 项目一：Rubric Pipeline

我把评分标准的生成、冻结后实测、区分度诊断、反馈修订和发布检查整理成一套[公开工作流](https://github.com/tty627/rubrics)。每轮先固定评分标准，再进行测试和诊断；根据反馈修订后，进入下一轮验证，并保留各阶段的记录。

#### 项目二：基于 AgentCompass 的指令遵循评测

我基于 [AgentCompass](https://github.com/open-compass/AgentCompass) 和 [Terminal-Bench 2.1 Verified](https://github.com/harbor-framework/terminal-bench-2-1) 参与 Agentic Instruction Following 评测。这里的核心问题不只是任务能否完成，还包括 Agent 是否遵守了指定的执行过程。

具体工作包括：

- 将过程约束加入原任务，并用多个模型检查约束的难度与区分度；
- 为新增约束编写独立 verifier；
- 结合完整运行轨迹、原任务结果与约束判定，形成自动化评测结果。

## 代表项目

- **[Octopus](https://github.com/tty627/octopus)**：面向学习和研究的本地资料工作台，支持多种文件格式的搜索、原文定位、引用整理和资料包导出，目前提供 Windows 开发预览版。
- **[AI Airlock](https://github.com/tty627/ai-airlock)**：面向 AI Agent 的本地上下文处理工具，检测和处理敏感信息与可疑指令，筛选与任务相关的内容，并保留来源和审计记录。
- **[Pintos](https://github.com/tty627/pintos)**：基于 Pintos 教学框架完成的双人操作系统课程项目。我的提交涉及[可扩展文件系统、目录和块缓存实现](https://github.com/tty627/pintos/commit/160e9eacb1f138a267f92f0e209e7edd562af51d)，以及[虚拟内存并发问题修复](https://github.com/tty627/pintos/commit/60a6837b018a3930d0c9cb6d4c371faa70d52d16)。

[查看全部项目](/projects/)

## 简历

[查看公开版简历（PDF）](/files/tianye-tan-resume.pdf)

公开版已移除手机号。

## 联系方式

- GitHub：<https://github.com/tty627>
- Gmail：[ttyinzg@gmail.com](mailto:ttyinzg@gmail.com)
- ShanghaiTech Email：[tanty2025@shanghaitech.edu.cn](mailto:tanty2025@shanghaitech.edu.cn)
