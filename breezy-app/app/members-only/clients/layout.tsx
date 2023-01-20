import { jsx } from "@emotion/react"
import React from "react"

export default function ClientLayout ({children}: jsx.element) {
  return (
    <>
    <section>
    {children}

    </section>
    </>
  )
}