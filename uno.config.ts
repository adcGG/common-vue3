import { defineConfig, presetUno, presetAttributify  } from "unocss";
// import presetAttributify from '@unocss/preset-attributify'

import type { Rule } from "unocss";
const unocssRules: Rule<{}>[] = [
  [/^m-(\d+)$/, ([, d]: any) => ({ margin: `${d}px` })],
  [
    /^mx-(\d+)$/,
    ([, d]: any) => ({ "margin-left": `${d}px`, "margin-right": `${d}px` }),
  ],
  [
    /^my-(\d+)$/,
    ([, d]: any) => ({ "margin-top": `${d}px`, "margin-bottom": `${d}px` }),
  ],
  [/^mt-(\d+)$/, ([, d]: any) => ({ "margin-top": `${d}px` })],
  [/^mb-(\d+)$/, ([, d]: any) => ({ "margin-bottom": `${d}px` })],
  [/^ml-(\d+)$/, ([, d]: any) => ({ "margin-left": `${d}px` })],
  [/^mr-(\d+)$/, ([, d]: any) => ({ "margin-right": `${d}px` })],
  [/^p-(\d+)$/, ([, d]: any) => ({ padding: `${d}px` })],
  [
    /^px-(\d+)$/,
    ([, d]: any) => ({ "padding-left": `${d}px`, "padding-right": `${d}px` }),
  ],
  [
    /^py-(\d+)$/,
    ([, d]: any) => ({
      "padding-top": `${d}px`,
      "padding-bottom": `${d}px`,
    }),
  ],
  [/^pt-(\d+)$/, ([, d]: any) => ({ "padding-top": `${d}px` })],
  [/^pb-(\d+)$/, ([, d]: any) => ({ "padding-bottom": `${d}px` })],
  [/^pl-(\d+)$/, ([, d]: any) => ({ "padding-left": `${d}px` })],
  [/^pr-(\d+)$/, ([, d]: any) => ({ "padding-right": `${d}px` })],
  [/^w-(\d+)$/, ([, d]: any) => ({ width: `${d}px` })],
  [/^h-(\d+)$/, ([, d]: any) => ({ height: `${d}px` })],
  [/^leading-(\d+)$/, ([, d]: any) => ({ "line-height": `${d}px` })],
  [/^lead-(\d+)$/, ([, d]: any) => ({ "line-height": `${d}` })],
  [/^flex-(\d+)$/, ([, d]: any) => ({ flex: `${d}` })],
  [/^gap-(\d+)$/, ([, d]: any) => ({ gap: `${d}px` })],
  [/^text-(\d+)$/, ([, d]: any) => ({ "font-size": `${d}px` })],
  [
    /^rounded-t-(\d+)$/,
    ([, d]: any) => ({
      "border-top-left-radius": `${d}px`,
      "border-top-right-radius": `${d}px`,
    }),
  ],
  [
    /^rounded-b-(\d+)$/,
    ([, d]: any) => ({
      "border-bottom-left-radius": `${d}px`,
      "border-bottom-right-radius": `${d}px`,
    }),
  ],
  [
    /^rounded-l-(\d+)$/,
    ([, d]: any) => ({
      "border-top-left-radius": `${d}px`,
      "border-bottom-left-radius": `${d}px`,
    }),
  ],
  [
    /^rounded-r-(\d+)$/,
    ([, d]: any) => ({
      "border-top-right-radius": `${d}px`,
      "border-bottom-right-radius": `${d}px`,
    }),
  ],
  [/^rounded-(\d+)$/, ([, d]: any) => ({ "border-radius": `${d}px` })],
  [/^size-(\d+)$/, ([, d]: any) => ({ width: `${d}px`, height: `${d}px` })],
  [/^t-(\d+)$/, ([, d]: any) => ({ top: `${d}px` })],
  [/^b-(\d+)$/, ([, d]: any) => ({ bottom: `${d}px` })],
  [/^l-(\d+)$/, ([, d]: any) => ({ left: `${d}px` })],
  [/^r-(\d+)$/, ([, d]: any) => ({ right: `${d}px` })],
  [/^border-color-(\d+)$/, ([, d]: any) => ({ "border-color": `#${d}` })],
];

const unocssShortcuts = [
  { "flex-align": "flex items-center" },
  { "flex-center": "flex items-center justify-center" },
  { full: "w-full h-full" },
  { "dashed-border": "border-dashed border" },
  { "solid-border": "border-solid border" },
];

export { unocssRules, unocssShortcuts };

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
  ],
})