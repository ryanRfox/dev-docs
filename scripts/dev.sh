#!/bin/bash

# Radius Documentation - Clean Rebuild & Dev Server
#
# This script performs a complete clean rebuild of the documentation and starts the dev server.
# Removes previous build artifacts, reinstalls dependencies if needed, and launches dev server.
#
# Usage: pnpm run clean-dev
# Or directly: ./scripts/dev.sh

set -e

echo "🧹 Cleaning previous builds..."
rm -rf docs/dist
rm -rf node_modules/.vite

echo "🔨 Rebuilding Vocs..."
pnpm build > /dev/null 2>&1

echo "✅ Build complete!"
echo ""
echo "🚀 Starting development server..."
echo ""
echo "📖 Documentation will be available at: http://localhost:5173"
echo "🛑 Press Ctrl+C to stop the server"
echo ""

pnpm run dev
