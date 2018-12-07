const messages = {
  facial: {
    title: 'facial recognition setup',
    texts:
      [
        {
          id: '1',
          bold: 'Good Lighting',
          body: 'Make sure you are in a well lit area and both ears uncovered',
        },
        {
          id: '2',
          bold: 'Look Straight',
          body: 'Hold your phone on eye level and look straight to the camera',
        },
        {
          id: '3',
          bold: 'Hold Your Phone Close',
          body: 'Hold your phone until your face fully filled the placeholder',
        },

      ],
  },
  voice: {
    title: 'voice recognition setup',
    texts:
      [
        {
          id: '1',
          bold: 'Quiet Place',
          body: 'Make sure you are in a quiet area and minimal noise.',
        },
        {
          id: '2',
          bold: 'Speak Confidently',
          body: 'Speak with your usual talking volume.',
        },
        {
          id: '3',
          bold: 'Read and Repeat',
          body: 'Read the text on screen, following the instruction',
        },
      ],
  },
  picture: {
    title: 'picture password setup',
    texts:
      [
        {
          id: '1',
          bold: 'Choose 5 Images',
          body: 'Select 5 random ones from array of images provided. Try to connect them with a story.',
        },
        {
          id: '2',
          bold: 'Retrace your Images',
          body: 'We will give you an array of images again and the starting image and ending image, and trace your 5 images however you like as long as they are in order',
        },
      ],
  },
  secure: {
    title: 'securing your device',
    texts:
      [
        {
          id: '1',
          bold: 'Starting',
          body: 'Choose any circle as starting circle, except the black ones.',
        },
        {
          id: '2',
          bold: 'Create',
          body: 'Create your preferred pattern by connecting at minimum 10 circles',
        },
        {
          id: '3',
          bold: 'Level Up',
          body: 'Move to the next layer by going to the black circle and repeating step 2. You can create at max 3 layers',
        },
        {
          id: '4',
          bold: 'Try',
          body: 'Try your created pattern',
        },
      ],
  },
};

export default messages;
