# Conda 从安装到实战使用

> Python 环境管理与包管理入门指南\
> 适用系统：macOS / Windows / Linux\
> 面向读者：Python 初学者及日常开发者

## 目录

1.  [Conda 是什么](#1-conda-是什么)
2.  [选择并安装 Conda](#2-选择并安装-conda)
3.  [各操作系统安装步骤](#3-各操作系统安装步骤)
4.  [安装后验证](#4-安装后验证)
5.  [环境管理](#5-环境管理最重要的日常操作)
6.  [包管理](#6-包管理安装查看更新卸载)
7.  [在 Conda 环境中使用 pip](#7-在-conda-环境中使用-pip)
8.  [完整项目实战](#8-实战为一个-python-项目创建独立环境)
9.  [导出与复现环境](#9-导出和复现环境)
10. [使用 JupyterLab](#10-jupyter-notebook可选)
11. [常见问题排查](#11-常见问题排查)
12. [项目目录与日常习惯](#12-推荐的项目目录与日常习惯)
13. [常用命令速查表](#13-常用命令速查表)
14. [官方资料](#14-官方资料)

------------------------------------------------------------------------

## 1. Conda 是什么？

Conda 是一个跨平台的**包管理器和环境管理器**，可用于安装
Python、安装第三方库，以及为不同项目创建彼此隔离的运行环境。它支持
macOS、Windows 和 Linux。

### 1.1 先理解三个概念

-   **环境（Environment）**：每个项目自己的 Python
    和依赖库集合。例如项目 A 使用 Python 3.11，项目 B 使用 Python
    3.12，可以分别放在不同环境中。
-   **包（Package）**：可安装的软件库，例如
    `numpy`、`pandas`、`requests`、`jupyterlab`。
-   **渠道（Channel）**：Conda 下载软件包的仓库来源，例如
    `defaults`、`conda-forge`。不同渠道的软件版本和依赖构建可能不同。

### 1.2 Conda、pip、venv 有什么区别？

-   `pip` 主要负责安装 Python 包。
-   `venv` 主要负责创建 Python 虚拟环境。
-   Conda 同时管理环境和包，也能处理部分非 Python 二进制依赖。

Conda 环境中也可以使用 `pip`。建议优先用 Conda
安装可用的依赖；仓库没有合适包时，再在同一个环境中使用
`python -m pip install`。

## 2. 选择并安装 Conda

### 2.1 选择哪个发行版？

-   **Miniconda**：体积较小，只包含 Conda
    和基础组件，其他库按需安装，适合希望自己管理依赖的开发者。
-   **Anaconda Distribution**：预装较多数据科学工具，也包含图形化的
    Navigator，安装体积更大。
-   **Miniforge**：社区维护，默认面向 `conda-forge`
    渠道，适合希望主要使用该渠道的用户。

下载前请进入对应项目的官方网站，选择与操作系统、CPU
架构相匹配的安装程序。

官方入口：

-   Conda
    安装文档：<https://docs.conda.io/projects/conda/en/stable/user-guide/install/index.html>
-   Miniconda / Anaconda 下载：<https://www.anaconda.com/download>
-   Miniforge 下载：<https://conda-forge.org/download/>

> 注意：Anaconda
> 默认仓库的使用受其服务条款约束，组织或商业用途应查看当前条款。使用
> Miniforge 也应遵循所安装软件包各自的许可。

## 3. 各操作系统安装步骤

### 3.1 macOS

**步骤 1：确认 Mac 芯片架构**

打开终端，执行：

``` bash
uname -m
```

-   输出 `arm64` 通常表示 Apple Silicon（M 系列）。
-   输出 `x86_64` 通常表示 Intel。

下载与架构匹配的安装程序。

**步骤 2：运行安装程序**

按照官方网站说明运行图形安装器或终端安装脚本。安装到个人用户目录通常不需要管理员权限。

**步骤 3：初始化 Shell（如果安装程序没有自动完成）**

使用 Zsh 时：

``` bash
conda init zsh
```

如果使用 Bash：

``` bash
conda init bash
```

**步骤 4：重新打开终端并验证**

``` bash
conda --version
conda info
```

请按自己实际使用的 Shell 选择初始化命令，不要盲目执行多个初始化命令。

### 3.2 Windows

1.  从官方网站下载与 Windows 和 CPU 架构匹配的安装器。
2.  按安装向导完成安装。一般可以选择仅为当前用户安装。
3.  不要随意把整个 Conda 安装目录加入系统 `PATH`；通常通过安装器提供的
    Anaconda Prompt / Miniforge Prompt，或初始化后的 PowerShell
    使用更稳妥。
4.  打开对应终端并执行：

``` powershell
conda --version
conda info
```

如果希望在 PowerShell 中使用 Conda，可执行：

``` powershell
conda init powershell
```

然后关闭并重新打开 PowerShell。

### 3.3 Linux

1.  下载与 Linux 和 CPU 架构匹配的官方安装器。
2.  按安装说明运行安装程序，阅读许可提示并选择安装目录。
3.  如果使用 Bash，可执行：

``` bash
conda init bash
```

4.  重新打开终端并验证：

``` bash
conda --version
conda info
```

## 4. 安装后验证

以下是安装后常用的检查命令：

``` bash
conda --version       # 查看 Conda 版本
conda info            # 查看安装路径、平台、渠道等信息
conda info --envs     # 查看所有环境
conda list            # 查看当前环境已安装的包
conda --help          # 查看帮助
conda create --help   # 查看某条命令的参数
```

命令提示符前出现 `(base)`，通常表示当前激活的是名为 `base`
的基础环境。执行 `conda info --envs` 时，星号 `*` 会标记当前环境。

## 5. 环境管理：最重要的日常操作

### 5.1 创建指定 Python 版本的环境

``` bash
conda create -n myproject python=3.11
```

说明：

-   `-n` 是 `--name` 的简写。
-   `myproject` 是环境名，可以替换成项目名。
-   `python=3.11` 表示安装 Python 3.11 系列。

执行时先阅读将要安装的内容，确认后输入 `y`。

### 5.2 激活和退出环境

``` bash
conda activate myproject
```

退出当前环境：

``` bash
conda deactivate
```

激活后再安装包或运行程序，可以确保使用的是这个项目的
Python。退出只影响当前终端会话。

### 5.3 列出环境

``` bash
conda env list
# 或
conda info --envs
```

### 5.4 删除环境

``` bash
conda deactivate
conda env remove -n myproject
```

删除前确认环境名。删除环境会移除该环境中的包和文件。项目源代码通常不在环境目录里，但不要把项目文件直接放进即将删除的环境目录。

### 5.5 克隆环境

``` bash
conda create -n myproject-copy --clone myproject
```

克隆适合在尝试升级依赖前做一份环境副本。

## 6. 包管理：安装、查看、更新、卸载

### 6.1 安装包

先激活项目环境：

``` bash
conda activate myproject
conda install numpy pandas requests
```

一次安装多个相关包，通常有利于 Conda 一起解决依赖关系。

指定版本示例：

``` bash
conda install "numpy=1.26"
```

### 6.2 搜索和查看

``` bash
conda search numpy
conda list
conda list numpy
```

### 6.3 更新包和 Conda

``` bash
conda update numpy
```

更新当前环境中所有可更新的包：

``` bash
conda update --all
```

更新 Conda 本身时，通常先切换到 `base`：

``` bash
conda activate base
conda update conda
```

`conda update --all`
可能同时改变许多包的版本，执行前应检查计划。稳定项目不要无缘无故频繁更新全部依赖。

### 6.4 卸载包

``` bash
conda remove numpy
```

### 6.5 指定渠道安装包

例如从 `conda-forge` 安装 `ruff`：

``` bash
conda install conda-forge::ruff
```

渠道会影响可用版本与依赖组合。一个环境中尽量保持渠道策略一致，避免随意混用多个来源。

## 7. 在 Conda 环境中使用 pip

有些包没有适合当前平台的 Conda 构建，或官方文档建议使用 pip
时，可以在已激活的项目环境中使用 pip。

``` bash
conda activate myproject
conda install pip
python -m pip install 包名
python -m pip show 包名
```

建议顺序：

1.  先用 Conda 安装能找到的依赖。
2.  再用 `python -m pip` 安装剩余包。
3.  避免在 `base` 环境中安装项目依赖。
4.  使用 pip 后，Conda 不一定能完整追踪 pip 安装或升级造成的变化。

如果依赖冲突严重，创建新环境通常比反复混装更容易恢复。

## 8. 实战：为一个 Python 项目创建独立环境

假设项目目录叫
`demo_project`。下面演示创建环境、安装常见库和运行代码的完整流程。

### 8.1 创建项目目录与环境

``` bash
mkdir demo_project
cd demo_project

conda create -n demo-project python=3.11
conda activate demo-project
conda install requests numpy
```

### 8.2 编写 Python 文件

新建 `hello.py`，写入：

``` python
import sys
import requests
import numpy as np

print("Python:", sys.version)
print("Requests:", requests.__version__)
print("NumPy:", np.__version__)
```

### 8.3 运行程序

``` bash
python hello.py
```

### 8.4 确认使用的解释器

``` bash
python -c "import sys; print(sys.executable)"
```

输出路径应指向当前 Conda 环境。macOS/Linux 的路径通常类似
`~/miniconda3/envs/demo-project/bin/python`；Windows 通常类似
`...\envs\demo-project\python.exe`。具体位置以本机安装目录为准。

## 9. 导出和复现环境

环境文件可以帮助团队协作、换电脑或重新搭建项目。

### 9.1 导出环境文件

在项目环境激活状态下执行：

``` bash
conda env export --from-history > environment.yml
```

该文件主要记录显式安装的依赖，通常更适合跨平台分享。

如果希望记录当前解析出的更多依赖信息，可以执行：

``` bash
conda env export > environment.yml
```

导出文件可能包含本机路径等信息，分享前请检查。

### 9.2 从 environment.yml 创建环境

``` bash
conda env create -f environment.yml
```

创建后，使用文件中定义的环境名激活：

``` bash
conda activate 环境名
```

如果文件使用较新 Conda 版本支持的导出格式，也可以参考官方文档使用
`conda export`。不同 Conda 版本支持的参数可能有差异。

### 9.3 更新已有环境

``` bash
conda env update -f environment.yml --prune
```

`--prune` 会移除环境中不再需要的依赖，执行前请确认文件内容正确。

## 10. JupyterLab（可选）

在项目环境中安装 JupyterLab：

``` bash
conda activate myproject
conda install jupyterlab
jupyter lab
```

命令通常会在浏览器打开 JupyterLab。结束服务时，在启动它的终端按
`Ctrl+C`，并按提示确认。

## 11. 常见问题排查

### 11.1 提示 `conda: command not found` 或"不是内部或外部命令"

-   先关闭并重新打开终端，确认使用的是安装 Conda 的同一用户账户。
-   Windows 可先使用安装器提供的 Anaconda Prompt / Miniforge Prompt。
-   macOS/Linux 可检查安装是否完成，并根据当前 Shell 执行
    `conda init zsh` 或 `conda init bash`，然后重新打开终端。
-   不要随意手动覆盖系统 `PATH`。

### 11.2 激活环境失败

``` bash
conda init
```

然后关闭并重新打开终端，再执行：

``` bash
conda activate myproject
```

如果使用非默认 Shell，请按实际 Shell 选择初始化方式。

### 11.3 下载慢或连接失败

先检查网络、代理、系统时间和官方渠道状态。只有在明确知道来源可信且符合组织策略时才更换镜像源；不要复制来源不明的配置命令。

### 11.4 依赖冲突或 `Solving environment` 很久

-   创建环境时尽量一次列出核心依赖和 Python 版本。
-   避免在同一环境中混合过多渠道。
-   检查是否要求互相不兼容的版本。
-   必要时新建干净环境验证。
-   可查看
    `conda create --help`，了解当前版本支持的求解器选项；不要在未理解影响时盲目更换求解器或删除配置。

### 11.5 Python 版本和运行的解释器不一致

``` bash
conda activate myproject

# macOS / Linux
which python

# Windows
where python

# 通用检查方式
python -c "import sys; print(sys.executable)"
```

VS Code、PyCharm 等编辑器也需要选择正确的 Conda
环境解释器。终端已激活环境，并不代表编辑器一定使用同一个解释器。

## 12. 推荐的项目目录与日常习惯

一种简单的项目结构：

``` text
demo_project/
├── environment.yml
├── hello.py
├── requirements.txt   # 仅在确实使用 pip 依赖时维护
└── README.md
```

推荐习惯：

-   每个项目建立自己的环境，避免把所有依赖都装到 `base`。
-   项目开始时确定 Python 版本和主要依赖。
-   修改依赖后及时更新 `environment.yml` 或 `requirements.txt`。
-   遇到重大升级前导出环境文件或克隆环境。
-   运行程序前确认环境已激活，或明确指定正确的解释器。
-   不要将 API 密钥、密码等秘密写入公开的环境文件或代码仓库。

## 13. 常用命令速查表

  目的           命令
  -------------- -----------------------------------------------------
  查看版本       `conda --version`
  查看信息       `conda info`
  查看环境       `conda env list`
  创建环境       `conda create -n myenv python=3.11`
  激活环境       `conda activate myenv`
  退出环境       `conda deactivate`
  安装包         `conda install 包名`
  安装指定版本   `conda install "包名=版本号"`
  查看包         `conda list`
  搜索包         `conda search 包名`
  更新包         `conda update 包名`
  卸载包         `conda remove 包名`
  克隆环境       `conda create -n 新环境名 --clone 原环境名`
  导出环境       `conda env export --from-history > environment.yml`
  从文件创建     `conda env create -f environment.yml`
  删除环境       `conda env remove -n myenv`
  查看帮助       `conda 命令 --help`

## 14. 官方资料

1.  Conda
    入门指南：<https://docs.conda.io/projects/conda/en/stable/user-guide/getting-started.html>
2.  Conda
    安装指南：<https://docs.conda.io/projects/conda/en/stable/user-guide/install/index.html>
3.  环境管理：<https://docs.conda.io/projects/conda/en/stable/user-guide/tasks/manage-environments.html>
4.  命令参考：<https://docs.conda.io/projects/conda/en/stable/commands/index.html>
5.  Miniforge 下载：<https://conda-forge.org/download/>

------------------------------------------------------------------------

## 15. 最后记住这条日常工作流

``` bash
# 1. 创建项目环境
conda create -n 项目名 python=3.13

# 2. 激活环境
conda activate 项目名

# 3. 安装需要的包
conda install 需要的包

# 4. 运行 Python 程序
python 你的脚本.py

# 5. 导出环境依赖
conda env export --from-history > environment.yml

# 6.安装依赖
pip install -r requirements.txt

python -m pip install -r requirements.txt(当前环境的pip，不是全局的pip)     
```

**核心原则：一个项目一个环境；先确认环境，再安装依赖；通过环境文件记录项目需要的依赖。**

具体包的可用版本、命令参数和服务条款可能随时间变化，遇到差异时以官方文档为准。
