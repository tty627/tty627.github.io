---
title: 关于
date: 2026-08-14 12:00:00
updated: 2026-09-01 12:00:00
layout: about
comments: false
description: 谭天晔，上海科技大学 2025 级计算机科学与技术本科生，近期在浦江实验室参与大模型 Agent 评测，个人项目聚焦 Agent 安全、本地研究工具与系统工程。
---

<h1 class="fluid-sr-only">关于</h1>

你好，我是 **谭天晔（Tianye Tan / tty627）**，上海科技大学信息科学与技术学院 2025 级计算机科学与技术本科生，预计 2029 年毕业。

我目前主要关注 **大模型 Agent 评测、Agent 安全和本地研究工具**。相比只展示最终结果，我更关心评测能否复现、证据能否追溯，以及工具能否真正帮助使用者核对信息。

## 实习与研究实践

### 浦江实验室｜大模型评测实习生

`2026.08—2026.09`

实习期间，我基于 [AgentCompass](https://github.com/open-compass/AgentCompass) 和 [Terminal-Bench 2.1 Verified](https://github.com/harbor-framework/terminal-bench-2-1) 参与 Agentic Instruction Following 评测。这里的核心问题不只是任务能否完成，还包括 Agent 是否遵守了指定的执行过程。

具体工作包括：

- 将过程约束加入原任务，并用多个模型检查约束的难度与区分度；
- 为新增约束编写独立 verifier；
- 结合完整运行轨迹、原任务结果与约束判定，形成自动化评测结果。

### Rubric Pipeline

同期，我把 rubric（评分标准）的生成、冻结后实测、区分度诊断、反馈修订和发布检查整理成一套[公开工作流](https://github.com/tty627/rubrics)。候选回答只在 rubric 冻结后进入测试，避免一边查看结果、一边修改评分标准。

## 代表项目

- **[AI Airlock](https://github.com/tty627/ai-airlock)**：在本地检测 Secret 和 Prompt Injection 风险、隔离不可信内容，并生成保留来源记录的安全上下文。
- **[Octopus](https://github.com/tty627/octopus)**：面向学习和研究的 Windows 本地资料工具，支持搜索多种文件格式并定位到原文位置。
- **[DSH Trajectory Control](https://github.com/tty627/dsh-trajectory-control)**：从 Agent 轨迹的中间步骤创建分支、加入新指令并继续运行。
- **[Trajectory Workspace Plugin](https://github.com/tty627/trajectory-workspace-plugin)**：为 DeepSeek Harness Web 提供可停靠、浮动、缩放和保存布局的轨迹面板。
- **[Relay Model Auditor](https://github.com/tty627/llm-relay-auditor)**：整理 OpenAI 兼容端点的测试结果、证据哈希和历史记录；比较结果只作为探索性证据，不能确认实际模型身份。
- **[Pintos](https://github.com/tty627/pintos)**：操作系统课程项目，涉及线程调度、系统调用、虚拟内存和文件系统。

## 简历

[查看公开版简历（PDF）](/files/tianye-tan-resume.pdf)

公开版已移除手机号。

## 目前关注

- Agent 指令遵循评测及其可复现性；
- Agent 上下文安全；
- 本地研究工具与系统工程。

## 联系方式

- GitHub：<https://github.com/tty627>
- Gmail：[ttyinzg@gmail.com](mailto:ttyinzg@gmail.com)
- ShanghaiTech Email：[tanty2025@shanghaitech.edu.cn](mailto:tanty2025@shanghaitech.edu.cn)
