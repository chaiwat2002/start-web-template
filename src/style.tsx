import styled, { css, CSSProperties } from "styled-components"
import { camelToKebabCase } from "./utils/text"

type ContainerProps = {
  display?: string
  justifyContent?: string
  alignItems?: string
  height?: string
  width?: string
} & Partial<Record<keyof CSSProperties, string>>

type TextProps = Partial<Record<keyof CSSProperties, string>>

export const Container = styled.div<ContainerProps>`
${({ display = "flex", justifyContent = "center", alignContent = "center", height = "100vh", width = "100%", ...rest }) => css`
    display: ${display};
    justify-content: ${justifyContent};
    align-items: ${alignContent};
    height: ${height};
    width: ${width};
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
