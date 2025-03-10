import styled, { css, CSSProperties } from "styled-components"
import { camelToKebabCase } from "./utils/text"

type ContainerProps = {
  display?: string
  justifyContent?: string
  alignItems?: string
  width?: string
  minHeight?: string
} & Partial<Record<keyof CSSProperties, string>>

type TextProps = Partial<Record<keyof CSSProperties, string>>

export const Container = styled.div<ContainerProps>`
${({ display = "flex", justifyContent = "center", alignContent = "center", minHeight = "100vh", width = "100%", ...rest }) => css`
    display: ${display};
    justify-content: ${justifyContent};
    align-items: ${alignContent};
    width: ${width};
    min-height: ${minHeight};
    ${Object.entries(rest)
      .filter(([, value]) => value !== undefined || value !== "")
      .map(([key, value]) => `${camelToKebabCase(key)}: ${value};`)
      .join("\n")}
  `}
`

export const Text = styled.p<TextProps>`
  ${({ ...rest }) => css`
    ${Object.entries(rest)
      .filter(([, value]) => value !== undefined || value !== "")
      .map(([key, value]) => `${camelToKebabCase(key)}: ${value};`)
      .join("\n")}
  `}
`
