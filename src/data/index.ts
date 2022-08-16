import { ref } from 'vue';

import { AdsCardType } from '@/types/index';

export const adsCardArray = ref<AdsCardType[]>([
  {
    id: 1,
    image:
      'https://cdn.pixabay.com/photo/2016/10/13/22/30/tesla-1738969_960_720.jpg',
    name: 'Tesla',
    description: `Keep close to Nature's heart... and break clear away, once in awhile,
    and climb a mountain or spend a week in the woods. Wash your spirit
    clean.`,
    timestamp: '1 day ago',
  },
  {
    id: 2,
    image:
      'https://cdn.pixabay.com/photo/2017/09/04/00/08/youtube-2712573_960_720.png',
    name: 'Youtube',
    description: `Keep close to Nature's heart...`,
    timestamp: '1hr ago',
  },
  {
    id: 3,
    image:
      'https://cdn.pixabay.com/photo/2016/04/28/18/39/gears-1359436_960_720.png',
    name: 'Google',
    description: `SEO is now better with google, right?`,
    timestamp: '2hrs ago',
  },
  {
    id: 4,
    image:
      'https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636_960_720.png',
    name: 'Apple',
    description: `At Apple, we give you the best.`,
    timestamp: '1 day ago',
  },
  {
    id: 5,
    image:
      'https://cdn.pixabay.com/photo/2016/12/10/16/57/shoes-1897708_960_720.jpg',
    name: 'Bode Wears',
    description: `Wears at affordable prices. we have the best shoes.`,
    timestamp: '1 day ago',
  },
  {
    id: 6,
    image:
      'https://cdn.pixabay.com/photo/2017/04/26/16/06/mobile-2262928_960_720.jpg',
    name: 'Samsung',
    description: `Keep close to Nature's heart... and break clear away, once in awhile,
    and climb a mountain or spend a week in the woods. Wash your spirit
    clean.`,
    timestamp: '1 day ago',
  },
]);
