#!/bin/bash

# setup-graphify.sh - Automated Graphify setup for Antigravity
set -e

echo "🚀 Starting Graphify setup..."

# 1. Check for uv (high-performance Python manager)
# We use uv because it handles the Python 3.10+ requirement automatically
if ! command -v uv &> /dev/null && [ ! -f "$HOME/Library/Python/3.9/bin/uv" ]; then
    echo "📦 Installing uv to manage Python dependencies..."
    pip3 install uv --user
fi

# Set uv path (handling common Mac user-install paths)
if [ -f "$HOME/Library/Python/3.9/bin/uv" ]; then
    UV_PATH="$HOME/Library/Python/3.9/bin/uv"
elif [ -f "$HOME/Library/Python/3.13/bin/uv" ]; then
    UV_PATH="$HOME/Library/Python/3.13/bin/uv"
else
    UV_PATH="uv"
fi

# 2. Install/Update graphifyy tool
echo "📥 Installing graphifyy..."
$UV_PATH tool install graphifyy --force

# Set graphify path
GRAPHIFY_PATH="$HOME/.local/bin/graphify"

# 3. Initialize Antigravity skills and rules
# This creates .agents/rules and .agents/workflows in the current project
echo "🔧 Configuring Antigravity integration..."
$GRAPHIFY_PATH antigravity install

# 4. Install Git Hooks for auto-updates on commit/checkout
if [ -d ".git" ]; then
    echo "🪝 Installing git hooks in $(pwd)..."
    $GRAPHIFY_PATH hook install
else
    echo "ℹ️ Not a git repository, skipping git hooks."
fi

# 5. Build initial knowledge graph
echo "📊 Building initial knowledge graph..."
$GRAPHIFY_PATH update .

echo ""
echo "✅ Graphify setup complete for: $(pwd)"
echo "   - Knowledge Graph: graphify-out/"
echo "   - AI Rules: .agents/rules/graphify.md"
echo "   - Git Hooks: Active (post-commit/post-checkout)"
echo ""
echo "Every LLM can now understand this project structure."
