import {render, fireEvent} from '@testing-library/svelte';
import Carousel from '../lib/Carousel.svelte';

describe('Carousel',()=>{
    it('a new image appear', async()=>{
        const {getByTestId} = render(Carousel);

        const initialImage=getByTestId('carousel-image');
        const nextButton=getByTestId('nextButton');
        expect(initialImage.src).toContain('./ahs1.webp');
        fireEvent.click(nextButton)

        let newImage=getByTestId('carousel-image');
        expect(newImage.src).toContain('./ahs2.webp')
        
    })
}
)