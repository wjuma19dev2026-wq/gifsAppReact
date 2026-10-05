import { describe, expect, it, test } from "vitest";
import { render } from '@testing-library/react';

import { GiftApp } from "./GiftApp";


describe('GiftApp', () => {

  it('Debe renderizar el componente correctamente', () => {

    const { container } = render(<GiftApp />)
    expect(container).toMatchSnapshot()

  })
})