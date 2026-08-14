---
title: crypto-quant：加密货币永续合约回测小工具
date: 2026-08-14 00:00:00
tags: [Python, 量化]
categories: [项目]
---

[crypto-quant](https://github.com/tty627/crypto-quant) 是一个用于加密货币永续合约回测的 Python 项目，核心是突破策略（Breakout）与参数优化。这篇文章简单介绍一下它的功能和用法。

## 特性

- Donchian Breakout + 趋势过滤回测
- 多标的统一资金账户回测
- 参数网格优化与自动搜索
- Plotly 可视化输出（权益曲线、热力图等）
- GitHub Actions CI（测试 + 打包检查）
- GitHub Actions Release（macOS / Windows / Linux，多架构）

## 环境要求

- Python 3.11+

## 快速开始

```bash
pip install -e ".[dev]"
```

### 运行测试

```bash
pytest
```

### 运行回测

```bash
python scripts/run_backtest.py
```

### 运行参数优化

```bash
# 快速扫描
python scripts/run_optimization.py

# 完整网格
python scripts/run_optimization.py --full
```

### 自动参数搜索

```bash
python scripts/auto_optimize.py --scope combined --max-trials 500
```

## 目录结构

```text
src/crypto_quant/
  backtest/        # 回测引擎、指标与账本
  data/            # K线与资金费率数据加载/缓存
  optimization/    # 网格优化与自动搜索
  strategies/      # 策略实现
  visualization/   # Plotly 图表输出
scripts/           # 可直接运行的任务脚本
tests/             # 单元测试
```

## CI / Release

- **CI 工作流**（`.github/workflows/ci.yml`）：PR 与分支 push 自动执行测试与打包检查
- **Release 工作流**（`.github/workflows/release.yml`）：tag（`v*`）触发跨平台构建并自动发布 GitHub Release

## 说明

- 仓库会忽略 `data/` 与 `results/` 下的实际输出内容，仅保留 `.gitkeep`
- 策略约束与功能规范见仓库中的 `SPEC.md`

后续打算继续完善策略模块和回测引擎，欢迎到 [GitHub 仓库](https://github.com/tty627/crypto-quant) 交流。
