import styled, { css, CSSProperties } from "styled-components"
import { camelToKebabCase } from "./utils/TextUtils"

type TextProps = Partial<Record<keyof CSSProperties, string>>

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

export const Text = styled.p<TextProps>`
  ${({ ...rest }) => css`
    ${Object.entries(rest)
      .filter(([, value]) => value !== undefined || value !== "") // กรองค่า undefined ออก
      .map(([key, value]) => `${camelToKebabCase(key)}: ${value};`)
      .join("\n")}
  `}
`
