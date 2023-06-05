import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class DogsService extends Service {
    constructor() {
        super(...arguments);
        this.getDogBreedImage = this.getDogBreedImage.bind(this);
    }

    @tracked dogs = [
        {
            id: '1',
            name: 'Saul',
            breed: 'Lab',
            owner: 'Dave',
            size: 'LG',
            description: 'An energetic lab that loves to play',
            meals: {
                breakfast: 'acorns',
                dinner: 'kibble',
            },
            activities: ['walks', 'belly rubs', 'naps'],
        },
        {
            id: '2',
            name: 'Goldie',
            breed: 'Lab',
            owner: 'Dave',
            size: 'LG',
            description: 'Office mommy dog',
            meals: {
                breakfast: 'kibble',
                dinner: 'wet can food',
            },
            activities: ['walks', 'belly rubs', 'dog park'],
        },
        {
            id: '3',
            name: 'Ashton',
            breed: 'Husky',
            owner: 'Kyle',
            size: 'LG',
            description: 'A fluffy terrier mix who runs on treats',
            meals: {
                breakfast: 'Kibble',
                dinner: 'Steak',
            },
            activities: ['Office visits', 'cold tub', 'walks'],
        },
        {
            id: '4',
            name: 'Maxie',
            breed: 'Doberman',
            owner: 'Steve',
            size: 'LG',
            description: 'Spunky pup, who loves to play',
            meals: {
                breakfast: 'raw meat',
                dinner: 'more raw meat',
            },
            activities: ['gaurding the office', 'playing'],
        },
        {
            id: '5',
            name: 'Taro',
            breed: 'Great Pyrenees',
            owner: 'Sara',
            size: 'XL',
            description: 'A great pyrenees mix often confused with a horse',
            meals: {
                breakfast: 'kibble',
                dinner: 'kibble',
            },
            activities: ['walks', 'belly rubs', 'dog park'],
        },
        {
            id: '6',
            name: 'Gabby',
            breed: 'Pit Bull',
            owner: 'Dan',
            size: 'MD',
            description: 'A tutu-flaunting American bulldog/pitbull mix',
            meals: {
                breakfast: 'wet food',
                dinner: 'kibble',
            },
            activities: ['playing dress up', 'belly rubs', 'walks'],
        },
        {
            id: '7',
            name: 'Percy',
            breed: 'Husky',
            owner: 'Monica',
            size: 'LG',
            description: 'A wolf-sized pup with piercing blue eyes',
            meals: {
                breakfast: 'kibble',
                dinner: 'wet food',
            },
            activities: ['naps'],
        },
        {
            id: '8',
            name: 'Benny',
            breed: 'Hound',
            owner: 'Brandon',
            size: 'MD',
            description: 'A belly-rub loving hound-mix',
            meals: {
                breakfast: 'Merrick',
                dinner: 'Merrick',
            },
            activities: ['belly rubs', 'head pats'],
        },
        {
            id: '9',
            name: 'Watson',
            breed: 'Golden Doodle',
            owner: 'Brandon',
            size: 'MD',
            description: 'Fancy dog with a mean streak',
            meals: {
                breakfast: 'breakfast bars',
                dinner: 'socks',
            },
            activities: ['sleeping', 'eating laundry', 'playing with kids'],
        },
        {
            id: '10',
            name: 'Baxter',
            breed: 'Chihuahua',
            owner: 'Skip',
            size: 'XS',
            description: 'The eldest, wisest, and tiniest dog of the office',
            meals: {
                breakfast: 'kibble',
                dinner: 'steak',
            },
            activities: ['leadership', 'naps'],
        },
        {
            id: '11',
            name: 'Vyla',
            breed: 'Poodle',
            owner: 'Skip',
            size: 'SM',
            description: 'The resident toy and bone hoarder',
            meals: {
                breakfast: 'pancakes',
                dinner: 'kibble',
            },
            activities: ['leadership', 'gaurding the office'],
        },
    ];

    @tracked breedImages = [
        { breed: 'Lab', url: '/img/lab.jpg' },
        { breed: 'Husky', url: '/img/husky.jpg' },
        { breed: 'Doberman', url: '/img/doberman.jpg' },
        { breed: 'Great Pyrenees', url: '/img/great-pyrenees.jpg' },
        { breed: 'Pit Bull', url: '/img/pitbull.jpg' },
        { breed: 'Hound', url: '/img/hound.jpg' },
        { breed: 'Golden Doodle', url: '/img/goldendoodle.jpg' },
        { breed: 'Chihuahua', url: '/img/chihuahua.jpg' },
        { breed: 'Poodle', url: '/img/poodle.jpg' },
    ];

    findDog(id) {
        return this.dogs.find(dog => dog.id === id);
      }

    getDogBreedImage(breed) {
        const breedImage = this.breedImages.find(bi => bi.breed.replaceAll(" ", "").toLowerCase() === breed.replaceAll(" ", "").toLowerCase());
        return breedImage ? breedImage.url : '/img/dogplace-holder.jpg';
    }

    addDog(dog) {
        this.dogs = [dog, ...this.dogs];
    }

    removeDog(dog) {
        this.dogs = this.dogs.filter(d => d !== dog);
    }
}
