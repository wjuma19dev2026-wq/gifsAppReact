import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Heading } from "./Heading";



describe('Heading', () => {


  // it('Debe renderizar el titulo correctamente', () => {
  //   render(<Heading titulo="buscador de gifs" contenido="el mejor buscador de gifs" />)
  //   expect(screen.getByText('buscador de gifs')).toBeDefined()
  // })

  it('Debe renderizar la descripccion correctamente', () => {
    const description = 'el mejor buscador de gifs' 


    render(<Heading titulo="buscador de gifs" contenido={description} />)
  })

})