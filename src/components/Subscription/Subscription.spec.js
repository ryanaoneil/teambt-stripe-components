import React from 'react';

import * as RTL from '@testing-library/react';

import Subscription from './Subscription';



const PLACEHOLDER_IMAGE = "https://firebasestorage.googleapis.com/v0/b/bloomtrac.appspot.com/o/placeholder-img.jpg?alt=media&token=bc0920f1-79f9-4b7c-bf72-429671a2d95e";





describe('Subscription Test', () => {

    test('render', () => {

        RTL.render(<Subscription image={PLACEHOLDER_IMAGE} subscriptionSummary={() => <div></div>} toggled={true} />)

    })

})