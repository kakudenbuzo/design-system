import type { Meta, StoryObj } from '@storybook/react'
import { tokens } from '@company/tokens'

const TokensShowcase = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Colors</h2>
        <div className="space-y-6">
          {Object.entries(tokens.colors.default).map(([colorName, colorScale]) => (
            <div key={colorName}>
              <h3 className="text-lg font-semibold mb-2 capitalize">{colorName}</h3>
              <div className="flex flex-wrap gap-2">
                {typeof colorScale === 'object' && colorScale !== null && (
                  Object.entries(colorScale).map(([shade, color]) => (
                    <div key={shade} className="text-center">
                      <div
                        className="w-16 h-16 rounded-md border shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                      <div className="text-xs mt-1 font-mono">{shade}</div>
                      <div className="text-xs text-muted-foreground font-mono">{color}</div>
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Typography</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Font Sizes</h3>
            <div className="space-y-2">
              {Object.entries(tokens.typography.fontSize).map(([size, { value, lineHeight }]) => (
                <div key={size} className="flex items-baseline gap-4">
                  <span className="font-mono text-sm w-12">{size}</span>
                  <span style={{ fontSize: value, lineHeight }} className="flex-1">
                    The quick brown fox jumps over the lazy dog
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {value} / {lineHeight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Font Weights</h3>
            <div className="space-y-2">
              {Object.entries(tokens.typography.fontWeight).map(([weight, value]) => (
                <div key={weight} className="flex items-center gap-4">
                  <span className="font-mono text-sm w-20">{weight}</span>
                  <span style={{ fontWeight: value }} className="flex-1">
                    The quick brown fox jumps over the lazy dog
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Spacing</h2>
        <div className="grid grid-cols-6 gap-4">
          {Object.entries(tokens.layout.spacing).slice(0, 24).map(([name, value]) => (
            <div key={name} className="text-center">
              <div
                className="bg-blue-200 mx-auto mb-2"
                style={{ width: value, height: value }}
              />
              <div className="text-xs font-mono">{name}</div>
              <div className="text-xs text-muted-foreground font-mono">{value}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Border Radius</h2>
        <div className="flex flex-wrap gap-4">
          {Object.entries(tokens.layout.borderRadius).map(([name, value]) => (
            <div key={name} className="text-center">
              <div
                className="w-16 h-16 bg-blue-200 mx-auto mb-2"
                style={{ borderRadius: value }}
              />
              <div className="text-xs font-mono">{name}</div>
              <div className="text-xs text-muted-foreground font-mono">{value}</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Shadows</h2>
        <div className="grid grid-cols-3 gap-4">
          {Object.entries(tokens.layout.boxShadow).map(([name, value]) => (
            <div key={name} className="text-center">
              <div
                className="w-16 h-16 bg-white mx-auto mb-2"
                style={{ boxShadow: value }}
              />
              <div className="text-xs font-mono">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const meta = {
  title: 'Design System/Tokens',
  component: TokensShowcase,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A showcase of all design tokens including colors, typography, spacing, and more.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TokensShowcase>

export default meta
type Story = StoryObj<typeof meta>

export const All: Story = {}