# Design System

[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-blue.svg)](https://tailwindcss.com/)
[![Storybook](https://img.shields.io/badge/Storybook-7.6-pink.svg)](https://storybook.js.org/)

モダンでスケーラブルなデザインシステム。TypeScript + React + Tailwind CSS + shadcn/ui をベースに、チーム開発と OSS 公開を想定した再利用可能なUIコンポーネントライブラリです。

## ✨ 特徴

- 🎨 **デザイントークン駆動**: Figma から JSON でエクスポート可能
- 🧩 **shadcn/ui ベース**: アクセシビリティとカスタマイズ性を両立
- 🌈 **テーマ切り替え**: CSS変数ベースの動的テーマシステム
- 📚 **Storybook**: 美しいドキュメントとコンポーネントカタログ
- ⚡ **高速ビルド**: Turborepo + tsup による最適化
- 🔒 **型安全**: 完全な TypeScript サポート

## 🚀 クイックスタート

### 必要環境

- Node.js 18+
- pnpm 8+

### インストール & 起動

```bash
# 依存関係のインストール
pnpm install

# Storybook を開発モードで起動
pnpm storybook

# 全パッケージのビルド
pnpm build
```

Storybook は `http://localhost:6006` で起動します。

## 📦 パッケージ構成

```
design-system/
├── packages/
│   ├── tokens/           # デザイントークン
│   │   ├── tokens/       # JSON形式のトークン定義
│   │   └── src/          # TypeScript型定義とヘルパー
│   └── ui/               # UIコンポーネント
│       ├── src/
│       │   ├── components/  # React コンポーネント
│       │   ├── styles/      # CSS・テーマ定義
│       │   └── lib/         # ユーティリティ
│       └── tailwind.config.js
└── apps/
    └── storybook/        # Storybook アプリ
```

## 🎨 コンポーネントの使い方

### パッケージのインストール

```bash
npm install @company/ui @company/tokens
```

### 基本的な使用例

```tsx
import { Button, Input, ThemeProvider } from '@company/ui'
import '@company/ui/dist/index.css'

function App() {
  return (
    <ThemeProvider defaultTheme="default">
      <div className="p-8">
        <Button variant="default" size="lg">
          Click me!
        </Button>
        <Input placeholder="Enter text..." />
      </div>
    </ThemeProvider>
  )
}
```

### テーマ切り替え

```tsx
import { useTheme } from '@company/ui'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <Button 
      onClick={() => setTheme(theme === 'default' ? 'boxing' : 'default')}
    >
      Switch to {theme === 'default' ? 'Boxing' : 'Default'} Theme
    </Button>
  )
}
```

### 利用可能なコンポーネント

- **Button**: 6つのバリアント（default, destructive, outline, secondary, ghost, link）
- **Input**: 各種input要素に対応
- **ThemeProvider**: テーマ管理コンテキスト

## 🎯 デザイントークンの使い方

### JavaScript/TypeScript

```tsx
import { tokens, defaultTheme, boxingTheme } from '@company/tokens'

// 全トークンにアクセス
console.log(tokens.colors.default.primary[500]) // "#0ea5e9"

// テーマ別トークン
const theme = defaultTheme
console.log(theme.colors.primary[500])
```

### CSS変数

```css
/* グローバルで利用可能な CSS 変数 */
.my-component {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  border-radius: var(--radius);
}
```

### Tailwind CSS

```tsx
// トークンと連携したTailwindクラス
<div className="bg-primary text-primary-foreground rounded-md">
  Content
</div>
```

## 🌈 テーマシステム

### デフォルトテーマ
- 🔵 **色調**: クリーンなブルー系
- 📏 **デザイン**: 丸みのあるモダンなSaaSスタイル
- 🔤 **タイポグラフィ**: システムフォント

### ボクシングテーマ
- 🥊 **色調**: ダークで力強い赤・オレンジ系
- 📐 **デザイン**: 角ばった3Dエフェクト
- 💪 **タイポグラフィ**: Impact系の太字フォント

## 🛠 開発スクリプト

```bash
# 開発
pnpm dev                    # 全パッケージを監視モードでビルド
pnpm storybook             # Storybook 起動

# ビルド
pnpm build                 # 全パッケージビルド
pnpm build --filter="@company/*"  # company パッケージのみビルド

# 品質チェック
pnpm type-check           # TypeScript型チェック
pnpm lint                 # ESLint実行

# パッケージ管理
pnpm clean                # ビルド成果物削除
```

## 📤 パッケージの公開

### NPM公開

```bash
# パッケージをビルド
pnpm build

# NPMに公開（要権限）
pnpm changeset            # バージョン管理
pnpm changeset version    # バージョン更新
pnpm publish --recursive  # 公開
```

### プライベートレジストリ

```bash
# .npmrc でレジストリを指定
echo "@company:registry=https://your-private-registry.com/" >> .npmrc
```

## 🏗 アーキテクチャ

### モノレポ構成
- **pnpm workspaces**: 依存関係の効率的管理
- **Turborepo**: 高速な並列ビルドとキャッシュ
- **tsup**: 軽量で高速なTypeScriptビルド

### デザイントークン
- **JSON形式**: プラットフォーム非依存
- **TypeScript型**: 完全な型安全性
- **CSS変数**: ランタイムテーマ切り替え

### UIコンポーネント
- **shadcn/ui**: アクセシビリティ基盤
- **Radix UI**: 堅牢なプリミティブ
- **Tailwind CSS**: ユーティリティファースト

## 🤝 コントリビューション

### 開発の流れ

1. **イシューの確認**: 既存のissueを確認するか、新しいissueを作成
2. **ブランチ作成**: `git checkout -b feature/your-feature-name`
3. **開発**: コンポーネントやトークンを実装
4. **テスト**: Storybookで動作確認
5. **プルリクエスト**: 変更内容を説明してPR作成

### コーディング規約

- **TypeScript**: 厳密な型定義を心がける
- **コンポーネント**: `forwardRef` でref対応
- **CSS**: Tailwindクラスを優先、必要に応じてCSS変数
- **命名**: kebab-caseファイル、PascalCaseコンポーネント

### コミットメッセージ

```bash
feat: ボタンコンポーネントにサイズバリアント追加
fix: テーマ切り替え時のCSS変数の問題を修正
docs: READMEにコンポーネント使用例を追加
```

## 📄 ライセンス

MIT License - 詳細は [LICENSE](LICENSE) ファイルを参照してください。

## 🙋‍♂️ サポート

- **バグ報告**: [GitHub Issues](https://github.com/your-org/design-system/issues)
- **機能リクエスト**: [GitHub Discussions](https://github.com/your-org/design-system/discussions)
- **質問**: [Discord](https://discord.gg/your-server) または issue でお気軽に

---

**Built with ❤️ by [Your Team](https://your-team.com)**