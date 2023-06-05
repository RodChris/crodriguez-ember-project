import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { set } from '@ember/object';

export default class DogsNewController extends Controller {
    @service dogs;

    @tracked newDog = this.getNewDog();

    getNewDog() {
        return {
            id: this.getNextDogId(),
            name: '',
            breed: '',
            owner: '',
            size: '',
            description: '',
            meals: {
                breakfast: '',
                dinner: ''
            },
            activities: ['']
        };
    }

    getNextDogId() {
        // Find the maximum current id
        let maxId = Math.max(...this.dogs.dogs.map(dog => Number(dog.id)));
        // Return the next available id
        return (maxId + 1).toString();
    }

    @action
    resetForm() {
        this.newDog = {
            name: '',
            breed: '',
            owner: '',
            size: '',
            description: '',
            meals: {
                breakfast: '',
                dinner: ''
            },
            activities: ['']
        };
        // Clear the radio button selection
        let radioButtons = document.getElementsByName('size');
        for (let i = 0; i < radioButtons.length; i++) {
            radioButtons[i].checked = false;
        }
    }

    @action
    updateValue(field, event) {
        this.newDog[field] = event.target.value;
    }

    @action
    updateMealValue(meal, event) {
        this.newDog.meals[meal] = event.target.value;
    }

    @action
    updateActivityValue(index, event) {
        let activities = [...this.newDog.activities];
        activities[index] = event.target.value;
        this.newDog.activities = activities;
    }

    @action
    addActivity() {
        let currentActivities = Array.isArray(this.newDog.activities) ? this.newDog.activities : [];
        let activities = [...currentActivities, ''];
        set(this.newDog, 'activities', activities);
    }

    @action
    removeActivity(index) {
        let currentActivities = [...this.newDog.activities];
        currentActivities.splice(index, 1);
        set(this.newDog, 'activities', currentActivities);
    }

    @action
    addDog(event) {
        event.preventDefault();
        this.dogs.addDog(this.newDog);

        // Reset the form
        this.resetForm();

        this.transitionToRoute('dogs');
    }
}
