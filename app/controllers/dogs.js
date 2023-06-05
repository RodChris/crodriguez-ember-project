import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DogsController extends Controller {
    @service dogs;    

    @tracked filter = '';
    @tracked sortOrder = '';
    @tracked breedFilter = '';

    get filteredDogs() {
        let dogs;

        if (!this.filter) {
            dogs = this.dogs.dogs;
        } else {
            const filterLower = this.filter.toLowerCase();
            dogs = this.dogs.dogs.filter((dog) =>
                dog.name.toLowerCase().includes(filterLower)
            );
        }

        if (this.breedFilter) {
            dogs = dogs.filter((dog) =>
                dog.breed === this.breedFilter
            );
        }

        switch (this.sortOrder) {
            case 'name':
                dogs = dogs.slice().sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'owner':
                dogs = dogs.slice().sort((a, b) => a.owner.localeCompare(b.owner));
                break;
            case 'breed':
                dogs = dogs.slice().sort((a, b) => a.breed.localeCompare(b.breed));
                break;
            default:
                break;
        }

        return dogs;
    }  

    get uniqueBreeds() {
        let breeds = new Set();
        this.dogs.dogs.forEach(dog => {
            breeds.add(dog.breed);
        });
        return [...breeds];
    }

    @action
    updateFilter(event) {
        this.filter = event.target.value;
    }

    @action
    updateSortOrder(event) {
        this.sortOrder = event.target.value;
    }

    @action
    updateBreedFilter(event) {
        this.breedFilter = event.target.value;
    }

    @action
    deleteDog(dog) {
        this.dogs.removeDog(dog);

        this.transitionToRoute('dogs');
    }
}
