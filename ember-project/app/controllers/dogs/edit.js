import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default class DogsEditController extends Controller {
    @service dogs;

    @tracked tempDog = null;

    @action
    updateValue(field, event) {
        this.tempDog[field] = event.target.value;
    }

    @action
    updateMealValue(meal, event) {
        this.tempDog.meals[meal] = event.target.value;
    }

    @action
    updateActivityValue(index, event) {
        let activities = [...this.tempDog.activities];
        activities[index] = event.target.value;
        set(this.tempDog, 'activities', activities);
    }

    @action
    addActivity() {
        let currentActivities = Array.isArray(this.tempDog.activities) ? this.tempDog.activities : [];
        let activities = [...currentActivities, ''];
        set(this.tempDog, 'activities', activities);
    }

    @action
    removeActivity(index) {
        let currentActivities = [...this.tempDog.activities];
        currentActivities.splice(index, 1);
        set(this.tempDog, 'activities', currentActivities);
    }

    @action
    saveChanges(event) {
        event.preventDefault();

        let originalDog = this.dogs.dogs.find(dog => dog.id === this.model.id);
        if (originalDog) {
            for (let prop in this.tempDog) {
                set(originalDog, prop, this.tempDog[prop]);
            }
        }

        this.transitionToRoute('dogs');
    }
}
